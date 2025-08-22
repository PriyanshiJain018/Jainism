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

// Fixed Karma Data with all required properties
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
        analogy: 'Like a sword blade coated with honey',
        analogyHi: 'शक्कर की चाशनी से लिपटी तलवार के समान',
        visualType: 'honey-sword',
        color: '#45B7D1',
        causes: [
            'Causing pain to others (Asātā)',
            'Violence and cruelty (Asātā)',
            'Speaking harshly (Asātā)',
            'Showing compassion to all beings (Sātā)',
            'Following vows and giving charity (Sātā)'
        ],
        causesHi: [
            'दूसरों को दुख पहुंचाना (असाता)',
            'हिंसा और क्रूरता (असाता)',
            'कठोर वचन बोलना (असाता)',
            'सभी प्राणियों पर अनुकम्पा (साता)',
            'व्रतों का पालन और दान देना (साता)'
        ],
        type: 'aghatiya'
    },
    {
        id: 'mohaniya',
        name: 'Mohanīya Karma',
        nameHi: 'मोहनीय कर्म',
        function: 'The most powerful karma that attacks the soul\'s faith and conduct',
        functionHi: 'सबसे शक्तिशाली कर्म जो आत्मा के सम्यक्त्व और चारित्र गुण को घातता है',
        analogy: 'Like intoxicating wine that clouds judgment',
        analogyHi: 'मदिरा के समान जो विवेक को नष्ट करती है',
        visualType: 'intoxication',
        color: '#F39C12',
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
        visualType: 'chains',
        color: '#9B59B6',
        causes: [
            'Excessive violence and possessiveness (Naraka)',
            'Deception and betrayal (Tiryak)',
            'Natural gentle nature, little greed (Manushya)',
            'Following restraints and serving worthy people (Deva)'
        ],
        causesHi: [
            'अत्यधिक हिंसा और परिग्रह (नरक)',
            'छल-कपट और विश्वासघात (तिर्यंच)',
            'स्वाभाविक मृदु स्वभाव, अल्प लोभ (मनुष्य)',
            'संयम पालन और योग्य लोगों की सेवा (देव)'
        ],
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
        causes: [
            'Straightforwardness in mind, speech, body (Auspicious)',
            'Stable mind and honest dealings (Auspicious)',
            'Crookedness in thought, word, deed (Inauspicious)',
            'Deception and dishonest measurements (Inauspicious)'
        ],
        causesHi: [
            'मन, वचन, काय की सरलता (शुभ)',
            'चित्त की स्थिरता और ईमानदारी (शुभ)',
            'मन, वचन, काय की कुटिलता (अशुभ)',
            'छल-कपट और बेईमान नाप-तौल (अशुभ)'
        ],
        type: 'aghatiya'
    },
    {
        id: 'gotra',
        name: 'Gotra Karma',
        nameHi: 'गोत्र कर्म',
        function: 'This karma determines family status and social position',
        functionHi: 'यह कर्म पारिवारिक स्थिति, सामाजिक प्रतिष्ठा निर्धारित करता है',
        analogy: 'Like a potter who shapes different types of vessels',
        analogyHi: 'कुम्भकार के समान जो एक ही मिट्टी से विभिन्न बर्तन बनाता है',
        visualType: 'potter',
        color: '#95A5A6',
        causes: [
            'Self-criticism, praising others (High status)',
            'Hiding own good qualities (High status)',
            'Self-praise, criticizing others (Low status)',
            'Displaying own qualities, lack of devotion (Low status)'
        ],
        causesHi: [
            'आत्म-निंदा, दूसरों की प्रशंसा (उच्च स्थिति)',
            'अपने अच्छे गुणों को छुपाना (उच्च स्थिति)',
            'आत्म-प्रशंसा, दूसरों की निंदा (निम्न स्थिति)',
            'अपने गुणों का प्रदर्शन, भक्ति का अभाव (निम्न स्थिति)'
        ],
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

// Ten States of Karma with comprehensive details from the scripture
const karmaStates = [
    {
        id: 'bandha',
        name: 'Bandha',
        nameHi: 'बंध',
        title: 'The Binding',
        titleHi: 'बंधन',
        definition: 'The first stage where karma particles bind with the soul\'s regions',
        definitionHi: 'पुद्गल द्रव्य का कर्मरूप होकर आत्मप्रदेशों के साथ संश्लेष सम्बन्ध होना',
        analogy: 'Your 10-year job is confirmed! The contract is signed and sealed',
        analogyHi: 'आपकी 10 वर्ष के लिए नौकरी पक्की हो जाना',
        explanation: 'This is the first stage, where karma particles (Pudgala dravya) transform into karma and bind with the soul\'s regions',
        explanationHi: 'कर्मों की दस अवस्थाओं में यह प्रथम अवस्था है',
        gunasthana: '1-13',
        color: '#FF6B6B'
    },
    {
        id: 'sattva',
        name: 'Sattva',
        nameHi: 'सत्त्व',
        title: 'The Waiting Period',
        titleHi: 'प्रतीक्षा काल',
        definition: 'After binding and before giving result, karma remains dormant',
        definitionHi: 'कर्म बंध के बाद और फल देने से पूर्व बीच की स्थिति को सत्त्व कहते हैं',
        analogy: 'Your job starts in a few months. The contract exists but you haven\'t started working',
        analogyHi: '17 अगस्त 2005 से 1 अक्टूबर 2015 तक का समय',
        explanation: 'It exists but is not yet active',
        explanationHi: 'सत्त्व काल में कर्म का अस्तित्त्व रहता है पर सक्रिय नहीं होता है',
        gunasthana: '1-14',
        color: '#4ECDC4'
    },
    {
        id: 'udaya',
        name: 'Udaya',
        nameHi: 'उदय',
        title: 'The Result',
        titleHi: 'फलदान',
        definition: 'When karma becomes active and delivers its result',
        definitionHi: 'द्रव्य, क्षेत्र, काल और भाव के अनुसार कर्मों का फल देना उदय कहलाता है',
        analogy: 'It\'s your first day at the factory! Your job has officially begun',
        analogyHi: '2 अक्टूबर 2005 से नौकरी पर जाना प्रारम्भ हो जाना',
        explanation: 'When the waiting period is over, karma delivers results according to place, time, and circumstances',
        explanationHi: 'आबाधा पूर्ण होने पर निषेक रचना के अनुसार कर्मों का फल प्राप्त होना उदय कहलाता है',
        gunasthana: '1-14',
        color: '#F39C12'
    },
    {
        id: 'udirana',
        name: 'Udīraṇā',
        nameHi: 'उदीरणा',
        title: 'Bringing the Result Early',
        titleHi: 'पूर्व उदय',
        definition: 'Making karma give its result before its scheduled time',
        definitionHi: 'आबाधा काल के पूर्व कर्मों का उदय में आ जाना उदीरणा है',
        analogy: 'You arrange to start your job early',
        analogyHi: '1 अक्टूबर 2005 को ही फैक्ट्री पहुँच जाना',
        explanation: 'Through spiritual effort, you can make karma give result before scheduled time',
        explanationHi: 'आध्यात्मिक प्रयासों से कर्म को निर्धारित समय से पहले फल देने के लिए प्रेरित करना',
        gunasthana: '1-13',
        color: '#9B59B6'
    },
    {
        id: 'utkarshana',
        name: 'Utkarṣaṇa',
        nameHi: 'उत्कर्षण',
        title: 'Increase',
        titleHi: 'वृद्धि',
        definition: 'Increasing the duration and intensity of bound karma',
        definitionHi: 'पूर्व बद्ध कर्मों की स्थिति और अनुभाग में वृद्धि हो जाना उत्कर्षण है',
        analogy: 'Your boss increases your contract to 11 years',
        analogyHi: '10 वर्ष के लिए नौकरी मिली थी, किन्तु बाद में 11 वर्ष के लिए हो गई',
        explanation: 'You can increase duration and intensity through present negative actions',
        explanationHi: 'वर्तमान नकारात्मक कर्मों द्वारा अवधि और तीव्रता बढ़ाई जा सकती है',
        gunasthana: '1-13',
        color: '#E74C3C'
    },
    {
        id: 'apakrshana',
        name: 'Apakarṣaṇa',
        nameHi: 'अपकर्षण',
        title: 'Decrease',
        titleHi: 'न्यूनता',
        definition: 'Decreasing the duration and intensity of bound karma',
        definitionHi: 'पूर्वबद्ध कर्मों की स्थिति व अनुभाग में हानि का होना अपकर्षण है',
        analogy: 'Your boss reduces your contract to 9 years due to good performance',
        analogyHi: '10 वर्ष के लिए नौकरी मिली थी, किन्तु बाद में 9 वर्ष के लिए कर दी',
        explanation: 'Like King Shrenika who reduced his hell-life from 33 sagaras to 84,000 years through right faith',
        explanationHi: 'जैसे राजा श्रेणिक ने 84,000 वर्ष की आयु कर ली अर्थात् शेष आयु का अपकर्षण कर लिया',
        gunasthana: '1-13',
        color: '#27AE60'
    },
    {
        id: 'sankramana',
        name: 'Saṅkramaṇa',
        nameHi: 'संक्रमण',
        title: 'Transformation',
        titleHi: 'परिवर्तन',
        definition: 'Transformation of one karma subtype into another related subtype',
        definitionHi: 'जिस प्रकृति का पूर्व में बंध किया था, इसका अन्य प्रकृति रूप परिणमन हो जाना संक्रमण है',
        analogy: 'The factory owner moves you to a different factory in a new role',
        analogyHi: 'फैक्ट्री मालिक ने दूसरी फैक्ट्री में भेज दिया',
        explanation: 'The sub-type of a previously bound karma can transform into another related sub-type',
        explanationHi: 'पूर्व बद्ध कर्म की उप-प्रकृति का संबंधित अन्य उप-प्रकृति में परिवर्तन',
        gunasthana: '1-10, some in 11th',
        color: '#8E44AD'
    },
    {
        id: 'upashama',
        name: 'Upaśama',
        nameHi: 'उपशम',
        title: 'Suppression',
        titleHi: 'शमन',
        definition: 'Temporarily suppressing karma without destroying it',
        definitionHi: 'जो कर्म उदयावली में प्राप्त न किया जाए अथवा उदीरणा अवस्था को प्राप्त न हो सके वह उपशम करण है',
        analogy: 'You arrive at factory but the key is missing. You can\'t work but you\'re still an employee',
        analogyHi: 'फैक्ट्री पहुंचे पर चाबी नहीं मिली। काम नहीं कर सकते पर कर्मचारी हैं',
        explanation: 'Like pressing pause. The karma is suppressed, preventing fruition for a short time',
        explanationHi: 'जैसे रोक देना। कर्म दब जाता है, कुछ समय के लिए फल नहीं देता',
        gunasthana: '1-8',
        color: '#3498DB'
    },
    {
        id: 'nidhatti',
        name: 'Nidhatti',
        nameHi: 'निधत्ति',
        title: 'Partially Locked',
        titleHi: 'आंशिक रूप से बंद',
        definition: 'Karma that cannot be transformed or brought to early fruition',
        definitionHi: 'कर्म का उदयावली में लाने या अन्य प्रकृति रूप संक्रमण करने में समर्थ न होना निधत्ति है',
        analogy: 'This is a non-negotiable part of the contract. Some terms are fixed',
        analogyHi: 'यह अनुबंध का गैर-परक्राम्य हिस्सा है। कुछ शर्तें निश्चित हैं',
        explanation: 'A Nidhatti karma is partially locked; it cannot be transformed or brought to early fruition',
        explanationHi: 'निधत्ति कर्म आंशिक रूप से बंद है; इसे परिवर्तित या जल्दी फल नहीं दिया जा सकता',
        gunasthana: '1-8',
        color: '#95A5A6'
    },
    {
        id: 'nikachitta',
        name: 'Nikācita',
        nameHi: 'निकाचित',
        title: 'Fully Locked',
        titleHi: 'पूर्णतः बंद',
        definition: 'Karma that is completely fixed and cannot undergo any modifications',
        definitionHi: 'कर्म का उत्कर्षण एवं अपकर्षण करने में असमर्थ होना निकाचित है',
        analogy: 'The terms are completely fixed. Nothing can be changed',
        analogyHi: 'न 1 अक्टूबर 2005 से नौकरी पर गए न मालिक ने दूसरी फैक्ट्री भेजा',
        explanation: 'A Nikācita karma is fully locked; its duration and intensity also cannot be changed',
        explanationHi: 'निकाचित कर्म पूर्णतः बंद है; इसकी अवधि और तीव्रता भी नहीं बदली जा सकती',
        gunasthana: '1-8',
        color: '#2C3E50'
    }
];

// User data management
const userData = {
    xp: 150,
    level: 1,
    streak: 3,
    stage1Completed: false,
    stage2Completed: false,
    currentLessonIndex: 0,
    currentStage2Index: 0
};

let currentLessonIndex = 0;
let currentStage2Index = 0;
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
                
                <div class="stage-card ${userData.stage1Completed ? '' : 'locked'}" onclick="showKarmaStage2()">
                    <div class="stage-number">2</div>
                    <h3>The Lifecycle of Karma</h3>
                    <p>Understand the 10 dynamic states of karma</p>
                    <div class="stage-progress">
                        <span>Master Karmic Dynamics</span>
                        <div class="completion-badge ${userData.stage2Completed ? 'completed' : ''}">
                            ${userData.stage1Completed ? (userData.stage2Completed ? 'Completed' : 'Available') : '🔒 Complete Stage 1 first'}
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
                <p>The Dynamic Ten States</p>
            </header>

            <div class="learning-progress">
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" id="stage2-progress" style="width: 0%"></div>
                </div>
                <p class="progress-text">Progress: <span id="stage2-percentage">0</span>%</p>
            </div>

            <div id="stage2-content">
                <!-- Dynamic content will be loaded here -->
            </div>

            <div class="lesson-navigation">
                <button id="stage2-prev-btn" class="nav-btn" onclick="previousStage2Lesson()" disabled>Previous</button>
                <button id="stage2-next-btn" class="nav-btn" onclick="nextStage2Lesson()">Begin Journey</button>
            </div>
        </div>
    `;
    
    currentStage2Index = 0;
    loadStage2Lesson(currentStage2Index);
}

function loadLesson(index) {
    const content = document.getElementById('lesson-content');
    if (!content) return;
    
    if (index === 0) {
        content.innerHTML = createIntroductionLesson();
    } else if (index <= karmaTypes.length) {
        const karma = karmaTypes[index - 1];
        content.innerHTML = createKarmaDetailLesson(karma);
    } else if (index === karmaTypes.length + 1) {
        content.innerHTML = createClassificationLesson();
    } else {
        content.innerHTML = createQuizLesson();
    }
    
    updateLessonProgress();
    updateNavigationButtons();
}

function loadStage2Lesson(index) {
    const content = document.getElementById('stage2-content');
    if (!content) return;
    
    const lang = currentLanguage || 'en';
    
    switch(index) {
        case 0:
            content.innerHTML = createStage2Introduction();
            break;
        case 1:
            content.innerHTML = createJobContractAnalogy();
            break;
        case 2:
            content.innerHTML = createKarmaStateLesson(karmaStates[0]); // Bandha
            break;
        case 3:
            content.innerHTML = createKarmaStateLesson(karmaStates[1]); // Sattva
            break;
        case 4:
            content.innerHTML = createKarmaStateLesson(karmaStates[2]); // Udaya
            break;
        case 5:
            content.innerHTML = createKarmaStateLesson(karmaStates[3]); // Udirana
            break;
        case 6:
            content.innerHTML = createKarmaStatesCombo([karmaStates[4], karmaStates[5]]); // Utkarshana & Apakrshana
            break;
        case 7:
            content.innerHTML = createKarmaStateLesson(karmaStates[6]); // Sankramana
            break;
        case 8:
            content.innerHTML = createKarmaStateLesson(karmaStates[7]); // Upashama
            break;
        case 9:
            content.innerHTML = createKarmaStatesCombo([karmaStates[8], karmaStates[9]]); // Nidhatti & Nikachitta
            break;
        case 10:
            content.innerHTML = createStage2Summary();
            break;
        default:
            content.innerHTML = '<div>Lesson not found</div>';
    }
    
    updateStage2Progress();
    updateStage2NavigationButtons();
}

function createStage2Introduction() {
    const lang = currentLanguage || 'en';
    return `
        <div class="stage2-intro">
            <h2>${lang === 'hi' ? 'कर्म का फल निश्चित नहीं है।' : 'Karma Isn\'t Set in Stone.'}</h2>
            <div class="intro-visual">
                <div class="dynamic-soul">
                    <div class="soul-center">✨</div>
                    <div class="orbiting-karma" id="karma-orbit"></div>
                </div>
            </div>
            <div class="intro-message">
                <p>${lang === 'hi' ? 
                    'आपने कर्म क्या है यह तो सीख लिया, पर क्या आप जानते हैं कि इसकी एक गतिशील जीवन-प्रक्रिया है? आपके निर्णय कर्म की शक्ति, उसकी अवधि और यहाँ तक कि वह कब फल देगा, इसे भी बदल सकते हैं। चलिए, किसी भी कर्म की दस संभावित अवस्थाओं को समझते हैं।' :
                    'You\'ve learned what karma is, but did you know it has a dynamic lifecycle? The choices you make can change a karma\'s strength, its duration, and even when it gives its result. Let\'s explore the ten possible states of any karma.'
                }</p>
            </div>
        </div>
    `;
}

function createJobContractAnalogy() {
    const lang = currentLanguage || 'en';
    return `
        <div class="job-analogy">
            <h2>${lang === 'hi' ? 'कर्म को एक नौकरी के अनुबंध की तरह समझें।' : 'Think of Karma Like a Job Contract.'}</h2>
            <div class="contract-visual">
                <div class="contract-signing">
                    <div class="person-icon">👤</div>
                    <div class="contract-icon">📄</div>
                    <div class="signature">✍️</div>
                </div>
            </div>
            <div class="analogy-message">
                <p>${lang === 'hi' ? 
                    'इसे आसान बनाने के लिए, हम एक उदाहरण का उपयोग करेंगे। कल्पना कीजिए कि आपको एक फैक्ट्री में 10 साल के लिए नौकरी मिलती है। यह अनुबंध आपका कर्म है। आइए देखें कि यह अनुबंध कैसे बदल सकता है।' :
                    'To make this easy, we\'ll use an analogy. Imagine you get a job at a factory for a 10-year term. This contract is your karma. Let\'s see how this contract can change.'
                }</p>
            </div>
        </div>
    `;
}

function createKarmaStateLesson(state) {
    const lang = currentLanguage || 'en';
    const name = lang === 'hi' ? state.nameHi : state.name;
    const title = lang === 'hi' ? state.titleHi : state.title;
    const definition = lang === 'hi' ? state.definitionHi : state.definition;
    const analogy = lang === 'hi' ? state.analogyHi : state.analogy;
    const explanation = lang === 'hi' ? state.explanationHi : state.explanation;
    
    return `
        <div class="karma-state-lesson">
            <div class="state-header">
                <h2>${name}: ${title}</h2>
                <div class="state-badge" style="background: ${state.color}">${name}</div>
            </div>
            
            <div class="state-visual-container">
                ${createStateVisualization(state)}
            </div>
            
            <div class="state-explanation">
                <div class="definition-section">
                    <h4>${lang === 'hi' ? 'परिभाषा' : 'Definition'}</h4>
                    <p>${definition}</p>
                </div>
                
                <div class="analogy-section">
                    <h4>${lang === 'hi' ? 'उदाहरण' : 'Job Contract Analogy'}</h4>
                    <p class="analogy-text">"${analogy}"</p>
                </div>
                
                <div class="detailed-explanation">
                    <h4>${lang === 'hi' ? 'विस्तृत व्याख्या' : 'Detailed Explanation'}</h4>
                    <p>${explanation}</p>
                </div>
                
                <div class="gunasthana-info">
                    <h4>${lang === 'hi' ? 'गुणस्थान' : 'Spiritual Stages'}</h4>
                    <p>${lang === 'hi' ? 'गुणस्थान' : 'Guṇasthāna'} ${state.gunasthana}</p>
                </div>
            </div>
        </div>
    `;
}

function createKarmaStatesCombo(states) {
    const lang = currentLanguage || 'en';
    return `
        <div class="karma-states-combo">
            <h2>${lang === 'hi' ? 'युग्म अवस्थाएं' : 'Paired States'}</h2>
            <div class="states-grid">
                ${states.map(state => `
                    <div class="state-card" style="border-left: 4px solid ${state.color}">
                        <h3>${lang === 'hi' ? state.nameHi : state.name}</h3>
                        <p><strong>${lang === 'hi' ? state.titleHi : state.title}</strong></p>
                        <p>${lang === 'hi' ? state.definitionHi : state.definition}</p>
                        <div class="state-analogy">
                            <em>"${lang === 'hi' ? state.analogyHi : state.analogy}"</em>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="interactive-demo">
                <h4>${lang === 'hi' ? 'अंतर्क्रियात्मक प्रदर्शन' : 'Interactive Demonstration'}</h4>
                <div class="demo-controls">
                    <button class="demo-btn increase" onclick="demonstrateUtkarshana()">
                        ${lang === 'hi' ? 'उत्कर्षण दिखाएं' : 'Show Utkarṣaṇa'}
                    </button>
                    <button class="demo-btn decrease" onclick="demonstrateApakrshana()">
                        ${lang === 'hi' ? 'अपकर्षण दिखाएं' : 'Show Apakarṣaṇa'}
                    </button>
                </div>
                <div class="karma-timer" id="karma-timer">
                    <div class="timer-display">10 years</div>
                    <div class="timer-bar">
                        <div class="timer-fill" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createStage2Summary() {
    const lang = currentLanguage || 'en';
    return `
        <div class="stage2-summary">
            <h2>${lang === 'hi' ? 'आप अपने अनुभव के निर्माता स्वयं हैं।' : 'You are the Architect of Your Experience.'}</h2>
            
            <div class="summary-grid">
                ${karmaStates.map((state, index) => `
                    <div class="summary-state" style="background: ${state.color}">
                        <div class="state-number">${index + 1}</div>
                        <div class="state-name">${lang === 'hi' ? state.nameHi : state.name}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="final-message">
                <p>${lang === 'hi' ? 
                    'अब आपने कर्म की दस अवस्थाएँ सीख ली हैं। याद रखें, जबकि पिछले कर्मों के फल होते हैं, आपके वर्तमान कर्म आपके भविष्य को निरंतर आकार देते हैं। क्या आप अपने ज्ञान को परखने के लिए तैयार हैं?' :
                    'You\'ve now learned the ten states of karma. Remember, while past actions have consequences, your present actions constantly shape your future. Ready to test your knowledge?'
                }</p>
            </div>
            
            <div class="hope-message">
                <h4>${lang === 'hi' ? 'आशा का संदेश' : 'Message of Hope'}</h4>
                <p>${lang === 'hi' ? 
                    'यहाँ तक कि सबसे कठिन बंद कर्म भी जिन बिम्ब दर्शन से नष्ट हो सकते हैं।' :
                    'Even the most locked karmas can be destroyed by seeing a Jina\'s image (Jinabimba Darśana).'
                }</p>
            </div>
        </div>
    `;
}

function createStateVisualization(state) {
    switch(state.id) {
        case 'bandha':
            return `
                <div class="bandha-visual">
                    <div class="soul-particle">✨</div>
                    <div class="karma-particle binding" style="background: ${state.color}">●</div>
                    <div class="binding-animation"></div>
                </div>
            `;
        case 'sattva':
            return `
                <div class="sattva-visual">
                    <div class="dormant-karma" style="background: ${state.color}">
                        <div class="karma-particle dormant">●</div>
                        <div class="countdown-timer">⏳</div>
                    </div>
                </div>
            `;
        case 'udaya':
            return `
                <div class="udaya-visual">
                    <div class="karma-explosion" style="background: ${state.color}">
                        <div class="karma-particle active">●</div>
                        <div class="result-rays">✨</div>
                    </div>
                </div>
            `;
        default:
            return `
                <div class="generic-visual" style="background: linear-gradient(135deg, ${state.color}, ${state.color}80)">
                    <div class="state-symbol">⚡</div>
                </div>
            `;
    }
}

// Navigation functions for Stage 1
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

// Navigation functions for Stage 2
function nextStage2Lesson() {
    if (currentStage2Index < 10) {
        currentStage2Index++;
        loadStage2Lesson(currentStage2Index);
    } else {
        completeStage2();
    }
}

function previousStage2Lesson() {
    if (currentStage2Index > 0) {
        currentStage2Index--;
        loadStage2Lesson(currentStage2Index);
    }
}

function updateStage2Progress() {
    const progress = ((currentStage2Index + 1) / 11) * 100;
    const progressBar = document.getElementById('stage2-progress');
    const progressText = document.getElementById('stage2-percentage');
    
    if (progressBar) progressBar.style.width = progress + '%';
    if (progressText) progressText.textContent = Math.round(progress);
}

function updateStage2NavigationButtons() {
    const prevBtn = document.getElementById('stage2-prev-btn');
    const nextBtn = document.getElementById('stage2-next-btn');
    
    if (prevBtn) prevBtn.disabled = currentStage2Index === 0;
    if (nextBtn) {
        nextBtn.textContent = currentStage2Index === 10 ? 'Complete Stage 2' : 'Next';
    }
}

// Interactive demonstrations
function demonstrateUtkarshana() {
    const timerDisplay = document.querySelector('.timer-display');
    const timerFill = document.querySelector('.timer-fill');
    
    if (timerDisplay && timerFill) {
        timerDisplay.textContent = '11 years';
        timerFill.style.width = '110%';
        timerFill.style.background = '#e74c3c';
        showNotification('Utkarṣaṇa: Contract extended due to negative actions!', 'error');
    }
}

function demonstrateApakrshana() {
    const timerDisplay = document.querySelector('.timer-display');
    const timerFill = document.querySelector('.timer-fill');
    
    if (timerDisplay && timerFill) {
        timerDisplay.textContent = '9 years';
        timerFill.style.width = '90%';
        timerFill.style.background = '#27ae60';
        showNotification('Apakarṣaṇa: Contract reduced through spiritual practice!', 'success');
    }
}

function completeStage1() {
    userData.stage1Completed = true;
    userData.xp += 100;
    updateUserStats();
    showNotification('Stage 1 Completed! +100 XP', 'success');
    showKarmaLearning();
}

function completeStage2() {
    userData.stage2Completed = true;
    userData.xp += 150;
    updateUserStats();
    showNotification('Stage 2 Completed! +150 XP. You have mastered karma dynamics!', 'success');
    showKarmaLearning();
}

// Rest of the existing functions remain the same...
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
        </div>
    `;
}

function createKarmaDetailLesson(karma) {
    if (!karma) return '<div>Loading...</div>';
    
    const lang = currentLanguage || 'en';
    const causes = karma.causes || [];
    const causesHi = karma.causesHi || [];
    
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
                    ${causes.map(cause => `
                        <div class="cause-item">
                            <span class="cause-marker">●</span>
                            <span>${cause}</span>
                        </div>
                    `).join('')}
                </div>
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
                    <div class="veil-overlay"></div>
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
        default:
            return `<div class="placeholder-visual" style="background: ${karma.color}">Visual representation</div>`;
    }
}

function createClassificationLesson() {
    return `
        <div class="classification-lesson">
            <h2>Classification: Ghātiyā vs Aghātiyā</h2>
            <div class="classification-explanation">
                <p>The 8 karmas are fundamentally classified based on their impact on the soul</p>
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
