import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, ShieldCheck, Activity, Brain, CheckCircle2, Phone, MessageCircle, MapPin, Clock, Quote } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export function Home() {
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
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-10"></div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side */}
            <motion.div {...fadeUp} className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-medium text-sm mb-8 shadow-sm border border-surface-container">
                <ShieldCheck size={16} />
                <span>Premium Healthcare in Visakhapatnam</span>
              </div>
              
              <h1 className="text-5xl lg:text-[64px] font-display font-bold leading-[1.1] mb-6 text-text tracking-tight">
                Trusted Medical Care for You & <span className="text-primary relative">
                  Your Family <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
                </span> in Vizag
              </h1>
              
              <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed">
                Experience advanced healthcare with a personal touch. Led by Dr. T. Sameer Nandan, trusted by 2000+ patients.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10 items-center">
                <div className="flex items-center gap-2">
                  <Star className="text-[#F59E0B]" fill="#F59E0B" size={20} />
                  <span className="font-semibold text-text">5.0 Google Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-primary" size={20} />
                  <span className="font-semibold text-text">2000+ Happy Patients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-primary" size={20} />
                  <span className="font-semibold text-text">10+ Years Experience</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/919573609720?text=Hello%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button variant="primary" className="gap-2 w-full justify-center">
                    Book Appointment <ArrowRight size={18} />
                  </Button>
                </a>
                <Button variant="secondary" className="shrink-0">
                  Our Services
                </Button>
                <a href="https://wa.me/919573609720" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button variant="whatsapp" className="w-full gap-2">
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ duration: 0.8, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
              className="relative lg:ml-auto w-full max-w-lg"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] blur-2xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover hover:scale-105 transition duration-300 aspect-[4/5] bg-surface flex items-center justify-center">
                <img 
                  src="/dr-t-sameer-nandan-visakhapatnam-clinics.avif" 
                  alt="Dr. T. Sameer Nandan Loving Sai Clinic" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 pt-24 text-white">
                  <h3 className="font-display font-bold text-2xl">Dr. T. Sameer Nandan</h3>
                  <p className="text-white/80 font-medium font-body">Chief Medical Officer</p>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 border-y border-surface-container bg-gradient-to-b from-white to-surface">
        <Container>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              { value: '1.75L+', label: 'Patients Treated' },
              { value: '5.0', label: 'Star Rating', sub: '⭐⭐⭐⭐⭐' },
              { value: '2000+', label: 'Verified Reviews' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-surface-container">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 tracking-tight">{stat.value}</h3>
                <p className="font-medium text-text text-lg">{stat.label}</p>
                {stat.sub && <p className="mt-2 text-sm">{stat.sub}</p>}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-text">
                Comprehensive Medical Services
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Personalized care using modern medical technology. We focus on accurate diagnosis and evidence-based treatments.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Activity className="text-primary"/>, title: 'Diabetes Management', desc: 'Expert monitoring and lifestyle plans.' },
              { icon: <ShieldCheck className="text-primary"/>, title: 'Thyroid Treatment', desc: 'Hormonal balancing and long-term care.' },
              { icon: <Brain className="text-primary"/>, title: 'General Physician', desc: 'Comprehensive everyday healthcare.' },
              { icon: <CheckCircle2 className="text-primary"/>, title: 'Chronic Disease', desc: 'Ongoing management for complex conditions.' }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow-premium hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-text leading-snug">{service.title}</h3>
                <p className="text-text-muted">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-text">
                Trusted by 2000+ Patients Across Vizag
              </h2>
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[15px] font-medium text-[#D97706] px-4 py-2 rounded-full">
                <Star fill="currentColor" size={16} /> 5.0 | Google Verified Reviews
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Highlighted Featured Card */}
            <motion.div variants={fadeUp} className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-container p-10 md:p-12 rounded-2xl shadow-premium text-white relative overflow-hidden">
              <Quote size={120} className="absolute -top-6 -left-6 text-white/10" />
              <div className="relative z-10">
                <div className="flex text-[#F59E0B] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-2xl md:text-3xl font-display font-medium leading-snug mb-8">
                  "Dr. Sameer Nandan is incredibly patient and thorough. He took the time to explain my thyroid condition in detail and completely transformed my daily routine. The clinic environment is exceptionally serene and professional."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                    SR
                  </div>
                  <div>
                    <h4 className="font-bold font-display text-lg">Subba Rao</h4>
                    <p className="text-[#F59E0B] text-sm font-medium flex items-center gap-1">⭐ 5.0 Google Review | Verified Patient</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Smaller Review Cards */}
            <div className="flex flex-col gap-8">
              <motion.div variants={fadeUp} className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-premium transition-shadow">
                <div className="flex text-[#F59E0B] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-text-muted mb-6 leading-relaxed">
                  "One of the best diabetes specialists in Vizag. Accurate diagnosis and very approachable. Highly recommended."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">VK</div>
                  <div>
                    <h4 className="font-bold text-text text-sm">Venkata K.</h4>
                    <p className="text-[#F59E0B] text-xs font-medium">⭐ 5.0 Google Review | Verified Patient</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-premium transition-shadow">
                <div className="flex text-[#F59E0B] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-text-muted mb-6 leading-relaxed">
                  "Excellent care and no long waiting periods. The staff is courteous and the consultation was very detailed."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">AL</div>
                  <div>
                    <h4 className="font-bold text-text text-sm">Anjali L.</h4>
                    <p className="text-[#F59E0B] text-xs font-medium">⭐ 5.0 Google Review | Verified Patient</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 5. CONTACT PREVIEW SECTION */}
      <section className="py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text mb-4">Visit Our Clinic</h2>
                <p className="text-lg text-text-muted">Centrally located in Visakhapatnam with modern facilities and immediate care availability.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text mb-1">Clinic Address</h4>
                    <p className="text-text-muted">MVP Colony, Sector 4<br/>Visakhapatnam, AP 530017</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text mb-1">Phone Number</h4>
                    <p className="text-text-muted">+91 9573609720</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text mb-1">Working Hours</h4>
                    <p className="text-text-muted">Mon–Sat (9:00 AM – 8:00 PM)<br/>Sun (10:00 AM – 1:00 PM)</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-premium border border-surface-container"
            >
              <iframe 
                src="https://maps.google.com/maps?q=Dr.+T.+Sameer+Nandan+Loving+Sai+Clinic,+Visakhapatnam&z=15&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Map"
              ></iframe>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-24">
        <Container>
          <motion.div 
            {...fadeUp}
            className="bg-gradient-to-br from-primary to-[#003899] rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center text-white shadow-premium relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
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
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://wa.me/919573609720?text=Hello%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <button className="bg-white text-[#004ac6] hover:bg-[#faf8ff] hover:-translate-y-1 shadow-lg transition-all font-bold text-lg px-8 py-4 h-auto rounded-2xl w-full inline-flex items-center justify-center">
                    Book Appointment
                  </button>
                </a>
                <a href="tel:+919573609720" className="w-full sm:w-auto">
                  <Button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:-translate-y-1 shadow-lg transition-all font-bold text-lg px-8 py-4 h-auto rounded-2xl w-full gap-2 justify-center">
                    <Phone size={20} /> Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919573609720" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button variant="whatsapp" className="font-bold text-lg px-8 py-4 h-auto rounded-2xl w-full gap-2 justify-center hover:-translate-y-1 transition-all">
                    <MessageCircle size={20} /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
