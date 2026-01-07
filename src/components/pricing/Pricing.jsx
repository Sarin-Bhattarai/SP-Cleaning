import { useState } from "react";
import "../../utils/css/pricing.css";
import QuoteModal from "./QuoteModal";

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

              <button className="pricing-btn" onClick={() => setOpen(true)}>
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </section>
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
