from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/period')
def period():
    return render_template("period.html")


@app.route('/lectures')
def lectures():
    return render_template("lectures.html")


if __name__ == '__main__':
    app.run()
