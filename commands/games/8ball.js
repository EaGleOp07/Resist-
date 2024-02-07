const Discord = require("discord.js");

module.exports = {
  name: "8ball",
  description: "Tells you a fortune",
  run: async (client, message, args) => {
    if (args.length == 0)
      return message.channel
        .send("`Usage: 8ball <msg>`")
        .then((msg) =>setTimeout(() => msg.delete(), 2300));
        
        var fortunes = [
            "Yes.",
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now...",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good...",
            "Very doubtful.",
            "Absolutely!",
            "Certainly!",
            "It's a possibility.",
            "Highly likely.",
            "It's in the cards.",
            "You're on the right track.",
            "Definitely.",
            "For sure!",
            "It's a sure thing.",
            "Undoubtedly.",
            "Absolutely not.",
            "No way!",
            "Forget about it.",
            "Not a chance.",
            "I wouldn't bet on it.",
            "Nope.",
            "Sorry, but no.",
            "The outlook is grim.",
            "Chances are slim.",
            "Don't get your hopes up.",
            "Unlikely.",
            "It's improbable.",
            "You might want to reconsider.",
            "The answer is unclear.",
            "Try again later.",
            "I'm not certain.",
            "I have my doubts.",
            "It's a mystery.",
            "I'm stumped.",
            "I'm not sure.",
            "I'm drawing a blank.",
            "Ask someone else.",
            "Seek advice from a friend.",
            "Trust your instincts.",
            "Listen to your heart.",
            "Follow your dreams.",
            "Explore new possibilities.",
            "Embrace change.",
            "Take a leap of faith.",
            "Choose the path less traveled.",
            "Be patient.",
            "Stay positive.",
            "Stay optimistic.",
            "Stay focused.",
            "Stay determined.",
            "Stay true to yourself.",
            "Believe in yourself.",
            "You've got this!",
            "You can do it!",
            "You're stronger than you think.",
            "Don't give up.",
            "Keep pushing forward.",
            "Keep moving forward.",
            "Success is within reach.",
            "Good things are coming your way.",
            "Stay hopeful.",
            "Stay motivated.",
            "Stay inspired.",
            "Stay confident.",
            "Stay grounded.",
            "Stay humble.",
            "Stay kind.",
            "Stay grateful.",
            "Stay positive.",
            "Stay optimistic.",
            "Stay strong.",
            "Stay focused.",
            "Stay determined.",
            "Stay true to yourself.",
            "Believe in yourself.",
            "You've got this!",
            "You can do it!",
            "You're stronger than you think.",
            "Don't give up.",
            "Keep pushing forward.",
            "Keep moving forward.",
            "Success is within reach.",
            "Good things are coming your way.",
            "Stay hopeful.",
            "Stay motivated.",
            "Stay inspired.",
            "Stay confident.",
            "Stay grounded.",
            "Stay humble.",
            "Stay kind.",
            "Stay grateful."
        ];
        
    await message.channel.send(
      fortunes[Math.floor(Math.random() * fortunes.length)]
    );
  },
};