"use client";
import Link from "next/link";
// components/ContentSection.tsx
import React from "react";

interface ContentSectionProps {
  title: string;
  content: string;
  listItems?: string[];
  additionalContent?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  content,
  listItems = [],
  additionalContent
}) => {
  return (
    <section className="py-16 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-1 h-12 bg-gradient-to-b from-amber-400 to-amber-600"></div>
                <h1 className="text-4xl font-bold text-slate-800">{title}</h1>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed text-lg">
                  {content}
                </p>
              </div>
            </div>

            {/* List Items */}
            {listItems.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-800 border-b-2 border-amber-400 pb-2 inline-block">
                  Our Services Include:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {listItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-amber-400 rounded-full mt-3"></div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Content */}
            {additionalContent && (
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg border-l-4 border-amber-400">
                <p className="text-slate-700 leading-relaxed">
                  {additionalContent}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-amber-400">
                  Need Legal Help?
                </h3>
                <p className="text-cream-100 mb-4 text-sm">
                  Get expert legal consultation for your case. Our experienced
                  team is here to help.
                </p>
                <Link href="/contact">
                  <button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                    Get Consultation
                  </button>
                </Link>
              </div>

              {/* Features */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-cream-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  {[
                    "Pan India Representation",
                    "Supreme Court Practice",
                    "Experienced Legal Team",
                    "Proven Track Record",
                    "Client-Focused Approach",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
