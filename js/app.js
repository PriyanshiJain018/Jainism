// js/app.js

// App initialization
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('app-content').classList.remove('hidden');
        
        // Initialize app
        initializeApp();
    }, 2000);
});

function initializeApp() {
    // Initialize language
    initializeLanguage();
    
    // Initialize components
    updateUserStats();
    updateUniverses();
    initializeDailyPrashna();
    initializeInstallPrompt();
    
    // Setup language switcher
    setupLanguageSwitcher();
    
    // Setup navigation
    setupNavigation();
    
    console.log('Jinasaraswati PWA initialized!');
}

function setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            updateLanguage(lang);
        });
    });
}

function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Handle navigation (placeholder)
            switch(index) {
                case 0: // Home
                    console.log('Navigate to Home');
                    break;
                case 1: // Badges
                    console.log('Navigate to Badges');
                    break;
                case 2: // Profile
                    console.log('Navigate to Profile');
                    break;
                case 3: // Settings
                    console.log('Navigate to Settings');
                    break;
            }
        });
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8',
        color: 'white',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        maxWidth: '300px'
    });
    
    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        margin: 0;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add some sample interactions
function addXP(amount) {
    userData.xp += amount;
    userData.level = Math.floor(userData.xp / 100) + 1;
    updateUserStats();
    showNotification(`+${amount} XP earned!`, 'success');
}

// Sample function to test PWA features
function testPWAFeatures() {
    console.log('Testing PWA features...');
    
    // Test notifications
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('Jinasaraswati', {
                    body: 'Welcome to your spiritual learning journey!',
                    icon: 'images/icons/icon-192x192.png'
                });
            }
        });
    }
    
    // Test local storage
    localStorage.setItem('test', 'PWA features working!');
    console.log('Local storage test:', localStorage.getItem('test'));
}

// Global error handler
window.addEventListener('error', function(e) {
    console.error('App error:', e.error);
    showNotification('Something went wrong. Please refresh the page.', 'error');
});

// Prevent context menu on touch devices for app-like feel
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
});

// Handle online/offline status
window.addEventListener('online', () => {
    showNotification('You are back online!', 'success');
});

window.addEventListener('offline', () => {
    showNotification('You are offline. Some features may be limited.', 'info');
});
