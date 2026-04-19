



from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

from text_analysis import analyze_text
from risk_score import calculate_risk
from train_model import clean_text, MAX_LEN

app = FastAPI()

_saved = joblib.load("mental_health_model.joblib")
_device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
_tokenizer = AutoTokenizer.from_pretrained(_saved["model_path"])
_model = AutoModelForSequenceClassification.from_pretrained(_saved["model_path"]).to(_device)
_model.eval()
_id2label = {int(k): v for k, v in _saved["id2label"].items()}


def _predict(cleaned_text: str):
    enc = _tokenizer(
        cleaned_text,
        max_length=MAX_LEN,
        padding="max_length",
        truncation=True,
        return_tensors="pt",
    )
    enc = {k: v.to(_device) for k, v in enc.items()}
    with torch.no_grad():
        logits = _model(**enc).logits[0]
    probs = torch.softmax(logits, dim=0).cpu().numpy()
    label = _id2label[int(probs.argmax())]
    return label, float(probs.max())


class TextRequest(BaseModel):
    text: str


@app.post("/analyze")
async def analyze(data: TextRequest):
    text = data.text.strip()

    # ✅ Handle empty input
    if not text:
        return {
            "emotion": "neutral",
            "predicted_label": "Normal",
            "confidence": 0.0,
            "sentiment_score": 0.0,
            "cognitive_distortions": [],
            "behavioral_signals": [],
            "riskScore": 0
        }

    # 🔥 STEP 1: CLEAN TEXT (FIXED ISSUE)
    cleaned_text = clean_text(text)

    # 🔥 STEP 2: VADER + RULE-BASED ANALYSIS
    vader_result = analyze_text(text)

    # 🔥 STEP 3: ML PREDICTION
    predicted_label, confidence = _predict(cleaned_text)

    # 🔥 STEP 4: RISK SCORE
    risk_score = calculate_risk(vader_result)

    # 🔥 FINAL RESPONSE (MATCHES DASHBOARD ✅)
    return {
        "emotion": vader_result["emotion"],
        "predicted_label": predicted_label,
        "confidence": round(confidence, 4),
        "sentiment_score": vader_result["sentiment_score"],
        "cognitive_distortions": vader_result["cognitive_distortions"],
        "behavioral_signals": vader_result["behavioral_signals"],
        "riskScore": risk_score
    }