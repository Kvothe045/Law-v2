"use client"
// pages/matrimonial.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';

const MatrimonialDisputesPage: React.FC = () => {
  const matrimonialServices = [
    'Annulment Of Marriage',
    'Divorce Proceedings',
    'Foreign Divorce – Matrimonial Disputes – NRIs And Foreigners',
    '498A IPC and other allied Criminal Proceedings',
    'Domestic Violence Cases',
    'Maintenance and Alimony',
    'Transfer Petition In Supreme Court',
    'Child Custody and Visitation Rights',
    'Restitution Of Conjugal Rights',
    'Judicial Separation',
    'Mediation And Counselling',
    'Pre-nuptial and Post-nuptial Agreements',
    'Property Settlement',
    'International Family Law'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Matrimonial Disputes"
        subtitle="Family Law"
        imageName="matrimonial"
        description="Sensitive and expert handling of matrimonial disputes with compassion and discretion, providing comprehensive legal solutions for all family law matters."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Compassionate Matrimonial Law Services"
              content="Matrimonial disputes involve emotions, feelings and ego. We deal with matrimonial disputes with sensitivity. We understand that family matters require a delicate balance of legal expertise and emotional intelligence. Our experienced team provides comprehensive guidance and representation in all aspects of matrimonial law."
              listItems={matrimonialServices}
              additionalContent="Our approach to matrimonial disputes emphasizes mediation and amicable resolution wherever possible, while being prepared to provide strong advocacy when court proceedings become necessary. We handle matters involving NRIs, foreign nationals, and cross-border family disputes with specialized expertise."
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

export default MatrimonialDisputesPage;
