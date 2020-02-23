function QuestionsMarks(str) { 
    var char;

    // go along the string
    for (let i=0;i<str.length;i++) {
        // get character number i
        char = str.charAt(i); 
        
        // check if char is a number
        if (!isNaN(char)) {
            var qmarks = 0;
            
            for (var n=i+1;n<str.length;n++) {
                if (str.charAt(n)=="?") qmarks++;
                if (!isNaN(str.charAt(n))) break;
            };
            
            console.log(char, i, qmarks, n);
            i = n-1;
        };
    };
        // code goes here 
        return str;
};
var str = "arrb6???4xxbl5???eee5";

// keep this function call here 
console.log(QuestionsMarks(str));