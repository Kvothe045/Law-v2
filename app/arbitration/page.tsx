"use client"
// pages/arbitration.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const ArbitrationPage: React.FC = () => {
  const arbitrationServices = [
    'Conducting domestic arbitration under the Arbitration and Conciliation Act. 1996 and ICA rules',
    'Conducting international arbitration under UNCITRAL and ICC Rules',
    'Rendering mediation services to clients',
    'Enforcing and challenging enforcement of Arbitral Awards',
    'Representing clients before High Courts and Supreme Court in arbitration petitions',
    'Advising clients on the appropriate venue of arbitration and choice of procedural and substantive law',
    'Appointment of arbitrator through High Court of Delhi and Supreme Court of India',
    'Representing clients before arbitral tribunals with regard to disputes arising out of agreements containing arbitration clause',
    'Applying to stay proceedings brought in breach of arbitration clauses',
    'Draft arbitration agreements and clauses',
    'Advising clients and handling arbitration cases related to Commercial Contracts, Collaboration Disputes, Contractual Disputes, Construction Agreements, Service Agreements, Joint Venture Agreements, Supply Contracts, Marketing Agreements, Sale Agreements, etc.',
    'Advising clients on conciliation and mediation matters',
    'Advising clients on alternative dispute resolution laws and procedures',
    'Conducting Lok Adalats with the concerned legal services authorities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Arbitration / Alternative Dispute Resolution (ADR)"
        subtitle="Expert Dispute Resolution"
        imageName="arbitration"
        description="Comprehensive alternative dispute resolution services with expertise in domestic and international arbitration, mediation, and conciliation proceedings."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Alternative Dispute Resolution Expertise"
              content="Alternative dispute resolution has expanded over the last several years and has become an important step in the dispute resolution process. We are a well known law firm in India providing alternative dispute resolution services. Our Firm assists clients with resolution of disputes in all areas of general and special practices in a broad range of industrial sectors."
              listItems={arbitrationServices}
              additionalContent="Our Firm has a significant experience in both international and domestic arbitration and other forms of Alternative Dispute Resolution (ADR) such as conciliation and mediation. We provide strategic guidance and representation across various dispute resolution mechanisms, ensuring efficient and cost-effective resolution of complex commercial disputes."
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

export default ArbitrationPage;