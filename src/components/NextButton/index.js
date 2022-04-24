import './NextButton.css';

export default function ActionButton({Action, Legend}){
    return(
            <button className = 'Action-Button' onClick={Action}>
                {Legend}  
            </button>
    );
};