import React,{ useState } from 'react';
import FirstComponent from "./FirstComponent";
import DataFilter from "./DataFilter";

//function FirstComponentInApp(props){
const FirstComponentInApp = (props) => {
    // console.log("FirstComponentApp");
    // console.log(props);

    const [filteredYear, getSelectedYear] = useState('2020');

    const selectYearHandler = selectedYear => {

        console.log("selected");
        
        console.log(selectedYear);
        getSelectedYear(selectedYear)
        
    }



    return (
        <div>
            <DataFilter selected = {filteredYear} onSubmitYear={selectYearHandler} />            

            {/* <FirstComponent id={props.data[0]['Id']} message={props.data[0]['Message']} date={props.data[0]['Date']}></FirstComponent>

            <FirstComponent id={props.data[1]['Id']} message={props.data[1]['Message']} date={props.data[1]['Date']}></FirstComponent>

            <FirstComponent id={props.data[2]['Id']} message={props.data[2]['Message']} date={props.data[2]['Date']}></FirstComponent>

            <FirstComponent id={props.data[3]['Id']} message={props.data[3]['Message']} date={props.data[3]['Date']}></FirstComponent> */}
            {/* The code can optimized by using map concept which is same as loop */}

            {props.data.map((expense) => (
                <FirstComponent key={expense.Id} id={expense.Id} message={expense.Message} date={expense.Date} />
            ))}

        </div>
    );
}

export default FirstComponentInApp;