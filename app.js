function QuestionsMarks(str) { 
    var char;
    var flag = false;
    // go along the string
    for (let i=0;i<str.length-1;i++) {
        // get character number i
        char = str.charAt(i); 
        // check if char is a number
        if (!isNaN(char)) {
            var first = Number(char);
            var qmarks = 0;
            
            // count qmarks till next number
            for (var n=i+1;n<str.length;n++) {
                var second = str.charAt(n);
                if (second=="?") qmarks++;
                if (!isNaN(second)) break;
            };
            second = Number(second); 
            
            // check if there is a pair adding up to 10 with 3 qmarks inbetween
            if (first+second==10&&qmarks==3) flag = true
                // or if there is a pair adding up to 10 without 3 qmarks inbitween
                else if (first+second==10&&qmarks!=3) return false;
                
            console.log('first', first, 'second', second, i, qmarks,  n);
            i = n-1;
        };
    };
        // code goes here 
        return flag;
};
var str = "arrb6???4xxbl5???eee5";

// keep this function call here 
console.log(QuestionsMarks(str));