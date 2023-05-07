//4-cü gün dərsimizə xoşgəldiniz tam qaz davam edirik

/*
 Switch,case.break,&&,xeta ayirma(try,catch),new date,getdate
*/
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(`Today ${day}`);
    break;
  case 1:
    day = "Monday";
    console.log(`Today ${day}`);
    break;
  case 2:
    day = "Tuesday";
    console.log(`Today ${day}`);
    break;
  case 3:
    day = "Wednesday";
    console.log(`Today ${day}`);
    break;
  case 4:
    day = "Thursday";
    console.log(`Today ${day}`);
    break;
  case 5:
    day = "Friday";
    console.log(`Today ${day}`);
    break;
  case 6:
    day = "Saturday";
    console.log(`Today ${day}`);
}
/* Switch case break funksiyası burda bize veririki ilk başda eger sunday ise diger funksiyanı çalışdırmasın*/
/*Buna gore biz burda case deyer veririk amma ki diger funk çalışmaması üçün biz burda break istifade edirik  */
/*new Date().getDay() bu ise yeni tarix yaradır ver get date ise bizim indiki olduğumuz tarix dəyərin allr */
/*İndi ise && bunu gorek ve buna uygun bir funksiya yazaq  */
let dbpass ="1234"
let dbuser='asimsafar'
let pass ="1234"
let user ="asimsafar"

if(dbpass===pass && dbuser===user){
    console.log('Welcome Page')
}
/*Burda kecen dersde gorduyumuz muqasiye parametrlerinden istifade etmekle bu kod calisdi ve bize welcome page-i dondurdu 
 */
 let a =10
try {
     console.log(a+b)
} catch (error) {
    alert(error)
}
/* Burda biz error olaraq bize error verdi bunu harda calisdirmaq olar meselen back-end yazarken
   user create codun yazirsiniz amma islemir onda xetani tapmaq ucun try catch-dan istifade etmek olar/.
   Ve ya basqa bir yerlerde . Men en cox user create ederken ve ya funskiya yazanda istifade edirem 
*/
let c =30
let d =20
try {
     if(c>d){
     throw `boyuk`
     }
} catch (error) {
    if(error===`boyuk`){
        console.log('c d-den boyuk deyil')
    }
}

/*Evvelceden texmin edirikse burda throwdan istifade edirik */

/*Ozunuz butun yazdiqlarimi praktika edin yoxsa hecne anlamayacaqsiniz ;) */