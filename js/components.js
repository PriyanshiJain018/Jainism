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
        isUnlocked: true,
        progress: 0,
        stages: 2
    }
];

// Comprehensive Karma Data
const karmaTypes = [
    {
        id: 'jnanavarana',
        name: 'Jñānāvaraṇa Karma',
        nameHi: 'ज्ञानावरण कर्म',
        function: 'This karma obscures the soul\'s innate quality of infinite knowledge',
        functionHi: 'यह कर्म आत्मा के अनंत ज्ञान गुण को आवृत करता है',
        analogy: 'Like a cloth covering the face of a deity',
        analogyHi: 'देवता के मुख पर ढके वस्त्र के समान',
        visualType: 'deity-veil',
        color: '#FF6B6B',
        causes: [
            'Hiding the name of a teacher or guru',
            'Creating obstacles in someone\'s study',
            'Feeling jealous when hearing about someone\'s knowledge',
            'Misusing tools of knowledge',
            'Refusing to share knowledge out of ego'
        ],
        causesHi: [
            'शिक्षा गुरु का नाम छुपाना',
            'किसी के अध्ययन में बाधा डालना',
            'किसी के ज्ञान की महिमा सुनकर ईर्ष्या भाव रखना',
            'ज्ञान के साधनों का दुरुपयोग करना',
            'अहंकार के कारण ज्ञान न देना'
        ],
        type: 'ghatiya'
    },
    {
        id: 'darshanavarana',
        name: 'Darśanāvaraṇa Karma',
        nameHi: 'दर्शनावरण कर्म',
        function: 'This karma obscures the soul\'s power of perception and spiritual insight',
        functionHi: 'यह कर्म आत्मा के दर्शन गुण को आवृत करता है',
        analogy: 'Like a gatekeeper blocking entry',
        analogyHi: 'द्वारपाल के समान',
        visualType: 'gatekeeper',
        color: '#4ECDC4',
        causes: [
            'Perception pride and ego about one\'s spiritual attainments',
            'Creating obstacles to spiritual practice',
            'Bursting someone\'s eyes or damaging sight',
            'Sleeping during daytime out of laziness',
            'Promoting atheistic views'
        ],
        causesHi: [
            'दर्शन मात्स्यर्य और अहंकार',
            'आध्यात्मिक अभ्यास में बाधा डालना',
            'आंखें फोड़ना या दृष्टि को नुकसान पहुंचाना',
            'दिन में आलस्य से सोना',
            'नास्तिकता को बढ़ावा देना'
        ],
        type: 'ghatiya'
    },
    {
        id: 'vedaniya',
        name: 'Vedanīya Karma',
        nameHi: 'वेदनीय कर्म',
        function: 'This karma causes the soul to experience pleasure (sātā) and pain (asātā)',
        functionHi: 'यह कर्म आत्मा को सुख-दुख का अनुभव कराता है',
        analogy: 'Like a sword blade coated with honey - sweet to taste but cuts the tongue',
        analogyHi: 'शक्कर की चाशनी से लिपटी तलवार के समान',
        visualType: 'honey-sword',
        color: '#45B7D1',
        subtypes: ['Sātā Vedanīya (Pleasure-producing)', 'Asātā Vedanīya (Pain-producing)'],
        type: 'aghatiya'
    },
    {
        id: 'mohaniya',
        name: 'Mohanīya Karma',
        nameHi: 'मोहनीय कर्म',
        function: 'The most powerful karma that attacks the soul\'s faith and conduct, causing delusion',
        functionHi: 'सबसे शक्तिशाली कर्म जो आत्मा के सम्यक्त्व और चारित्र गुण को घातता है',
        analogy: 'Like intoxicating wine that clouds judgment',
        analogyHi: 'मदिरा के समान जो विवेक को नष्ट करती है',
        visualType: 'intoxication',
        color: '#F39C12',
        type: 'ghatiya'
    },
    {
        id: 'ayu',
        name: 'Āyu Karma',
        nameHi: 'आयु कर्म',
        function: 'This karma determines lifespan and binds the soul to a specific body type',
        functionHi: 'यह कर्म जीवनकाल निर्धारित करता है और आत्मा को विशिष्ट शरीर में बांधता है',
        analogy: 'Like fetters that bind a person to a specific place',
        analogyHi: 'बेड़ी के समान जो व्यक्ति को विशिष्ट स्थान पर बांधती है',
        visualType: 'chains',
        color: '#9B59B6',
        type: 'aghatiya'
    },
    {
        id: 'nama',
        name: 'Nāma Karma',
        nameHi: 'नाम कर्म',
        function: 'This karma determines body structure, appearance, and form',
        functionHi: 'यह कर्म शरीर की संरचना, रूप और आकार निर्धारित करता है',
        analogy: 'Like a painter who creates different kinds of pictures',
        analogyHi: 'चित्रकार के समान जो विभिन्न प्रकार के चित्र बनाता है',
        visualType: 'painter',
        color: '#E67E22',
        type: 'aghatiya'
    },
    {
        id: 'gotra',
        name: 'Gotra Karma',
        nameHi: 'गोत्र कर्म',
        function: 'This karma determines family status and social position',
        functionHi: 'यह कर्म पारिवारिक स्थिति, सामाजिक प्रतिष्ठा निर्धारित करता है',
        analogy: 'Like a potter who shapes different types of vessels from the same clay',
        analogyHi: 'कुम्भकार के समान जो एक ही मिट्टी से विभिन्न बर्तन बनाता है',
        visualType: 'potter',
        color: '#95A5A6',
        type: 'aghatiya'
    },
    {
        id: 'antaraya',
        name: 'Antarāya Karma',
        nameHi: 'अंतराय कर्म',
        function: 'This karma creates obstacles in giving, gaining, enjoying, and exerting power',
        functionHi: 'यह कर्म दान, लाभ, भोग और वीर्य में विघ्न डालता है',
        analogy: 'Like a treasurer who blocks access to the king\'s wealth',
        analogyHi: 'भंडारी के समान जो राजा के धन तक पहुंच को रोकता है',
        visualType: 'treasurer',
        color: '#E74C3C',
        type: 'ghatiya'
    }
];

// User data management
const userData = {
    xp: 150,
    level: 1,
    streak: 3,
    stage1Completed: false,
    currentLessonIndex: 0
};

let currentLessonIndex = 0;
const totalLessons = karmaTypes.length + 3; // 8 karma types + intro + classification + quiz

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
        showKarmaLearning();
    } else {
        alert(`Opening ${t(universe.name)}! (Navigation coming soon)`);
    }
}

function showKarmaLearning() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="karma-learning">
            <header class="karma-header">
                <button class="back-button" onclick="goBackToUniverses()">
                    ← Back to Dravyānuyoga
                </button>
                <h1>Understanding Karma</h1>
                <p>The Invisible Forces of Reality</p>
            </header>

            <div class="karma-intro">
                <div class="intro-card">
                    <h3>What is Karma?</h3>
                    <p><strong>Definition:</strong> In the world, whoever is richer or poorer, king or subject, young or old, wise or foolish - karma does not discriminate. Whatever actions one performs, one receives corresponding results. This is karma.</p>
                </div>
            </div>

            <div class="karma-stages">
                <div class="stage-card" onclick="showKarmaStage1()">
                    <div class="stage-number">1</div>
                    <h3>The Anatomy of Karma</h3>
                    <p>Learn the 8 types of karma that bind the soul</p>
                    <div class="stage-progress">
                        <span>Master the 8 Veils of the Soul</span>
                        <div class="completion-badge ${userData.stage1Completed ? 'completed' : ''}">
                            ${userData.stage1Completed ? 'Completed' : 'Not Started'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showKarmaStage1() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="karma-stage1">
            <header class="karma-header">
                <button class="back-button" onclick="showKarmaLearning()">
                    ← Understanding Karma
                </button>
                <h1>Stage 1: The Anatomy of Karma</h1>
                <p>The 8 Veils of the Soul</p>
            </header>

            <div class="learning-progress">
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" id="learning-progress" style="width: 0%"></div>
                </div>
                <p class="progress-text">Progress: <span id="progress-percentage">0</span>%</p>
            </div>

            <div id="lesson-content">
                <!-- Dynamic content will be loaded here -->
            </div>

            <div class="lesson-navigation">
                <button id="prev-btn" class="nav-btn" onclick="previousLesson()" disabled>Previous</button>
                <button id="next-btn" class="nav-btn" onclick="nextLesson()">Start Learning</button>
            </div>
        </div>
    `;
    
    currentLessonIndex = 0;
    loadLesson(currentLessonIndex);
}

function loadLesson(index) {
    const content = document.getElementById('lesson-content');
    if (!content) return;
    
    if (index === 0) {
        // Introduction lesson
        content.innerHTML = createIntroductionLesson();
    } else if (index <= karmaTypes.length) {
        // Karma detail lessons
        const karma = karmaTypes[index - 1];
        content.innerHTML = createKarmaDetailLesson(karma);
    } else if (index === karmaTypes.length + 1) {
        // Classification lesson
        content.innerHTML = createClassificationLesson();
    } else {
        // Quiz lesson
        content.innerHTML = createQuizLesson();
    }
    
    updateLessonProgress();
    updateNavigationButtons();
}

function createIntroductionLesson() {
    return `
        <div class="lesson-intro">
            <h2>Introduction to the 8 Karmas</h2>
            <div class="cosmic-soul-display">
                <div class="pure-soul-container">
                    <div class="soul-radiance"></div>
                    <div class="pure-soul">✨</div>
                    <p>Pure Soul</p>
                </div>
                <div class="transformation-arrow">→</div>
                <div class="bound-soul-container">
                    <div class="bound-soul">⚫</div>
                    <div class="karma-layers">
                        ${karmaTypes.map((karma, i) => `
                            <div class="karma-layer karma-layer-${i+1}" 
                                 style="--karma-color: ${karma.color}; --delay: ${i * 0.5}s"></div>
                        `).join('')}
                    </div>
                    <p>Soul with 8 Karmic Layers</p>
                </div>
            </div>
            <div class="intro-explanation">
                <h4>Understanding Karmic Bondage</h4>
                <p>Every soul in its pure state possesses infinite knowledge, infinite perception, infinite bliss, and infinite energy. However, due to karmic bondage, these qualities become obscured or affected.</p>
                <div class="classification-preview">
                    <div class="class-type ghatiya-preview">
                        <h5>Ghātiyā (4 types)</h5>
                        <p>Directly harm soul's qualities</p>
                    </div>
                    <div class="class-type aghatiya-preview">
                        <h5>Aghātiyā (4 types)</h5>
                        <p>Affect body and circumstances</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createKarmaDetailLesson(karma) {
    if (!karma) return '<div>Loading...</div>';
    
    return `
        <div class="karma-detail-lesson">
            <div class="karma-showcase">
                <div class="karma-visual-container">
                    ${createKarmaVisualization(karma)}
                </div>
                <div class="karma-info-panel">
                    <h2 style="color: ${karma.color}">${karma.name}</h2>
                    <div class="karma-badge ${karma.type}">${karma.type === 'ghatiya' ? 'Ghātiyā' : 'Aghātiyā'}</div>
                    <div class="function-section">
                        <h4>Function</h4>
                        <p>${karma.function}</p>
                    </div>
                    <div class="analogy-section">
                        <h4>Sacred Analogy</h4>
                        <p class="analogy-text">"${karma.analogy}"</p>
                    </div>
                </div>
            </div>
            
            <div class="causes-section">
                <h4>Causes of Bondage</h4>
                <div class="causes-grid">
                    ${karma.causes.map(cause => `
                        <div class="cause-item">
                            <span class="cause-marker">●</span>
                            <span>${cause}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="interactive-section">
                <button class="demo-button" onclick="demonstrateKarma('${karma.id}')">
                    Experience ${karma.name}
                </button>
            </div>
        </div>
    `;
}

function createKarmaVisualization(karma) {
    switch(karma.visualType) {
        case 'deity-veil':
            return `
                <div class="deity-visualization">
                    <div class="deity-figure">🕉️</div>
                    <div class="veil-overlay" id="veil-${karma.id}"></div>
                    <p class="visual-caption">Knowledge obscured by karmic veil</p>
                </div>
            `;
        case 'gatekeeper':
            return `
                <div class="gatekeeper-visualization">
                    <div class="spiritual-gate">🚪</div>
                    <div class="gatekeeper-figure">🛡️</div>
                    <div class="seeker-figure">🧘</div>
                    <p class="visual-caption">Perception blocked by karmic gatekeeper</p>
                </div>
            `;
        case 'honey-sword':
            return `
                <div class="sword-visualization">
                    <div class="honey-sword">🗡️</div>
                    <div class="honey-drip">🍯</div>
                    <p class="visual-caption">Pleasure and pain intertwined</p>
                </div>
            `;
        case 'intoxication':
            return `
                <div class="intoxication-visualization">
                    <div class="clear-mind">🧠</div>
                    <div class="intoxicating-mist">☁️</div>
                    <p class="visual-caption">Delusion clouding judgment</p>
                </div>
            `;
        case 'chains':
            return `
                <div class="chains-visualization">
                    <div class="soul-essence">✨</div>
                    <div class="binding-chains">⛓️</div>
                    <p class="visual-caption">Soul bound to specific lifespan</p>
                </div>
            `;
        case 'painter':
            return `
                <div class="painter-visualization">
                    <div class="artist-palette">🎨</div>
                    <div class="canvas-forms">🖼️</div>
                    <p class="visual-caption">Body forms painted by karma</p>
                </div>
            `;
        case 'potter':
            return `
                <div class="potter-visualization">
                    <div class="potter-wheel">🏺</div>
                    <div class="clay-forms">⚱️</div>
                    <p class="visual-caption">Status shaped like pottery</p>
                </div>
            `;
        case 'treasurer':
            return `
                <div class="treasurer-visualization">
                    <div class="treasure-chest">💰</div>
                    <div class="blocking-guard">🛡️</div>
                    <p class="visual-caption">Opportunities blocked by karma</p>
                </div>
            `;
        default:
            return `<div class="placeholder-visual" style="background: ${karma.color}">Visual representation</div>`;
    }
}

function createClassificationLesson() {
    return `
        <div class="classification-lesson">
            <h2>Classification: Ghātiyā vs Aghātiyā</h2>
            <div class="classification-explanation">
                <p>The 8 karmas are fundamentally classified based on their impact on the soul:</p>
            </div>
            <div class="classification-interactive">
                <div class="classification-boxes">
                    <div class="classification-box ghatiya-box" ondrop="dropKarma(event)" ondragover="allowDrop(event)">
                        <h3>Ghātiyā Karmas</h3>
                        <p>Directly destroy soul's inherent qualities</p>
                        <div class="drop-zone" id="ghatiya-zone"></div>
                    </div>
                    <div class="classification-box aghatiya-box" ondrop="dropKarma(event)" ondragover="allowDrop(event)">
                        <h3>Aghātiyā Karmas</h3>
                        <p>Affect body and external circumstances</p>
                        <div class="drop-zone" id="aghatiya-zone"></div>
                    </div>
                </div>
                <div class="karma-tiles">
                    ${karmaTypes.map(karma => `
                        <div class="karma-tile" draggable="true" ondragstart="dragKarma(event)" 
                             data-karma-id="${karma.id}" data-type="${karma.type}" 
                             style="border-color: ${karma.color}">
                            ${karma.name}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function createQuizLesson() {
    return `
        <div class="quiz-lesson">
            <h2>Knowledge Assessment</h2>
            <div class="quiz-question">
                <h3>Which karma is described as "like a cloth covering the face of a deity"?</h3>
                <div class="quiz-options">
                    <button class="quiz-option" onclick="selectAnswer('jnanavarana', true)">Jñānāvaraṇa Karma</button>
                    <button class="quiz-option" onclick="selectAnswer('darshanavarana', false)">Darśanāvaraṇa Karma</button>
                    <button class="quiz-option" onclick="selectAnswer('mohaniya', false)">Mohanīya Karma</button>
                </div>
            </div>
        </div>
    `;
}

function nextLesson() {
    if (currentLessonIndex < totalLessons - 1) {
        currentLessonIndex++;
        loadLesson(currentLessonIndex);
    } else {
        completeStage1();
    }
}

function previousLesson() {
    if (currentLessonIndex > 0) {
        currentLessonIndex--;
        loadLesson(currentLessonIndex);
    }
}

function updateLessonProgress() {
    const progress = ((currentLessonIndex + 1) / totalLessons) * 100;
    const progressBar = document.getElementById('learning-progress');
    const progressText = document.getElementById('progress-percentage');
    
    if (progressBar) progressBar.style.width = progress + '%';
    if (progressText) progressText.textContent = Math.round(progress);
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) prevBtn.disabled = currentLessonIndex === 0;
    if (nextBtn) {
        nextBtn.textContent = currentLessonIndex === totalLessons - 1 ? 'Complete Stage 1' : 'Next';
    }
}

function demonstrateKarma(karmaId) {
    const karma = karmaTypes.find(k => k.id === karmaId);
    if (karma) {
        showNotification(`${karma.name}: ${karma.analogy}`, 'info');
    }
}

function completeStage1() {
    userData.stage1Completed = true;
    userData.xp += 100;
    updateUserStats();
    showNotification('Stage 1 Completed! +100 XP', 'success');
    showKarmaLearning();
}

// Drag and drop for classification
function allowDrop(ev) {
    ev.preventDefault();
}

function dragKarma(ev) {
    ev.dataTransfer.setData("text", ev.target.getAttribute('data-karma-id'));
    ev.dataTransfer.setData("type", ev.target.getAttribute('data-type'));
}

function dropKarma(ev) {
    ev.preventDefault();
    const karmaId = ev.dataTransfer.getData("text");
    const karmaType = ev.dataTransfer.getData("type");
    const dropZone = ev.target.closest('.classification-box');
    
    if (dropZone) {
        const isCorrect = (dropZone.classList.contains('ghatiya-box') && karmaType === 'ghatiya') ||
                         (dropZone.classList.contains('aghatiya-box') && karmaType === 'aghatiya');
        
        if (isCorrect) {
            const tile = document.querySelector(`[data-karma-id="${karmaId}"]`);
            if (tile) {
                dropZone.querySelector('.drop-zone').appendChild(tile);
                tile.style.opacity = '0.7';
                showNotification('Correct!', 'success');
            }
        } else {
            showNotification('Try again - check the karma type!', 'error');
        }
    }
}

function selectAnswer(answer, isCorrect) {
    if (isCorrect) {
        userData.xp += 20;
        updateUserStats();
        showNotification('Correct! +20 XP', 'success');
    } else {
        showNotification('Incorrect. The answer is Jñānāvaraṇa Karma.', 'error');
    }
}

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

// Install prompt functionality
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
