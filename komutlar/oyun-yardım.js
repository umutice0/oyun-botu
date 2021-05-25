const Discord = require("discord.js")

exports.run = (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle("Oyun Bot - Oyun Yardım Menüsü")
.setDescription("►!among-us - Among Us Oyununu Başlatırsınız.\n►!vampir-köylü - Vampir Köylü Oyununu Başlatırsınız.\n►Bom Oyunu Kanal Ayarlanınca Otomatik Başlar.")
.setFooter("UmutICE Oyun Botu")
.setTimestamp()

message.channel.send(embed)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["game-help", "oyunyardım", "gamehelp"],
    permLevel: 0
}

exports.help = {
    name: "oyun-yardım",
    description: "Oyun Yardım Komutu",
    usage: "!oyun-yardım"
}