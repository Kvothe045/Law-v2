'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Sparkles, Trophy, Globe } from 'lucide-react';

const Awards = () => {
  return (
    <section className="relative  overflow-hidden bg-gradient-to-br from-amber-300 via-blue-200 to-amber-200 py-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Gold Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-40"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-yellow-500 rotate-12 animate-bounce"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-300 rounded-full animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-amber-400 rotate-45 animate-pulse"></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-4 h-full flex flex-col justify-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-3"
          >
            <div className="relative">
              <Trophy className="w-12 h-12 text-yellow-600" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-amber-500" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-700 via-blue-600 to-yellow-600 bg-clip-text text-transparent mb-2"
          >
            Excellence Recognized
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Celebrating our commitment to delivering exceptional legal solutions and achieving international recognition
          </motion.p>
        </motion.div>

        {/* Main Award Display */}
        <div className="max-w-6xl mx-auto flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Award Card */}
            <div className="relative bg-gradient-to-br from-white/90 via-blue-50/90 to-slate-50/90 backdrop-blur-xl rounded-3xl border border-blue-200/60 shadow-2xl overflow-hidden">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 via-transparent to-blue-100/20 animate-pulse"></div>
              
              <div className="relative p-6 md:p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Award Image Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative"
                  >
                    <div className="relative group">
                      {/* Image Container with Enhanced Styling */}
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-100/40 to-amber-100/40 p-4 border border-yellow-300/60">
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          <img
                            src="/award.png"
                            alt="Century International Gold Quality Era Award"
                            className="w-full h-auto rounded-xl shadow-2xl"
                          />
                          
                          {/* Image Overlay Effects */}
                          <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/20 to-transparent rounded-xl"></div>
                        </motion.div>
                        
                        {/* Floating Icons Around Image */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute -top-3 -right-3"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                            <Star className="w-5 h-5 text-white" />
                          </div>
                        </motion.div>
                        
                        <motion.div
                          animate={{ y: [-10, 10, -10] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -bottom-3 -left-3"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                            <Globe className="w-4 h-4 text-white" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Award Content Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="space-y-4"
                  >
                    {/* Award Title */}
                    <div className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex items-center space-x-2"
                      >
                        <Award className="w-6 h-6 text-yellow-600" />
                        <span className="text-yellow-600 font-semibold text-sm tracking-wide">INTERNATIONAL RECOGNITION</span>
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent leading-tight"
                      >
                        Century International Gold Quality Era Award
                      </motion.h3>
                    </div>

                    {/* Award Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="space-y-3"
                    >
                      <p className="text-slate-700 text-sm leading-relaxed">
                        Over the years, owing to its commitment to provide the best legal remedies and solutions to its clients, 
                        <span className="text-yellow-700 font-semibold"> GCS</span> has gained International repute in the field of legal consultancy services.
                      </p>

                      <div className="bg-gradient-to-r from-blue-50/80 to-slate-50/80 rounded-xl p-4 border border-blue-200/60">
                        <p className="text-slate-700 text-sm leading-relaxed">
                          <span className="text-yellow-700 font-semibold">GSC</span> was awarded the{' '}
                          <span className="text-yellow-700 font-bold">Century International Gold Quality Era Award</span> and{' '}
                          <span className="text-blue-700 font-semibold">Mr Jose E. Prieto</span>, Executive President of BID, 
                          Business Initiative Directions, presented in{' '}
                          <span className="text-yellow-700 font-semibold">May 2003 in Geneva, Switzerland</span> in recognition of the 
                          outstanding commitment to quality and excellence.
                        </p>
                      </div>

                      <p className="text-slate-700 text-sm">
                        The award was received by{' '}
                        <span className="text-yellow-700 font-semibold">Mr Manish Goel</span> and{' '}
                        <span className="text-yellow-700 font-semibold">Mr Yatish Kumar Goel</span> on behalf of{' '}
                        <span className="text-yellow-700 font-bold">GCS Law Firm</span>.
                      </p>
                    </motion.div>

                    {/* Award Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="grid grid-cols-3 gap-4"
                    >
                      <div className="text-center">
                        <div className="text-xl font-bold text-yellow-600">2003</div>
                        <div className="text-slate-600 text-xs">Year Awarded</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-yellow-600">Geneva</div>
                        <div className="text-slate-600 text-xs">Switzerland</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-yellow-600">Gold</div>
                        <div className="text-slate-600 text-xs">Quality Era</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-6"
        >
          <div className="flex justify-center space-x-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                <Star className="w-5 h-5 text-yellow-600 opacity-70" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;