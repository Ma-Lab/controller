var irc = require("irc");

var config = {
        channels: ["#ma-lab", "#mediacollege"],
        server: "irc.freenode.net",
        botName: "ma-lab"
};

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
	password: process.env.IRC_PASSWORD,        
	channels: config.channels
});


bot.addListener("pm", function(from, message) {
// Do something on PM's
});

// Listen for any message, say to him/her in the room
bot.addListener("message#ma-lab", function(from, message) {

if (message.indexOf(".woof") >= 0) {
bot.say("#ma-lab", "Woof!");
}
if (message.indexOf(".meow") >= 0) {
bot.say("#ma-lab", "Meow!");
}

if (message.indexOf(".hue") >= 0) {
// Message replace ".hue" ""
// Gebruik: .hue <kleur>
}

if (message.indexOf(".flash") >= 0) {
// Message replace ".flash" ""
// Gebruik: .flash <kleur>
// Geen kleur? Flash alleen.
}

if (message.indexOf(".help") >= 0) {
bot.say("#ma-lab", "Usage: ");
bot.say("#ma-lab", ".meow | Let's the bot meow.");
bot.say("#ma-lab", ".woof | Let's the bot woof.");
bot.say("#ma-lab", ".hue <color> | Changes the Hue lights to a color of your choice.");
bot.say("#ma-lab", ".flash [color] | Flashes the leds (in a special color)");
}

});
bot.addListener("message#mediacollege", function(from, message) {

if (message.indexOf(".woof") >= 0) {
bot.say("#mediacollege", "Woof!");
}
if (message.indexOf(".meow") >= 0) {
bot.say("#mediacollege", "Meow!");
}
});
bot.addListener('error', function(message) {
    console.log('error: ', message);
});

