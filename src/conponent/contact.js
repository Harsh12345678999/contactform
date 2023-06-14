import React, { useState } from 'react';
import "./contact.css";


const Contact = () => {
    const [user, setUser] = useState({
        Fname: "",
        Lname: "",
        email: "",
        mobile: "",
        comment: "",
    });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value })

    };

    const postData = async (e) => {
        e.preventDefault();

        const {Fname, Lname, email, mobile, comment} = user;

        const res = await fetch("https://contactform-abf5e-default-rtdb.firebaseio.com/contactform.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Fname,
                Lname,
                email,
                mobile,
                comment,
            }),
        },


        );
         if(res){
           setUser ({
                Fname: "",
                Lname: "",
                email: "",
                mobile: "",
                comment: "",
            });
         }

    }

    return (
        <>
            {/* <p className='feedback'>Feedback Form</p> */}
            <div className='box-container position'>
                <form action="#" method='POST'>
                    <div className="row" >
                        <div className="col box-container" style={{ borderRadius: "10px 0 0 10px" }}>
                            <input type="text" className="form-control" value={user.Fname} onChange={getUserData} placeholder="First name" name='Fname' required />

                        </div>
                        <div className="col box-container" style={{ borderRadius: "0 10px 10px 0" }}>
                            <input type="text" className="form-control" id='form-cotrole' value={user.Lname} onChange={getUserData} placeholder="Last name" name='Lname' />
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className="col ">
                            <input type="email" className="form-control" id='form-cotrole' value={user.email} onChange={getUserData} placeholder="Email" name='email' style={{ transform: "translate(1px, -371px)" }} />
                        </div>
                        <div className="col ">
                            <input type="contact" className="form-control" id='form-cotrole' value={user.mobile} onChange={getUserData} placeholder="mobile" name='mobile' style={{ transform: "translate(1px, -371px)" }} />
                        </div>
                    </div>
                    <div className="form-floating">
                        <div className='comment'>Comments</div>
                        <textarea className="form-control" value={user.comment} onChange={getUserData} placeholder='comment' name='comment' style={{ transform: "translate(0px, -342px)", height: "139px" }}>
                        </textarea>
                    </div>
                </form>
                <button type="button" class="btn btn-primary" style={{ transform: "translate(4px, -306px)" }} onClick={postData}>Submit</button>
            </div>

        </>
    )
}

export default Contact;
