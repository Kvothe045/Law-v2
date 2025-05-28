"use client"
// pages/criminal.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';


const CriminalLitigationPage: React.FC = () => {
  const criminalServices = [
    'Murder Trials / Bail',
    'Fraud and Cheating Cases',
    'Corporate Frauds, Insider Trading and Market Manipulation',
    'White Collar Crimes / Economic Offences',
    'Department of Company Affairs – Serious Frauds Investigation office',
    'Bank / Financial Institutions Frauds',
    'Misappropriation and Siphoning of Funds',
    'Dishonor of Cheques',
    'Quashing of FIRs/ Bails/ Trial',
    'Criminal Complaints',
    'Criminal Writs / Revisions / Appeals',
    'Defamation Cases',
    'Prevention of Money Laundering Act',
    'Prevention of Corruption Act',
    'Violation of Intellectual Property Rights / Cyber Laws',
    'FEMA / COFEPOSA/ SAFEMA',
    'Narcotics and Drugs Violation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Criminal Litigation"
        subtitle="Legal Defense"
        imageName="criminal"
        description="Expert criminal defense representation across all courts in India, from District Courts to the Supreme Court, with a proven track record in high-profile cases."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Criminal Litigation Excellence"
              content="The firm has extensive experience in representing clients' criminal matters at pan India level across different courts, including Supreme Court of India, High Courts and District Courts. The firm has handled various leading cases, which has hit the news headlines in National Dailies and also in Electronic Media."
              listItems={criminalServices}
              additionalContent="Our criminal litigation practice is built on years of experience handling complex criminal matters. We provide strategic defense planning, meticulous case preparation, and aggressive courtroom representation to protect our clients' rights and interests."
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <PracticeAreas />
      <Footer />
    </div>
  );
};

export default CriminalLitigationPage;
