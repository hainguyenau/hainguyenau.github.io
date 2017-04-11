from flask import Flask, request
import numpy as np
import pickle

app = Flask(__name__)

@app.route('/')
def submission_page():
	return '''
		<form action='/predict' method='POST'>
			<input type="number" name="age" placeholder="age"/>
			<input type="text" name="sex" placeholder="sex"/>
			<input type="number" name="class" placeholder="class"/>
			<input type="number" name="fare" placeholder="fare"/>
			<input type="text" name ="embarked" placeholder="Port of embarkation"/>
			<input type="submit"/>
		</form>
	'''
	
@app.route('/predict', methods=['POST'])
def predict():
	# Get input variables
	age = request.form['age']
	sex = request.form['sex']
	Pclass = request.form['class']
	fare = request.form['fare']
	embarked = request.form['embarked']
	loaded_log_model = pickle.load(open('log_model.pkl', 'rb'))
	return loaded_log_model.predict_proba(np.array([[17, 1,3,7,0,1]]))
	
	
if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8080, debug=True)