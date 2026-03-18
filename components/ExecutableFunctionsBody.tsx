import React from "react";
import { Plus } from "lucide-react";
import styles from "./ModelsBody.module.css";
import DatabaseCard from "./DatabaseCard";

interface ExecutableFunctionsBodyProps {
    workspaceId: string;
}

const integrationCards = [
    { name: "process_payment", description: "Processes payment through gateway", provider: "AWS Lambda" },
    { name: "generate_invoice", description: "Generates PDF invoice for customer", provider: "Google Cloud Functions" },
    { name: "send_email", description: "Sends transactional email to user", provider: "Azure Functions" },
    { name: "resize_image", description: "Resizes uploaded images to thumbnails", provider: "AWS Lambda" },
    { name: "calculate_tax", description: "Calculates regional tax on checkout", provider: "Vercel Serverless" },
];

const ExecutableFunctionsBody: React.FC<ExecutableFunctionsBodyProps> = ({ workspaceId }) => {
    const cardRows = [];
    for (let i = 0; i < integrationCards.length; i += 4) {
        cardRows.push(integrationCards.slice(i, i + 4));
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
                                    <div className={styles["text"]}>Executable Functions</div>
                                    <div className={styles["supporting-text"]}>
                                        Manage your custom serverless execution blocks and edge functions.
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
                                                Executable Function
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

                    <div style={{ height: "32px", borderBottom: "1px solid #e9eaeb" }}></div>
                </div>

                <div className={styles["experience-parent"]}>
                    {cardRows.length === 0 && (
                        <div className="text-center py-8 text-text-tertiary">
                            No executable functions found.
                        </div>
                    )}
                    {cardRows.map((row, rowIndex) => (
                        <div key={`row-${rowIndex}`} className={styles["experience"]}>
                            {row.map((card, i) => (
                                <DatabaseCard 
                                    key={`card-${rowIndex}-${card.name}-${i}`}
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

export default ExecutableFunctionsBody;
