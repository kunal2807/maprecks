<h1>
user routes:
</h1>
<h3>
1. POST api/users
</h3>
<ul>
   <li> params: request.body = {userId, lisenceCode} </li>
   <li> function: register new clients (admin privlage) </li>
   <li> visibility: admin </li>
   <li> response: user object but user not registred (if user id or liscence is unique) </li>
   <li> error: User Id or liscence code already exists (if not unique) </li>
</ul>
2. POST /api/users/liscence
   params: request.body = {userId, lisenceCode}
   function: before user registers, checks if userid and liscencecode is correct
   visibility: public
   response: user object but user not registred (if correct combo)
   error: Invalid liscence code (if incorrect combo)
3. PUT /api/users/profile
   params: request.body = user object (already authed)
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
