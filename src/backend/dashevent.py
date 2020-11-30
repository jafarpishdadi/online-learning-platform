import mongoengine as me
import hashlib
import ast
from flask import Flask, make_response, request, jsonify
from Exceptions.MissingRequiredField import checkFields



class dasheventObj():
	"""
	This class holds all the CRUD methods for the dashevents 
	"""
	
	# generic dashevent class inheriting the mongo document 
	class dashevent(me.Document):

		dashevent_category = me.StringField()
		dashevent_name = me.StringField()
		dashevent_instructor = me.StringField()
		students = me.ListField(me.StringField())
		extra_info = me.StringField()

		def to_json(self):
			"""
			Returns the dashevent object as a json.
			"""

			return {
				"dashevent_category": self.dashevent_category,
				"dashevent_name": self.dashevent_name,
				"dashevent_instructor": self.dashevent_instructor, 
				"students": ''.join(self.students),
				"extra_info": self.extra_info
			}

	def __init__(self, content):
		"""
		Instantiates a new instance of dasheventObj
		"""
		self.content = content
	
	def db_add_dashevent(self):
		"""
		Saves the current dashevent to the database.
		"""

		x = checkFields(self.content, fields=['dashevent_category', 'dashevent_name', 'dashevent_instructor', 'extra_info'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		if (self.dashevent.objects(dashevent_name=self.content['dashevent_name']).count() > 0):
			return make_response("There already exists a dashevent with the same name.", 400)

		self.dashevent(dashevent_category=self.content['dashevent_category'], dashevent_name=self.content['dashevent_name'], dashevent_instructor=self.content['dashevent_instructor'], students = [], extra_info=self.content['extra_info']).save()
		return make_response("", 200)

	def db_add_student_to_dashevent(self):
		'''
		Adds the student passed in to the provided dashevent
		'''

		x = checkFields(self.content, fields=['dashevent_name', 'student'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		dashevent_obj = self.dashevent.objects(dashevent_name=self.content['dashevent_name']).first()
		if dashevent_obj:
			self.dashevent.objects(dashevent_name=self.content['dashevent_name']).update_one(push__students=self.content['student'])
			return make_response("", 200)
		else:
			return make_response("dashevent does not exist.", 404) 

	def db_remove_student_from_dashevent(self):
		'''
		Removes the student passed in to the provided dashevent
		'''

		x = checkFields(self.content, fields=['dashevent_name', 'student'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		dashevent_obj = self.dashevent.objects(dashevent_name=self.content['dashevent_name']).first()
		if dashevent_obj:
			self.dashevent.objects(dashevent_name=self.content['dashevent_name']).update(pull__students=self.content['student'])
			return make_response("", 200)
		else:
			return make_response("dashevent does not exist.", 404) 

	def db_get_dashevent(self):
		"""
		Returns a dashevent based off of the dashevent name passed in.
		"""

		x = checkFields(self.content, fields=['dashevent_name'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		dashevent_obj = self.dashevent.objects(dashevent_name=self.content['dashevent_name']).first()
		if dashevent_obj:
			return make_response(jsonify(dashevent_obj.to_json()), 200)
		else:
			return make_response("", 404)

	def db_get_dashevents_of_instructor(self):
		"""
		Returns all of the dashevents thought by the instructor passed in.
		"""

		x = checkFields(self.content, fields=['dashevent_instructor'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		dashevents = [];
		for dashevent_obj in self.dashevent.objects(dashevent_instructor=self.content['dashevent_instructor']):
			dashevents.append(dashevent_obj.dashevent_name)

		return make_response(jsonify(dashevents), 200)

	def db_get_dashevents_of_student(self):
		"""
		Returns all of the dashevents taken by the student passed in.
		"""

		x = checkFields(self.content, fields=['student'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		student = self.content['student']
		dashevents_taken = [];
		for dashevent_obj in self.dashevent.objects():
			students = dashevent_obj.students
			if student in students:
				dashevents_taken.append(dashevent_obj.dashevent_name)

		return make_response(jsonify(dashevents_taken), 200)


	def db_update_dashevent_category(self):
		"""
		Updates the dashevent category in the database for the corresponding dashevent
		"""

		x = checkFields(self.content, fields=['dashevent_name', 'dashevent_category'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		dashevent_obj = self.dashevent.objects(dashevent_name=self.content['dashevent_name']).first()
		if dashevent_obj:
			dashevent_obj.update(dashevent_category=self.content['dashevent_category'])
			return make_response("", 200)
		else:
			return make_response("dashevent does not exist.", 404)
	
	def db_update_dashevent_name(self):
		"""
		Updates the name of the dashevent in the database for the corresponding dashevent name
		"""

		x = checkFields(self.content, fields=['old_dashevent_name', 'new_dashevent_name'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		dashevent_obj = self.dashevent.objects(dashevent_name=self.content['old_dashevent_name']).first()
		if dashevent_obj:
			dashevent_obj.update(dashevent_name=self.content['new_dashevent_name'])
			return make_response("", 200)
		else:
			return make_response("dashevent does not exist.", 404)

	def db_update_dashevent_instructor(self):
		"""
		Updates the instructor of the dashevent corresponding to the dashevent name in the database 
		"""

		x = checkFields(self.content, fields=['dashevent_name', 'dashevent_instructor'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		dashevent_obj = self.dashevent.objects(dashevent_name=self.content['dashevent_name']).first()
		if dashevent_obj:
			dashevent_obj.update(dashevent_instructor=self.content['dashevent_instructor'])
			return make_response("", 200)
		else:
			return make_response("dashevent does not exist.", 404)

	def db_delete_single_dashevent(self):
		"""
		Delete a single dashevent in the database
		"""

		x = checkFields(self.content, fields=['dashevent_name'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		dashevent_obj = self.dashevent.objects(dashevent_name=self.content['dashevent_name']).first()
		if dashevent_obj:
			dashevent_obj.delete()
			return make_response("", 200)
		else:
			return make_response("dashevent does not exist.", 404)

	def db_get_all_dashevents(self):
		"""
		gets all dashevents in the database
		"""
		dashevents = []

		for dashevent in self.dashevent.objects():
			dashevents.append(dashevent)
		return make_response(jsonify(dashevents), 200)
