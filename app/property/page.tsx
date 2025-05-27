"use client"
// pages/property.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';

const PropertyDisputesPage: React.FC = () => {
  const propertyServices = [
    'Illegal Possession of Property',
    'Title Disputes',
    'Rental Disputes - Landlord and Tenant Issues',
    'Contractual Disputes',
    'Disputes with RWA (Resident Welfare Association)',
    'Disputes between Buyers and Developers',
    'Disputes between Borrowers and Banks',
    'Disputes with Local Civic Authorities',
    'Land Use Disputes',
    'Suit for Specific Performance',
    'Declaratory Suits',
    'Injunction Suits',
    'Partition Suits',
    'Money Suits and Mortgage Recovery',
    'Disputes with Quasi Judicial Authorities',
    'Writ Jurisdiction Matters'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Property Disputes"
        subtitle="Real Estate Law"
        imageName="property"
        description="Comprehensive legal solutions for all types of property disputes, from residential to commercial real estate matters, with expertise in title verification and dispute resolution."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Comprehensive Property Law Services"
              content="Property disputes can arise from various circumstances involving residential, commercial, or industrial real estate. Our experienced team handles all aspects of property law, from title disputes to complex real estate transactions, ensuring your property rights are protected and enforced."
              listItems={propertyServices}
              additionalContent="Whether you're dealing with illegal possession, title disputes, landlord-tenant issues, or complex real estate transactions, our property law experts provide strategic legal solutions tailored to your specific situation. We represent clients before all courts and tribunals, including specialized property courts and revenue authorities."
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

export default PropertyDisputesPage;
