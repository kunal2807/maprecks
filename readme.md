<h1>
user routes:
</h1>
<h3>
1. POST api/users
</h3>
<ul>
   <li> params: request.body = {userId, lisenceCode} </li>
   <li> function: register new clients (admin privlage) </li>
   <li> visibility: admin (for now, it is public just for testing purposes)</li>
   <li> response: user object but user not registred (if user id or liscence is unique) </li>
   <li> error: User Id or liscence code already exists (if not unique) </li>
</ul>
<h3>
2. POST /api/users/liscence
</h3>
<ul>
   <li> params: request.body = {userId, lisenceCode} </li>
   <li> function: before user registers, checks if userid and liscencecode is correct </li>
   <li> visibility: public </li>
   <li> response: user object but user not registred (if correct combo) </li>
   <li> error: Invalid liscence code (if incorrect combo) </li>
</ul>
<h3>
3. PUT /api/users/profile
</h3>
<ul>
   <li> params: - </li>
   <li> function: update user profile </li>
   <li> visibility: Private </li>
   <li> response: updated user object </li>
   <li> error: user id not found </li>
</ul>
<h3>
4. PUT /api/users/create
</h3>
<ul>
   <li> params: request.body = user object (already authed from liscence) </li>
   <li> function: create user profile and give auth token </li>
   <li> visibility: semi-public </li>
   <li> response: updated user object </li>
   <li> error: all fields are required for new user (if incomplete data) </li>
</ul>
<h3>
5. POST /api/users/login
</h3>
<ul>
   <li> params: request.body = {userId, password} </li>
   <li> function: authenticate users and give token </li>
   <li> visibility: public </li>
   <li> response: user object and token (if correct combo) </li>
   <li> error: Invalid username or password (if incorrect combo) </li>
</ul>

<ul>
   <li> params: request.body = {userId, password} </li>
   <li> function: authenticate users and give token </li>
   <li> visibility: public </li>
   <li> response: user object and token (if correct combo) </li>
   <li> error: Invalid username or password (if incorrect combo) </li>
</ul>

<h6> to access any private route, just send auth token in header as Bearer /*token*/ </h6>

<h1>
   face routes
</h1>

<h3>
1. GET /api/faces/myfaces
</h3>
<ul>
   <li> params: - </li>
   <li> function: get all faces of the user </li>
   <li> visibility: private </li>
   <li> response: array of face objects </li>
   <li> error: none </li>
</ul>
<h3>
2. Get /api/faces/:id
</h3>
<ul>
   <li> params: - </li>
   <li> function: get all detail of particular person </li>
   <li> visibility: private </li>
   <li> response: face object </li>
   <li> error: face not found </li>
</ul>
<h3>
3. DELETE /api/faces/:id
</h3>
<ul>
   <li> params: - </li>
   <li> function: remove person </li>
   <li> visibility: private </li>
   <li> response: face object </li>
   <li> error: face not found </li>
</ul>
<h3>
4. POST /api/faces
</h3>
<ul>
   <li> params: images, video, name, age, gender </li>
   <li> function: add a person </li>
   <li> visibility: private </li>
   <li> response: face object </li>

<h1>
   car routes
</h1>
