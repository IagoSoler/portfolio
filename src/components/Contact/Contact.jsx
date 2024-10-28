import React from 'react'
import './Contact.css'
import githubLogo from './contact_images/github_logo.png';
import linkedinLogo from './contact_images/linkedin_logo.png';
import copyIcon from './contact_images/copy.svg';
import emailIcon from './contact_images/send_email.svg';

const Contact = () => {
  const email = 'iago.svjp@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);

    const emailElement = document.querySelector('.contact--email');
    const range = document.createRange();
    range.selectNodeContents(emailElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };
  const sendEmail = () => {
    window.location.href = `mailto:${email}`;
  }

  return (
    <div id="contact">
     {/*  <h1>Contacto</h1> */}

      <div className="contact">
        <div className='contact--number'>
          <span className='contact--number--text'>Teléfono: (+34) 673 340 500</span>
        </div>

        <div className="contact--email">
          <span className="contact--email--text">{email}</span>
          <button onClick={copyToClipboard} className="contact--email--button">
            <img src={copyIcon} alt="Copiar correo" />
          </button>
          <button onClick={sendEmail} alt="Copiar correo" className="contact--email--button">
            <img src={emailIcon} alt="Enviar correo" className="contact--email--image" />
          </button>
        </div>

        <div className='contact--social__media' >
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <img className='contact--social__media--githubimage' src={githubLogo} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/iago-soler-veira-73a2a9188" target="_blank" rel="noopener noreferrer">
            <img className='contact--social__media--linkedinimage' src={linkedinLogo} alt="LinkedIn" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Contact
