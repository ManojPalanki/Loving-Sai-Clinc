import { motion } from 'framer-motion';
import { Star, Users, Award, Heart, Stethoscope, Microscope, MapPin, Phone, Clock, MessageCircle, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export function About() {
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
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-text tracking-tight mb-6">
                About <span className="text-primary">Loving Sai Clinic</span>
              </h1>
              <p className="text-xl text-text-muted leading-relaxed mb-10">
                Providing trusted and personalized healthcare in Visakhapatnam for over a decade. We are committed to your well-being with compassionate care and medical excellence.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-surface-container">
                  <Star className="text-[#F59E0B]" fill="#F59E0B" size={18} />
                  <span className="font-semibold text-sm">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-surface-container">
                  <Users className="text-primary" size={18} />
                  <span className="font-semibold text-sm">2000+ Patients</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-surface-container">
                  <Award className="text-primary" size={18} />
                  <span className="font-semibold text-sm">10+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. DOCTOR PROFILE SECTION */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-container/20 to-transparent blur-2xl rounded-3xl -z-10"></div>
              <img 
                src="/dr-t-sameer-nandan-visakhapatnam-clinics.avif" 
                alt="Dr. T. Sameer Nandan Loving Sai Clinic" 
                className="w-full aspect-[4/5] object-cover object-top rounded-2xl shadow-premium relative z-10"
                loading="lazy"
              />
            </motion.div>

            {/* Right Details */}
            <motion.div {...fadeUp} className="space-y-8">
              <div>
                <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Chief Medical Officer</h3>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-text tracking-tight mb-6">Dr. T. Sameer Nandan</h2>
                <h4 className="text-xl font-medium text-text-muted mb-6">Senior Physician</h4>
                
                <p className="text-lg text-text-muted leading-relaxed mb-8">
                  With over 10+ years of experience, Dr. Sameer Nandan specializes in diabetes management, chronic disease care, and general medicine. Known for his patient-first approach and accurate diagnosis, he has built a reputation of trust and excellence in the medical community.
                </p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium text-text">10+ years of clinical experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium text-text">2000+ happy patients treated</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium text-text">Highly trusted across Visakhapatnam</span>
                  </li>
                </ul>

                <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer" className="inline-block w-full sm:w-auto">
                  <Button variant="primary" className="gap-2 px-8 py-4 h-auto text-lg rounded-xl w-full justify-center">
                    Book Appointment <ArrowRight size={20} />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. CLINIC STORY SECTION */}
      <section className="py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text tracking-tight mb-6">Our Mission & Approach</h2>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                At Loving Sai Clinic, our mission is to deliver comprehensive, compassionate, and high-quality healthcare. We firmly believe in a <strong>patient-first approach</strong>, ensuring that every individual who walks through our doors feels heard, respected, and well-cared for.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                We blend <strong>modern medical technology</strong> with a deeply essential <strong>human touch</strong>. Every treatment plan is personalized, thoroughly explained, and tailored to meet the specific medical needs and lifestyle of our patients.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeUp}
              className="order-1 lg:order-2 bg-gradient-to-br from-white to-surface p-10 md:p-14 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-surface-container relative"
            >
              <Quote size={64} className="text-primary/10 mb-6" />
              <h3 className="text-2xl font-display font-bold text-text leading-snug mb-4">
                "Healing goes beyond prescriptions. It is about understanding the patient, providing comfort, and building a foundation of absolute trust."
              </h3>
              <p className="font-medium text-text-muted">— Dr. T. Sameer Nandan</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4. STATS SECTION */}
      <section className="py-16 bg-white border-y border-surface-container">
        <Container>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: '1.75L+', label: 'Patients Treated' },
              { value: '5.0', label: 'Star Rating', sub: '⭐⭐⭐⭐⭐' },
              { value: '2000+', label: 'Verified Reviews' },
              { value: '10+', label: 'Years Experience' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-gradient-to-b from-surface to-white p-8 rounded-2xl shadow-sm border border-surface-container">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 tracking-tight">{stat.value}</h3>
                <p className="font-medium text-text text-lg">{stat.label}</p>
                {stat.sub && <p className="mt-2 text-sm">{stat.sub}</p>}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div {...fadeUp}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-text">
                Why Patients Trust Us
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                We hold ourselves to the highest standards of clinical excellence. Here is what makes Loving Sai Clinic the preferred choice for hundreds of families.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { icon: <Stethoscope size={28}/>, title: 'Experienced Doctor', desc: 'Over a decade of successful medical practice and thousands of healthy patients.' },
              { icon: <Heart size={28}/>, title: 'Personalized Treatment Plans', desc: 'No generic prescriptions. We analyze your entire health profile before deciding the treatment.' },
              { icon: <Microscope size={28}/>, title: 'Modern Medical Technology', desc: 'Equipped with the latest diagnostic tools for accurate and swift results.' },
              { icon: <Users size={28}/>, title: 'Friendly & Supportive Staff', desc: 'A welcoming clinic environment designed to make you feel completely at ease.' }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-16 h-16 bg-blue-100/80 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-3 text-text">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 6. LOCATION & CONTACT PREVIEW */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text mb-4">Visit Our Clinic</h2>
                <p className="text-lg text-text-muted">Centrally located in Visakhapatnam with modern facilities and immediate care availability.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0 border border-surface-container">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text mb-1">Clinic Address</h4>
                    <p className="text-text-muted">MVP Colony, Sector 4<br/>Visakhapatnam, AP 530017</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0 border border-surface-container">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text mb-1">Phone Number</h4>
                    <p className="text-text-muted">+91 9494837432</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0 border border-surface-container">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121617.91500799741!2d83.2081534!3d17.7386762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389b69735%3A0xb31aeb78f4a3bebd!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1704285435948!5m2!1sen!2sin" 
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

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 bg-surface">
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
                <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <button className="bg-white text-[#004ac6] hover:bg-[#faf8ff] hover:-translate-y-1 shadow-lg transition-all font-bold text-lg px-8 py-4 h-auto rounded-2xl w-full inline-flex items-center justify-center">
                    Book Appointment
                  </button>
                </a>
                <a href="tel:+919494837432" className="w-full sm:w-auto">
                  <Button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:-translate-y-1 shadow-lg transition-all font-bold text-lg px-8 py-4 h-auto rounded-2xl w-full gap-2 justify-center">
                    <Phone size={20} /> Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919494837432?text=Hello%20Loving%20Sai%20Clinc%20%2CI%20want%20to%20Book%20An%20appointment" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
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
