// Literal Types
type nums = -1 | 0 | 1;

const validNumber = (numb: number): nums => {
    if(numb>0){
        return 1;
    }else{
        return 0;
    }
};

console.log(validNumber(5));

