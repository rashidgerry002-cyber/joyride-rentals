import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component layout incorporates:
// - Glassmorphism UI elements (backdrop-blur, borders, translucent backgrounds)
// - Custom Google Fonts injection (Blackletter, Handwritten Script, Sans-Serif)
// - Fully interactive states and mobile responsiveness
// - Built-in Schema Markup for local business SEO optimization

export default function JoyrideLuxuryWebsite() {
  const [bookingForm, setBookingForm] = useState({
    fullName: '', phone: '', email: '', pickup: '', destination: '',
    serviceType: '', vehicleType: '', travelDate: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for choosing Joyride. Your luxury journey is being prepared!");
  };

  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative">
      
      {/* Google Fonts Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Alex+Brush&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        .font-blackletter {
          font-family: 'UnifrakturMaguntia', serif;
          letter-spacing: 0.05em;
        }
        .font-script {
          font-family: 'Alex Brush', cursive;
        }
        .glass-panel {
          background: rgba(13, 27, 42, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glass-card-hover:hover {
          background: rgba(212, 175, 55, 0.08);
          border-color: rgba(212, 175, 55, 0.3);
          transform: translateY(-4px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* SEO Local Business Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "Joyride Car Hire Taxi Rentals Tours & Travels Agency",
            "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Star Complex, Ramogi Road",
              "addressLocality": "Kisumu",
              "addressCountry": "KE"
            },
            "telephone": "0720 034272",
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })
        }}
      />

      {/* FLOATING LIGHTING EFFECT */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0D1B2A]/60 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* STICKY GLASS NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-white/5 w-full py-4 px-6 md:px-12 flex justify-between items-center transition-all">
        <div className="flex flex-col">
          <span className="font-blackletter text-2xl md:text-3xl text-[#D4AF37] tracking-wider font-bold">JOYRIDE</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#C0C0C0]">Car Hire &amp; Travels</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-[#C0C0C0]">
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
          <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
          <a href="#fleet" className="hover:text-[#D4AF37] transition-colors">Fleet</a>
          <a href="#booking" className="hover:text-[#D4AF37] transition-colors">Book Now</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </div>
        <div>
          <a href="#booking" className="border border-[#D4AF37] px-5 py-2 text-xs uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-semibold rounded-none backdrop-blur-sm">
            Reserve Fleet
          </a>
        </div>
      </nav>

      {/* CINEMATIC HERO SECTION */}
      <header className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-12">
        {/* Cinematic Media Background Placeholder */}
        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-40 mix-blend-luminosity scale-105 transition-transform duration-10000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-[#0D1B2A]/40 z-1" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="font-script text-4xl md:text-5xl text-[#D4AF37] block mb-2">Luxury Journeys Begin Here</span>
            <h1 className="font-blackletter text-6xl md:text-9xl font-bold uppercase tracking-wide bg-gradient-to-b from-white via-[#C0C0C0] to-[#8A8A8A] bg-clip-text text-transparent drop-shadow-2xl">
              JOYRIDE CAR HIRE
            </h1>
            <p className="text-[#C0C0C0] text-xs md:text-base font-light tracking-[0.2em] uppercase max-w-2xl mx-auto mt-6 border-y border-white/10 py-3 backdrop-blur-sm">
              Premium Car Hire • Taxi Services • Tours &amp; Travels • Airport Transfers
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <a href="#booking" className="w-64 sm:w-auto bg-[#D4AF37] text-black px-8 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Book A Ride
            </a>
            <a href="tel:0720034272" className="w-64 sm:w-auto glass-panel border border-white/20 text-white px-8 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-white/10 transition-all">
              Call Now
            </a>
          </motion.div>

          {/* Animated Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full mt-20 max-w-4xl">
            {[
              { value: "1000+", label: "Successful Trips" },
              { value: "24/7", label: "Availability" },
              { value: "4.0★", label: "Customer Rating" },
              { value: "100%", label: "Customer Support" }
            ].map((stat, i) => (
              <div key={i} className="glass-panel p-4 md:p-6 text-center border-t-2 border-t-[#D4AF37]/50">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{stat.value}</h3>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#C0C0C0] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-script text-3xl text-[#D4AF37]">Kisumu's Trusted Travel Partner</span>
            <h2 className="font-blackletter text-4xl md:text-6xl uppercase tracking-wider font-bold mb-6 text-white">
              ABOUT JOYRIDE
            </h2>
            <p className="text-[#C0C0C0] leading-relaxed font-light mb-4">
              Joyride Car Hire is a leading transportation, tours, and travel company based in Kisumu, Kenya. We provide professional taxi services, executive car rentals, airport transfers, corporate travel solutions, and customized tour packages throughout Kenya.
            </p>
            <p className="text-[#C0C0C0] leading-relaxed font-light">
              Operating 24 hours a day, we are committed to delivering safe, reliable, and comfortable transportation experiences for individuals, families, tourists, and businesses.
            </p>
          </div>
          <div className="relative h-[350px] md:h-[450px] overflow-hidden glass-panel p-2">
            <div className="w-full h-full bg-cover bg-center grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80')" }}></div>
            <div className="absolute bottom-6 right-6 glass-panel p-4 border-l-4 border-l-[#D4AF37]">
              <p className="text-xs uppercase tracking-widest font-semibold text-white">Headquarters</p>
              <p className="text-xs text-[#C0C0C0]">Kisumu, Kenya</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-gradient-to-b from-[#000000] to-[#0D1B2A]/40 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="font-script text-3xl text-[#D4AF37]">First-Class Features</span>
          <h2 className="font-blackletter text-4xl md:text-6xl uppercase tracking-wider font-bold text-white">OUR PREMIUM SERVICES</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            { id: "01", title: "CAR HIRE", desc: "Luxury and economy vehicle rentals for business, leisure, and personal travel." },
            { id: "02", title: "TAXI SERVICES", desc: "Fast and reliable transportation available 24/7 throughout Kisumu and surrounding areas." },
            { id: "03", title: "AIRPORT TRANSFERS", desc: "Professional airport pickups and drop-offs with punctual service." },
            { id: "04", title: "TOURS & TRAVEL", desc: "Customized tours across Kenya including wildlife safaris, lakeside adventures, and cultural experiences." },
            { id: "05", title: "CORPORATE TRANSPORT", desc: "Business travel solutions for executives, teams, and events." },
            { id: "06", title: "CHAUFFEUR SERVICES", desc: "Professional drivers providing comfort, safety, and convenience." }
          ].map((srv) => (
            <div key={srv.id} className="glass-panel p-8 glass-card-hover relative overflow-hidden group">
              <span className="absolute top-4 right-6 font-blackletter text-4xl text-white/5 group-hover:text-[#D4AF37]/10 transition-colors">{srv.id}</span>
              <h3 className="text-xl font-bold text-[#D4AF37] uppercase tracking-wider mb-3">{srv.title}</h3>
              <p className="text-sm text-[#C0C0C0] font-light leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET SHOWCASE */}
      <section id="fleet" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-[#D4AF37]">Elite Fleet</span>
          <h2 className="font-blackletter text-4xl md:text-6xl uppercase tracking-wider font-bold text-white">LUXURY VEHICLE GALLERY</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Toyota Axio", img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80", cap: "4 Passengers", ac: "Climate Control AC", trans: "Automatic" },
            { name: "Toyota Fielder", img: "https://images.unsplash.com/photo-1617469167446-80e3a446654e?auto=format&fit=crop&w=600&q=80", cap: "5 Passengers", ac: "Full Auto AC", trans: "Automatic" },
            { name: "Toyota Premio", img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80", cap: "5 Passengers", ac: "Premium Climate Control", trans: "Automatic" },
            { name: "Toyota Prado", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80", cap: "7 Passengers", ac: "Dual-Zone AC", trans: "4x4 Automatic" },
            { name: "Toyota Noah", img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=600&q=80", cap: "8 Passengers", ac: "Rear Cabin AC Control", trans: "Automatic" },
            { name: "Toyota Alphard", img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&w=600&q=80", cap: "7 Executive Seats", ac: "Tri-Zone Luxury AC", trans: "Automatic" }
          ].map((car, index) => (
            <div key={index} className="glass-panel overflow-hidden flex flex-col border-b-4 border-b-transparent hover:border-b-[#D4AF37] transition-all duration-300">
              <div className="h-52 overflow-hidden relative">
                <img src={car.img} alt={car.name} className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-500" />
                <span className="absolute top-4 left-4 glass-panel text-[10px] uppercase text-[#D4AF37] px-3 py-1 font-bold tracking-widest">Available</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold tracking-wide uppercase text-white mb-4">{car.name}</h3>
                <ul className="text-xs text-[#C0C0C0] space-y-2 mb-6 flex-grow font-light">
                  <li className="flex items-center gap-2">✦ {car.cap}</li>
                  <li className="flex items-center gap-2">✦ {car.ac}</li>
                  <li className="flex items-center gap-2">✦ {car.trans}</li>
                  <li className="flex items-center gap-2 text-[#D4AF37]">✦ Pricing: Exclusive Rates on Request</li>
                </ul>
                <a href="#booking" className="block w-full text-center border border-white/20 hover:border-[#D4AF37] py-3 text-xs uppercase tracking-widest transition-all font-semibold hover:bg-[#D4AF37] hover:text-black">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#0D1B2A]/20 border-y border-white/5 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-script text-3xl text-[#D4AF37]">Uncompromised Standards</span>
            <h2 className="font-blackletter text-4xl md:text-6xl uppercase tracking-wider font-bold text-white">WHY CHOOSE US</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Available 24/7", "Professional Drivers", "Affordable Rates", "Safe & Secure Travel",
              "Luxury Fleet", "Fast Booking Process", "Airport Specialists", "Local Tourism Experts"
            ].map((feature, idx) => (
              <div key={idx} className="glass-panel p-6 flex flex-col justify-between items-start border-l-2 border-l-[#D4AF37]">
                <span className="text-[#D4AF37] font-bold text-lg mb-2">✓</span>
                <p className="text-sm font-semibold tracking-wide uppercase text-white">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center relative z-10">
        <span className="font-script text-3xl text-[#D4AF37]">Testimonials</span>
        <h2 className="font-blackletter text-4xl md:text-6xl uppercase tracking-wider font-bold mb-12 text-white">CLIENT EXCELLENCE</h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            { quote: "You're better.", author: "Kevin Menya" },
            { quote: "Good job.", author: "Paul Ndege" }
          ].map((rev, idx) => (
            <div key={idx} className="glass-panel p-8 relative">
              <span className="text-5xl text-[#D4AF37]/20 absolute top-4 left-4 font-serif">“</span>
              <p className="text-lg italic text-[#C0C0C0] mb-6 relative z-10 pl-4">"{rev.quote}"</p>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold pl-4">— {rev.author}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-xs uppercase tracking-widest text-[#C0C0C0]">
          <span className="text-[#D4AF37] font-bold">4.0★ Rating</span> • Trusted by Customers in Kisumu
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-24 bg-gradient-to-b from-[#000000] to-[#0D1B2A] px-6 md:px-12 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-none border border-white/10 relative">
          <div className="text-center mb-10">
            <span className="font-script text-3xl text-[#D4AF37]">Reservation Desk</span>
            <h2 className="font-blackletter text-4xl md:text-5xl uppercase tracking-wider font-bold text-white">BOOK YOUR JOURNEY</h2>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0] mb-2">Full Name</label>
              <input type="text" required className="w-full bg-black/40 border border-white/10 p-3 text-sm focus:border-[#D4AF37] outline-none transition-colors text-white" value={bookingForm.fullName} onChange={e => setBookingForm({...bookingForm, fullName: e.target.value})} />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0] mb-2">Phone Number</label>
              <input type="tel" required className="w-full bg-black/40 border border-white/10 p-3 text-sm focus:border-[#D4AF37] outline-none transition-colors text-white" value={bookingForm.phone} onChange={e => setBookingForm({...bookingForm, phone: e.target.value})} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0] mb-2">Email Address</label>
              <input type="email" required className="w-full bg-black/40 border border-white/10 p-3 text-sm focus:border-[#D4AF37] outline-none transition-colors text-white" value={bookingForm.email} onChange={e => setBookingForm({...bookingForm, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0] mb-2">Pickup Location</label>
              <input type="text" required className="w-full bg-black/40 border border-white/10 p-3 text-sm focus:border-[#D4AF37] outline-none transition-colors text-white" value={bookingForm.pickup} onChange={e => setBookingForm({...bookingForm, pickup: e.target.value})} />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0] mb-2">Destination</label>
              <input type="text" required className="w-full bg-black/40 border border-white/10 p-3 text-sm focus:border-[#D4AF37] outline-none transition-colors text-white" value={bookingForm.destination} onChange={e => setBookingForm({...bookingForm, destination: e.target.value})} />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0] mb-2">Service Type</label>
              <select className="w-full bg-black border border-white/10 p-3 text-sm focus:border-[#D4AF37] outline-none transition-colors text-white" value={bookingForm.serviceType} onChange={e => setBookingForm({...bookingForm, serviceType: e.target.value})}>
                <option value="">Select Service</option>
                <option value="Car Hire">Car Hire</option>
                <option value="Taxi Services">Taxi Service</option>
                <option value="Airport Transfer">Airport Transfer</option>
                <option value="Tours & Travel">Tours &amp; Travel</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0] mb-2">Vehicle Preferred</label>
              <select className="w-full bg-black border border-white/10 p-3 text-sm focus:border-[#D4AF37] outline-none transition-colors text-white" value={bookingForm.vehicleType} onChange={e => setBookingForm({...bookingForm, vehicleType: e.target.value})}>
                <option value="">Select Vehicle</option>
                <option value="Toyota Axio">Toyota Axio</option>
                <option value="Toyota Fielder">Toyota Fielder</option>
                <option value="Toyota Premio">Toyota Premio</option>
                <option value="Toyota Prado">Toyota Prado</option>
                <option value="Toyota Noah">Toyota Noah</option>
                <option value="Toyota Alphard">Toyota Alphard</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0] mb-2">Travel Date</label>
              <input type="date" required className="w-full bg-black/40 border border-white/10 p-3 text-sm focus:border-[#D4AF37] outline-none transition-colors text-[#C0C0C0]" value={bookingForm.travelDate} onChange={e => setBookingForm({...bookingForm, travelDate: e.target.value})} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#C0C0C0] mb-2">Special Instructions / Message</label>
              <textarea rows="3" className="w-full bg-black/40 border border-white/10 p-3 text-sm focus:border-[#D4AF37] outline-none transition-colors text-white" value={bookingForm.message} onChange={e => setBookingForm({...bookingForm, message: e.target.value})}></textarea>
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="submit" className="w-full bg-[#D4AF37] text-black py-4 uppercase text-xs tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-colors shadow-lg">
                BOOK MY RIDE
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CONTACT SECTION WITH MAP INTEGRATION */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12">
        <div>
          <span className="font-script text-3xl text-[#D4AF37]">Available 24 Hours</span>
          <h2 className="font-blackletter text-4xl md:text-6xl uppercase tracking-wider font-bold mb-8 text-white">GET IN TOUCH</h2>
          
          <div className="space-y-6 text-sm font-light text-[#C0C0C0]">
            <div>
              <p className="uppercase text-xs tracking-widest text-[#D4AF37] font-bold mb-1">Corporate Address</p>
              <p>Star Complex, Ramogi Road</p>
              <p>Kisumu, Kenya</p>
            </div>
            <div>
              <p className="uppercase text-xs tracking-widest text-[#D4AF37] font-bold mb-1">Direct Hotline</p>
              <a href="tel:0720034272" className="text-white hover:text-[#D4AF37] text-lg font-medium transition-colors">0720 034272</a>
            </div>
            <div>
              <p className="uppercase text-xs tracking-widest text-[#D4AF37] font-bold mb-1">Business Hours</p>
              <p>Open 24 Hours / 7 Days a week</p>
            </div>
          </div>
        </div>

        {/* Interactive Luxury-styled Map Frame */}
        <div className="w-full h-[350px] glass-panel p-2">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8163450917634!2d34.751!3d-0.102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDYnMDcuMiJTIDM0wrA0NScwMy42IkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske" 
            className="w-full h-full grayscale contrast-125 invert opacity-80"
            allowFullScreen="" 
            loading="lazy"
            title="Joyride Car Hire Location Map">
          </iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#000000] border-t border-white/10 py-16 px-6 md:px-12 relative z-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-blackletter text-3xl text-[#D4AF37] tracking-wider font-bold">JOYRIDE</span>
            <p className="text-[10px] text-[#C0C0C0] tracking-[0.2em] uppercase mt-2">Every Journey Deserves First-Class Service.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-4">Quick Links</h4>
            <ul className="text-xs space-y-2 text-[#C0C0C0] font-light">
              <li><a href="#about" className="hover:text-white transition-colors">About Agency</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Our Fleet Profiles</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Online Booking Desk</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-4">Services</h4>
            <ul className="text-xs space-y-2 text-[#C0C0C0] font-light">
              <li>Premium Car Rentals</li>
              <li>Airport Transfer Systems</li>
              <li>Kenya Wildlife Safaris</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 text-xs text-[#C0C0C0]">
              <span className="hover:text-white cursor-pointer">Facebook</span>
              <span className="hover:text-white cursor-pointer">Instagram</span>
              <span className="hover:text-white cursor-pointer">TikTok</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-[10px] text-[#8A8A8A] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Joyride Car Hire. Designed for Elite Standards. All Rights Reserved.
        </div>
      </footer>

      {/* WHATSAPP FLOATING CONTACT BUTTON */}
      <a 
        href="https://wa.me/254720034272?text=Hello%20Joyride%20Car%20Hire,%20I%20would%20like%20to%20book%20a%20premium%20vehicle." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
        aria-label="Contact Joyride Car Hire via WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 12.004-11.948 12.004-.006 0-.012 0-.018 0-2.009-.001-3.98-.535-5.707-1.549L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.886-6.974-1.864-1.864-4.341-2.887-6.979-2.887-5.439 0-9.862 4.42-9.866 9.86-.001 1.748.499 3.454 1.446 4.98L1.988 22.1l4.659-1.222z"/>
        </svg>
      </a>

      {/* STICKY BOOKING CTA BANNER FOR MOBILE DESKTOP HYBRID CONVERSIONS */}
      <div className="fixed bottom-0 left-0 w-full md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 z-40 flex justify-between p-3 items-center">
        <div className="text-left pl-2">
          <p className="text-[10px] uppercase text-[#D4AF37] font-bold tracking-wider">Joyride Car Hire</p>
          <p className="text-xs font-light text-white">24/7 Premium Dispatch</p>
        </div>
        <a href="#booking" className="bg-[#D4AF37] text-black text-xs font-bold px-4 py-2 uppercase tracking-wider">
          Book Instantly
        </a>
      </div>

    </div>
  );
}