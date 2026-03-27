# import pandas as pd
# import re
# import joblib

# from sklearn.model_selection import train_test_split
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.linear_model import LogisticRegression
# from sklearn.pipeline import Pipeline
# from sklearn.metrics import classification_report, accuracy_score

# def clean_text(text):
#     text = str(text).lower().strip()
#     text = re.sub(r"http\S+|www\S+", " ", text)
#     text = re.sub(r"[^a-zA-Z0-9\s]", " ", text)
#     text = re.sub(r"\s+", " ", text).strip()
#     return text

# df = pd.read_csv("Combined Data.csv")

# df = df[["statement", "status"]].dropna()
# df["statement"] = df["statement"].apply(clean_text)

# X = df["statement"]
# y = df["status"]

# X_train, X_test, y_train, y_test = train_test_split(
#     X, y, test_size=0.2, random_state=42, stratify=y
# )

# model = Pipeline([
#     ("tfidf", TfidfVectorizer(stop_words="english", ngram_range=(1, 2))),
#     ("clf", LogisticRegression(max_iter=1000))
# ])

# model.fit(X_train, y_train)

# y_pred = model.predict(X_test)

# print("Accuracy:", accuracy_score(y_test, y_pred))
# print(classification_report(y_test, y_pred))

# joblib.dump(model, "mental_health_model.joblib")
# print("Model saved successfully")

















import pandas as pd
import re
import joblib

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report, accuracy_score

def clean_text(text):
    text = str(text).lower().strip()
    text = re.sub(r"http\S+|www\S+", " ", text)
    text = re.sub(r"[^a-zA-Z0-9\s]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text

print("Loading dataset...")
df = pd.read_csv("Combined Data.csv")

print("Keeping required columns...")
df = df[["statement", "status"]].dropna()

print("Cleaning text...")
df["statement"] = df["statement"].apply(clean_text)

print("Taking smaller sample for fast training...")
df = df.sample(10000, random_state=42)

X = df["statement"]
y = df["status"]

print("Splitting dataset...")
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

model = Pipeline([
    ("tfidf", TfidfVectorizer(
        stop_words="english",
        ngram_range=(1, 1),
        max_features=15000
    )),
    ("clf", LogisticRegression(
        max_iter=200,
        solver="saga"
    ))
])

print("Training model...")
model.fit(X_train, y_train)

print("Testing model...")
y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))

joblib.dump(model, "mental_health_model_fast.joblib")
print("Model saved successfully as mental_health_model_fast.joblib")
