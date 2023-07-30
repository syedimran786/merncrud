import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddUsers() {
    const notify = () => toast("user Added Successfully");

    let [userData, setuserData] = useState({ fullname: "", email: "", age: "", gender: "" });
    let [errors, setErrors] = useState({})

    let chaneUserData = ({ target: { value, name } }) => {
        setuserData({ ...userData, [name]: value })
    }

    let sendFormdata = async (e) => {
        e.preventDefault();

        setErrors(validator(userData))

        if (Object.keys(errors).length === 0) {
            try {
                let { data } = await axios.post("http://localhost:4500/student/addstudent", userData);
                console.log(data);
                notify();
                setuserData({ fullname: "", email: "", age: "", gender: "" })
            }
            catch (err) {
                console.log(err);
            }
        }

        else {
            return
        }



    }
    console.log(errors);

    let validator = (udata) => {
        let err = {};

        if (udata.fullname === "") {
            err.fn = "Full Name is Mandatory"
        }
        else if(udata.fullname.length>10)
        {
            err.fn = "Full Name must be less than 10 characters"
        }

        if (udata.email === "") {
            err.em = "Email is Mandatory"
        }

        if (udata.gender === "") {
            err.ge = "Gender is Mandatory"
        }

        if (udata.age === "") {
            err.ag = "Age is Mandatory"
        }

        return err
    }

    return (

        <section className='col-6 m-auto mt-5 border border-primary p-5'>
            <ToastContainer />
            <form onSubmit={sendFormdata}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="fullname" value={userData.fullname} onChange={chaneUserData} placeholder="Fullname" />
                </div>
                <div className='text-danger'> 
                    {errors.fn && errors.fn}
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" name="email" value={userData.email} onChange={chaneUserData} placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" name="age" value={userData.age} onChange={chaneUserData} placeholder="Age" />
                </div>
                <section name="gender" onChange={chaneUserData} >
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="male" name="gender" id="flexRadioDefault1" />
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
                    <button type='submit' className="btn btn-success px-5 float-end">Add</button>
                </div>

            </form>
        </section>

    )
}

export default AddUsers