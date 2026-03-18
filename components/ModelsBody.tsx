import React, { useState } from "react";
import { Plus } from "lucide-react";
import styles from "./ModelsBody.module.css";

interface ModelsBodyProps {
    workspaceId: string;
}

const integrationCards = [
    { type: "LLM", brand: "Open AI", used: "6 workflows" },
    { type: "SLM", brand: "Open AI", used: "4 workflows" },
    { type: "LLM", brand: "Open AI", used: "2 workflows" },
    { type: "LLM", brand: "Open AI", used: "8 workflows" },
    { type: "STS", brand: "Open AI", used: "1 workflow" },
    { type: "LLM", brand: "Open AI", used: "3 workflows" },
];

const ModelsBody: React.FC<ModelsBodyProps> = ({ workspaceId }) => {
    const [activeTab, setActiveTab] = useState("View all");
    const tabs = ["View all", "LLMs", "SLM", "STS"];

    const filteredCards = activeTab === "View all"
        ? integrationCards
        : integrationCards.filter((card) => {
              if (activeTab === "LLMs") return card.type === "LLM";
              return card.type === activeTab;
          });

    const cardRows = [];
    for (let i = 0; i < filteredCards.length; i += 3) {
        cardRows.push(filteredCards.slice(i, i + 3));
    }

    return (
        <div className={styles["frame-parent"]}>
            <div className={styles["container-parent"]}>
                <div className={styles["container"]}>
                    <div className={styles["image-wrap"]}>
                        <div className={styles["image"]}></div>
                    </div>

                    <div className={styles["content"]}>
                        <div className={styles["page-header"]}>
                            <div className={styles["content2"]}>
                                <div
                                    className={
                                        styles["text-and-supporting-text"]
                                    }
                                >
                                    <div className={styles["text"]}>Models</div>
                                    <div className={styles["supporting-text"]}>
                                        Easily connect, manage, and scale the
                                        top AI models for your specific use
                                        causes.
                                    </div>
                                </div>
                                <div className={styles["actions"]}>
                                    <div className={styles["buttonsbutton"]}>
                                        <div className={styles["text-padding"]}>
                                            <div className={styles["text2"]}>
                                                Learn more
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["buttonsbutton2"]}>
                                        <Plus className="w-5 h-5 text-white" />
                                        <div className={styles["text-padding"]}>
                                            <div className={styles["text3"]}>
                                                Model
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles["actions2"]}>
                            <div className={styles["buttonsbutton3"]}></div>
                            <div className={styles["buttonsbutton4"]}></div>
                            <div className={styles["buttonsbutton4"]}></div>
                            <div className={styles["buttonsbutton6"]}></div>
                        </div>
                        <div className={styles["select"]}></div>
                    </div>

                    <div className={styles["divider-icon"]}></div>
                </div>

                <div className={styles["horizontal-tabs"]}>
                    <div className={styles["tabs"]}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={
                                    activeTab === tab
                                        ? styles["tab-button-base"]
                                        : styles["tab-button-base2"]
                                }
                                onClick={() => setActiveTab(tab)}
                            >
                                <div className={styles["text3"]}>{tab}</div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles["experience-parent"]}>
                    {cardRows.length === 0 && (
                        <div className="text-center py-8 text-text-tertiary">
                            No models found.
                        </div>
                    )}
                    {cardRows.map((row, rowIndex) => (
                        <div key={rowIndex} className={styles["experience"]}>
                            {row.map((card, i) => (
                                <div
                                    key={`card-${rowIndex}-${card.type}-${i}`}
                                    className={styles["integration-card-desktop"]}
                                >
                                    <div className={styles["content3"]}>
                                        <div
                                            className={styles["heading-and-toggle"]}
                                        >
                                            <div
                                                className={
                                                    styles[
                                                        "heading-and-icon-parent"
                                                    ]
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles["heading-and-icon"]
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles["icon-wrap"]
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles["linear"]
                                                            }
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles["heading"]
                                                        }
                                                    >
                                                        GPT - 4
                                                    </div>
                                                </div>

                                                {card.type === "LLM" && (
                                                    <div
                                                        className={
                                                            styles["badge-wrapper"]
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles["badge"]
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    styles["text8"]
                                                                }
                                                            >
                                                                {card.type}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {card.type === "SLM" && (
                                                    <div
                                                        className={
                                                            styles["badge-frame"]
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles["badge3"]
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    styles["text8"]
                                                                }
                                                            >
                                                                {card.type}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {card.type === "STS" && (
                                                    <div
                                                        className={
                                                            styles["badge-wrapper6"]
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles["badge9"]
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    styles["text8"]
                                                                }
                                                            >
                                                                {card.type}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <div
                                                    className={
                                                        styles["badge-container"]
                                                    }
                                                >
                                                    <div
                                                        className={styles["badge2"]}
                                                    >
                                                        <div
                                                            className={
                                                                styles["text8"]
                                                            }
                                                        >
                                                            {card.brand}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles["supporting-text2"]
                                                }
                                            >
                                                Used in {card.used}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["section-footer"]}>
                                        <div
                                            className={styles["divider-icon2"]}
                                        ></div>
                                        <div className={styles["content4"]}>
                                            <div className={styles["actions3"]}>
                                                <div className={styles["button"]}>
                                                    <div
                                                        className={styles["text3"]}
                                                    >
                                                        View
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Fill empty spots in final row to maintain width */}
                            {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, emptyIndex) => (
                                <div key={`empty-${rowIndex}-${emptyIndex}`} style={{ flex: 1, visibility: 'hidden' }} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModelsBody;
