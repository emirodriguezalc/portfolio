import React from 'react';
import './Contact.scss';

interface Props {
  title?: string;
}

const Contact: React.FC<Props> = () => {
  const sendEmail = async (email: any) => {
    fetch('/api/send/email', {
      method: 'POST',
      body: email,
    }).catch((err) => console.error(`There was an error: ${err}`));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    if (form instanceof HTMLFormElement) {
      const email = new FormData(form);
      sendEmail(email);
    }
    return form;
  };

  return (
    <section className="Contact">
      <div id="contact" className="content-placeholder" />
      Contact
      <form
        id="contact-form"
        className="contact-form"
        method="POST"
        action="send"
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          name="name"
          required
          type="text"
          placeholder="Name*"
          className="contact-form-input"
        />
        <input
          name="email"
          required
          type="email"
          placeholder="Email*"
          className="contact-form-input"
        />
        <textarea
          name="message"
          required
          placeholder="Message*"
          className="contact-form-textarea"
        />
        <button className="contact-form-button" type="submit">
          Send email
        </button>
      </form>
    </section>
  );
};

export default Contact;
