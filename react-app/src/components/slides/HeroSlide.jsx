import { useLanguage } from '../../context/LanguageContext';

export default function HeroSlide({ isActive }) {
    const { t } = useLanguage();

    return (
        <div className={`slide hero-slide ${isActive ? 'active' : ''}`}>
            <div className="content-wrapper">
                <div className="tag">
                    <img
                        src="/assets/monad.svg"
                        alt="Monad Logo"
                        style={{ height: '1.2em', verticalAlign: 'text-bottom', marginRight: '0.5rem' }}
                    />
                    <span>{t('hero_tag')}</span>
                </div>
                <img
                    src="/assets/logo.svg"
                    alt="Noma Protocol Logo"
                    style={{
                        display: 'block',
                        margin: '1.5rem auto',
                        height: '100px',
                        filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))'
                    }}
                />
                <h1>{t('hero_title')}</h1>
                <p style={{ fontSize: '1.5rem', color: '#9ca3af' }}>{t('hero_subtitle')}</p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <div style={{ padding: '1rem 2rem', borderLeft: '2px solid var(--accent-primary)', textAlign: 'left' }}>
                        <div style={{ color: 'white', fontWeight: 'bold' }}>{t('hero_fairness_title')}</div>
                        <div style={{ fontSize: '0.9rem' }}>{t('hero_fairness_desc')}</div>
                    </div>
                    <div style={{ padding: '1rem 2rem', borderLeft: '2px solid var(--accent-secondary)', textAlign: 'left' }}>
                        <div style={{ color: 'white', fontWeight: 'bold' }}>{t('hero_liquidity_title')}</div>
                        <div style={{ fontSize: '0.9rem' }}>{t('hero_liquidity_desc')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
