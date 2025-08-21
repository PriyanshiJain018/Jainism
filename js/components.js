// js/components.js

const universeData = [
    {
        id: 1,
        name: 'universes.prathamanuyoga.name',
        subtitle: 'universes.prathamanuyoga.subtitle',
        description: 'universes.prathamanuyoga.description',
        color: 'universe-1',
        isUnlocked: true,
        progress: 25,
        stages: 2
    },
    {
        id: 2,
        name: 'universes.karananuyoga.name',
        subtitle: 'universes.karananuyoga.subtitle',
        description: 'universes.karananuyoga.description',
        color: 'universe-2',
        isUnlocked: false,
        progress: 0,
        stages: 2
    },
    {
        id: 3,
        name: 'universes.charananuyoga.name',
        subtitle: 'universes.charananuyoga.subtitle',
        description: 'universes.charananuyoga.description',
        color: 'universe-3',
        isUnlocked: false,
        progress: 0,
        stages: 3
    },
    {
        id: 4,
        name: 'universes.dravyanuyoga.name',
        subtitle: 'universes.dravyanuyoga.subtitle',
        description: 'universes.dravyanuyoga.description',
        color: 'universe-4',
        isUnlocked: false,
        progress: 0,
        stages: 2
    }
];

function createUniverseCard(universe) {
    const card = document.createElement('div');
    card.className = `universe-card ${universe.color} ${!universe.isUnlocked ? 'locked' : ''}`;
    
    card.innerHTML = `
        <div class="universe-header">
            <div class="universe-info">
                <h4>${t(universe.name)}</h4>
                <p>${t(universe.subtitle)}</p>
            </div>
            ${!universe.isUnlocked ? '<span class="lock-icon">🔒</span>' : ''}
        </div>
        <p class="universe-description">${t(universe.description)}</p>
        <div class="universe-footer">
            <span class="stages-count">${t('universes.stages', { count: universe.stages })}</span>
            ${universe.isUnlocked ? `
                <div class="progress-info">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${universe.progress}%"></div>
                    </div>
                    <span class="progress-text">${universe.progress}%</span>
                </div>
            ` : `<span class="stages-count">${t('universes.locked')}</span>`}
        </div>
    `;
    
    // Add click handler
    if (universe.isUnlocked) {
        card.addEventListener('click', () => {
            // This will open the universe content later
            showUniverseContent(universe);
        });
    }
    
    return card;
}

function updateUniverses() {
    const container = document.getElementById('universes-container');
    container.innerHTML = '';
    
    universeData.forEach(universe => {
        container.appendChild(createUniverseCard(universe));
    });
}

function showUniverseContent(universe) {
    // Placeholder for universe navigation
    alert(`Opening ${t(universe.name)}! (Navigation coming soon)`);
}

// User data management
const userData = {
    xp: 150,
    level: 1,
    streak: 3
};

function updateUserStats() {
    document.getElementById('user-xp').textContent = userData.xp;
    document.getElementById('user-level').textContent = userData.level;
    document.getElementById('total-xp').textContent = userData.xp;
    document.getElementById('daily-streak').textContent = userData.streak;
    document.getElementById('current-level').textContent = userData.level;
}

// Daily Prashna functionality
function initializeDailyPrashna() {
    const revealButton = document.getElementById('reveal-answer');
    const answerContainer = document.getElementById('answer-container');
    
    revealButton.addEventListener('click', () => {
        answerContainer.classList.remove('hidden');
        revealButton.style.display = 'none';
        
        // Add XP (in a real app, this would be saved)
        userData.xp += 10;
        updateUserStats();
    });
}

// Install prompt for PWA
let deferredPrompt;
let installPromptEl;

function initializeInstallPrompt() {
    // Create install prompt element
    installPromptEl = document.createElement('div');
    installPromptEl.className = 'install-prompt';
    installPromptEl.innerHTML = `
        <div>
            <strong>Install Jinasaraswati</strong>
            <p>Install this app on your device for better experience</p>
        </div>
        <div>
            <button id="install-btn">Install</button>
            <button class="close-btn" id="close-install">×</button>
        </div>
    `;
    
    document.body.appendChild(installPromptEl);
    
    // Event listeners
    document.getElementById('install-btn').addEventListener('click', installApp);
    document.getElementById('close-install').addEventListener('click', () => {
        installPromptEl.classList.remove('show');
    });
}

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
            installPromptEl.classList.remove('show');
        });
    }
}

// PWA install prompt handling
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install prompt after a delay
    setTimeout(() => {
        if (installPromptEl) {
            installPromptEl.classList.add('show');
        }
    }, 5000);
});

window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    if (installPromptEl) {
        installPromptEl.remove();
    }
    deferredPrompt = null;
});
