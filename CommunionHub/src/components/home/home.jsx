import { useNavigate } from 'react-router-dom';
import './home.css';
import React from 'react';
import Navbar from '../navbar/navbar';
import { motion } from 'framer-motion';

const Home = () => {
  const Navi = useNavigate();

  const OnEvent = e => {
    e.preventDefault();
    Navi('/Event');
  };

  const OnAbout = e => {
    e.preventDefault();
    Navi('/About');
  };

  return (
    <motion.div className="main">
      <Navbar OnEvent={OnEvent} OnAbout={OnAbout} />

      <motion.div
        className="h5div"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h5 className="h5">Welcome to</h5>
      </motion.div>

      <motion.img
        src="/heading.png"
        className="heading"
        alt="Heading"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      />

      <motion.div
        className="pdiv"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p>
          Discover and participate in meaningful events that bring people
          together. Whether you are looking for a spiritual gathering, a
          community service opportunity, or a networking event, Communion App
          helps you stay connected and engaged.
        </p>
      </motion.div>

      <motion.button
        className="find-btn"
        onClick={OnEvent}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Find Events
      </motion.button>
    </motion.div>
  );
};

export default Home;
