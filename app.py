from flask import Flask, render_template

app = Flask(__name__)

@app.route('/charts')
def charts():
    return render_template('charts.html')

@app.route('/map')
def map():
    return render_template('map.html')

@app.route('/ml')
def ml():
    return render_template('ml.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0" , port=5000, debug=True)