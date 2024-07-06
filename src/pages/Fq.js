import React, { useState } from 'react';
import "./fq.css";

export default function FQ() {
    // State to track which answer is currently open
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle the visibility of the answer
    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // FAQ data
    const faqData = [
        {
            question: "(1) May I visit the Company site?",
            answer: "Yes. Any time you can visit our company with prior appointment in working hours except Friday as Friday is our weekly off."
        },
        {
            question: "(2) Does PANTHER EXIM Provides Data Privacy-Non disclosure agreement?",
            answer: "Yes, we do sign non-disclosure agreement for all the confidential drawings and designs shared by our customers."
        },

        {
            question: "(3)  What are the Packing standard of the Company?",
            answer: "Components are carefully packed in seaworthy packing to ensure no damage during transit."
        },

        {
            question: "(4)  Can I expect Timely delivery of my ordered parts?",
            answer: "Sure. PANTHER EXIM ensures timely delivery of the parts as PANTHER EXIM uses ERP Systems for tracking back production."
        },

        {
            question: "(5)  Will I get quality and durability of the parts as per my requirement?",
            answer: "Yes. PANTHER EXIM has more than 3 years of experience of manufacturing Precision Components with advanced machining Capabilities, modern Inspection systems and qualified engineers."
        },

        {
            question: "(6)  I don’t have a blueprint, can you quote and produce my part from a sample?",
            answer: "In most cases this is not an issue. We can create a blueprint from your sample for your approval, prior to production."
        },

        {
            question: "(7)   What are PANTHER EXIm Products’s ethical values ?",
            answer: "Our personalised quote includes the cost of the part, samples and transit. There are no extra costs involved."
        },

        {
            question: "(8)  Are there any extra costs for the services PANTHER EXIM Products provides?",
            answer: "As a succesful company, we pride ourselves in our business ethics and believe that this sets us apart from our competitors. Our business carries a lot of responsibility and we strive to ensure that we fulfill our promises, each and every time we do business with our clients."
        },

        {
            question: "(9)  What type of order delivery mode do you provide?",
            answer: "We provider order delivery by rail, road and sea as per the customer conveniences."
        },

        {
            question: "(10)  Do you offer shipment delivery contracts for offshore order delivery?",
            answer: "Yes, we enter into FOB (Free On Board ) contract, CIF ( Cost, Insurance and Freight ) contract and Ex-ship contract as per the customer's requirements."
        },

    ];

    return (
        <>
            <div className="fq-container">
                <h1>FAQ</h1>
                <p>
                    Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.
                </p>
            </div>

            <div className="custom-faq-container">
                <span className="custom-faq-title">FIND AN ANSWER</span>
                <h2 className="custom-faq-heading">Frequently Asked Questions?</h2>

                <p>
                    Wondering to ask something regarding our service/products? Check out our FAQ's
                </p>

                {/* Render FAQ questions and answers */}
                {faqData.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <div className="faq-question" onClick={() => toggleAnswer(index)}>
                            <p className="question">{faq.question} <span className="plus-minus-sign">{openIndex === index }</span></p>
                        </div>

                        {openIndex === index && (
                            <div className="faq-answer">
                                <p className="answer">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

