function today(){

let currentTime = new Date();
    let day = currentTime.toLocaleString('en-us', {weekday:'long'})
    let date = currentTime.getDate();
    let month = currentTime.toLocaleString('default', { month: 'long' });
   
    let year = currentTime.getFullYear();
    
     console.log(`Today is ${day} the ${date} of ${month} ${year}`)
}

today(); 