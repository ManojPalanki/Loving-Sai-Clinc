import { motion } from 'framer-motion';
import { ArrowRight, Star, HeartPulse, Activity, Brain, ShieldCheck, Microscope, Heart, Phone, MessageCircle, MapPin, CheckCircle2, Stethoscope } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export function Services() {
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
                <MapPin size={16} />
                <span>Now Serving Visakhapatnam</span>
              </div>
              
              <h1 className="text-5xl lg:text-[64px] font-display font-bold leading-[1.1] mb-6 text-text tracking-tight">
                Specialized Diabetes & <span className="text-primary">Family Care</span> in Vizag
              </h1>
              
              <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed">
                Personalized treatment for diabetes, chronic conditions, and general health concerns led by Dr. T. Sameer Nandan.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button variant="primary" className="gap-2 shrink-0 w-full">
                    Book Consultation <ArrowRight size={18} />
                  </Button>
                </a>
                <a href="#services-grid" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full">
                    View Services
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative lg:ml-auto w-full max-w-lg"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] blur-2xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/5] bg-surface flex items-center justify-center">
                <img 
                  src="/dr-t-sameer-nandan-visakhapatnam-clinics.avif" 
                  alt="Specialized Medical Care by Dr. T. Sameer Nandan" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Floating Trust Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -left-8 -bottom-8 bg-white p-5 rounded-2xl shadow-xl border border-surface-container max-w-[240px]"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F59E0B]/10 text-[#D97706] rounded-xl flex items-center justify-center shrink-0">
                    <Star fill="currentColor" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-text">Gold Medalist Care</h4>
                    <p className="text-xs text-text-muted mt-1">Excellence in Endocrinology</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 2. STATS STRIP */}
      <section className="py-8 bg-white border-y border-surface-container">
        <Container>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8"
          >
            {[
              { value: '1.75L+', label: 'Patients Treated' },
              { value: '2000+', label: 'Verified Reviews' },
              { value: '10+', label: 'Years Experience' },
              { value: 'Vizag', label: 'Based Clinic' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <h3 className="text-3xl font-display font-bold text-primary mb-1 tracking-tight">{stat.value}</h3>
                <p className="font-medium text-text-muted text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 3. FEATURED SERVICE SECTION */}
      <section className="py-24 bg-surface">
        <Container>
          <motion.div 
            {...fadeUp}
            className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-10 lg:p-16 shadow-premium relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-3xl rounded-full transform translate-x-1/2 -z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
                  <Activity size={16} /> Featured Specialty
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Diabetes Management</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  Comprehensive care using advanced clinical protocols for long-term sugar control. We focus on lifestyle changes and precise medication for optimal results.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {['Type 1 & Type 2', 'Gestational Diabetes', 'Insulin Optimization', 'Nutrition Coaching'].map((tag, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 size={20} className="text-[#34d399]" /> {tag}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6">
                  <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer">
                    <button className="bg-white text-[#004ac6] hover:bg-[#faf8ff] hover:-translate-y-1 shadow-lg transition-all font-bold text-lg px-8 py-4 h-auto rounded-2xl inline-flex items-center justify-center">
                      Book Consultation
                    </button>
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                  alt="Diabetes Care" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 4. ALL SERVICES GRID */}
      <section id="services-grid" className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-text">
                Clinical Core Services
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Expert treatments tailored to your exact health needs. Experience the difference of evidence-based medical care.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: <Activity className="text-primary" size={28}/>, title: 'Diabetes Management', desc: 'Holistic care focusing on blood sugar stabilization, insulin regulation, and diet planning.' },
              { icon: <ShieldCheck className="text-primary" size={28}/>, title: 'Thyroid Treatment', desc: 'Accurate diagnosis and ongoing management of Hypothyroidism and Hyperthyroidism.' },
              { icon: <Stethoscope className="text-primary" size={28}/>, title: 'General Physician', desc: 'Comprehensive consultations for fevers, infections, and common daily health issues.' },
              { icon: <HeartPulse className="text-primary" size={28}/>, title: 'Chronic Disease Care', desc: 'Long-term management strategies for hypertension, asthma, and other chronic ailments.' },
              { icon: <Microscope className="text-primary" size={28}/>, title: 'Preventive Checkups', desc: 'Thorough, full-body medical evaluations to catch potential health risks early.' },
              { icon: <Brain className="text-primary" size={28}/>, title: 'Lifestyle & Nutrition', desc: 'Personalized dietary guidance and medical counseling for a sustainable, healthy life.' }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-surface p-10 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-display mb-4 text-text">{service.title}</h3>
                <p className="text-text-muted leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all mt-auto">
                  Book Consultation <ArrowRight size={18} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 5. WHY CHOOSE THIS CLINIC */}
      <section className="py-24 bg-surface border-t border-surface-container">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Stacked Stats */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white p-10 rounded-3xl shadow-premium border border-surface-container relative z-10">
                <div className="text-5xl font-display font-bold text-primary mb-2">10+</div>
                <div className="font-bold text-text mb-6">Years of Clinical Excellence</div>
                <p className="text-text-muted leading-relaxed">Dedicated to raising the standard of healthcare in Visakhapatnam through continuous medical innovation and ethical practice.</p>
              </div>
              <div className="bg-primary text-white p-10 rounded-3xl shadow-xl absolute -bottom-10 -right-10 w-full max-w-[80%] z-20">
                <div className="text-5xl font-display font-bold mb-2">2000+</div>
                <div className="font-bold mb-2">Success Stories</div>
                <p className="text-white/80 text-sm">Real patients, real recoveries.</p>
              </div>
            </motion.div>

            {/* Right - Text & Icons */}
            <motion.div {...fadeUp} className="lg:pl-12 mt-16 lg:mt-0">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text tracking-tight mb-6">The Standards of Excellence</h2>
              <p className="text-lg text-text-muted leading-relaxed mb-10">
                When you choose Loving Sai Clinic, you are choosing a healthcare partner committed to your long-term wellness.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-text mb-2">Personalized Care</h4>
                    <p className="text-text-muted leading-relaxed">Treatments tailored precisely to your unique medical history, daily lifestyle, and genetic predispositions.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-text mb-2">Expert Diagnosis</h4>
                    <p className="text-text-muted leading-relaxed">Leveraging over a decade of high-level clinical experience to pinpoint the root causes of complex ailments.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-text mb-2">Integrated Approach</h4>
                    <p className="text-text-muted leading-relaxed">Combining exact medications with strategic nutritional coaching for a holistic path to recovery.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 6. URGENT CARE CTA SECTION */}
      <section className="py-24 bg-[#0a1e3f]">
        <Container>
          <motion.div 
            {...fadeUp}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
              <Phone size={32} />
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
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:-translate-y-1 shadow-lg transition-all font-bold text-lg px-8 py-4 h-auto rounded-2xl w-full">
                  Book Appointment
                </Button>
              </a>
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
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
