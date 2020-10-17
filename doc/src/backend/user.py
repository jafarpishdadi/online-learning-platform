import mongoengine as me

# generic user class inheriting the mongo document 
class User(me.Document):
	user_type = me.StringField()
	username = me.StringField()
	password = me.StringField()
	email = me.StringField()

	def to_json(self):
		return {
			"user_type": self.user_type,
			"username": self.username,
			"password": self.password, 
			"email": self.email
		}