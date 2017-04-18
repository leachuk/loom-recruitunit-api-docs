    
# Client Retention Group
Group of all resources for auto marketing email service

## Add User [/v1/client-retention]
Adds a new user to the client retention database for email service. The email address must not have previously been added. 

### Create [POST]

+ Request with body (application/json)

    Data about user being added. With following attributes are:

    + `userEmail` email address of the user
    + `userName` name of the user, ideally just the first name
    + `planType` plan type the user select while submitting the sales form. Allowed values `origin maximiser`, `origin saver` or `default`. Any other values are transformed to `default`.
    + `userState` selected from users address.
    
  + Body
    { "userEmail": "john.smith@example.com", "userName": "john", "planType": "maximiser", "userState" : "VIC" }

+ Response 200 (application/vnd.api+json; charset=utf-8)
  + Body
    success

+ Response 400 (application/vnd.api+json; charset=utf-8)
  + Body
    failure or message about the input that was rejected.
    
+ Response 500 (application/vnd.api+json; charset=utf-8)
  + Body
    Problem servicing the request, try again.
