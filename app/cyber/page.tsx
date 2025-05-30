"use client"
// pages/cyber.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const CyberPage: React.FC = () => {
  const cyberServices = [
    'Software protection and licensing agreements',
    'Data protection and privacy compliance under DPDP Act 2023',
    'Domain names dispute resolution and cybersquatting matters',
    'Technology transfer and technical assistance agreements',
    'Credit card frauds and financial cyber crimes investigation',
    'Cyber law advisory and compliance under IT Act 2000',
    'Digital Personal Data Protection Act 2023 implementation',
    'E-commerce legal compliance and marketplace regulations',
    'Social media law and content moderation policies',
    'Cryptocurrency and blockchain legal advisory',
    'Digital signature and electronic records authentication',
    'Cyber security incident response and breach notification',
    'Online defamation and cyber harassment cases',
    'Digital evidence collection and forensic support',
    'CERT-In compliance and cyber security framework',
    'Payment gateway and fintech regulatory compliance',
    'Cloud computing and SaaS legal agreements',
    'Artificial Intelligence and machine learning legal framework',
    'Digital marketing and advertising law compliance',
    'Intermediary liability and safe harbor provisions',
    'Cross-border data transfer and adequacy decisions',
    'Cyber insurance and risk management advisory',
    'Digital identity and KYC compliance',
    'Internet of Things (IoT) and connected devices regulation',
    'Telecom and digital communication laws'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Information Technology & Cyber Law"
        subtitle="Digital Age Legal Solutions"
        imageName="cyber"
        description="Comprehensive legal expertise in cyber law, data protection, IT compliance, and digital technology matters under Indian regulatory framework including IT Act 2000 and DPDP Act 2023."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Information Technology & Cyber Law Expertise"
              content="We have expertise in complete range of matters related to Information Technology sector, including technology and strategic consulting services. We deal in software protection & licencing, data protection, domain names dispute resolution, technology transfer and technical assistance agreements, credit card frauds etc. We advise our clients on cyber laws, Indian Information Technology laws, data protection, IP protection, e-commerce, etc."
              listItems={cyberServices}
              additionalContent="Our practice encompasses the evolving digital landscape under Indian regulatory framework including the Information Technology Act 2000, Digital Personal Data Protection Act 2023, and emerging regulations on artificial intelligence, cryptocurrency, and fintech. We assist clients in navigating complex compliance requirements under CERT-In guidelines, RBI digital payment regulations, and SEBI fintech frameworks. Our team provides strategic counsel on data localization requirements, cross-border data transfers, and compliance with global privacy standards while ensuring adherence to Indian cyber security policies and digital governance frameworks."
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

export default CyberPage;