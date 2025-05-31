"use client"
// pages/recovery.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const RecoveryPage: React.FC = () => {
  const recoveryServices = [
    'Debt recovery proceedings under Code of Civil Procedure',
    'Recovery through Lok Adalats and mediation',
    'Enforcement of security interests under SARFAESI Act, 2002',
    'Recovery proceedings before Debt Recovery Tribunals (DRT)',
    'Appeals before Debt Recovery Appellate Tribunals (DRAT)',
    'Insolvency proceedings under Insolvency and Bankruptcy Code, 2016',
    'Recovery of Non-Performing Assets (NPAs)',
    'Enforcement of bank guarantees and letters of credit',
    'Recovery through attachment and sale of properties',
    'Cheque bounce cases under Negotiable Instruments Act',
    'Recovery of dues from corporate debtors',
    'Asset reconstruction and securitization matters',
    'Mortgage enforcement and foreclosure proceedings',
    'Recovery from guarantors and co-borrowers',
    'Execution of decrees and court orders',
    'Recovery through civil suits and summary procedures',
    'Banking and financial disputes resolution',
    'Recovery of trade debts and commercial dues',
    'Enforcement of arbitral awards for monetary claims',
    'Recovery proceedings against willful defaulters',
    'One Time Settlement (OTS) negotiations',
    'Compromise and settlement agreements',
    'Recovery of insurance claims and compensation',
    'Foreign exchange law compliance and recovery',
    'Recovery through winding up proceedings'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Recovery & Financial Matters"
        subtitle="Debt Recovery & Financial Litigation"
        imageName="recovery"
        description="Comprehensive debt recovery services and financial litigation expertise, utilizing various legal mechanisms under Indian law for effective recovery of dues and financial claims."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Recovery & Financial Law Expertise"
              content="We deal in various types of Financial matters and advise our clients on various legal recourse available to them for recovery of their money. Our expertise covers the entire spectrum of debt recovery mechanisms available under Indian law, from traditional civil remedies to specialized forums and modern insolvency procedures."
              listItems={recoveryServices}
              additionalContent="We represent banks, financial institutions, NBFCs, corporate entities, and individual creditors in recovery proceedings across various forums including Civil Courts, Debt Recovery Tribunals, NCLT, and High Courts. Our team has extensive experience in handling complex recovery matters involving secured and unsecured debts, utilizing mechanisms such as SARFAESI Act, Insolvency and Bankruptcy Code, and traditional civil remedies. We also assist in structuring security documents, conducting due diligence for recoveries, and negotiating one-time settlements to achieve optimal outcomes for our clients."
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

export default RecoveryPage;