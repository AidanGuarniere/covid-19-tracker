// //testing constants by div
// const s_1 = document.querySelector(".Sym1");
// const s_2 = document.querySelector(".Sym2");
// const s_3 = document.querySelector(".Sym3");
// const s_4 = document.querySelector(".Sym4");
// const s_5 = document.querySelector(".Sym5");
// const s_6 = document.querySelector(".Sym6");
// const s_7 = document.querySelector(".Sym7");
// const s_8 = document.querySelector(".Sym8");
// const s_9 = document.querySelector(".Sym9");
// const s_10 = document.querySelector(".Sym10");
// const s_11 = document.querySelector(".Sym11");
// const submitBtn = document.getElementById("add");

// // //testing constants by id adding value
// // const fever = document.querySelector(".value");
// // const breath = document.querySelector(".value");

// //value of container
// let form_container = [value =1];
 
// //testing by constants added eventlisteners

// s_1.addEventListener("click", function () {
//     let p =  value;
//     for (let i = 0; i < value.length; i++) {
//         if (i < 0)
//         p += 0 };
//         console.log(p);
// })

// s_2.addEventListener("click", function () {
//     let p =  value;
//     for (let i = 0; i < value.length; i++) {
//         if (i < 0)
//         p += 0 };
//         console.log(p);
//     })

// s_3.addEventListener("click", function () {
//         let p =  value;
//         for (let i = 0; i < value.length; i++) {
//             if (i < 0)
//             p += 0 };
//             console.log(p);
//     })

// s_4.addEventListener("click", function () {
//     let p =  value;
//     for (let i = 0; i < value.length; i++) {
//         if (i < 0)
//         p += 0 };
//         console.log(p);
// })

// s_5.addEventListener("click", function () {
//     let p =  value;
//     for (let i = 0; i < value.length; i++) {
//         if (i < 0)
//         p += 0 };
//         console.log(p);
// })

// s_6.addEventListener("click", function () {
//     let p =  value;
//     for (let i = 0; i < value.length; i++) {
//         if (i < 0)
//         p += 0 };
//         console.log(p);
// })

// s_8.addEventListener("click", function () {
//     let p =  value;
//     for (let i = 0; i < value.length; i++) {
//         if (i < 0)
//         p += 0 };
//         console.log(p);
// })

// s_9.addEventListener("click", function () {
//     let p =  value;
//     for (let i = 0; i < value.length; i++) {
//         if (i < 0)
//         p += 0 };
//         console.log(p);
// })

// s_10.addEventListener("click", function () {
//     let p =  value;
//     for (let i = 0; i < value.length; i++) {
//         if (i < 0)
//         p += 0 };
//         console.log(p);
// })

// s_11.addEventListener("click", function () {

//     let p =  value;
//     for (let i = 0; i < value.length; i++) {
//         if (i < 0)
//         p += 0 };
//         console.log(p);
// })

// // // ends survey
// // const survey= document.querySelector(".form_container");
// // const end = document.querySelector(".end");

// //  submitBtn.addEventListener("click", function (sum) {
    
//         //might have to push each individual checkbox numeric value to array and sum up values
//         //sum function that loops over array
//                    let submitBtn_array = [s_1, s_2, s_3, s_4, s_5, s_6, s_7, s_8, s_9, s_10, s_11];

//      submitBtn.addEventListener("click",
    
//  function(event) {
//                event.preventDefault();
//                 //console.log("PLEASE")

//                 for (var i = 0 ; i < submitBtn_array.length ; i++) {//loop through each array
               
//                  var score = //array to push total

//                         function getScores() {
//                             while (score.length < 11) {
//                                 score.push(parseInt(submitBtn_array[i]));
                            
//                             }
//                              console.log(score)
//                         }
                        
//                      function calculate(score) {
//                             var total = 0;
//                             for (var i = 0; i < score.length; i++) {
//                                 total += score[i];
//                                 console.log(total)
//                                 average = (total / score.length)

//                             }
//                         }

//                      function showScores() {
//                         alert("The average of those scores is: " + average);
    
//                             }

                           
//                      }
//              getScores();
//             calculate();
//             // showScores();

//              }
               
               
//      )             
              
              
              
//                 // console.log(score)
            
    
      
    
//     // let calculate = document.createElement('p')
//     // tally.textContent = data.calculate.score
//     // if(data.calculate.score > 5){
//     //   tally.setAttribute('class', 'bg-danger'); //greater than 5 is danger zone
//     //   }
//     //   else if (data.calculate.score>=3){
//     //     tally.setAttribute('class', 'bg-warning'); //greater than equal to 3 is warning
//     //   } else{
//     //     tally.setAttribute('class', 'bg-success'); // everything else or less than 3 is "good/green"
//     //   }
      
    


document.querySelector("#action").addEventListener('click',function(event) {
    event.preventDefault()
    let symps = document.querySelectorAll('.symptoms') 
    let score= 0;
    for (let i = 0; i < symps.length; i++) {
        const element = symps[i];
        if (element.checked){
            score++;
        }
        console.log(score)
    }
})