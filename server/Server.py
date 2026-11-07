from flask import Flask, request, jsonify
from flask_cors import CORS
import util

app = Flask(__name__)

CORS(app)

# Load the trained model when Gunicorn imports this application.
try:
    util.load_saved_artifaces()
    print("KAIROS AI model loaded successfully!")

except Exception as error:
    print(f"Model loading failed: {error}")
    raise


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "application": "KAIROS AI",
        "message": "Backend is running successfully",
        "status": "online"
    })


@app.route("/classify_image", methods=["POST"])
def classify_image():

    image_data = request.form.get("image_data")

    if not image_data:
        return jsonify({
            "error": "Image data is required"
        }), 400

    try:
        prediction = util.classify_image(image_data)

        if not prediction:
            return jsonify({
                "error": "No recognizable face detected"
            }), 400

        return jsonify(prediction), 200

    except Exception as error:
        app.logger.exception("Prediction error")

        return jsonify({
            "error": "Image classification failed",
            "details": str(error)
        }), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=False
    )