import React from 'react';
import ReactDOM  from 'react-dom/client';
import "./index.css";
function App()
{
    const marry = "hi prends";
    const style1 = {color:"red"};
return(
    <div className='head'>
    <h1 className="header">hello world</h1>
    <p style={style1}>hi</p>
    <h1>{marry}</h1>
    <Main />
    <Footer />

    </div>
)
}
const Main = () =>{
    return(
            <Footer name ="chaitanya" />

    )
}
const Footer = (props) => {
    const hour = new Date().getHours();
    const openHours = 13;
    const closeHours = 22;
  
    if (hour >= openHours && hour <= closeHours) {
      alert("We are currently open");
    }
    else{
        alert("we are closed")
    }
    return(
    <h1>{props.name}</h1>
    )
  };
 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);