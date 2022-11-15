// Interface with methods and parameters
interface student {
    id: number,
    userName: string,
    displayAge: (age: number) => string,
}
const student1: student = {
    id: 1,
    userName: "Abdallah",
    displayAge: (age) =>`Hello ${student1.userName} your age is ${age}`
}
console.log(student1.displayAge(25));