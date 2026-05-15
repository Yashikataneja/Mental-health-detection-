def calculate_risk(analysis):
    score = 0

    # Emotion weight
    emotion_weights = {
        "sadness": 30,
        "anxiety": 28,
        "stress": 25,
        "anger": 20,
        "neutral": 10,
        "happiness": 0,
    }
    score += emotion_weights.get(analysis["emotion"], 10)

    # Sentiment intensity weight
    sentiment_weight = abs(analysis["sentiment_score"]) * 40
    score += sentiment_weight

    # Cognitive distortions
    score += len(analysis["cognitive_distortions"]) * 15

    # Behavioral signals
    score += len(analysis["behavioral_signals"]) * 20

    return round(min(score, 100), 2)