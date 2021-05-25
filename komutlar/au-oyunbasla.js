const Discord = require("discord.js");
const db = require("nrc.db");

exports.run = (client, message, args) => {


}

exports.conf = {
    aliases: ["oyunbaşla", "oyunbaşlat", "oyun-başlat"],
    enabled: true,
    guildOnly: true,
    permLevel: 0
}

exports.help = {
    name: "oyun-başla",
    description: "Oyunu başlatır.",
    usage: "oyun-başla"
}