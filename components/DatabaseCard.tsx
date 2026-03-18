import React from 'react';
import styles from './DatabaseCard.module.css';

interface DatabaseCardProps {
    name: string;
    type?: string;
    description: string;
    provider?: string;
    extraText?: string;
}

const DatabaseCard: React.FC<DatabaseCardProps> = ({ name, type, description, provider, extraText }) => {
    let badgeTypeClass = '';
    if (type) {
        switch (type.toLowerCase()) {
            case 'vector':
            case 'vector rag':
            case 'mcp': 
            case 'guardrail model': badgeTypeClass = styles['badge-vector']; break;
            case 'relational': badgeTypeClass = styles['badge-relational']; break;
            case 'api': 
            case 'guardrail': 
            case 'string': badgeTypeClass = styles['badge-api']; break;
            case 'int': badgeTypeClass = styles['badge-vector']; break;
            case 'float': badgeTypeClass = styles['badge-float']; break;
            case 'bool': badgeTypeClass = styles['badge-bool']; break;
            case 'graph':
            case 'graph rag': badgeTypeClass = styles['badge-graph']; break;
            case 'nosql': badgeTypeClass = styles['badge-nosql']; break;
            default: badgeTypeClass = '';
        }
    }

    return (
        <div className={styles['integration-card-desktop']}>
            <div className={styles['content']}>
                <div className={styles['heading-and-toggle']}>
                    <div className={styles['heading-and-icon-parent']}>
                        <div className={styles['heading-and-icon']}>
                            <div className={styles['icon-wrap']}>
                                <div className={styles['linear']}></div>
                            </div>
                            <div className={styles['heading']}>{name}</div>
                        </div>
                        {type && (
                            <div className={`${styles['badge-wrapper']} ${badgeTypeClass}`}>
                                <div className={styles['badge']}>
                                    <div className={styles['text']}>{type}</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles['supporting-text']}>{description}</div>
                    {extraText && <div className={styles['supporting-text']}>{extraText}</div>}
                    {provider && <div className={styles['supporting-text']}>{provider}</div>}
                </div>
            </div>
            <div className={styles['section-footer']}>
                <div className={styles['divider-icon']}></div>
                <div className={styles['content2']}>
                    <div className={styles['actions']}>
                        <button className={styles['button']}>
                            <div className={styles['text2']}>View</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatabaseCard;
