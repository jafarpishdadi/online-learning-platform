import mongoengine as me
import hashlib
from flask import Flask, make_response, request, jsonify
from Exceptions.MissingRequiredField import checkFields
from datetime import datetime
from user import UserObj
User = UserObj.User 

class Board():
    """
    This class holds all the CRUD methods for the messages
    """
	
    # generic Thread class inheriting the mongo document 
    class Thread(me.Document):

        title = me.StringField(required=True)
        users = me.ListField(me.StringField(required=True))
        bodies = me.ListField(me.StringField(required=True))
        timestamps = me.ListField(me.StringField(required=True))

        def to_json(self):
            """
            Returns the message object as a json.
            """

            return {
                "title": self.title,
                "users": self.users,
                "bodies": self.bodies, 
                "timestamps": self.timestamps,
                "_id": str(self.pk)
            }

    def __init__(self, content):
        """
        Instantiates a new instance of MessageObj
        """
        self.content = content

    def db_create_thread(self):
        """
        creates a thread for the first time
        """
        x = checkFields(self.content, fields=['username', 'title', 'body'])
        if (x):
            return make_response("Missing required field: " + x, 400)

        if (User.objects(username=self.content['username']).count() <= 0):
            return make_response("Username does not exist.", 404)

        self.Thread(users=[self.content['username']], bodies=[self.content['body']], timestamps=[datetime.now().strftime("%m/%d/%Y, %H:%M:%S")], title = self.content['title']).save()
        return make_response("", 200)

    def db_put_thread_reply(self):
        x = checkFields(self.content, fields=['username', '_id', 'body'])
        if (x):
            return make_response("Missing required field: " + x, 400)

        if (User.objects(username=self.content['username']).count() <= 0):
            return make_response("Username does not exist.", 404)

        thread = self.Thread.objects(pk=self.content['_id']).first()
        if thread:
            thread.users.append(self.content["username"])
            thread.bodies.append(self.content["body"])
            thread.timestamps.append(datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))
            thread.save()
            return make_response("", 200)
        else:
            return make_response("Thread does not exist.", 404)

    def db_get_thread_id(self):
        thread = self.Thread.objects(pk=self.content['_id']).first()
        if thread:
            return make_response(jsonify(thread.to_json()), 200)
        else:
            return make_response("Thread does not exist.", 404)

    def db_get_all_threads(self):

        thread = self.Thread.objects().all()
        if len(thread) > 0:
            board = []
            for t in thread:
                board.append(t.to_json())
            return make_response(jsonify(board), 200)
        else:
            return make_response("No Threads", 404)