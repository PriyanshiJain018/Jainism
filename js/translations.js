// js/translations.js

const translations = {
    en: {
        'app.name': 'Jinasaraswati',
        'app.subtitle': 'The Beginner\'s Jainism App',
        'navigation.home': 'Home',
        'navigation.profile': 'Profile',
        'navigation.settings': 'Settings',
        'home.welcome': 'Welcome back!',
        'home.welcomeGuest': 'Welcome, Seeker!',
        'home.yourProgress': 'Your Progress',
        'home.level': 'Level',
        'dailyPrashna.title': '📜 Daily Prashna',
        'dailyPrashna.answer': 'Answer',
        'universes.fourUniverses': 'Four Universes of Knowledge',
        'universes.prathamanuyoga.name': 'Prathamānuyoga',
        'universes.prathamanuyoga.subtitle': 'The Universe of Narratives',
        'universes.prathamanuyoga.description': 'Learn foundational Jain concepts through sacred stories and teachings of the Tīrthaṅkaras',
        'universes.karananuyoga.name': 'Karaṇānuyoga',
        'universes.karananuyoga.subtitle': 'The Universe of Cosmology',
        'universes.karananuyoga.description': 'Explore the structure of the cosmos and understand Jain geography through 3D visualizations',
        'universes.charananuyoga.name': 'Charaṇānuyoga',
        'universes.charananuyoga.subtitle': 'The Universe of Conduct',
        'universes.charananuyoga.description': 'Learn ethical principles and practical wisdom for righteous living as a Jain householder',
        'universes.dravyanuyoga.name': 'Dravyānuyoga',
        'universes.dravyanuyoga.subtitle': 'The Universe of Reality',
        'universes.dravyanuyoga.description': 'Understand the fundamental substances and metaphysical principles that govern existence',
        'universes.locked': '🔒 Locked',
        'universes.stages': '{{count}} stages',
        'stages.firstTirthankara.name': 'The First Tīrthaṅkara'
    },
    hi: {
        'app.name': 'जिनसरस्वती',
        'app.subtitle': 'जैन धर्म की प्रारंभिक ऐप',
        'navigation.home': 'होम',
        'navigation.profile': 'प्रोफाइल',
        'navigation.settings': 'सेटिंग्स',
        'home.welcome': 'वापस स्वागत है!',
        'home.welcomeGuest': 'स्वागत है, साधक!',
        'home.yourProgress': 'आपकी प्रगति',
        'home.level': 'स्तर',
        'dailyPrashna.title': '📜 दैनिक प्रश्न',
        'dailyPrashna.answer': 'उत्तर',
        'universes.fourUniverses': 'ज्ञान के चार ब्रह्मांड',
        'universes.prathamanuyoga.name': 'प्रथमानुयोग',
        'universes.prathamanuyoga.subtitle': 'कथाओं का ब्रह्मांड',
        'universes.prathamanuyoga.description': 'तीर्थंकरों की पवित्र कहानियों और शिक्षाओं के माध्यम से जैन धर्म की मूल अवधारणाएं सीखें',
        'universes.karananuyoga.name': 'करणानुयोग',
        'universes.karananuyoga.subtitle': 'ब्रह्मांड विज्ञान का ब्रह्मांड',
        'universes.karananuyoga.description': '3D दृश्यों के माध्यम से ब्रह्मांड की संरचना और जैन भूगोल को समझें',
        'universes.charananuyoga.name': 'चरणानुयोग',
        'universes.charananuyoga.subtitle': 'आचरण का ब्रह्मांड',
        'universes.charananuyoga.description': 'जैन गृहस्थ के रूप में धर्मनिष्ठ जीवन के लिए नैतिक सिद्धांत और व्यावहारिक ज्ञान सीखें',
        'universes.dravyanuyoga.name': 'द्रव्यानुयोग',
        'universes.dravyanuyoga.subtitle': 'वास्तविकता का ब्रह्मांड',
        'universes.dravyanuyoga.description': 'अस्तित्व को नियंत्रित करने वाले मौलिक पदार्थों और तत्वमीमांसा सिद्धांतों को समझें',
        'universes.locked': '🔒 बंद',
        'universes.stages': '{{count}} चरण',
        'stages.firstTirthankara.name': 'प्रथम तीर्थंकर'
    }
};

let currentLanguage = 'en';

function t(key, params = {}) {
    let translation = translations[currentLanguage][key] || key;
    
    // Handle interpolation like {{count}}
    Object.keys(params).forEach(param => {
        translation = translation.replace(new RegExp(`{{${param}}}`, 'g'), params[param]);
    });
    
    return translation;
}

function updateLanguage(lang) {
    currentLanguage = lang;
    updateAllTranslations();
    localStorage.setItem('language', lang);
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

function updateAllTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
    
    // Update dynamic content
    updateDailyPrashna();
    updateUniverses();
}

function updateDailyPrashna() {
    const questionEl = document.getElementById('daily-question');
    const answerEl = document.getElementById('daily-answer');
    
    if (currentLanguage === 'hi') {
        questionEl.textContent = 'भगवान ऋषभदेव द्वारा सिखाए गए छह व्यवसाय कौन से हैं?';
        answerEl.textContent = 'असि (रक्षा), मसि (लेखन), कृषि (खेती), विद्या (शिक्षा), शिल्प (हस्तकला), वाणिज्य (व्यापार)';
    } else {
        questionEl.textContent = 'What are the six professions taught by Lord Ṛṣhabdeva?';
        answerEl.textContent = 'Asī (Defense), Masī (Writing), Kṛṣi (Agriculture), Vidyā (Education), Śilpa (Crafts), Vāṇijya (Trade)';
    }
}

// Initialize language from localStorage or browser
function initializeLanguage() {
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.startsWith('hi') ? 'hi' : 'en';
    const lang = savedLang || browserLang;
    updateLanguage(lang);
}
