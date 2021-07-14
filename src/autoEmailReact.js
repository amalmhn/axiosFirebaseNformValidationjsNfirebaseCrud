import React from 'react'
import emailjs from 'emailjs-com'

function App() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ukpeseu', e.target, 'user_lvSOpwAVNl2TxWILVWkcT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  )
}

export default App
