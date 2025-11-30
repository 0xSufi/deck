import { useLanguage } from '../../context/LanguageContext';

export default function ProblemFoundersSlide({ isActive }) {
    const { t } = useLanguage();

    return (
        <div className={`slide ${isActive ? 'active' : ''}`}>
            <div className="content-wrapper">
                <h3>{t('problem_founders_eyebrow')}</h3>
                <h2>{t('problem_founders_title')}</h2>
                <div className="grid-2">
                    <div>
                        <p>{t('problem_founders_text')}</p>
                        <ul>
                            <li><strong>{t('problem_founders_list_1_title')}</strong> <span>{t('problem_founders_list_1_text')}</span></li>
                            <li><strong>{t('problem_founders_list_2_title')}</strong> <span>{t('problem_founders_list_2_text')}</span></li>
                            <li><strong>{t('problem_founders_list_3_title')}</strong> <span>{t('problem_founders_list_3_text')}</span></li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="chart-placeholder">
                            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M50 90 L50 20" />
                                <path d="M30 90 L70 90" />
                                <path d="M10 40 L50 20 L90 30" stroke="var(--accent-primary)" strokeWidth="3"/>
                                <path d="M10 40 L10 65" />
                                <path d="M0 65 A15 8 0 0 0 20 65" fill="rgba(99, 102, 241, 0.2)" />
                                <path d="M90 30 L90 45" />
                                <path d="M80 45 A15 8 0 0 0 100 45" fill="rgba(168, 85, 247, 0.2)" />
                                <path d="M45 15 L55 25 M55 15 L45 25" stroke="var(--accent-tertiary)" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
