import mongoengine as me

# generic user class inheriting the mongo document 
class User(me.Document):
	username = me.StringField()
	password = me.StringField()
	email = me.StringField()
	user_type = me.StringField()

	def to_json(self):
		return {
			"username": self.username,
			"password": self.password, 
			"email": self.email,
			"user_type": self.user_type
		}