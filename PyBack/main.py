from flask import Flask, render_template, url_for, request
import requests
import os
import json
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

app = Flask(__name__)
messages = []
@app.route('/', methods=['GET', 'POST'])
def text_to_text():
    ques = {"role": "Я", "text": request.args.get('text', '')}
    messages.append(ques)
    prompt = {
        "modelUri": f"gpt://{os.getenv('API_ADR')}/yandexgpt-lite",
        "completionOptions": {
            "stream": False,
            "temperature": 0.6,
            "maxTokens": "2000"
        },
        "messages": [
            {
                "role": "system",
                "text": os.getenv('tx1')
            },
            {
                "role": "user",
                "text": request.args.get('text', '')
            }
        ]
    }

    url = "https://llm.api.cloud.yandex.net/foundationModels/v1/completion"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Api-Key {os.getenv('API_KEY')}"
    }

    response = requests.post(url, headers=headers, json=prompt)
    result = response.text

    ans = {"role": "Цифровой помощник", "text": json.loads(result)["result"]["alternatives"][0]["message"]["text"]}
    messages.append(ans)

    return messages


if __name__ == "__main__":
    app.run(debug=True, port=80)

