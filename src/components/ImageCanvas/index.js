import { useEffect, useState } from 'react'
import fetchANewPhoto from '../../services/fetchANewPhoto';
import ActionButton from '../NextButton';
import './ImageCanvas.css'

function LoadingMessage(){
    return(
        <h1 className='Loading-Message'>Image Is Loading...</h1>
    );
};

// const LoadedImage = () => {
//     return(
//         <h1>Image was loaded</h1>
//     )
// }

function ImageToRender({imageURL}){
    return(
        <img className='dogImage'
        alt=''
        src={imageURL}
        />
    );
};

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
            fetchANewPhoto(setContent, setIsLoading)
    }, []);

    const changePhoto = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(dog => {
            setContent(dog.message);
            setIsLoading(false);
    });
};

    // if(isLoading){
    //     return(
    //         <div className='Loading-Canvas'>
    //             <h1 className='Loading-Message'>Loading image...</h1>
    //         </div>
    //     );
    // }else{
    //     return(
    //         <div className="Image-Canvas">
    //             <img className='dogImage'
    //             alt=''
    //             src={content}
    //             />
    //         </div>
    //     );
    // };

    return(

        <div className='Image-Canvas'>
            {console.log(content)}
            {isLoading === true ?
                <LoadingMessage /> :
                <ImageToRender
                imageURL={content}
                />
            }
            
            <ActionButton
            Action = {changePhoto}
            Legend = {"Change Photo"}
            />
        </div>
    );
};


export default ImageCanvas;