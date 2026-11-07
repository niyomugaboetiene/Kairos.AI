
import React from "react";
import {
  FaArrowRight,
  FaBullseye,
  FaCode,
  FaLightbulb,
  FaUsers,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const technologies = [
    "Python",
    "Flask",
    "OpenCV",
    "NumPy",
    "Scikit-learn",
    "React",
  ];

  const features = [
    {
      icon: <FaBullseye />,
      title: "Our Purpose",
      description:
        "To explore how computer vision and machine learning can be used to build practical applications that solve real-world problems.",
    },
    {
      icon: <FaLightbulb />,
      title: "Our Approach",
      description:
        "We focus on combining image processing, facial feature detection, and machine learning to make image classification understandable and accessible.",
    },
    {
      icon: <FaCode />,
      title: "Our Technology",
      description:
        "KAIROS AI brings together a Python-powered recognition system and a modern React interface to provide a simple user experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#102c4a] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            About KAIROS AI
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Exploring the possibilities of{" "}
            <span className="text-blue-300">computer vision.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            KAIROS AI is a face recognition and image classification project
            built to explore how machine learning can identify known faces
            from images.
          </p>

          <Link
            to="/prediction"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 font-semibold text-[#102c4a] transition duration-300 hover:bg-blue-100"
          >
            Try the application
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-700">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#102c4a] md:text-4xl">
              A project built around learning, technology and innovation.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              KAIROS AI started as a practical project to understand how
              computers can process images and recognize patterns in human
              faces.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Rather than presenting machine learning as something complicated,
              the project brings different technologies together in one
              application where users can upload an image and receive a
              prediction from a trained model.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              It is also an opportunity to apply knowledge of Python,
              computer vision, machine learning and frontend development
              in a single working project.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm md:p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#102c4a] text-2xl text-white">
                <FaEye />
              </div>

              <h3 className="text-2xl font-bold text-[#102c4a]">
                What KAIROS AI does
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                The application analyzes an uploaded image, detects faces
                with computer vision techniques, and uses a trained
                classification model to predict which supported person
                the face most closely matches.
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold text-slate-500">
                  PROJECT FOCUS
                </p>
                <p className="mt-2 font-semibold text-[#35658e]">
                  Face Detection · Image Processing · Machine Learning
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-blue-100" />
          </div>
        </div>
      </section>

      {/* Mission and Approach */}
      <section className="bg-slate-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              What Drives This Project
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#102c4a] md:text-4xl">
              Built with a clear purpose.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every part of KAIROS AI has a role, from processing an uploaded
              image to presenting the model's prediction.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-xl text-[#35658e]">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#102c4a]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                Under The Hood
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#102c4a] md:text-4xl">
                The technology behind KAIROS AI.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                The application uses a combination of tools for image
                processing, machine learning and web development. Each
                technology contributes to a different part of the system.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#102c4a] p-8 text-white md:p-10">
              <h3 className="text-xl font-bold">
                How the application works
              </h3>

              <div className="mt-8 space-y-7">
                {[
                  {
                    number: "01",
                    title: "Upload an image",
                    description:
                      "The user selects an image from their device.",
                  },
                  {
                    number: "02",
                    title: "Process the image",
                    description:
                      "OpenCV detects faces and prepares image features.",
                  },
                  {
                    number: "03",
                    title: "Generate a prediction",
                    description:
                      "The trained machine learning model predicts a supported class.",
                  },
                  {
                    number: "04",
                    title: "Display the result",
                    description:
                      "The React interface presents the prediction and available confidence information.",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <span className="text-lg font-bold text-blue-300">
                      {step.number}
                    </span>

                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator */}
      <section className="bg-slate-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid md:grid-cols-5">
            <div className="flex min-h-64 items-center justify-center bg-[#102c4a] p-10 text-white md:col-span-2">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-blue-300/40 bg-blue-300/10 text-4xl">
                  <FaCode />
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-blue-300">
                  Developer & Creator
                </p>
              </div>
            </div>

            <div className="p-8 md:col-span-3 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                The Person Behind The Project
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#102c4a]">
                NIYOMUGABO Etiene
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                KAIROS AI was developed by NIYOMUGABO Etiene as a practical
                exploration of machine learning, computer vision and
                full-stack web development.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The goal is simple: keep learning, build useful technology,
                and turn ideas into applications that people can actually
                interact with.
              </p>

              <a
                href="https://niyomugaboetiene.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 font-semibold text-[#35658e] transition hover:gap-5"
              >
                Visit my portfolio
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Scope */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-xl border border-blue-100 bg-blue-50/60 p-7 md:p-10">
          <div className="flex items-start gap-4">
            <FaUsers className="mt-1 shrink-0 text-xl text-[#35658e]" />

            <div>
              <h3 className="text-lg font-bold text-[#102c4a]">
                A note about recognition
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                KAIROS AI is an experimental image classification project.
                Its current model is trained on a limited set of supported
                identities: Lionel Messi, Maria Sharapova, Roger Federer,
                Serena Williams and Virat Kohli. Its predictions are model
                outputs, not official identity verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#102c4a] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Explore KAIROS AI
          </p>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            See the project in action.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-300">
            Upload an image and explore how the trained model processes
            and classifies supported faces.
          </p>

          <Link
            to="/prediction"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-7 py-3.5 font-semibold text-[#102c4a] transition hover:bg-blue-100"
          >
            Try KAIROS AI
            <FaArrowRight />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
