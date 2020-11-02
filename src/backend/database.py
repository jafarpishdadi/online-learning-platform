from flask import Flask, make_response, request, jsonify
from flask_mongoengine import MongoEngine
from user import UserObj 
from calender import CalenderObj
from course import CourseObj
import user
import calender
import course

app = Flask(__name__) 

# set the database name and the database user's name and password
db_name = "Uimpactify"
db_user = "admin"
password = "1234"
DB_URI = "mongodb+srv://{}:{}@testcluster1.zmrab.mongodb.net/{}?retryWrites=true&w=majority".format(db_user, password, db_name)
app.config["MONGODB_HOST"] = DB_URI	

db = MongoEngine()
db.init_app(app)

# creates a new user and posts it to the database when provided with a json text formatted as {user_type: user_type, user_name: user_name, password: password, email: email}
@app.route('/api/db_create_user', methods=['POST'])
def db_create_user():
	print(request.json)
	return UserObj(request.json).db_create_user()

# returns the user requested from the database when provided with a json text formatted as {email: email}
@app.route('/api/db_get_user', methods=['GET'])
def db_get_user():
	return UserObj(request.json).db_get_user()

# updates the user's name when provided with a json text formatted as {email: email, username: username} 
@app.route('/api/db_update_user_name', methods=['PUT'])
def db_update_user_name():
	return UserObj(request.json).db_update_user_name()

# updates the user's password when provided with a json text formatted as {email: email, password: password} 
@app.route('/api/db_update_user_password', methods=['PUT'])
def db_update_user_password():
	return UserObj(request.json).db_update_user_password()

# updates the user's email when provided with a json text formatted as {old_email: old_email, new_email: new_email} 
@app.route('/api/db_update_user_email', methods=['PUT'])
def db_update_user_email():
	return UserObj(request.json).db_update_user_email()

# deletes the user when provided with a json text formatted as {email: email} 
@app.route('/api/db_delete_user', methods=['DELETE'])
def db_delete_single_user():
	return UserObj(request.json).db_delete_single_user()

# deletes all the users in the database 
@app.route('/api/db_delete_all_users', methods=['DELETE'])
def db_delete_all_users():
	return UserObj(request.json).db_delete_all_users()

# when provided with a json text formatted as {username: username, password: password} returns {true} if such user exists and {false} o/w
@app.route('/api/db_login', methods=['POST'])
def db_login():
	return UserObj(request.json).db_login()
 
# records the data and time of the last logout when provided with a json text formatted as {email: email}
@app.route('/api/db_logout', methods=['POST'])
def db_logout():
    return UserObj(request.json).db_logout()

# Allows Creation Of events for a user
@app.route('/api/db_create_event', methods=['POST'])
def db_create_event():
    return CalenderObj(request.json).db_create_event()

# Allows Creation Of events for a user
@app.route('/api/db_get_schedule', methods=['GET'])
def db_get_event():
    return CalenderObj(request.json).db_get_event()

# creates a new course and posts it to the database when provided with a json text formatted as {course_category: course_category, course_name: course_name, course_instructor: course_instructor}
@app.route('/api/db_create_course', methods=['POST'])
def db_create_course():
	print(request.json)
	return CourseObj(request.json).db_create_course()

# adds the passed in student to the given course when provided with a json text formatted as {course_name: course_name, student: student}
@app.route('/api/db_add_student_to_course', methods=['PUT'])
def db_add_student_to_course():
	return CourseObj(request.json).db_add_student_to_course()

# removes the passed in student from the given course when provided with a json text formatted as {course_name: course_name, student: student}
@app.route('/api/db_remove_student_from_course', methods=['PUT'])
def db_remove_student_from_course():
	return CourseObj(request.json).db_remove_student_from_course()

# returns the course requested from the database when provided with a json text formatted as {course_name: course_name}
@app.route('/api/db_get_course', methods=['GET'])
def db_get_course():
	return CourseObj(request.json).db_get_course()

# returns all of the courses instructed by the given instructor when provided with a json text formatted as {course_name: course_name, course_instructor: course_instructor}
@app.route('/api/db_get_courses_of_instructor', methods=['GET'])
def db_get_courses_of_instructor():
	return CourseObj(request.json).db_get_courses_of_instructor()

# returns all of the courses taken by the given student when provided with a json text formatted as {course_name: course_name, student: student}
@app.route('/api/db_get_courses_of_student', methods=['GET'])
def db_get_courses_of_student():
	return CourseObj(request.json).db_get_courses_of_student()

# updates the course category when provided with a json text formatted as {course_name: course_name, course_category: course_category} 
@app.route('/api/db_update_course_category', methods=['PUT'])
def db_update_course_category():
	return CourseObj(request.json).db_update_course_category()

# updates the course name when provided with a json text formatted as {old_course_name: old_course_name, new_course_name: new_course_name} 
@app.route('/api/db_update_course_name', methods=['PUT'])
def db_update_course_name():
	return CourseObj(request.json).db_update_course_name()

# updates the course instructor when provided with a json text formatted as {course_name: course_name, course_instructor: course_instructor} 
@app.route('/api/db_update_course_instructor', methods=['PUT'])
def db_update_course_instructor():
	return CourseObj(request.json).db_update_course_instructor()

# deletes the course when provided with a json text formatted as {course_name: course_name} 
@app.route('/api/db_delete_course', methods=['DELETE'])
def db_delete_single_course():
	return CourseObj(request.json).db_delete_single_course()

@app.route('/api/get_all_courses', methods=['GET'])
def db_get_all_courses():
	return CourseObj(request.json).db_get_all_courses()

# you can put in your preferred port 
if __name__ == '__main__':   
	app.run(host='0.0.0.0', port=8103)

