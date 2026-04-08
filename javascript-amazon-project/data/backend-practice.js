//to send an http message, we would use a built in class
const xhr = new XMLHttpRequest(); // creates a new http message to send to the backend

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev"); //type of request, the second parameter is a URL(uniform resource locator)
//to send an http message, we give it the type of message we want to send and where we are sending it to
xhr.send();
/* xhr.response  //example of an asynchronous code
 */

//we can send different messages/request to a backend using a url path
//a backend only supports a certian set of url path
//status code
//the list of backends that are supported are called API's which means application programming interface(how we interact with something)
//the backend can respond with different types of data e.g 'text', 'JSON', 'HTML'
