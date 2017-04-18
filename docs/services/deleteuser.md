
## Delete USer [/v1/client-retention]
Remove a user from the auto marketing email service

Set users 'soft delete' flag to true so they are not processed for emailing.

### Delete [DELETE]

+ Request with body (application/json)
    
    Data about user being updated. With following attributes are:

    + `userEmail` email address of the user
    + `userName` name of the user, ideally just the first name
    
  + Body
    { "userEmail": "john.smith@example.com", "userName": "john" }

+ Response 200 (application/vnd.api+json; charset=utf-8)
  + Body
    success

+ Response 400 (application/vnd.api+json; charset=utf-8)
  + Body
    failure or message about the input that was rejected.
    
+ Response 500 (application/vnd.api+json; charset=utf-8)
  + Body
    Problem servicing the request, try again.