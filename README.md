![Foto](https://files.catbox.moe/w8pvim.jpg)
### Penjelasan
ini adalah script bot telegram yang berfungsi otomatis untuk melakukan spam otp ke whatsapp.

---
#### Instalasi dan jalankan
1. install paket penting
```
pkg update && pkg upgrade -y
pkg install git nodejs-lts -y
```
---
2. clone repository
```
git clone https://github.com/HanX-ID/bot-spam
cd bot-spam
```
---
3. seting bot
```
nano seting.js
```
```javascript
module.exports = {
  token: "TOKEN_BOT",
  admin: 123456789  
}
```
ubah `TOKEN_BOT` dengan token bot telegram, dan ubah `123456789` dengan id admin telegram 

---
4. jalankan bot
```
npm install
npm start
```
---
**Author:** [HanX](https://github.com/HanX-ID)
