import React from "react";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-background py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-primary">About MockExam</h1>
        <p className="mt-4 text-lg text-primary max-w-2xl mx-auto">
          Empowering Cambodian students through mock exams, smart quizzes, and
          personalized learning.
        </p>
      </section>
      <section className="py-12 px-4 text-center bg-background">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-600">
          We’re on a mission to help students—especially from rural
          areas—prepare for exams confidently, efficiently, and affordably.
        </p>
      </section>
      <section className="bg-background py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Mock Exams",
              icon: "📝",
              desc: "Practice real test formats with accurate timing.",
            },
            {
              title: "Self-Learning",
              icon: "📚",
              desc: "Learn and review by category or year.",
            },
            {
              title: "User Profiles",
              icon: "👤",
              desc: "Track your scores and history.",
            },
            {
              title: "Notifications",
              icon: "🔔",
              desc: "Stay updated with new tests or changes.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow rounded-xl p-6 text-center">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-background px-4 text-center">
        <blockquote className="max-w-2xl mx-auto italic text-gray-700 text-lg border-l-4 border-blue-500 pl-4">
          “MockExam helped me prepare for my universities entrance exam. I
          wouldn't have passed without it!”
        </blockquote>
        <p className="mt-4 text-gray-500 text-sm">
          — High School Student, Phnom Penh
        </p>
      </section>
      <section className="bg-background py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-8">Our Story</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          MockExam started as a small project to support students in rural
          Cambodia. Today, it’s a growing platform helping learners across the
          country.
        </p>
      </section>
    </div>
  );
}
