import React, { useState } from "react";
import { Plus } from "lucide-react";
import styles from "./ModelsBody.module.css";
import DatabaseCard from "./DatabaseCard";

interface IntegrationsBodyProps {
    workspaceId: string;
}

const integrationCards = [
    { type: "API", name: "Stripe", description: "Payment processing platform", provider: "GET /v1/charges" },
    { type: "MCP", name: "GitHub", description: "Developer platform and repository", provider: "OAuth 2.0" },
    { type: "API", name: "Twilio", description: "Communication APIs for SMS, Voice", provider: "POST /2010-04-01/Accounts" },
    { type: "MCP", name: "Slack", description: "Team communication and collaboration", provider: "OAuth 2.0" },
    { type: "API", name: "SendGrid", description: "Email delivery and API", provider: "POST /v3/mail/send" },
];

const IntegrationsBody: React.FC<IntegrationsBodyProps> = ({ workspaceId }) => {
    const [activeTab, setActiveTab] = useState("View All");
    const tabs = ["View All", "API", "MCP"];

    const filteredCards = activeTab === "View All"
        ? integrationCards
        : integrationCards.filter((card) => card.type.toLowerCase() === activeTab.toLowerCase());

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
                                    <div className={styles["text"]}>Integrations</div>
                                    <div className={styles["supporting-text"]}>
                                        Manage your external platform connections and connected API endpoints.
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
                                                Integration
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
                            No integrations found.
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

export default IntegrationsBody;
