import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Testemonials.css";

const Testomenials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/app/testimonials/")
      .then((res) => setTestimonials(res.data))
      .catch(() => console.error("Failed to load testimonials"));
  }, []);

  return (
    <section className="testemonilas">
      <h1>Testemonials</h1>

      <ul className="reviews-list">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="review">
            <h5>{testimonial.rating} Stars</h5>
            <div className="reviewr">
              <img
                src={
                  testimonial.image && testimonial.image !== ""
                    ? testimonial.image
                    : "/images/user.png"
                }
                alt="client"
              />
              <p>{testimonial.name}</p>
            </div>
            <p>
              {testimonial.review.split(" ").slice(0, 75).join(" ") +
                (testimonial.review.split(" ").length > 75 ? "..." : "")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testomenials;
