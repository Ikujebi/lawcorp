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
        "service_qob6gin",   // EmailJS service ID
        "template_un996mj",  // EmailJS template ID
        formRef.current,
        "RJqgR6UT9A9FXvm-G"     // EmailJS public key
      )
      .then(() => {
        setStatus("Feedback sent successfully.");
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <section className={`${Montserrat.className} bg-white min-h-screen flex items-center`}>
      <div className="max-w-3xl mx-auto px-6 py-24 w-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6">
            Website Feedback
          </h1>

          <p className="text-gray-600 text-center mb-12">
            We welcome your feedback about your experience on our website.
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
                Feedback
              </label>

              <textarea
                name="message"
                required
                rows={5}
                className="w-full border border-gray-300 p-4 rounded-sm focus:border-[#5F021F]"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#5F021F] text-[#F7E7CE] px-10 py-4 font-semibold rounded-sm"
              >
                Submit Feedback
              </button>
            </div>

            {status && (
              <p className="text-center text-sm text-gray-600">
                {status}
              </p>
            )}

          </form>

        </motion.div>
      </div>
    </section>
  );
}