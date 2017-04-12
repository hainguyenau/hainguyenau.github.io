import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
import pickle

# Helping functions
# def load_data(filename):
    # return pd.read_csv(filename)
		
def prepare_data(df):
    # Dummify Embarked and Sex
    embarked_dummies = pd.get_dummies(df['Embarked'])
    sex_dummies = pd.get_dummies(df['Sex'])
    
    # Attach embarked dummies into X
    df[['Embarked C', 'Embarked Q']] = embarked_dummies[['C', 'Q']]
    df['Sex_male'] = sex_dummies['male']
    df.pop('Embarked')
    df.pop('Sex')
    
    # First, drop all observations with null values for those predictors
    try:
        X = df[['Age', 'Sex_male', 'Pclass', 'Fare', 'Embarked C', 'Embarked Q', 'Survived']]
    except:
        X = df[['Age', 'Sex_male', 'Pclass', 'Fare', 'Embarked C', 'Embarked Q']]
    X = X.dropna()
    
    # Pop response Y
    try:
        y = X.pop('Survived')
    except:
        _ = 0 # do nothing, just to complete try-except syntax
    try:
        return X, y
    except:
        return X

# Prepare data for testing
df_train = pd.read_csv('data/train.csv')
X_train, y_train = prepare_data(df_train)

log_model = LogisticRegression()
log_model.fit(X_train, y_train)

# Save model
with open('data/log_model.pkl', 'wb') as f:
	pickle.dump(log_model, f)