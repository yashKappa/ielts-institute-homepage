import React from 'react';

const testimonials = [
  { name: "Alice", review: "Amazing tutors! I scored 8.5." },
  { name: "John", review: "Mock tests helped track progress." },
  { name: "Sara", review: "AI Band Score feedback is super accurate!" }
];

const Testimonials = () => {
  return (
   <section id="testimonials" className="py-5 bg-gradient">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold testimonials-title" data-aos="fade-down">
      What Our Students Say
    </h2>
    <div className="row g-4">
      {testimonials.map((t, idx) => (
        <div className="col-md-4" key={idx} data-aos="fade-up" data-aos-delay={idx*300}>
          <div className="card p-4 shadow-sm testimonial-card">
            <p className="testimonial-text">"{t.review}"</p>
            <h6 className="testimonial-name fw-bold">- {t.name}</h6>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Testimonials;
