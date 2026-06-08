import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">

        <img
          src="/ddddIMG-20240829-WA0008_formphotoeditor.com_copy_540.jpg"
          alt="Dipika Sinha"
          className="profile-img"
        />

        <h1>Dipika Sinha 👋</h1>

        <h2>Frontend Developer | React Learner</h2>

        <p className="intro">
          I build modern, responsive and user-friendly websites using React,
          JavaScript, HTML and CSS.
        </p>

        <div className="buttons">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sinhadipika234@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            📧 Email
          </a>

          <a
            href="https://www.linkedin.com/in/dipika-sinha-10aa49255"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/dipikasinha212"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            💻 GitHub
          </a>

          <a
            href="/Dipika_Resume.pdf"
            download
            className="btn"
          >
            📄 Resume
          </a>
        </div>

        <h3>About Me</h3>

        <p>
          I am a Final Year Electronics & Communication Engineering student
          with a Diploma in Computer Science Engineering. Passionate about
          Frontend Development and creating responsive, user-friendly web
          applications using React.js, JavaScript, HTML and CSS. I enjoy
          learning new technologies and building real-world projects.
        </p>

        <h3>Skills</h3>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Java</span>
          <span>MySQL</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Vite</span>
        </div>

        <h3>Quick Stats</h3>

        <div className="stats">
          <div className="stat-card">
            <h4>3+</h4>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h4>React</h4>
            <p>Frontend</p>
          </div>

          <div className="stat-card">
            <h4>Git</h4>
            <p>Version Control</p>
          </div>

          <div className="stat-card">
            <h4>Vite</h4>
            <p>Modern Tooling</p>
          </div>
        </div>

        <h3>Projects</h3>

        <div className="projects">

          <div className="project">
            <h4>🌦 Weather App</h4>
            <p>
              Real-time weather application built using React and Weather API.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/dipikasinha212"
                target="_blank"
                rel="noreferrer"
              >
                View Code →
              </a>
            </div>
          </div>

          <div className="project">
            <h4>💼 Portfolio Website</h4>
            <p>
              Personal portfolio website built using React and Vite.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/dipikasinha212"
                target="_blank"
                rel="noreferrer"
              >
                View Code →
              </a>
            </div>
          </div>

          <div className="project">
            <h4>📝 To-Do List App</h4>
            <p>
              Task management application with add and delete functionality.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/dipikasinha212"
                target="_blank"
                rel="noreferrer"
              >
                View Code →
              </a>
            </div>
          </div>

        </div>

        <h3>Contact</h3>

        <div className="contact">
          <p>📍 Ankleshwar, Gujarat</p>
          <p>📧 sinhadipika234@gmail.com</p>
          <p>📱 +91 7984903165</p>
        </div>

        <footer>
          <p>© 2026 Dipika Sinha | Built with React & Vite</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
