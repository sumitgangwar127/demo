let tony={
    name: "tonny",
    lastname: 'stark',
    friends: ["hulk","banner"],
    age: 33,
    isAvenger: true,
    abc:undefined,
    address:{
        state: "new york" ,
        city: "he",
    }

    ,sayhi:function fn(){
        console.log("hey everyone");
       return " its iron man here";
    }
    
}
//console.log(tony.sayhi());
//console.log(tony["sayhi"]())


let karr = Object.keys(tony);
// console.log(karr);

// for(let key in tony){
//     console.log(tony[key]);
// }

for(i=0;i<karr.length;i++){
    let arr=karr[i];
    console.log(tony[karr[i]])
}