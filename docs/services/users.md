<!-- Group is a keyword to define a seperate section in the parsed docs -->     
# Group Users
Group of all resources for managing users

## Create New User [/api/users/signup{?modelId}]
Adds a new user to the client retention database for email service. The email address must not have previously been added. 

### Create [POST]

+ Parameters

  + modelId: `server/services/recruitunit/users/recruitUnitUserService.controller.js` (required, string) - The id for the specific application

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

+ Response 200 (application/vnd.api+json; charset=utf-8)
  + Body
    success

+ Response 400 (application/vnd.api+json; charset=utf-8)
  + Body
    failure or message about the input that was rejected.
    
+ Response 500 (application/vnd.api+json; charset=utf-8)
  + Body
    Problem servicing the request, try again.
