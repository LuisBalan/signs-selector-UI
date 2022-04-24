function fetchANewDog(callback1, callback2){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(dog => {
            callback1(dog.message);
            callback2(false)
        });
};

export default fetchANewDog;