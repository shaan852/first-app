import React from 'react';
import  './form.css';
import NewItem from './NewItem';
const FormCreate = (props) => {

    const saveFormDataToNew = (enteredNewItem) => {
        const newItem = {
            ...enteredNewItem,
            //id:Math.random().toString()
        };
        props.onFormItemSubmit(newItem);
        //console.log(newItem);
    }

    return (    
        <div className="new-expense">
            <NewItem onSendNewItem = {saveFormDataToNew} />
        </div>
    );


}

export default FormCreate;