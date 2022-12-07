
import React from 'react';
import swal from 'sweetalert';
import "./EmailForm.css";
import { useState } from "react";
function EmailForm() {

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setNumber(onlyDigits);
  };
  const [number, setNumber] = useState("");

  const send = (e) => {
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let subject = document.getElementById("Subject").value;
    let message = document.getElementById("Message").value;

    window.Email.send({
      SecureToken: "9f1c501f-cf1c-4b65-8eb8-7f0d07d884f0",
      To: "vaishnavishahakar1@gmail.com",
      From: "nomeshtighare@gmail.com",
      Subject: "Contact Details",
      Body: "Full Name: " + name + "<br> Email: " + email + "<br/>Contact Number: " + contact + "<br/>Subject: " + subject + "<br/>Message: " + message
    }).then(
      swal({
        title: "Submited Successfully ",
        text: "Done",
        icon: "success",
        button: "Okay",
        timer: 3000,
      })
    )
  };
  return (
    <div className='p-5 w-50'>
      <form className="needs-validation" onSubmit={(e) => { send(e) }} noValidate>
        <p className='fw-bold'>Contact Form Details</p>
        <div className="form-floating form-group">
          <input type="name" className="form-control" id="Name" placeholder="Enter Your Name" required />
          <label htmlFor="Name" className='fs-6'>Full Name </label>
          <div className="invalid-feedback fs-6">
            Please provide a valid Full Name.
          </div>
        </div>

        <div className=" form-floating form-group mt-2">
          <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" required />
          <label htmlFor="Email" className='fs-6'>Email address</label>
          <div className="invalid-feedback fs-6">
            Please provide a valid Email Address.
          </div>
        </div>

        <div className=" form-floating form-group mt-2">
          <input type="contact-number" value={number} maxLength={10} className="form-control" onChange={(e) => checkInput(e)} id="Contact" placeholder="Enter Your Contact Number" required />
          <label htmlFor="Contact" className='fs-6'>Contact Number</label>
          <div className="invalid-feedback fs-6">
            Please provide a valid Contact Number.
          </div>
        </div>

        <div className=" form-floating form-group mt-2">
          <input type="subject" className="form-control" id="Subject" placeholder="Enter Your Subject" required />
          <label htmlFor="Subject" className='fs-6'>Subject</label>
          <div className="invalid-feedback fs-6">
            Please provide a valid Subject.
          </div>
        </div>

        <div className=" form-floating form-group mt-2">
          <textarea className="form-control" id="Message" rows="3" placeholder="Enter Your Message" required></textarea>
          <label htmlFor="Message" className='fs-6'>Message</label>
          <div className="invalid-feedback fs-6">
            Please provide a valid Message.
          </div>
        </div>
        <button type="submit" className=" btn btn-primary mt-4">Submit</button>
      </form>
    </div>
  );
}
export default EmailForm;