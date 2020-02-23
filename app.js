function QuestionsMarks(str) { 
    var char;

    // go along the string
    for (let i=0;i<str.length;i++) {
        // get character number i
        char = str.charAt(i); 
        
        // check if char is a number
        if (!isNaN(char)) {
            var first = char;
            var qmarks = 0;
            
            for (var n=i+1;n<str.length;n++) {
                var second = str.charAt(n);
                if (second=="?") qmarks++;
                if (!isNaN(second)) break;
            };
            
            console.log(first, i, qmarks, second, n);
            i = n-1;
        };
    };
        // code goes here 
        return str;
};
var str = "arrb6???4xxbl5???eee5";

// keep this function call here 
console.log(QuestionsMarks(str));