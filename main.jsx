import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Menu as MenuIcon, X, ArrowUpRight, MapPin, Phone, Clock3, Instagram, Star, Coffee, Utensils, ChevronDown } from 'lucide-react';
import './styles.css';

const menuItems = {
  Coffee: [
    ['Coffee Extraction Full Creama', 'Signature coffee', 'Ask'],
    ['Espresso', 'A classic espresso shot', 'Ask'],
    ['Latte Art Cappuccino Mochaccino', 'Coffeehouse favorites', 'Ask'],
    ['Hot Mochaccino', 'Chocolate and espresso', 'Ask'],
    ['Combo Croissant Sandwich', 'Cafe combo', 'Ask'],
    ['Cake', 'Ask about today’s selection', 'Ask'],
    ['Crêpe', 'Ask about today’s selection', 'Ask'],
  ],
  Burgers: [
    ['Beef Burger', 'House burger', '500'],
    ['BBQ Beef Burger', 'Smoky BBQ flavor', '600'],
    ['Chicken Burger', 'House chicken burger', '500'],
    ['BBQ Chicken Burger', 'Smoky BBQ flavor', '600'],
    ['Tuna Burger', 'Tuna burger', '400'],
    ['With Cheese', 'Add cheese to your burger', 'Extra 100'],
    ['Beef Chawarma Burger', 'Beef chawarma', '500'],
    ['Chicken Chawarma Burger', 'Chicken chawarma', '500'],
  ],
  Grill: [
    ['Beef Brochette', 'Grilled beef skewers', '1,100'],
    ['Chicken Brochette', 'Grilled chicken skewers', '1,100'],
    ['Fish Brochette', 'Grilled fish skewers', '1,500'],
    ['Chicken Filet + Side of Choice', 'Chicken filet with your choice of side', '2,000'],
    ['Chicken Drumstick + Side of Choice', 'Chicken drumstick with your choice of side', '2,000'],
    ['Beef Filet / Filet de Boeuf + Side of Choice', 'Beef filet with your choice of side', '2,000'],
    ['Fish Filet / Filet de Poisson + Side of Choice', 'Fish filet with your choice of side', '2,300'],
    ['Shrimp / Crevette + Side of Choice', 'Shrimp with your choice of side', '2,700'],
    ['Jumbo Shrimp / Gambas + Side of Choice', 'Jumbo shrimp with your choice of side', '3,200'],
    ['Grilled Salmon / Saumon Grillé + Side of Choice', 'Grilled salmon with your choice of side', '3,300'],
    ['Langouste + Side of Choice', 'Langouste with your choice of side', '3,500'],
    ['Liver and Onions', 'Cafe menu highlight', 'Ask'],
    ['دقة', 'Cafe menu highlight', 'Ask'],
  ],
  Salads: [
    ['Salade Nicoise', 'Fresh salad', '1,000'],
    ['Salade Caesar', 'Classic Caesar salad', '1,000'],
    ['Salade Grecque', 'Greek-style salad', '1,200'],
    ['Salade Djiboutian', 'Djiboutian-style salad', '1,200'],
    ['Salade de Spot', 'House salad', '1,500'],
  ],
};

function App() {
  const [activeTab, setActiveTab] = useState('Coffee');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const items = menuItems[activeTab];
  const visibleItems = showAll ? items : items.slice(0, 5);

  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="The Spot home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">THE SPOT<small>COFFEE & KITCHEN</small></span>
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22}/> : <MenuIcon size={22}/>}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['Home', 'Our Story', 'Menu', 'Gallery', 'Visit Us'].map((label, i) => (
            <a key={label} href={['#home','#story','#menu','#gallery','#visit'][i]} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="https://wa.me/25377073556" target="_blank" rel="noreferrer" onClick={closeMenu}>Get in touch <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="The Spot cafe interior" />
          <div className="hero-shade"/>
          <div className="hero-content">
            <div className="eyebrow"><span/> GOOD COFFEE. GOOD MOOD.</div>
            <h1>Your everyday<br/><em>happy place.</em></h1>
            <p>Slow down, sip something lovely, and stay awhile. Your table is waiting at The Spot.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#menu">Explore our menu <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#visit">Find your way <span>↗</span></a>
            </div>
          </div>
          <div className="hero-bottom">
            <span><MapPin size={15}/> Rte de L'aéroport, Djibouti</span>
            <span className="hero-rating"><Star size={14} fill="currentColor"/> 4.2 <small>· 58 Google reviews</small></span>
          </div>
          <div className="hero-side-note">COFFEE • COMFORT • CONNECTION</div>
        </section>

        <section className="intro section-pad" id="story">
          <div className="section-kicker">A LITTLE ABOUT US</div>
          <div className="intro-grid">
            <h2>More than coffee.<br/><em>It's a feeling.</em></h2>
            <div className="intro-copy">
              <p>From the first morning espresso to a long lunch with friends, The Spot is made for the moments that make a day. Come for a carefully crafted coffee, stay for the food, and leave with a little more joy.</p>
              <a className="under-link" href="#visit">Come say hello <ArrowUpRight size={16}/></a>
            </div>
          </div>
          <div className="intro-stats">
            <div><strong>4.2<span>/5</span></strong><small>Guest rating</small></div>
            <div><strong>58</strong><small>Google reviews</small></div>
            <div><strong>All day</strong><small>Coffee & comfort food</small></div>
          </div>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="menu-heading">
            <div><div className="section-kicker">MADE WITH A LITTLE EXTRA LOVE</div><h2>Something for<br/><em>every craving.</em></h2></div>
            <p>From a quick coffee break to a proper sit-down meal, find your new favorite on the menu.</p>
          </div>
          <div className="menu-layout">
            <div className="menu-visual">
              <img src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1100&q=85" alt="Layered coffee served in a glass cup" />
              <div className="image-caption"><Coffee size={17}/> Made fresh, served with care</div>
            </div>
            <div className="menu-board">
              <div className="menu-tabs" role="tablist" aria-label="Menu categories">
                {Object.keys(menuItems).map(tab => <button key={tab} className={activeTab===tab?'tab active':'tab'} onClick={()=>{setActiveTab(tab);setShowAll(false)}} role="tab" aria-selected={activeTab===tab}>{tab}</button>)}
              </div>
              <div className="menu-list">
                {visibleItems.map(([name, desc, price]) => <div className="menu-item" key={name}>
                  <div><h3>{name}</h3><p>{desc}</p></div>
                  <span className="price">{price === 'Ask' || price.startsWith('Extra') ? price : <>{price} <small>DJF</small></>}</span>
                </div>)}
              </div>
              {items.length > 5 && <button className="show-more" onClick={()=>setShowAll(!showAll)}>{showAll?'Show less':'View full selection'} <ChevronDown size={15} className={showAll?'rotate':''}/></button>}
              <p className="menu-note">Items and listed DJF prices are transcribed from the supplied menu images. Items marked “Ask” had no visible price; please confirm current availability with the cafe.</p>
            </div>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="gallery-head"><div><div className="section-kicker">A LOOK AROUND</div><h2>Come for the coffee.<br/><em>Stay for the atmosphere.</em></h2></div><span className="gallery-label">THE SPOT, DJIBOUTI</span></div>
          <div className="gallery-grid">
            <div className="gallery-main"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85" alt="Dining room at The Spot Coffee Shop"/><span>Room to settle in</span></div>
            <div className="gallery-card"><img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85" alt="Burger menu at The Spot"/><span>Comfort food favorites</span></div>
            <div className="gallery-card"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85" alt="Grill and brochette menu"/><span>Fresh from the grill</span></div>
            <div className="gallery-card gallery-salad"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85" alt="Fresh salad menu"/><span>Fresh, colorful bites</span></div>
          </div>
        </section>

        <section className="visit-section section-pad" id="visit">
          <div className="visit-card">
            <div className="visit-copy">
              <div className="section-kicker">YOUR TABLE IS WAITING</div>
              <h2>Meet us<br/><em>at The Spot.</em></h2>
              <p>Drop by for your daily coffee, catch up over lunch, or make an afternoon of it.</p>
              <div className="visit-details">
                <div><MapPin size={18}/><span>H553+W6Q, Rte de L'aéroport,<br/>Djibouti</span></div>
                <div><Clock3 size={18}/><span>Open daily · Closes at 12:00 AM<br/><small>Hours may vary; please call ahead.</small></span></div>
                <div><Phone size={18}/><span>+253 77 07 35 56</span></div>
              </div>
              <div className="visit-actions">
                <a className="button button-gold" href="https://www.google.com/maps/search/?api=1&query=The+Spot+Coffee+Shop+H553%2BW6Q+Djibouti" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16}/></a>
                <a className="button button-outline" href="tel:+25377073556">Call the cafe</a>
              </div>
            </div>
            <div className="visit-image">
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f?auto=format&fit=crop&w=1400&q=85" alt="Warm and welcoming cafe dining space"/>
              <div className="visit-stamp"><span>GOOD<br/>THINGS<br/><em>happen</em><br/>HERE</span></div>
            </div>
          </div>
        </section>

        <section className="quote-strip">
          <div className="quote-stars">★★★★★</div>
          <blockquote>“Excellent staff, great food, excellent decoration.”</blockquote>
          <span>— A guest review on Google</span>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">THE SPOT<small>COFFEE & KITCHEN</small></span></a>
        <p>Good coffee. Good company. Every day.</p>
        <div className="footer-links"><a href="#menu">Menu</a><a href="#visit">Visit</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a></div>
        <small className="copyright">© 2026 The Spot Coffee Shop · Demo website concept</small>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);