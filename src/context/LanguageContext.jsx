import { createContext, useContext, useState, useCallback } from 'react';

// Get all translation keys for reference
const getTranslationKeys = (translations) => {
    return Object.keys(translations.en);
};

const translations = {
    en: {
        hero_tag: "Live on Monad Mainnet",
        hero_title: "Noma Protocol",
        hero_subtitle: "The Unruggable Liquidity Layer",
        hero_fairness_title: "Unruggable",
        hero_fairness_desc: "Liquidity managed by protocol",
        hero_liquidity_title: "Automated",
        hero_liquidity_desc: "Permission-less market making",

        mission_eyebrow: "Overview",
        mission_title: "Beyond Just a Launchpad",
        mission_text: "Noma combines DeFi primitives like concentrated liquidity AMMs with innovative concepts like 'unruggable' liquidity and automated tokenomics. It's a turn-key solution for trust-less, decentralized token bootstrapping.",
        mission_card_founders_title: "Turn-key Solution",
        mission_card_founders_text: "Bootstrap entirely trust-less and decentralized tokens with customizable liquidity and elastic supply.",
        mission_card_holders_title: "New Asset Class",
        mission_card_holders_text: "Tokens with advanced DeFi functionalities like self-repaying loans and native leverage.",

        problem_founders_eyebrow: "The Challenge",
        problem_founders_title: "The Status Quo",
        problem_founders_text: "The current status-quo of token launches is broken, often resulting in rug pulls and misaligned incentives.",
        problem_founders_list_1_title: "Rug Risks:",
        problem_founders_list_1_text: "Liquidity is often controlled by insiders.",
        problem_founders_list_2_title: "Static Supply:",
        problem_founders_list_2_text: "Traditional tokens don't adapt to market conditions.",
        problem_founders_list_3_title: "Liquidation Risk:",
        problem_founders_list_3_text: "Borrowing against assets usually carries liquidation risk.",

        problem_holders_eyebrow: "The Need",
        problem_holders_title: "A Better Way",
        problem_holders_text: "Investors and creators need a trust-less environment with automated protections.",
        problem_holders_list_1_title: "Unruggable:",
        problem_holders_list_1_text: "Liquidity should be managed by code, not people.",
        problem_holders_list_2_title: "Guaranteed Liquidity:",
        problem_holders_list_2_text: "Ability to sell back tokens at any time.",
        problem_holders_list_3_title: "Native Utility:",
        problem_holders_list_3_text: "Yield and borrowing capabilities built-in.",

        solution_eyebrow: "Value Proposition",
        solution_title: "Inherently Unruggable",
        solution_text: "Rules encoded do not allow minting out of thin air. Every supply change is part of the market making strategy.",
        solution_card_1_title: "Revenue Stream",
        solution_card_1_text: "Protocol earns from fees and rebalancing, funneling value to holders.",
        solution_card_2_title: "Perpetual Growth",
        solution_card_2_text: "Floor price increases perpetually as a result of trading activity.",
        solution_card_3_title: "Self-Repaying Loans",
        solution_card_3_text: "Protocol profits pay back loans when LTV is high.",
        solution_card_4_title: "Liquidation-Free",
        solution_card_4_text: "Floor price only goes up; collateral value is safe.",

        tech_eyebrow: "Deep Dive",
        tech_title: "Permission-less Market Making",
        tech_text: "The system revolves around three contiguous concentrated liquidity positions: floor, anchor, and discovery.",
        tech_item_1_date: "SHIFT",
        tech_item_1_text: "Buying depletes 'discovery', triggering a <strong>Shift</strong>: liquidity re-balances upwards.",
        tech_item_2_date: "SLIDE",
        tech_item_2_text: "Selling absorbs tokens, triggering a <strong>Slide</strong>: supply reduces by burning un-backed tokens.",
        tech_item_3_date: "CONTROL",
        tech_item_3_text: "Liquidity is owned by the <strong>protocol</strong>. Circulating supply backed 1:1 at floor.",

        features_eyebrow: "Key Concepts",
        features_title: "Powerful Mechanisms",
        features_list_1_title: "Protocol Defined Supply",
        features_list_1_text: "Circulating supply must be backed 1:1 with real liquidity at the floor price.",
        features_list_2_title: "Solvency Invariant",
        features_list_2_text: "Capacity > Circulating Supply. Protocol can always buy back supply.",
        features_list_3_title: "Elastic Supply",
        features_list_3_text: "Supply expands and contracts based on market activity (Shift/Slide).",
        features_list_4_title: "Only Up Floor",
        features_list_4_text: "Floor price mathematically guaranteed to only increase.",

        business_eyebrow: "The Noma Token",
        business_title: "Protocol Dividends",
        business_card_1_stat: "Dividends",
        business_card_1_label: "Escrowed Stream",
        business_card_1_text: "Holders get a stream of tokens (180 days vesting) from protocol profits.",
        business_card_2_stat: "Launchpad",
        business_card_2_label: "Markets",
        business_card_2_text: "New tokens immediately available for trading or pre-sale.",
        business_quote: "\"Noma tokens are an entirely new class of asset with advanced DeFi functionalities.\"",

        creators_eyebrow: "For Creators",
        creators_title: "Creator Economy",
        creators_text: "Creators earn ~1% of inflation at every shift. Protocol receives an identical payout.",
        creators_card_title: "Launchpad Wizard",
        creators_card_text: "Simple setup: Token name, floor price, initial supply, and pre-sale settings.",
        creators_graphic_label: "Creator Fees",
        creators_footer_title: "AI Assistant",
        creators_footer_text: "Generates ideas and logos.",

        holders_eyebrow: "For Holders",
        holders_title: "Credit & Staking",
        holders_text: "Borrow against your tokens without liquidation risk. Stake to earn rewards.",
        holders_card_title: "Native Leverage",
        holders_card_text: "Use borrowed funds to buy more tokens ('Looping') to increase exposure.",
        holders_list_1_title: "No Liquidation:",
        holders_list_1_text: "Floor price only increases, securing your collateral.",
        holders_list_2_title: "Self-Repaying:",
        holders_list_2_text: "Loans > 2.5 LTV are paid back by protocol profits.",
        holders_graphic_title: "Staking",
        holders_graphic_sub: "AUTO-COMPOUNDING",
        holders_graphic_footer_title: "No Claiming Needed",
        holders_graphic_footer_text: "Unstake to get original + rewards.",

        roadmap_eyebrow: "The Future",
        roadmap_title: "Roadmap & Directions",
        roadmap_item_1_date: "NOW",
        roadmap_item_1_title: "Monad Mainnet",
        roadmap_item_1_text: "Protocol release. Finding product market fit.",
        roadmap_item_2_date: "SOON",
        roadmap_item_2_title: "AI Integration",
        roadmap_item_2_text: "Coupling AI with protocol parameters & Uniswap V4 hooks.",
        roadmap_item_3_date: "LATER",
        roadmap_item_3_title: "Protocol DAO",
        roadmap_item_3_text: "Formalizing governance for resilience.",
        roadmap_item_4_date: "GOAL",
        roadmap_item_4_title: "Evolution",
        roadmap_item_4_text: "Continuous improvement based on community feedback.",

        contact_eyebrow: "Get in Touch",
        contact_title: "Join Noma",
        contact_text: "We are building the future of fair launches.",
        contact_btn: "Launch App",
        contact_twitter_label: "@NomaProtocol",
        contact_discord_label: "Community",
        contact_web_label: "noma.fi",

        controls_prev: "Previous",
        controls_next: "Next",
        controls_bg_title: "Background FX",
        controls_bg_intensity: "Intensity",
    },
    es: {
        hero_tag: "Live on Monad Mainnet",
        hero_title: "Noma Protocol",
        hero_subtitle: "The Unruggable Liquidity Layer",
        hero_fairness_title: "Unruggable",
        hero_fairness_desc: "Liquidity managed by protocol",
        hero_liquidity_title: "Automated",
        hero_liquidity_desc: "Permission-less market making",

        mission_eyebrow: "Overview",
        mission_title: "Beyond Just a Launchpad",
        mission_text: "Noma combines DeFi primitives like concentrated liquidity AMMs with innovative concepts like 'unruggable' liquidity and automated tokenomics. It's a turn-key solution for trust-less, decentralized token bootstrapping.",
        mission_card_founders_title: "Turn-key Solution",
        mission_card_founders_text: "Bootstrap entirely trust-less and decentralized tokens with customizable liquidity and elastic supply.",
        mission_card_holders_title: "New Asset Class",
        mission_card_holders_text: "Tokens with advanced DeFi functionalities like self-repaying loans and native leverage.",

        problem_founders_eyebrow: "The Challenge",
        problem_founders_title: "The Status Quo",
        problem_founders_text: "The current status-quo of token launches is broken, often resulting in rug pulls and misaligned incentives.",
        problem_founders_list_1_title: "Rug Risks:",
        problem_founders_list_1_text: "Liquidity is often controlled by insiders.",
        problem_founders_list_2_title: "Static Supply:",
        problem_founders_list_2_text: "Traditional tokens don't adapt to market conditions.",
        problem_founders_list_3_title: "Liquidation Risk:",
        problem_founders_list_3_text: "Borrowing against assets usually carries liquidation risk.",

        problem_holders_eyebrow: "The Need",
        problem_holders_title: "A Better Way",
        problem_holders_text: "Investors and creators need a trust-less environment with automated protections.",
        problem_holders_list_1_title: "Unruggable:",
        problem_holders_list_1_text: "Liquidity should be managed by code, not people.",
        problem_holders_list_2_title: "Guaranteed Liquidity:",
        problem_holders_list_2_text: "Ability to sell back tokens at any time.",
        problem_holders_list_3_title: "Native Utility:",
        problem_holders_list_3_text: "Yield and borrowing capabilities built-in.",

        solution_eyebrow: "Value Proposition",
        solution_title: "Inherently Unruggable",
        solution_text: "Rules encoded do not allow minting out of thin air. Every supply change is part of the market making strategy.",
        solution_card_1_title: "Revenue Stream",
        solution_card_1_text: "Protocol earns from fees and rebalancing, funneling value to holders.",
        solution_card_2_title: "Perpetual Growth",
        solution_card_2_text: "Floor price increases perpetually as a result of trading activity.",
        solution_card_3_title: "Self-Repaying Loans",
        solution_card_3_text: "Protocol profits pay back loans when LTV is high.",
        solution_card_4_title: "Liquidation-Free",
        solution_card_4_text: "Floor price only goes up; collateral value is safe.",

        tech_eyebrow: "Deep Dive",
        tech_title: "Permission-less Market Making",
        tech_text: "The system revolves around three contiguous concentrated liquidity positions: floor, anchor, and discovery.",
        tech_item_1_date: "SHIFT",
        tech_item_1_text: "Buying depletes 'discovery', triggering a <strong>Shift</strong>: liquidity re-balances upwards.",
        tech_item_2_date: "SLIDE",
        tech_item_2_text: "Selling absorbs tokens, triggering a <strong>Slide</strong>: supply reduces by burning un-backed tokens.",
        tech_item_3_date: "CONTROL",
        tech_item_3_text: "Liquidity is owned by the <strong>protocol</strong>. Circulating supply backed 1:1 at floor.",

        features_eyebrow: "Key Concepts",
        features_title: "Powerful Mechanisms",
        features_list_1_title: "Protocol Defined Supply",
        features_list_1_text: "Circulating supply must be backed 1:1 with real liquidity at the floor price.",
        features_list_2_title: "Solvency Invariant",
        features_list_2_text: "Capacity > Circulating Supply. Protocol can always buy back supply.",
        features_list_3_title: "Elastic Supply",
        features_list_3_text: "Supply expands and contracts based on market activity (Shift/Slide).",
        features_list_4_title: "Only Up Floor",
        features_list_4_text: "Floor price mathematically guaranteed to only increase.",

        business_eyebrow: "The Noma Token",
        business_title: "Protocol Dividends",
        business_card_1_stat: "Dividends",
        business_card_1_label: "Escrowed Stream",
        business_card_1_text: "Holders get a stream of tokens (180 days vesting) from protocol profits.",
        business_card_2_stat: "Launchpad",
        business_card_2_label: "Markets",
        business_card_2_text: "New tokens immediately available for trading or pre-sale.",
        business_quote: "\"Noma tokens are an entirely new class of asset with advanced DeFi functionalities.\"",

        creators_eyebrow: "For Creators",
        creators_title: "Creator Economy",
        creators_text: "Creators earn ~1% of inflation at every shift. Protocol receives an identical payout.",
        creators_card_title: "Launchpad Wizard",
        creators_card_text: "Simple setup: Token name, floor price, initial supply, and pre-sale settings.",
        creators_graphic_label: "Creator Fees",
        creators_footer_title: "AI Assistant",
        creators_footer_text: "Generates ideas and logos.",

        holders_eyebrow: "For Holders",
        holders_title: "Credit & Staking",
        holders_text: "Borrow against your tokens without liquidation risk. Stake to earn rewards.",
        holders_card_title: "Native Leverage",
        holders_card_text: "Use borrowed funds to buy more tokens ('Looping') to increase exposure.",
        holders_list_1_title: "No Liquidation:",
        holders_list_1_text: "Floor price only increases, securing your collateral.",
        holders_list_2_title: "Self-Repaying:",
        holders_list_2_text: "Loans > 2.5 LTV are paid back by protocol profits.",
        holders_graphic_title: "Staking",
        holders_graphic_sub: "AUTO-COMPOUNDING",
        holders_graphic_footer_title: "No Claiming Needed",
        holders_graphic_footer_text: "Unstake to get original + rewards.",

        roadmap_eyebrow: "The Future",
        roadmap_title: "Roadmap & Directions",
        roadmap_item_1_date: "NOW",
        roadmap_item_1_title: "Monad Mainnet",
        roadmap_item_1_text: "Protocol release. Finding product market fit.",
        roadmap_item_2_date: "SOON",
        roadmap_item_2_title: "AI Integration",
        roadmap_item_2_text: "Coupling AI with protocol parameters & Uniswap V4 hooks.",
        roadmap_item_3_date: "LATER",
        roadmap_item_3_title: "Protocol DAO",
        roadmap_item_3_text: "Formalizing governance for resilience.",
        roadmap_item_4_date: "GOAL",
        roadmap_item_4_title: "Evolution",
        roadmap_item_4_text: "Continuous improvement based on community feedback.",

        contact_eyebrow: "Get in Touch",
        contact_title: "Join Noma",
        contact_text: "We are building the future of fair launches.",
        contact_btn: "Launch App",
        contact_twitter_label: "@NomaProtocol",
        contact_discord_label: "Community",
        contact_web_label: "noma.fi",

        controls_prev: "Anterior",
        controls_next: "Siguiente",
        controls_bg_title: "Efectos de Fondo",
        controls_bg_intensity: "Intensidad",
    }
};

const STORAGE_KEY = 'pitch-deck-content-overrides';

const LanguageContext = createContext();

// Load saved content from localStorage
const loadSavedContent = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        console.error('Failed to load saved content:', e);
        return {};
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');
    const [editMode, setEditMode] = useState(false);
    const [contentOverrides, setContentOverrides] = useState(loadSavedContent);
    const [savedContent, setSavedContent] = useState(loadSavedContent);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    // Track if there are unsaved changes
    const checkUnsavedChanges = useCallback(() => {
        const currentStr = JSON.stringify(contentOverrides);
        const savedStr = JSON.stringify(savedContent);
        setHasUnsavedChanges(currentStr !== savedStr);
    }, [contentOverrides, savedContent]);

    // Check for unsaved changes whenever contentOverrides changes
    useCallback(() => {
        checkUnsavedChanges();
    }, [contentOverrides, checkUnsavedChanges]);

    const updateContent = useCallback((key, value) => {
        setContentOverrides(prev => {
            const updated = {
                ...prev,
                [language]: {
                    ...prev[language],
                    [key]: value
                }
            };
            // Check if there are unsaved changes
            const savedStr = JSON.stringify(savedContent);
            const updatedStr = JSON.stringify(updated);
            setHasUnsavedChanges(savedStr !== updatedStr);
            return updated;
        });
    }, [language, savedContent]);

    const saveContent = useCallback(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(contentOverrides));
            setSavedContent(contentOverrides);
            setHasUnsavedChanges(false);
            console.log('Content saved successfully!');
        } catch (e) {
            console.error('Failed to save content:', e);
        }
    }, [contentOverrides]);

    const t = useCallback((key) => {
        // Check for content overrides first
        const override = contentOverrides[language]?.[key];
        if (override !== undefined) {
            return override;
        }
        return translations[language]?.[key] || translations.en[key] || key;
    }, [language, contentOverrides]);

    const tHtml = useCallback((key) => {
        const override = contentOverrides[language]?.[key];
        const text = override !== undefined ? override : (translations[language]?.[key] || translations.en[key] || key);
        return { __html: text };
    }, [language, contentOverrides]);

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            t,
            tHtml,
            editMode,
            setEditMode,
            updateContent,
            saveContent,
            hasUnsavedChanges
        }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
