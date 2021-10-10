import React,{ useState } from 'react';
import './NewForm.css';
const NewItem = (props) => {

    const [F1Name,setF1Name] = useState('');
    const [F2Name,setF2Name] = useState('');
    const [F3Name,setF3Name] = useState('');

    // console.log(F1Name);
    // console.log(F2Name);
    // console.log(F3Name);

    const f1Changehandler = (event) =>{
        setF1Name(event.target.value);
        //console.log(event.target.value);
    }

    const f2Changehandler = (event) => {
        setF2Name(event.target.value);
        //console.log(event.target.value);
    }
    const f3Changehandler = (event) => {
        setF3Name(event.target.value);
      //  console.log(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = {
            Id:F1Name,
            Date: new Date(F2Name),
            Message:F3Name
        }

        //console.log(formData);
        props.onSendNewItem(formData);
        setF1Name('');
        setF2Name('');
        setF3Name('');
    }

    return (
        <form>
            <div>
                <input type="text" name="f1" value={F1Name} onChange = {f1Changehandler} />
            </div>
            <div>
                <input type="date" name="f2" value={F2Name} onChange={f2Changehandler}/>
            </div>
            <div>
                <input type="text" name="f3" value={F3Name} onChange={f3Changehandler}/>
            </div>
            <div>
                <input type="submit" name="SUBMIT" onClick={submitHandler} />
            </div>
        </form>
    );
}

export default NewItem;