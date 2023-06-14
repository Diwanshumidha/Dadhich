import React from 'react';
import emailjs from 'emailjs-com';
import p from './email.module.css'

export default function Email() {


    console.log();
    emailjs.init('XTxFCKzsCuNFAGr-c');
    function sendEmail(e) {
        e.preventDefault();    
        emailjs.send("service_912yeux","template_n5xtppd",{
            from_name: "from_name",
            to_name: "Raj Singh",
            message: "Hey I got your mail ",
            })
            .then((result) => {
                window.location.reload() 
                console.log(result.text); 
                alert("done")
            }, (error) => {
                console.log(error.text);
            });   
    }

    return (
        <>

            <div >
                <form className={` ${p.header}`} onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email</label>
                    <input type="email" name="from_email" />
                    <label>Subject</label>
                    <input type="text" name="subject" />
                    <label>Message</label>
                    <textarea name="html_message" />
                    <button className='btn-success my-3'>Submit</button>
                </form>
            </div>

        </>
    );
}