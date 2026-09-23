import { useState } from "react";

function Donate() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleDonate = () => {

    if (!name || !email || !amount) {
      alert("Please fill all fields");
      return;
    }

    fetch("http://localhost:8082/api/donations", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: name,
    email: email,
    amount: amount
  })
})
    .then(res => res.json())
    .then(() => {
      alert(`Thank you ${name} for donating ₹${amount} 💚`);
      setName("");
      setEmail("");
      setAmount("");
    })
    .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h2>Support Our Cause 💚</h2>

      <p>
        Your donation helps us plant trees and protect the environment.
      </p>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <h3>Select Amount</h3>

      <button onClick={()=>setAmount(500)}>₹500</button>
      <button onClick={()=>setAmount(1000)}>₹1000</button>
      <button onClick={()=>setAmount(2000)}>₹2000</button>

      <br/><br/>

      <input
        type="number"
        placeholder="Custom Amount"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleDonate}>Donate Now</button>

    </div>
  );
}

export default Donate;