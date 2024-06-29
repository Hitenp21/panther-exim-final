import "../App.css";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";


export default function SendEmail() {
    // const emailRef = useRef < HTMLInputElement > ();
    // const nameRef = useRef < HTMLInputElement > ();
    const [loading, setLoading] = useState(false);
    useEffect(() => emailjs.init("RBNtkp8fGkxzUoUbx"), []);
    // Add these
    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_2tnu9ok";
        const templateId = "template_flv5wty";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                // name: nameRef.current.value,
                // recipient: emailRef.current.value
            });
            alert("email successfully sent check inbox");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section>
            <aside></aside>
            <form className="for" onSubmit={handleSubmit}>
                <div className="form_group">
                    <label htmlFor="">name</label>
                    <input  placeholder="enter your name" />
                </div>
                <div className="form_group">
                    <label htmlFor="">email</label>
                    <input  type="email" placeholder="enter your email" />
                </div>
                <button className="btn" disabled={loading}>
                    subscribe
                </button>
            </form>
        </section>
    );

}