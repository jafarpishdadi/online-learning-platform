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

		name = me.StringField()
		date = me.StringField()
		start_time = me.StringField()
		event_type = me.StringField()
		event_info = me.StringField()
		email = me.StringField()

		def to_json(self):
			"""
			Returns the event object as a json.
			"""

			return {
				"name": self.name,
				"start_time": self.start_time,
				"event_type": self.event_type,
				"event_info": self.event_info,
				"email": self.email,
				"date": self.date,
				"_id": str(self.pk)
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

		x = checkFields(self.content, fields=['name', 'start_time', 'event_type', 'email','date','event_info'])
		if (x):
			return make_response("Missing required field: " + x, 400)
	
		# Checks if the user exists
		user_obj = User.objects(email=self.content['email']).first()
		if not user_obj:
			return make_response("User does not exist", 404)

		# Checks if there are events on the same date
		sameDateEvent = self.Event.objects(date=self.content['date'])
		for event in sameDateEvent:
			# make sure no event has the same name, or time on the same date
			if event.name == self.content['name']:
				return make_response("Event with the same name exists on date", 400)
			if event.start_time == self.content['start_time']:
				return make_response("Event with the same start_time exists on date", 400)

		self.Event(
			name=self.content['name'], 
			start_time=self.content['start_time'], 
			event_type=self.content['event_type'],
			event_info=self.content['event_info'],
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
		events = sorted(events, key=lambda x: x.start_time)
		if len(events) > 0:
			schedule = []
			for event in events:
				schedule.append(event.to_json())
			return make_response(jsonify(schedule), 200)
		else:
			return make_response("Event for user does not exist", 404)
	
	def db_update_event(self):
		"""
		Updates the event in the database for the corresponding email
		"""

		x = checkFields(self.content, fields=['_id','name', 'start_time', 'event_type', 'email','date','event_info'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		# Checks if the event exists for the user
		event = self.Event.objects(class_name=self.content['_id'], email=self.content['email']).first()
		if event:
			event.update(
				pk=self.content['_id'],
				name=self.content['name'], 
				start_time=self.content['start_time'], 
				event_type=self.content['event_type'],
				event_info=self.content['event_info'],
				email=self.content['email'],
				date=self.content['date'])
			return make_response("", 200)
		else:
			return make_response("Event not found", 400)
	
	def db_delete_event(self):
		"""
		Delete a single event in the database
		"""

		x = checkFields(self.content, fields=['_id'])
		if (x):
			return make_response("Missing required field: " + x, 400)

		event = self.Event.objects(pk=self.content['_id']).first()
		if event:
			event.delete()
			return make_response("", 200)
		else:
			return make_response("Event does not exist.", 404)