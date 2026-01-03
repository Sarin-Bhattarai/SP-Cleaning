import { useState } from "react";
import "../../utils/css/pricing.css";
import { useForm } from "@formspree/react";

const pricingPlans = [
  {
    title: "Standard Clean",
    price: "$40/hr",
    description: "Weekly or fortnightly maintenance cleaning",
    features: [
      "Dusting & wiping surfaces",
      "Vacuum & mop floors",
      "Bathroom & kitchen tidy",
      "Ideal for regular cleaning",
    ],
  },
  {
    title: "Deep / Spring Clean",
    price: "$50/hr",
    description: "Detailed, top-to-bottom cleaning",
    featured: true,
    features: [
      "Behind appliances",
      "Skirting boards & edges",
      "Detailed bathroom & kitchen",
      "Perfect for seasonal cleans",
    ],
  },
  {
    title: "Move In / Move Out",
    price: "$50/hr",
    description: "End-of-tenancy cleaning",
    features: [
      "Full property clean",
      "Cupboards & appliances",
      "Ready for inspection",
      "Real estate approved",
    ],
  },
];

export default function Pricing() {
  const [open, setOpen] = useState(false);
  const [state, handleSubmit, reset] = useForm("xpqznwor");

  return (
    <>
      {/* PRICING SECTION */}
      <section className="pricing-section">
        <h2 className="pricing-title">Our Pricing</h2>
        <p className="pricing-subtitle">
          Professional & affordable cleaning services across New Zealand
        </p>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.featured && <span className="badge">Most Popular</span>}
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <p className="desc">{plan.description}</p>

              <ul>
                {plan.features.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>

              <button
                className="pricing-btn"
                onClick={() => {
                  reset();
                  setOpen(true);
                }}
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => {
                reset();
                setOpen(false);
              }}
            >
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
                      <input type="checkbox" name="ovenCleaning" /> Oven
                      Cleaning
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
      )}
    </>
  );
}
