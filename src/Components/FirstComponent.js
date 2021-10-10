import React, { useState } from 'react';

import DateInFirstComponent from "./DateInFirstComponent";
import Card from "./Card.js";


//function FirstComponent(props) {
const FirstComponent = (props) => {
    //State Using
    const [message,setMessage] = useState(props.message);

    const [id,setId] = useState(props.id);


    const clickHandler = () =>{
        setId("123456");
        setMessage("This is the Change on click !!!!!");
        console.log("Test Click !!!!"+message);
    }  

    return (
        <div>
            
            <Card className='expenses'>
                <h2>Id : {props.id}</h2>
                {/* <h2>Date : {props.date.toISOString()}</h2> */}
                <DateInFirstComponent date={new Date(props.date)} />
                <h2>Message : {props.message}</h2>
                {/* <h2>Message : {message}</h2> */}
                <button onClick={clickHandler}>Click Me !</button>
            </Card>
        </div>
    );
}

export default FirstComponent;