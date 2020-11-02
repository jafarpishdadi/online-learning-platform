
1- Install python 2.7+

2- Install Flask-MongoEngine and dnspython (you can use pip - a package installer for python. it comes with python)

3- Run database.py at your preferred port (you can put in the port you prefer at the end of database.py. there is already a port passed in but just in case if you want to change it)

4- Now the api is running 

**Endpoints** (you can find these details in database.py as well)

**creating a user** [POST]: **/api/db_create_use**r (creates a new user and posts it to the database when provided with a json text formatted as {user_type: user_type, user_name: user_name, password: password, email: email})

**getting a user** [GET]: **/api/db_get_user** (returns the user requested from the database when provided with a json text formatted as {email: email})

**updating a user's name** [PUT]: **/api/db_update_user_name** (updates the user's name when provided with a json text formatted as {email: email, username: username})

**updating a user's password** [PUT]:** /api/db_update_user_password** (updates the user's password when provided with a json text formatted as {email: email, password: password})

**updating a user's email** [PUT]:** /api/db_update_user_email** (updates the user's email when provided with a json text formatted as {old_email: old_email, new_email: new_email})

**deleting a single user** [DELETE]: **/api/db_delete_user** (deletes the user when provided with a json text formatted as {email: email})

**deleting all the users** [DELETE]:** /api/db_delete_all_users** (deletes all the users in the database)

**log in** [GET]: **/api/db_login** (when provided with a json text formatted as {email: email, password: password} returns {true} if such user exists and {false} o/w)
