import { motion } from 'framer-motion';
import { Camera, Gift } from 'lucide-react';
import qr1 from '@assets/qr1_1760626993003.jpg';
import qr2 from '@assets/qr2_1760626993005.jpg';

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Oh Snap! Section */}
        <motion.div 
          className="glass-sky border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8 text-primary" data-testid="icon-camera" />
            </div>
          </motion.div>

          <motion.h2 
            className="font-display italic text-gold mb-4 text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            data-testid="text-ohsnap-title"
          >
            Oh Snap!
          </motion.h2>

          <motion.div
            className="glass-mint border border-border/50 rounded-xl p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p 
              className="text-lg text-foreground leading-relaxed mb-4"
              data-testid="text-social-message"
            >
              We'd love to see the beautiful moments you capture on our special day!
              <br />
              <br />
              Kindly mention us on our social media accounts when you share photos and videos from the celebration.
            </p>
            <div className="mt-6 pt-4 border-t border-border/30">
              <p className="text-2xl font-display text-primary" data-testid="text-hashtag">
                #apRAMiseofforEVEr
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Gifts Section */}
        <motion.div 
          className="glass-peach border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-primary" data-testid="icon-gift" />
            </div>
          </motion.div>

          <motion.h2 
            className="font-display italic text-gold mb-6 text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            data-testid="text-gifts-title"
          >
            Gifts
          </motion.h2>

          <motion.div
            className="glass-mint border border-border/50 rounded-xl p-6 max-w-2xl mx-auto bg-[#e6e8ed]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div className="space-y-4 mb-8">
              <p 
                className="text-lg text-foreground leading-relaxed"
                data-testid="text-gifts-message"
              >
                Your presence at our wedding means the world to us!
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                If you wish to give a gift, we would truly appreciate your blessing in monetary form, which will help us start our new chapter together.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Thank you for your love and generosity!
              </p>
            </div>

            {/* QR Codes */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/60 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-primary mb-3 text-center">InstaPay</h4>
                <img 
                  src={qr1}
                  alt="InstaPay QR Code 1"
                  className="w-72 h-72 mx-auto object-contain"
                />
              </div>
              <div className="bg-white/60 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-primary mb-3 text-center">InstaPay</h4>
                <img 
                  src={qr2}
                  alt="InstaPay QR Code 2"
                  className="w-72 h-72 mx-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
