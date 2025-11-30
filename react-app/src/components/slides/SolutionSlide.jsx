import { useLanguage } from '../../context/LanguageContext';
import InfoIcon from '../InfoIcon';

export default function SolutionSlide({ isActive }) {
    const { t } = useLanguage();

    return (
        <div className={`slide ${isActive ? 'active' : ''}`}>
            <div className="content-wrapper">
                <h3>{t('solution_eyebrow')}</h3>
                <h2>{t('solution_title')}</h2>
                <p>{t('solution_text')}</p>

                <div className="grid-2">
                    <div className="card">
                        <div className="highlight">{t('solution_card_1_title')}</div>
                        <p>{t('solution_card_1_text')}</p>
                    </div>
                    <div className="card">
                        <div className="highlight">
                            {t('solution_card_2_title')}
                            <InfoIcon />
                        </div>
                        <p>{t('solution_card_2_text')}</p>
                    </div>
                    <div className="card">
                        <div className="highlight">{t('solution_card_3_title')}</div>
                        <p>{t('solution_card_3_text')}</p>
                    </div>
                    <div className="card">
                        <div className="highlight">{t('solution_card_4_title')}</div>
                        <p>{t('solution_card_4_text')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
