import React,{useState} from 'react'
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import {Button} from './component/button/Button.js'
import {Form} from './pages/form/Form.js'
function App() {
  const[Data, setData]=useState(false)
  console.log(Data)
  return (
    <div>
      <div className="container">
        <div className="row">
          </div>
          <h4 className="center-align">Employees List</h4>
          </div>
          <div className="container">
           <div className="row">
             <div className="col s3">
               <Button  text="Add Employee" callCallback={(value)=>setData(value)}  Style={'#0D6EFB'} ></Button>
               </div>
             </div>
            </div>
            <div className="container ">
              <div className="row">

              {
             Data?
             <Form />
             :null
           }
                </div>
                </div>
               

                  </div>
  );
}

export default App;
