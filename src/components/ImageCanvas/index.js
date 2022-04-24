import { useEffect, useState } from 'react'
import fetchANewDog from '../../services/fetchANewDog';
import './ImageCanvas.css'

function ImageCanvas(){
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState();

    // useEffect(() => {
    //     fetch('https://dog.ceo/api/breeds/image/random')
    //         .then(res => res.json())
    //         .then(dog => {
    //             setContent(dog.message);
    //             setIsLoading(false)})           
    // }, []);

    useEffect(() => {
        fetchANewDog(setContent, setIsLoading)
    }, [])

    if(isLoading){
        return(
            <div className='Loading-Canvas'>
                <h1 className='Loading-Message'>Image Is Loading...</h1>
            </div>
        );
    }else{
        return(
            <div className="Image-Canvas">
                <img className='dogImage'
                alt=''
                src={content}
                />
            </div>
        );
    };
};

export default ImageCanvas;