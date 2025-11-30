import { useLanguage } from '../../context/LanguageContext';
import InfoIcon from '../InfoIcon';

export default function BusinessSlide({ isActive }) {
    const { t } = useLanguage();

    return (
        <div className={`slide ${isActive ? 'active' : ''}`}>
            <div className="content-wrapper">
                <h3>{t('business_eyebrow')}</h3>
                <h2>{t('business_title')}</h2>
                <div className="grid-2">
                    <div className="card" style={{ textAlign: 'center' }}>
                        <div className="big-stat">{t('business_card_1_stat')}</div>
                        <div className="stat-label">{t('business_card_1_label')}</div>
                        <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>{t('business_card_1_text')}</p>
                    </div>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <div className="big-stat">
                            {t('business_card_2_stat')}
                            <InfoIcon type="dividends" />
                        </div>
                        <div className="stat-label">{t('business_card_2_label')}</div>
                        <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>{t('business_card_2_text')}</p>
                    </div>
                </div>
                <p style={{ textAlign: 'center', marginTop: '2rem', fontStyle: 'italic' }}>{t('business_quote')}</p>
            </div>
        </div>
    );
}
