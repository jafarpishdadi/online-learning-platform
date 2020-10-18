from flask import Flask, make_response, request, jsonify
from flask_mongoengine import MongoEngine
from user import User 

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
	content = request.json
	user = User(user_type=content['user_type'], username=content['username'], password=content['password'], email=content['email'])
	user.save()

	return make_response("", 200)

# returns the user requested from the database when provided with a json text formatted as {email: email}
@app.route('/api/db_get_user', methods=['GET'])
def db_get_user():
	content = request.json
	user_obj = User.objects(email=content['email']).first()
	if user_obj:
		return make_response(jsonify(user_obj.to_json()), 200)
	else:
		return make_response("", 404)

# updates the user's name when provided with a json text formatted as {email: email, username: username} 
@app.route('/api/db_update_user_name', methods=['PUT'])
def db_update_user_name():
	content = request.json
	user_obj = User.objects(email=content['email']).first()
	user_obj.update(username=content['username'])

	return make_response("", 200)

# updates the user's password when provided with a json text formatted as {email: email, password: password} 
@app.route('/api/db_update_user_password', methods=['PUT'])
def db_update_user_password():
	content = request.json
	user_obj = User.objects(email=content['email']).first()
	user_obj.update(password=content['password'])
 	
	return make_response("", 200)

# updates the user's email when provided with a json text formatted as {old_email: old_email, new_email: new_email} 
@app.route('/api/db_update_user_email', methods=['PUT'])
def db_update_user_email():
	content = request.json
	user_obj = User.objects(email=content['old_email']).first()
	user_obj.update(email=content['new_email'])
 	
	return make_response("", 200)

# deletes the user when provided with a json text formatted as {email: email} 
@app.route('/api/db_delete_user', methods=['DELETE'])
def db_delete_single_user():
	content = request.json
	user_obj = User.objects(email=content['email']).first()
	user_obj.delete()

	return make_response("", 200)

# deletes all the users in the database 
@app.route('/api/db_delete_all_users', methods=['DELETE'])
def db_delete_all_users():
	for user in User.objects():
		user.delete()
	
	return make_response("", 200)

# when provided with a json text formatted as {email: email, password: password} returns {true} if such user exists and {false} o/w
@app.route('/api/db_login', methods=['GET'])
def db_login():
	content = request.json
	user_obj = User.objects(email=content['email'], password=content['password']).first()
	if user_obj:
		return make_response(jsonify("true"), 200)
	else:
		return make_response(jsonify("false"), 200)

# Creates a new account if it doesn't exist and posts it to the database when provided with a 
# json text formatted as {user_type: user_type, user_name: user_name, password: password, email: email}
# Returns true if successfull, false otherwise
@app.route('/api/db_create_account', methods=['POST'])
def db_create_account():
	content = request.json
	# Check if user already exists in the db

	user_obj = User.objects(email=content['email']).first()
	if user_obj:
		return make_response(jsonify("false"), 400)
	else:
		user = User(user_type=content['user_type'], username=content['username'], password=content['password'], email=content['email'])
		user.save()
		return make_response(jsonify("true"), 200)


# you can put in your preferred port 
if __name__ == '__main__':   
	app.run(host='0.0.0.0', port=8103)

