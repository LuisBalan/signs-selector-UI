export default function ActionButton({Action, Legend}){
    return(
            <button onClick={Action}>
                {Legend}  
            </button>
    );
};