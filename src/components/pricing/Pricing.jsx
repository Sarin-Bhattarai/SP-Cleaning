import React from "react";
import "../../utils/css/pricing.css";

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
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="pricing-title">Our Pricing</h2>
        <p className="pricing-subtitle">
          Professional & affordable cleaning services across New Zealand
        </p>

        {/* MAIN PRICING */}
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
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button className="pricing-btn">Get a Quote</button>
            </div>
          ))}
        </div>

        {/* ADD-ONS */}
        <div className="addons-section">
          <h3 className="addons-title">Add-On Services</h3>

          <div className="addons-grid">
            <div className="addon-card">
              <h4>Oven Cleaning</h4>
              <p className="addon-price">from $60</p>
              <p className="addon-desc">
                Deep interior oven clean, grease & residue removal
              </p>
            </div>

            <div className="addon-card">
              <h4>Window Cleaning</h4>
              <p className="addon-price">from $5 / window</p>
              <p className="addon-desc">
                Internal window cleaning for a streak-free finish
              </p>
            </div>
          </div>

          <p className="addons-note">
            * Add-on services are available with any cleaning package.
          </p>
        </div>
      </div>
    </section>
  );
}
