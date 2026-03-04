def calculate_risk(analysis):
    score = 0

    # Emotion weight
    if analysis["emotion"] == "sadness":
        score += 30
    elif analysis["emotion"] == "neutral":
        score += 10

    # Sentiment intensity weight
    sentiment_weight = abs(analysis["sentiment_score"]) * 40
    score += sentiment_weight

    # Cognitive distortions
    score += len(analysis["cognitive_distortions"]) * 15

    # Behavioral signals
    score += len(analysis["behavioral_signals"]) * 20

    return round(min(score, 100), 2)