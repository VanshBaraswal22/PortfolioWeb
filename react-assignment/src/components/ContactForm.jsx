import { useState } from "react";
import Button from "./Button";
function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        alert(`Name: ${name}\nEmail: ${email}`);

        setName("");
        setEmail("");

    }

    return (

        <section>

            <h2>Contact Form</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

               <Button
    text="Submit"
    type="submit"
/>

            </form>

        </section>

    );

}

export default ContactForm;