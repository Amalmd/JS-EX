const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        let capsArr = arr.map((word) => {
            if (typeof word === 'string'){ 
            return word.toUpperCase();
        } else{
            reject('Not a string');
        }
    });
    resolve (capsArr);
    });
};
makeAllCaps(['Bob', 'Dan'])
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        let capsArr = arr.map((word) => {
            if (typeof word === 'string'){ 
            return word;
        } else{
            reject('Not a string');
        }
    });
    resolve (capsArr.sort());

    });
};
sortWords(['Dan', 'Bob'])
.then((sortedArr) => {
    return makeAllCaps(sortedArr);
})
.then((caps) => {
    console.log(caps);
})
.catch((error) => {
    console.log(error);
});