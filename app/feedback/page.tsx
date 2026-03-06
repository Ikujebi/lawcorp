"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "@/app/fonts";

export default function FeedbackPage() {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={`${Montserrat.className} min-h-screen flex items-center justify-center bg-white`}>
        <div className="text-center max-w-xl px-6">
          <h1 className="text-3xl font-semibold mb-4">Thank You</h1>
          <p className="text-gray-600">
            Your feedback helps us improve the experience for our clients.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={`${Montserrat.className} bg-white min-h-screen flex items-center`}>
      <div className="max-w-3xl mx-auto px-6 py-24 w-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6">
            Website Feedback
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-center mb-12">
            We value your thoughts. Please share your feedback about the website
            experience so we can continue improving it.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Rating */}
            <div className="text-center">
              <p className="mb-4 font-medium">How would you rate your experience?</p>

              <div className="flex justify-center gap-3">
                {[1,2,3,4,5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-3xl ${
                      rating && rating >= star ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Message */}
            <div>
              <label className="block mb-2 font-medium">
                Your Feedback
              </label>

              <textarea
                required
                rows={5}
                className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:border-[#5F021F]"
                placeholder="Tell us what you liked or what could be improved..."
              />
            </div>

            {/* Email (optional) */}
            <div>
              <label className="block mb-2 font-medium">
                Email (optional)
              </label>

              <input
                type="email"
                className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:border-[#5F021F]"
                placeholder="your@email.com"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#5F021F] text-[#F7E7CE] px-10 py-4 font-semibold rounded-sm"
              >
                Submit Feedback
              </button>
            </div>

          </form>

        </motion.div>

      </div>
    </section>
  );
}