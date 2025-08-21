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
        isUnlocked: true, // CHANGED TO TRUE FOR KARMA TESTING
        progress: 0,
        stages: 2
    }
];

// NEW: Karma Data
const karmaTypes = [
    {
        id: 'jnanavarana',
        name: 'karma.jnanavarana.name',
        description: 'karma.jnanavarana.description',
        analogy: 'karma.jnanavarana.analogy',
        color: '#FF6B6B',
        particles: '🟥'
    },
    {
        id: 'darshanavarana',
        name: 'karma.darshanavarana.name',
        description: 'karma.darshanavarana.description',
        analogy: 'karma.darshanavarana.analogy',
        color: '#4ECDC4',
        particles: '🟢'
    },
    {
        id: 'vedaniya',
        name: 'karma.vedaniya.name',
        description: 'karma.vedaniya.description',
        analogy: 'karma.vedaniya.analogy',
        color: '#45B7D1',
        particles: '🔵'
    },
    {
        id: 'mohaniya',
        name: 'karma.mohaniya.name',
        description: 'karma.mohaniya.description',
        analogy: 'karma.mohaniya.analogy',
        color: '#F39C12',
        particles: '🟡'
    },
    {
        id: 'ayu',
        name: 'karma.ayu.name',
        description: 'karma.ayu.description',
        analogy: 'karma.ayu.analogy',
        color: '#9B59B6',
        particles: '🟣'
    },
    {
        id: 'nama',
        name: 'karma.nama.name',
        description: 'karma.nama.description',
        analogy: 'karma.nama.analogy',
        color: '#E67E22',
        particles: '🟠'
    },
    {
        id: 'gotra',
        name: 'karma.gotra.name',
        description: 'karma.gotra.description',
        analogy: 'karma.gotra.analogy',
        color: '#95A5A6',
        particles: '⚫'
    },
    {
        id: 'antaraya',
        name: 'karma.antaraya.name',
        description: 'karma.antaraya.description',
        analogy: 'karma.antaraya.analogy',
        color: '#E74C3C',
        particles: '🔴'
    }
];

// User data management
const userData = {
    xp: 150,
    level: 1,
    streak: 3,
    soulPurity: 100,
    karmaAccumulated: []
};

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
    if (universe.id === 4) { // Dravyanuyoga
        showKarmaLearning();
    } else {
        alert(`Opening ${t(universe.name)}! (Navigation coming soon)`);
    }
}

// NEW: Karma Learning Interface
function showKarmaLearning() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="karma-learning">
            <header class="karma-header">
                <button class="back-button" onclick="goBackToUniverses()">
                    ${t('karma.backToUniverse')}
                </button>
                <h1>${t('karma.title')}</h1>
                <p>${t('karma.subtitle')}</p>
            </header>

            <div class="karma-stages">
                <div class="stage-card" onclick="showKarmaStage1()">
                    <h3>${t('karma.stage1.title')}</h3>
                    <p>${t('karma.stage1.subtitle')}</p>
                    <div class="stage-progress">
                        <span>🎯 Learn the 8 Types</span>
                    </div>
                </div>
                
                <div class="stage-card" onclick="showKarmaStage2()">
                    <h3>${t('karma.stage2.title')}</h3>
                    <p>${t('karma.stage2.subtitle')}</p>
                    <div class="stage-progress">
                        <span>⚡ Master the 10 States</span>
                    </div>
                </div>
            </div>

            <div class="karma-quick-access">
                <button class="karma-simulator-btn" onclick="showKarmaSimulator()">
                    🧪 ${t('karma.simulator.title')}
                </button>
                <button class="karma-quiz-btn" onclick="showKarmaQuiz()">
                    📝 ${t('karma.quiz.title')}
                </button>
            </div>
        </div>
    `;
}

// NEW: Karma Stage 1 - Eight Types
function showKarmaStage1() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="karma-stage1">
            <header class="karma-header">
                <button class="back-button" onclick="showKarmaLearning()">
                    ← ${t('karma.title')}
                </button>
                <h1>${t('karma.stage1.title')}</h1>
                <p>${t('karma.stage1.subtitle')}</p>
            </header>

            <div class="soul-display">
                <div class="soul-avatar" id="soul-avatar">
                    <div class="soul-core">🤍</div>
                    <div class="karma-particles" id="karma-particles"></div>
                </div>
                <p class="soul-status">${t('karma.simulator.soulPurity', { purity: userData.soulPurity })}</p>
            </div>

            <div class="karma-types-grid">
                ${karmaTypes.map(karma => `
                    <div class="karma-type-card" onclick="exploreKarmaType('${karma.id}')" style="border-left: 4px solid ${karma.color}">
                        <div class="karma-icon">${karma.particles}</div>
                        <h3>${t(karma.name)}</h3>
                        <p>${t(karma.description)}</p>
                        <small><em>${t(karma.analogy)}</em></small>
                    </div>
                `).join('')}
            </div>

            <div class="karma-interaction">
                <h3>${t('karma.simulator.instruction')}</h3>
                <div class="scenario" id="current-scenario">
                    <p>${t('karma.simulator.scenario1')}</p>
                    <button onclick="makeKarmaChoice('negative')">${t('karma.simulator.scenario1.option1')}</button>
                    <button onclick="makeKarmaChoice('positive')">${t('karma.simulator.scenario1.option2')}</button>
                </div>
            </div>

            <button class="reset-soul-btn" onclick="resetSoul()">
                ${t('karma.simulator.reset')}
            </button>
        </div>
    `;
    
    updateSoulDisplay();
}

// NEW: Karma interaction functions
function makeKarmaChoice(type) {
    if (type === 'negative') {
        attachKarma('jnanavarana');
        attachKarma('antaraya');
        userData.soulPurity = Math.max(0, userData.soulPurity - 15);
    } else {
        userData.soulPurity = Math.min(100, userData.soulPurity + 10);
        userData.xp += 5;
    }
    
    updateSoulDisplay();
    updateUserStats();
    
    // Show next scenario
    setTimeout(() => {
        const scenario = document.getElementById('current-scenario');
        scenario.innerHTML = `
            <p>${t('karma.simulator.scenario2')}</p>
            <button onclick="makeKarmaChoice2('negative')">${t('karma.simulator.scenario2.option1')}</button>
            <button onclick="makeKarmaChoice2('positive')">${t('karma.simulator.scenario2.option2')}</button>
        `;
    }, 1000);
}

function makeKarmaChoice2(type) {
    if (type === 'negative') {
        attachKarma('jnanavarana');
        userData.soulPurity = Math.max(0, userData.soulPurity - 15);
    } else {
        userData.soulPurity = Math.min(100, userData.soulPurity + 10);
        userData.xp += 5;
    }
    
    updateSoulDisplay();
    updateUserStats();
}

function attachKarma(karmaId) {
    const karma = karmaTypes.find(k => k.id === karmaId);
    userData.karmaAccumulated.push(karma);
    
    // Visual effect
    const particlesContainer = document.getElementById('karma-particles');
    if (particlesContainer) {
        const particle = document.createElement('div');
        particle.className = 'karma-particle';
        particle.textContent = karma.particles;
        particle.style.color = karma.color;
        particlesContainer.appendChild(particle);
        
        // Animation
        particle.style.animation = 'karmaAttach 1s ease-in-out';
    }
}

function updateSoulDisplay() {
    const soulStatus = document.querySelector('.soul-status');
    if (soulStatus) {
        soulStatus.textContent = t('karma.simulator.soulPurity', { purity: userData.soulPurity });
    }
    
    const soulCore = document.querySelector('.soul-core');
    if (soulCore) {
        if (userData.soulPurity > 80) {
            soulCore.textContent = '🤍';
            soulCore.style.filter = 'brightness(1.2)';
        } else if (userData.soulPurity > 50) {
            soulCore.textContent = '🩶';
            soulCore.style.filter = 'brightness(1)';
        } else {
            soulCore.textContent = '🖤';
            soulCore.style.filter = 'brightness(0.8)';
        }
    }
}

function resetSoul() {
    userData.soulPurity = 100;
    userData.karmaAccumulated = [];
    
    const particlesContainer = document.getElementById('karma-particles');
    if (particlesContainer) {
        particlesContainer.innerHTML = '';
    }
    
    updateSoulDisplay();
    showNotification('Soul purified! ✨', 'success');
}

function exploreKarmaType(karmaId) {
    const karma = karmaTypes.find(k => k.id === karmaId);
    showNotification(`${t(karma.name)}: ${t(karma.analogy)}`, 'info');
}

// NEW: Navigation functions
function goBackToUniverses() {
    location.reload(); // Simple way to go back to main screen
}

function showKarmaStage2() {
    alert('Stage 2: Ten States coming soon! Focus on Stage 1 for now.');
}

function showKarmaSimulator() {
    showKarmaStage1(); // For now, redirect to stage 1
}

function showKarmaQuiz() {
    alert('Quiz feature coming soon!');
}

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
    
    if (revealButton) {
        revealButton.addEventListener('click', () => {
            answerContainer.classList.remove('hidden');
            revealButton.style.display = 'none';
            
            // Add XP (in a real app, this would be saved)
            userData.xp += 10;
            updateUserStats();
        });
    }
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
