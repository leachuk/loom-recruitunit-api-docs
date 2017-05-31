<!-- Group is a keyword to define a seperate section in the parsed docs -->     
# Group Users
Group of all resources for managing users

## Create New User [/api/users/signup{?modelId}]
Adds a new user to the client retention database for email service. The email address must not have previously been added. 

### Create [POST]

+ Parameters

  + modelId: `/services/recruitunit/users/recruitUnitUserService.controller.js` (required, string) - The id for the specific application

+ Request with body (application/json)

    Data parameters **required** to create a new user.
    
    ## Notes
    Details of body json parameters:
    
    * `email` (required, string) - Your email address for future sign in.
    * `displayName` (required, string) - Your full name.
    * `jobRole` (required, string) - Allowed values are [`developer`, `recruiter`]
    * `password` (required, string) - Your password for future sign in.
    * `key` (required, string) - A random string provided by the server for authentication.
        
  + Body
    { "email": "john.smith@example.com", "displayName": "john", "jobRole": "developer", "password" : "12345678", "key" : "123456789" }

+ Response 200 (application/json)
  + Body
    {
      "data": {
        "createUser": {
          "success": true
        }
      },
      "success": true
    }

+ Response 401 (application/json)
  + Body
    {
      "success": false,
      "data": {
        "success": false,
        "message": "missing or invalid application key"
      }
    }
    
+ Response 400 (application/json)
  + Body
    Invalid request parameters

## Sign In User [/api/recruitunit/users/signin]
Sign in using previously created credentials. Returns a JWT token which is to be managed by the application and sent in subsequent requests for authentication. 

### Sign In [POST]

+ Request with body (application/json)

    Data parameters **required** to sign in a user.
    
    ## Notes
    Details of body json parameters:
    
    * `username` (required, string) - Your email address (I know! Why not call this parameter email?).
    * `password` (required, string) - Your password.
        
  + Body
    { "username": "john.smith@example.com", "password" : "12345678" }

+ Response 200 (application/json)
  + Body
    {
      "success": true,
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImpvaG4uc21pdGhAZXhhbXBsZS5jb20iLCJjb29raWUiOiJBdXRoU2Vzc2lvbj1hbTlvYmk1emJXbDBhRUJsZUdGdGNHeGxMbU52YlRvMU9UQkVNelExUVRxUFBXZWdNN00xRDR5QmYzZTZUNVppV0hDckZ3OyBWZXJzaW9uPTE7IFBhdGg9LzsgSHR0cE9ubHkiLCJvayI6dHJ1ZSwicm9sZXMiOlsiZWRpdG9yIiwiZGV2ZWxvcGVyIl0sImlzQ29tcGFyaXNvbkZvcm1FbmFibGVkIjpmYWxzZSwidXNlckd1aWQiOiJySkFpd2tzMWIiLCJpcCI6Ijo6MSIsImlhdCI6MTQ5NDA1MDc1NywiZXhwIjoxNDk2NjQyNzU3fQ.v8YBCBTZtMCMYCYzRVkS8ld0UYxgOW_hTge1ppjaHcA"
    }

+ Response 401 (application/json)
  + Body
    {
      "success": false,
      "message": "Name or password is incorrect."
    }
    
+ Response 400 (application/json)
  + Body
    Invalid request parameters
    