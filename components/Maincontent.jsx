import { FaLinkedin, FaEnvelope } from "react-icons/fa";
function Main() {
  return (
    <main className="main-content">
      <section className="my-bio">
        <h1>Aweto Egbaoghene</h1>
        <h2>Full-stack Developer</h2>
        <p>codedbyaweto.com</p>
      </section>

      <section className="button-section">
        <button className="button primary">
          <FaEnvelope />
          Email
        </button>
        <button className="button secondary">
          <FaLinkedin />
          Linkedin
        </button>
      </section>

      <section className="about">
        <h2>About</h2>
        <p>
          I am a full stack developer with a particular interest in making
          things simple and automating daily tasks. I try to keep up with
          security and best practices, and am always looking for new things to
          learn.
        </p>
      </section>

      <section className="about">
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </section>
    </main>
  );
}

export default Main;
