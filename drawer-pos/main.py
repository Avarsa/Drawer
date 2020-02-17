from flask import Flask, render_template, request
from firebase_admin import firestore, credentials, initialize_app


app = Flask(__name__)



@app.route('/', methods=["post", "get"])
def root_handler():
	""" handles requests to the home page"""
	return render_template("base.html")


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)