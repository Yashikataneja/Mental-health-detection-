import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

nltk.download("vader_lexicon", quiet=True)

sia = SentimentIntensityAnalyzer()

def analyze_text(text):
    sentiment = sia.polarity_scores(text)
    compound_score = sentiment["compound"]

    # Emotion classification
    if compound_score <= -0.5:
        emotion = "sadness"
    elif compound_score >= 0.5:
        emotion = "positive"
    else:
        emotion = "neutral"

    text_lower = text.lower()

    cognitive_distortions = []
    distortion_keywords = {
        "overthinking": ["always", "never"],
        "self-blame": ["my fault", "blame myself"]
    }

    for label, keywords in distortion_keywords.items():
        if any(word in text_lower for word in keywords):
            cognitive_distortions.append(label)

    behavioral_signals = []
    behavior_keywords = {
        "isolation": ["alone", "isolated"],
        "withdrawal": ["don't want to talk", "avoid people"]
    }

    for label, keywords in behavior_keywords.items():
        if any(word in text_lower for word in keywords):
            behavioral_signals.append(label)

    return {
        "emotion": emotion,
        "sentiment_score": compound_score,
        "cognitive_distortions": cognitive_distortions,
        "behavioral_signals": behavioral_signals,
    }