"use client";

import { PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Award, Star, Trophy, ArrowRight, Users, Zap } from "lucide-react";

const tvLearningFeatures = [
  {
    title: "क्या है National Green Tribunal - Yatish Goel की कानून की पाठशाला",
    description:
      "Advocate Yatish Kumar Goel sheds light on the role and powers of the National Green Tribunal (NGT) in environmental justice.",
    url: "https://www.youtube.com/watch?v=rfCXmT-0dCk",
    thumbnail: "https://img.youtube.com/vi/rfCXmT-0dCk/hqdefault.jpg",
  },
  {
    title: "Bail के नियम - Yatish Goel की कानून की पाठशाला",
    description:
      "Advocate Yatish Kumar Goel explains the essential rules and legal procedures around bail in India—simplified for public understanding.",
    url: "https://www.youtube.com/watch?v=dyApOJM6T1s",
    thumbnail: "https://img.youtube.com/vi/dyApOJM6T1s/hqdefault.jpg",
  },
  {
    title:
      "क्या है Defamation? जानिए इसके नियम - Yatish Goel की कानून की पाठशाला",
    description:
      "Advocate Yatish Kumar Goel explains the concept of defamation, its types, and the legal remedies available under Indian law in this insightful session.",
    url: "https://www.youtube.com/watch?v=AMltYA8AiQc",
    thumbnail: "https://img.youtube.com/vi/AMltYA8AiQc/hqdefault.jpg",
  },
];

const tvFeatures = [
  {
    title: "Legal Awareness Session by Mr Yatish Kumar Goel",
    description:
      "Legal awareness session on property related matters by Mr Yatish Kumar Goel, Advocate, GCS in the programme ‘Legal Point’ on Haryana News tv channel.",
    url: "https://www.youtube.com/watch?v=LM116Oujf6o&pp=0gcJCbAJAYcqIYzv",
    thumbnail: "https://img.youtube.com/vi/LM116Oujf6o/hqdefault.jpg",
  },
  {
    title: "Scam - JMD Builder - Yatish Kumar Goel, Advocate",
    description:
      "Exposing a real estate scam involving JMD Builder. Advocate Yatish Kumar Goel outlines the legal action taken by affected buyers.",
    url: "https://www.youtube.com/watch?v=DyDVB2bxyQM",
    thumbnail: "https://img.youtube.com/vi/DyDVB2bxyQM/hqdefault.jpg",
  },
  {
    title:
      "Ansal Buildwell - Sale of Public Parks - Yatish Kumar Goel, Advocate",
    description:
      "Advocate Yatish Kumar Goel exposes the illegal sale of public parks by Ansal Buildwell and its legal implications.",
    url: "https://www.youtube.com/watch?v=U8v0__RuhMg",
    thumbnail: "https://img.youtube.com/vi/U8v0__RuhMg/hqdefault.jpg",
  },
  {
    title: "CRL CASE AGAINST RAHEJA BUILDERS - Yatish Kumar Goel, Advocate",
    description:
      "Criminal case filed by the Allottees of Vedaanta Project against Raheja Developers Ltd  - Yatish Kumar Goel, Advocate",
    url: "https://www.youtube.com/watch?v=pN8SXHN9F3o",
    thumbnail: "https://img.youtube.com/vi/pN8SXHN9F3o/hqdefault.jpg",
  },
  {
    title: "TERI land scam unearthed by Yatish Goel Advocate",
    description:
      "Yatish Kumar Goel discusses alleged irregularities in TERI land dealings and related legal concerns.",
    url: "https://www.youtube.com/watch?v=JW97t6LHyh4",
    thumbnail: "https://img.youtube.com/vi/JW97t6LHyh4/hqdefault.jpg",
  },
  {
    title: "DTCP T L Satyaprakash - Court Orders Investigation",
    description:
      "The court has ordered an investigation against DTCP officer T L Satyaprakash. Legal insights by Advocate Yatish Kumar Goel.",
    url: "https://www.youtube.com/watch?v=MxWLVN8g2VM",
    thumbnail: "https://img.youtube.com/vi/MxWLVN8g2VM/hqdefault.jpg",
  },
];

export default function TVChannelsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
        </div>

        {/* Content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center ">
          <div
            className={`space-y-8 transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-full text-sm font-semibold shadow-xl mb-6 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50 hover:brightness-110 cursor-pointer group">
              <PlayCircle className="w-5 h-5 animate-pulse group-hover:animate-spin" />
              <span>TV Appearances</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white">
              GCS Law Firm on{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Television
              </span>
            </h2>
            <p className="mt-4 text-lg text-blue-200 max-w-3xl mx-auto">
              Explore our insightful televised appearances and expert analyses
              showcased on leading news channels, highlighting our commitment to
              delivering exceptional legal perspectives and trusted advice to a
              wide audience.
            </p>
          </div>
        </div>
      </section>

      {/* Youtube Video Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-blue-50">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 transform transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-4">
            <Trophy className="w-4 h-4" />
            <span>Legal Spotlight</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Spotlight on Legal{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Discover our impactful TV features where legal expertise meets
            public awareness—highlighting our mission to inform, advocate, and
            lead.
          </p>
        </div>

        <div className="grid gap-10 px-4 sm:px-6 lg:px-20 md:grid-cols-2 lg:grid-cols-3">
          {tvFeatures.map((video, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
              onClick={() => window.open(video.url, "_blank")}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-slate-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Youtube Learning Section */}
      <section className="py-20 bg-gradient-to-br from-pink-100 via-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Know the Law:{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Video Series
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Watch our curated video series designed to educate, empower, and
            inspire through real-world legal insights and public discourse.
          </p>
        </div>
        <div className="grid gap-10 px-4 sm:px-6 lg:px-20 md:grid-cols-2 lg:grid-cols-3">
          {tvLearningFeatures.map((video, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
              onClick={() => window.open(video.url, "_blank")}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-slate-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition Impact Section - YouTube Media Focus */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
                  <PlayCircle className="w-4 h-4" />
                  <span>YouTube Presence</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Why Media{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    Chooses Us
                  </span>
                </h2>

                <div className="space-y-4 text-red-200 leading-relaxed">
                  <p className="text-lg">
                    Our televised appearances on YouTube reach thousands of
                    viewers, creating awareness and educating the public on
                    crucial legal matters.
                  </p>
                  <p>
                    The high engagement and positive feedback highlight the
                    trust and credibility we've built through these channels.
                  </p>
                </div>
              </div>

              {/* Key YouTube Impact Points */}
              <div className="space-y-4">
                {[
                  "Highlighted for innovative legal solutions",
                  "Acknowledged for exceptional client service",
                  "Thousands of subscribers and growing community",
                  "High viewer engagement and positive feedback",
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium group-hover:text-red-400 transition-colors duration-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - YouTube Style Visuals */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white">
                      <PlayCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">Top Video</h3>
                      <p className="text-white/80 text-sm">50k+ Views</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white">
                      <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">Subscribers</h3>
                      <p className="text-white/80 text-sm">
                        Growing loyal community
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 p-6 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white">
                      <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">Engagement</h3>
                      <p className="text-white/80 text-sm">
                        High viewer interaction
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white">
                      <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold mb-2">Media Reach</h3>
                      <p className="text-white/80 text-sm">
                        Featured on major news channels
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center floating element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white p-4 rounded-full shadow-2xl border-4 border-red-500 animate-pulse">
                  <PlayCircle className="w-8 h-8 text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Experience Our{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Award-Winning Service
              </span>
            </h2>

            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join the clients who have experienced the excellence that earned
              us recognition from India's leading business publications
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
              >
                <span>Get Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/about/who-we-are"
                className="group inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <span>Learn More</span>
                <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
