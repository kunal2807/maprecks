user routes:

1. POST api/users
   params: request.body = {userId, lisenceCode}
   function: register new clients (admin privlage)
   visibility: admin
   response: user object but user not registred (if user id or liscence is unique)
   error: User Id or liscence code already exists (if not unique)
2. POST /api/users/liscence
   params: request.body = {userId, lisenceCode}
   function: before user registers, checks if userid and liscencecode is correct
   visibility: public
   response: user object but user not registred (if correct combo)
   error: Invalid liscence code (if incorrect combo)
3. PUT /api/users/profile
   params: -
   function: update user profile
   visibility: Private
   response: updated user object
   error: user id not found
4. PUT /api/users/create
   params: request.body = user object (already authed from liscence)
   function: create user profile and give auth token
   visibility: semi-public
   response: updated user object
   error: all fields are required for new user (if incomplete data)
5. POST /api/users/login
   params: request.body = {userId, password}
   function: authenticate users and give token
   visibility: public
   response: user object and token (if correct combo)
   error: Invalid username or password (if incorrect combo)

face routes:

1. GET /api/faces/myfaces
   params: -
   function: get all faces of the user
   visibility: private
   response: array of face objects
   error: none
2. Get /api/faces/:id
   params: -
   function: get all detail of particular person
   visibility: private
   response: face object
   error: face not found
3. DELETE /api/faces/:id
   params: -
   function: remove person
   visibility: private
   response: face object
   error: face not found
4. POST /api/faces
   params: images, video, name, age, gender
   function: add a person
   visibility: private
   response: face object
