# from fastapi import FastAPI
# from pydantic import BaseModel

# app = FastAPI()

# class TextRequest(BaseModel):
#     text: str

# @app.post("/analyze")
# async def analyze(data: TextRequest):
    
#     text = data.text

#     # Dummy ML logic (for testing)
#     risk_score = 75 if "sad" in text.lower() else 20

#     return {
#         "emotion": "sad" if risk_score > 50 else "neutral",
#         "riskScore": risk_score
#     }






from fastapi import FastAPI
from pydantic import BaseModel
import joblib

from text_analysis import analyze_text
from risk_score import calculate_risk

app = FastAPI()

model = joblib.load("mental_health_model_fast.joblib")

class TextRequest(BaseModel):
    text: str

@app.post("/analyze")
async def analyze(data: TextRequest):
    text = data.text.strip()

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

    vader_result = analyze_text(text)

    predicted_label = model.predict([text])[0]

    probabilities = model.predict_proba([text])[0]
    confidence = float(max(probabilities))

    risk_score = calculate_risk(vader_result)

    return {
        "emotion": vader_result["emotion"],
        "predicted_label": predicted_label,
        "confidence": round(confidence, 4),
        "sentiment_score": vader_result["sentiment_score"],
        "cognitive_distortions": vader_result["cognitive_distortions"],
        "behavioral_signals": vader_result["behavioral_signals"],
        "riskScore": risk_score
    }
