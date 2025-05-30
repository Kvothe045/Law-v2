"use client"
// pages/mergers.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const MergersPage: React.FC = () => {
  const mergersServices = [
    'Due diligence and transaction structuring under Companies Act, 2013',
    'Competition Commission of India (CCI) filings and approvals',
    'SEBI compliance for listed company transactions',
    'Foreign Exchange Management Act (FEMA) clearances',
    'Reserve Bank of India (RBI) approvals for banking and NBFC transactions',
    'National Company Law Tribunal (NCLT) scheme approvals',
    'Cross-border M&A structuring and regulatory compliance',
    'Private equity and venture capital transaction advisory',
    'Share purchase agreements and asset purchase agreements',
    'Merger and demerger scheme drafting and implementation',
    'Joint venture structuring and documentation',
    'Management buyouts and leveraged buyouts',
    'Valuation disputes and fairness opinion coordination',
    'Employee stock option plan (ESOP) restructuring',
    'Intellectual property transfer and licensing agreements',
    'Tax optimization and stamp duty advisory',
    'Corporate restructuring under Insolvency and Bankruptcy Code',
    'Shareholder agreement negotiations and exits',
    'Regulatory approvals from sector-specific authorities (TRAI, SEBI, etc.)',
    'Post-merger integration and compliance advisory',
    'Acquisition financing and security documentation',
    'Representation and warranty insurance structuring',
    'Anti-trust and competition law compliance',
    'Environmental and social due diligence coordination'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Mergers & Acquisitions"
        subtitle="Strategic Transaction Advisory"
        imageName="mergers"
        description="Expert guidance through complex M&A transactions with comprehensive regulatory compliance, due diligence, and strategic structuring under Indian corporate laws."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Mergers & Acquisitions Expertise"
              content="Mergers and acquisitions involving privately held companies entail a number of key legal, business, human resources, intellectual property, and financial issues. We guide and advise our clients on all these issues. Our comprehensive M&A practice encompasses the full spectrum of transaction advisory services under Indian corporate laws, including compliance with the Companies Act 2013, SEBI regulations, Competition Act 2002, and FEMA provisions."
              listItems={mergersServices}
              additionalContent="We have extensive experience in navigating the complex regulatory landscape of Indian M&A transactions, including obtaining necessary approvals from Competition Commission of India (CCI), Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), and National Company Law Tribunal (NCLT). Our team provides strategic counsel on transaction structuring, tax optimization, and regulatory compliance while ensuring seamless execution of merger schemes, demergers, and acquisition transactions across various industry sectors."
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

export default MergersPage;