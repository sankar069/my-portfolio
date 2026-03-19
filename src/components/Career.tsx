import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead (AI & ML)</h4>
                <h5>VISWAM.AI / IBM </h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engaged in leading real-world AI projects, guiding transformer-based models, and contributing to data pipelines. Worked on AI & Cloud technologies during IBM internship.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate & Ambassador</h4>
                <h5>SPECIIE</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Fostering innovation at the official incubation cell. Assisted in organizing hackathons, facilitating mentoring, evaluating MVPs, and building strong entrepreneurial ecosystems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Ambassador</h4>
                <h5>Google / GDG India</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Serving as a Student Ambassador and active contributor for Google Developer Groups India. Dedicated to guiding the technical community and sharing developmental strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Community / Green Intern</h4>
                <h5>Neurolov.ai / 1M1B</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Managed community operations at Neurolov.ai and contributed as a Green Intern at 1M1B (1 Million for 1 Billion) empowering youth towards sustainable goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
