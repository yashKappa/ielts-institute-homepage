import React from 'react';

const featuresData = [
  { title: "Speaking Practice", desc: "Improve fluency with exercises.", icon: "🗣️" },
  { title: "Mock Tests", desc: "Simulate real IELTS exams.", icon: "📝" },
  { title: "AI Band Score", desc: "Instant AI-based feedback.", icon: "🤖" },
  { title: "Expert Tutors", desc: "Certified IELTS trainers.", icon: "🎓" }
];

const Features = () => {
  return (
    <section id="features">
      <div className="containers py-5">
        <h2 className="text-center mb-5 fw-bold features-title" data-aos="fade-up">Our Features</h2>
        <div className="row g-4">
          {featuresData.map((feature, idx) => (
            <div className="col-md-6 col-lg-3" key={idx} data-aos="zoom-in" data-aos-delay={idx * 200}>
              <div className="card p-4 text-center shadow-sm feature-card">
                <div className="feature-icon mb-3">{feature.icon}</div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
