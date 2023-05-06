//3-cü gün dərsimizə xoşgəldiniz tam qaz davam edirik
//Qarşılaşdırma operatorları yazacayıq
// bərabərsə
/* != bərabər deyilse*/
// === data type ile bərabərsə{string}
/* !==  data type ile bərabər deyilse{string}*/
//  > boyukse
// < kicikse
//  >= boyuk beraberse
// <= kicik beraberse 
let a =10
let b =10
if(a==b){
    console.log(true)      //true
} else{                  
    console.log(false)
}
let c =11
let d =10
if(c==d){
    console.log(true)      //false  //burda != olsa idi eger onda true donecekdir

} else{
    console.log(false)
}
let ad ="Asim"
let name ="asim" //cunki a herfi balacadi
if(name===ad){
    console.log(true)      //false   //burda !== olsa onda true donecekdir
} else{
    console.log(false)
}

let n =5
let m =5
if(n>=m){
    console.log(true)   //burda >= ve ya <= olsada true donecekdir
}else{
    console.log(false)
}

//qisa if yeni if else yazmadan bir kod yaza bilirik 
 let user ='Asim'
 let username ='Asim'
   user===username ? alert('Welcome Page') : alert('Username wrong') /* Eger username user'e beraberdirse
    o zaman birinci alerti  calisdir amma deyilse ikinci alerti calistir */
   //hemde console.logda yoxlayaq bu sefer ise username wrong olsun
   let password = 'Asim1234'
   let dbpass ='asim1234'
   password===dbpass ? console.log("Succesfully") : console.log("Password Wrong")

   //Exercise heresine uygun kod yazin 