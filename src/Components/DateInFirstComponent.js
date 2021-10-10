//function DateInFirstComponent(props){
const DateInFirstComponent = (props) =>{
    //console.log(props);
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear();

    return (
        <h2>Date : {day} {month} {year}</h2>
    );
}

export default DateInFirstComponent;