
const express = require('express') //imports the Express module into the project.
const app = express() //creates a new instance of an Express app.
const port = 8001 //sets the port number for the server to listen on.

app.get('/',(req, res) => {    //defines a route for the app using the app.get() method. In this case, the route is the root route '/'.
    res.send('Hello world!')   //sends a response to the client with the message "Hello World!" when the root route is accessed.
})

app.listen(port, ()=>{         //starts the server and listens for incoming requests on the specified port number.
    console.log(`Example app listening on port ${port}`)    //logs a message to the console indicating that the server is running and listening on the specified port number.
})
