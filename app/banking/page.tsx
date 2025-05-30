"use client"
// pages/banking.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const BankingPage: React.FC = () => {
  const bankingServices = [
    'DRT (Debt Recovery Tribunal) proceedings and representation',
    'ADRT (Appellate Debt Recovery Tribunal) matters and appeals',
    'Securitization Act (SARFAESI) proceedings and compliance',
    'Drafting of DRT replies, counter-claims, and counter-suits',
    'Writ petitions and constitutional challenges in banking matters',
    'Recovery Certificate proceedings and execution matters',
    'Asset reconstruction and management advisory',
    'One Time Settlement (OTS) negotiations with banks',
    'Loan restructuring and rehabilitation schemes',
    'Banking license applications and regulatory compliance',
    'RBI guidelines implementation and advisory',
    'Corporate Debt Restructuring (CDR) mechanisms',
    'Recovery of Non-Performing Assets (NPAs)',
    'Enforcement of security interests under SARFAESI Act',
    'Banking fraud investigations and criminal proceedings',
    'Lok Adalat settlements for banking disputes',
    'Guarantee invocation and liability matters',
    'Banking ombudsman complaints and resolutions',
    'Mortgage enforcement and property attachment proceedings',
    'Wilful defaulter classification challenges',
    'CIBIL and credit bureau dispute resolution',
    'Banking contract drafting and negotiation',
    'Prudential norms compliance for financial institutions',
    'Recovery suits in civil courts and consumer forums'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Banking Laws & DRT Matters"
        subtitle="Debt Recovery & Financial Litigation"
        imageName="banking"
        description="Expert representation in Debt Recovery Tribunals, SARFAESI proceedings, and comprehensive banking law matters with deep understanding of Indian financial regulations."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Banking Laws & Debt Recovery Expertise"
              content="We deal in all matters connected with DRT, ADRT and Securitization Act including drafting of DRT replies, counter-claims, counter-suits, suits, writ petitions, etc. Our expertise encompasses the entire spectrum of banking and financial laws in India, with specialized focus on debt recovery mechanisms and regulatory compliance."
              listItems={bankingServices}
              additionalContent="Our team has extensive experience in handling complex banking disputes, asset reconstruction matters, and regulatory proceedings before various forums including DRTs, ADRTs, High Courts, and the Supreme Court. We assist banks, financial institutions, borrowers, and guarantors in navigating the intricate framework of Indian banking laws, including the Recovery of Debts Due to Banks and Financial Institutions Act, 1993, SARFAESI Act, 2002, and RBI regulations. Our practical approach ensures effective debt recovery while protecting our clients' interests in compliance with evolving banking regulations."
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

export default BankingPage;