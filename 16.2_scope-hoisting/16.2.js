
/* 16.2 Scope & Hoisting */

/* Block 1 - Output will be 2. 
var a will not be printed because it's defined after console.log (Hoisting)
We should declaire variables before initialize them*/

function funcA() {
    console.log(a); 
    console.log(foo());
    var a = 1;
    function foo() {
    return 2;
    }
    }
    funcA()

/* the block can output 2 & 1 if we identify the a before console.log */
/* in this case the output will be 2 1 */

    function funcA() {
        console.log(foo());
        var a = 1;
        console.log(a); 
        function foo() {
        return 2;
        }
        }
        funcA()


/* Block 2 - Output will be: Aurelio De Rosa & John Doe */

var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName()); /* output Aurelio De Rosa - because it's the last update of fullname */
var test = obj.prop.getFullName;
console.log(test());
        

/* Block 3 - */

function funcB() {
    let a = b = 0;
    a++;
    return a;
    }
    funcB(); /* output 1 */
    console.log(typeof a); /* undefined */
    console.log(typeof b); /* undefined */


    function funcB(){

    }


    function funcE() {
        console.log("Value of f in local scope: ", f);
        }
       
        var f = 1;
        console.log("Value of f in global scope: ", f);
        funcE();


/* Block 5 Q.17.1 */

        function test(){
            var x, y;
   if (false) {   /* if true output 50 */
            x = 50;
            } /* undefined */
            console.log(x); /* undefined */
            console.log(y); /* undefined */
            y = 100; /* if true output 100 */
            console.log(y);
            }
           
            test();


