# Login

## Description
Return the JWT generated after login

***

## Parameters
- **username** _(required)_ - username  (String) 
- **password** _(required)_ - password  (String) 

## Return format
A string with the signed token e.g.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InRlc3QiLCJpYXQiOjE1NDQwMzY1NzQsImV4cCI6MTU0NDYzNjU3NH0.TWyIZMoozdxf0EM4ND5VsxtMnvF7ynaR6LMXrrGkl3Y
```

## Errors

```
{
    "statusCode": 400,
    "customMessage": "Sorry!! Not able to generate token as username or password is invalid.",
    "type": "TOKEN_GENERATION_ERROR"
}
```

***

## Example
**Request**
**Request Type: POST **
**URL**
```
    http://localhost:3001/login
```
**Request Params**
```
{
	"username":"test",
	"password":"test"
}
```
**Response**
``` string
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InRlc3QiLCJpYXQiOjE1NDQwMzY1NzQsImV4cCI6MTU0NDYzNjU3NH0.TWyIZMoozdxf0EM4ND5VsxtMnvF7ynaR6LMXrrGkl3Y
```