import React from "react";
import { useForm } from "@formspree/react";
import "../../utils/css/pricing.css";

const QuoteModal = ({ open, onClose }) => {
  const [state, handleSubmit, reset] = useForm("xpqznwor");

  if (!open) return null;

  const closeModal = () => {
    reset();
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          ✕
        </button>

        {!state.succeeded ? (
          <>
            <h3>Get a Free Quote</h3>

            <form className="quote-form" onSubmit={handleSubmit}>
              <input name="name" placeholder="Full Name" required />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                name="mobile"
                type="tel"
                placeholder="+64 21 345 678"
                required
              />

              <select name="propertyType" required>
                <option value="">Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Office</option>
              </select>

              <select name="cleaningType" required>
                <option value="">Cleaning Type</option>
                <option>Standard Clean</option>
                <option>Deep / Spring Clean</option>
                <option>Move In / Move Out</option>
              </select>

              <div className="checkbox-group">
                <label>
                  <input type="checkbox" name="ovenCleaning" /> Oven Cleaning
                </label>
                <label>
                  <input type="checkbox" name="windowCleaning" /> Window
                  Cleaning
                </label>
              </div>

              <textarea
                name="message"
                placeholder="Additional details (optional)"
              />

              <button
                type="submit"
                className="submit-btn"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Submit Request"}
              </button>

              <p className="form-note">
                * Quote request will be sent to our email.
              </p>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h3>Thank you!</h3>
            <p>Your quote request has been sent.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;
