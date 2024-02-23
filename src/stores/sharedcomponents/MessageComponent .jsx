import React from 'react';
import './SharedComponents.css';

const MessageComponent = () => {
  return (
    <div className="container message-container text-center">
      <p className="message-text">🌟 Dear Users, 🌟</p>
      <p className="message-paragraph">
        We are excited to announce the development of our new job portal! As of now, the job links on the platform are placeholders, and they are not actual job listings. We are in the process of adding real job data, and this may take some time.
      </p>
      <p className="message-paragraph">
        We appreciate your understanding during this phase of development. Rest assured, we are working diligently to provide you with a comprehensive and valuable job-seeking experience. The platform will soon be filled with genuine job opportunities to help you in your career journey.
      </p>
      <p className="message-paragraph">
        Thank you for your patience, and stay tuned for further updates!
      </p>
      <p className="message-thank-you">
        Best Regards, <br />
        [mj-career / Mansoor]
      </p>
    </div>
  );
};

export default MessageComponent;
