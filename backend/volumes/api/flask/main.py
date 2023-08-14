#!flask/bin/python
import api
from flask import Flask, jsonify, send_file
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
@cross_origin()
def main(): return api.main()


@app.route("/file")
@cross_origin()
def file(): return api.file()

@app.route("/get")
@cross_origin()
def get(): return api.get()

@app.route("/auth")
@cross_origin()
def auth(): return api.auth()


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)