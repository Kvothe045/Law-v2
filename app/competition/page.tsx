"use client"
// pages/competition.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const CompetitionPage: React.FC = () => {
  const competitionServices = [
    'Merger control and combination filings with CCI',
    'Abuse of dominance analysis and compliance advisory',
    'Anti-competitive agreements assessment and structuring',
    'Competition compliance programs and training',
    'CCI investigation defense and representation',
    'Cartel investigation and leniency applications',
    'Market studies and economic analysis',
    'Competition impact assessment for business strategies',
    'Vertical and horizontal agreement compliance',
    'Price fixing and bid rigging defense',
    'Refusal to deal and exclusive dealing analysis',
    'Predatory pricing and margin squeeze cases',
    'Tie-in arrangements and bundling practices review',
    'Competition advocacy and policy submissions',
    'Appeals before Competition Appellate Tribunal (COMPAT)',
    'Supreme Court representation in competition matters',
    'Cross-border competition law coordination',
    'Competition compliance audits and risk assessment',
    'Dawn raid preparation and response protocols',
    'Settlement negotiations with Competition Commission',
    'Joint venture clearances and competition analysis',
    'Distribution agreement competition compliance',
    'Intellectual property and competition law intersection',
    'Sector-specific competition regulations advisory'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Competition Laws"
        subtitle="Antitrust & Market Regulation"
        imageName="competition"
        description="Expert guidance on Indian competition law compliance, CCI proceedings, merger control, and anti-competitive practices under the Competition Act, 2002."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Competition Law Expertise"
              content="The Competition Act, 2002 prohibits the abuse of a dominant position by companies but does not prohibit companies from holding a dominant position. We guide and advise our clients in dominance cases through extensive legal and economic analysis & research. Our expertise extends to all aspects of Indian competition law, including merger control regulations, anti-competitive agreements, and compliance with Competition Commission of India (CCI) requirements."
              listItems={competitionServices}
              additionalContent="We assist clients in navigating the complex regulatory framework established by the Competition Act, 2002, and its amendments. Our team provides strategic counsel on combination notifications, conducts comprehensive competition risk assessments, and represents clients before the Competition Commission of India (CCI) and Competition Appellate Tribunal. We also handle cross-border competition matters, ensuring compliance with both domestic and international competition regulations while facilitating business growth and market expansion strategies."
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

export default CompetitionPage;