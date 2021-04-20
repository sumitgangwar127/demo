let fs=require("fs")
let input =process.argv.slice(2);//take input 
console.log("input",input);
let options=[];
let filepaths=[];
for(let i=0;i<input.length;i++){
    if(input[i]=="-s"|| input[i]=="-b"|| input[i]=="-n"){
        options.push(input[i]);//distimguish as option
    }
    else{
        filepaths.push(input[i]);//distinguish as file paths
    }
}
console.log("options",options);
console.log("filepaths",filepaths);
for(let i=0;i<filepaths.length;i++){
    let isfilepresent=fs.existsSync(filepaths[i]);
    if(isfilepresent==false){
        console.log("filepath",filepaths[i],"does not exist");
        return;
    }
}
//read content inside of file
let totalcontent="";
for(let i=0;i<filepaths.length;i++){
    let currentfilecontent=fs.readFileSync(filepaths[i]);
    totalcontent+=currentfilecontent+"\r\n";
}
console.log(totalcontent);
 let isSoptions=options.includes("-s");//remove line breaks
 if(isSoptions==true){
     let contentarr=totalcontent.split("\r\n");//split as array
     //console.log(contentarr);
     //remove
     let temparr= [];
     for(let i=0;i<contentarr.length;i++){
         if(contentarr[i]!==""){
             temparr.push(contentarr[i]);

         }
     }
     totalcontent=temparr.join("\r\n")//covert array to string here \r\n should be in this order 
 }
 console.log(totalcontent);
//for n command
let isNoptions=options.includes("-n");
let isBoptions=options.includes("-b");
let finaloption;
if(isNoptions==true){
    if(isBoptions==true){
        let idxB=options.indexOf("-b");
        let idxN=options.indexOf("-n");
        finaloption=idxB<idxN ? "-b": "-n";

    }else{
        finaloption="-n";
    }
}else if(isBoptions==true){
        finaloption=="-b";
    }


if(finaloption=="-n"){
    let count=1;
    let contentarr=totalcontent.split("\r\n");
    console.log(contentarr);
    //no before arr
    for(let i=0;i<contentarr.length;i++){
        contentarr[i]=count+". " + contentarr[i];
        count++;
    }
    totalcontent=contentarr.join("\r\n");
}
console.log(totalcontent);
//-b gives numbering to non empty whereas -n gives to all lines numbering

if(finaloption=="-b"){
    
    let count=1;
    let contentarr=totalcontent.split("\r\n");
    for(let i=0;i<contentarr.length;i++){
        if(contentarr[i]!==""){
            contentarr[i]=count+". " + contentarr[i];
            count++;
        }
    }
    totalcontent=contentarr.join("\r\n");
    

}
console.log(totalcontent);