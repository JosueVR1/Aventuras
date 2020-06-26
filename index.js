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
  
  if(message.content.startsWith(prefix + 'ayuda')) {
    message.channel.send('Hola, Bienvenido al canal Ayuda, a continuacion escribe tu nick y especifica en que necesitas ayuda.')
  }
  
  if(message.content.startsWith(prefix + 'Soporte')) {
    message.channel.send('Bienvenido al canal soporte, por favor escribe tu nick mas el asunto del cual necesitas atención. En breve un miembro del area de soporte te ayudara.')
  }
  
  if(message.content.startsWith(prefix + 'soporte')) {
    message.channel.send('Bienvenido al canal soporte, por favor escribe tu nick mas el asunto del cual necesitas atención. En breve un miembro del area de soporte te ayudara.')
  }
  
  if(message.content.startsWith(prefix + 'Abierto')) {
    message.channel.send('¡Hola Aventurero! - la espera acabo, nuestro servidor ya se encuentra abierto. @everyone')
  }
  
  if(message.content.startsWith(prefix + 'Cerrado')) {
    message.channel.send('¡Hola Aventurero! - Lamento informarte que nuestro servidor se encuentra en mantenimiento, por favor se paciente que estamos trabajando para seguir mejorando. @everyone')
  }
  
  if(message.content.startsWith(prefix + 'Sugerencia')) {
    message.channel.send('Acabas de abrir una sugerencia, a continuacion escribe tu nick mas tu sugerencia, no olvides poner -Close al terminar. @everyone')
  }
  
  if(message.content.startsWith(prefix + 'Close')) {
    message.channel.send('¡Gracias por tu sugerencia!')
  }
  
  if(message.content.startsWith(prefix + 'Warn')) {
    message.channel.send('¡Advertencia estas rompiendo una norma!')
  }
  
  if(message.content.startsWith(prefix + 'Reporte')) {
    message.channel.send('Acabas de abrir un reporte, por favor a continuacion escribe tu nick mas tu reporte. @everyone')
  }
  
  if(message.content.startsWith(prefix + 'reporte')) {
    message.channel.send('Acabas de abrir un reporte, por favor a continuacion escribe tu nick mas tu reporte. @everyone')
  }
  
   if(message.content.startsWith(prefix + 'Ip')) {
    message.channel.send('mc.aventuras-server.ga')
  }
  
     if(message.content.startsWith(prefix + 'Bienvenido')) {
    message.channel.send('¡Hola Aventurero te espera una gran aventura por descubrir!')
  }
  
     if(message.content.startsWith(prefix + 'Misiones')) {
    message.channel.send(':pushpin:Reglas para las misiones. 1- Se prohíbe el uso de comandos que te beneficien en la misión. Se prohíbe armar equipos para completar una misión [solo es permitido si la misión lo solicita]. Se prohibe el uso de hacks o ayuda en la elaboración de misiones.Se prohíbe la divulgación de las soluciones a las misiones.Se prohíbe aprovecharse de algún bug.:warning:Recuerda el incumplimiento de estas reglas será motivo de sanción.')
  }
  
  if(message.content.startsWith(prefix + 'Aniversario')) {
    message.channel.send(':tada: Servidor creado el 10/05/2020 :tada:')
  }
  
});

// Iniciamos sesión en Discord
client.login(process.env.TOKEN)