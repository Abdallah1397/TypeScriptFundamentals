// Type Annotations with Arrays
let languages: string[]=['JS','TS'];
for(let i=0;i<languages.length;i++){
    console.log(languages[i].repeat(3));
}

// Multidimensional Arrays
let myArr: (string|number|string[])[]=["Arr1","Arr2",5,6,["a","b"]];
