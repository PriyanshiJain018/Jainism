// js/components.js - Enhanced version with professional map interface and minigames

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
        isUnlocked: true,
        progress: 0,
        stages: 2
    }
];

// Enhanced lesson map with professional structure
const lessonMap = [
    // Stage 1: Anatomy of Karma
    {
        id: 'intro',
        stage: 1,
        type: 'lesson',
        position: { x: 50, y: 90 },
        title: { en: 'Introduction to Karma', hi: 'कर्म का परिचय' },
        icon: '🌟',
        color: '#667eea'
    },
    {
        id: 'jnanavarana',
        stage: 1,
        type: 'lesson',
        position: { x: 15, y: 75 },
        title: { en: 'Knowledge-Obscuring Karma', hi: 'ज्ञानावरण कर्म' },
        icon: '📚',
        color: '#FF6B6B'
    },
    {
        id: 'darshanavarana', 
        stage: 1,
        type: 'lesson',
        position: { x: 85, y: 75 },
        title: { en: 'Perception-Obscuring Karma', hi: 'दर्शनावरण कर्म' },
        icon: '👁️',
        color: '#4ECDC4'
    },
    {
        id: 'vedaniya',
        stage: 1,
        type: 'lesson', 
        position: { x: 25, y: 60 },
        title: { en: 'Feeling-Producing Karma', hi: 'वेदनीय कर्म' },
        icon: '⚖️',
        color: '#45B7D1'
    },
    {
        id: 'mohaniya',
        stage: 1,
        type: 'lesson',
        position: { x: 75, y: 60 },
        title: { en: 'Deluding Karma', hi: 'मोहनीय कर्म' },
        icon: '🌪️',
        color: '#F39C12'
    },
    {
        id: 'minigame1',
        stage: 1,
        type: 'minigame',
        position: { x: 50, y: 50 },
        title: { en: 'Karma Catcher', hi: 'कर्म पकड़ने वाला' },
        icon: '🎯',
        color: '#9B59B6'
    },
    {
        id: 'ayu',
        stage: 1,
        type: 'lesson',
        position: { x: 15, y: 35 },
        title: { en: 'Lifespan-Determining Karma', hi: 'आयु कर्म' },
        icon: '⏳',
        color: '#9B59B6'
    },
    {
        id: 'nama',
        stage: 1,
        type: 'lesson',
        position: { x: 85, y: 35 },
        title: { en: 'Body-Determining Karma', hi: 'नाम कर्म' },
        icon: '🎨',
        color: '#E67E22'
    },
    {
        id: 'gotra',
        stage: 1,
        type: 'lesson',
        position: { x: 25, y: 20 },
        title: { en: 'Status-Determining Karma', hi: 'गोत्र कर्म' },
        icon: '🏺',
        color: '#95A5A6'
    },
    {
        id: 'antaraya',
        stage: 1,
        type: 'lesson',
        position: { x: 75, y: 20 },
        title: { en: 'Obstructing Karma', hi: 'अंतराय कर्म' },
        icon: '🚧',
        color: '#E74C3C'
    },
    {
        id: 'classification',
        stage: 1,
        type: 'minigame',
        position: { x: 50, y: 10 },
        title: { en: 'Classification Challenge', hi: 'वर्गीकरण चुनौती' },
        icon: '🔄',
        color: '#27AE60'
    },
    // Stage 2: Lifecycle of Karma  
    {
        id: 'stage2-intro',
        stage: 2,
        type: 'lesson',
        position: { x: 10, y: 90 },
        title: { en: 'Dynamic Nature of Karma', hi: 'कर्म की गतिशील प्रकृति' },
        icon: '🌊',
        color: '#3498DB'
    },
    {
        id: 'job-analogy',
        stage: 2,
        type: 'lesson',
        position: { x: 30, y: 85 },
        title: { en: 'Job Contract Analogy', hi: 'नौकरी अनुबंध उदाहरण' },
        icon: '📋',
        color: '#8E44AD'
    },
    {
        id: 'flow-simulator',
        stage: 2,
        type: 'minigame',
        position: { x: 70, y: 75 },
        title: { en: 'Karma Flow Simulator', hi: 'कर्म प्रवाह सिमुलेटर' },
        icon: '⚡',
        color: '#E74C3C'
    }
];

// User progress data
const userData = {
    xp: 150,
    level: 1,
    streak: 3,
    completedLessons: [],
    currentView: 'map'
};

// Minigame data
const minigameScenarios = [
    {
        text: "You feel intense jealousy towards a knowledgeable person",
        textHi: "आप किसी ज्ञानी व्यक्ति से तीव्र ईर्ष्या करते हैं",
        answer: "jnanavarana",
        options: ["jnanavarana", "darshanavarana", "mohaniya"]
    },
    {
        text: "You sleep during daytime out of laziness",
        textHi: "आप आलस्य के कारण दिन में सोते हैं",
        answer: "darshanavarana", 
        options: ["darshanavarana", "vedaniya", "ayu"]
    },
    {
        text: "You show compassion to a suffering animal",
        textHi: "आप एक पीड़ित जानवर पर दया दिखाते हैं",
        answer: "vedaniya",
        options: ["vedaniya", "nama", "gotra"]
    },
    {
        text: "You speak harshly and cause someone sorrow",
        textHi: "आप कठोर बोलते हैं और किसी को दुख पहुंचाते हैं",
        answer: "vedaniya",
        options: ["vedaniya", "mohaniya", "antaraya"]
    },
    {
        text: "You prevent someone from taking righteous vows",
        textHi: "आप किसी को धर्म व्रत लेने से रोकते हैं",
        answer: "mohaniya",
        options: ["mohaniya", "antaraya", "gotra"]
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
    
    if (universe.isUnlocked) {
        card.addEventListener('click', () => {
            showUniverseContent(universe);
        });
    }
    
    return card;
}

function updateUniverses() {
    const container = document.getElementById('universes-container');
    if (!container) return;
    
    container.innerHTML = '';
    universeData.forEach(universe => {
        container.appendChild(createUniverseCard(universe));
    });
}

function showUniverseContent(universe) {
    if (universe.id === 4) {
        showKarmaMapInterface();
    } else {
        alert(`Opening ${t(universe.name)}! (Navigation coming soon)`);
    }
}

// NEW: Professional Map Interface
function showKarmaMapInterface() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="karma-map-container">
            <div class="map-header">
                <button class="back-button" onclick="goBackToUniverses()">
                    ← ${t('universes.dravyanuyoga.name')}
                </button>
                <h1>${t('karma.universe.title')}</h1>
                <div class="language-switcher">
                    <button class="lang-btn ${currentLanguage === 'en' ? 'active' : ''}" onclick="switchLanguage('en')">EN</button>
                    <button class="lang-btn ${currentLanguage === 'hi' ? 'active' : ''}" onclick="switchLanguage('hi')">हिं</button>
                </div>
            </div>
            
            <div class="stats-panel">
                <div class="stat-item">
                    <span class="stat-icon">⭐</span>
                    <div class="stat-info">
                        <div class="stat-value">${userData.xp}</div>
                        <div class="stat-label">${t('stats.totalXP')}</div>
                    </div>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">🏆</span>
                    <div class="stat-info">
                        <div class="stat-value">${userData.level}</div>
                        <div class="stat-label">${t('stats.currentLevel')}</div>
                    </div>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">🎯</span>
                    <div class="stat-info">
                        <div class="stat-value">${userData.completedLessons.length}/${lessonMap.length}</div>
                        <div class="stat-label">${t('stats.lessonsCompleted')}</div>
                    </div>
                </div>
            </div>
            
            <div class="journey-title">
                <h2>${t('karma.journey.title')}</h2>
            </div>
            
            <div class="lesson-map">
                <svg class="connection-lines" width="100%" height="100%">
                    ${createConnectionLines()}
                </svg>
                ${createLessonNodes()}
            </div>
        </div>
    `;
}

function createConnectionLines() {
    let lines = '';
    for (let i = 0; i < lessonMap.length - 1; i++) {
        const lesson = lessonMap[i];
        const nextLesson = lessonMap[i + 1];
        lines += `
            <line x1="${lesson.position.x}%" y1="${lesson.position.y}%" 
                  x2="${nextLesson.position.x}%" y2="${nextLesson.position.y}%" 
                  stroke="#DDD" stroke-width="2" stroke-dasharray="5,5" />
        `;
    }
    return lines;
}

function createLessonNodes() {
    return lessonMap.map((lesson, index) => {
        const isCompleted = userData.completedLessons.includes(lesson.id);
        const isAvailable = index === 0 || userData.completedLessons.includes(lessonMap[index - 1]?.id);
        const isLocked = !isAvailable;
        
        return `
            <div class="lesson-node ${lesson.type} ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}"
                 style="left: ${lesson.position.x}%; top: ${lesson.position.y}%; background-color: ${isCompleted ? '#27AE60' : lesson.color}"
                 onclick="${!isLocked ? `openLesson('${lesson.id}', '${lesson.type}')` : ''}">
                <div class="node-icon">
                    ${isLocked ? '🔒' : lesson.icon}
                </div>
                <div class="node-title">
                    ${lesson.title[currentLanguage]}
                </div>
                ${isCompleted ? '<div class="completion-star">⭐</div>' : ''}
                ${lesson.type === 'minigame' ? '<div class="minigame-indicator">🎮</div>' : ''}
            </div>
        `;
    }).join('');
}

// NEW: Lesson and Minigame Functions
function openLesson(lessonId, type) {
    const lesson = lessonMap.find(l => l.id === lessonId);
    if (!lesson) return;
    
    if (type === 'minigame') {
        openMinigame(lesson);
    } else {
        openLessonContent(lesson);
    }
}

function openLessonContent(lesson) {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="lesson-content">
            <div class="lesson-header">
                <button class="back-btn" onclick="showKarmaMapInterface()">
                    ← ${t('navigation.backToMap')}
                </button>
                <h1>${lesson.title[currentLanguage]}</h1>
            </div>
            
            <div class="karma-visualization">
                ${createKarmaVisualization(lesson.id)}
            </div>
            
            <div class="lesson-body">
                <div class="lesson-text">
                    ${getLessonContent(lesson.id)}
                </div>
                
                <div class="lesson-actions">
                    <button class="complete-btn" onclick="completeLesson('${lesson.id}')">
                        ${t('actions.complete')}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function openMinigame(lesson) {
    const mainContent = document.querySelector('.main-content');
    
    switch(lesson.id) {
        case 'minigame1':
            showKarmaCatcherGame(lesson);
            break;
        case 'flow-simulator':
            showKarmaFlowSimulator(lesson);
            break;
        case 'classification':
            showClassificationChallenge(lesson);
            break;
        default:
            showKarmaMapInterface();
    }
}

// NEW: Karma Catcher Minigame
function showKarmaCatcherGame(lesson) {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="minigame-content">
            <div class="lesson-header">
                <button class="back-btn" onclick="showKarmaMapInterface()">
                    ← ${t('navigation.backToMap')}
                </button>
                <h1>${lesson.title[currentLanguage]}</h1>
            </div>
            
            <div class="minigame-container" id="karma-catcher-game">
                <div class="game-header">
                    <h2>${t('minigames.karmaCatcher')}</h2>
                    <div class="game-stats">
                        <div>Score: <span id="game-score">0</span></div>
                        <div>Time: <span id="game-timer">60</span>s</div>
                    </div>
                </div>

                <div class="game-area" id="game-area">
                    <div class="game-start" id="game-start">
                        <button class="start-game-btn" onclick="startKarmaCatcher()">
                            ▶️ ${t('actions.startGame')}
                        </button>
                        <p>${t('minigames.karmaCatcher.instructions')}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

let gameState = {
    score: 0,
    timeLeft: 60,
    isActive: false,
    currentScenario: null
};

function startKarmaCatcher() {
    gameState = { score: 0, timeLeft: 60, isActive: true, currentScenario: null };
    document.getElementById('game-score').textContent = gameState.score;
    document.getElementById('game-timer').textContent = gameState.timeLeft;
    
    nextScenario();
    startGameTimer();
}

function nextScenario() {
    const randomScenario = minigameScenarios[Math.floor(Math.random() * minigameScenarios.length)];
    gameState.currentScenario = randomScenario;
    
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <div class="scenario-container">
            <div class="scenario-text">
                ${randomScenario[currentLanguage === 'hi' ? 'textHi' : 'text']}
            </div>
            <div class="answer-options">
                ${randomScenario.options.map(option => `
                    <button class="option-btn" onclick="selectAnswer('${option}')">
                        ${t(`karma.${option}`)}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function selectAnswer(selected) {
    if (!gameState.isActive) return;
    
    if (selected === gameState.currentScenario.answer) {
        gameState.score += 10;
        document.getElementById('game-score').textContent = gameState.score;
        showNotification(t('game.correct'), 'success');
    } else {
        showNotification(t('game.incorrect'), 'error');
    }
    
    if (gameState.timeLeft > 0) {
        setTimeout(nextScenario, 1000);
    }
}

function startGameTimer() {
    const timer = setInterval(() => {
        gameState.timeLeft--;
        document.getElementById('game-timer').textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameState.isActive = false;
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <div class="game-end">
            <h3>${t('game.gameOver')}</h3>
            <p>${t('game.finalScore')}: ${gameState.score}</p>
            <button class="complete-btn" onclick="completeMinigame('minigame1')">
                ${t('actions.complete')}
            </button>
        </div>
    `;
}

// NEW: Karma Flow Simulator
function showKarmaFlowSimulator(lesson) {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="minigame-content">
            <div class="lesson-header">
                <button class="back-btn" onclick="showKarmaMapInterface()">
                    ← ${t('navigation.backToMap')}
                </button>
                <h1>${lesson.title[currentLanguage]}</h1>
            </div>
            
            <div class="flow-simulator">
                <h2>${t('minigames.karmaFlowSim')}</h2>
                <div class="karma-particles-display" id="karma-particles">
                    ${createKarmaParticle('jnanavarana', 10, 5)}
                </div>
                <div class="simulator-actions">
                    <button class="complete-btn" onclick="completeMinigame('flow-simulator')">
                        ${t('actions.complete')}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createKarmaParticle(type, timer, intensity) {
    const colors = {
        jnanavarana: '#FF6B6B',
        darshanavarana: '#4ECDC4',
        vedaniya: '#45B7D1',
        mohaniya: '#F39C12'
    };
    
    const icons = {
        jnanavarana: '📚',
        darshanavarana: '👁️',
        vedaniya: '⚖️',
        mohaniya: '🌪️'
    };
    
    return `
        <div class="karma-particle-container">
            <div class="particle-visual" style="background-color: ${colors[type]}">
                <div class="particle-icon">${icons[type]}</div>
                <div class="particle-info">
                    <div>Timer: ${timer}</div>
                    <div>Intensity: ${intensity}</div>
                </div>
            </div>
            <div class="particle-actions">
                <button class="action-btn" onclick="performAction('meditate', '${type}')">
                    ${t('actions.meditate')}
                </button>
                <button class="action-btn" onclick="performAction('anger', '${type}')">
                    ${t('actions.anger')}
                </button>
                <button class="action-btn" onclick="performAction('charity', '${type}')">
                    ${t('actions.charity')}
                </button>
            </div>
        </div>
    `;
}

function performAction(action, karmaType) {
    let message = '';
    switch(action) {
        case 'meditate':
            message = t('effects.meditation');
            break;
        case 'anger':
            message = t('effects.anger');
            break;
        case 'charity':
            message = t('effects.charity');
            break;
    }
    showNotification(message, 'info');
}

// Professional Karma Visualizations
function createKarmaVisualization(lessonId) {
    switch(lessonId) {
        case 'jnanavarana':
            return `
                <div class="professional-visualization">
                    <svg width="300" height="300" viewBox="0 0 300 300" class="karma-svg">
                        <defs>
                            <radialGradient id="knowledge-glow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" style="stop-color: #FFD700; stop-opacity: 1" />
                                <stop offset="100%" style="stop-color: #FF8C00; stop-opacity: 0" />
                            </radialGradient>
                            <pattern id="veil-pattern" patternUnits="userSpaceOnUse" width="4" height="4">
                                <rect width="4" height="4" fill="#000" opacity="0.3"/>
                            </pattern>
                        </defs>
                        
                        <circle cx="150" cy="150" r="80" fill="url(#knowledge-glow)" class="pulse-animation" />
                        <text x="150" y="160" text-anchor="middle" font-size="50" fill="#FFF">🕉️</text>
                        <rect x="70" y="70" width="160" height="160" fill="url(#veil-pattern)" rx="80" class="veil-float" />
                        <text x="150" y="280" text-anchor="middle" font-size="14" fill="#FFF">
                            ${t('visualization.knowledgeObscured')}
                        </text>
                    </svg>
                </div>
            `;
        case 'darshanavarana':
            return `
                <div class="professional-visualization">
                    <svg width="300" height="300" viewBox="0 0 300 300" class="karma-svg">
                        <rect x="120" y="80" width="60" height="120" fill="#8B4513" rx="8"/>
                        <rect x="130" y="90" width="40" height="100" fill="#CD853F" rx="5"/>
                        <circle cx="155" cy="130" r="4" fill="#FFD700"/>
                        
                        <circle cx="80" cy="140" r="20" fill="#4A4A4A"/>
                        <rect x="70" y="160" width="20" height="30" fill="#4A4A4A"/>
                        <text x="80" y="150" text-anchor="middle" font-size="16" fill="#FFF">🛡️</text>
                        
                        <circle cx="220" cy="140" r="16" fill="#8B4513"/>
                        <rect x="212" y="156" width="16" height="24" fill="#8B4513"/>
                        <text x="220" y="150" text-anchor="middle" font-size="14" fill="#FFF">🧘</text>
                        
                        <line x1="100" y1="140" x2="200" y2="140" stroke="#FF0000" stroke-width="4" 
                              opacity="0.7" class="block-animation"/>
                        <text x="150" y="280" text-anchor="middle" font-size="14" fill="#FFF">
                            ${t('visualization.perceptionBlocked')}
                        </text>
                    </svg>
                </div>
            `;
        default:
            return `
                <div class="professional-visualization">
                    <div class="generic-visual" style="background: linear-gradient(135deg, #667eea, #764ba2)">
                        <div class="visual-icon">⚡</div>
                    </div>
                </div>
            `;
    }
}

function getLessonContent(lessonId) {
    const content = {
        'intro': {
            en: 'Welcome to the study of karma. In this journey, you will learn about the eight types of karma that bind every soul and how they affect our spiritual progress.',
            hi: 'कर्म के अध्ययन में आपका स्वागत है। इस यात्रा में, आप उन आठ प्रकार के कर्मों के बारे में सीखेंगे जो हर आत्मा को बांधते हैं और हमारी आध्यात्मिक प्रगति को कैसे प्रभावित करते हैं।'
        },
        'jnanavarana': {
            en: 'Jñānāvaraṇa Karma obscures the soul\'s infinite knowledge. Like a cloth covering a deity\'s face, this karma prevents clear understanding and wisdom.',
            hi: 'ज्ञानावरण कर्म आत्मा के अनंत ज्ञान को आवृत करता है। देवता के चेहरे को ढकने वाले कपड़े की तरह, यह कर्म स्पष्ट समझ और बुद्धि को रोकता है।'
        }
        // Add more content for other lessons...
    };
    
    return content[lessonId] ? content[lessonId][currentLanguage] : 'Lesson content coming soon...';
}

function completeLesson(lessonId) {
    if (!userData.completedLessons.includes(lessonId)) {
        userData.completedLessons.push(lessonId);
        userData.xp += 25;
        showNotification(t('notifications.lessonComplete'), 'success');
    }
    showKarmaMapInterface();
}

function completeMinigame(gameId) {
    if (!userData.completedLessons.includes(gameId)) {
        userData.completedLessons.push(gameId);
        userData.xp += 50;
        showNotification(t('notifications.minigameComplete'), 'success');
    }
    showKarmaMapInterface();
}

function switchLanguage(lang) {
    currentLanguage = lang;
    if (userData.currentView === 'map') {
        showKarmaMapInterface();
    }
}

// Update existing functions
function updateUserStats() {
    const elements = ['user-xp', 'user-level', 'total-xp', 'daily-streak', 'current-level'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            switch(id) {
                case 'user-xp':
                case 'total-xp':
                    element.textContent = userData.xp;
                    break;
                case 'user-level':
                case 'current-level':
                    element.textContent = userData.level;
                    break;
                case 'daily-streak':
                    element.textContent = userData.streak;
                    break;
            }
        }
    });
}

function initializeDailyPrashna() {
    const revealButton = document.getElementById('reveal-answer');
    const answerContainer = document.getElementById('answer-container');
    
    if (revealButton && answerContainer) {
        revealButton.addEventListener('click', () => {
            answerContainer.classList.remove('hidden');
            revealButton.style.display = 'none';
            userData.xp += 10;
            updateUserStats();
        });
    }
}

function goBackToUniverses() {
    location.reload();
}

// Install prompt functionality (existing code)
let deferredPrompt;
let installPromptEl;

function initializeInstallPrompt() {
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
    
    const installBtn = document.getElementById('install-btn');
    const closeBtn = document.getElementById('close-install');
    
    if (installBtn) installBtn.addEventListener('click', installApp);
    if (closeBtn) closeBtn.addEventListener('click', () => {
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

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
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
