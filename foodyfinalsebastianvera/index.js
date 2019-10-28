const request = require('request') // sirve para hacer requerimientos htpp get post put etc etc
const express = require('express') // es un framework hecho en nodejs osea tiene sus reglas y sus cosas.
const bodyParser = require('body-parser') 
const argv = require('yargs').argv;  //podemos hacer los pedidos de los platos
const app = express() 
const port = process.env.port || 8080
const horario = require('moment-timezone') 

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json()) 

var fecha= new Date();
var minutos = fecha.getMinutes();
var hora = fecha.getHours();




var url = `https://testapi.io/api/sajhu/dishes`;


var pedido =  ["A3zZHRhSewxnzLSDa","XK7LGhKJRumEff77d","njTgmZrwd37fgZGFu"]


if(hora<=19)
{
    if(hora=19&&minutos<15)
    {
        func0(url);

    }
    if(hora<19)
    {
        func0(url);

    }


   
}
else{
    console.log("estimado usuario ya cerramos")
}


function func0() {

   
      

        request({
            url: url,
            json: true
          }, (error, response, body) => {
              if(error){
                  console.log("hay un error")
                  console.log(error)
              }
              else{

                var data = body

                
function encontrarporid(data2,iden){
    for (let index = 0; index < data2.length; index++) {
       if(data2[index]._id ==iden){
        console.log("su plato elegido fue")
        console.log(data2[index].name)
        console.log("ingredientes")
        console.log(data2[index].ingredients)
     }
        
    }
    
    }
    
    for (let index2 = 0; index2 < pedido.length; index2++) {
        encontrarporid(data,pedido[index2])
        
    }
              
            
            
            
            
            
            }
          
           
         
            
          })

     
    }



app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
})
