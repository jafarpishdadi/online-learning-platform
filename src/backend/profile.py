import mongoengine as me
from mongoengine.fields import ListField
from mongoengine.fields import StringField
import hashlib
from flask import Flask, make_response, request, jsonify
from Exceptions.MissingRequiredField import checkFields
from datetime import datetime


class ProfileObj():
	"""
	This class holds all the CRUD methods for the user profiles
	"""
	
	# generic user class inheriting the mongo document 
	class Profile(me.Document):

		username = me.StringField(required=True)
		phone_number = me.StringField()
		first_name = me.StringField()
		last_name = me.StringField()
		name = me.StringField()
		time_join = me.StringField()
		description = me.StringField()
		languages = me.ListField(StringField(), default=list)
		completed_courses = me.ListField(StringField(), default=list)
		skills = me.ListField(StringField(), default=list)
		educations = me.ListField(StringField(), default=list)

		def to_json(self):
			"""
			Returns the user object as a json.
			"""

			return {
				"username": self.username,
				"phone_number": self.phone_number,
				"first_name": self.first_name,
				"last_name": self.last_name,
				"name": self.name,
				"time_join": self.time_join,
				"description": self.description,
				"languages": self.languages,
				"completed_courses": self.completed_courses,
				"skills": self.skills,
				"educations": self.educations
			}

	def __init__(self, content):
		"""
		Instantiates a new instance of ProfileObj
		"""
		self.content = content


	def db_create_profile(self):
		"""
		Saves the current user to the database.
		"""
		# required fields
		x = checkFields(self.content, fields=['username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		if (self.Profile.objects(username=self.content['username']).count() > 0):
			return make_response("Username already in use.", 400)

		self.Profile(username=self.content['username'],
					phone_number='N/A',
					first_name='N/A',
					last_name='N/A',
					name='N/A',
					time_join=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
					description='N/A').save()
		return make_response("", 200)
	
	def db_get_profile(self):
		"""
		Gets the profile given a username
		"""

		x = checkFields(self.content, fields=['username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			return make_response(jsonify(prof_obj.to_json()), 200)
		else:
			return make_response("Username does not exist", 404)
	
	def db_update_profile_phone_number(self):
		"""
		Updates the phone number in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['phone_number', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.update(phone_number=self.content['phone_number'])
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_update_profile_first_name(self):
		"""
		Updates the first name in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['first_name', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.save()
			prof_obj.update(first_name=self.content['first_name'])
			prof_obj.reload()
			prof_obj.save()
			prof_obj.update(name=self.content['first_name'] + " " + prof_obj.last_name)
			prof_obj.reload()
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_update_profile_last_name(self):
		"""
		Updates the last name in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['last_name', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.save()
			prof_obj.update(last_name=self.content['last_name'])
			prof_obj.reload()
			prof_obj.save()
			prof_obj.update(name=prof_obj.first_name + " " + self.content['last_name'])
			prof_obj.reload()
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_update_profile_description(self):
		"""
		Updates the profile description in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['description', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.update(description=self.content['description'])
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_add_profile_language(self):
		"""
		Adds a profile language in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['language', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.update(add_to_set__languages=self.content['language'])
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_delete_profile_language(self):
		"""
		deletes a profile language in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['language', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.update(pull__languages=self.content['language'])
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_add_profile_completed_course(self):
		"""
		Adds a profile completed_course in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['completed_course', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.update(add_to_set__completed_courses=self.content['completed_course'])
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_delete_profile_completed_course(self):
		"""
		deleteds a profile completed_course in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['completed_course', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.update(pull__completed_courses=self.content['completed_course'])
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_add_profile_skill(self):
		"""
		Adds a profile skill in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['skill', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.update(add_to_set__skills=self.content['skill'])
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_delete_profile_skill(self):
		"""
		deleteds a profile skill in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['skill', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.update(pull__skills=self.content['skill'])
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_add_profile_education(self):
		"""
		Adds a profile education in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['education', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.update(add_to_set__educations=self.content['education'])
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)

	def db_delete_profile_education(self):
		"""
		deleteds a profile educations in the database for the corresponding username
		"""

		x = checkFields(self.content, fields=['education', 'username'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		prof_obj = self.Profile.objects(username=self.content['username']).first()
		if prof_obj:
			prof_obj.update(pull__educations=self.content['education'])
			return make_response("", 200)
		else:
			return make_response("User does not exist.", 404)
