<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joyride Universal Agency | Premium Transport Kenya</title>
    <meta name="description" content="Luxury car hire, taxi services, and airport transfers in Kisumu, Nairobi, and Mombasa.">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        navy: '#0D1B2A',
                        gold: '#D4AF37',
                        silver: '#C0C0C0',
                        dark: '#000000',
                    },
                    fontFamily: {
                        serif: ['"Times New Roman"', 'Times', 'serif'],
                        script: ['"Alex Brush"', 'cursive'],
                        heading: ['"Permanent Marker"', 'cursive'],
                    },
                    backgroundImage: {
                        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                    }
                }
            }
        }
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Permanent+Marker&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <style>
        body { 
            background-color: #000000; 
            color: #FFFFFF; 
            overflow-x: hidden;
            background-image: radial-gradient(circle at 50% 0%, #0D1B2A 0%, #000000 70%);
        }
        
        /* Glassmorphism Utilities */
        .glass-nav { 
            background: rgba(0, 0, 0, 0.8); 
            backdrop-filter: blur(16px); 
            -webkit-backdrop-filter: blur(16px); 
            border-bottom: 1px solid rgba(212, 175, 55, 0.1); 
        }
        
        .glass-card { 
            background: rgba(13, 27, 42, 0.4);
            backdrop-filter: blur(12px); 
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.08); 
            border-radius: 1rem; 
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }
        
        .glass-card:hover { 
            transform: translateY(-5px); 
            border-color: rgba(212, 175, 55, 0.5); 
            box-shadow: 0 10px 40px rgba(212, 175, 55, 0.15);
        }

        .glass-input {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            backdrop-filter: blur(4px);
            transition: all 0.3s ease;
        }

        .glass-input:focus {
            outline: none;
            border-color: #D4AF37;
            background: rgba(255, 255, 255, 0.08);
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #000000; }
        ::-webkit-scrollbar-thumb { background: #0D1B2A; border-radius: 4px; border: 1px solid #D4AF37; }
        ::-webkit-scrollbar-thumb:hover { background: #D4AF37; }

        .text-gradient {
            background: linear-gradient(to right, #C0C0C0, #D4AF37, #FFFFFF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-bg {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: url('https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat;
            opacity: 0.4;
            z-index: 0;
        }
        
        .hero-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, #000000 100%);
            z-index: 0;
        }
    </style>
</head>
<body class="font-serif antialiased selection:bg-gold selection:text-black relative">

    <div id="cursor-glow" class="fixed w-96 h-96 bg-gold rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2"></div>

    <nav class="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar">
        <div class="bg-black/60 border-b border-white/10 py-2 px-6 md:px-12 text-[11px] text-silver tracking-widest hidden sm:flex justify-between items-center text-xs">
            <div class="flex flex-wrap gap-x-6 gap-y-1">
                <span><i class="fas fa-map-marker-alt text-gold mr-1.5"></i><strong>Nairobi:</strong> Moi Avenue</span>
                <span><i class="fas fa-map-marker-alt text-gold mr-1.5"></i><strong>Mombasa:</strong> TOFIQ Building, NAIVAS Mwembe</span>
                <span><i class="fas fa-map-marker-alt text-gold mr-1.5"></i><strong>Kisumu:</strong> Star Complex</span>
            </div>
            <div class="hidden md:block">
                <span><i class="fas fa-phone-alt text-gold mr-1.5"></i> Hotline: 0720 034272</span>
            </div>
        </div>

        <div class="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 md:px-12">
            <div class="flex items-center space-x-3">
                <img src="joyrides.jpeg" alt="Joyride Universal Agency Logo" class="w-12 h-12 object-cover rounded-full border border-gold/40 shadow-md">
                <div class="flex flex-col">
                    <h1 class="font-heading text-2xl md:text-3xl text-gold font-bold tracking-wider leading-none">Joyride</h1>
                    <span class="text-[9px] text-silver tracking-[0.2em] font-sans font-semibold">UNIVERSAL AGENCY</span>
                </div>
            </div>
            <div class="hidden md:flex space-x-8 text-sm font-semibold tracking-widest text-silver">
                <a href="#home" class="hover:text-gold transition">HOME</a>
                <a href="#about" class="hover:text-gold transition">ABOUT</a>
                <a href="#services" class="hover:text-gold transition">SERVICES</a>
                <a href="#fleet" class="hover:text-gold transition">FLEET</a>
                <a href="#contact" class="hover:text-gold transition">CONTACT</a>
            </div>
            <a href="#book" class="hidden md:inline-block border border-gold text-gold px-6 py-2 hover:bg-gold hover:text-black transition duration-300 font-semibold tracking-wider text-sm rounded-sm backdrop-blur-sm">BOOK A RIDE</a>
            
            <button class="md:hidden text-gold text-2xl">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>

    <a href="https://wa.me/254720034272" target="_blank" class="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform cursor-pointer">
        <i class="fab fa-whatsapp"></i>
    </a>

    <section id="home" class="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden">
        <div class="hero-bg"></div>
        <div class="hero-overlay"></div>
        
        <div class="relative z-10 text-center px-4 max-w-5xl mx-auto gs-reveal">
            <p class="font-script text-4xl md:text-5xl text-gold mb-4">Kenya's Elite Travel Network</p>
            <h2 class="font-heading text-5xl md:text-8xl font-bold mb-6 tracking-wide text-white uppercase" style="text-shadow: 0 10px 30px rgba(0,0,0,0.8);">
                JOYRIDE <br><span class="text-gradient">UNIVERSAL</span>
            </h2>
            <p class="font-serif text-lg md:text-xl text-silver mb-10 tracking-wide font-light max-w-2xl mx-auto">
                Premium Car Hire • Taxi Services • Tours & Travels • Cross-Country Executive Transfers
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#book" class="bg-gold text-black px-8 py-4 font-bold tracking-widest hover:bg-white transition duration-300 rounded-sm">BOOK A RIDE</a>
                <a href="tel:0720034272" class="border border-silver text-silver px-8 py-4 font-bold tracking-widest hover:border-gold hover:text-gold transition duration-300 rounded-sm glass">CALL NOW</a>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-white/10 pt-10">
                <div class="stat-item">
                    <h3 class="text-3xl md:text-4xl font-bold text-gold mb-1">1000<span class="text-xl">+</span></h3>
                    <p class="text-xs tracking-widest text-silver uppercase">Successful Trips</p>
                </div>
                <div class="stat-item">
                    <h3 class="text-3xl md:text-4xl font-bold text-gold mb-1">24/7</h3>
                    <p class="text-xs tracking-widest text-silver uppercase">Availability</p>
                </div>
                <div class="stat-item">
                    <h3 class="text-3xl md:text-4xl font-bold text-gold mb-1">4.0<span class="text-xl text-yellow-400">★</span></h3>
                    <p class="text-xs tracking-widest text-silver uppercase">Customer Rating</p>
                </div>
                <div class="stat-item">
                    <h3 class="text-3xl md:text-4xl font-bold text-gold mb-1">100<span class="text-xl">%</span></h3>
                    <p class="text-xs tracking-widest text-silver uppercase">Customer Support</p>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="py-24 relative z-10 px-6">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div class="gs-reveal-left relative">
                <div class="absolute -top-10 -left-10 w-32 h-32 bg-gold opacity-10 rounded-full blur-2xl"></div>
                <h2 class="font-heading text-4xl md:text-5xl text-white mb-4 tracking-wider uppercase font-bold">About Joyride</h2>
                <h3 class="font-script text-3xl text-gold mb-6">Your Journey, Our Passion</h3>
                <p class="text-silver leading-relaxed mb-6 font-light">
                    Joyride Universal Agency is a prominent transport, tours, and luxury travel system dynamically operational across Kenya with custom logistics facilities stationed in Kisumu, Nairobi, and Mombasa. We provide premium taxi frameworks, top-tier corporate car rentals, safe airport transfers, and bespoke tour modules.
                </p>
                <p class="text-silver leading-relaxed font-light">
                    Available 24 hours a day, we match state-of-the-art vehicle management with well-trained professional drivers to offer first-class corporate and individual travel experiences.
                </p>
            </div>
            <div class="gs-reveal-right relative">
                <div class="glass-card p-2 rounded-xl">
                    <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" alt="Luxury Travel" class="w-full rounded-lg filter grayscale hover:grayscale-0 transition duration-700">
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="py-24 relative z-10 bg-navy/20 px-6 border-y border-white/5">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16 gs-reveal">
                <h2 class="font-heading text-4xl md:text-5xl text-white mb-2 tracking-wider uppercase font-bold">Our Services</h2>
                <p class="font-script text-3xl text-gold">Luxury Journeys Begin Here</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="glass-card p-8 gs-stagger">
                    <i class="fas fa-car text-4xl text-gold mb-6"></i>
                    <h3 class="text-xl font-bold mb-3 tracking-wide uppercase">Car Hire</h3>
                    <p class="text-silver font-light text-sm leading-relaxed">Luxury and economy vehicle rentals for business, leisure, and personal travel.</p>
                </div>
                <div class="glass-card p-8 gs-stagger">
                    <i class="fas fa-taxi text-4xl text-gold mb-6"></i>
                    <h3 class="text-xl font-bold mb-3 tracking-wide uppercase">Taxi Services</h3>
                    <p class="text-silver font-light text-sm leading-relaxed">Fast and reliable transportation available 24/7 throughout our municipal networks.</p>
                </div>
                <div class="glass-card p-8 gs-stagger">
                    <i class="fas fa-plane-arrival text-4xl text-gold mb-6"></i>
                    <h3 class="text-xl font-bold mb-3 tracking-wide uppercase">Airport Transfers</h3>
                    <p class="text-silver font-light text-sm leading-relaxed">Professional airport pickups and drop-offs at JKIA, Moi International, and Kisumu International Airports.</p>
                </div>
                <div class="glass-card p-8 gs-stagger">
                    <i class="fas fa-map-marked-alt text-4xl text-gold mb-6"></i>
                    <h3 class="text-xl font-bold mb-3 tracking-wide uppercase">Tours & Travel</h3>
                    <p class="text-silver font-light text-sm leading-relaxed">Customized tours across Kenya including wildlife safaris, lakeside adventures, and cultural experiences.</p>
                </div>
                <div class="glass-card p-8 gs-stagger">
                    <i class="fas fa-user-tie text-4xl text-gold mb-6"></i>
                    <h3 class="text-xl font-bold mb-3 tracking-wide uppercase">Corporate Transport</h3>
                    <p class="text-silver font-light text-sm leading-relaxed">Business travel solutions for executives, diplomatic teams, and corporate events.</p>
                </div>
                <div class="glass-card p-8 gs-stagger">
                    <i class="fas fa-id-card text-4xl text-gold mb-6"></i>
                    <h3 class="text-xl font-bold mb-3 tracking-wide uppercase">Chauffeur Services</h3>
                    <p class="text-silver font-light text-sm leading-relaxed">Professional drivers providing top-tier comfort, safety, and local terrain expertise.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="fleet" class="py-24 relative z-10 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16 gs-reveal">
                <h2 class="font-heading text-4xl md:text-5xl text-white mb-2 tracking-wider uppercase font-bold">Premium Fleet</h2>
                <p class="font-script text-3xl text-gold">Ride Beyond Expectations</p>
                <p class="text-sm text-silver mt-4 max-w-2xl mx-auto italic">*Note: Placeholder images are currently in use. Please use the Admin panel below to upload actual photos from your gallery.</p>
            </div>

            <div id="fleet-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>

            <div class="mt-16 text-center gs-reveal">
                <button onclick="toggleVehicleForm()" class="border-2 border-gold text-gold px-8 py-3 font-bold text-sm tracking-widest hover:bg-gold hover:text-black transition-all duration-300 rounded-sm shadow-md uppercase">
                    <i class="fas fa-plus-circle mr-2"></i> Add New Vehicle From Gallery
                </button>
            </div>

            <div id="add-vehicle-panel" class="max-w-3xl mx-auto mt-8 hidden glass-card p-8 border border-gold/20">
                <h3 class="font-heading text-2xl text-center text-white mb-6 tracking-wide uppercase">Register Vehicle Specifications</h3>
                <form id="fleet-admin-form" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col space-y-1">
                        <label class="text-xs uppercase tracking-widest text-silver font-semibold">Vehicle Title / Make</label>
                        <input type="text" id="admin-name" required placeholder="e.g., Toyota Prado J150" class="glass-input px-4 py-2.5 rounded-sm text-sm">
                    </div>
                    <div class="flex flex-col space-y-1">
                        <label class="text-xs uppercase tracking-widest text-silver font-semibold">Model Specific Variant / Edition</label>
                        <input type="text" id="admin-type" required placeholder="e.g., 2017 Luxury Edition" class="glass-input px-4 py-2.5 rounded-sm text-sm">
                    </div>
                    <div class="flex flex-col space-y-1">
                        <label class="text-xs uppercase tracking-widest text-silver font-semibold">Max Passengers</label>
                        <input type="number" id="admin-pass" required placeholder="e.g., 7" class="glass-input px-4 py-2.5 rounded-sm text-sm">
                    </div>
                    <div class="flex flex-col space-y-1">
                        <label class="text-xs uppercase tracking-widest text-silver font-semibold">Transmission Type</label>
                        <select id="admin-auto" class="glass-input px-4 py-2.5 rounded-sm text-sm bg-black/90">
                            <option value="true">Automatic</option>
                            <option value="false">Manual</option>
                        </select>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <label class="text-xs uppercase tracking-widest text-silver font-semibold">Climate System</label>
                        <select id="admin-ac" class="glass-input px-4 py-2.5 rounded-sm text-sm bg-black/90">
                            <option value="true">Air Conditioned (A/C)</option>
                            <option value="false">Standard Climate</option>
                        </select>
                    </div>
                    
                    <div class="flex flex-col space-y-1">
                        <label class="text-xs uppercase tracking-widest text-silver font-semibold">Upload Vehicle Image</label>
                        <input type="file" id="admin-img" accept="image/*" class="glass-input px-4 py-2 rounded-sm text-sm text-silver file:mr-4 file:py-1 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-bold file:tracking-wider file:uppercase file:bg-gold file:text-black hover:file:bg-white transition-all cursor-pointer">
                    </div>

                    <div class="md:col-span-2 pt-4">
                        <button type="submit" class="w-full bg-gold text-black font-bold tracking-widest py-3.5 hover:bg-white transition-all duration-300 rounded-sm uppercase text-sm">
                            Commit New Fleet Unit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <section class="py-24 relative z-10 bg-navy/20 px-6 border-y border-white/5">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div class="gs-reveal-left">
                <h2 class="font-heading text-4xl text-white mb-8 tracking-wider uppercase font-bold">Why Choose Us</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div class="glass-card p-4 flex items-center space-x-3">
                        <i class="fas fa-check-circle text-gold text-xl"></i>
                        <span class="text-sm font-semibold tracking-wide text-silver">Available 24/7</span>
                    </div>
                    <div class="glass-card p-4 flex items-center space-x-3">
                        <i class="fas fa-check-circle text-gold text-xl"></i>
                        <span class="text-sm font-semibold tracking-wide text-silver">Professional Drivers</span>
                    </div>
                    <div class="glass-card p-4 flex items-center space-x-3">
                        <i class="fas fa-check-circle text-gold text-xl"></i>
                        <span class="text-sm font-semibold tracking-wide text-silver">Affordable Rates</span>
                    </div>
                    <div class="glass-card p-4 flex items-center space-x-3">
                        <i class="fas fa-check-circle text-gold text-xl"></i>
                        <span class="text-sm font-semibold tracking-wide text-silver">Safe & Secure Travel</span>
                    </div>
                    <div class="glass-card p-4 flex items-center space-x-3">
                        <i class="fas fa-check-circle text-gold text-xl"></i>
                        <span class="text-sm font-semibold tracking-wide text-silver">Luxury Fleet</span>
                    </div>
                    <div class="glass-card p-4 flex items-center space-x-3">
                        <i class="fas fa-check-circle text-gold text-xl"></i>
                        <span class="text-sm font-semibold tracking-wide text-silver">Fast Booking Process</span>
                    </div>
                </div>
            </div>

            <div class="gs-reveal-right flex flex-col justify-center">
                <h2 class="font-heading text-4xl text-white mb-2 tracking-wider uppercase font-bold">Testimonials</h2>
                <div class="flex items-center space-x-2 mb-8">
                    <div class="text-gold text-xl">★★★★☆</div>
                    <span class="text-silver text-sm">4.0 Rating • Trusted Across Kenya</span>
                </div>

                <div class="space-y-6">
                    <div class="glass-card p-6 relative">
                        <i class="fas fa-quote-left absolute top-4 right-6 text-3xl text-white/5"></i>
                        <p class="text-lg font-light italic text-silver mb-4">"You're better."</p>
                        <h4 class="text-gold font-bold tracking-wider uppercase text-sm">— Kevin Menya</h4>
                    </div>
                    <div class="glass-card p-6 relative">
                        <i class="fas fa-quote-left absolute top-4 right-6 text-3xl text-white/5"></i>
                        <p class="text-lg font-light italic text-silver mb-4">"Good job."</p>
                        <h4 class="text-gold font-bold tracking-wider uppercase text-sm">— Paul Ndege</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="book" class="py-24 relative z-10 px-6">
        <div class="max-w-4xl mx-auto gs-reveal">
            <div class="glass-card p-8 md:p-12 relative overflow-hidden">
                <div class="absolute -top-20 -right-20 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div class="text-center mb-10">
                    <h2 class="font-heading text-4xl md:text-5xl text-white mb-2 tracking-wider uppercase font-bold">Reserve Your Ride</h2>
                    <p class="font-script text-2xl text-gold">Fast, Secure, and Reliable</p>
                </div>

                <form id="booking-form" class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <div class="space-y-1">
                        <label class="text-xs tracking-widest text-silver uppercase ml-1">Full Name *</label>
                        <input type="text" id="book-name" required class="w-full glass-input px-4 py-3 rounded-sm" placeholder="John Doe">
                    </div>
                    <div class="space-y-1">
                        <label class="text-xs tracking-widest text-silver uppercase ml-1">Phone Number *</label>
                        <input type="tel" id="book-phone" required class="w-full glass-input px-4 py-3 rounded-sm" placeholder="+254 7XX XXX XXX">
                    </div>
                    <div class="space-y-1 md:col-span-2">
                        <label class="text-xs tracking-widest text-silver uppercase ml-1">Email Address</label>
                        <input type="email" id="book-email" class="w-full glass-input px-4 py-3 rounded-sm" placeholder="john@example.com">
                    </div>
                    <div class="space-y-1">
                        <label class="text-xs tracking-widest text-silver uppercase ml-1">Pickup Location *</label>
                        <input type="text" id="book-pickup" required class="w-full glass-input px-4 py-3 rounded-sm" placeholder="E.g. Jomo Kenyatta Airport">
                    </div>
                    <div class="space-y-1">
                        <label class="text-xs tracking-widest text-silver uppercase ml-1">Destination *</label>
                        <input type="text" id="book-dest" required class="w-full glass-input px-4 py-3 rounded-sm" placeholder="E.g. Star Complex Kisumu">
                    </div>
                    <div class="space-y-1">
                        <label class="text-xs tracking-widest text-silver uppercase ml-1">Service Type</label>
                        <select id="book-service" class="w-full glass-input px-4 py-3 rounded-sm text-silver appearance-none bg-black/50">
                            <option value="Airport Transfer">Airport Transfer</option>
                            <option value="Taxi Service">Taxi Service</option>
                            <option value="Car Hire">Car Hire</option>
                            <option value="Corporate Transport">Corporate Transport</option>
                            <option value="Tour Package">Tour Package</option>
                        </select>
                    </div>
                    <div class="space-y-1">
                        <label class="text-xs tracking-widest text-silver uppercase ml-1">Vehicle Preference</label>
                        <select id="book-vehicle" class="w-full glass-input px-4 py-3 rounded-sm text-silver appearance-none bg-black/50">
                            <option value="Toyota Land Cruiser 200 (V8ZX)">Toyota Land Cruiser 200 (V8ZX)</option>
                            <option value="Land Cruiser Prado J150">Land Cruiser Prado J150</option>
                            <option value="Toyota Alphard Vellfire">Toyota Alphard Vellfire</option>
                            <option value="Mazda CX-5">Mazda CX-5</option>
                            <option value="Toyota Harrier">Toyota Harrier</option>
                            <option value="Any Available Economy Sedan/Wagon">Any Available Economy Sedan/Wagon</option>
                        </select>
                    </div>
                    <div class="space-y-1 md:col-span-2">
                        <label class="text-xs tracking-widest text-silver uppercase ml-1">Travel Date & Time</label>
                        <input type="datetime-local" id="book-datetime" class="w-full glass-input px-4 py-3 rounded-sm text-silver bg-black/50">
                    </div>
                    <div class="space-y-1 md:col-span-2">
                        <label class="text-xs tracking-widest text-silver uppercase ml-1">Additional Message</label>
                        <textarea id="book-notes" class="w-full glass-input px-4 py-3 rounded-sm h-24 resize-none" placeholder="Special requirements..."></textarea>
                    </div>
                    
                    <button type="button" onclick="sendWhatsAppBooking()" class="md:col-span-2 bg-gold text-black font-bold tracking-widest py-4 mt-4 hover:bg-white transition duration-300 rounded-sm uppercase text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center">
                        <i class="fab fa-whatsapp text-2xl mr-3"></i> Book My Ride on WhatsApp
                    </button>
                </form>
            </div>
        </div>
    </section>

    <section id="contact" class="py-24 relative z-10 px-6 border-t border-white/5 bg-black">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div class="gs-reveal-left">
                <h2 class="font-heading text-4xl text-white mb-2 tracking-wider uppercase font-bold">Get In Touch</h2>
                <p class="text-silver mb-10 font-light">We are here to assist you 24/7 across our dynamic service locations.</p>
                
                <div class="space-y-8">
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 glass-card flex items-center justify-center rounded-full text-gold shrink-0">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold tracking-wider uppercase text-sm mb-2">Our Corporate Offices</h4>
                            <ul class="text-silver text-sm font-light space-y-3 leading-relaxed">
                                <li><strong class="text-gold uppercase tracking-wider text-xs block">Kisumu Head Office:</strong> Star Complex, Ramogi Road</li>
                                <li><strong class="text-gold uppercase tracking-wider text-xs block">Nairobi Branch:</strong> Moi Avenue</li>
                                <li><strong class="text-gold uppercase tracking-wider text-xs block">Mombasa Branch:</strong> TOFIQ Building, NAIVAS Mwembe</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 glass-card flex items-center justify-center rounded-full text-gold shrink-0">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold tracking-wider uppercase text-sm mb-1">Call Us</h4>
                            <p class="text-gold text-lg tracking-widest">0720 034272</p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 glass-card flex items-center justify-center rounded-full text-gold shrink-0">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold tracking-wider uppercase text-sm mb-1">Business Hours</h4>
                            <p class="text-silver text-sm font-light">Open 24 Hours / 7 Days a week</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="gs-reveal-right h-96 lg:h-auto glass-card overflow-hidden p-2">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.814980637151!2d34.7679!3d-0.0917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa4d4!2sKisumu%2C%20Kenya!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s" 
                    width="100%" height="100%" style="border:0; border-radius: 0.5rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>

    <footer class="bg-[#050A0F] py-16 relative z-10 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
                <div class="flex items-center space-x-3 mb-6">
                    <img src="joyrides.jpeg" alt="Joyride Logo" class="w-10 h-10 object-cover rounded-full border border-gold/40">
                    <h1 class="font-heading text-xl text-gold font-bold tracking-wider uppercase">JOYRIDE</h1>
                </div>
                <p class="text-silver text-sm font-light leading-relaxed mb-6">Premium agency solutions across Kenya. Safe, reliable, and premium tailored fleet experiences.</p>
                <div class="flex space-x-4">
                    <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver hover:text-gold hover:border-gold transition"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver hover:text-gold hover:border-gold transition"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver hover:text-gold hover:border-gold transition"><i class="fab fa-tiktok"></i></a>
                    <a href="https://wa.me/254720034272" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver hover:text-gold hover:border-gold transition"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
            
            <div>
                <h4 class="text-white font-bold tracking-wider uppercase text-sm mb-6">Quick Links</h4>
                <ul class="space-y-3 text-silver text-sm font-light">
                    <li><a href="#home" class="hover:text-gold transition">Home</a></li>
                    <li><a href="#about" class="hover:text-gold transition">About Us</a></li>
                    <li><a href="#fleet" class="hover:text-gold transition">Our Fleet</a></li>
                    <li><a href="#contact" class="hover:text-gold transition">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-white font-bold tracking-wider uppercase text-sm mb-6">Services</h4>
                <ul class="space-y-3 text-silver text-sm font-light">
                    <li><a href="#services" class="hover:text-gold transition">Car Hire</a></li>
                    <li><a href="#services" class="hover:text-gold transition">Taxi Services</a></li>
                    <li><a href="#services" class="hover:text-gold transition">Airport Transfers</a></li>
                    <li><a href="#services" class="hover:text-gold transition">Tours & Travel</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-white font-bold tracking-wider uppercase text-sm mb-6">Newsletter</h4>
                <p class="text-silver text-sm font-light mb-4">Subscribe for offers and travel updates.</p>
                <div class="flex">
                    <input type="email" placeholder="Email Address" class="glass-input px-4 py-2 w-full text-sm rounded-l-sm">
                    <button class="bg-gold text-black px-4 py-2 text-sm font-bold rounded-r-sm"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center flex flex-col items-center">
            <p class="font-script text-2xl text-gold mb-4">"Every Journey Deserves First-Class Service."</p>
            <p class="text-white/30 text-xs tracking-widest uppercase">© 2026 Joyride Universal Agency. All Rights Reserved.</p>
        </div>
    </footer>

    <script>
        // WhatsApp Booking Logic
        function sendWhatsAppBooking() {
            // Get form values
            const name = document.getElementById('book-name').value;
            const phone = document.getElementById('book-phone').value;
            const email = document.getElementById('book-email').value;
            const pickup = document.getElementById('book-pickup').value;
            const dest = document.getElementById('book-dest').value;
            const service = document.getElementById('book-service').value;
            const vehicle = document.getElementById('book-vehicle').value;
            const datetime = document.getElementById('book-datetime').value;
            const notes = document.getElementById('book-notes').value;

            // Basic Validation
            if (!name || !phone || !pickup || !dest) {
                alert("Please fill in your Name, Phone Number, Pickup Location, and Destination to book a ride.");
                return;
            }

            // Construct WhatsApp Message Structure
            const message = `*NEW BOOKING REQUEST*%0A
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email || 'Not Provided'}
*Pickup:* ${pickup}
*Destination:* ${dest}
*Service:* ${service}
*Vehicle:* ${vehicle}
*Date & Time:* ${datetime || 'ASAP'}
*Notes:* ${notes || 'None'}`;

            // Redirect to WhatsApp API
            const whatsappNumber = "254720034272";
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
            
            window.open(whatsappURL, '_blank');
        }

        // Core Fleet Database Structure
        const fleet = [
            { name: "Toyota Axio E160", type: "2019 Model", pass: 5, auto: true, ac: true, img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" },
            { name: "Toyota Fielder", type: "Corolla Station Wagon", pass: 5, auto: true, ac: true, img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=2070&auto=format&fit=crop" },
            { name: "Toyota Corolla E160", type: "11th Gen Series", pass: 5, auto: true, ac: true, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2070&auto=format&fit=crop" },
            { name: "Toyota RAV4 2WD", type: "2.4L 2012 Model", pass: 5, auto: true, ac: true, img: "https://images.unsplash.com/photo-1621007947382-cc34cf866f5a?q=80&w=2070&auto=format&fit=crop" },
            { name: "Toyota Harrier", type: "2019 Model", pass: 5, auto: true, ac: true, img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop" },
            { name: "Toyota Vanguard SUV", type: "2013 170HP Edition", pass: 7, auto: true, ac: true, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop" },
            { name: "Toyota Alphard Vellfire", type: "2021 Luxury Model", pass: 7, auto: true, ac: true, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" },
            { name: "Mazda CX-5", type: "Compact Crossover 2021", pass: 5, auto: true, ac: true, img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" },
            { name: "Land Cruiser Prado", type: "J150 Series 2017 Model", pass: 7, auto: true, ac: true, img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop" },
            { name: "Toyota Land Cruiser 200", type: "Series (V8ZX) 2017 Model", pass: 8, auto: true, ac: true, img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2070&auto=format&fit=crop" },
            { name: "Toyota HiAce H200", type: "Passenger Van Generation", pass: 14, auto: true, ac: true, img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop" },
            { name: "Mitsubishi Fuso Rosa", type: "Minibus Commercial Model", pass: 28, auto: false, ac: true, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070&auto=format&fit=crop" }
        ];

        // Dynamic Fleet UI Rendering Engine
        function renderFleet() {
            const fleetContainer = document.getElementById('fleet-container');
            if(!fleetContainer) return;
            
            let fleetHTML = '';
            fleet.forEach((car) => {
                fleetHTML += `
                    <div class="glass-card overflow-hidden group gs-stagger">
                        <div class="h-56 overflow-hidden relative bg-black">
                            <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500 z-10"></div>
                            <img src="${car.img}" alt="${car.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                        </div>
                        <div class="p-6">
                            <h3 class="text-2xl font-bold mb-1 font-heading tracking-wide uppercase">${car.name}</h3>
                            <p class="text-gold text-xs tracking-widest mb-4 uppercase font-sans font-semibold">${car.type}</p>
                            
                            <div class="grid grid-cols-2 gap-y-2 text-sm text-silver mb-6">
                                <div class="flex items-center"><i class="fas fa-users w-6 text-gold"></i> ${car.pass} Seats</div>
                                <div class="flex items-center"><i class="fas fa-snowflake w-6 text-gold"></i> ${car.ac ? 'A/C' : 'No A/C'}</div>
                                <div class="flex items-center"><i class="fas fa-cogs w-6 text-gold"></i> ${car.auto ? 'Auto' : 'Manual'}</div>
                                <div class="flex items-center"><i class="fas fa-tag w-6 text-gold"></i> Premium Rate</div>
                            </div>
                            
                            <a href="#book" class="block text-center border border-white/20 py-2 hover:bg-gold hover:border-gold hover:text-black transition duration-300 rounded font-semibold tracking-wider text-sm uppercase">Book Now</a>
                        </div>
                    </div>
                `;
            });
            fleetContainer.innerHTML = fleetHTML;
        }

        // Toggle Visibility for Admin Panel Form
        function toggleVehicleForm() {
            const panel = document.getElementById('add-vehicle-panel');
            panel.classList.toggle('hidden');
            if(!panel.classList.contains('hidden')) {
                panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        // Form Submission with FileReader for Local Gallery Uploads
        document.getElementById('fleet-admin-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('admin-name').value;
            const type = document.getElementById('admin-type').value;
            const pass = parseInt(document.getElementById('admin-pass').value) || 5;
            const auto = document.getElementById('admin-auto').value === "true";
            const ac = document.getElementById('admin-ac').value === "true";
            const fileInput = document.getElementById('admin-img');

            if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    fleet.push({ name, type, pass, auto, ac, img: event.target.result });
                    renderFleet();
                };
                reader.readAsDataURL(fileInput.files[0]);
            } else {
                fleet.push({ 
                    name, type, pass, auto, ac, 
                    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop" 
                });
                renderFleet();
            }
            
            this.reset();
            toggleVehicleForm();
        });

        // Initialize App View
        renderFleet();

        // Custom Mouse Cursor Glow Effect
        const cursor = document.getElementById('cursor-glow');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // GSAP Animations Engine
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".hero-bg", { scale: 1.1, duration: 2, ease: "power2.out" });
        gsap.from(".gs-reveal", { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 });

        gsap.utils.toArray('.gs-reveal-left').forEach(elem => {
            gsap.from(elem, { scrollTrigger: { trigger: elem, start: "top 80%" }, x: -50, opacity: 0, duration: 1, ease: "power3.out" });
        });

        gsap.utils.toArray('.gs-reveal-right').forEach(elem => {
            gsap.from(elem, { scrollTrigger: { trigger: elem, start: "top 80%" }, x: 50, opacity: 0, duration: 1, ease: "power3.out" });
        });

        gsap.utils.toArray('.gs-stagger').forEach((elem, i) => {
            gsap.from(elem, { scrollTrigger: { trigger: elem.parentElement, start: "top 85%" }, y: 30, opacity: 0, duration: 0.8, delay: (i % 3) * 0.15, ease: "power2.out" });
        });

        // Sticky Navbar Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) nav.style.background = "rgba(0, 0, 0, 0.95)";
            else nav.style.background = "rgba(0, 0, 0, 0.8)";
        });
    </script>
</body>
</html>
