# CRC Cards

Class name: User
Parent class (if any):
Classname Subclasses (if any): StudentUser
Responsibilities: 
* Store data about the user
* Gets data about the user
Collaborators: 
* SignUp
* SignIn
* SignOut
* Message
* Event
* Course

Class name: StudentUser
Parent class (if any): User
Classname Subclasses (if any):
Responsibilities: 
* Same as Parent
* Sign up for classes
* Book an appointment (event) with a consultant
Collaborators: 
* Same as Parent
* Course

Class name: ConsultantUser
Parent class (if any): User
Classname Subclasses (if any):
Responsibilities: 
* Same as Parent
* Book an appointment (event) with a student
Collaborators: 
* Same as Parent

Class name: SignUp
Parent class (if any): 
Classname Subclasses (if any): 
Responsibilities: 
* Create a new user
Collaborators: 
* User

Class name: SignIn
Parent class (if any): 
Classname Subclasses (if any): 
Responsibilities: 
* Login the user
Collaborators: 
* User

Class name: SignOut
Parent class (if any): 
Classname Subclasses (if any): 
Responsibilities: 
* Logout the user
Collaborators: 
* User

Class name: Course
Parent class (if any):
Classname Subclasses (if any):
Responsibilities: 
* Store data about the course
* Gets data about the course
* Access, enroll and update currently enrolled courses for a user
Collaborators: 
* User
* Material

Class name: Material
Parent class (if any):
Classname Subclasses (if any):
Responsibilities: 
* Store data about a course material
* Gets data about a course material
* Access, create and update course materials for a course
Collaborators: 
* Course

Class name: Event
Parent class (if any):
Classname Subclasses (if any):
Responsibilities: 
* Store data about the event
* Gets data about the event
* Access, create and update calendar events
Collaborators: 
* User

Class name: Message
Parent class (if any): 
Classname Subclasses (if any): 
Responsibilities: 
* Store data about the message
* Get data about the message
* Access and create conversations with particular users
Collaborators: 
* User
