
import { useState, useEffect } from 'react';
import axios from 'axios';

const ReturnMessage = () => {
  const [message, setMessage] = useState("");

  const checkForNewMessage = () => {
    axios.get("http://localhost:8000/api/message/", { withCredentials: true })
      .then(res => {
        console.log("Response received:", res);
        if (res.data && res.data.message) {
          setMessage(res.data.message);
        } else {
          console.error("Response does not contain 'message':", res.data);
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
      });
  }
  useEffect(() => {
  
 
    const intervalId = setInterval(checkForNewMessage, 5000);


    return () => clearInterval(intervalId);
     
      
  }, []);  

  return (
    <div>
      <h2>Message from Backend:</h2>
      <p>{message || "No message available"}</p>
    </div>
  );
};

export default ReturnMessage;