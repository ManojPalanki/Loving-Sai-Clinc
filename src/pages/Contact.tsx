import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export function Contact() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.15 }
  };

  return (
    <div className="pb-20">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[100px] -z-10"></div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side */}
            <motion.div {...fadeUp} className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-medium text-sm mb-8 shadow-sm border border-surface-container">
                <MessageCircle size={16} />
                <span>Get In Touch</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6 text-text tracking-tight">
                Contact <span className="text-primary">Loving Sai Clinic</span>
              </h1>
              
              <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed">
                Call, WhatsApp, or send a request — we are here to help you with the best medical care in Visakhapatnam.
              </p>
            </motion.div>

            {/* Right Side - Image/Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative lg:ml-auto w-full max-w-lg"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] blur-2xl -z-10"></div>
              <div className="bg-white p-8 rounded-3xl shadow-premium border border-surface-container relative">
                 <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                   <Phone size={32} />
                 </div>
                 <h3 className="text-2xl font-bold font-display tracking-tight text-text mb-2">We're Ready to Help</h3>
                 <p className="text-text-muted leading-relaxed">Our dedicated support team and medical staff are available to assist you with appointments and health inquiries.</p>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 2. QUICK CONTACT OPTIONS */}
      <section className="py-20 bg-white relative -mt-10 z-10">
        <Container>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Call Now */}
            <motion.div variants={fadeUp} className="bg-surface p-8 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold font-display mb-2 text-text">Call Clinic</h3>
                <p className="text-text-muted mb-6 text-lg font-medium">+91 9494837432</p>
              </div>
                  <a href="tel:+919494837432" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-white text-[#004ac6] hover:bg-gray-100 rounded-xl px-8 py-4 shadow-xl font-bold text-lg transition-all transform hover:-translate-y-1">
                      Call Now
                    </button>
                  </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={fadeUp} className="bg-surface p-8 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 bg-[#25D366]/10 text-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-bold font-display mb-2 text-text">Chat on WhatsApp</h3>
                <p className="text-text-muted mb-6 text-lg font-medium">Fastest response times</p>
              </div>
              <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer" className="block w-full mt-6">
                <button className="w-full bg-green-500 text-white hover:bg-green-600 rounded-xl px-6 py-3 shadow-md font-medium transition-colors">
                  Chat on WhatsApp
                </button>
              </a>
            </motion.div>

            {/* Visit Clinic */}
            <motion.div variants={fadeUp} className="bg-surface p-8 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold font-display mb-2 text-text">Visit Clinic</h3>
                <p className="text-text-muted mb-6 leading-relaxed">MVP Colony, Sector 4, Visakhapatnam, Andhra Pradesh 530017</p>
              </div>
              <a href="https://www.google.com/maps/place/Dr.+T.+Sameer+Nandan+Loving+Sai+Clinic/@17.7364939,83.3345398,17z/data=!3m1!4b1!4m6!3m5!1s0x3a394364d22e2cb9:0x4c3f88d32d49e8b5!8m2!3d17.7364888!4d83.3371147!16s%2Fg%2F11ng65vts0?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="block w-full mt-6">
                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl px-6 py-3 font-medium transition-colors">
                  Open in Google Maps
                </button>
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* 3. FORM & DETAILS SECTION */}
      <section className="py-24 bg-surface border-t border-surface-container">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Left - Request Callback Form */}
            <motion.div {...fadeUp} className="bg-white p-8 md:p-12 rounded-3xl shadow-premium border border-surface-container">
              <h2 className="text-3xl font-display font-bold text-text mb-2">Request a Callback</h2>
              <p className="text-text-muted mb-8">Leave your details and we will get back to you immediately.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-5 py-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-5 py-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div className="pt-4">
                  <Button type="button" className="w-full py-4 rounded-2xl text-lg font-bold flex justify-center items-center gap-2">
                    Submit Request <Send size={18} />
                  </Button>
                  <p className="text-center text-sm text-text-muted mt-4 flex items-center justify-center gap-2">
                    <Clock size={14} /> Our team will contact you shortly.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Right - Clinic Details & Map */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col h-full"
            >
              <h2 className="text-3xl font-display font-bold text-text mb-8">Clinic Information</h2>
              
              <div className="space-y-8 mb-10 flex-grow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text text-lg">Address</h4>
                    <p className="text-text-muted mt-1 leading-relaxed">MVP Colony, Sector 4,<br/>Visakhapatnam, Andhra Pradesh 530017</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text text-lg">Phone</h4>
                    <p className="text-text-muted mt-1 leading-relaxed">+91 9494837432</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text text-lg">Timings</h4>
                    <p className="text-text-muted mt-1 leading-relaxed">Mon &ndash; Sat: 9:00 AM &ndash; 8:00 PM<br/>Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="relative rounded-3xl overflow-hidden shadow-md bg-white p-2">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <iframe
                    src="https://maps.google.com/maps?q=Dr.+T.+Sameer+Nandan+Loving+Sai+Clinic,+Visakhapatnam&z=15&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0, borderRadius: '16px' }}
                    loading="lazy"
                    title="Loving Sai Clinic Location"
                  ></iframe>
                </div>
                <a href="https://www.google.com/maps/place/Dr.+T.+Sameer+Nandan+Loving+Sai+Clinic/@17.7364939,83.3345398,17z/data=!3m1!4b1!4m6!3m5!1s0x3a394364d22e2cb9:0x4c3f88d32d49e8b5!8m2!3d17.7364888!4d83.3371147!16s%2Fg%2F11ng65vts0?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="block w-full mt-4">
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl px-6 py-3 font-medium transition-colors">
                    Open in Google Maps
                  </button>
                </a>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="py-24 bg-[#0a1e3f]">
        <Container>
          <motion.div 
            {...fadeUp}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
              <Phone size={32} className="text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-tight">
              Talk to a Doctor Instantly — Book Your Appointment Now
            </h2>
            <p className="text-white/90 text-xl font-medium mb-12">
              Trusted by 2000+ patients across Vizag
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-white font-medium text-base">
              <div className="flex items-center gap-2"><CheckCircle2 size={20} className="text-[#34d399]"/> No Waiting Time</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={20} className="text-[#34d399]"/> Instant WhatsApp Response</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={20} className="text-[#34d399]"/> Trusted by 2000+ Patients</div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="tel:+919494837432" className="w-full sm:w-auto">
                <button className="bg-white text-[#004ac6] hover:bg-[#faf8ff] hover:-translate-y-1 shadow-lg transition-all font-bold text-lg px-8 py-4 h-auto rounded-2xl w-full gap-2 justify-center inline-flex items-center">
                  <Phone size={20} /> Call Now
                </button>
              </a>
              <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="whatsapp" className="font-bold text-lg px-8 py-4 h-auto rounded-2xl w-full gap-2 justify-center hover:-translate-y-1 transition-all">
                  <MessageCircle size={20} /> WhatsApp
                </Button>
              </a>
              <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:-translate-y-1 shadow-lg transition-all font-bold text-lg px-8 py-4 h-auto rounded-2xl w-full gap-2 justify-center">
                  Book Appointment <ArrowRight size={20} />
                </Button>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
