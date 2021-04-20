let a = [19,2,3,4,5,6];

function las(arr){
    let largest = -1;
    let smallest = 100000;
    
    for(i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
        if(arr[i]<smallest){
            smallest = arr[i];
        }
        //console.log(smallest,"  ",largest);
        //return ([smallest, largest])
    }
    console.log(smallest,"  ",largest);
}

las(a);