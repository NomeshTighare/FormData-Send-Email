
import React from 'react';
import "./EmailForm.css";
function EmailForm () {
    const send = (e) => {
        let name = document.getElementById("Name").value; 
        let email = document.getElementById("Email").value;
        let contact = document.getElementById("Contact").value;
        let subject = document.getElementById("Subject").value; 
        let message = document.getElementById("message").value;
    
        window.Email.send({
    SecureToken : "9f1c501f-cf1c-4b65-8eb8-7f0d07d884f0",
    To : "sharifoffice2022@gmail.com",
    From :"nomeshtighare@gmail.com",
    Subject : "mail From Contact Form",
    Body : "name:" + name + "<br> Email:" + email + "<br/>Contact:" + contact + "<br/>Subject:" + subject + "<br/>message:" + message
    }).then(
    message => alert(message)
    )
      };
  return (
    
    <div >
      
      <form  onSubmit={(e) => {send(e)}}>

              <div className="input-control">
                <label >Name</label>
                <br></br>
                <input type="text" placeholder="Enter Your Name" id="Name"></input>
              </div>

              <div className="input-control">
                <label >Email</label>
                <br></br>
                <input type="text" placeholder="Enter Your Email" id="Email"></input>
              </div>

              <div className="input-control">
                <label >Contact-Number</label>
                <br></br>
                <input type="text" placeholder="Enter Your Contact Number" id="Contact"></input>
              </div>


              <div className="input-control">
                <label >Subject</label><br></br>
                <input type="text" placeholder="Enter Your Subject" id="Subject"></input>
              </div>
             
              <div className="input-control">
                <label >Message</label>
                <br></br>
                <textarea name="" id="message"  rows="6" placeholder="Enter Your Message"></textarea>
              </div>

               <div className="input-control">
                <button type="submit">submit</button>
               </div>
            </form>
    </div>

    
  );
  
}
{/* <script src="https://smtpjs.com/v3/smtp.js"></script>
  <script>
  function send(){
    let name = document.getElementById("Name").value; 
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let subject = document.getElementById("Subject").value; 
    let message = document.getElementById("message").value;

    Email.send({
SecureToken : "9f1c501f-cf1c-4b65-8eb8-7f0d07d884f0",
To : "sharifoffice2022@gmail.com",
From :"nomeshtighare@gmail.com",
Subject : "mail From Contact Form",
Body : "name:" + name + "<br> Email:" + email + "<br/>Contact:" + contact + "<br/>Subject:" + subject + "<br/>message:" + message
}).then(
message => alert(message)
);
  }
</script>  */}
export default EmailForm;