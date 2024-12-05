// Performance optimization utilities

// Lazy load images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}

// Efficient DOM manipulation
function batchDOMOperations(operations) {
    const fragment = document.createDocumentFragment();
    operations.forEach(op => fragment.appendChild(op));
    return fragment;
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Cache DOM queries
const DOMCache = {
    store: new Map(),
    get(selector) {
        if (!this.store.has(selector)) {
            this.store.set(selector, document.querySelector(selector));
        }
        return this.store.get(selector);
    }
};

// Efficient event delegation
function delegateEvent(eventType, selector, handler) {
    document.addEventListener(eventType, function(event) {
        const target = event.target.closest(selector);
        if (target) {
            handler(event, target);
        }
    });
}

// Export utilities
window.DevoirOptimize = {
    initializeLazyLoading,
    batchDOMOperations,
    debounce,
    DOMCache,
    delegateEvent
};
