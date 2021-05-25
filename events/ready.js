const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Bot Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${client.user.username} İsmi ile Giriş Yapıldı! UmutICE Oyun Botu Altyapısını Mutlu Kullanmanız Dileğiyle...`
  );
  client.user.setStatus("online");
  var oyun = [
    "Oyun Botu V12",
    "!yardım",
    "UmutICE Oyun Botu"

  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};