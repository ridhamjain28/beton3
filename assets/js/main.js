// Sample product data
const products = [
    {
        id: "SYS-01",
        name: "Linear Suspension System",
        category: "Ceiling Mounted",
        price: "$599",
        description: "Modular linear lighting system for general illumination in open-plan workspaces.",
        specs: {
            "Power": "40W LED",
            "Color Temperature": "3000K / 4000K / 6000K",
            "Lumens": "3200 lm",
            "CRI": "> 90",
            "UGR": "< 19",
            "Lifetime": "50,000 hours",
            "Dimensions": "1200mm × 40mm × 60mm",
            "Material": "Extruded Aluminum",
            "Warranty": "5 years"
        },
        features: [
            "Modular aluminum extrusion with tool-free joining",
            "Direct/Indirect light distribution options",
            "Integrated DALI dimming drivers",
            "Hot-swappable LED modules for easy maintenance",
            "Available in 600mm, 1200mm, 1800mm lengths",
            "IP40 rated for indoor use"
        ],
        images: {
            off: "assets/images/products/sys-01-off.webp",
            on: "assets/images/products/sys-01-on.webp",
            gallery: [
                "assets/images/products/sys-01-detail-1.webp",
                "assets/images/products/sys-01-detail-2.webp"
            ]
        }
    },
    {
        id: "MT-42",
        name: "Adjustable Mount System",
        category: "Ceiling Accessory",
        price: "$149",
        description: "Precision adjustable ceiling mount for recessed fixtures.",
        specs: {
            "Material": "Machined Aluminum",
            "Adjustment Range": "±15°",
            "Compatibility": "Universal",
            "Finish": "Anodized Black",
            "Warranty": "3 years"
        },
        features: [
            "Tool-free adjustment mechanism",
            "Precision ball joint for exact positioning",
            "Compatible with multiple fixture types",
            "Integrated cable management",
            "Anti-rotation design",
            "Built-in thermal management"
        ],
        images: {
            off: "assets/images/products/mt-42-off.webp",
            on: "assets/images/products/mt-42-on.webp",
            gallery: [
                "assets/images/products/mt-42-detail-1.webp",
                "assets/images/products/mt-42-detail-2.webp"
            ]
        }
    },
    {
        id: "LN-02",
        name: "Adaptive Task Light",
        category: "Desk/Task Lighting",
        price: "$299",
        description: "Precision task light for drafting, reading, and precision work.",
        specs: {
            "Power": "20W LED",
            "Color Temperature": "2700K-6000K",
            "Lumens": "1200 lm",
            "CRI": "98",
            "Dimming": "0-100%",
            "Lifetime": "50,000 hours",
            "Dimensions": "400mm × 150mm × 45mm",
            "Warranty": "5 years"
        },
        features: [
            "98 CRI LED array for accurate color rendering",
            "Zero-flicker dimming driver",
            "Machined brass counterweight for balance",
            "User-replaceable LED module",
            "Memory dimming function",
            "Touch-sensitive controls"
        ],
        images: {
            off: "assets/images/products/ln-02-off.webp",
            on: "assets/images/products/ln-02-on.webp",
            gallery: [
                "assets/images/products/ln-02-detail-1.webp",
                "assets/images/products/ln-02-detail-2.webp"
            ]
        }
    },
    {
        id: "SS-03",
        name: "Surface Series",
        category: "Wall/Ceiling Mount",
        price: "$199",
        description: "Architectural lighting for corridors, amenities, and secondary spaces.",
        specs: {
            "Power": "25W LED",
            "Color Temperature": "3000K / 4000K",
            "Lumens": "2000 lm",
            "CRI": "> 85",
            "IP Rating": "IP54",
            "IK Rating": "IK10",
            "Lifetime": "50,000 hours",
            "Warranty": "5 years"
        },
        features: [
            "IP54 rated enclosure for harsh environments",
            "Impact resistant polycarbonate housing",
            "Hidden tamper-proof fixings",
            "Emergency battery backup option",
            "Multiple mounting configurations",
            "Thermal management system"
        ],
        images: {
            off: "assets/images/products/ss-03-off.webp",
            on: "assets/images/products/ss-03-on.webp",
            gallery: [
                "assets/images/products/ss-03-detail-1.webp",
                "assets/images/products/ss-03-detail-2.webp"
            ]
        }
    },
    {
        id: "CT-15",
        name: "Digital Controller",
        category: "Control System",
        price: "$349",
        description: "Digital lighting control unit for centralized management.",
        specs: {
            "Protocol": "DALI, 0-10V, DMX",
            "Channels": "64",
            "Power": "12V DC",
            "Connectivity": "Ethernet, WiFi",
            "Warranty": "3 years"
        },
        features: [
            "Digital lighting control enables centralized management",
            "Scene setting and scheduling capabilities",
            "Integration with building automation systems",
            "Remote monitoring and diagnostics",
            "Modular expansion capability",
            "Intuitive web-based interface"
        ],
        images: {
            off: "assets/images/products/ct-15-off.webp",
            on: "assets/images/products/ct-15-on.webp",
            gallery: [
                "assets/images/products/ct-15-detail-1.webp",
                "assets/images/products/ct-15-detail-2.webp"
            ]
        }
    },
    {
        id: "PS-22",
        name: "Power Supply",
        category: "Driver",
        price: "$89",
        description: "LED driver with dimming capability for consistent performance.",
        specs: {
            "Power": "48W",
            "Input": "100-277V AC",
            "Output": "24V DC",
            "Efficiency": ">90%",
            "Dimming": "0-100%",
            "Lifetime": "100,000 hours",
            "Warranty": "7 years"
        },
        features: [
            "High efficiency for reduced energy consumption",
            "Wide input voltage range for global compatibility",
            "Advanced thermal management",
            "Built-in surge protection",
            "Dimming curve adjustment",
            "Universal dimming compatibility"
        ],
        images: {
            off: "assets/images/products/ps-22-off.webp",
            on: "assets/images/products/ps-22-on.webp",
            gallery: [
                "assets/images/products/ps-22-detail-1.webp",
                "assets/images/products/ps-22-detail-2.webp"
            ]
        }
    },
    {
        id: "OP-07",
        name: "Optic System",
        category: "Optics",
        price: "$39",
        description: "Asymmetric lens for precise light control and wall washing.",
        specs: {
            "Type": "Asymmetric",
            "Material": "PMMA",
            "Efficiency": ">95%",
            "UGR": "< 10",
            "Warranty": "2 years"
        },
        features: [
            "Asymmetric distribution for wall washing",
            "High optical efficiency",
            "Color temperature stability",
            "Easy installation with click-fit",
            "Compatible with multiple fixture types",
            "UV-stabilized material"
        ],
        images: {
            off: "assets/images/products/op-07-off.webp",
            on: "assets/images/products/op-07-on.webp",
            gallery: [
                "assets/images/products/op-07-detail-1.webp",
                "assets/images/products/op-07-detail-2.webp"
            ]
        }
    },
    {
        id: "FR-33",
        name: "Mounting Frame",
        category: "Accessories",
        price: "$129",
        description: "Modular mounting frame system for multiple fixture configurations.",
        specs: {
            "Material": "Extruded Aluminum",
            "Finish": "Powder Coated",
            "Compatibility": "Universal",
            "Warranty": "5 years"
        },
        features: [
            "Modular design for custom configurations",
            "Tool-free assembly system",
            "Compatible with multiple fixture types",
            "Integrated cable management",
            "Adjustable mounting points",
            "Thermal management channels"
        ],
        images: {
            off: "assets/images/products/fr-33-off.webp",
            on: "assets/images/products/fr-33-on.webp",
            gallery: [
                "assets/images/products/fr-33-detail-1.webp",
                "assets/images/products/fr-33-detail-2.webp"
            ]
        }
    },
    {
        id: "CB-11",
        name: "Low Voltage Cable",
        category: "Cable",
        price: "$45",
        description: "Low voltage cable assembly for LED installations.",
        specs: {
            "Gauge": "18 AWG",
            "Length": "10m",
            "Rating": "600V",
            "Material": "Copper",
            "Warranty": "2 years"
        },
        features: [
            "Low voltage rated for LED systems",
            "Flexible for tight installations",
            "Color-coded conductors",
            "Weather resistant jacket",
            "Pre-terminated connectors",
            "UL listed for safety"
        ],
        images: {
            off: "assets/images/products/cb-11-off.webp",
            on: "assets/images/products/cb-11-on.webp",
            gallery: [
                "assets/images/products/cb-11-detail-1.webp",
                "assets/images/products/cb-11-detail-2.webp"
            ]
        }
    },
    {
        id: "AD-28",
        name: "Quick-Connect Adapter",
        category: "Connector",
        price: "$24",
        description: "Quick-connect electrical adapter for tool-free installation.",
        specs: {
            "Rating": "12A",
            "Voltage": "24V DC",
            "Material": "Nickel Plated Brass",
            "Warranty": "2 years"
        },
        features: [
            "Quick-connect for tool-free installation",
            "Secure locking mechanism",
            "Corrosion resistant contacts",
            "Compatible with multiple systems",
            "IP65 rated for moisture protection",
            "LED status indicator"
        ],
        images: {
            off: "assets/images/products/ad-28-off.webp",
            on: "assets/images/products/ad-28-on.webp",
            gallery: [
                "assets/images/products/ad-28-detail-1.webp",
                "assets/images/products/ad-28-detail-2.webp"
            ]
        }
    },
    {
        id: "HS-05",
        name: "Thermal Management",
        category: "Thermal",
        price: "$69",
        description: "Heat sink for thermal management in LED fixtures.",
        specs: {
            "Material": "Aluminum",
            "Thermal Resistance": "0.5°C/W",
            "Surface Area": "200cm²",
            "Warranty": "5 years"
        },
        features: [
            "Optimized fin design for maximum heat dissipation",
            "Anodized surface for corrosion resistance",
            "Compatible with multiple fixture types",
            "Passive cooling design",
            "Extended LED lifetime",
            "Thermal interface pads included"
        ],
        images: {
            off: "assets/images/products/hs-05-off.webp",
            on: "assets/images/products/hs-05-on.webp",
            gallery: [
                "assets/images/products/hs-05-detail-1.webp",
                "assets/images/products/hs-05-detail-2.webp"
            ]
        }
    },
    {
        id: "MC-19",
        name: "Smart Dimming Module",
        category: "Control",
        price: "$159",
        description: "Smart dimming control module for individual fixture control.",
        specs: {
            "Protocol": "DALI, Zigbee",
            "Power": "5V DC",
            "Channels": "4",
            "Connectivity": "WiFi",
            "Warranty": "3 years"
        },
        features: [
            "Smart dimming control module",
            "Individual fixture control capability",
            "Integration with home automation systems",
            "Wireless connectivity",
            "Pre-programmed dimming curves",
            "Energy monitoring capabilities"
        ],
        images: {
            off: "assets/images/products/mc-19-off.webp",
            on: "assets/images/products/mc-19-on.webp",
            gallery: [
                "assets/images/products/mc-19-detail-1.webp",
                "assets/images/products/mc-19-detail-2.webp"
            ]
        }
    },
    {
        id: "LT-37",
        name: "Anti-Glare Louver",
        category: "Optics",
        price: "$79",
        description: "Anti-glare louver system for visual comfort.",
        specs: {
            "Material": "Aluminum",
            "UGR Reduction": ">50%",
            "Efficiency": ">90%",
            "Warranty": "3 years"
        },
        features: [
            "Anti-glare system for visual comfort",
            "High light transmission efficiency",
            "Easy installation with tool-free mechanism",
            "Compatible with multiple fixture types",
            "UV-stabilized material",
            "Fire rated to UL standards"
        ],
        images: {
            off: "assets/images/products/lt-37-off.webp",
            on: "assets/images/products/lt-37-on.webp",
            gallery: [
                "assets/images/products/lt-37-detail-1.webp",
                "assets/images/products/lt-37-detail-2.webp"
            ]
        }
    },
    {
        id: "RF-09",
        name: "Reflector Optic",
        category: "Optics",
        price: "$59",
        description: "High efficiency reflector optic for directional lighting.",
        specs: {
            "Material": "Anodized Aluminum",
            "Efficiency": ">95%",
            "Distribution": "Symmetric",
            "Warranty": "2 years"
        },
        features: [
            "High efficiency reflector optic",
            "Symmetric light distribution",
            "Anodized surface for reflectivity",
            "Easy installation with click-fit",
            "Compatible with multiple fixture types",
            "Color temperature stability"
        ],
        images: {
            off: "assets/images/products/rf-09-off.webp",
            on: "assets/images/products/rf-09-on.webp",
            gallery: [
                "assets/images/products/rf-09-detail-1.webp",
                "assets/images/products/rf-09-detail-2.webp"
            ]
        }
    },
    {
        id: "SP-41",
        name: "Adjustable Spot Light",
        category: "Spotlight",
        price: "$249",
        description: "Adjustable spot light module for accent lighting.",
        specs: {
            "Power": "30W LED",
            "Color Temperature": "3000K / 4000K",
            "Lumens": "2400 lm",
            "CRI": "> 90",
            "Adjustment": "±30°",
            "Lifetime": "50,000 hours",
            "Warranty": "5 years"
        },
        features: [
            "Adjustable spot light module",
            "Precision adjustment for exact positioning",
            "High CRI for accurate color rendering",
            "Thermal management system",
            "Multiple beam angles available",
            "Compatible with existing mounting systems"
        ],
        images: {
            off: "assets/images/products/sp-41-off.webp",
            on: "assets/images/products/sp-41-on.webp",
            gallery: [
                "assets/images/products/sp-41-detail-1.webp",
                "assets/images/products/sp-41-detail-2.webp"
            ]
        }
    }
];

// Initialize the Single Page Application
function initSPA() {
    // Set initial state to Philosophy (State A)
    showState('state-a');
    
    // Add event listeners for navigation
    document.getElementById('logo').addEventListener('click', function(e) {
        e.preventDefault();
        showState('state-a');
        updateActiveNav('philosophy');
    });
    
    document.getElementById('philosophy-link').addEventListener('click', function(e) {
        e.preventDefault();
        showState('state-a');
        updateActiveNav('philosophy');
    });
    
    document.getElementById('products-link').addEventListener('click', function(e) {
        e.preventDefault();
        showState('state-b');
        updateActiveNav('products');
    });
    
    document.getElementById('explore-systems').addEventListener('click', function(e) {
        e.preventDefault();
        showState('state-b');
        updateActiveNav('products');
    });
    
    // Add event listeners for mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Update ARIA attributes
            const isExpanded = navToggle.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
    
    // Add event listeners for color controls - will be set up after modal opens
    
    // Add event listener for close button
    document.getElementById('closeBtn').addEventListener('click', closeExpandedView);
    
    // Add escape key listener for closing modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const expandedView = document.getElementById('expandedView');
            if (expandedView.classList.contains('active')) {
                closeExpandedView();
            }
        }
    });
    
    // Add overlay click listener to close modal
    const expandedView = document.getElementById('expandedView');
    expandedView.addEventListener('click', (e) => {
        if (e.target === expandedView) {
            closeExpandedView();
        }
    });
}

// Function to switch between states
function showState(stateId) {
    // Hide all states
    document.querySelectorAll('.state').forEach(state => {
        state.classList.remove('active');
    });
    
    // Show the requested state
    const requestedState = document.getElementById(stateId);
    if (requestedState) {
        requestedState.classList.add('active');
    }
}

// Function to update active navigation state
function updateActiveNav(activeSection) {
    // Remove active class from all nav items
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to the appropriate link
    if (activeSection === 'philosophy') {
        document.getElementById('philosophy-link').classList.add('active');
    } else if (activeSection === 'products') {
        document.getElementById('products-link').classList.add('active');
    }
}

// Function to render products
function renderProducts() {
    const grid = document.getElementById('technicalGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="technical-item" data-id="${product.id}" data-name="${product.name}" data-description="${product.useCase}">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="model-number">${product.id}</div>
        </div>
    `).join('');
    
    // Add event listeners to technical items
    document.querySelectorAll('.technical-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            openExpandedView(id);
        });
    });
}

// Function to open expanded view
function openExpandedView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const expandedView = document.getElementById('expandedView');
    const bgImg = document.getElementById('bgImg');
    const litImg = document.getElementById('litImg');
    const expandedTitle = document.getElementById('expandedTitle');
    const expandedCategory = document.getElementById('expandedCategory');
    const expandedPrice = document.getElementById('expandedPrice');
    const expandedDesc = document.getElementById('expandedDesc');
    const specsTable = document.getElementById('specsTable');
    const featuresList = document.getElementById('featuresList');
    
    // Update content
    expandedTitle.textContent = `${product.id} - ${product.name}`;
    expandedCategory.textContent = product.positioning;
    expandedDesc.textContent = product.useCase;
    
    // Populate features list
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Update images using product-specific path
    bgImg.src = product.image;
    litImg.src = product.image; // Using same image for both states since only one is provided
    
    // Show expanded view
    expandedView.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Trigger the 'light up' effect after a short delay
    setTimeout(() => {
        litImg.classList.add('lit-on');
    }, 300);
    
    // Set up color temperature controls
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const temp = this.getAttribute('data-temp');
            // Color temperature buttons are functional - in a full implementation,
            // this would change the light color/image based on temperature
            console.log(`Color temperature changed to ${temp}`);
        });
    });
}

// Function to close expanded view
function closeExpandedView() {
    const expandedView = document.getElementById('expandedView');
    const litImg = document.getElementById('litImg');
    
    // Remove the light on class to reset for next time
    litImg.classList.remove('lit-on');
    
    // Hide expanded view
    expandedView.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initSPA();
});