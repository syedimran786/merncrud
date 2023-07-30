import axios from 'axios';
import { Tab } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function GetUsers() {
    const notify = (user) => toast(user);
    let navigate = useNavigate()
    let [users, setUsers] = useState([])


    let getUsers = async () => {


        try {
            let { data } = await axios.get("http://localhost:4500/student/getstudents");
           console.log(data);
            setUsers(data.students)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])


    let deleteuser = async (id) => {
        let ok = confirm("Do you want to delete")
        if (ok === true) {
            try {
                let { data } = await axios.delete(`http://localhost:4500/student/deletestudent/${id}`);
                notify("User Deleted")
            }
            catch (err) {
                console.log(err);
            }
        }
        getUsers()
    }

    let updateUser = async (id) => {
        try {
            let { data } = await axios.get(`http://localhost:4500/student/getstudentbyid/${id}`);
            localStorage.setItem("user", JSON.stringify(data));
            navigate(`/updateuser/${id}`)
        }
        catch (err) {
            console.log(err);
        }


        
    }
    return (
        <section className='col-8 m-auto mt-3'>
            <ToastContainer theme='colored' />
            {
                <table className='table table-bordered border-primary table-striped table-hover'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Sl No</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.fullname}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={()=>{updateUser(user._id)}}>Update</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => { deleteuser(user._id) }}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            }
        </section>
    )
}

export default GetUsers