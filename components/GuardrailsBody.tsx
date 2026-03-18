import React, { useState } from "react";
import { Plus } from "lucide-react";
import styles from "./ModelsBody.module.css";
import DatabaseCard from "./DatabaseCard";

interface GuardrailsBodyProps {
    workspaceId: string;
}

const integrationCards = [
    { type: "Guardrail", name: "Profanity Filter", description: "Blocks profane and inappropriate language", provider: "Keyword Matching" },
    { type: "Guardrail Model", name: "Llama Guard 3", description: "Evaluates LLM inputs and outputs for safety", provider: "Meta", extraText: "Content Moderation" },
    { type: "Guardrail", name: "PII Masking", description: "Detects and masks sensitive personal information", provider: "Regex Pattern" },
    { type: "Guardrail Model", name: "Nemoguard", description: "Nvidia's toolkit for safe LLM interaction", provider: "NVIDIA", extraText: "Topical Control" },
    { type: "Guardrail", name: "Prompt Injection", description: "Prevents adversarial attacks via prompt injection", provider: "Heuristics" },
];

const GuardrailsBody: React.FC<GuardrailsBodyProps> = ({ workspaceId }) => {
    const [activeTab, setActiveTab] = useState("View All");
    const tabs = ["View All", "Guardrails", "Guardrail Model"];

    const filteredCards = activeTab === "View All"
        ? integrationCards
        : integrationCards.filter((card) => {
              if (activeTab === "Guardrails") return card.type.toLowerCase() === "guardrail";
              return card.type.toLowerCase() === activeTab.toLowerCase();
          });

    const cardRows = [];
    for (let i = 0; i < filteredCards.length; i += 4) {
        cardRows.push(filteredCards.slice(i, i + 4));
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
                                    <div className={styles["text"]}>Guardrails</div>
                                    <div className={styles["supporting-text"]}>
                                        Manage your system level safeguards and conversational rules.
                                    </div>
                                </div>
                                <div className={styles["actions"]}>
                                    <div className={styles["buttonsbutton"]}>
                                        <div className={styles["text-padding"]}>
                                            <div className={styles["text2"]}>
                                                Learn More
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["buttonsbutton2"]}>
                                        <Plus className="w-5 h-5 text-white" />
                                        <div className={styles["text-padding"]}>
                                            <div className={styles["text3"]}>
                                                Guardrail
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
                            No guardrails found.
                        </div>
                    )}
                    {cardRows.map((row, rowIndex) => (
                        <div key={`row-${rowIndex}`} className={styles["experience"]}>
                            {row.map((card, i) => (
                                <DatabaseCard 
                                    key={`card-${rowIndex}-${card.type}-${i}`}
                                    {...card} 
                                />
                            ))}
                            {/* Fill empty spots in final row to maintain width */}
                            {row.length < 4 && Array.from({ length: 4 - row.length }).map((_, emptyIndex) => (
                                <div key={`empty-${rowIndex}-${emptyIndex}`} style={{ flex: '0 0 323px', width: '323px', visibility: 'hidden' }} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GuardrailsBody;
