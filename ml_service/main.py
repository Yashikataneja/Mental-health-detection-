from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class TextRequest(BaseModel):
    text: str

@app.post("/analyze")
async def analyze(data: TextRequest):
    
    text = data.text

    # Dummy ML logic (for testing)
    risk_score = 75 if "sad" in text.lower() else 20

    return {
        "emotion": "sad" if risk_score > 50 else "neutral",
        "riskScore": risk_score
    }