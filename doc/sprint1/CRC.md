# CRC Cards

Class name: User <br />
Parent class (if any): <br />
Classname Subclasses (if any): StudentUser <br />
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
_______
Class name: StudentUser <br />
Parent class (if any): 
* User
Classname Subclasses (if any):<br />
Responsibilities: 
* Same as Parent
* Sign up for classes
* Book an appointment (event) with a consultant
Collaborators: 
* Same as Parent
* Course
_______
Class name: InstructorUser <br />
Parent class (if any): 
* User
Classname Subclasses (if any): <br />
Responsibilities: 
* Same as Parent
* Book an appointment (event) with a student
* Create a course
Collaborators: 
* Same as Parent
_______
Class name: SignUp <br />
Parent class (if any): <br />
Classname Subclasses (if any): <br />
Responsibilities: 
* Create a new user
Collaborators: 
* User
_______
Class name: SignIn <br />
Parent class (if any): <br />
Classname Subclasses (if any): <br />
Responsibilities: 
* Login the user
Collaborators: 
* User
_______
Class name: SignOut <br />
Parent class (if any): <br />
Classname Subclasses (if any): <br />
Responsibilities: 
* Logout the user
Collaborators: 
* User

Class name: Course <br />
Parent class (if any): <br />
Classname Subclasses (if any): <br />
Responsibilities: 
* Store data about the course
* Gets data about the course
* Access, enroll and update currently enrolled courses for a user
Collaborators: 
* User
* Material
_______
Class name: Material <br />
Parent class (if any): <br />
Classname Subclasses (if any): <br />
Responsibilities: 
* Store data about a course material
* Gets data about a course material
* Access, create and update course materials for a course
Collaborators: 
* Course
_______
Class name: Event <br />
Parent class (if any): <br />
Classname Subclasses (if any): <br />
Responsibilities: 
* Store data about the event
* Gets data about the event
* Access, create and update calendar events
Collaborators: 
* User
* Calendar
_______
Class name: Message <br />
Parent class (if any): <br />
Classname Subclasses (if any): <br />
Responsibilities: 
* Store data about the message
* Get data about the message
* Access and create conversations with particular users
Collaborators: 
* User
_______
Class name: Dashboard <br />
Parent class (if any): <br />
Classname Subclasses (if any): <br />
Responsibilities: 
* Display Calendar, Courses, News
Collaborators: 
* Calendar
* Courses
* News
_______
Class name: Calendar <br />
Parent class (if any): <br />
Classname Subclasses (if any): <br />
Responsibilities: 
* Display Events
* Organize events
Collaborators: 
* Dashboard
* User
* Event
_______
Class name: News <br />
Parent class (if any): <br />
Classname Subclasses (if any): <br />
Responsibilities: 
* Display News
Collaborators: 
* Dashboard

