# SmallEodClient.UsersApi

All URIs are relative to *http://localhost:8000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCreate**](UsersApi.md#usersCreate) | **POST** /users/ | 
[**usersDelete**](UsersApi.md#usersDelete) | **DELETE** /users/{id}/ | 
[**usersList**](UsersApi.md#usersList) | **GET** /users/ | 
[**usersPartialUpdate**](UsersApi.md#usersPartialUpdate) | **PATCH** /users/{id}/ | 
[**usersRead**](UsersApi.md#usersRead) | **GET** /users/{id}/ | 
[**usersUpdate**](UsersApi.md#usersUpdate) | **PUT** /users/{id}/ | 



## usersCreate

> User usersCreate(data)



API endpoint that allows users to be viewed or edited.

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.UsersApi();
var data = new SmallEodClient.User(); // User | 
apiInstance.usersCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersDelete

> usersDelete(id)



API endpoint that allows users to be viewed or edited.

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.UsersApi();
var id = 56; // Number | A unique integer value identifying this user.
apiInstance.usersDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this user. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## usersList

> InlineResponse2001 usersList(opts)



API endpoint that allows users to be viewed or edited.

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.UsersApi();
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.usersList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPartialUpdate

> User usersPartialUpdate(id, data)



API endpoint that allows users to be viewed or edited.

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.UsersApi();
var id = 56; // Number | A unique integer value identifying this user.
var data = new SmallEodClient.User(); // User | 
apiInstance.usersPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this user. | 
 **data** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersRead

> User usersRead(id)



API endpoint that allows users to be viewed or edited.

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.UsersApi();
var id = 56; // Number | A unique integer value identifying this user.
apiInstance.usersRead(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this user. | 

### Return type

[**User**](User.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUpdate

> User usersUpdate(id, data)



API endpoint that allows users to be viewed or edited.

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.UsersApi();
var id = 56; // Number | A unique integer value identifying this user.
var data = new SmallEodClient.User(); // User | 
apiInstance.usersUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this user. | 
 **data** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

