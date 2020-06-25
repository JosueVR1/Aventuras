// Este código hace que funcione Glitch
const http = require('http');                                    
const express = require('express');                              
const app = express();                                           
app.use(express.static('public'));                               
app.get("/", function (request, response) {                      
  response.sendFile(__dirname + '/views/index.html');            
});                                                              
app.get("/", (request, response) => {                            
  response.sendStatus(200);                                      
});                                                              
app.listen(process.env.PORT);                                    
setInterval(() => {                                              
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   
}, 280000);                                                      

// Definimos las variables necesarias para que el bot funcione
const Discord = require("discord.js");
const client = new Discord.Client();

// Definimos el prefix del bot
let prefix = "-"

// Activamos el evento ready
client.on('ready', () => {
  console.log('El bot ha sido encendido con éxito.')
})

// Activamos el evento message
client.on('message', async (message) => {
  
  // Hacemos que otros bots no puedan usar los comandos de este bot
  if(message.author.bot) return;
  
  // Creamos el comando ping
  if(message.content.startsWith(prefix + 'ip')) {
    message.channel.send('mc.aventuras-server.ga')
  }
  
  if(message.content.startsWith(prefix + 'Ayuda')) {
    message.channel.send('Hola, Bienvenido al canal Ayuda, a continuacion escribe tu nick y especifica en que necesitas ayuda.')
  }
  
  if(message.content.startsWith(prefix + 'Soporte')) {
    message.channel.send('Bienvenido al canal soporte, por favor escribe tu nick mas el asunto del cual necesitas atención. En breve un miembro del area de soporte te ayudara.')
  }
  
  if(message.content.startsWith(prefix + 'Abierto')) {
    message.channel.send('¡Hola Aventurero! - Nuestro servidor ya se encuentra abierto')
  }
});

// Iniciamos sesión en Discord
client.login(process.env.TOKEN)