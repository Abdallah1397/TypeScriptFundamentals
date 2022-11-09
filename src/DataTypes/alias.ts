// Type Alias 
// Create a new name for types

type st =string;
type bol=boolean;
type num =number;
type StOrNum=string|number;

// Ex
let info:StOrNum="Name";
info=50;


// Ex 
type status={
    done:boolean,
    error:string,
    errorStatusCode:number,
}

const displayStatus=(state:status)=>{
    console.log(`Status ${state.done} with error ${state.error} with status code ${state.errorStatusCode}`)
}
displayStatus({done:true,error:"NetworkError",errorStatusCode:0})