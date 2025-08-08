import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const handleScheduleClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  const [activeSection, setActiveSection] = useState("about");

const sections = ["about", "journey", "services", "contact"];

useEffect(() => {
  const sections = ["about", "journey", "services", "contact"];
  const activeRef = { current: "about" as string };
  let ticking = false;

  const handleScroll = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      let next = activeRef.current;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          next = id;
          break;
        }
      }
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActiveSection(next); // only updates when it changes
      }
      ticking = false;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  // run once to set initial state
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-hero text-primary-foreground py-12 px-4 overflow-hidden">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="mb-8 animate-fade-in">          
        </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold 
               animate-fade-in-up transform-gpu will-change-transform will-change-opacity text-center">
            <span className="block mb-2 pt-2">Psychology & Psychoanalysis</span>
            <span className="block text-primary flex items-center justify-center gap-2">
                <p className="animate-pulse text-gradient-text leading-relaxed">for You</p>
            
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"
              preserveAspectRatio="xMidYMid meet" className="inline-block w-12 h-12">
              <metadata>
              Created by potrace 1.10, written by Peter Selinger 2001-2011
              </metadata>
              <g transform="translate(0,300) scale(0.1,-0.1)" fill="currentColor" stroke="currentColor" strokeWidth="20">
              <path d="M795 2976 c-257 -65 -474 -272 ..." />
              <path d="M795 2976 c-257 -65 -474 -272 -554 -529 -72 -234 -38 -481 106 -772
              38 -77 156 -251 160 -238 5 15 -5 34 -80 156 -186 301 -240 612 -151 869 28
              80 99 201 153 261 96 106 254 198 401 232 41 10 79 21 85 26 13 13 -61 10
              -120 -5z"/>
              <path d="M1075 2976 c17 -9 37 -15 45 -16 59 -2 266 -94 315 -141 12 -10 35
              -22 53 -25 25 -5 40 0 79 29 74 54 188 107 277 129 110 28 128 41 46 34 -111
              -9 -291 -89 -364 -162 -24 -25 -30 -26 -39 -14 -57 73 -259 167 -377 175 -63
              5 -64 5 -35 -9z"/>
              <path d="M2086 2981 c5 -5 43 -16 84 -26 257 -60 461 -240 549 -482 100 -276
              42 -591 -171 -920 -33 -51 -58 -100 -56 -110 3 -12 25 14 70 82 131 198 194
              356 224 560 14 94 15 124 4 205 -32 252 -149 447 -345 578 -103 68 -251 122
              -337 122 -19 0 -28 -4 -22 -9z"/>
              <path d="M852 2885 c-45 -8 -108 -31 -167 -60 -227 -112 -375 -353 -375 -612
              0 -111 16 -211 47 -303 48 -141 174 -369 216 -391 27 -15 20 2 -37 89 -44 68
              -100 174 -131 247 -40 95 -82 322 -71 377 3 13 8 47 11 77 22 208 171 408 377
              505 122 58 327 70 458 28 79 -26 173 -81 245 -145 30 -26 63 -47 74 -47 12 0
              38 15 58 33 153 134 298 191 472 186 175 -5 330 -74 451 -199 93 -97 161 -234
              175 -355 3 -27 8 -65 11 -83 7 -45 -13 -180 -43 -287 -27 -99 -89 -229 -159
              -336 -57 -88 -64 -105 -37 -90 23 12 114 155 157 246 139 294 141 586 5 810
              -86 142 -229 249 -404 301 -91 27 -268 25 -362 -4 -83 -26 -182 -80 -249 -137
              -72 -61 -74 -61 -146 -2 -172 141 -361 191 -576 152z"/>
              <path d="M1450 2311 c-54 -17 -91 -43 -116 -81 l-26 -39 -27 20 c-41 30 -118
              36 -172 12 -83 -38 -129 -104 -129 -187 0 -42 -2 -45 -31 -51 -62 -14 -129
              -109 -129 -183 0 -14 -9 -22 -29 -27 -87 -19 -159 -124 -148 -216 5 -44 4 -48
              -19 -53 -60 -15 -124 -114 -124 -192 0 -40 41 -123 79 -159 l31 -29 -176 -177
              c-164 -165 -176 -180 -170 -206 9 -34 32 -53 65 -53 20 0 65 39 197 171 l171
              171 46 -33 c116 -82 283 -21 318 115 10 40 14 44 48 50 47 7 125 74 140 119
              11 31 14 33 61 34 103 1 192 90 193 193 1 47 3 50 33 60 36 12 99 77 114 116
              24 63 4 162 -43 212 l-22 23 96 95 c85 83 100 94 132 94 27 0 41 -7 56 -26 31
              -39 26 -69 -19 -118 -43 -46 -51 -83 -25 -110 27 -26 55 -29 84 -9 54 40 95
              36 127 -11 20 -31 13 -63 -21 -100 -67 -73 6 -151 90 -96 39 26 58 25 91 -3
              43 -37 37 -77 -18 -135 -53 -55 -62 -76 -46 -105 22 -43 64 -49 105 -17 53 41
              123 8 123 -58 0 -35 -16 -53 -337 -373 -306 -304 -345 -339 -410 -371 -43 -22
              -101 -41 -145 -48 -40 -6 -82 -13 -93 -15 -32 -6 -435 -417 -435 -443 0 -30
              34 -62 67 -62 21 0 65 38 217 189 l191 190 59 10 c33 6 62 13 65 16 3 3 98
              -86 211 -199 128 -128 215 -207 232 -211 21 -5 33 -1 52 19 15 14 26 33 26 42
              0 10 -86 104 -191 210 l-191 191 49 28 c27 16 158 137 306 284 l257 255 178
              -177 c177 -177 201 -194 238 -169 14 9 34 47 34 63 0 7 -81 94 -180 194 l-180
              181 36 34 c65 63 92 161 63 237 -14 37 -67 92 -103 108 -28 12 -30 15 -27 68
              1 36 -3 68 -14 91 -23 49 -87 104 -129 112 -33 6 -36 9 -36 40 0 71 -48 138
              -123 169 -31 13 -37 20 -32 35 4 11 0 44 -9 73 -34 115 -163 178 -273 132 -36
              -15 -37 -15 -72 19 -63 60 -149 87 -211 67z m152 -76 c80 -64 92 -68 146 -50
              69 24 127 13 173 -34 35 -35 59 -90 59 -138 0 -12 13 -31 31 -45 90 -69 109
              -90 116 -132 7 -44 41 -84 104 -121 52 -31 79 -79 79 -140 0 -60 21 -95 69
              -115 68 -28 93 -165 42 -228 -55 -69 -73 -101 -66 -121 3 -12 80 -96 171 -188
              90 -92 163 -172 161 -178 -10 -30 -48 -2 -201 150 -142 139 -173 165 -198 165
              -26 0 -67 -36 -288 -252 -141 -139 -278 -272 -304 -294 -44 -39 -47 -44 -36
              -65 7 -13 88 -101 181 -195 115 -116 169 -177 169 -192 0 -12 -5 -22 -12 -22
              -7 0 -105 93 -220 206 l-207 206 -68 -7 c-37 -4 -78 -11 -92 -16 -14 -6 -106
              -91 -206 -189 -170 -169 -215 -203 -215 -163 0 24 370 391 400 396 14 3 54 10
              90 17 36 6 99 27 140 47 70 33 96 56 413 372 186 185 345 348 353 363 23 43
              17 83 -16 122 -39 44 -71 51 -131 30 -72 -26 -79 -10 -24 60 59 76 62 121 11
              172 -43 43 -80 47 -145 17 -47 -21 -57 -2 -25 52 35 61 32 109 -10 151 -27 27
              -42 34 -72 34 -22 -1 -50 -7 -64 -15 -14 -8 -31 -14 -37 -15 -22 0 -14 37 13
              69 14 17 29 43 33 58 19 70 -38 143 -111 143 -38 0 -47 -7 -144 -103 -71 -70
              -104 -110 -104 -125 0 -12 12 -40 26 -62 60 -90 38 -186 -57 -248 -52 -34 -69
              -62 -69 -115 0 -67 -76 -137 -150 -137 -44 0 -65 -13 -100 -65 -43 -62 -66
              -82 -105 -89 -35 -7 -85 -55 -85 -83 0 -31 -42 -82 -84 -102 -58 -28 -94 -26
              -161 9 -31 17 -67 30 -78 30 -14 0 -76 -55 -182 -160 -89 -88 -169 -160 -178
              -160 -41 0 -18 32 131 183 87 89 163 172 167 185 5 17 -1 34 -22 64 -62 89
              -67 101 -67 153 1 66 25 110 74 135 48 24 60 45 60 102 0 70 35 127 100 163
              55 31 64 42 97 130 13 35 28 56 52 70 64 38 91 71 91 110 0 50 33 109 75 135
              44 27 112 29 173 5 l43 -18 47 45 c63 60 77 67 144 68 50 0 62 -4 100 -35z"/>
              <path d="M1449 2215 c-38 -20 -59 -58 -59 -105 0 -35 7 -48 43 -87 38 -40 47
              -45 71 -39 38 9 126 101 126 131 0 28 -42 80 -81 100 -35 19 -66 18 -100 0z
              m117 -59 l39 -34 -55 -56 -54 -56 -32 31 c-40 39 -49 71 -29 108 27 53 76 55
              131 7z"/>
              <path d="M1109 2111 c-43 -43 -50 -81 -25 -129 22 -41 307 -320 340 -332 42
              -16 81 -4 116 36 31 36 38 72 21 116 -12 31 -309 328 -339 339 -45 17 -73 10
              -113 -30z m262 -157 c90 -90 159 -166 162 -180 6 -31 -12 -65 -44 -83 -42 -24
              -74 -2 -233 158 -130 131 -146 151 -146 181 0 44 33 80 74 80 25 0 54 -24 187
              -156z"/>
              <path d="M969 1893 c-34 -21 -59 -63 -59 -101 0 -41 37 -87 196 -243 153 -150
              176 -163 238 -134 60 29 84 86 60 144 -15 37 -241 272 -308 322 -44 33 -87 37
              -127 12z m249 -186 c89 -90 162 -171 162 -180 0 -9 -5 -27 -11 -40 -11 -25
              -47 -47 -76 -47 -9 0 -90 73 -180 162 -138 137 -163 167 -163 192 0 40 35 76
              75 76 27 0 53 -22 193 -163z"/>
              <path d="M792 1676 c-31 -17 -62 -65 -62 -97 0 -48 99 -167 233 -280 49 -41
              65 -49 99 -49 32 0 47 7 74 34 38 38 45 86 20 134 -17 32 -232 245 -263 261
              -29 14 -72 13 -101 -3z m214 -149 c72 -72 125 -134 129 -150 13 -50 -38 -99
              -91 -89 -12 2 -79 61 -148 131 -108 109 -126 132 -126 159 0 43 30 72 77 72
              33 0 47 -10 159 -123z"/>
              <path d="M632 1400 c-38 -38 -47 -78 -29 -121 8 -19 60 -78 115 -131 93 -91
              104 -98 141 -98 48 0 95 35 111 84 17 52 -4 88 -117 199 -97 94 -102 97 -146
              97 -37 0 -51 -5 -75 -30z m211 -109 c105 -106 114 -127 76 -175 -15 -19 -30
              -26 -56 -26 -32 0 -47 11 -130 92 -51 51 -96 103 -99 115 -15 56 32 109 86 97
              14 -3 68 -48 123 -103z"/>
              </g>
              </svg>
            </span>
          </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 font-light 
              ">
          Compassion, professionalism, and commitment in every session.
        </p>
        <Button 
          onClick={handleScheduleClick}
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-secondary-foreground/80 hover:text-secondary 
             px-8 py-3 text-lg font-medium shadow-soft transition-all duration-300 hover:shadow-card hover:scale-105 
              [animation-delay:0.4s] transform-gpu will-change-transform will-change-opacity">
          Book a Session
        </Button>
        
      </div>
     {/* Desktop Navigation (your original styles) */}
    <nav className="hidden md:block fixed top-3 left-1/2 -translate-x-1/2 bg-white/60 backdrop-blur-md rounded-full shadow-md px-6  py-2 z-50 border border-gray-200">
    <ul className="flex gap-10 text-text-calm font-medium text-sm md:text-base">
    <li>
      <a href="#about" className={`transition-colors duration-300 ${activeSection === "about" ? "text-primary font-semibold" : "text-text-calm"}`}>About</a>
    </li>
    <li>
      <a href="#journey" className={`transition-colors duration-300 ${activeSection === "journey" ? "text-primary font-semibold" : "text-text-calm"}`}>Journey</a>
    </li>
    <li>
      <a href="#services" className={`transition-colors duration-300 ${activeSection === "services" ? "text-primary font-semibold" : "text-text-calm"}`}>Services</a>
    </li>
    <li>
      <a href="#contact" className={`transition-colors duration-300 ${activeSection === "contact" ? "text-primary font-semibold" : "text-text-calm"}`}>Contact</a>
    </li>
  </ul>
</nav>

    {/* Mobile Menu Button */}
    <div className="md:hidden fixed top-3 right-4 z-50">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="bg-white/60 backdrop-blur-md rounded-full p-2 shadow-md border border-gray-200"
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? (
          // Close icon
          <svg className="w-6 h-6 text-text-calm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg className="w-6 h-6 text-text-calm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav className="md:hidden fixed top-16 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-lg rounded-xl px-6 py-4 text-center z-50 border border-gray-200 w-[90%] max-w-xs">
          <ul className="space-y-4 text-text-calm font-medium text-base">
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={`block ${activeSection === "about" ? "text-primary font-semibold" : ""}`}>About</a></li>
            <li><a href="#journey" onClick={() => setIsMobileMenuOpen(false)} className={`block ${activeSection === "journey" ? "text-primary font-semibold" : ""}`}>Journey</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)} className={`block ${activeSection === "services" ? "text-primary font-semibold" : ""}`}>Services</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className={`block ${activeSection === "contact" ? "text-primary font-semibold" : ""}`}>Contact</a></li>
          </ul>
        </nav>
      )}

    </header>
  );
};

export default Header;