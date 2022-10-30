 const greater = function (num) {
    return new Promise((resolve, reject) => {
        //const num = Math.random()*10;
        if (num > 10){
            resolve();
        }
        else if (num < 10) {
            reject ({ status: 404 });
        }
    
    })
    
}

greater(15).then(() => {
    console.log('its greater than 10');
})
.catch(() => {
    console.log('its not');
});
