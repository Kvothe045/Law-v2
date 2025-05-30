"use client"
// pages/corporate.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const CorporatePage: React.FC = () => {
  const corporateServices = [
    'Entity incorporation and business setup guidance',
    'Corporate governance and compliance advisory',
    'Board resolutions and corporate secretarial services',
    'Mergers and acquisitions structuring',
    'Joint ventures and strategic partnerships',
    'Private equity and venture capital transactions',
    'Due diligence and transaction support',
    'Corporate restructuring and reorganization',
    'Share purchase and transfer agreements',
    'Shareholders agreements and investment documentation',
    'Commercial contract drafting and negotiation',
    'Regulatory compliance across various sectors',
    'Competition law advisory and filings',
    'Tax structuring and optimization strategies',
    'Cross-border transaction advisory',
    'Corporate litigation and dispute resolution',
    'Employment and labor law compliance',
    'Intellectual property protection and licensing',
    'Real estate and property transactions',
    'Banking and finance documentation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Corporate & Commercial Matters"
        subtitle="Complete Business Legal Solutions"
        imageName="corporate"
        description="Comprehensive legal services throughout your business lifecycle, from entity formation to complex transactions, with expertise in corporate laws, regulatory compliance, and commercial matters."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Corporate & Commercial Law Expertise"
              content="We offer legal services at all stages of a business cycle, right from the inception of an entity to general corporate matters, guiding companies routinely on their business and legal issues to assisting and advising them in relation to complex transactions."
              listItems={corporateServices}
              additionalContent="Our well-developed expertise in corporate laws, tax laws, competition laws, regulatory structuring, and commercial understanding of various sectors enables us to handle the complexities involved in transactions in the most practical manner. We provide strategic counsel that balances legal requirements with business objectives, ensuring our clients can navigate the evolving regulatory landscape while achieving their commercial goals."
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

export default CorporatePage;