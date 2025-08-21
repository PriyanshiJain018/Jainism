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

// Comprehensive Karma Data with all details from the book
const karmaTypes = [
    {
        id: 'jnanavarana',
        name: 'Jñānāvaraṇa Karma',
        nameHi: 'ज्ञानावरण कर्म',
        function: 'This karma obscures the soul\'s innate quality of infinite knowledge',
        functionHi: 'यह कर्म आत्मा के अनंत ज्ञान गुण को आवृत करता है',
        analogy: 'Like a cloth covering the face of a deity',
        analogyHi: 'देवता के मुख पर ढके वस्त्र के समान',
        color: '#FF6B6B',
        particles: '🟥',
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
        color: '#4ECDC4',
        particles: '🟢',
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
        color: '#45B7D1',
        particles: '🔵',
        subtypes: ['Sātā Vedanīya (Pleasure-producing)', 'Asātā Vedanīya (Pain-producing)'],
        subtypesHi: ['सातावेदनीय (सुख कराने वाला)', 'असातावेदनीय (दुख कराने वाला)'],
        causes: {
            sata: ['Compassion towards all beings', 'Following vows', 'Giving charity', 'Keeping peace in heart'],
            asata: ['Causing pain to others', 'Violence and cruelty', 'Speaking harshly', 'Creating sorrow']
        },
        causesHi: {
            sata: ['सभी प्राणियों पर अनुकम्पा', 'व्रतों का पालन', 'दान देना', 'हृदय में शांति रखना'],
            asata: ['दूसरों को दुख पहुंचाना', 'हिंसा और क्रूरता', 'कठोर वचन बोलना', 'शोक उत्पन्न करना']
        },
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
        color: '#F39C12',
        particles: '🟡',
        subtypes: ['Darśana Mohanīya (Faith-deluding)', 'Cāritra Mohanīya (Conduct-deluding)'],
        subtypesHi: ['दर्शन मोहनीय (मिथ्यात्व)', 'चारित्र मोहनीय (चारित्र को भ्रष्ट करने वाला)'],
        causes: [
            'Finding false faults in Kevalī, scriptures, or religion',
            'Intense passions like anger, pride, deceit, greed',
            'Preventing someone from taking vows',
            'Leading others away from righteous path'
        ],
        causesHi: [
            'केवली, शास्त्र, धर्म में झूठे दोष लगाना',
            'क्रोध, मान, माया, लोभ की तीव्रता',
            'किसी को व्रत लेने से रोकना',
            'दूसरों को धर्म से भ्रष्ट करना'
        ],
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
        color: '#9B59B6',
        particles: '🟣',
        subtypes: ['Narakāyu (Hell)', 'Tiryakāyu (Animal)', 'Manuṣyāyu (Human)', 'Devāyu (Divine)'],
        subtypesHi: ['नरकायु (नरक)', 'तिर्यञ्चायु (तिर्यंच)', 'मनुष्यायु (मनुष्य)', 'देवायु (देव)'],
        causes: {
            naraka: ['Excessive violence and possessiveness'],
            tiryak: ['Deception, betrayal, teaching wrong path'],
            manushya: ['Natural gentle nature, little greed, modest possessions'],
            deva: ['Following restraints, giving charity, serving worthy people']
        },
        type: 'aghatiya'
    },
    {
        id: 'nama',
        name: 'Nāma Karma',
        nameHi: 'नाम कर्म',
        function: 'This karma determines body structure, appearance, and form - auspicious or inauspicious',
        functionHi: 'यह कर्म शरीर की संरचना, रूप और आकार निर्धारित करता है',
        analogy: 'Like a painter who creates different kinds of pictures',
        analogyHi: 'चित्रकार के समान जो विभिन्न प्रकार के चित्र बनाता है',
        color: '#E67E22',
        particles: '🟠',
        causes: {
            auspicious: ['Straightforwardness in mind, speech, body', 'Stable mind', 'Honest dealings'],
            inauspicious: ['Crookedness in thought, word, deed', 'Deception', 'Dishonest measurements']
        },
        causesHi: {
            auspicious: ['मन, वचन, काय की सरलता', 'चित्त की स्थिरता', 'ईमानदारी से व्यवहार'],
            inauspicious: ['मन, वचन, काय की कुटिलता', 'छल-कपट', 'बेईमान नाप-तौल']
        },
        type: 'aghatiya'
    },
    {
        id: 'gotra',
        name: 'Gotra Karma',
        nameHi: 'गोत्र कर्म',
        function: 'This karma determines family status, social position - high or low birth',
        functionHi: 'यह कर्म पारिवारिक स्थिति, सामाजिक प्रतिष्ठा निर्धारित करता है',
        analogy: 'Like a potter who shapes different types of vessels from the same clay',
        analogyHi: 'कुम्भकार के समान जो एक ही मिट्टी से विभिन्न बर्तन बनाता है',
        color: '#95A5A6',
        particles: '⚫',
        subtypes: ['Ucca Gotra (High status)', 'Nīca Gotra (Low status)'],
        subtypesHi: ['उच्च गोत्र (उच्च स्थिति)', 'नीच गोत्र (निम्न स्थिति)'],
        causes: {
            high: ['Self-criticism, praising others', 'Hiding own good qualities', 'Devotion to Arhants'],
            low: ['Self-praise, criticizing others', 'Displaying own qualities', 'Lack of devotion']
        },
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
        color: '#E74C3C',
        particles: '🔴',
        causes: [
            'Creating obstacles in others\' charity',
            'Stopping worship or religious activities',
            'Consuming offerings meant for deities',
            'Hiding one\'s own capabilities'
        ],
        causesHi: [
            'दूसरों के दान में बाधा डालना',
            'पूजा या धार्मिक गतिविधियों को रोकना',
            'देवताओं के लिए अर्पित वस्तुओं का सेवन',
            'अपनी शक्ति को छुपाना'
        ],
        type: 'ghatiya'
    }
];

// Ten States of Karma with comprehensive details
const karmaStates = [
    {
        id: 'bandha',
        name: 'Bandha (Bondage)',
        nameHi: 'बंध (बंधन)',
        definition: 'The binding of karmic matter to the soul due to activities',
        definitionHi: 'कार्मिक पुद्गलों का आत्मा के साथ संबंध स्थापित होना',
        example: 'Getting hired for a 10-year job contract on August 17, 2005',
        exampleHi: '17 अगस्त 2005 को 10 साल की नौकरी मिलना',
        gunasthana: '1-13',
        color: '#FF6B6B'
    },
    {
        id: 'sattva',
        name: 'Sattva (Existence)',
        nameHi: 'सत्व (अस्तित्व)',
        definition: 'State between bondage and fruition where karma exists but remains inactive',
        definitionHi: 'बंध और उदय के बीच की स्थिति जहां कर्म मौजूद है पर निष्क्रिय है',
        example: 'Period from August 17 to October 1, 2005 - hired but not yet working',
        exampleHi: '17 अगस्त से 1 अक्टूबर 2005 तक - नौकरी मिली पर अभी शुरू नहीं हुई',
        gunasthana: '1-14',
        color: '#4ECDC4'
    },
    {
        id: 'udaya',
        name: 'Udaya (Rise/Fruition)',
        nameHi: 'उदय (फलदान)',
        definition: 'When karma gives its results according to nature, duration, intensity and quantity',
        definitionHi: 'जब कर्म अपनी प्रकृति, स्थिति, अनुभाग और प्रदेश के अनुसार फल देता है',
        example: 'Starting work on October 2, 2005 and receiving salary',
        exampleHi: '2 अक्टूबर 2005 से काम शुरू होना और वेतन मिलना',
        gunasthana: '1-14',
        color: '#F39C12'
    },
    {
        id: 'udirana',
        name: 'Udīraṇā (Premature Rise)',
        nameHi: 'उदीरणा (पूर्व उदय)',
        definition: 'Bringing karma to fruition before its natural time',
        definitionHi: 'कर्म को स्वाभाविक समय से पहले फल देने के लिए प्रेरित करना',
        example: 'Being called to start work on October 1st instead of 2nd',
        exampleHi: '2 अक्टूबर के बजाय 1 अक्टूबर को काम पर बुलाया जाना',
        gunasthana: '1-13',
        color: '#9B59B6'
    },
    {
        id: 'utkarshana',
        name: 'Utkarṣaṇa (Intensification)',
        nameHi: 'उत्कर्षण (तीव्रता वृद्धि)',
        definition: 'Increasing the duration and intensity of previously bound karma',
        definitionHi: 'पूर्व बद्ध कर्म की स्थिति और अनुभाग में वृद्धि',
        example: 'Job contract extended from 10 years to 11 years',
        exampleHi: 'नौकरी का अनुबंध 10 साल से बढ़कर 11 साल हो जाना',
        gunasthana: '1-13',
        color: '#E74C3C'
    },
    {
        id: 'apakrshana',
        name: 'Apakarṣaṇa (Attenuation)',
        nameHi: 'अपकर्षण (न्यूनता)',
        definition: 'Decreasing the duration and intensity of previously bound karma',
        definitionHi: 'पूर्व बद्ध कर्म की स्थिति और अनुभाग में कमी',
        example: 'King Shrenika\'s hell-life reduced from 33 sagaras to 84,000 years due to right faith',
        exampleHi: 'राजा श्रेणिक की नरक आयु 33 सागर से घटकर 84,000 वर्ष हो जाना',
        gunasthana: '1-13',
        color: '#27AE60'
    },
    {
        id: 'sankramana',
        name: 'Saṅkramaṇa (Transformation)',
        nameHi: 'संक्रमण (परिवर्तन)',
        definition: 'Transformation of one karma subtype into another of the same main type',
        definitionHi: 'एक कर्म प्रकृति का दूसरी प्रकृति में परिवर्तन',
        example: 'Transfer from one factory department to another',
        exampleHi: 'एक फैक्ट्री विभाग से दूसरे में स्थानांतरण',
        gunasthana: '1-10, some in 11th',
        color: '#8E44AD'
    },
    {
        id: 'upashama',
        name: 'Upaśama (Subsidence)',
        nameHi: 'उपशम (शमन)',
        definition: 'Temporary suppression of karma without destroying it',
        definitionHi: 'कर्म का नाश किए बिना अस्थायी रूप से दबा देना',
        example: 'Factory closed but job contract remains valid',
        exampleHi: 'फैक्ट्री बंद हो गई पर नौकरी का अनुबंध वैध है',
        gunasthana: '1-8',
        color: '#3498DB'
    },
    {
        id: 'nidhatti',
        name: 'Nidhatti (Non-ejectable)',
        nameHi: 'निधत्ति (अपरिवर्तनीय)',
        definition: 'State where karma cannot be brought to premature fruition or transformed',
        definitionHi: 'जब कर्म को उदीरणा या संक्रमण नहीं कराया जा सकता',
        example: 'Permanent job status that cannot be changed',
        exampleHi: 'स्थायी नौकरी की स्थिति जो बदली नहीं जा सकती',
        gunasthana: '1-8',
        color: '#95A5A6'
    },
    {
        id: 'nikachitta',
        name: 'Nikācitta (Absolutely Fixed)',
        nameHi: 'निकाचित (पूर्णतः स्थिर)',
        definition: 'State where karma is completely fixed and cannot undergo any modifications',
        definitionHi: 'जब कर्म पूर्णतः स्थिर हो जाता है और कोई परिवर्तन नहीं हो सकता',
        example: 'Final work schedule that cannot be altered in any way',
        exampleHi: 'अंतिम कार्य अनुसूची जो किसी भी तरह से बदली नहीं जा सकती',
        gunasthana: '1-8',
        color: '#2C3E50'
    }
];

// User data management
const userData = {
    xp: 150,
    level: 1,
    streak: 3,
    soulPurity: 100,
    karmaAccumulated: [],
    stage1Completed: false,
    karmaKnowledge: {
        typesLearned: [],
        classificationMastered: false,
        statesLearned: []
    }
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
    if (universe.id === 4) {
        showKarmaLearning();
    } else {
        alert(`Opening ${t(universe.name)}! (Navigation coming soon)`);
    }
}

// Main Karma Learning Interface
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
                    <p><em>"संसार में सबसे ज्यादा ईमानदार है तो वह है कर्म। मुनि हो, श्रावक हो, राजा हो या रंक, युवा हो या वृद्ध, कर्म किसी के साथ पक्षपात नहीं करता। जीव जैसा कर्म करता है वैसा ही उसे फल मिलता है।"</em></p>
                </div>
            </div>

            <div class="karma-stages">
                <div class="stage-card" onclick="showKarmaStage1()">
                    <div class="stage-number">1</div>
                    <h3>The Anatomy of Karma</h3>
                    <p>Learn the 8 types of karma that bind the soul</p>
                    <div class="stage-progress">
                        <span>🎯 Master the 8 Veils of the Soul</span>
                        <div class="completion-badge ${userData.stage1Completed ? 'completed' : ''}">
                            ${userData.stage1Completed ? '✓ Completed' : 'Not Started'}
                        </div>
                    </div>
                </div>
                
                <div class="stage-card ${userData.stage1Completed ? '' : 'locked'}" onclick="showKarmaStage2()">
                    <div class="stage-number">2</div>
                    <h3>The Lifecycle of Karma</h3>
                    <p>Understand the 10 states through which karma flows</p>
                    <div class="stage-progress">
                        <span>⚡ Master Karmic Dynamics</span>
                        <div class="completion-badge">
                            ${userData.stage1Completed ? 'Available' : '🔒 Complete Stage 1 first'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Stage 1: The Anatomy of Karma
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
    
    // Initialize first lesson
    currentLessonIndex = 0;
    loadLesson(currentLessonIndex);
}

let currentLessonIndex = 0;
const lessons = [
    {
        type: 'introduction',
        title: 'Introduction to the 8 Karmas',
        content: 'Before we explore each karma type, let\'s understand that there are exactly 8 types of karma that bind every soul. These can be classified into two main categories based on their effects.'
    },
    ...karmaTypes.map(karma => ({
        type: 'karma-detail',
        karma: karma
    })),
    {
        type: 'classification',
        title: 'Classification: Ghātiyā vs Aghātiyā',
        content: 'Now let\'s classify these 8 karmas into two important categories.'
    },
    {
        type: 'quiz',
        title: 'Test Your Knowledge',
        content: 'Let\'s see how well you\'ve understood the 8 karma types.'
    }
];

function loadLesson(index) {
    const lesson = lessons[index];
    const content = document.getElementById('lesson-content');
    
    switch(lesson.type) {
        case 'introduction':
            content.innerHTML = createIntroductionLesson(lesson);
            break;
        case 'karma-detail':
            content.innerHTML = createKarmaDetailLesson(lesson.karma);
            break;
        case 'classification':
            content.innerHTML = createClassificationLesson();
            break;
        case 'quiz':
            content.innerHTML = createQuizLesson();
            break;
    }
    
    updateLessonProgress();
    updateNavigationButtons();
}

function createIntroductionLesson(lesson) {
    return `
        <div class="lesson-intro">
            <h2>${lesson.title}</h2>
            <div class="soul-display">
                <div class="pure-soul">
                    <div class="soul-core">🤍</div>
                    <p>Pure Soul</p>
                </div>
                <div class="arrow">→</div>
                <div class="bound-soul">
                    <div class="soul-core bound">🖤</div>
                    <div class="karma-veils">
                        ${karmaTypes.map((karma, i) => `
                            <div class="veil veil-${i+1}" style="background: ${karma.color}"></div>
                        `).join('')}
                    </div>
                    <p>Soul with 8 Karmic Veils</p>
                </div>
            </div>
            <div class="intro-text">
                <p>${lesson.content}</p>
                <div class="key-points">
                    <h4>Key Points:</h4>
                    <ul>
                        <li><strong>Ghātiyā Karmas (4):</strong> Directly harm the soul's inherent qualities</li>
                        <li><strong>Aghātiyā Karmas (4):</strong> Affect the body and external circumstances</li>
                        <li>Each karma has specific causes and effects</li>
                        <li>Understanding karma helps in spiritual progress</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function createKarmaDetailLesson(karma) {
    const lang = currentLanguage;
    const name = lang === 'hi' ? karma.nameHi : karma.name;
    const func = lang === 'hi' ? karma.functionHi : karma.function;
    const analogy = lang === 'hi' ? karma.analogyHi : karma.analogy;
    
    return `
        <div class="karma-detail-lesson">
            <div class="karma-header-detail" style="border-left: 6px solid ${karma.color}">
                <div class="karma-icon-large">${karma.particles}</div>
                <div class="karma-info">
                    <h2>${name}</h2>
                    <p class="karma-type-badge ${karma.type}">${karma.type === 'ghatiya' ? 'Ghātiyā (Destructive)' : 'Aghātiyā (Non-Destructive)'}</p>
                </div>
            </div>
            
            <div class="karma-details-grid">
                <div class="detail-card">
                    <h4>Function</h4>
                    <p>${func}</p>
                </div>
                
                <div class="detail-card">
                    <h4>Analogy</h4>
                    <p><em>${analogy}</em></p>
                </div>
                
                <div class="detail-card">
                    <h4>Causes of Bondage</h4>
                    <ul>
                        ${(lang === 'hi' ? karma.causesHi : karma.causes).map(cause => `<li>${cause}</li>`).join('')}
                    </ul>
                </div>
                
                ${karma.subtypes ? `
                    <div class="detail-card">
                        <h4>Subtypes</h4>
                        <ul>
                            ${(lang === 'hi' ? karma.subtypesHi : karma.subtypes).map(subtype => `<li>${subtype}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
            
            <div class="interactive-demo">
                <h4>Interactive Demonstration</h4>
                <div class="demo-soul" id="demo-soul-${karma.id}">
                    <div class="soul-core">🤍</div>
                    <button class="demo-btn" onclick="demonstrateKarma('${karma.id}')">
                        Attach ${karma.name}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createClassificationLesson() {
    return `
        <div class="classification-lesson">
            <h2>Classification: Ghātiyā vs Aghātiyā</h2>
            
            <div class="classification-intro">
                <p>The 8 karmas are classified into two fundamental categories based on how they affect the soul:</p>
            </div>
            
            <div class="classification-grid">
                <div class="classification-card ghatiya">
                    <h3>Ghātiyā Karmas (घातिया कर्म)</h3>
                    <p><strong>Definition:</strong> These karmas directly destroy or obscure the soul's inherent qualities of knowledge, perception, bliss, and energy.</p>
                    <div class="karma-list" id="ghatiya-list">
                        <p>Drag the correct karmas here:</p>
                    </div>
                </div>
                
                <div class="classification-card aghatiya">
                    <h3>Aghātiyā Karmas (अघातिया कर्म)</h3>
                    <p><strong>Definition:</strong> These karmas do not directly harm the soul's nature but affect the body, lifespan, and external circumstances.</p>
                    <div class="karma-list" id="aghatiya-list">
                        <p>Drag the correct karmas here:</p>
                    </div>
                </div>
            </div>
            
            <div class="draggable-karmas" id="draggable-karmas">
                ${karmaTypes.map(karma => `
                    <div class="draggable-karma" data-karma="${karma.id}" data-type="${karma.type}" 
                         style="border-left: 4px solid ${karma.color}" draggable="true">
                        ${karma.particles} ${karma.name}
                    </div>
                `).join('')}
            </div>
            
            <div class="classification-result" id="classification-result" style="display: none;">
                <h4>Excellent! You've correctly classified all karmas.</h4>
                <div class="explanation">
                    <p><strong>Ghātiyā Karmas:</strong> Jñānāvaraṇa, Darśanāvaraṇa, Mohanīya, Antarāya</p>
                    <p><strong>Aghātiyā Karmas:</strong> Vedanīya, Āyu, Nāma, Gotra</p>
                </div>
            </div>
        </div>
    `;
}

function createQuizLesson() {
    return `
        <div class="quiz-lesson">
            <h2>Test Your Knowledge</h2>
            <div class="quiz-container" id="quiz-container">
                <!-- Quiz questions will be loaded here -->
            </div>
        </div>
    `;
}

// Navigation functions
function nextLesson() {
    if (currentLessonIndex < lessons.length - 1) {
        currentLessonIndex++;
        loadLesson(currentLessonIndex);
    } else {
        // Complete stage 1
        userData.stage1Completed = true;
        showStageCompletion();
    }
}

function previousLesson() {
    if (currentLessonIndex > 0) {
        currentLessonIndex--;
        loadLesson(currentLessonIndex);
    }
}

function updateLessonProgress() {
    const progress = ((currentLessonIndex + 1) / lessons.length) * 100;
    document.getElementById('learning-progress').style.width = progress + '%';
    document.getElementById('progress-percentage').textContent = Math.round(progress);
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentLessonIndex === 0;
    
    if (currentLessonIndex === lessons.length - 1) {
        nextBtn.textContent = 'Complete Stage 1';
    } else {
        nextBtn.textContent = 'Next';
    }
}

function demonstrateKarma(karmaId) {
    const karma = karmaTypes.find(k => k.id === karmaId);
    const demoSoul = document.getElementById(`demo-soul-${karmaId}`);
    
    // Add visual effect
    const particle = document.createElement('div');
    particle.className = 'karma-particle';
    particle.textContent = karma.particles;
    particle.style.color = karma.color;
    demoSoul.appendChild(particle);
    
    showNotification(`${karma.name} attached! ${karma.analogy}`, 'info');
}

function showStageCompletion() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="stage-completion">
            <div class="completion-header">
                <h1>🎉 Stage 1 Complete!</h1>
                <p>You have mastered the 8 types of karma</p>
            </div>
            
            <div class="completion-summary">
                <h3>What you learned:</h3>
                <ul>
                    <li>✓ All 8 types of karma and their functions</li>
                    <li>✓ Classification into Ghātiyā and Aghātiyā</li>
                    <li>✓ Specific causes of karmic bondage</li>
                    <li>✓ Analogies to understand each karma</li>
                </ul>
            </div>
            
            <div class="completion-actions">
                <button class="primary-btn" onclick="showKarmaStage2()">
                    Continue to Stage 2: Lifecycle of Karma
                </button>
                <button class="secondary-btn" onclick="showKarmaLearning()">
                    Return to Overview
                </button>
            </div>
        </div>
    `;
    
    // Award XP
    userData.xp += 50;
    updateUserStats();
    showNotification('Stage 1 completed! +50 XP earned!', 'success');
}

// Stage 2: The Lifecycle of Karma
function showKarmaStage2() {
    if (!userData.stage1Completed) {
        showNotification('Please complete Stage 1 first!', 'error');
        return;
    }
    
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="karma-stage2">
            <header class="karma-header">
                <button class="back-button" onclick="showKarmaLearning()">
                    ← Understanding Karma
                </button>
                <h1>Stage 2: The Lifecycle of Karma</h1>
                <p>The 10 States of Karmic Flow</p>
            </header>

            <div class="karma-timeline">
                <h3>The Journey of a Karma Particle</h3>
                <div class="timeline-container">
                    ${karmaStates.map((state, index) => `
                        <div class="timeline-item" onclick="exploreKarmaState('${state.id}')" style="background: ${state.color}">
                            <div class="timeline-number">${index + 1}</div>
                            <h4>${state.name}</h4>
                            <p>${state.definition}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="factory-analogy">
                <h3>The Factory Job Analogy</h3>
                <p>Understanding karma states through a simple job contract example:</p>
                <div class="analogy-steps" id="analogy-steps">
                    <!-- Will be populated with interactive steps -->
                </div>
            </div>
        </div>
    `;
    
    loadFactoryAnalogy();
}

function loadFactoryAnalogy() {
    const container = document.getElementById('analogy-steps');
    container.innerHTML = `
        <div class="analogy-step" data-state="bandha">
            <h4>1. Bandha (Bondage)</h4>
            <p><strong>Factory Job:</strong> Getting hired for a 10-year contract on August 17, 2005</p>
            <p><strong>Karma:</strong> Soul binds with karmic matter due to activities</p>
        </div>
        
        <div class="analogy-step" data-state="sattva">
            <h4>2. Sattva (Existence)</h4>
            <p><strong>Factory Job:</strong> Period from Aug 17 to Oct 1, 2005 - hired but not working yet</p>
            <p><strong>Karma:</strong> Karma exists but remains inactive, like medicine before it takes effect</p>
        </div>
        
        <div class="analogy-step" data-state="udaya">
            <h4>3. Udaya (Fruition)</h4>
            <p><strong>Factory Job:</strong> Starting work on Oct 2, 2005 and receiving salary</p>
            <p><strong>Karma:</strong> Karma gives its results according to its nature and intensity</p>
        </div>
        
        <div class="analogy-step" data-state="udirana">
            <h4>4. Udīraṇā (Premature Rise)</h4>
            <p><strong>Factory Job:</strong> Being called to start work on Oct 1st instead of 2nd</p>
            <p><strong>Karma:</strong> Bringing karma to fruition before its natural time through special circumstances</p>
        </div>
        
        <div class="analogy-step" data-state="apakrshana">
            <h4>5. Apakarṣaṇa (Attenuation)</h4>
            <p><strong>Factory Job:</strong> Contract reduced from 10 years to 9 years due to good performance</p>
            <p><strong>Karma:</strong> Reducing intensity through spiritual practices. Example: King Shrenika's hell-life reduced from 33 sagaras to 84,000 years</p>
        </div>
        
        <div class="analogy-step" data-state="utkarshana">
            <h4>6. Utkarṣaṇa (Intensification)</h4>
            <p><strong>Factory Job:</strong> Contract extended from 10 years to 11 years due to additional responsibilities</p>
            <p><strong>Karma:</strong> Increasing intensity through negative actions or intense passions</p>
        </div>
        
        <div class="analogy-step" data-state="sankramana">
            <h4>7. Saṅkramaṇa (Transformation)</h4>
            <p><strong>Factory Job:</strong> Being transferred to a different department in the same company</p>
            <p><strong>Karma:</strong> One karma subtype transforming into another of the same main type</p>
        </div>
        
        <div class="analogy-step" data-state="upashama">
            <h4>8. Upaśama (Suppression)</h4>
            <p><strong>Factory Job:</strong> Factory temporarily closed but contract remains valid</p>
            <p><strong>Karma:</strong> Temporarily stopping karma's effects without destroying it</p>
        </div>
        
        <div class="analogy-step" data-state="nidhatti">
            <h4>9. Nidhatti (Non-ejectable)</h4>
            <p><strong>Factory Job:</strong> Permanent position that cannot be changed easily</p>
            <p><strong>Karma:</strong> Karma that cannot be brought to premature fruition or transformed</p>
        </div>
        
        <div class="analogy-step" data-state="nikachitta">
            <h4>10. Nikācitta (Absolutely Fixed)</h4>
            <p><strong>Factory Job:</strong> Final contract terms that cannot be altered in any way</p>
            <p><strong>Karma:</strong> Completely fixed karma that cannot undergo any modifications</p>
        </div>
    `;
}

function exploreKarmaState(stateId) {
    const state = karmaStates.find(s => s.id === stateId);
    const lang = currentLanguage;
    
    showNotification(`${state.name}: ${lang === 'hi' ? state.definitionHi : state.definition}`, 'info');
}

// Other existing functions...
function updateUserStats() {
    document.getElementById('user-xp').textContent = userData.xp;
    document.getElementById('user-level').textContent = userData.level;
    document.getElementById('total-xp').textContent = userData.xp;
    document.getElementById('daily-streak').textContent = userData.streak;
    document.getElementById('current-level').textContent = userData.level;
}

function initializeDailyPrashna() {
    const revealButton = document.getElementById('reveal-answer');
    const answerContainer = document.getElementById('answer-container');
    
    if (revealButton) {
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

// Initialize install prompt and other existing functions remain the same...
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
