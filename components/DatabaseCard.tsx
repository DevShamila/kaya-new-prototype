import React from 'react';
import styles from './DatabaseCard.module.css';

interface DatabaseCardProps {
    name: string;
    type: string;
    description: string;
    provider: string;
}

const DatabaseCard: React.FC<DatabaseCardProps> = ({ name, type, description, provider }) => {
    let badgeTypeClass = '';
    switch (type.toLowerCase()) {
        case 'vector': badgeTypeClass = styles['badge-vector']; break;
        case 'relational': badgeTypeClass = styles['badge-relational']; break;
        case 'graph': badgeTypeClass = styles['badge-graph']; break;
        case 'nosql': badgeTypeClass = styles['badge-nosql']; break;
        default: badgeTypeClass = '';
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
                        <div className={`${styles['badge-wrapper']} ${badgeTypeClass}`}>
                            <div className={styles['badge']}>
                                <div className={styles['text']}>{type}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['supporting-text']}>{description}</div>
                    <div className={styles['supporting-text']}>{provider}</div>
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
