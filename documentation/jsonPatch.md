# Json Patch

## Description
Return the Json after applying json patch to the json object

***

##Auth 
- **token** _(required)_ - Token Generated from the login API need to passed as auth.

## Error if auth token is not passed

```
{
    statusCode: 401,
    customMessage: 'Authentication Failed. Token was not passed.',
    type: 'TOKEN_NOT_PASSED'
}
```

## Error if token passed is invalid
```
{
    statusCode: 401,
    customMessage: 'Authentication Failed. Token Passed is Invalid',
    type: 'TOKEN_VERIFICATION_FAILED'
}
```


## Parameters
- **jsonPayload** _(required)_ - Object
- **jsonPatch** _(required)_ - Object

## Return format
A json object 

```
{
    "test": "bar",
    "new": "bar"
}
```


***

## Example
**Request**
**Request Type: POST **
**URL**
```
    http://localhost:3001/jsonPatch
```
**Request**


```
{
	"jsonPayload":{
        "greeting":"Welcome",
        "test": "testing123"
    },
	"jsonPatch": [
        {"op": "replace", "path": "/test", "value": "Hello World!!!"},
        {"op": "add", "path": "/new", "value": "this is new"}, 
        { "op": "remove", "path": "/greeting" }
    ]
}
```

**Response**

```
{
    test: "Hello World!!!", 
    new: "this is new"
}
```
