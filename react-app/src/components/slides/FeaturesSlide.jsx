import { useLanguage } from '../../context/LanguageContext';

export default function FeaturesSlide({ isActive }) {
    const { t } = useLanguage();

    return (
        <div className={`slide ${isActive ? 'active' : ''}`}>
            <div className="content-wrapper">
                <h3>{t('features_eyebrow')}</h3>
                <h2>{t('features_title')}</h2>
                <div className="grid-2">
                    <div>
                        <ul>
                            <li>
                                <strong style={{ color: 'white' }}>{t('features_list_1_title')}</strong>
                                <br/><span>{t('features_list_1_text')}</span>
                            </li>
                            <li>
                                <strong style={{ color: 'white' }}>{t('features_list_2_title')}</strong>
                                <br/><span>{t('features_list_2_text')}</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <strong style={{ color: 'white' }}>{t('features_list_3_title')}</strong>
                                <br/><span>{t('features_list_3_text')}</span>
                            </li>
                            <li>
                                <strong style={{ color: 'white' }}>{t('features_list_4_title')}</strong>
                                <br/><span>{t('features_list_4_text')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
