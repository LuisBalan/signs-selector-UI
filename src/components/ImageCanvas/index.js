import { useEffect, useState } from 'react'
import fetchANewPhoto from '../../services/fetchANewPhoto';
import './ImageCanvas.css'

const LoadingMessage = () => {
    return(
        <h1 className='Loading-Message'>Image Is Loading...</h1>
    );
};

// const LoadedImage = () => {
//     return(
//         <h1>Image was loaded</h1>
//     )
// }

const ImageToRender = (props) => {
    return(
        <img className='dogImage'
        alt=''
        src={props.content}
        />

    )
}

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
    }, [])

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
            {isLoading ?
                <LoadingMessage /> :
                <ImageToRender
                src = {'https://images.dog.ceo/breeds/poodle-toy/n02113624_7997.jpg'}
                />
            }
        </div>
    );
};


export default ImageCanvas;