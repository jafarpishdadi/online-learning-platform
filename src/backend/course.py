import mongoengine as me
import hashlib
import ast
from flask import Flask, make_response, request, jsonify
from Exceptions.MissingRequiredField import checkFields



class CourseObj():
	"""
	This class holds all the CRUD methods for the courses 
	"""
	
	# generic course class inheriting the mongo document 
	class Course(me.Document):

		course_category = me.StringField()
		course_name = me.StringField()
		course_instructor = me.StringField()
		students = me.ListField(me.StringField())
		extra_info = me.StringField()

		def to_json(self):
			"""
			Returns the course object as a json.
			"""

			return {
				"course_category": self.course_category,
				"course_name": self.course_name,
				"course_instructor": self.course_instructor, 
				"students": ''.join(self.students),
				"extra_info": self.extra_info
			}

	def __init__(self, content):
		"""
		Instantiates a new instance of CourseObj
		"""
		self.content = content
	
	def db_create_course(self):
		"""
		Saves the current course to the database.
		"""

		x = checkFields(self.content, fields=['course_category', 'course_name', 'course_instructor', 'extra_info'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		if (self.Course.objects(course_name=self.content['course_name']).count() > 0):
			return make_response("There already exists a course with the same name.", 400)

		self.Course(course_category=self.content['course_category'], course_name=self.content['course_name'], course_instructor=self.content['course_instructor'], students = [], extra_info=self.content['extra_info']).save()
		return make_response("", 200)

	def db_add_student_to_course(self):
		'''
		Adds the student passed in to the provided course
		'''

		x = checkFields(self.content, fields=['course_name', 'student'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		course_obj = self.Course.objects(course_name=self.content['course_name']).first()
		if course_obj:
			self.Course.objects(course_name=self.content['course_name']).update_one(push__students=self.content['student'])
			return make_response("", 200)
		else:
			return make_response("Course does not exist.", 404) 

	def db_remove_student_from_course(self):
		'''
		Removes the student passed in to the provided course
		'''

		x = checkFields(self.content, fields=['course_name', 'student'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		course_obj = self.Course.objects(course_name=self.content['course_name']).first()
		if course_obj:
			self.Course.objects(course_name=self.content['course_name']).update(pull__students=self.content['student'])
			return make_response("", 200)
		else:
			return make_response("Course does not exist.", 404) 

	def db_get_course(self):
		"""
		Returns a course based off of the course name passed in.
		"""

		x = checkFields(self.content, fields=['course_name'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		course_obj = self.Course.objects(course_name=self.content['course_name']).first()
		if course_obj:
			return make_response(jsonify(course_obj.to_json()), 200)
		else:
			return make_response("", 404)

	def db_get_courses_of_instructor(self):
		"""
		Returns all of the courses thought by the instructor passed in.
		"""

		x = checkFields(self.content, fields=['course_instructor'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		courses = [];
		for course_obj in self.Course.objects(course_instructor=self.content['course_instructor']):
			courses.append(course_obj.course_name)

		return make_response(jsonify(courses), 200)

	def db_get_courses_of_student(self):
		"""
		Returns all of the courses taken by the student passed in.
		"""

		x = checkFields(self.content, fields=['student'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		student = self.content['student']
		courses_taken = [];
		for course_obj in self.Course.objects():
			students = course_obj.students
			if student in students:
				courses_taken.append(course_obj.course_name)

		return make_response(jsonify(courses_taken), 200)


	def db_update_course_category(self):
		"""
		Updates the course category in the database for the corresponding course
		"""

		x = checkFields(self.content, fields=['course_name', 'course_category'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		course_obj = self.Course.objects(course_name=self.content['course_name']).first()
		if course_obj:
			course_obj.update(course_category=self.content['course_category'])
			return make_response("", 200)
		else:
			return make_response("Course does not exist.", 404)
	
	def db_update_course_name(self):
		"""
		Updates the name of the course in the database for the corresponding course name
		"""

		x = checkFields(self.content, fields=['old_course_name', 'new_course_name'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		course_obj = self.Course.objects(course_name=self.content['old_course_name']).first()
		if course_obj:
			course_obj.update(course_name=self.content['new_course_name'])
			return make_response("", 200)
		else:
			return make_response("Course does not exist.", 404)

	def db_update_course_instructor(self):
		"""
		Updates the instructor of the course corresponding to the course name in the database 
		"""

		x = checkFields(self.content, fields=['course_name', 'course_instructor'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		course_obj = self.Course.objects(course_name=self.content['course_name']).first()
		if course_obj:
			course_obj.update(course_instructor=self.content['course_instructor'])
			return make_response("", 200)
		else:
			return make_response("Course does not exist.", 404)

	def db_delete_single_course(self):
		"""
		Delete a single course in the database
		"""

		x = checkFields(self.content, fields=['course_name'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		course_obj = self.Course.objects(course_name=self.content['course_name']).first()
		if course_obj:
			course_obj.delete()
			return make_response("", 200)
		else:
			return make_response("Course does not exist.", 404)

	def db_get_all_courses(self):
		"""
		gets all courses in the database
		"""
		courses = []

		for course in self.Course.objects():
			courses.append(course)
		return make_response(jsonify(courses), 200)
