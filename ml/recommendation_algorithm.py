# from flask import Flask, jsonify
# from flask_cors import CORS 
# import random
# from pymongo import MongoClient
# import pandas as pd
# from nltk.stem.porter import PorterStemmer
# from sklearn.metrics.pairwise import cosine_similarity
# from sklearn.feature_extraction.text import CountVectorizer

# app = Flask(__name__)
# CORS(app)


# # Connect to MongoDB
# client = MongoClient('mongodb://localhost:27017/')
# db = client['unisymphony']
# user_profiles = db['user_profiles']
# courses = db['courses']

# # Fetching data from database
# ans = courses.find({})
# df = pd.DataFrame(list(ans))

# # Preprocessing of data
# data = df[['Course Name', 'Difficulty Level', 'Course Description', 'Skills']]
# # ... (existing data preprocessing steps) ...

# # Creating tags column
# data['tags'] = data['Course Name'] + "," + data['Difficulty Level'] + "," + data['Course Description'] + "," + data['Skills']
# new_df = data[['Course Name', 'tags']]
# new_df['tags'] = data['tags'].str.replace(',', ' ')
# new_df['Course Name'] = data['Course Name'].str.replace(',', ' ')
# new_df.rename(columns={'Course Name': 'course_name'}, inplace=True)
# new_df['tags'] = new_df['tags'].apply(lambda x: x.lower())

# cv = CountVectorizer(max_features=5000, stop_words='english')
# vectors = cv.fit_transform(new_df['tags']).toarray()

# ps = PorterStemmer()

# # Defining the stemming function
# def stem(text):
#     y = []
#     for i in text.split():
#         y.append(ps.stem(i))
#     return " ".join(y)

# # Applying stemming on the tags column
# new_df['tags'] = new_df['tags'].apply(stem)

# similarity = cosine_similarity(vectors)

# def recommend_courses(user_id):
#     # Retrieve user profile
#     print(user_id)
#     # user_profile = user_profiles.find_one({'user_id': user_id})
#     # Assuming user_id is an integer
#     user_profile = user_profiles.find_one({'user_id': str(user_id)})

#     print(user_profile)
#     if not user_profile:
#         return "User not found."

#     # Shuffle preference weights
#     weights = [0.8, 0.6, 0.4, 0.2, 0.1]
#     random.shuffle(weights)

#     # Calculate course scores
#     course_scores = {}
#     for course in courses.find():
#         score = 0
#         for i, preference in enumerate(user_profile['preferences']):
#             if preference.lower() in course['Skills'].lower():
#                 score += weights[i]
#         course_scores[course['_id']] = score

#     # Sort courses by score and retrieve top courses
#     sorted_courses = sorted(course_scores.items(), key=lambda x: x[1], reverse=True)
#     top_course_ids = [course_id for course_id, _ in sorted_courses[:5]]

#     recommended_courses = []
#     for course_id in top_course_ids:
#         course_doc = courses.find_one({'_id': course_id})
#         course_name = course_doc['Course Name']
#         course_index = new_df[new_df['course_name'] == course_name].index[0]
#         distances = similarity[course_index]
#         course_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:7]
#         for i in course_list:
#             recommended_courses.append(new_df.iloc[i[0]].course_name)

#     return list(set(recommended_courses))

# # Example usage
# user_id = "1712351"
# recommended_courses = recommend_courses(user_id)
# if recommended_courses:
#     print(f"Recommended courses for user {user_id}:")
#     for course in recommended_courses:
#         print(course)
# else:
#     print(recommended_courses)


# @app.route('/api/recommendations/<int:user_id>', methods=['GET'])
# def recommendations(user_id):
#     print(user_id)
#     recommended_courses = recommend_courses(user_id)
#     print(recommend_courses)
#     course_data = []
#     for course_name in recommended_courses:
#         course_doc = courses.find_one({'Course Name': course_name})
#         if course_doc:
#             course_data.append({
#                 'Course Name': course_doc['Course Name'],
#                 'University': course_doc['University'],
#                 'Difficulty Level': course_doc['Difficulty Level'],
#                 'Course Rating': course_doc['Course Rating'],
#                 'Course URL': course_doc['Course URL'],
#                 'Course Description': course_doc['Course Description']
#             })
#     return jsonify(course_data)

# if __name__ == '__main__':
#     app.run(port=5000)


from flask import Flask, jsonify
from flask_cors import CORS 
import random
from pymongo import MongoClient
import pandas as pd
from nltk.stem.porter import PorterStemmer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
from bson import ObjectId

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb+srv://unisymphony:unisymphony@unisymphony.1k6xyeg.mongodb.net/')
db = client['unisymphony']
user_profiles = db['users']
courses = db['courses']

# Fetching data from database
ans = courses.find({})
df = pd.DataFrame(list(ans))

# Preprocessing of data
data = df[['Course Name', 'Difficulty Level', 'Course Description', 'Skills']]

# Creating tags column
data['tags'] = data['Course Name'] + "," + data['Difficulty Level'] + "," + data['Course Description'] + "," + data['Skills']
new_df = data[['Course Name', 'tags']]
new_df['tags'] = data['tags'].str.replace(',', ' ')
new_df['Course Name'] = data['Course Name'].str.replace(',', ' ')
new_df.rename(columns={'Course Name': 'course_name'}, inplace=True)
new_df['tags'] = new_df['tags'].apply(lambda x: x.lower())

cv = CountVectorizer(max_features=5000, stop_words='english')
vectors = cv.fit_transform(new_df['tags']).toarray()

ps = PorterStemmer()

# Defining the stemming function
def stem(text):
    y = []
    for i in text.split():
        y.append(ps.stem(i))
    return " ".join(y)

# Applying stemming on the tags column
new_df['tags'] = new_df['tags'].apply(stem)

similarity = cosine_similarity(vectors)

def recommend_courses(user_id):
    try:
        user_object_id = ObjectId(user_id)
    except:
        return "Invalid user ID format."

    # Retrieve user profile using _id
    user_profile = user_profiles.find_one({'_id': user_object_id})

    if not user_profile:
        return "User not found."

    # Shuffle preference weights
    weights = [0.8, 0.6, 0.4, 0.2, 0.1]
    random.shuffle(weights)

    # Get user interests
    interests = user_profile.get('interests', [])

    # Calculate course scores
    course_scores = {}
    for course in courses.find():
        score = 0
        for interest in interests:
            if interest.lower() in course['Skills'].lower():
                score += weights[interests.index(interest)]  # Using index to match weights
        course_scores[course['_id']] = score

    # Sort courses by score and retrieve top courses
    sorted_courses = sorted(course_scores.items(), key=lambda x: x[1], reverse=True)
    top_course_ids = [course_id for course_id, _ in sorted_courses[:5]]

    recommended_courses = []
    for course_id in top_course_ids:
        course_doc = courses.find_one({'_id': course_id})
        course_name = course_doc['Course Name']
        course_index = new_df[new_df['course_name'] == course_name].index[0]
        distances = similarity[course_index]
        course_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:7]
        for i in course_list:
            recommended_courses.append(new_df.iloc[i[0]].course_name)

    return list(set(recommended_courses))

@app.route('/api/recommendations/<user_id>', methods=['GET'])
def recommendations(user_id):
    recommended_courses = recommend_courses(user_id)
    course_data = []
    for course_name in recommended_courses:
        course_doc = courses.find_one({'Course Name': course_name})
        if course_doc:
            course_data.append({
                'Course Name': course_doc['Course Name'],
                'University': course_doc['University'],
                'Difficulty Level': course_doc['Difficulty Level'],
                'Course Rating': course_doc['Course Rating'],
                'Course URL': course_doc['Course URL'],
                'Course Description': course_doc['Course Description']
            })
    return jsonify(course_data)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
