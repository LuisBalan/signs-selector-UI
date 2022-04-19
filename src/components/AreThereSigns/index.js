import { useState } from 'react';
import './AreThereSigns.css';

function AreThereSigns(){

    const [answer, setAnswer] = useState("no");

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }
    
    return(
        <div className='Question-Cont'>
            <p>Are there signs in the image to the left?</p>
            <br/>
            <form className="form-cont">
                <section className='input-cont'>
                    <input
                    type="radio"
                    id="yes"
                    name="answer"
                    value="yes"
                    onChange={handleChange}
                    />
                    <i></i>
                    <label htmlFor="yes">Yes</label>
                </section>
                <section className='input-cont'>
                    <input
                    type="radio"
                    id="no"
                    name="answer"
                    value="no"
                    onChange={handleChange}
                    />
                    <i></i>
                    <label htmlFor="no">No</label>
                </section>

            </form>
            <p className = {answer === "no" ? "No-Wrap" : "Wrap"}>
            Wrap all the signs in the image.
            </p>
        </div>
    )
}

export default AreThereSigns;