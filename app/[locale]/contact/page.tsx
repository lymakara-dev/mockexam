import React from "react";

export const runtime = "edge";

export default function ContactPage() {
  return (
    <div>
      <section className="bg-background py-12 text-center">
        <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
        <p className="mt-2 text-primary">We'd love to hear from you</p>
      </section>
      <section className="bg-background py-12 px-4">
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <section className="bg-background py-8 text-center">
        <p className="text-gray-700">Or reach out directly:</p>
        <p className="mt-2 text-primary font-medium">
          📧 mockexam.kh@gmail.com
        </p>
        <p className="text-primary font-medium">
          📱 Telegram: https://t.me/itc_mockingtestsys
        </p>
      </section>
    </div>
  );
}
