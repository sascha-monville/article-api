# article-api


* Task 1.1:
    * Implement a JSON REST API through which you can create, edit, list, view and delete news articles.
    * An article has a name, an author, a text (plaintext, html not needed), a creation date and a publication date.
    * The listing of articles should not contain the text
    * The data should be stored in a MySQL database
    * No authentication with the api is needed


* Task 1.2:
    * Use appropriate input validations for all of your api endpoints.
* Task 1.3:
    * Your API should indicate for each article when listing and viewing whether it has a positive or rather negative sentiment. Use the API at https://sentim-api.herokuapp.com/ and integrate it into Lumen in a meaningful way.
* Task 1.4:
    * Add an expiration date to the articles model. Expired articles should not be shown requesting the listing endpoint.