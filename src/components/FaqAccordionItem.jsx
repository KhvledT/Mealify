import React from 'react';

const FaqAccordionItem = ({ faq, idx, openFaq, setOpenFaq, faqAnswerVariants, AnimatePresence, motion }) => (
  <div className="accordion-item mb-3">
    <h2 className="accordion-header" id={`faqHeading${idx}`}>
      <button
        className={`accordion-button${openFaq === idx ? '' : ' collapsed'}`}
        type="button"
        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
      >
        <i className="fa-solid fa-circle-question me-2 text-danger"></i>
        {faq.q}
      </button>
    </h2>
    <AnimatePresence initial={false}>
      {openFaq === idx && (
        <motion.div
          className={`accordion-collapse collapse show`}
          aria-labelledby={`faqHeading${idx}`}
          data-bs-parent="#faqAccordion"
          key="faq-answer"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={faqAnswerVariants}
        >
          <div className="accordion-body text-secondary small">
            {faq.a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default FaqAccordionItem; 