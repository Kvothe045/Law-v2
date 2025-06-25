"use client";
import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, Quote, Navigation } from "lucide-react";

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

      <section className="relative bg-gradient-to-br from-amber-300 via-blue-400 to-amber-300 text-black py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2 space-y-10">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-900">
                Get in Touch with GCS Law Firm
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl text-gray-900">
                Whether you need expert legal advice or representation, our
                dedicated team is here to assist you. Reach out today and take
                the first step towards a better legal outcome.
              </p>
              <a
                href="mailto:info@gcsl.in"
                className="inline-block bg-amber-400 text-indigo-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-amber-500 transition"
              >
                Email Us Now
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 text-indigo-900 max-w-md">
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>
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
                  <a href="mailto:info@gcsl.in" className="hover:underline">
                    info@gcsl.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px bg-amber-400 opacity-40 mx-6 h-[40rem]"></div>

          {/* Dynamically loaded Map */}
          <MapSection />
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
