import './about.css';
import Navbar from '../navbar';

const About = () => {
  return (
    <>
      <div className="three">
        <Navbar />

        <div className="abmain">
          <h1 className="Abh">
            About <span>us</span>
          </h1>

          <p className="abcontent">
            Welcome to Communion App, where we bring people together through
            meaningful events. Our platform is built to foster connections,
            engagement, and personal growth by offering a wide variety of events
            tailored to different interests.
            <br />
            <span>Our Mission: </span>We aim to create a community where
            individuals can participate in events that inspire, educate, and
            connect. Whether it’s a spiritual gathering, a volunteering
            opportunity, a wellness workshop, or a networking event, we make it
            easy for you to stay involved.
          </p>
          <p className="abcontent">
            <span>Why Choose Communion App?</span>
            <br />- Discover events that align with your interests.
            <br /> - Engage with like-minded people and expand your network.
            <br /> - Participate in activities that enrich your personal and
            professional life.
            <br /> Join us and be a part of a vibrant and engaging community...!
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
