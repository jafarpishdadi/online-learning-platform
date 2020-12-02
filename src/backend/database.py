from flask import Flask, make_response, request, jsonify
from flask_cors import CORS
from flask_mongoengine import MongoEngine
from user import UserObj 
from profile import ProfileObj
from calender import CalenderObj
from course import CourseObj
from dashevent import dasheventObj
from message import MessageObj
from board import Board
import user
import calender
import course
import dashevent
import profile
import message

app = Flask(__name__) 

# set the database name and the database user's name and password
db_name = "Uimpactify"
db_user = "admin"
password = "1234"
DB_URI = "mongodb+srv://{}:{}@testcluster1.zmrab.mongodb.net/{}?retryWrites=true&w=majority".format(db_user, password, db_name)
app.config["MONGODB_HOST"] = DB_URI	

db = MongoEngine()
db.init_app(app)

# creates a new user and posts it to the database when provided with a json text formatted as {user_type: user_type, username: username, password: password, email: email}
@app.route('/api/db_create_user', methods=['POST'])
def db_create_user():
    print(request.json)
    ProfileObj(request.json).db_create_profile()
    return UserObj(request.json).db_create_user()

# returns the user requested from the database when provided with a json text formatted as {email: email}
@app.route('/api/db_get_user', methods=['POST'])
def db_get_user():
    return UserObj(request.json).db_get_user()

# returns the user email requested from the database when provided with a json text formatted as {username: username}
@app.route('/api/db_get_user_email', methods=['POST'])
def db_get_user_email():
    return UserObj(request.json).db_get_user_email()

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

# returns list of consultants with optional parameters formatted as {email: email, username: username, name: name}
@app.route('/api/db_get_consultants', methods=['POST'])
def db_get_consultants():
    return UserObj(request.json).db_get_consultants()

# returns user_type when provided with username formatted as {username: username}
@app.route('/api/db_get_user_type', methods=['POST'])
def db_get_user_type():
    return UserObj(request.json).db_get_user_type()

# returns last_logout when provided with username formatted as {username: username}
@app.route('/api/db_last_login', methods=['POST'])
def db_last_login():
    return UserObj(request.json).db_last_login()
    
# creates a new profile and posts it to the database when provided with a json text formatted as {username: username}
@app.route('/api/db_create_profile', methods=['POST'])
def db_create_profile():
    return ProfileObj(request.json).db_create_profile()

# returns the profile requested from the database when provided with a json text formatted as {username: username}
@app.route('/api/db_get_profile', methods=['POST'])
def db_get_profile():
    return ProfileObj(request.json).db_get_profile()

# updates the user's phone number when provided with a json text formatted as {phone_number: phone_number, username: username} 
@app.route('/api/db_update_profile_phone_number', methods=['POST'])
def db_update_profile_phone_number():
    return ProfileObj(request.json).db_update_profile_phone_number()

# updates the user's first name when provided with a json text formatted as {first_name: first_name, username: username} 
@app.route('/api/db_update_profile_first_name', methods=['POST'])
def db_update_profile_first_name():
    return ProfileObj(request.json).db_update_profile_first_name()

# updates the user's last name when provided with a json text formatted as {last_name: last_name, username: username} 
@app.route('/api/db_update_profile_last_name', methods=['POST'])
def db_update_profile_last_name():
    return ProfileObj(request.json).db_update_profile_last_name()

# updates the user's profile description when provided with a json text formatted as {description: description, username: username} 
@app.route('/api/db_update_profile_description', methods=['POST'])
def db_update_profile_description():
    return ProfileObj(request.json).db_update_profile_description()

# adds to the user's languages when provided with a json text formatted as {language: language, username: username} 
@app.route('/api/db_add_profile_language', methods=['PUT'])
def db_add_profile_language():
    return ProfileObj(request.json).db_add_profile_language()

# deletes from the user's languages when provided with a json text formatted as {language: language, username: username} 
@app.route('/api/db_delete_profile_language', methods=['DELETE'])
def db_delete_profile_language():
    return ProfileObj(request.json).db_delete_profile_language()

# adds to the user's completed courses when provided with a json text formatted as {completed_course: completed_course, username: username} 
@app.route('/api/db_add_profile_completed_course', methods=['PUT'])
def db_add_profile_completed_course():
    return ProfileObj(request.json).db_add_profile_completed_course()

# deletes from the user's completed courses when provided with a json text formatted as {completed_course: completed_course, username: username} 
@app.route('/api/db_delete_profile_completed_course', methods=['DELETE'])
def db_delete_profile_completed_course():
    return ProfileObj(request.json).db_delete_profile_completed_course()

# adds to the user's skills when provided with a json text formatted as {skill: skill, username: username} 
@app.route('/api/db_add_profile_skill', methods=['PUT'])
def db_add_profile_skill():
    return ProfileObj(request.json).db_add_profile_skill()

# deletes from the user's skills when provided with a json text formatted as {skill: skill, username: username} 
@app.route('/api/db_delete_profile_skill', methods=['DELETE'])
def db_delete_profile_skill():
    return ProfileObj(request.json).db_delete_profile_skill()

# adds to the user's educations when provided with a json text formatted as {education: education, username: username} 
@app.route('/api/db_add_profile_education', methods=['PUT'])
def db_add_profile_education():
    return ProfileObj(request.json).db_add_profile_education()

# deletes from the user's educations when provided with a json text formatted as {education: education, username: username} 
@app.route('/api/db_delete_profile_education', methods=['DELETE'])
def db_delete_profile_education():
    return ProfileObj(request.json).db_delete_profile_education()

# Allows Creation Of events for a user
@app.route('/api/db_create_event', methods=['POST'])
def db_create_event():
    return CalenderObj(request.json).db_create_event()

# Gets an event for the user
@app.route('/api/db_get_schedule', methods=['PUT'])
def db_get_event():
    return CalenderObj(request.json).db_get_event()

#updates events for a user
@app.route('/api/db_update_event', methods=['PUT'])
def db_update_event():
    return CalenderObj(request.json).db_update_event()

#updates events for a user
@app.route('/api/db_delete_event', methods=['DELETE'])
def db_delete_event():
    return CalenderObj(request.json).db_delete_event()

# creates a new course and posts it to the database when provided with a json text formatted as {course_category: course_category, course_name: course_name, course_instructor: course_instructor, extra_info: extra_info}
@app.route('/api/db_create_course', methods=['POST'])
def db_create_course():
    print(request.json)
    return CourseObj(request.json).db_create_course()

# adds the passed in student to the given course when provided with a json text formatted as {course_name: course_name, student: student}
@app.route('/api/db_add_student_to_course', methods=['POST'])
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
@app.route('/api/db_get_courses_of_student', methods=['POST'])
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

# Sends a message from a user to another
@app.route('/api/db_send_message', methods=['POST'])
def db_send_message():
    return MessageObj(request.json).db_send_message()

# Gets all messages for two users
@app.route('/api/db_get_messages', methods=['POST'])
def db_get_messages():
    return MessageObj(request.json).db_get_messages()

# Gets all messaged users
@app.route('/api/db_get_messaged_users', methods=['POST'])
def db_get_messaged_users():
    return MessageObj(request.json).db_get_messaged_users()

#Get all threads
@app.route('/api/db_get_all_threads', methods=['GET'])
def db_get_all_threads():
    return Board(request.json).db_get_all_threads()

#Get threads by id
@app.route('/api/db_get_thread_id', methods=['POST'])
def db_get_thread_id():
    return Board(request.json).db_get_thread_id()

#Put a reply in a thread
@app.route('/api/db_put_thread_reply', methods=['PUT'])
def db_put_thread_reply():
    return Board(request.json).db_put_thread_reply()

#Create a thread
@app.route('/api/db_create_thread', methods=['POST'])
def db_create_thread():
    return Board(request.json).db_create_thread()

# adds a new dashevent and posts it to the database when provided with a json text formatted as {dashevent_category: dashevent_category, dashevent_name: dashevent_name, dashevent_instructor: dashevent_instructor, extra_info: extra_info}
@app.route('/api/db_add_dashevent', methods=['POST'])
def db_add_dashevent():
    print(request.json)
    return dasheventObj(request.json).db_add_dashevent()

# adds the passed in student to the given dashevent when provided with a json text formatted as {dashevent_name: dashevent_name, student: student}
@app.route('/api/db_add_student_to_dashevent', methods=['POST'])
def db_add_student_to_dashevent():
    return dasheventObj(request.json).db_add_student_to_dashevent()

# removes the passed in student from the given dashevent when provided with a json text formatted as {dashevent_name: dashevent_name, student: student}
@app.route('/api/db_remove_student_from_dashevent', methods=['PUT'])
def db_remove_student_from_dashevent():
    return dasheventObj(request.json).db_remove_student_from_dashevent()

# returns the dashevent requested from the database when provided with a json text formatted as {dashevent_name: dashevent_name}
@app.route('/api/db_retrieve_dashevent', methods=['GET'])
def db_retrieve_dashevent():
    return dasheventObj(request.json).db_retrieve_dashevent()

# returns all of the dashevents instructed by the given instructor when provided with a json text formatted as {dashevent_name: dashevent_name, dashevent_instructor: dashevent_instructor}
@app.route('/api/db_get_dashevents_of_instructor', methods=['GET'])
def db_get_dashevents_of_instructor():
    return dasheventObj(request.json).db_get_dashevents_of_instructor()

# returns all of the dashevents taken by the given student when provided with a json text formatted as {dashevent_name: dashevent_name, student: student}
@app.route('/api/db_get_dashevents_of_student', methods=['POST'])
def db_get_dashevents_of_student():
    return dasheventObj(request.json).db_get_dashevents_of_student()

# updates the dashevent category when provided with a json text formatted as {dashevent_name: dashevent_name, dashevent_category: dashevent_category} 
@app.route('/api/db_update_dashevent_category', methods=['PUT'])
def db_update_dashevent_category():
    return dasheventObj(request.json).db_update_dashevent_category()

# updates the dashevent name when provided with a json text formatted as {old_dashevent_name: old_dashevent_name, new_dashevent_name: new_dashevent_name} 
@app.route('/api/db_update_dashevent_name', methods=['PUT'])
def db_update_dashevent_name():
    return dasheventObj(request.json).db_update_dashevent_name()

# updates the dashevent instructor when provided with a json text formatted as {dashevent_name: dashevent_name, dashevent_instructor: dashevent_instructor} 
@app.route('/api/db_update_dashevent_instructor', methods=['PUT'])
def db_update_dashevent_instructor():
    return dasheventObj(request.json).db_update_dashevent_instructor()

# deletes the dashevent when provided with a json text formatted as {dashevent_name: dashevent_name} 
@app.route('/api/db_delete_dashevent', methods=['DELETE'])
def db_delete_single_dashevent():
    return dasheventObj(request.json).db_delete_single_dashevent()

@app.route('/api/get_all_dashevents', methods=['GET'])
def db_get_all_dashevents():
    return dasheventObj(request.json).db_get_all_dashevents()

# adds to the user's completed dashevents when provided with a json text formatted as {completed_dashevent: completed_dashevent, username: username} 
@app.route('/api/db_add_profile_completed_dashevent', methods=['PUT'])
def db_add_profile_completed_dashevent():
    return ProfileObj(request.json).db_add_profile_completed_dashevent()

# deletes from the user's completed dashevents when provided with a json text formatted as {completed_dashevent: completed_dashevent, username: username} 
@app.route('/api/db_delete_profile_completed_dashevent', methods=['DELETE'])
def db_delete_profile_completed_dashevent():
    return ProfileObj(request.json).db_delete_profile_completed_dashevent()

# you can put in your preferred port 
if __name__ == '__main__':   
    app.run(host='0.0.0.0', port=8103)