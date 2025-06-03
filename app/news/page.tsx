"use client";

import React, { useEffect, useState } from "react";
import { NewspaperIcon } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const newsItems = [
  {
    title: "Delhi High Court puts out guidelines on proclaiming an offender",
    summary:
      "The Delhi Court has issued guidelines on declaring an absconding accused as a proclaimed offender. It observed that declaring a person as a proclaimed offender affects his life and liberty under Article 21 of the Constitution and a due process of law must be followed in this regard. The Delhi High Court recently laid down …",
    link: "https://www.gcsl.in/news/delhi-high-court-puts-out-guidelines-on-proclaiming-an-offender/",
    image: "https://www.gcsl.in/wp-content/uploads/2021/07/guidlines.jpg",
  },
  {
    title:
      "Supreme Court upholds Delhi Assembly Committee’s summon to Facebook India head Ajit Mohan",
    summary:
      "A Special Bench of Justice Sanjay Kishan Kaul, Justice Dinesh Maheshwari and Justice Hrishikesh Roy noted, “The Assembly admittedly does not have the power to legislate under the issues which fall under the domain of the Union government. However, the objective of peace and harmony goes beyond law and order and police.” Mr Mohan had …",
    link: "https://www.gcsl.in/news/supreme-court-upholds-delhi-assembly-committees-summon-to-facebook-india-head-ajit-mohan/",
    image: "https://www.gcsl.in/wp-content/uploads/2021/07/fff.jpg",
  },
  {
    title:
      "Vinod Dua gets relief as Supreme Court quashes sedition case, says every journalist entitled to protection.",
    summary:
      "The Supreme Court on Thursday quashed an FIR against journalist Vinod Dua who was booked for sedition over his YouTube show and granted him relief. The Supreme Court said that every journalist is entitled to protection, any detention or FIR is subject to the law laid down earlier. However, the court declined to order the …",
    link: "https://www.gcsl.in/news/vinod-dua-gets-relief-as-supreme-court-quashes-sedition-case-says-every-journalist-entitled-to-protection/",
    image: "https://www.gcsl.in/wp-content/uploads/2021/06/supper.jpg",
  },
  {
    title:
      "CBSE Students Can Seek Change Of Name In School Certificate: Supreme Court",
    summary:
      "Stating that right to identity is a part of freedom of expression, the Supreme Court of India today said Central Board of Secondary Education (CBSE) students can seek change of names in their school certificates. A three-judge bench of Justices AM Khanwilkar, BR Gavai, and Krishna Murari delivered the verdict on petitions challenging the CBSE …",
    link: "https://www.gcsl.in/news/cbse-students-can-seek-change-of-name-in-school-certificate-supreme-court/",
    image: "https://www.gcsl.in/wp-content/uploads/2021/06/cbseee.jpg",
  },
  {
    title:
      "On vaccinating rural India, Supreme Court warns of digital divide, asks why Centre hasn’t acted on April 30",
    summary:
      "The Supreme Court on Monday directed the Central government to make a flexible policy for inoculating the country’s rural population against Covid-19 and its variants. He also added that this is for the larger welfare and it is a non-arbitrary policy. We have made some relaxations keeping the ground realities in mind and according to …",
    link: "https://www.gcsl.in/news/on-vaccinating-rural-india-supreme-court-warns-of-digital-divide-asks-why-centre-hasnt-acted-on-april-30/",
    image: "https://www.gcsl.in/wp-content/uploads/2021/06/vaciiie.jpg",
  },
];

export default function NewsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-amber-100 flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
        <Navbar />
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />

            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
            <div
              className={`inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-2xl border border-amber-300/30 backdrop-blur-sm transform transition-all duration-1000${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <NewspaperIcon className="w-6 h-6 animate-pulse" />
              <span className="tracking-wide ">News Gallery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Latest News &{" "}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-pulse">
                Insights
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Stay informed with our most recent legal updates, high-profile cases,
              and firm milestones curated just for you.
            </p>
          </div>
        </section>

        {/* News Cards */}
        <section className="bg-gradient-to-br from-pink-100 via-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 py-12">
          {newsItems.map((news, index) => (
            <motion.a
              key={index}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:rotate-[0.3deg] hover:shadow-yellow-400/40 hover:ring-2 hover:ring-yellow-300 hover:ring-offset-2 hover:ring-offset-white"
            >
              <div className="sm:w-1/3 h-56 sm:h-auto relative overflow-hidden rounded-l-3xl">
                <img
                  src={news.image}
                  alt={news.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="sm:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300 leading-tight">
                    {news.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1 italic">
                    News / By Yatish Kumar Goel, Advocate
                  </p>
                  <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed">
                    {news.summary}
                  </p>
                </div>
                <p className="text-yellow-600 mt-6 text-sm font-semibold italic group-hover:underline cursor-pointer">
                  Read more →
                </p>
              </div>
            </motion.a>
          ))}
        </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
