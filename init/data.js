
const sampleListings = [
  {
    title: "Cozy Living Room with Fireplace & Sectional Sofa",
    description: "Relax in this beautifully designed modern living space featuring a roaring brick fireplace, plush sectional sofa, and floor-to-ceiling windows overlooking the woods. Perfect for chilly autumn nights and family gatherings.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
    price: 160,
    location: "Aspen, Colorado",
    country: "United States"
  },
  {
    title: "Minimalist Urban Loft in Downtown Tokyo",
    description: "A sleek, industrial-style loft featuring exposed concrete walls, smart-home automation, and a stunning view of the city skyline. Located just steps away from the subway and incredible local dining.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    price: 210,
    location: "Shibuya, Tokyo",
    country: "Japan"
  },
  {
    title: "Sun-Drenched Mediterranean Villa",
    description: "Escape to paradise in this white-washed villa with panoramic views of the Aegean Sea. Enjoy your private infinity pool, authentic stone architecture, and an expansive terrace for sunset dinners.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    price: 340,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Charming Parisian Studio near Canal Saint-Martin",
    description: "An elegant top-floor apartment boasting classic herringbone hardwood floors, wrought-iron balconies, and vintage French decor. Sip your morning espresso while watching the city wake up.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    price: 145,
    location: "Paris",
    country: "France"
  },
  {
    title: "Eco-Friendly Bamboo Jungle Treehouse",
    description: "Immerse yourself in nature in this stunning multi-level bamboo structure. Wake up to the sounds of the jungle, practice yoga on the private deck, and enjoy an open-air rain shower.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    price: 125,
    location: "Ubud, Bali",
    country: "Indonesia"
  },
  {
    title: "Historic Brownstone Apartment",
    description: "Experience true New York charm in this historic Brooklyn apartment. Features original crown molding, a decorative fireplace, exposed brick walls, and access to a quiet backyard garden.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    price: 195,
    location: "Brooklyn, New York",
    country: "United States"
  },
  {
    title: "Ultra-Modern Desert Oasis with Pool",
    description: "A architectural masterpiece nestled in the high desert. Features minimalist mid-century furniture, a sweeping outdoor pool area, and unparalleled stargazing opportunities under the desert sky.",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80",
    price: 280,
    location: "Joshua Tree, California",
    country: "United States"
  },
  {
    title: "Secluded Nordic Cabin in the Woods",
    description: "Disconnect from the world in this black-clad A-frame cabin. Outfitted with Scandinavian design elements, a wood-burning stove, and an outdoor wood-fired hot tub perfect for viewing the Northern Lights.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    price: 175,
    location: "Tromsø",
    country: "Norway"
  },
  {
    title: "Bright Beachfront Penthouse",
    description: "Step directly onto the sand from this luxury penthouse. Floor-to-ceiling glass doors slide completely open to turn your living space into an open-air paradise with sweeping ocean vistas.",
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80",
    price: 410,
    location: "Gold Coast",
    country: "Australia"
  },
  {
    title: "Boho-Chic Riad with Indoor Courtyard",
    description: "A peaceful sanctuary in the heart of the bustling Medina. Beautifully decorated with hand-woven Moroccan carpets, intricate tilework, and a central plunge pool to cool off after exploring.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    price: 110,
    location: "Marrakesh",
    country: "Morocco"
  },
  {
    title: "Lakeside Log Cabin with Private Dock",
    description: "The ultimate rustic escape. Spend your days kayaking on the crystal-clear lake or fishing from your private dock, and your evenings roasting marshmallows around the stone fire pit.",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1200&q=80",
    price: 220,
    location: "Lake Placid, New York",
    country: "United States"
  },
  {
    title: "Luxury High-Rise Suite with Panoramic Views",
    description: "Live like a local high-roller in this downtown apartment. Features state-of-the-art kitchen appliances, a spa-like master bathroom, and access to a rooftop lounge and fitness center.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    price: 250,
    location: "Toronto, Ontario",
    country: "Canada"
  },
  {
    title: "Charming Countryside Cottage",
    description: "Straight out of a fairy tale, this ivy-covered stone cottage features low timber beams, a fully equipped farmhouse kitchen, and a beautiful English garden overflowing with roses.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=80",
    price: 135,
    location: "Cotswolds",
    country: "United Kingdom"
  },
  {
    title: "Bright Loft Apartment near Duomo",
    description: "Artistically styled apartment featuring sky-high ceilings, local Italian artwork, and large windows that fill the space with natural light. Walking distance to world-class fashion houses.",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
    price: 185,
    location: "Milan",
    country: "Italy"
  },
  {
    title: "Tropical Rainforest Eco-Lodge",
    description: "Nestled high in the canopy, this sustainable lodge offers unmatched wildlife viewing. Watch toucans and monkeys from your hammock on the deck. Includes free guided morning hikes.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    price: 95,
    location: "Manuel Antonio",
    country: "Costa Rica"
  },
  {
    title: "Industrial Chic Warehouse Conversion",
    description: "An incredibly spacious loft in a converted 1920s textile factory. Features massive steel-framed windows, mid-century modern furniture, a pool table, and an impressive vinyl record collection.",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80",
    price: 170,
    location: "Melbourne",
    country: "Australia"
  },
  {
    title: "Traditional Heritage Townhouse",
    description: "Meticulously restored townhouse combining vintage architectural elements with modern comforts. Located in a quiet, vibrant culinary neighborhood known for its independent cafes.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    price: 150,
    location: "George Town, Penang",
    country: "Malaysia"
  },
  {
    title: "Cozy Mountain Chalet near Ski Slopes",
    description: "The ideal winter base camp. Features a cedar dry sauna, heated floors, ski storage, and a massive wrap-around deck with stunning mountain views. Walk directly to the main chairlift.",
    image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&w=1200&q=80",
    price: 290,
    location: "Whistler",
    country: "Canada"
  },
  {
    title: "Sunny Art Deco Studio near the Beach",
    description: "Vibrant and cheerful apartment boasting retro 1930s architecture, pastel accents, and modern amenities. Located just two blocks from the famous white sands and neon nightlife.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    price: 130,
    location: "Miami Beach, Florida",
    country: "United States"
  },
  {
    title: "Historic Cliffside Cave House",
    description: "Stay in a uniquely carved volcanic cave house. Blending traditional cave architecture with modern luxury, this property keeps cool naturally and features a cliffside hot tub.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    price: 320,
    location: "Oia",
    country: "Greece"
  },
  {
    title: "Stylish Penthouse with Private Rooftop",
    description: "Elegant top-tier living featuring high design interiors, premium linens, and a massive private rooftop terrace with lounge chairs, a BBQ grill, and views across the historic city center.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    price: 225,
    location: "Mexico City",
    country: "Mexico"
  },
  {
    title: "Tranquil Overwater Bungalow",
    description: "Wake up and look straight through the glass floor viewing panels into the coral reef below. Dive right off your private deck into the warm, turquoise lagoon water.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
    price: 550,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Rustic Chic Barn Conversion",
    description: "A beautiful architectural reimagining of a historic barn. Retains massive original oak support beams combined with sleek iron fixtures, polished concrete floors, and a professional chef's kitchen.",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
    price: 200,
    location: "Vermont countryside",
    country: "United States"
  },
  {
    title: "Bohemian Jungle Loft",
    description: "An airy, open-concept loft surrounded by lush tropical palm trees. Features a beautiful array of hand-made wicker furniture, vibrant local art, and an outdoor plunge pool.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    price: 115,
    location: "Tulum",
    country: "Mexico"
  },
  {
    title: "Sleek Modernist Glass House",
    description: "An architectural marvel constructed primarily of glass and steel, hidden deep within a peaceful pine forest. Experience luxury living with zero visual barriers to nature.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    price: 380,
    location: "Reykjavík outskirts",
    country: "Iceland"
  },
  {
    title: "Romantic Canal-Side Apartment",
    description: "Housed in a gorgeous 17th-century building, this apartment looks out directly over the historic canals. Beautifully styled with dark velvets, warm lighting, and a reading nook.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    price: 165,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Contemporary Hillside Ocean-View Villa",
    description: "Perched high above the coastline, this villa offers jaw-dropping 180-degree ocean views. Features clean architectural lines, a private infinity pool, and a state-of-the-art home theater.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    price: 450,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Quaint Historic Fishermans Cottage",
    description: "A beautifully restored coastal cottage featuring nautical antiques, a cozy working fireplace, and a peaceful brick patio. Just a minute walk to local seafood restaurants and the historic harbor.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    price: 140,
    location: "Cape Cod, Massachusetts",
    country: "United States"
  },
  {
    title: "Luxury Vineyard Estate Suite",
    description: "Stay on a premium, working vineyard estate. Enjoy complimentary private wine tastings, stroll through rows of grapevines, and unwind in a master suite with sweeping valley views.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    price: 310,
    location: "Napa Valley, California",
    country: "United States"
  },
  {
    title: "Vibrant Sky-High Studio Apartment",
    description: "A perfectly compact city studio utilizing clever space-saving Scandinavian design. Features massive double-glazed windows showcasing views of the iconic city architecture.",
    image: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=1200&q=80",
    price: 120,
    location: "Berlin",
    country: "Germany"
  }
];

module.exports = { data: sampleListings};