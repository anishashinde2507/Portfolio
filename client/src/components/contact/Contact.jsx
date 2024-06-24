import React, { useState, useEffect, useRef } from 'react';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [boxSize, setBoxSize] = useState({ width: 'auto', height: 'auto' });
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      const { offsetWidth, offsetHeight } = messageRef.current;
      setBoxSize({ width: offsetWidth, height: offsetHeight });
    }
  }, [message]);

  return (
    <section className="contact container section" id="contact">
      <h2 className='section__title'>Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className='contact__details'>Don't like forms? Send me an email</p>
        </div>
        <form action="https://api.web3forms.com/submit" method="POST" className='contact__form'>
          <input type="hidden" name="access_key" value="2ac8fe6d-e831-4715-8053-e43efe9cc7ac" />
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="name" className='contact__form-input' placeholder='Insert your name' required />
            </div>
            <div className="contact__form-div">
              <input type="email" name="email" className='contact__form-input' placeholder='Insert your email' required/>
            </div>
          </div>
          <div className="contact__form-div">
            <input type="text" name="subject" className='contact__form-input' placeholder='Insert your subject' required />
          </div>
          <div className="contact__form-div">
            <textarea
              ref={messageRef}
              name='message'
              id='message'
              cols='30'
              rows="10"
              className='contact__form-input'
              placeholder='Write your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: boxSize.width, height: boxSize.height }}
              required
            />
          </div>
          <button type="submit" className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
