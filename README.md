# small_eod_client

SmallEodClient - JavaScript client for small_eod_client
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: 1.0.4
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install small_eod_client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your small_eod_client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('small_eod_client')` in javascript files from the directory you ran the last command above from.

### git

If the library is hosted at a git repository, e.g. https://github.com/watchdogpolska/small-eod-sdk-javascript
then install it via:

```shell
    npm install watchdogpolska/small-eod-sdk-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SmallEodClient = require('small_eod_client');

var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME'
Basic.password = 'YOUR PASSWORD'

var api = new SmallEodClient.CasesApi()
var data = new SmallEodClient.CaseCount(); // {CaseCount} 
api.casesCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8000/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SmallEodClient.CasesApi* | [**casesCreate**](docs/CasesApi.md#casesCreate) | **POST** /cases/ | 
*SmallEodClient.CasesApi* | [**casesDelete**](docs/CasesApi.md#casesDelete) | **DELETE** /cases/{id}/ | 
*SmallEodClient.CasesApi* | [**casesList**](docs/CasesApi.md#casesList) | **GET** /cases/ | 
*SmallEodClient.CasesApi* | [**casesNotifiedUserList**](docs/CasesApi.md#casesNotifiedUserList) | **GET** /cases/{case_pk}/notifiedUser/ | 
*SmallEodClient.CasesApi* | [**casesNotifiedUserRead**](docs/CasesApi.md#casesNotifiedUserRead) | **GET** /cases/{case_pk}/notifiedUser/{id}/ | 
*SmallEodClient.CasesApi* | [**casesPartialUpdate**](docs/CasesApi.md#casesPartialUpdate) | **PATCH** /cases/{id}/ | 
*SmallEodClient.CasesApi* | [**casesRead**](docs/CasesApi.md#casesRead) | **GET** /cases/{id}/ | 
*SmallEodClient.CasesApi* | [**casesResponsibleUserList**](docs/CasesApi.md#casesResponsibleUserList) | **GET** /cases/{case_pk}/responsibleUser/ | 
*SmallEodClient.CasesApi* | [**casesResponsibleUserRead**](docs/CasesApi.md#casesResponsibleUserRead) | **GET** /cases/{case_pk}/responsibleUser/{id}/ | 
*SmallEodClient.CasesApi* | [**casesUpdate**](docs/CasesApi.md#casesUpdate) | **PUT** /cases/{id}/ | 
*SmallEodClient.ChannelsApi* | [**channelsCreate**](docs/ChannelsApi.md#channelsCreate) | **POST** /channels/ | 
*SmallEodClient.ChannelsApi* | [**channelsDelete**](docs/ChannelsApi.md#channelsDelete) | **DELETE** /channels/{id}/ | 
*SmallEodClient.ChannelsApi* | [**channelsList**](docs/ChannelsApi.md#channelsList) | **GET** /channels/ | 
*SmallEodClient.ChannelsApi* | [**channelsPartialUpdate**](docs/ChannelsApi.md#channelsPartialUpdate) | **PATCH** /channels/{id}/ | 
*SmallEodClient.ChannelsApi* | [**channelsRead**](docs/ChannelsApi.md#channelsRead) | **GET** /channels/{id}/ | 
*SmallEodClient.ChannelsApi* | [**channelsUpdate**](docs/ChannelsApi.md#channelsUpdate) | **PUT** /channels/{id}/ | 
*SmallEodClient.CollectionsApi* | [**collectionsCasesEventsList**](docs/CollectionsApi.md#collectionsCasesEventsList) | **GET** /collections/{collection_pk}/cases/{case_pk}/events/ | 
*SmallEodClient.CollectionsApi* | [**collectionsCasesEventsRead**](docs/CollectionsApi.md#collectionsCasesEventsRead) | **GET** /collections/{collection_pk}/cases/{case_pk}/events/{id}/ | 
*SmallEodClient.CollectionsApi* | [**collectionsCasesLettersList**](docs/CollectionsApi.md#collectionsCasesLettersList) | **GET** /collections/{collection_pk}/cases/{case_pk}/letters/ | 
*SmallEodClient.CollectionsApi* | [**collectionsCasesLettersRead**](docs/CollectionsApi.md#collectionsCasesLettersRead) | **GET** /collections/{collection_pk}/cases/{case_pk}/letters/{id}/ | 
*SmallEodClient.CollectionsApi* | [**collectionsCasesList**](docs/CollectionsApi.md#collectionsCasesList) | **GET** /collections/{collection_pk}/cases/ | 
*SmallEodClient.CollectionsApi* | [**collectionsCasesNotesList**](docs/CollectionsApi.md#collectionsCasesNotesList) | **GET** /collections/{collection_pk}/cases/{case_pk}/notes/ | 
*SmallEodClient.CollectionsApi* | [**collectionsCasesNotesRead**](docs/CollectionsApi.md#collectionsCasesNotesRead) | **GET** /collections/{collection_pk}/cases/{case_pk}/notes/{id}/ | 
*SmallEodClient.CollectionsApi* | [**collectionsCasesRead**](docs/CollectionsApi.md#collectionsCasesRead) | **GET** /collections/{collection_pk}/cases/{id}/ | 
*SmallEodClient.CollectionsApi* | [**collectionsCreate**](docs/CollectionsApi.md#collectionsCreate) | **POST** /collections/ | 
*SmallEodClient.CollectionsApi* | [**collectionsDelete**](docs/CollectionsApi.md#collectionsDelete) | **DELETE** /collections/{id}/ | 
*SmallEodClient.CollectionsApi* | [**collectionsList**](docs/CollectionsApi.md#collectionsList) | **GET** /collections/ | 
*SmallEodClient.CollectionsApi* | [**collectionsPartialUpdate**](docs/CollectionsApi.md#collectionsPartialUpdate) | **PATCH** /collections/{id}/ | 
*SmallEodClient.CollectionsApi* | [**collectionsRead**](docs/CollectionsApi.md#collectionsRead) | **GET** /collections/{id}/ | 
*SmallEodClient.CollectionsApi* | [**collectionsTokensCreate**](docs/CollectionsApi.md#collectionsTokensCreate) | **POST** /collections/{collection_pk}/tokens/ | 
*SmallEodClient.CollectionsApi* | [**collectionsUpdate**](docs/CollectionsApi.md#collectionsUpdate) | **PUT** /collections/{id}/ | 
*SmallEodClient.DescriptionsApi* | [**descriptionsCreate**](docs/DescriptionsApi.md#descriptionsCreate) | **POST** /descriptions/ | 
*SmallEodClient.DescriptionsApi* | [**descriptionsDelete**](docs/DescriptionsApi.md#descriptionsDelete) | **DELETE** /descriptions/{id}/ | 
*SmallEodClient.DescriptionsApi* | [**descriptionsList**](docs/DescriptionsApi.md#descriptionsList) | **GET** /descriptions/ | 
*SmallEodClient.DescriptionsApi* | [**descriptionsPartialUpdate**](docs/DescriptionsApi.md#descriptionsPartialUpdate) | **PATCH** /descriptions/{id}/ | 
*SmallEodClient.DescriptionsApi* | [**descriptionsRead**](docs/DescriptionsApi.md#descriptionsRead) | **GET** /descriptions/{id}/ | 
*SmallEodClient.DescriptionsApi* | [**descriptionsUpdate**](docs/DescriptionsApi.md#descriptionsUpdate) | **PUT** /descriptions/{id}/ | 
*SmallEodClient.EventsApi* | [**eventsCreate**](docs/EventsApi.md#eventsCreate) | **POST** /events/ | 
*SmallEodClient.EventsApi* | [**eventsDelete**](docs/EventsApi.md#eventsDelete) | **DELETE** /events/{id}/ | 
*SmallEodClient.EventsApi* | [**eventsList**](docs/EventsApi.md#eventsList) | **GET** /events/ | 
*SmallEodClient.EventsApi* | [**eventsPartialUpdate**](docs/EventsApi.md#eventsPartialUpdate) | **PATCH** /events/{id}/ | 
*SmallEodClient.EventsApi* | [**eventsRead**](docs/EventsApi.md#eventsRead) | **GET** /events/{id}/ | 
*SmallEodClient.EventsApi* | [**eventsUpdate**](docs/EventsApi.md#eventsUpdate) | **PUT** /events/{id}/ | 
*SmallEodClient.FeaturesApi* | [**featuresCreate**](docs/FeaturesApi.md#featuresCreate) | **POST** /features/ | 
*SmallEodClient.FeaturesApi* | [**featuresDelete**](docs/FeaturesApi.md#featuresDelete) | **DELETE** /features/{id}/ | 
*SmallEodClient.FeaturesApi* | [**featuresFeatureoptionCreate**](docs/FeaturesApi.md#featuresFeatureoptionCreate) | **POST** /features/{feature_pk}/featureoption/ | 
*SmallEodClient.FeaturesApi* | [**featuresFeatureoptionDelete**](docs/FeaturesApi.md#featuresFeatureoptionDelete) | **DELETE** /features/{feature_pk}/featureoption/{id}/ | 
*SmallEodClient.FeaturesApi* | [**featuresFeatureoptionList**](docs/FeaturesApi.md#featuresFeatureoptionList) | **GET** /features/{feature_pk}/featureoption/ | 
*SmallEodClient.FeaturesApi* | [**featuresFeatureoptionPartialUpdate**](docs/FeaturesApi.md#featuresFeatureoptionPartialUpdate) | **PATCH** /features/{feature_pk}/featureoption/{id}/ | 
*SmallEodClient.FeaturesApi* | [**featuresFeatureoptionRead**](docs/FeaturesApi.md#featuresFeatureoptionRead) | **GET** /features/{feature_pk}/featureoption/{id}/ | 
*SmallEodClient.FeaturesApi* | [**featuresFeatureoptionUpdate**](docs/FeaturesApi.md#featuresFeatureoptionUpdate) | **PUT** /features/{feature_pk}/featureoption/{id}/ | 
*SmallEodClient.FeaturesApi* | [**featuresList**](docs/FeaturesApi.md#featuresList) | **GET** /features/ | 
*SmallEodClient.FeaturesApi* | [**featuresPartialUpdate**](docs/FeaturesApi.md#featuresPartialUpdate) | **PATCH** /features/{id}/ | 
*SmallEodClient.FeaturesApi* | [**featuresRead**](docs/FeaturesApi.md#featuresRead) | **GET** /features/{id}/ | 
*SmallEodClient.FeaturesApi* | [**featuresUpdate**](docs/FeaturesApi.md#featuresUpdate) | **PUT** /features/{id}/ | 
*SmallEodClient.InstitutionsApi* | [**institutionsCreate**](docs/InstitutionsApi.md#institutionsCreate) | **POST** /institutions/ | 
*SmallEodClient.InstitutionsApi* | [**institutionsDelete**](docs/InstitutionsApi.md#institutionsDelete) | **DELETE** /institutions/{id}/ | 
*SmallEodClient.InstitutionsApi* | [**institutionsList**](docs/InstitutionsApi.md#institutionsList) | **GET** /institutions/ | 
*SmallEodClient.InstitutionsApi* | [**institutionsPartialUpdate**](docs/InstitutionsApi.md#institutionsPartialUpdate) | **PATCH** /institutions/{id}/ | 
*SmallEodClient.InstitutionsApi* | [**institutionsRead**](docs/InstitutionsApi.md#institutionsRead) | **GET** /institutions/{id}/ | 
*SmallEodClient.InstitutionsApi* | [**institutionsUpdate**](docs/InstitutionsApi.md#institutionsUpdate) | **PUT** /institutions/{id}/ | 
*SmallEodClient.LettersApi* | [**lettersCreate**](docs/LettersApi.md#lettersCreate) | **POST** /letters/ | 
*SmallEodClient.LettersApi* | [**lettersDelete**](docs/LettersApi.md#lettersDelete) | **DELETE** /letters/{id}/ | 
*SmallEodClient.LettersApi* | [**lettersFileSignCreate**](docs/LettersApi.md#lettersFileSignCreate) | **POST** /letters/file/sign | 
*SmallEodClient.LettersApi* | [**lettersFilesCreate**](docs/LettersApi.md#lettersFilesCreate) | **POST** /letters/{letter_pk}/files/ | 
*SmallEodClient.LettersApi* | [**lettersFilesDelete**](docs/LettersApi.md#lettersFilesDelete) | **DELETE** /letters/{letter_pk}/files/{id}/ | 
*SmallEodClient.LettersApi* | [**lettersFilesList**](docs/LettersApi.md#lettersFilesList) | **GET** /letters/{letter_pk}/files/ | 
*SmallEodClient.LettersApi* | [**lettersFilesPartialUpdate**](docs/LettersApi.md#lettersFilesPartialUpdate) | **PATCH** /letters/{letter_pk}/files/{id}/ | 
*SmallEodClient.LettersApi* | [**lettersFilesRead**](docs/LettersApi.md#lettersFilesRead) | **GET** /letters/{letter_pk}/files/{id}/ | 
*SmallEodClient.LettersApi* | [**lettersFilesUpdate**](docs/LettersApi.md#lettersFilesUpdate) | **PUT** /letters/{letter_pk}/files/{id}/ | 
*SmallEodClient.LettersApi* | [**lettersList**](docs/LettersApi.md#lettersList) | **GET** /letters/ | 
*SmallEodClient.LettersApi* | [**lettersPartialUpdate**](docs/LettersApi.md#lettersPartialUpdate) | **PATCH** /letters/{id}/ | 
*SmallEodClient.LettersApi* | [**lettersRead**](docs/LettersApi.md#lettersRead) | **GET** /letters/{id}/ | 
*SmallEodClient.LettersApi* | [**lettersUpdate**](docs/LettersApi.md#lettersUpdate) | **PUT** /letters/{id}/ | 
*SmallEodClient.NotesApi* | [**notesCreate**](docs/NotesApi.md#notesCreate) | **POST** /notes/ | 
*SmallEodClient.NotesApi* | [**notesDelete**](docs/NotesApi.md#notesDelete) | **DELETE** /notes/{id}/ | 
*SmallEodClient.NotesApi* | [**notesList**](docs/NotesApi.md#notesList) | **GET** /notes/ | 
*SmallEodClient.NotesApi* | [**notesPartialUpdate**](docs/NotesApi.md#notesPartialUpdate) | **PATCH** /notes/{id}/ | 
*SmallEodClient.NotesApi* | [**notesRead**](docs/NotesApi.md#notesRead) | **GET** /notes/{id}/ | 
*SmallEodClient.NotesApi* | [**notesUpdate**](docs/NotesApi.md#notesUpdate) | **PUT** /notes/{id}/ | 
*SmallEodClient.TagsApi* | [**tagsCreate**](docs/TagsApi.md#tagsCreate) | **POST** /tags/ | 
*SmallEodClient.TagsApi* | [**tagsDelete**](docs/TagsApi.md#tagsDelete) | **DELETE** /tags/{id}/ | 
*SmallEodClient.TagsApi* | [**tagsList**](docs/TagsApi.md#tagsList) | **GET** /tags/ | 
*SmallEodClient.TagsApi* | [**tagsPartialUpdate**](docs/TagsApi.md#tagsPartialUpdate) | **PATCH** /tags/{id}/ | 
*SmallEodClient.TagsApi* | [**tagsRead**](docs/TagsApi.md#tagsRead) | **GET** /tags/{id}/ | 
*SmallEodClient.TagsApi* | [**tagsUpdate**](docs/TagsApi.md#tagsUpdate) | **PUT** /tags/{id}/ | 
*SmallEodClient.UsersApi* | [**usersCreate**](docs/UsersApi.md#usersCreate) | **POST** /users/ | 
*SmallEodClient.UsersApi* | [**usersDelete**](docs/UsersApi.md#usersDelete) | **DELETE** /users/{id}/ | 
*SmallEodClient.UsersApi* | [**usersList**](docs/UsersApi.md#usersList) | **GET** /users/ | 
*SmallEodClient.UsersApi* | [**usersPartialUpdate**](docs/UsersApi.md#usersPartialUpdate) | **PATCH** /users/{id}/ | 
*SmallEodClient.UsersApi* | [**usersRead**](docs/UsersApi.md#usersRead) | **GET** /users/{id}/ | 
*SmallEodClient.UsersApi* | [**usersUpdate**](docs/UsersApi.md#usersUpdate) | **PUT** /users/{id}/ | 


## Documentation for Models

 - [SmallEodClient.AddressDataNested](docs/AddressDataNested.md)
 - [SmallEodClient.CaseCount](docs/CaseCount.md)
 - [SmallEodClient.Channel](docs/Channel.md)
 - [SmallEodClient.Collection](docs/Collection.md)
 - [SmallEodClient.Description](docs/Description.md)
 - [SmallEodClient.Event](docs/Event.md)
 - [SmallEodClient.ExternalIdentifierNested](docs/ExternalIdentifierNested.md)
 - [SmallEodClient.Feature](docs/Feature.md)
 - [SmallEodClient.FeatureOption](docs/FeatureOption.md)
 - [SmallEodClient.File](docs/File.md)
 - [SmallEodClient.InlineResponse200](docs/InlineResponse200.md)
 - [SmallEodClient.InlineResponse2001](docs/InlineResponse2001.md)
 - [SmallEodClient.InlineResponse20010](docs/InlineResponse20010.md)
 - [SmallEodClient.InlineResponse20011](docs/InlineResponse20011.md)
 - [SmallEodClient.InlineResponse20012](docs/InlineResponse20012.md)
 - [SmallEodClient.InlineResponse20013](docs/InlineResponse20013.md)
 - [SmallEodClient.InlineResponse2002](docs/InlineResponse2002.md)
 - [SmallEodClient.InlineResponse2003](docs/InlineResponse2003.md)
 - [SmallEodClient.InlineResponse2004](docs/InlineResponse2004.md)
 - [SmallEodClient.InlineResponse2005](docs/InlineResponse2005.md)
 - [SmallEodClient.InlineResponse2006](docs/InlineResponse2006.md)
 - [SmallEodClient.InlineResponse2007](docs/InlineResponse2007.md)
 - [SmallEodClient.InlineResponse2008](docs/InlineResponse2008.md)
 - [SmallEodClient.InlineResponse2009](docs/InlineResponse2009.md)
 - [SmallEodClient.Institution](docs/Institution.md)
 - [SmallEodClient.Letter](docs/Letter.md)
 - [SmallEodClient.ModelCase](docs/ModelCase.md)
 - [SmallEodClient.NestedFeatureOption](docs/NestedFeatureOption.md)
 - [SmallEodClient.Note](docs/Note.md)
 - [SmallEodClient.SignRequest](docs/SignRequest.md)
 - [SmallEodClient.Tag](docs/Tag.md)
 - [SmallEodClient.TokenSet](docs/TokenSet.md)
 - [SmallEodClient.User](docs/User.md)


## Documentation for Authorization



### Basic


- **Type**: HTTP basic authentication

