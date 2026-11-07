import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./assets/image.png";
import {
  FaShieldAlt,
  FaBolt,
  FaLink,
  FaDesktop,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
  FaUserShield,
  FaFingerprint,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: <FaBolt />,
      title: "Fast Identification",
      description:
        "Identify registered faces through an efficient recognition process designed for everyday use.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Verification",
      description:
        "Support identity verification and controlled access through a structured recognition workflow.",
    },
    {
      icon: <FaLink />,
      title: "Easy Integration",
      description:
        "Connect the platform with existing applications and workflows without unnecessary complexity.",
    },
    {
      icon: <FaDesktop />,
      title: "Simple Management",
      description:
        "Manage registered profiles and recognition activities through a straightforward interface.",
    },
  ];

  const solutions = [
    {
      number: "01",
      title: "Identity Registration",
      description:
        "Register and organize identity profiles in one centralized platform.",
    },
    {
      number: "02",
      title: "Face Recognition",
      description:
        "Compare submitted facial images against registered profiles using facial recognition technology.",
    },
    {
      number: "03",
      title: "Identity Management",
      description:
        "Manage identity records and verification activities through an organized workflow.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900 overflow-hidden">

      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-20 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#102c4a] flex items-center justify-center">
              <FaShieldAlt className="text-white text-xl" />
            </div>

            <span className="text-2xl font-bold tracking-tight text-[#102c4a]">
              KAIROS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            <a
              href="#about"
              className="text-sm font-semibold text-slate-600 hover:text-[#102c4a] transition"
            >
              About Us
            </a>

            <a
              href="#solutions"
              className="text-sm font-semibold text-slate-600 hover:text-[#102c4a] transition"
            >
              Solutions
            </a>

            <a
              href="#features"
              className="text-sm font-semibold text-slate-600 hover:text-[#102c4a] transition"
            >
              Features
            </a>

            <Link
              to="/login"
              className="bg-[#102c4a] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#244c72] transition duration-300"
            >
              Login
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-[#102c4a] p-2"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-slate-200 px-6 py-5 flex flex-col">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-slate-100 font-semibold text-slate-700"
            >
              About Us
            </a>

            <a
              href="#solutions"
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-slate-100 font-semibold text-slate-700"
            >
              Solutions
            </a>

            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-slate-100 font-semibold text-slate-700"
            >
              Features
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-slate-100 font-semibold text-slate-700"
            >
              About
            </a>

            <Link
              to="#"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-[#102c4a] text-white text-center py-3 rounded-lg font-semibold"
            >
              Login
            </Link>
          </nav>
        )}
      </header>

      <section
        id="about"
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 lg:py-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-20">

          <div className="max-w-2xl">

            <span className="inline-block text-xs sm:text-sm font-bold tracking-[2px] text-[#35658e] uppercase mb-6">
              Identity Verification Platform
            </span>

            <h1 className="text-[40px] sm:text-5xl lg:text-[62px] font-bold leading-[1.12] tracking-tight text-[#102c4a]">
              Smarter Identity{" "}
              <span className="text-[#3b6f9e]">
                Verification
              </span>{" "}
              for Modern Businesses.
            </h1>

            <p className="mt-7 text-base sm:text-lg leading-8 text-slate-500 max-w-xl">
              A practical facial recognition platform designed to help
              organizations manage identity verification, improve access
              control, and simplify everyday security operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">

              <Link
                to="/prediction"
                className="inline-flex items-center justify-center gap-3 bg-[#102c4a] text-white px-7 py-4 rounded-lg font-semibold hover:bg-[#244c72] transition duration-300"
              >
                Get Started
                <FaArrowRight />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center border border-slate-300 bg-white text-slate-700 px-7 py-4 rounded-lg font-semibold hover:bg-slate-100 transition duration-300"
              >
                Explore Platform
              </a>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-7 mt-9 text-sm text-slate-500">

              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3b82a0]" />
                Simple to use
              </span>

              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3b82a0]" />
                Designed for security
              </span>

            </div>
          </div>

          <div className="relative max-w-xl mx-auto w-full lg:max-w-none">

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              <img
                src={Image}
                alt="KAIROS facial recognition platform"
                className="w-full h-[300px] sm:h-[400px] lg:h-[460px] object-cover"
              />
            </div>

            <div className="relative sm:absolute sm:-bottom-8 sm:-right-5 bg-white border border-slate-200 rounded-xl p-5 shadow-lg w-[92%] sm:w-[260px] mx-auto sm:mx-0 -mt-8 sm:mt-0">

              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Verification Example
              </div>

              <h3 className="text-sm font-semibold text-slate-500">
                Registered Profile
              </h3>

              <h2 className="text-xl font-bold text-[#102c4a] mt-1">
                Sample User
              </h2>

              <div className="mt-3 space-y-2 text-xs text-slate-500">
                <p>Profile ID: KRS-001</p>
                <p>Location: Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="bg-white py-20 md:py-24 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-2xl mx-auto text-center mb-14">

            <span className="text-xs font-bold tracking-[2px] text-[#35658e] uppercase">
              Our Approach
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#102c4a] mt-5">
              Identity Management Made Simpler.
            </h2>

            <p className="text-slate-500 mt-5 leading-7">
              Bring identity verification and profile management together
              in one organized platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {solutions.map((solution) => (
              <div
                key={solution.number}
                className="border-t-2 border-slate-200 hover:border-[#35658e] pt-7 transition duration-300"
              >
                <span className="text-sm font-bold text-[#35658e]">
                  {solution.number}
                </span>

                <h3 className="text-xl font-bold text-[#102c4a] mt-5">
                  {solution.title}
                </h3>

                <p className="text-sm leading-7 text-slate-500 mt-3">
                  {solution.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-20 md:py-24 bg-[#f7f8fa]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-2xl mx-auto text-center mb-14">

            <span className="text-xs font-bold tracking-[2px] text-[#35658e] uppercase">
              Why KAIROS
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#102c4a] mt-5">
              Built Around Reliability and Usability.
            </h2>

            <p className="text-slate-500 mt-5 leading-7">
              Tools designed to make identity verification and management
              easier for organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-7 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 transition duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#edf3f8] text-[#28577f] text-xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-[#102c4a]">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-500 leading-7 mt-3">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="bg-[#102c4a] py-16 md:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            <div className="max-w-2xl">

              <span className="text-xs font-bold tracking-[2px] text-blue-200 uppercase">
                Get Started
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-5 leading-tight">
                Make Identity Verification Part of Your Workflow.
              </h2>

              <p className="text-slate-300 leading-7 mt-5">
                Explore KAIROS and discover an organized approach
                to identity management.
              </p>
            </div>

            <Link
              to="/prediction"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#102c4a] px-7 py-4 rounded-lg font-bold hover:bg-slate-100 transition duration-300 whitespace-nowrap"
            >
              Explore Platform
              <FaArrowRight />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}