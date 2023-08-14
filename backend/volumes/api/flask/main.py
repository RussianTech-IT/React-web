#!flask/bin/python
import api
from flask import Flask, jsonify, send_file

app = Flask(__name__)



@app.route("/")
def main(): return api.main()


@app.route("/file",methods=["GET"])
def file(): return api.file()

@app.route("/get")
def get(): return api.get()

@app.route("/auth")
def auth(): return api.auth()


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)