# Cover Page

## **UImpactify System Design**

### Collaborators:
#### Front End
* Kirusan Subeethakumar
* Andy Huang
* Prashanth Ketheeswaran
* Lingfeng Su
#### Back End
* Osman Samet Conger
* Christopher Duong
* Jeremy Tanuan 

# Table of Contents

* [Operating Requirements](#Operating-Requirements)
* [Architecture Description](#Architecture-Description)
* [System Decomposition](#System-Decomposition)
* [CRC Cards](CRC.md)
* [Architecture Diagram](UML Software Architechture Diagram.pdf)

# Operating Requirements

Python 3.6
MongoDB
React
MongoEngine
Flask

# Architecture Description

We divide the system components into front end (Views) and back end (Models) and connect them using RESTful API (Controllers). We keep collections of objects for each element: users, courses, events, and messages. These objects are interactable through their respective controllers which in turn update the respecive collection in the database as an observer. This is displayed to and interacted by the application user through the views on pages and modules within the pages (such as calendar and messages on the dashboard page).

# System Decomposition

User objects contain all the user's profile information, have a relation to their own single Calendar object, currently enrolled Courses (StudentUsers) and message Conversations with particular Users.
* StudentUser objects have a list of currently enrolled courses.
* ConsultantUser objects can schedule appointments.

Course objects contain all the course information, have course Material files, and list of StudentUsers.

Material objects contain course material information and the file (video, pdf, etc).

Event objects contain all the event information and list of participating Users.

Message objects contain the message information and relates the sending User to the receiving User.

Errors and exceptions are handled from the ExceptionController which raises exception codes from invalid or erroneous input given to the back end. In these situations, an error code will be returned to the controller and activate the proper response in the respective view the error is related to. For example, a signup request with a username that is already taken would return a 400 code with error text 'Username already in use' and display on the signup page.
