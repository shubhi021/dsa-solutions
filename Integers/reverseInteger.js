
var reverse = function (x) {
let rev= 0;
const MIN = -(2**31);
const MAX = 2**31;

while(x!==0)
{
    let digit = x%10;
    x= (x/10)|0;
    rev = rev*10+digit;

    if(rev<MIN || rev>MAX){
        return 0;
    }
}
return rev;
};
