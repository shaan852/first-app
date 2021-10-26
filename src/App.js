import React,{useState} from 'react';
import './App.css';
//import FirstComponent from './Components/FirstComponent';
import FirstComponentinApp from './Components/FirstComponentInApp';
import Card from './Components/Card';
import FormCreate from './Components/form/FormCreate';

const static_data = [
  {
    Id: "0X1A1",
    //Date: new Date(2021, 9, 10),
    Date: "2021-9-10",
    Message: "This is the Message 1"
  },
  {
    Id: "0X1A2",
    Date: "2021-9-11",
    Message: "This is the Message 2"
  },
  {
    Id: "0X1A3",
    Date: "2021-9-12",
    Message: "This is the Message 3"
  },
  {
    Id: "0X1A4",
    Date: "2021-9-13",
    Message: "This is the Message 4"
  }
]


const App = () => {

  const [messages,setmData] = useState(static_data);


  const onFormCreate = (newItemData) => {
    console.log("App Js ");
    console.log(newItemData);
    setmData((prevData) => {
        return [newItemData,...0];
    });

    console.log(newItemData);
  }

  return (
    <Card className='appClass'>
      <h2>This line is from app.js</h2>
      <FormCreate onFormItemSubmit = {onFormCreate} />
      <FirstComponentinApp data={messages} />
    </Card>
  );
}

export default App;
