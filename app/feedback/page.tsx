"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Montserrat } from "@/app/fonts";

export default function FeedbackPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendFeedback = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_qob6gin",
        "template_un996mj",
        formRef.current,
        "RJqgR6UT9A9FXvm-G"
      )
      .then(() => {
        setStatus("Thank you. Your feedback has been sent.");
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <section className={`${Montserrat.className} bg-[#F7E7CE] min-h-screen flex items-center`}>
      <div className="max-w-3xl mx-auto px-6 py-24 w-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-md p-10 rounded-md shadow-md"
        >

          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-[#5F021F]">
            Service Feedback
          </h1>

          <p className="text-gray-700 text-center mb-12">
            We value feedback from our clients. If you have worked with Lummina,
            please share your experience with our legal services.
          </p>

          <form ref={formRef} onSubmit={sendFeedback} className="space-y-8">

            <div>
              <label className="block mb-2 font-medium">
                Your Name
              </label>

              <input
                name="name"
                required
                className="w-full border border-gray-300 p-4 rounded-sm focus:border-[#5F021F]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 p-4 rounded-sm focus:border-[#5F021F]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Your Feedback About Our Services
              </label>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Please tell us about your experience working with Lummina."
                className="w-full border border-gray-300 p-4 rounded-sm focus:border-[#5F021F]"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#5F021F] text-[#F7E7CE] px-10 py-4 font-semibold rounded-sm hover:opacity-90"
              >
                Submit Feedback
              </button>
            </div>

            {status && (
              <p className="text-center text-sm text-gray-700">
                {status}
              </p>
            )}

          </form>

        </motion.div>

      </div>
    </section>
  );
}