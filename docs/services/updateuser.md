    
## Update User [/v1/client-retention]
Update a users timestamp to be the current time. This extends the point in time at which an email is sent to the user.

### Update [PUT]

+ Request with body (application/json)
    
    Data about user being updated. With following attributes are:

    + `userEmail` email address of the user
    + `userName` name of the user, ideally just the first name
    + `planType` plan type the user select while submiting the sales form. Allowed values origin maximizer, orgin saver or default.
    + `userState` selected from users address.
    
  + Body
    { "userEmail": "john.smith@example.com", "userName": "john", "planType": "maximizer", "userState" : "VIC" }

+ Response 200 (application/vnd.api+json; charset=utf-8)
  + Body
    success

+ Response 400 (application/vnd.api+json; charset=utf-8)
  + Body
    failure or message about the input that was rejected.
    
+ Response 500 (application/vnd.api+json; charset=utf-8)
  + Body
    Problem servicing the request, try again.