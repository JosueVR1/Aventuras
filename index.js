//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

//
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


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('estoy listo!');
  client.user.setGame(`prueba help`);
});

client.on('message', message => {
  if (message.content.startsWith("ping")) {
   let ping = Math.floor(message.client.ping);
   message.channel.send(':ping_pong: `'+ping+' ms.`'); 
  }
  
});

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
  
  if(message.content.startsWith(prefix + 'Discord')) {
    message.channel.send('https://discord.gg/xuKX9Ce')
  }
  
  if(message.content.startsWith(prefix + 'Aniversario')) {
    message.channel.send(':tada: Servidor creado el 10/05/2020 :tada:')
  }
  
  if(message.content.startsWith(prefix + 'Comandos')) {
    message.channel.send('Ip, Bienvenido, Aniversario, Reporte, Warn, Close, Abierto, Sugerencia, Soporte, Ayuda')
  }
  
});

// Iniciamos sesión en Discord
client.login(process.env.TOKEN)