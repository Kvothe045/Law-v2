"use client"
// pages/insolvency.tsx
import React from 'react';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';

const InsolvencyPage: React.FC = () => {
  const insolvencyServices = [
    'Insolvency Petition u/s 7 on behalf of Financial Creditor',
    'Insolvency Petition u/s 9 on behalf of Operational Creditor',
    'Insolvency Petition on behalf of Home Buyer',
    'Corporate Restructuring',
    'Formulating Resolution Plan',
    'Representation before Committee of Creditors (CoC)',
    'Recovery of Dues',
    'Liquidation Proceedings',
    'Fund Syndication',
    'Investment Banking',
    'Operations and Management',
    'Representation before NCLT / NCLAT / Supreme Court of India',
    'Due Diligence for Distressed Assets',
    'Creditor Rights Protection',
    'Insolvency Professional Services'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <PageBanner
        title="Insolvency & Bankruptcy"
        subtitle="Corporate Restructuring"
        imageName="insolvency"
        description="Expert guidance through the Insolvency and Bankruptcy Code with comprehensive solutions for financial distress, corporate restructuring, and recovery proceedings."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Insolvency & Bankruptcy Expertise"
              content="The new insolvency and bankruptcy law in India – the Insolvency and Bankruptcy Code, 2016 (the 'Code') – became effective from 1 December 2016. With this, India has adopted a unified framework consolidating the bankruptcy legislations applicable to companies, limited liability partnerships, partnership firms and made substantial changes in the insolvency laws applicable to companies."
              listItems={insolvencyServices}
              additionalContent="We assist corporate entities, entrepreneurs, banks, financial institutions, bondholders, other lenders and stakeholders to control the financial viability of companies that are facing financial distress and are on the brink of bankruptcy. The experts from our team analyze the commercial realities and formulate relevant strategies to transform the business environment to restructure, revive and turnaround such entities."
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
    </div>
  );
};

export default InsolvencyPage;
