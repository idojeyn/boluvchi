
// const yosh = son => {
//     if (son<30 ) {
//         console.log('18 yoshdan kattasiz');
//     } else if (son <60) {
//         console.log('30 yoshdan kattasiz');
//     } else  {
//         console.log('60 yoshdan kattasiz');
//     }
// }
// yosh(98);




// const boluvchi = son => {
//     if(son %2 ===0){
//         console.log('juft son');
//     }
//     else{
//         console.log('toq son')
//     }
// }

// boluvchi(10)
// for( let son=1; son<=100; son++)
//     if ( son %3===0 && son %5 ===0){
//         console.log('fizz buzz ');
//     }
//     else if(son %5 ===0){
//         console.log('buzz');
//     }
//     else if(son %3===0 ) {
//         console.log('fizz ');
//     }
//     else{
//         console.log(son);
//     }

// for( let number=100; number>=1; number--)
//     console.log(number);


// const names = [
//     "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
//     "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
//     "Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Catherine", "Daniel",
// ];


// for(let i=0 ; i<=names.length; i++)
//   {
//     console.log(names[i-1]);

//   }
//  for(let i=names.length-1;i>=0;i--)
//  {
//     console.log(names[i]);

//  }

// let mangas = [
//     { title: "Naruto", genre: "Action", rating: 5 },
//     { title: "One Piece", genre: "Adventure", rating: 9.0 },
//     { title: "Death ASDASF", genre: "Mystery", rating: 11.2 },
//     { title: "DeAFSDGth Note", genre: "Mystery", rating: 2.2 },
//     { title: "KMFKS Note", genre: "Mystery", rating: 55.2 }

// ];

// for(let i=0; i < mangas.length; i++){
//     if(mangas[i].rating>=9){
//         console.log(mangas[i].rating );
//     }
// }


// let arr = [  "Karen", "Leo", "Mia", "Nathan", "Olivia", "Peter", "Quinn", "Rachel", "Bob", "Samuel", "Tina","Umar", "Violet", "William", "Xavier", "Yasmin", "Zane", "Amber", "Brian", "Bob", "Catherine", "Daniel", "Alice", "Bob", "Charlie", "David", "Emma", "Bob", "Frank", "Grace", "Henry", "Ivy", "Jack","Karen", "Leo","Bob", "Mia", "Nathan", "Olivia", "Peter", "Bob","Quinn", "Rachel",  "Bob","Samuel", "Tina"]

// for(let i=0; i<=arr.length; i++ ){
//     if(arr[i]==='Bob')
//         {
//         console.log(arr[i]);
//     }
// }

// const changeheading = () => {
//     const heading = document.getElementById('salom');
//     salom.textContent = 'Hayir';
// }

// ------------------------------------------------------------------------------------
// const uzgaruvchi= ()=>{
//     const heading = document.getElementById('sarlavha').style.backgroundColor='red';
//     sarlavha.textContent = 'Salom';
// }
// const btn = document.getElementById('btn');
// btn.addEventListener('click',uzgaruvchi);
// function myfunction(){
//     document.getElementById('sarlavha').style.backgroundColor="blue";
// }

// -------------------------------------------------------------------------------------

// const myfunction =()=>{
//     const list=document.getElementById('sarlavha').classList;
//     list.add("style")
// }
// ------------------------------------------------------------------------------------
// const salom =document.getElementById('btn');

// salom.onclick = () => {
//     const color = document.getElementById('color').classList;
//     if (color.contains('red')) {
//         color.remove('red');
//         color.add('blue');
//     } else {
//         color.remove('blue');
//         color.add('red');
//     }
// };

// let cup1='cola';
// let cup2='fanta';
// let cup3='';

// cup3=cup1;
// cup1=cup2;
// cup2=cup3;
// cup3=''

// console.log(cup1);
// console.log(cup2);
// console.log(cup3);





