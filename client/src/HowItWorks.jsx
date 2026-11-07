import React from "react";
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.png";
import {
  FaLock,
  FaFileAlt,
  FaFolder,
  FaKey,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaUserCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Capture Your Face",
      description:
        "Upload a facial image or capture one using your device camera to begin the verification process.",
    },
    {
      number: "02",
      title: "Identity Processing",
      description:
        "The recognition system analyzes facial features and compares them with registered identity profiles.",
      active: true,
    },
    {
      number: "03",
      title: "View Your Results",
      description:
        "Receive the verification result and view the outcome of the recognition process.",
    },
  ];

  const privacyFeatures = [
    {
      icon: <FaFileAlt />,
      title: "Data Protection",
      description:
        "Handle personal information responsibly with appropriate data protection practices.",
    },
    {
      icon: <FaFolder />,
      title: "Controlled Data Storage",
      description:
        "Manage identity records according to defined storage, access, and retention policies.",
    },
    {
      icon: <FaKey />,
      title: "Access Management",
      description:
        "Use appropriate access controls to restrict unauthorized access to sensitive information.",
    },
    {
      icon: <FaLock />,
      title: "Secure Communication",
      description:
        "Protect information exchanged between the application and its backend using secure communication practices.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900 overflow-hidden">

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-20">

          <div className="relative max-w-xl w-full mx-auto lg:mx-0">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
              <img
                src={Image1}
                alt="Facial recognition system demonstration"
                className="w-full h-[320px] sm:h-[440px] object-cover"
              />
            </div>

            <div className="relative sm:absolute sm:-bottom-12 sm:-right-8 w-[85%] sm:w-[65%] mx-auto sm:mx-0 -mt-10 sm:mt-0 rounded-xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src={Image2}
                alt="Identity verification process"
                className="w-full h-[180px] sm:h-[220px] object-cover"
              />
            </div>

            <div className="hidden sm:flex absolute top-7 -left-4 bg-white rounded-lg shadow-md border border-slate-100 p-4 items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#edf3f8] flex items-center justify-center text-[#28577f]">
                <FaUserCheck className="text-lg" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#102c4a]">
                  Identity Verification
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Recognition workflow
                </p>
              </div>
            </div>

          </div>

          <div className="pt-4 lg:pt-0">

            <span className="text-xs font-bold tracking-[2px] text-[#35658e] uppercase">
              The Process
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#102c4a] mt-5 leading-tight tracking-tight">
              How It Works.
            </h1>

            <p className="text-slate-500 leading-8 mt-5 text-base">
              Getting started with KAIROS is straightforward.
              Follow three simple steps to complete the facial
              recognition process.
            </p>

            <div className="mt-10 space-y-5">

              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex gap-5 p-5 sm:p-6 rounded-xl border transition duration-300 ${
                    step.active
                      ? "bg-white border-[#35658e] shadow-md shadow-slate-900/5"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >

                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-lg flex items-center justify-center text-lg font-bold ${
                      step.active
                        ? "bg-[#102c4a] text-white"
                        : "bg-[#edf3f8] text-[#28577f]"
                    }`}
                  >
                    {step.number}
                  </div>

                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-bold ${
                        step.active
                          ? "text-[#102c4a]"
                          : "text-slate-800"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-7 mt-2">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      <section className="bg-white border-y border-slate-200 py-20 md:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-2xl mx-auto text-center mb-14">

            <div className="w-14 h-14 bg-[#edf3f8] rounded-xl flex items-center justify-center text-[#28577f] text-2xl mx-auto mb-5">
              <FaShieldAlt />
            </div>

            <span className="text-xs font-bold tracking-[2px] text-[#35658e] uppercase">
              Security & Privacy
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#102c4a] mt-5">
              Your Privacy Matters.
            </h2>

            <p className="text-slate-500 leading-8 mt-5">
              Facial information is sensitive. KAIROS is designed
              with an emphasis on responsible information handling,
              controlled access, and secure application workflows.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {privacyFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-7 rounded-xl border border-slate-200 bg-[#fafbfc] hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition duration-300"
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

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start bg-[#f1f5f9] border border-slate-200 rounded-xl p-6">

            <FaShieldAlt className="text-[#28577f] text-xl mt-1 shrink-0" />

            <div>
              <h3 className="font-bold text-[#102c4a]">
                Responsible Use of Facial Information
              </h3>

              <p className="text-sm text-slate-600 leading-7 mt-2">
                Users should be informed about how their facial
                information is collected, processed, stored, and
                retained. Appropriate consent and data protection
                measures should be in place before using the platform.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#102c4a] py-20 md:py-24">

        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">

          <span className="text-xs font-bold tracking-[2px] text-blue-200 uppercase">
            Get Started Today
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
            Experience a Simpler Approach to Identity Verification.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-8 max-w-2xl mx-auto mt-6">
            Discover how KAIROS brings facial recognition and
            identity management together in one accessible platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <Link
              to="/prediction"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#102c4a] px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition duration-300"
            >
              Get Started
              <FaArrowRight />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              Back to Home
            </Link>

          </div>

        </div>
      </section>

      <footer className="bg-[#0b2035] py-8">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-5">

          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white tracking-wide">
              KAIROS
            </h2>

            <p className="text-sm text-slate-400 mt-2">
              Identity verification and management platform.
            </p>
          </div>

          <p className="text-xs text-slate-400 text-center">
            © {new Date().getFullYear()} KAIROS. All rights reserved.
          </p>

          <a
            href="https://github.com/niyomugaboetiene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-white transition"
          >
            Developed by Niyomugabo Etiene
          </a>

        </div>
      </footer>

    </main>
  );
}