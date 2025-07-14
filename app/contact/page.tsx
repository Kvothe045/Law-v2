"use client";
import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import {
  MapPin,
  Phone,
  Mail,
  Quote,
  Navigation,
  Scale,
  Sparkles,
  ArrowRight,
  Users,
} from "lucide-react";
import Link from "next/link";

const MapSection = dynamic(() => import("@/components/MapSection"), {
  ssr: false,
});

const ContactUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-amber-100 flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
        <Navbar />
      </div>
      <section className="relative py-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>

          {/* Animated Background Shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 transform transition-all duration-1000 translate-y-0 opacity-100">
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-2xl border border-amber-300/30 backdrop-blur-sm hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Scale className="w-5 h-5 animate-bounce group-hover:rotate-12 transition-all duration-300" />
              <span className="tracking-wide">Contact GCS Law Firm</span>
              <Sparkles className="w-4 h-4 animate-pulse group-hover:animate-bounce transition-all duration-300" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Let's{" "}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-pulse">
                Connect Today
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-lg text-blue-100 max-w-5xl mx-auto leading-relaxed">
              We're here to answer your legal questions, provide expert advice,
              and help you take the next step. Reach out — we’d love to hear
              from you.
            </p>

            {/* Quote */}
            <div className="flex justify-center items-center pt-6">
              <blockquote className="relative bg-white/10 text-white max-w-3xl text-center text-lg italic px-6 py-8 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md">
                <svg
                  className="absolute top-4 left-4 w-6 h-6 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6A5.001 5.001 0 0 0 2 11v7a1 1 0 0 0 1 1h6v-8H4.09a3.001 3.001 0 0 1 3.08-3.95zm10 0A5.001 5.001 0 0 0 12 11v7a1 1 0 0 0 1 1h6v-8h-5.91a3.001 3.001 0 0 1 3.08-3.95z" />
                </svg>
                <p className="z-10 relative">
                  Justice delayed is justice denied. We are committed to timely,
                  effective, and ethical legal solutions that truly serve our
                  clients’ needs.
                </p>
                <footer className="mt-4 text-sm font-semibold text-amber-300">
                  — GCS Law Firm
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-amber-300 via-blue-400 to-amber-300 text-black py-12 px-6 md:px-16">
  <div className="max-w-6xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">
        Get in Touch with Us
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        We'd love to hear from you — reach out with questions, inquiries,
        or just to say hello.
      </p>
    </div>

    {/* Main Content */}
    <div className="flex flex-col md:flex-row justify-between items-start gap-32">
      {/* Contact Info */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="bg-white rounded-xl shadow-xl p-8 text-indigo-900 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6 text-lg">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-amber-500 mt-1" />
              <address className="not-italic">
                836-A, 8th Floor, Tower B-3
                <br />
                Spaze I-Tech Park, Sector 49
                <br />
                Sohna Road, Gurugram 122018
                <br />
                Haryana, INDIA
              </address>
            </div>
            <div className="mb-4 ml-8">
              <a
                href="https://maps.app.goo.gl/ZTTHiYsSTZeVFVgz6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
              >
                <Navigation className="w-5 h-5" />
                View on Map
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-amber-500" />
              <a href="tel:+919990733308" className="hover:underline">
                +91-99907 33308
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-amber-500" />
              <a href="mailto:info@gcslawfirm.in" className="hover:underline">
                info@gcslawfirm.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <MapSection />
      </div>
    </div>
  </div>
</section>


      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "GCS Law Firm provided exceptional support during a critical time. Their professionalism and dedication truly stood out.",
                name: "Amit R.",
              },
              {
                quote:
                  "Their team guided us through a complex corporate merger with clarity and confidence. Highly recommended.",
                name: "Shalini K.",
              },
              {
                quote:
                  "Compassionate, knowledgeable, and always accessible. GCS Law Firm helped us win our case with grace.",
                name: "Vikram S.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-indigo-50 border border-indigo-100 rounded-xl shadow-md p-6 text-left flex flex-col gap-4 transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2"
              >
                <Quote className="w-6 h-6 text-amber-500" />
                <p className="text-lg italic text-indigo-800">
                  “{testimonial.quote}”
                </p>
                <div className="text-sm font-semibold text-indigo-600 mt-auto text-right">
                  — {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
