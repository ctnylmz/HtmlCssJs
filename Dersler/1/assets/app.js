let url = "https://www.zenemedya.com";
let youtube = "Bilgisayar Genetiği";

let result;

result = url.length;
result = youtube.length;
result = youtube.replace(" ","").length

console.log(result);

/* */
result = youtube.split(" ").length

console.log(result);

/* */
result = url.startsWith("https")

if(result == true){
    console.log("Bağlantı Güvenli");
}else{
    console.log("Bağlantı Güvenli Değil!");
}


/* */
result = url.indexOf("zene")

if(result > -1){
    console.log("Bağlantı Güvenli");
}else{
    console.log("Bağlantı Güvenli Değil!");
}

