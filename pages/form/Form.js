import React,{useState} from 'react';
import {Button} from '../../component/button/Button.js';
import {Buttons} from '../../component/buttons/Buttons.js';
import './table.css'
export function Form() {

  const[Data,setData]=useState([])
  const[employee, employeeData]=useState({
    fname: "",
    lname: "",
    email: "",
  });
  const handelInput =(e)=>{
     const name=e.target.name;
     const value=e.target.value;
     console.log(value)
     employeeData({...employee, [name]:value})
  }
  const handelSubmit=(e)=>{
    e.preventDefault();
      const newData={...employee,id:new Date().getTime().toString()}
      setData([...Data,newData]);
    }
    const onDeleteHandler = (id) => {

      console.log('email', id);
  
  
    }


  return (
    <div>
      
    <form className="col s12" onSubmit={handelSubmit}>
      <div className="row">
        <div className="input-field col s6">
          <input  id="first_name" type="text" className="validate"  onChange={handelInput}
      value={employee.fname} 
      name="fname" autoComplete='on'   />
          <label htmlFor="first_name">Employee First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" onChange={handelInput}
      value={employee.lname} 
      name="lname" autoComplete='on' />
          <label htmlFor="last_name">Employee Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" onChange={handelInput}
      value={employee.email} 
      name="email" autoComplete='on' />
          <label htmlFor="email">Employee Email</label>
        </div>
        <div className= "col s12">
        <Button text="Submit"  onClick={handelSubmit}  />
        </div>
      </div>
    </form>
    <div className="container ">
            <div className="row">
            <table className="highlight ">
        <thead >
          <tr>
            <th>Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
          </tr>
        </thead>
        <tbody >
        {
     Data.map((item)=>{
       const {id,fname,lname,email}=item
       return(
          <tr key={id}>
            <td>{id}</td>
            <td>{fname}</td>
            <td>{lname}</td>
            <td>{email}</td>
            <td className="flex"><Buttons text="Update"/> <Buttons text="Delete" Style={'red'} onClick={(id) => onDeleteHandler(id)}/> <Buttons text="View"/></td>
          </tr>
      
      ) })
    }
         </tbody>
      </table>
                </div>
            </div>
  </div>
  )
}
