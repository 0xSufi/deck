import { useLanguage } from '../../context/LanguageContext';

export default function MissionSlide({ isActive }) {
    const { t } = useLanguage();

    return (
        <div className={`slide ${isActive ? 'active' : ''}`}>
            <div className="content-wrapper">
                <h3>{t('mission_eyebrow')}</h3>
                <h2>{t('mission_title')}</h2>
                <p>{t('mission_text')}</p>

                <div className="grid-2">
                    <div className="card">
                        <h4 style={{ color: 'white', marginTop: 0 }}>{t('mission_card_founders_title')}</h4>
                        <p style={{ fontSize: '1rem' }}>{t('mission_card_founders_text')}</p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'white', marginTop: 0 }}>{t('mission_card_holders_title')}</h4>
                        <p style={{ fontSize: '1rem' }}>{t('mission_card_holders_text')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
