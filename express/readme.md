node vs express - node is the main thing express ke code se hum server  ka cpde likh pate and server kaisa wo bhi express ke help se likhte hai

what is express js - package,  routing  

why express js - http is diffiuclt to use , express makes this easier

roting - routes banaane ke process ko hum kahte hai roting 
/profile
/home 
/contact
/profile/harish/kooejonjoqnaojioe0r0i

middleware ek aisa function hota hai jo har route se pahle chalta hai, iska matlab saare routes mein koi bhi chale usse pahle middleware chalta hai and usemein likha code pahle excute hota 


node ke saath ek dikkat hai ki agar control ek bar bhi kisi middleware par gaya to control khud se agle rloute\middleware par nahi jaayega , use agle par lejaane ke liye aapko push karna padega aur ye push kahlaayega next to chalaana

request and response
req mein saara data hota hai aane waale user kki request ki taraf ka, jaise ki uski locatoton , device info and other things , res mein controls hote hai jinke basic pe hum server se response bhej paate hai, next thing white should be executed 

route peramete 
-  to make make any route dyanmic you can use : at the place where you want to make it dynamic, and to acess there value use req.params

/author/books/issued/harsh 
/author/books/issued/harshita 
/author/books/issued/harshit

/author/books/issued/:username 

dynamic route

aisa koi bhi route jiska koi hissa baar baar same rehta hai and kuch hissa baar baar change hota hai iske liye aap ek dynamic route bana sakte hai

/profile/harish
/profile/harsh
/profile/harshita
/profile/hardik

/profile/:username 

tempalete engine 

ejs is html  with superpower

ejs setup karne ke liye 

1) ejs install
npm i ejs

2) configure ejs

app.set ("view engine", "ejs");

3) ek views folder banao

4) ek usmein ejs files banao

5) send ki jagah render karo
