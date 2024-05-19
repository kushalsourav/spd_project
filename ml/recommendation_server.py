from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS 
import pandas as pd
from nltk.stem.porter import PorterStemmer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)
CORS(app)
# Database Connection
client = MongoClient('mongodb+srv://unisymphony:unisymphony@unisymphony.1k6xyeg.mongodb.net/')
db = client['unisymphony']
courses_collection = db['courses']

# Fetching data from database
ans = courses_collection.find({})
df = pd.DataFrame(list(ans))

#Preprocessing of data
data = df[['Course Name','Difficulty Level','Course Description','Skills']]
# Removing spaces between the words
data['Course Name'] = data['Course Name'].str.replace(' ',',')
data['Course Name'] = data['Course Name'].str.replace(',,',',')
data['Course Name'] = data['Course Name'].str.replace(':','')
data['Course Description'] = data['Course Description'].str.replace(' ',',')
data['Course Description'] = data['Course Description'].str.replace(',,',',')
data['Course Description'] = data['Course Description'].str.replace('_','')
data['Course Description'] = data['Course Description'].str.replace(':','')
data['Course Description'] = data['Course Description'].str.replace('(','')
data['Course Description'] = data['Course Description'].str.replace(')','')
#removing paranthesis from skills columns 
data['Skills'] = data['Skills'].str.replace('(','')
data['Skills'] = data['Skills'].str.replace(')','')

#Creating tags column
data['tags'] = data['Course Name'] +"," + data['Difficulty Level'] +"," + data['Course Description'] +"," + data['Skills']
new_df = data[['Course Name','tags']]
new_df['tags'] = data['tags'].str.replace(',',' ')
new_df['Course Name'] = data['Course Name'].str.replace(',',' ')
new_df.rename(columns = {'Course Name':'course_name'}, inplace = True)
new_df['tags'] = new_df['tags'].apply(lambda x:x.lower()) 

cv = CountVectorizer(max_features=5000,stop_words='english')
vectors = cv.fit_transform(new_df['tags']).toarray()

ps = PorterStemmer()

#defining the stemming function
def stem(text):
    y=[]
    
    for i in text.split():
        y.append(ps.stem(i))
    
    return " ".join(y)

#applying stemming on the tags column
new_df['tags'] = new_df['tags'].apply(stem) 

similarity = cosine_similarity(vectors)

def recommend(course):
    course_index = new_df[new_df['course_name'] == course].index[0]
    distances = similarity[course_index]
    course_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:7]
    recommended_courses = []
    for i in course_list:
        recommended_courses.append(new_df.iloc[i[0]].course_name)
    return recommended_courses

def recommend_courses_by_input(user_input):
    user_input_vector = cv.transform([user_input.lower()])
    similarities = cosine_similarity(vectors, user_input_vector).flatten()
    sorted_indices = similarities.argsort()[::-1]
    recommended_courses = [new_df.iloc[idx].course_name for idx in sorted_indices[:10]]
    return recommended_courses

# @app.route('/api/recommendations/input/<course>', methods=['GET'])
# def recommend_by_input(course):
#     print(course)
#     user_input = course
#     recommended_courses = recommend_courses_by_input(user_input)
#     return jsonify(recommended_courses)

# @app.route('/api/recommendations/input/<course>', methods=['GET'])
# def recommend_by_input(course):
#     print(course)  # This will print the course name in the console
#     user_input = course
#     recommended_courses = recommend_courses_by_input(user_input)
#     return jsonify(recommended_courses)

# @app.route('/api/recommendations/', methods=['GET'])
# def recommend_input():
    
#     recommended_courses = recommend_courses_by_input("java")
#     return jsonify(recommended_courses)

@app.route('/api/recommendations/', methods=['GET'])
def recommend_input():
    user_input = request.args.get('input', '')  # Get the value of the 'input' query parameter
    print(user_input)
    recommended_courses = recommend_courses_by_input(user_input)
    return jsonify(recommended_courses)

if __name__ == '__main__':
    app.run(port=5500)