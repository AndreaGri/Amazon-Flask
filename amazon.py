from flask import Flask, render_template
app = Flask(__name__)



@app.route('/amazon/it')
def home():
    return render_template('amazon.html')

@



if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3246, debug=True)