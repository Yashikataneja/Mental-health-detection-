import re
import zipfile
from pathlib import Path

import joblib
import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer
from sklearn.metrics import accuracy_score, classification_report

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "mental_health_model.joblib"
LABELS_PATH = BASE_DIR / "mental_health_labels.joblib"
ROBERTA_PATH = BASE_DIR / "roberta_model"
MAX_LEN = 128


def clean_text(text: str) -> str:
    text = str(text).lower().strip()
    text = re.sub(r"http\S+|www\.\S+", " ", text)
    text = re.sub(r"[^a-zA-Z0-9\s'!?]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def load_model():
    """Load the pretrained RoBERTa model from local path."""
    if not ROBERTA_PATH.exists():
        raise FileNotFoundError(
            f"RoBERTa model not found at: {ROBERTA_PATH}\n"
            "Please download from Colab and extract to ml_service/roberta_model/"
        )

    print(f"Loading model from {ROBERTA_PATH}...")
    tokenizer = AutoTokenizer.from_pretrained(str(ROBERTA_PATH))
    model = AutoModelForSequenceClassification.from_pretrained(str(ROBERTA_PATH))
    model.eval()

    id2label = model.config.id2label
    label2id = model.config.label2id

    # Save joblib file for main.py
    joblib.dump(
        {
            "type": "roberta",
            "model_path": str(ROBERTA_PATH),
            "label2id": label2id,
            "id2label": id2label,
        },
        MODEL_PATH,
    )
    joblib.dump(sorted(label2id.keys()), LABELS_PATH)

    print(f"Saved model info to: {MODEL_PATH}")
    print(f"Saved labels to: {LABELS_PATH}")
    print(f"Labels: {sorted(label2id.keys())}")

    return model, tokenizer, id2label


def predict(text: str, model, tokenizer, id2label, device):
    cleaned = clean_text(text)
    enc = tokenizer(
        cleaned,
        max_length=MAX_LEN,
        padding="max_length",
        truncation=True,
        return_tensors="pt",
    ).to(device)
    with torch.no_grad():
        logits = model(**enc).logits[0]
    probs = torch.softmax(logits, dim=0).cpu().numpy()
    top3 = probs.argsort()[::-1][:3]
    pred = id2label[int(probs.argmax())]
    conf = float(probs.max())
    top_str = ", ".join(f"{id2label[i]} ({probs[i]:.2%})" for i in top3)
    return pred, conf, top_str


def main():
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"Device: {device}")

    model, tokenizer, id2label = load_model()
    model = model.to(device)

    sample_texts = [
        "I feel empty and hopeless and I do not want to talk to anyone",
        "I am nervous all the time and cannot sleep properly",
        "Today was peaceful and I feel okay",
        "I cannot stop thinking about ending my life",
        "I feel so bipolar today, up and down all the time",
    ]

    print("\nSample predictions:")
    for text in sample_texts:
        pred, conf, top_str = predict(text, model, tokenizer, id2label, device)
        print(f"- {text}\n  -> Predicted: {pred} ({conf:.2%})\n  -> Top: {top_str}")


if __name__ == "__main__":
    main()
