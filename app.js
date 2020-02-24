
// allen
{
// function QuestionsMarks(str) { 
//     var char;
//     var flag = false;
//     // go along the string
//     for (let i=0;i<str.length-1;i++) {
//         // get character number i
//         char = str.charAt(i); 
//         // check if char is a number
//         if (!isNaN(char)) {
//             var first = Number(char);
//             var qmarks = 0;
            
//             // count qmarks till next number
//             for (var n=i+1;n<str.length;n++) {
//                 var second = str.charAt(n);
//                 if (second=="?") qmarks++;
//                 if (!isNaN(second)) break;
//             };
//             second = Number(second); 
            
//             // check if there is a pair adding up to 10 with 3 qmarks inbetween
//             if (first+second==10&&qmarks==3) flag = true
//                 // or if there is a pair adding up to 10 without 3 qmarks inbitween
//                 else if (first+second==10&&qmarks!=3) return false;

//             // console.log('first', first, 'second', second, i, qmarks,  n);
//             i = n-1;
//         };
//     };
//         // code goes here
//         str = flag;
//         return str;
// };
}

// sultan
function QuestionsMarks(str) { 
    var value = -1;
    var questionsMarksCount = 0;
    var hasValid = false;

    for (let i=0; i<str.length - 1; i++) {
      var char = str.charAt(i);

      if (isNaN(char)) {
        if (char == "?") {
          questionsMarksCount++
        }
        continue;
      }

      var number = Number(char);
      if (value == -1) {
        value = number;
        questionsMarksCount = 0;
        continue
      }

      if (value + number == 10) {
        if (questionsMarksCount == 3) {
          hasValid = true;
        } else {
          return false;
        }
      } 

      value = -1;
      questionsMarksCount = 0;
    }

    return hasValid;
}

var str = "arrb6???4xxbl5???eee5";

// keep this function call here 
console.log(QuestionsMarks(str));

