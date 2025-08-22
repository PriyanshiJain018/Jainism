// js/app.js - Fixed version with proper initialization

// Global variables
let currentLanguage = 'en';
let deferredPrompt;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize language system
        initializeLanguage();
        
        // Initialize other components
        updateUniverses();
        updateUserStats();
        initializeDailyPrashna();
        initializeInstallPrompt();
        
        console.log('Jinasaraswati app initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        showErrorMessage();
    }
});

// Language initialization function
function initializeLanguage() {
    // Get saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem('jinasaraswati-language') || 'en';
    currentLanguage = savedLanguage;
    
    // Update UI elements with current language
    updateLanguageUI();
    
    console.log('Language initialized:', currentLanguage);
}

// Update UI elements based on current language
function updateLanguageUI() {
    // Update any existing language-dependent elements
    const languageElements = document.querySelectorAll('[data-translate]');
    languageElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = t(key);
    });
}

// Switch language function
function switchLanguage(lang) {
    if (lang !== currentLanguage) {
        currentLanguage = lang;
        localStorage.setItem('jinasaraswati-language', lang);
        
        // Update the current view
        const mainContent = document.querySelector('.main-content');
        if (mainContent && mainContent.querySelector('.karma-map-container')) {
            // If we're in the karma map, refresh it
            showKarmaMapInterface();
        } else {
            // Otherwise update the general UI
            updateLanguageUI();
        }
        
        console.log('Language switched to:', lang);
    }
}

// Error handling
function showErrorMessage() {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div class="error-content">
            <h3>Something went wrong</h3>
            <p>Please refresh the page to try again.</p>
            <button onclick="location.reload()" class="retry-btn">Refresh Page</button>
        </div>
    `;
    document.body.appendChild(errorDiv);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
    
    // Add entrance animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/Jainism/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Install prompt handling
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button after a delay
    setTimeout(() => {
        const installPrompt = document.querySelector('.install-prompt');
        if (installPrompt) {
            installPrompt.classList.add('show');
        }
    }, 5000);
});

// Handle install button click
function installApp() {
    const installPrompt = document.querySelector('.install-prompt');
    if (deferredPrompt) {
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    }
    
    // Hide the install prompt
    if (installPrompt) {
        installPrompt.classList.remove('show');
    }
}

// Handle app installed event
window.addEventListener('appinstalled', () => {
    console.log('Jinasaraswati PWA was installed');
    const installPrompt = document.querySelector('.install-prompt');
    if (installPrompt) {
        installPrompt.remove();
    }
    deferredPrompt = null;
});

// Utility functions
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function getGreeting() {
    const hour = new Date().getHours();
    const lang = currentLanguage;
    
    if (hour < 12) {
        return lang === 'hi' ? 'सुप्रभात' : 'Good Morning';
    } else if (hour < 17) {
        return lang === 'hi' ? 'नमस्ते' : 'Good Afternoon';
    } else {
        return lang === 'hi' ? 'शुभ संध्या' : 'Good Evening';
    }
}

// Handle offline/online status
window.addEventListener('online', () => {
    showNotification(currentLanguage === 'hi' ? 'आप ऑनलाइन हैं' : 'You are back online', 'success');
});

window.addEventListener('offline', () => {
    showNotification(currentLanguage === 'hi' ? 'आप ऑफ़लाइन हैं' : 'You are offline', 'info');
});

// Error handling for uncaught errors
window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error);
    // Don't show error notification for minor issues
    if (event.error && event.error.message && !event.error.message.includes('Script error')) {
        showNotification('An error occurred. Please refresh if issues persist.', 'error');
    }
});

// Export functions for global access
window.switchLanguage = switchLanguage;
window.showNotification = showNotification;
window.installApp = installApp;
window.formatNumber = formatNumber;
window.getGreeting = getGreeting;
