const express = require('express') // this allows us to use express
const app = express() // this is a common way to store express so 
const PORT = 8000

const rappers = {
    '21 savage': {
        'birthName': 'Shayan albir al Zarqaqi',
        'birthLocation' : 'London, UK',
        'age': 29
    },
    'chance the rapper' :{
        'birthName': 'Chancelor Bennet',
        'birthLocation' : 'Chicago, Illinois',
        'age': 29
    },
    'unknown' : {
        'birthName': 'unknown',
        'birthLocation' : 'unknown',
        'age': 'unknown'
    }
}

app.get('/', (request, response) => { // this is similar to an event listener. this is a get request
    response.sendFile(__dirname + '/index.html') // in our response, we are going to send a file in the directory we are in.
})

app.get('/api/:name', (request, response) => { //this includes a query parameter ":name"
    const rapperName = request.params.name.toLowerCase() // so if anything comes in after the '/', we can grab it here.
    if (rappers[rapperName] ) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}.`)
} )