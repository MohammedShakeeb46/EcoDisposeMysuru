// DOM Elements - Organized by functionality
const elements = {
    // Search elements
    search: {
        input: document.getElementById('search-input'),
        btn: document.getElementById('search-btn'),
        suggestions: document.getElementById('suggestions'),
        results: document.getElementById('search-results')
    },
    
    // Modal elements
    modal: {
        container: document.getElementById('item-modal'),
        closeBtn: document.querySelector('.close-btn'),
        title: document.getElementById('modal-title'),
        category: document.getElementById('modal-category'),
        description: document.getElementById('modal-description'),
        disposal: document.getElementById('modal-disposal'),
        binColor: document.getElementById('modal-bin-color'),
        binType: document.getElementById('modal-bin-type'),
        tips: document.getElementById('modal-tips'),
        contact: document.getElementById('modal-contact'),
        location: document.getElementById('modal-location')
    },
    
    // Navigation elements
    nav: {
        mobileMenu: document.querySelector('.mobile-menu'),
        mainNav: document.querySelector('nav')
    }
};

// Mysuru-specific contact information
const mysuruContacts = {
    organic: {
        contact: "0821-2414141 (MCC Compost Helpline)",
        location: "Vijayanagar Waste Processing Unit, Mysuru"
    },
    recyclable: {
        contact: "0821-2414142 (MCC Recycling Center)",
        location: "Kuvempunagar Material Recovery Facility"
    },
    hazardous: {
        contact: "0821-2414143 (MCC Hazardous Waste)",
        location: "Special Collection - 1st Saturday each month"
    },
    "e-waste": {
        contact: "0821-2414144 (MCC E-Waste)",
        location: "Electronic City Collection Center"
    },
    other: {
        contact: "0821-2414145 (MCC General Waste)",
        location: "Vidyaranyapuram Landfill Facility"
    }
};

// Bin color mapping
const binColors = {
    recycle: "blue",
    compost: "green",
    hazardous: "red",
    landfill: "black",
    default: "brown"
};

// Category icons
const categoryIcons = {
    organic: "leaf",
    recyclable: "recycle",
    hazardous: "biohazard",
    "e-waste": "laptop",
    other: "trash"
};

// Initialize the app
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    setupEventListeners();
}

function setupEventListeners() {
    // Search functionality
    elements.search.btn.addEventListener('click', searchItems);
    elements.search.input.addEventListener('input', debounce(showSuggestions, 300));
    elements.search.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchItems();
    });
    
    // Modal functionality
    elements.modal.closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === elements.modal.container) closeModal();
    });
    
    // Mobile navigation
    elements.nav.mobileMenu.addEventListener('click', toggleMobileMenu);
}

// Debounce function for search input
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Search functionality
function searchItems() {
    const searchTerm = elements.search.input.value.trim().toLowerCase();
    
    if (!searchTerm) {
        showEmptySearchMessage();
        return;
    }
    
    const filteredItems = filterItems(searchTerm);
    displaySearchResults(filteredItems);
    hideSuggestions();
}

function filterItems(term) {
    return wasteData.filter(item => 
        item.name.toLowerCase().includes(term) || 
        item.description.toLowerCase().includes(term) ||
        item.disposalMethod.toLowerCase().includes(term)
    );
}

function showEmptySearchMessage() {
    elements.search.results.innerHTML = `
        <div class="no-results">
            <i class="fas fa-exclamation-circle"></i>
            <h3>Please enter a search term</h3>
            <p>Try searching for items like "plastic bottle" or "battery"</p>
        </div>
    `;
    elements.search.results.style.display = 'block';
}

// Suggestion functionality
function showSuggestions() {
    const input = elements.search.input.value.trim().toLowerCase();
    
    if (input.length < 2) {
        hideSuggestions();
        return;
    }
    
    const matchedItems = getSuggestions(input);
    renderSuggestions(matchedItems);
}

function getSuggestions(term) {
    return wasteData.filter(item => 
        item.name.toLowerCase().includes(term) || 
        item.category.toLowerCase().includes(term)
    ).slice(0, 5);
}

function renderSuggestions(items) {
    if (items.length === 0) {
        hideSuggestions();
        return;
    }
    
    elements.search.suggestions.innerHTML = items.map(item => `
        <div class="suggestion-item" data-name="${item.name}">
            <i class="fas fa-${categoryIcons[item.category] || 'trash'}"></i> ${item.name}
        </div>
    `).join('');
    
    showSuggestions();
    setupSuggestionEvents();
}

function setupSuggestionEvents() {
    document.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            elements.search.input.value = item.dataset.name;
            searchItems();
        });
    });
}

function showSuggestions() {
    elements.search.suggestions.classList.add('show');
}

function hideSuggestions() {
    elements.search.suggestions.classList.remove('show');
}

// Results display
function displaySearchResults(items) {
    elements.search.results.innerHTML = '';
    elements.search.results.style.display = 'block';
    
    if (items.length === 0) {
        showNoResultsMessage();
        return;
    }
    
    renderResultsHeader(items.length);
    renderResultsGrid(items);
}

function showNoResultsMessage() {
    elements.search.results.innerHTML = `
        <div class="no-results">
            <i class="fas fa-search"></i>
            <h3>No items found</h3>
            <p>Try searching for something else</p>
        </div>
    `;
}

function renderResultsHeader(count) {
    const header = document.createElement('h2');
    header.textContent = `Search Results (${count})`;
    elements.search.results.appendChild(header);
}

function renderResultsGrid(items) {
    const grid = document.createElement('div');
    grid.className = 'waste-items';
    
    items.forEach(item => {
        grid.appendChild(createWasteCard(item));
    });
    
    elements.search.results.appendChild(grid);
}

function createWasteCard(item) {
    const card = document.createElement('div');
    card.className = 'waste-card';
    
    const binColorClass = getBinColorClass(item.disposalMethod);
    
    card.innerHTML = `
        <div class="waste-info">
            <span class="waste-category category-${item.category}">${item.category}</span>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="bin-type">
                <span>Bin:</span>
                <div class="bin-color ${binColorClass}"></div>
                <span>${item.binType}</span>
            </div>
            <button class="details-btn">View Details</button>
        </div>
    `;
    
    card.querySelector('.details-btn').addEventListener('click', () => openItemModal(item));
    return card;
}

function getBinColorClass(disposalMethod) {
    if (disposalMethod.includes('Recycle')) return `color-${binColors.recycle}`;
    if (disposalMethod.includes('Compost')) return `color-${binColors.compost}`;
    if (disposalMethod.includes('Hazardous')) return `color-${binColors.hazardous}`;
    if (disposalMethod.includes('Landfill')) return `color-${binColors.landfill}`;
    return `color-${binColors.default}`;
}

// Modal functionality
function openItemModal(item) {
    setModalContent(item);
    setModalBinColor(item.disposalMethod);
    showModal();
}

function setModalContent(item) {
    elements.modal.title.textContent = item.name;
    elements.modal.category.textContent = item.category;
    elements.modal.category.className = `item-category category-${item.category}`;
    elements.modal.description.textContent = item.description;
    elements.modal.disposal.textContent = item.disposalMethod;
    elements.modal.tips.textContent = item.tips || 'No specific tips available.';
    elements.modal.binType.textContent = item.binType;
    
    const contactInfo = mysuruContacts[item.category] || mysuruContacts.other;
    elements.modal.contact.textContent = contactInfo.contact;
    elements.modal.location.textContent = contactInfo.location;
}

function setModalBinColor(disposalMethod) {
    elements.modal.binColor.className = 'bin-color';
    
    if (disposalMethod.includes('Recycle')) elements.modal.binColor.classList.add(`color-${binColors.recycle}`);
    else if (disposalMethod.includes('Compost')) elements.modal.binColor.classList.add(`color-${binColors.compost}`);
    else if (disposalMethod.includes('Hazardous')) elements.modal.binColor.classList.add(`color-${binColors.hazardous}`);
    else if (disposalMethod.includes('Landfill')) elements.modal.binColor.classList.add(`color-${binColors.landfill}`);
    else elements.modal.binColor.classList.add(`color-${binColors.default}`);
}

function showModal() {
    elements.modal.container.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    elements.modal.container.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navigation functionality
function toggleMobileMenu() {
    elements.nav.mainNav.classList.toggle('active');
    elements.nav.mobileMenu.innerHTML = elements.nav.mainNav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
}