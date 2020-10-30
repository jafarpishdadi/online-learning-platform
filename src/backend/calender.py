import mongoengine as me
import hashlib
from flask import Flask, make_response, request, jsonify
from Exceptions.MissingRequiredField import checkFields
from datetime import datetime
from user import UserObj
User = UserObj.User 

class CalenderObj():

    # generic user class inheriting the mongo document 
	class Event(me.Document):

		class_name = me.StringField()
		date = me.StringField()
		start_time = me.StringField()
		end_time = me.StringField()
		section = me.StringField()
		lesson = me.StringField()
		location = me.StringField()
		lable = me.StringField()
		link = me.StringField()
		email = me.StringField()

		def to_json(self):
			"""
			Returns the event object as a json.
			"""

			return {
				"class": self.class_name,
				"start_time": self.start_time,
				"end_time": self.end_time,
				"section": self.section,
				"lesson": self.lesson,
				"location": self.location,
				"lable": self.lable,
				"link": self.link,
				"email": self.email,
				"date": self.date,
			}

	def __init__(self, content):
		"""
		Instantiates a new instance of CalenderObj
		"""
		self.content = content

	def db_create_event(self):
		"""
		Creates a new event based on the json passed in
		"""

		x = checkFields(self.content, fields=['class', 'start_time', 'end_time', 'section', 'lesson','location', 'lable','link', 'email','date'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		# Checks if the class name is in use
		if (self.Event.objects(class_name=self.content['class']).count() > 0):
			return make_response("Class name already in use.", 400)
		
		# Checks if the user exists
		user_obj = User.objects(email=self.content['email']).first()
		if not user_obj:
			return make_response("", 404)

		self.Event(
			class_name=self.content['class'], 
			start_time=self.content['start_time'], 
			end_time=self.content['end_time'],
			section=self.content['section'], 
			lesson=self.content['lesson'],
			location=self.content['location'], 
			lable=self.content['lable'],
			link=self.content['link'], 
			email=self.content['email'],
			date=self.content['date']).save()
		return make_response("", 200)

	def db_get_event(self):
		"""
		Gets all the events that correspond to the user(email) on a given date
		"""

		x = checkFields(self.content, fields=['date','email'])
		if (x):
			return make_response("Missing required field: " + x, 400)
		
		events = self.Event.objects(email=self.content['email'],date=self.content['date']).all()
		if len(events) > 0:
			schedule = []
			for event in events:
				schedule.append(event.to_json())
			return make_response(jsonify(schedule), 200)
		else:
			return make_response("", 404)