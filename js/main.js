// let age = +prompt('Yoshingiz nechida');

// switch  (age){
//     case 18:
//         alert('Szi yoshiz 18da')
//         break;
//     case 50:
//         alert('Szi yoshiz 50da')
//         break;
//         default:
//             alert('szi yoshiz nomalum')

// }

let a = 10;
let b ="10";


// if (a==b){
//     console.log('Hello world') 
// }else{
//     console.log('Good bye');
// }

// let d;
// (a==b)? d='Judaa togri' : d= 'ha olaa'
// console.log(d);

// const svetafor = prompt("Svetafor rangini kiriting");

// if(svetafor === 'qizil'){
//     alert ("toxta")
// }else if(svetafor==="sariq"){
//     alert('tayyorlaning')
// }

// else if(svetafor=== 'yashil')  {
//     alert('yurishingiz mumkin')
// }else{
//     alert(xato)
// }

// const age = prompt('Yoshingizni kiriting')

// if(age <= 20){
//     alert('Siz yoshsiz')
// }else if(age <= 40){
//     alert ('siz orta yoshisiz')
// }else if(age > 80){
//     alert('siz qarisiz')

// }else{
//     alert('Qarib qoldiz')
// }



// if (a===b){
//     console.log('hello world');
// }else{
//     console.log('Godd bye');
// }

// let d;
// (a===b)? d= "teng" : d = "teng emas"
// console.log(d);




// switch (num> 18){
//     case 12:console.log('tugadi');break;
//     case 18:console.log('yaxshiroq ishla');break;
//     case 14:console.log('zor');break;
//     case 12:console.log('kallangni ishlat');break;
//     default:
//     case 12:console.log('tugadi');
//     console.log('hello');
// }

// function addNum(ism,familiya){
//     console.log(ism + 'FRONTEND' +familiya);
// }
// addNum('Bek ', 'Xalimov')


// let a = 10;
// let b = 10;
// let d;
// function google(name) {

//     return d = a + b;
// }
// console.log(google());

// const arrowFunc = name => {
//     return name
// }
// console.log(arrowFunc('Bilol'));

// let obj = {
//     name: 'Bek', age: 21, job: 'frontend',


// }

// console.log(obj.name, obj.age, obj.job);

// let arr = [obj, 'ali', 'codial', '23', false, {
//     name: 'ali', age: 32
// }]

// console.log(arr[4]);


window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0)  
    })
})
const menuBtn = document.querySelector('.menu-btn')
    const navigation = document.querySelector('.navigation')
    const navigationItems = document.querySelectorAll('.navigation a')
  
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active')
      navigation.classList.toggle('active')
    })
  
    navigationItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
        menuBtn.classList.remove('active')
        navigation.classList.remove('active')
      })
    })

    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('active', window.scrollY > 500)
    })
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })

    //   window.addEventListener('scroll', () => {
    //     let reveals = document.querySelectorAll('.reveal')
    
    //     for(let i = 0; i< reveals.length; i++) {
    //       let windowHeight = window.innerHeight;
    //       let revealTop = reveals[i].getBoundingClientRect().top;
    //       let revealPoint = 50;
    
    //       if(revealTop < windowHeight - revealPoint) {
    //         reveals[i].classList.add('active')
    //       }
    //     }
    //   })

    

