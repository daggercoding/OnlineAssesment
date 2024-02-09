const express = require("express")
const app = express()
const cors = require("cors")
const dummyData = [{
"id": 1,
"first_name": "Maritsa",
"last_name": "Burnet",
"email": "mburnet0@slideshare.net",
"nationality": "Russia"
},
{
"id": 2,
"first_name": "Mollie",
"last_name": "Kubalek",
"email": "mkubalek1@scribd.com",
"nationality": "France"
},
{
"id": 3,
"first_name": "Pebrook",
"last_name": "Owbridge",
"email": "powbridge2@sakura.ne.jp",
"nationality": "Russia"
},
{
"id": 4,
"first_name": "Brigham",
"last_name": "Goard",
"email": "bgoard3@cdc.gov",
"nationality": "Japan"
},
{
"id": 5,
"first_name": "Spense",
"last_name": "Mewitt",
"email": "smewitt4@businesswire.com",
"nationality": "Russia"
},
{
"id": 6,
"first_name": "Biddy",
"last_name": "Addis",
"email": "baddis5@facebook.com",
"nationality": "United States"
},
{
"id": 7,
"first_name": "Aggi",
"last_name": "Kemme",
"email": "akemme6@npr.org",
"nationality": "Japan"
},
{
"id": 8,
"first_name": "Stephi",
"last_name": "Fallen",
"email": "sfallen7@house.gov",
"nationality": "France"
},
{
"id": 9,
"first_name": "Lexy",
"last_name": "Whittlesey",
"email": "lwhittlesey8@qq.com",
"nationality": "South Korea"
},
{
"id": 10,
"first_name": "Cart",
"last_name": "Corcoran",
"email": "ccorcoran9@dmoz.org",
"nationality": "France"
},
{
"id": 11,
"first_name": "Andras",
"last_name": "Skewes",
"email": "askewesa@disqus.com",
"nationality": "Russia"
},
{
"id": 12,
"first_name": "Rosie",
"last_name": "Fealty",
"email": "rfealtyb@ted.com",
"nationality": "Japan"
},
{
"id": 13,
"first_name": "Vina",
"last_name": "Melliard",
"email": "vmelliardc@networksolutions.com",
"nationality": "Russia"
},
{
"id": 14,
"first_name": "Fee",
"last_name": "Nickoll",
"email": "fnickolld@shareasale.com",
"nationality": "Germany"
},
{
"id": 15,
"first_name": "Maddy",
"last_name": "Kolak",
"email": "mkolake@marriott.com",
"nationality": "France"
},
{
"id": 16,
"first_name": "Jessee",
"last_name": "Wallbanks",
"email": "jwallbanksf@marriott.com",
"nationality": "South Korea"
},
{
"id": 17,
"first_name": "Jocelin",
"last_name": "Carrington",
"email": "jcarringtong@flickr.com",
"nationality": "France"
},
{
"id": 18,
"first_name": "Carie",
"last_name": "Loffhead",
"email": "cloffheadh@globo.com",
"nationality": "France"
},
{
"id": 19,
"first_name": "Edvard",
"last_name": "Tall",
"email": "etalli@indiatimes.com",
"nationality": "United States"
},
{
"id": 20,
"first_name": "Sharai",
"last_name": "Recke",
"email": "sreckej@joomla.org",
"nationality": "France"
},
{
"id": 21,
"first_name": "Fletch",
"last_name": "Melato",
"email": "fmelatok@mapquest.com",
"nationality": "United States"
},
{
"id": 22,
"first_name": "Ailsun",
"last_name": "Digger",
"email": "adiggerl@ftc.gov",
"nationality": "Russia"
},
{
"id": 23,
"first_name": "Lynde",
"last_name": "Lafflina",
"email": "llafflinam@newsvine.com",
"nationality": "South Korea"
},
{
"id": 24,
"first_name": "Bunny",
"last_name": "McGrouther",
"email": "bmcgrouthern@amazon.co.uk",
"nationality": "United States"
},
{
"id": 25,
"first_name": "Bili",
"last_name": "Stokell",
"email": "bstokello@europa.eu",
"nationality": "Russia"
},
{
"id": 26,
"first_name": "Lennie",
"last_name": "Dearth",
"email": "ldearthp@pinterest.com",
"nationality": "Russia"
},
{
"id": 27,
"first_name": "Hayward",
"last_name": "Whistan",
"email": "hwhistanq@gizmodo.com",
"nationality": "France"
},
{
"id": 28,
"first_name": "Latisha",
"last_name": "Ornelas",
"email": "lornelasr@foxnews.com",
"nationality": "United States"
},
{
"id": 29,
"first_name": "Aloisia",
"last_name": "Seegar",
"email": "aseegars@php.net",
"nationality": "France"
},
{
"id": 30,
"first_name": "Henderson",
"last_name": "Van Ross",
"email": "hvanrosst@xing.com",
"nationality": "Japan"
},
{
"id": 31,
"first_name": "Serge",
"last_name": "Benning",
"email": "sbenningu@businesswire.com",
"nationality": "Russia"
},
{
"id": 32,
"first_name": "Findlay",
"last_name": "Taunton",
"email": "ftauntonv@icio.us",
"nationality": "South Korea"
},
{
"id": 33,
"first_name": "Leonhard",
"last_name": "Faccini",
"email": "lfacciniw@paypal.com",
"nationality": "Russia"
},
{
"id": 34,
"first_name": "Neils",
"last_name": "Impleton",
"email": "nimpletonx@wordpress.org",
"nationality": "Japan"
},
{
"id": 35,
"first_name": "Zsazsa",
"last_name": "Edinboro",
"email": "zedinboroy@marriott.com",
"nationality": "France"
},
{
"id": 36,
"first_name": "Garik",
"last_name": "MacKenzie",
"email": "gmackenziez@businesswire.com",
"nationality": "Japan"
},
{
"id": 37,
"first_name": "Flory",
"last_name": "Harradence",
"email": "fharradence10@lycos.com",
"nationality": "Russia"
},
{
"id": 38,
"first_name": "Irma",
"last_name": "Furley",
"email": "ifurley11@blogger.com",
"nationality": "United States"
},
{
"id": 39,
"first_name": "Robbie",
"last_name": "Earl",
"email": "rearl12@comsenz.com",
"nationality": "United States"
},
{
"id": 40,
"first_name": "Frederica",
"last_name": "Walford",
"email": "fwalford13@spotify.com",
"nationality": "Russia"
},
{
"id": 41,
"first_name": "Ahmed",
"last_name": "Shearer",
"email": "ashearer14@wikimedia.org",
"nationality": "France"
},
{
"id": 42,
"first_name": "Gustave",
"last_name": "Shrubsall",
"email": "gshrubsall15@sina.com.cn",
"nationality": "Russia"
},
{
"id": 43,
"first_name": "Fayina",
"last_name": "Tofpik",
"email": "ftofpik16@odnoklassniki.ru",
"nationality": "France"
},
{
"id": 44,
"first_name": "Morganica",
"last_name": "Dales",
"email": "mdales17@ucoz.com",
"nationality": "United States"
},
{
"id": 45,
"first_name": "Alli",
"last_name": "Mc Grath",
"email": "amcgrath18@ning.com",
"nationality": "Japan"
},
{
"id": 46,
"first_name": "Blanch",
"last_name": "Rubenovic",
"email": "brubenovic19@quantcast.com",
"nationality": "France"
},
{
"id": 47,
"first_name": "Averill",
"last_name": "Ochterlony",
"email": "aochterlony1a@google.com.br",
"nationality": "France"
},
{
"id": 48,
"first_name": "Laura",
"last_name": "Hinckes",
"email": "lhinckes1b@stanford.edu",
"nationality": "Japan"
},
{
"id": 49,
"first_name": "Rodolph",
"last_name": "Minors",
"email": "rminors1c@mit.edu",
"nationality": "France"
},
{
"id": 50,
"first_name": "Lurleen",
"last_name": "Merdew",
"email": "lmerdew1d@nature.com",
"nationality": "United States"
}
]

app.use(cors())
app.get("/data", (req, res) =>{
    res.status(200).json({dummyData})
}) 

app.listen(4000,() =>{
    console.log("app is listen at 4000")
} )