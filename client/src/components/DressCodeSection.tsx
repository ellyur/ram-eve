import { motion } from 'framer-motion';

import guestsWomenImage from "@assets/guests-woman_1760623501428.png";
import principalSponsorsWomenImage from "@assets/woman-principal sponsors_1760623501428.png";
import guestsMenImage from "@assets/male-guests_1760623501429.png";
import principalSponsorsMenImage from "@assets/principalp-sponsors_1760623501429.png";

const DressCodeSection = () => {
  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Principal Sponsors Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.0 }}
        >
          <h3 className="text-2xl font-display text-center text-foreground mb-6">
            For Principal Sponsors
          </h3>
          <p className="text-center text-foreground/80 mb-8">(Parents and Principal Sponsors)</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Principal Sponsors - Women */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="border border-gray-200 rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative bg-[#FFF9F0] dark:bg-[#FFF9F0]">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 8.3 }}
                  >
                    <div className="mb-6">
                      <h4 className="text-lg font-display font-medium text-foreground mb-3">
                        Women
                      </h4>
                      <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                        <span className="text-sm font-normal text-foreground">PASTEL COLORS</span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.img 
                    src={principalSponsorsWomenImage}
                    alt="Principal Sponsors Women attire guide"
                    className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 8.5 }}
                    data-testid="img-principal-sponsors-women"
                  />
                </div>
              </div>
            </motion.div>

            {/* Principal Sponsors - Men */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 8.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="border border-gray-200 rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative bg-[#FFF9F0] dark:bg-[#FFF9F0]">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 8.4 }}
                  >
                    <div className="mb-6">
                      <h4 className="text-lg font-display font-medium text-foreground mb-3">
                        Men
                      </h4>
                      <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                        <span className="text-sm font-normal text-foreground">PASTEL COLORS</span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.img 
                    src={principalSponsorsMenImage}
                    alt="Principal Sponsors Men attire guide"
                    className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 8.6 }}
                    data-testid="img-principal-sponsors-men"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Guests Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.3 }}
        >
          <h3 className="text-2xl font-display text-center text-foreground mb-8">
            For Guests
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Guests - Women */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="border border-gray-200 rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative bg-[#FFF9F0] dark:bg-[#FFF9F0]">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 8.6 }}
                  >
                    <div className="mb-6">
                      <h4 className="text-lg font-display font-medium text-foreground mb-3">
                        Women
                      </h4>
                      <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                        <span className="text-sm font-normal text-foreground">PASTEL COLORS</span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.img 
                    src={guestsWomenImage}
                    alt="Guests Women attire guide"
                    className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 8.8 }}
                    data-testid="img-guests-women"
                  />
                </div>
              </div>
            </motion.div>

            {/* Guests - Men */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="border border-gray-200 rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative bg-[#FFF9F0] dark:bg-[#FFF9F0]">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 8.7 }}
                  >
                    <div className="mb-6">
                      <h4 className="text-lg font-display font-medium text-foreground mb-3">
                        Men
                      </h4>
                      <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                        <span className="text-sm font-normal text-foreground">PASTEL COLORS</span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.img 
                    src={guestsMenImage}
                    alt="Guests Men attire guide"
                    className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 8.9 }}
                    data-testid="img-guests-men"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Color Palette Section */}
        <motion.div
          className="bg-white/5 border border-primary/20 rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-2xl font-display text-foreground text-center mb-8">Pastel Color Palette</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-border shadow-md mb-2" style={{ backgroundColor: '#FFB6C1' }}></div>
              <p className="text-xs text-foreground/70">Light Pink</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-border shadow-md mb-2" style={{ backgroundColor: '#FFE4E1' }}></div>
              <p className="text-xs text-foreground/70">Misty Rose</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-border shadow-md mb-2" style={{ backgroundColor: '#E6E6FA' }}></div>
              <p className="text-xs text-foreground/70">Lavender</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-border shadow-md mb-2" style={{ backgroundColor: '#B0E0E6' }}></div>
              <p className="text-xs text-foreground/70">Powder Blue</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-border shadow-md mb-2" style={{ backgroundColor: '#98D8C8' }}></div>
              <p className="text-xs text-foreground/70">Mint Green</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-border shadow-md mb-2" style={{ backgroundColor: '#FFFACD' }}></div>
              <p className="text-xs text-foreground/70">Lemon Chiffon</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-border shadow-md mb-2" style={{ backgroundColor: '#F0E68C' }}></div>
              <p className="text-xs text-foreground/70">Khaki</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-border shadow-md mb-2" style={{ backgroundColor: '#FFDAB9' }}></div>
              <p className="text-xs text-foreground/70">Peach</p>
            </div>
          </div>
        </motion.div>

        {/* Additional Guidelines */}
        <motion.div
          className="bg-white/5 border border-primary/20 rounded-2xl p-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <h3 className="text-2xl font-display text-foreground text-center mb-8">Additional Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Principal Sponsors - Female */}
            <div className="glass-mint rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">
                    Principal Sponsors - Women
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Gowns or formal dresses in pastel colors
                  </p>
                </div>
              </div>
            </div>

            {/* Principal Sponsors - Male */}
            <div className="glass-mint rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">
                    Principal Sponsors - Men
                  </h4>
                  <p className="text-sm text-foreground/70">Long sleeves, suit with or without tie in pastel colors</p>
                </div>
              </div>
            </div>

            {/* Guests - Women */}
            <div className="glass-mint rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">
                    Guests - Women
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Formal or semi-formal dresses in pastel colors
                  </p>
                </div>
              </div>
            </div>

            {/* Guests - Men */}
            <div className="glass-mint rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">
                    Guests - Men
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Formal or semi-formal attire in pastel colors
                  </p>
                </div>
              </div>
            </div>

            {/* No Dark Colors */}
            <div className="glass-peach rounded-xl p-6 md:col-span-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">
                    No Dark Colors
                  </h4>
                  <p className="text-sm text-foreground/70">
                    We kindly request everyone to avoid wearing dark colors. Please choose pastel shades to match the theme of this special occasion.
                  </p>
                </div>
              </div>
            </div>

            {/* Beach Footwear */}
            <div className="bg-card/20 rounded-xl p-6 md:col-span-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">
                    Beach Comfort
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Feel free to bring comfortable beach footwear! The reception will be at a beach resort, so you may want to have slippers or sandals handy for your comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default DressCodeSection;
