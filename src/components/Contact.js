import React, { useState } from "react";
import ContactForm from "./ContactForm";
import "./Contact.css"; // Thêm tệp CSS cho style

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Liên Hệ Với Chúng Tôi</h2>
        <p className="contact-description">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn! Hãy để lại thông tin và câu hỏi,
          chúng tôi sẽ phản hồi bạn sớm nhất có thể.
        </p>
      </div>

      {submitted ? (
        <div className="thank-you-message">
          <p>
            Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi sớm nhất
            có thể!
          </p>
          <p>Báiii Baiii</p>
        </div>
      ) : (
        <ContactForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Contact;
