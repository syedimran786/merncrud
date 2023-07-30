import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateUser() {
    const notify = () => toast("user Updated Successfully");

    let [userData,setuserData]=useState({fullname:"",email:"",age:"",gender:""});

    let chaneUserData=({target:{value,name}})=>
    {
        setuserData({...userData,[name]:value})
    }

    let sendFormdata=async (e)=>
    {
        e.preventDefault();

        try
        {
            let {data}=await axios.put(`http://localhost:4500/student/updatestudent/${userData._id}`,userData);
            console.log(data);
            notify();
            setuserData({fullname:"",email:"",age:"",gender:""})
        }
        catch(err)
        {
            console.log(err);
        }
        
    }

useEffect(()=>
{
    let lsData=JSON.parse(localStorage.getItem("user"));
    setuserData({...userData,...lsData.student})
},[])
 
    return (

        <section className='col-6 m-auto mt-5 border border-primary p-5'>
            <ToastContainer/>
            <form onSubmit={sendFormdata}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="fullname" value={userData.fullname} onChange={chaneUserData} placeholder="Fullname" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" name="email" value={userData.email} onChange={chaneUserData} placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" name="age" value={userData.age} onChange={chaneUserData}  placeholder="Age" />
                </div>
                <section name="gender" onChange={chaneUserData} >
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio"  value="male" name="gender" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="female" name="gender" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                </section>

                <div className="mt-4">
                    <button type='submit' className="btn btn-success px-5 float-end">Update</button>
                </div>

            </form>
        </section>

    )
}

export default UpdateUser