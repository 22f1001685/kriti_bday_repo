"use client";
import React from "react";
import {ParticleTextEffect} from "./ui/particle-text-effect";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-5">
      <div className="max-w-8xl mx-auto px-4 text-center">
        {/* Particle Text Effect for Birthday Message */}
        <div className="mb-8">
          <ParticleTextEffect
            words={["HAPPY", "BIRTHDAY", "MEGHA"]}
            width={1600}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* Simple outro message */}
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Hope you like this small birthday surprise! Happy Birthday Meghs
        </p>

        <p className="text-sm text-gray-500 mb-2">
          Made with ❤️ for Megha • {new Date().getFullYear()}
        </p>

        <p className="text-xs text-gray-600">
          Right-click and hold to interact with particles ✨
        </p>
      </div>
    </footer>
  );
};

export default Footer;
