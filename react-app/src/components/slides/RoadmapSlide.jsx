import { useLanguage } from '../../context/LanguageContext';

export default function RoadmapSlide({ isActive }) {
    const { t } = useLanguage();

    return (
        <div className={`slide ${isActive ? 'active' : ''}`}>
            <div className="content-wrapper">
                <h3>{t('roadmap_eyebrow')}</h3>
                <h2>{t('roadmap_title')}</h2>

                <div className="card" style={{ width: '100%', boxSizing: 'border-box' }}>
                    <div className="roadmap-item">
                        <div className="roadmap-date" style={{ color: 'var(--accent-tertiary)' }}>{t('roadmap_item_1_date')}</div>
                        <div>
                            <strong>
                                <img src="/assets/monad.svg" alt="Monad Logo" style={{ height: '1em', verticalAlign: 'text-bottom', marginRight: '0.3rem' }}/>
                                <span>{t('roadmap_item_1_title')}</span>
                            </strong>
                            <br/><span>{t('roadmap_item_1_text')}</span>
                        </div>
                    </div>
                    <div className="roadmap-item">
                        <div className="roadmap-date">{t('roadmap_item_2_date')}</div>
                        <div><strong>{t('roadmap_item_2_title')}</strong><br/><span>{t('roadmap_item_2_text')}</span></div>
                    </div>
                    <div className="roadmap-item">
                        <div className="roadmap-date">{t('roadmap_item_3_date')}</div>
                        <div><strong>{t('roadmap_item_3_title')}</strong><br/><span>{t('roadmap_item_3_text')}</span></div>
                    </div>
                    <div className="roadmap-item">
                        <div className="roadmap-date">{t('roadmap_item_4_date')}</div>
                        <div><strong>{t('roadmap_item_4_title')}</strong><br/><span>{t('roadmap_item_4_text')}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
