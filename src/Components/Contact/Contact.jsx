import React from 'react'
import '../Contact/Contact.css'
const Contact = () => {
  return (
   <>
  <div className="form-card1">
  <div className="form-card2">
    <form className="form">
      <p className="form-heading">Get In Touch</p>
      <div className="form-field">
        <input required placeholder="Name" className="input-field" type="text" />
      </div>
      <div className="form-field">
        <input required placeholder="Email" className="input-field" type="email" />
      </div>
      <div className="form-field">
        <input required placeholder="Subject" className="input-field" type="text" />
      </div>
      <div className="form-field">
        <textarea required placeholder="Message" cols={30} rows={3} className="input-field" defaultValue={""} />
      </div>
      <button className="sendMessage-btn">Send Message</button>
    </form>
  </div>
</div>


   </>
  )
}

export default Contact
