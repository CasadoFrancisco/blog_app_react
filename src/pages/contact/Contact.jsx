import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [done, setdone] = useState(false);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formCompleted, setformCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formCompleted) {
            alert(`Enviando formulario con los siguentes datos: 
       Nombre: ${name},
       Subject: ${subject},
       Email: ${email}
       Mensaje: ${message}`);
        } else {
            alert(
                "Porfavor, completar todos los campos antes de enviar el formulario"
            );
        }

        emailjs
            .sendForm(
                "service_lftpegn",
                "template_oc0f6in",
                formRef.current,
                "Sz6BkbrLCXl0-nmpj"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setdone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    function checkForm() {
        if (name !== "" && subject !== "" && email !== "") {
            setformCompleted(true);
        } else {
            setformCompleted(false);
        }
    }

    return (
        <div className="container">
            <label className="title">CONTACT</label>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="containerForm"
            >
                <label className="label">Name</label>
                <input
                    type="text"
                    className="inputForm"
                    placeholder="Enter your Name"
                    name="user_name"
                    onChange={(e) => setName(e.target.value)}
                    onBlur={checkForm}
                    value={name}
                    required
                />
                <label className="label">Subject</label>
                <input
                    type="text"
                    className="inputForm"
                    placeholder=" Enter your subject"
                    name="user_subject"
                    onChange={(e) => setSubject(e.target.value)}
                    onBlur={checkForm}
                    value={subject}
                    required
                />
                <label className="label">Email</label>
                <input
                    type="email"
                    className="inputForm"
                    placeholder="Enter your Email"
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <span className="labelMessage">Message</span>
                <textarea
                    rows="5"
                    className="textForm"
                    placeholder="put your Message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={checkForm}
                    value={message}
                    required
                />
                <button
                    className="buttonForm"
                    type="submit"
                    disabled={!formCompleted}
                >
                    Submit <i className="fa-regular fa-paper-plane"></i>
                </button>
                <label className="gratitude">
                    {done && "thank your for masssage"}
                </label>
            </form>
        </div>
    );
};

export default Contact;
