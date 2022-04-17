import './AreThereSigns.css';

function AreThereSigns(){
    return(
        <div className='Question-Cont'>
            <p>Are there signs in the image to the left?</p>
            <br/>
            <form class="form-cont">
                <section className='input-cont'>
                    <input type="radio" id="yes" name="answer" value="yes"/>
                    <i></i>
                    <label htmlFor="yes">Yes</label>
                </section>
                <section className='input-cont'>
                    <input type="radio" id="no" name="answer" value="no"/>
                    <i></i>
                    <label htmlFor="no">No</label>
                </section>

            </form>
        </div>
    )
}

export default AreThereSigns;