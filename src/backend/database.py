from flask import Flask, make_response, request, jsonify
from flask_mongoengine import MongoEngine
from user import UserObj 
import user

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

# you can put in your preferred port 
if __name__ == '__main__':   
	app.run(host='0.0.0.0', port=8103)

