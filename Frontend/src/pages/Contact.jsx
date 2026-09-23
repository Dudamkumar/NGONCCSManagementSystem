import { useState } from "react";

function Contact() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [submitted,setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8082/api/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        message
      })
    })
    .then(res => res.json())
    .then(() => {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h2>Contact Us 📞</h2>

      <h3>📍 Address</h3>
      <p>NCCS NGO, Solapur, Maharashtra, India</p>

      <h3>📧 Email</h3>
      <p>nccs.ngo@gmail.com</p>

      <h3>📱 Phone</h3>
      <p>+91 9876543210</p>

      <hr />

      <h3>Send Us a Message</h3>

      {submitted ? (
        <p style={{color:"lightgreen"}}>
          Thank you! We will contact you soon 🌿
        </p>
      ) : (
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <br /><br />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <br /><br />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
          ></textarea>

          <br /><br />

          <button type="submit">Send Message</button>

        </form>
      )}
    </div>
  );
}

export default Contact;