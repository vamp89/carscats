const express = require("express");
const app = express();
const port = 8000;



// para los posts
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Para las vistas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// para archivos estaticos
app.use('/static', express.static("static"));

// Acá ponemos las rutas
app.get("/users", function (request,response){
  const users_array= [
    {name: "Michael", email: "michael@codingdojo.com"},
    {name: "Jay", email: "jay@codingdojo.com"},
    {name: "Brendan", email: "brendan@condingdojo.com"},
    {name: "Andrew", email: "andrew@condingdojo.com"}
  ]
  response.render('users',{users: users_array});
})



app.listen(port, function() {
  console.log('Escuchando en el puerto ' + port);
});
