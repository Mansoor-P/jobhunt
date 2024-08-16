import { useState } from "react";
import "../../assets/styles/InfoStyles.css";
import Footer from "../Footer";
import Header from "../Header";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "As of now we dont have this feature.",
    },
    {
      question: "How do I apply for a job?",
      answer:
        "Browse through the job listings and click on the job title that interests you. On the job details page, click the 'Apply Now' button and follow the instructions to submit your application.",
    },
    {
      question: "Can I edit my job application after submission?",
      answer:
        "Once submitted, you cannot edit your application directly. If you need to make changes, please contact the employer through the provided contact details or reach out to our support team for assistance.",
    },
    {
      question: "What should I do if I encounter a problem with the website?",
      answer:
        "If you experience any issues, please reach out to our support team via support@jobhunt.com. Provide a detailed description of the problem, and we will assist you as soon as possible.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact customer support by emailing us at support@jobhunt.com. We are available to help with any questions or issues you may have.",
    },
  ];

  return (
    <>
      <Header />
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                {faq.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
