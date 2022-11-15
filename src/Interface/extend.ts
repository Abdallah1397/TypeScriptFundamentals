// Extend 
// Means we are creating a new interface with the same properties as the original, plus something new.

// user interface 
interface User{
    id:number,
    userName:string,
}
// Moderator 
interface Moderator extends User{
    role:string|number;
}
// Admin
interface Admin extends User,Moderator{
    protect:boolean,
}

const admin1:Admin={
    id:1,
    userName:"Admin1",
    role:1,
    protect:true,
}

const moderator1:Moderator={
    id:1,
    userName:"Moderator1",
    role:2,
}

const normalUser:User={
    id:1,
    userName:"user1"
}

console.log(admin1.userName,admin1.protect,admin1.role);


