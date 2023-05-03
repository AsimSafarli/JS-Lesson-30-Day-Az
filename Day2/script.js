//2 data tipi var dedik 1-ci dersde bu data tipin biride iptidai olmayan data tipidir
//Array,Object 
let num1 =[1,2,3]
let num2 =num1
let code ='JavaScript'
console.log(code[5])
console.log(num1==num2)//true
let obj1 ={
    name:'juliana',
    sname:'aleskarov',
    age:19
}
let obj2 ={
    name:'juliana',
    sname:'aleskarov',
     age:19
}
console.log(obj1==obj2)//false
console.log(Math.cos(100))//cos,sin,log,log10 ve bir cox funksiyasi

let n ='jony'
let sn ='asdfg'
let s=''
let a =20
console.log(`Salam Azerbaycan bunu yazan ${n} ${s} ${sn} ${s} ${a}`)

//toUpperCase() r=>R
let uni ='adnsu'
console.log(uni.toUpperCase())
//toLowerCase() R=>r
let Uni ='ADNSU'
console.log(Uni.toLowerCase())
//substring() Asim =>Sim
let country = 'Azerbaijan'
console.log(country.substring(4,10)) //baijan
//Split() 
//'Salam Azerbaycan Men Geldim'=>[Salam Azerbaycan Men Geldim]
//'Salam Azerbaycan Men Geldim'=>['Salam','Azerbaycan','Men','Geldim']
let welcome = 'Salam Azerbaycan Men Geldim'
console.log(welcome.split())
console.log(welcome.split(''))
//trim()  ' Hello guys ' => Hello guys (without trim)
//      ' Hello guys ' =>Hello guys (with trim)
//let's  
 let medicine ='  aspirin kardio  '
 console.log(medicine)
 console.log(medicine.trim())
//includes() 'Men ise gedirem '  we use includes when i want to find words in sentence 
let work ='Men ise gedirem'
console.log(work.includes('ise'))
//replace()  'i learn JavaScript' =>'i learn css'
let learn = 'i learn JavaScript'
console.log(learn.replace('JavaScript','css'))