import React from 'react';
import './Custom.css'

function App() {
    //this is jsx, not HTML. allows you to write html elements in
    // javascript and place in DOM without any createElement()

    //css background-color -> backgroundColor, border-color -> borderColor
    // value need to add a signle quote
    // semi colon --> comma

    const styles = {
      inDiv:{padding:'20px 0',backgroundColor:'pink'},
      outDiv:{margin:'auto',backgroundcolor:'green'}
    }

    const sometext='sometext';
    const somediv = <div style={{backgroundColor:'white'}}>somediv</div>

    return (
    <div className="outerdiv">
      <div className="innerdiv">This is a green box</div>
      <div style={{padding:'70px 0',backgroundColor:'blue'}}>
        This is inline css in blue
      </div>
      <div style = {styles.inDiv}>
        {somediv}
      </div>
      <div style = {styles.outDiv}>
        const styles outDiv
      </div>
    </div>
    
    )
}

export default App;
