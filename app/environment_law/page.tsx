"use client"
// pages/environment.tsx
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContentSection from '@/components/ContentSection';
import PracticeAreas from '@/components/PracticeAreas';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const EnvironmentPage: React.FC = () => {
  const environmentServices = [
    'Environmental Clearance (EC) applications and approvals under EIA Notification 2006',
    'Consent to Establish (CTE) and Consent to Operate (CTO) under Water and Air Acts',
    'Forest Clearance under Forest Conservation Act, 1980',
    'Coastal Regulation Zone (CRZ) clearances and compliance',
    'Environmental Impact Assessment (EIA) preparation and submission',
    'Representation before National Green Tribunal (NGT)',
    'Appeals and applications before NGT Principal and Circuit Benches',
    'Compliance audits under Environmental Protection Act, 1986',
    'Pollution Control Board liaison and approvals',
    'Hazardous Waste Management authorization and compliance',
    'E-waste Management rules compliance and registration',
    'Plastic Waste Management rules advisory',
    'Construction and Demolition Waste Management compliance',
    'Noise Pollution clearances and mitigation strategies',
    'Wildlife Protection Act clearances and NOCs',
    'Environmental compensation and restoration matters',
    'Green belt development and afforestation compliance',
    'Carbon credit and emission trading advisory',
    'Environmental due diligence for M&A transactions',
    'Environmental liability assessment and management',
    'Renewable energy project clearances and compliance',
    'Industrial pollution prevention and control strategies',
    'Environmental monitoring and reporting compliance',
    'Violation notices defense and penalty mitigation',
    'Environmental management system implementation',
    'Sustainable development and CSR environmental initiatives'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-amber-300">
      <Header />
      <Navbar />
      
      <PageBanner
        title="Environmental Law & NGT Matters"
        subtitle="Sustainable Legal Solutions"
        imageName="environment"
        description="Expert guidance on environmental compliance, clearances, and representation before the National Green Tribunal with comprehensive solutions for environmental protection and conservation matters."
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentSection
              title="Environmental Law & NGT Expertise"
              content="The NGT is a specialized forum for effective and speedy disposal of cases pertaining to environment protection and conservation of forests. Environmental Law is a very wide area covering various statutes including the Environment Protection Act, 1986, Water (Prevention and Control of Pollution) Act, 1974, Air (Prevention and Control of Pollution) Act, 1981, and Forest Conservation Act, 1980. Industry and Builders are required to obtain prior Environmental Clearance in respect of their project under the Environmental Impact Assessment Notification, 2006."
              listItems={environmentServices}
              additionalContent="Non compliance of the environmental laws is a serious offence carrying heavy penalties, imprisonment, and project closure orders. We guide and advise our clients on compliance of Environmental Laws, helping them navigate the complex regulatory framework involving multiple authorities including Ministry of Environment, Forest and Climate Change (MoEFCC), State Pollution Control Boards, Forest Departments, and Coastal Zone Management Authorities. There are various leading cases in NGT to our credit, demonstrating our expertise in environmental litigation, policy advocacy, and regulatory compliance across diverse industrial sectors."
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

export default EnvironmentPage;