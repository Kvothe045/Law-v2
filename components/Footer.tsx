'use client';
import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin,
  Download,
  ExternalLink,
  Scale,
  Building,
  Users,
  FileText,
  Briefcase,
  Shield,
  Navigation,
  Gavel
} from 'lucide-react';
import { div } from "framer-motion/client";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const specializedServices = [
    { name: "Criminal Litigation", icon: Gavel , href:'/criminal'},
    { name: "Property Disputes", icon: Building , href: '/property' },
    { name: "Matrimonial Disputes", icon: Users , href : '/matrimonial'},
    { name: "Insolvency & Bankruptcy", icon: FileText , href: '/insolvency'},
    { name: "Arbitration / ADR", icon: Scale ,href: '/arbitration'}
  ];

  const otherServices = [
  { name: "Corporate & Commercial Matters", href: "/corporate" },
  { name: "Banking Laws & DRT Matters", href: "/banking" },
  { name: "Recovery & Financial Matters", href: "/recovery" },
  { name: "Competition Laws", href: "/competition" },
  { name: "Information Technology Cyber Cases", href: "/cyber" },
  { name: "Insolvency & Bankruptcy Matters", href: "/insolvency" },
  { name: "Mergers & Acquisitions", href: "/mergers" },
  { name: "Environmental Law & NGT Matters", href: "/environment_law" },
  { name: "Service, Labour & Industrial Laws Cases", href: "/labour" }
];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/yatish.goel" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/yatishgoel" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/gcsl-firm" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-100 via-blue-100 to-amber-50 text-gray-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-amber-600 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-600 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-amber-600 rounded-full"></div>
        <Scale className="absolute top-20 right-1/4 w-20 h-20 text-amber-600 opacity-15" />
        <Briefcase className="absolute bottom-32 right-10 w-16 h-16 text-blue-600 opacity-15" />
      </div>

      <motion.div 
        className="container mx-auto px-6 py-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Corporate Office Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-amber-700 mb-6 flex items-center gap-2">
                <Building className="w-6 h-6" />
                Corporate Office
              </h3>
              <div className="space-y-4">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-amber-400 transition-all duration-300 shadow-md hover:shadow-lg">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">GCS Law Firm</h4>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      836-A, 8th Floor, Tower B-3,<br />
                      Spaze I-Tech Park, Sector 49,<br />
                      Sohna Road, Gurugram 122018<br />
                      Haryana, INDIA
                    </p>
                  </div>
                   <div className="mb-4  ml-6">
                    <a
                      href="https://maps.app.goo.gl/ZTTHiYsSTZeVFVgz6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                    >
                      <Navigation className="w-5 h-5" />
                      View on Map
                    </a>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-amber-600" />
                    <a href="tel:+919990733308" className="text-blue-700 hover:text-amber-600 transition-colors duration-300">
                      +91-99907 33308
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-600" />
                    <a href="mailto:info@gcsl.in" className="text-blue-700 hover:text-amber-600 transition-colors duration-300">
                      info@gcsl.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specialized Services Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-amber-700 mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Specialized Services
            </h3>
            <div className="space-y-3">
              {specializedServices.map((service, index) => (
                <motion.a
                  key={service.name}
                  href={service.href}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-amber-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <service.icon className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {service.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Other Services Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-amber-700 mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              Other Services
            </h3>
            <div className="space-y-2">
              {otherServices.map((service, index) => (
                <motion.a
                  key={service.name}
                  href={service.href}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/60 transition-all duration-300 group cursor-pointer"
                  whileHover={{ x: 3 }}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-2 h-2 bg-amber-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                    {service.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links & Brochure Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-amber-700 mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      target="_blank"
                      href={social.href}
                      className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all duration-300 group border border-gray-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Download Brochure */}
              <div>
                <motion.a
  href="/brochure.pdf"
  download
  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-amber-600/25"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Scale className="w-4 h-4 text-white" />
  <Download className="w-5 h-5 group-hover:animate-bounce" />
  Download Brochure
</motion.a>

              </div>

              {/* Contact CTA */}
<div className="bg-gradient-to-r from-blue-100 to-amber-100 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md">
  <h4 className="text-lg font-semibold text-blue-800 mb-2">Need Legal Assistance?</h4>
  <p className="text-gray-700 text-sm mb-4">
    Get expert legal consultation from our experienced team.
  </p>

  <Link href="/contact">
    <motion.button
      className="bg-white hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-lg text-sm border border-gray-300 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Contact Us Today
    </motion.button>
  </Link>
</div>

            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 pt-4 border-t border-gray-300"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-amber-600" />
              <span className="text-xl font-bold text-gray-800">GCS Law Firm</span>
            </div>
            <div className="text-gray-600 text-sm text-center md:text-right">
              <p>&copy; 2024 GCS Law Firm. All rights reserved.</p>
              <p className="mt-1">Excellence in Legal Services Since Inception</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
    </footer>
  );
};

export default Footer;