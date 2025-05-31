"use client"
// pages/labour.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const LabourPage: React.FC = () => {
  const labourServices = [
    'Industrial Disputes Act, 1947 compliance and litigation',
    'Factories Act, 1948 licensing and regulatory compliance',
    'Employees Provident Fund and Miscellaneous Provisions Act, 1952',
    'Payment of Wages Act, 1936 and Minimum Wages Act, 1948 advisory',
    'Employees State Insurance Act, 1948 compliance',
    'Contract Labour (Regulation and Abolition) Act, 1970',
    'Payment of Gratuity Act, 1972 and calculation disputes',
    'Equal Remuneration Act, 1976 compliance',
    'Maternity Benefit Act, 1961 and amendments',
    'Workmen\'s Compensation Act, 1923 claims and settlements',
    'Trade Unions Act, 1926 registration and representation',
    'Sexual Harassment of Women at Workplace Act, 2013',
    'Labour Code on Wages, 2019 implementation',
    'Labour Code on Industrial Relations, 2020',
    'Labour Code on Social Security, 2020',
    'Labour Code on Occupational Safety, Health and Working Conditions, 2020',
    'Employment contract drafting and termination procedures',
    'Collective bargaining and trade union negotiations',
    'Labour Tribunal and Industrial Tribunal representations',
    'Provident Fund Appellate Tribunal matters',
    'ESI Court and Medical Board representations',
    'Labour Commissioner and Conciliation proceedings',
    'Retrenchment and lay-off procedures under Industrial Disputes Act',
    'Standing Orders certification and modifications',
    'Labour audit and compliance reviews',
    'Employment policy drafting and HR compliance',
    'Wage and hour law compliance',
    'Disciplinary proceedings and domestic enquiry',
    'Workers\' safety and occupational health compliance',
    'Migrant worker regulations and interstate labour compliance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Service, Labour & Industrial Laws Cases"
        subtitle="Employment Law Excellence"
        imageName="labour"
        description="Expert guidance on Indian labour and employment laws, industrial disputes, compliance, and representation before labour tribunals and regulatory authorities."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Labour & Employment Law Expertise"
              content="Our Firm offers comprehensive services on all aspects relating to labour and employment Laws in India, including advice on various formalities that have to be compiled with, litigation, negotiation, and collective bargaining. Our Firm has been conducting matters with various authorities viz. Labour Tribunals, P.F. Appellate Tribunal, etc. for various Public and Private Sector Undertakings."
              listItems={labourServices}
              additionalContent="With the introduction of the new Labour Codes by the Government of India, we provide specialized advisory on the four consolidated labour codes covering wages, industrial relations, social security, and occupational safety. Our expertise extends to traditional labour laws as well as emerging areas such as gig economy regulations, remote work policies, and digital labour compliance. We assist clients in navigating the complex regulatory framework while ensuring worker welfare and business continuity."
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

export default LabourPage;