
"use client"

import { NextPage } from 'next';
import { motion } from 'framer-motion';
import '../styles/globals.css';
import React from 'react';
import Navbar from './components/Navbar';
import { useState , useEffect } from 'react';
import BackgroundAnimation from './BackgroundAnimation'; // Import the BackgroundAnimation component


const Home: NextPage = () => {

  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const text = "I am a programmer and I love to code.";
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prevText) => prevText + text[index]);
      index++;
      if (index === text.length-1) clearInterval(typingInterval);
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div>
      <Navbar />
      <BackgroundAnimation />
      <main>
      <motion.section
          id="home"
          className="flex justify-center items-center h-screen"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold">Hi, I am Nithin.</h1>
            <p className="text-lg font-bold">
              {typedText}
              <span style={{ height: "1rem", display: "inline-block" }}>
              {showCursor && <span className="text-lg font-bold"> | </span>}
            </span>
            </p>
          </div>
          <div className="ml-8">
            <img
              src="/profile-page.jpg"
              alt="Your Name"
              className="rounded-full w-60 h-60"
            />
          </div>
        </motion.section>
        <motion.section
          id="about"
          className="h-screen bg-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        >
          <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-4">
              I'm a beginner and passionate programmer with some experience in
              Java and Python, and familiar with frameworks like React, Node.js,
              Flask, and Express.js. I'm a quick learner and like to work on
              problems until they are solved. I embarked on my programming
              journey in October 2022 and have had a great experience so far in
              the programming field.
            </p>
            {/* Add any additional information you want to include here */}
          </div>
        </motion.section>
        <motion.section
          id="skills"
          className="h-screen bg-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        >
          <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-4 gap-4">
              <SkillIcon icon="/c.png" name="C" />
              <SkillIcon icon="/c++.png" name="C++" />
              <SkillIcon icon="/python.jpg" name="Python" />
              <SkillIcon icon="/java.jpg" name="Java" />
              <SkillIcon icon="/html.png" name="Html" />
              <SkillIcon icon="/css.png" name="Css" />
              <SkillIcon icon="/bootstrap.png" name="Bootstrap" />
              <SkillIcon icon="/JavaScript.png" name="JavaScript" />
              <SkillIcon icon="/nodejs.png" name="NodeJs" />
              <SkillIcon icon="/mongodb.png" name="MongoDB" />
              <SkillIcon icon="/react.png" name="ReactJs" />
              <SkillIcon icon="/nextjs-icon.png" name="NextJs" />
              <SkillIcon icon="/flask.png" name="Flask" />
              <SkillIcon icon="/git-icon.png" name="Git" />
              <SkillIcon icon="/mysql-icon.png" name="MySQL" />
              <SkillIcon icon="/postgresql-icon.png" name="PostgreSQL" />
              <SkillIcon icon="/cnn.png" name="CNN" />
              <SkillIcon icon="/yolo.png" name="YOLO" />
              <SkillIcon icon="/datacube.png" name="ODC" />
              <SkillIcon icon="/qgis.png" name="QGIS" />
              {/* Add more skills with their icons */}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SkillIcon: React.FC<{ icon: string; name: string }> = ({ icon, name }) => {
  return (
    <motion.div
      className="flex flex-col items-center transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.img
        src={icon}
        alt={name}
        className="w-16 h-16 mb-2"
        whileHover={{ rotate: 360 }}
      />
      <p className="text-lg">{name}</p>
    </motion.div>
  );
};

export default Home;
