from flask import Flask,request, jsonify
from flask_cors import CORS 
app=Flask(__name__)
CORS(app)
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import pandas as pd
import json
import pickle

data = pd.read_csv('MergedFile2.csv')
X = data.drop(columns=['sleep disorder','SEQN','bmi'])
print(type(X))
y = data['sleep disorder']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = xgb.XGBRegressor(objective ='reg:squarederror', colsample_bytree = 0.3, learning_rate = 0.1,
                max_depth = 5, alpha = 10, n_estimators = 100)

model.fit(X_train, y_train)
feature_order = ['weight', 'height', 'bloodPressure', 'cholesterol', 'dp1', 'dp2', 'dp3', 'dp4', 'dp5', 'dp6', 'dp7', 'dp8', 'Diabetic', 'sleep_hours', 'gender', 'age']
with open('model_metadata.pkl', 'wb') as f:
    pickle.dump({'model': model, 'feature_order': feature_order}, f)
y=model.predict(X_test)
results_df = pd.DataFrame({'Actual': y_test, 'Predicted': y})

# Save the DataFrame to a CSV file
results_df.to_csv('predictions_results.csv', index=False)
mse = mean_squared_error(y_test, y)
print(f'Mean Squared Error: {mse:.4f}')
@app.route('/predict',methods=['POST'])
def predict():
    user_input=request.get_json('input')
    print(user_input)
    inp=pd.DataFrame([user_input])
    
    with open('model_metadata.pkl', 'rb') as f:
      data = pickle.load(f)
      model = data['model']
      feature_order = data['feature_order']
    input_data = [user_input[feature] for feature in feature_order]
    inp = pd.DataFrame([input_data], columns=feature_order)
    for key in inp:
      inp[key] = int(inp[key])
    y_pred = model.predict(inp)
    print(type(y_pred[0]))
    if y_pred[0]>=1.5:
       
       return jsonify('Present')
    else:
      
       return jsonify('Absent')
    p_list = y_pred.tolist()
    jlist = json.dumps(p_list)
   
  
    
    return jsonify({'predictions':jlist})

if __name__=='__main__':
   app.run(debug=True)