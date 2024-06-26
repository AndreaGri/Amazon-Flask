from flask import Flask, render_template, request , jsonify
import pandas as pd
app = Flask(__name__)

df = pd.read_csv('/workspace/Amazon-Flask/data/prod.csv')
print(df)

@app.route('/')
def home():
    return render_template('amazon.html', products=df[['Immagine','ID']].to_dict('records'))#mandiamo il data frame 

@app.route('/prod', methods=['POST'])
def produ():
  json = request.get_json()
  n=json.get('identifair')
  getData=df.iloc[n]
  return ( getData.to_json(orient='records'))



if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)