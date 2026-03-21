import { Container } from '../ui/Container';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface pt-16 pb-24 md:py-16 border-t border-surface-container mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group">
              <img 
                src="/logo.jpg" 
                alt="Loving-Sai-Clinc-Logo" 
                className="h-[46px] w-auto object-contain" 
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-text group-hover:text-primary transition-colors leading-tight">Loving Sai Clinic</span>
                <span className="text-sm font-semibold text-text-muted leading-tight">Dr. T. Sameer Nandan</span>
              </div>
            </div>
            <p className="text-text-muted mb-6 max-w-sm">
              Advanced medical care with trusted healing. Led by Dr. T. Sameer Nandan, providing comprehensive healthcare with a focus on patient well-being.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-text">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="/" className="text-text-muted hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="text-text-muted hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="text-text-muted hover:text-primary transition-colors">Services</a></li>
              <li><a href="/contact" className="text-text-muted hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-text">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-text-muted">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>MVP Colony, Sector 4, Visakhapatnam, AP 530017</span>
              </li>
              <li className="flex gap-3 text-text-muted">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+91 9494837432</span>
              </li>
              <li className="flex gap-3 text-text-muted">
                <Clock className="text-primary shrink-0" size={20} />
                <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-surface-container mt-12 pt-8 text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Loving Sai Clinic. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
