"use client";
import React from "react";
import styles from "./WorkspaceAgentBody.module.css";
import { Plus, Bot } from "lucide-react";

const WorkspaceAgentBody = () => {
    return (
        <div className={styles.inlineCtaParent}>
            <div className={styles.inlineCta}>
                <div className={styles.imageWrap}>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.content}>
                    <div className={styles.content2}>
                        <div className={styles.textAndSupportingText}>
                            <div className={styles.text}>Learn more about Workspace Agents</div>
                            <div className={styles.supportingText}>
                                {`Text about learning best practices when setting up Workspace Agents and ability to get support from Kaya experts.`}
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.buttonsbutton}>
                                <div className={styles.textPadding}>
                                    <div className={styles.text2}>Dismiss</div>
                                </div>
                            </div>
                            <div className={styles.buttonsbutton2}>
                                <div className={styles.textPadding}>
                                    <div className={styles.text2}>Learn more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.headerSectionParent}>
                <div className={styles.headerSection}>
                    <div className={styles.container}>
                        <div className={styles.imageWrap2}>
                            <div className={styles.image2}></div>
                        </div>
                        <div className={styles.content3}>
                            <div className={styles.breadcrumbs}></div>
                            <div className={styles.container2}>
                                <div className="flex items-center justify-between flex-wrap gap-5 w-full">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <div className="w-[30px] h-[30px] rounded bg-white shadow-[0_0_6px_rgba(164,167,174,0.35)] flex items-center justify-center p-[4px]">
                                                <Bot className="w-[23px] h-[21px] text-[#FF5714]" />
                                            </div>
                                            <h1 className="text-2xl font-semibold text-text-primary leading-8">Workspace Agents</h1>
                                        </div>
                                        <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                                            Placeholder text about; Workspace Agents live here
                                        </p>
                                    </div>
                                    <button className="flex items-center gap-1 px-3.5 py-2.5 bg-[#005BB5] text-white rounded-lg text-sm font-semibold shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_rgba(10,13,18,0.05)_inset,0_1px_2px_rgba(10,13,18,0.05)] hover:bg-[#004A96] transition-colors cursor-pointer">
                                        <Plus className="w-5 h-5" />
                                        <span>Create Workspace Agent</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <img className={styles.dividerIcon} alt="" />
                    </div>
                </div>

                <div className={styles.pageHeaderParent}>
                    <div className={styles.pageHeader2}>
                        <div className={styles.content5}>
                            <div className={styles.textAndSupportingText3}>
                                <div className={styles.text6}>Recent</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.experienceWrapper}>
                        <div className={styles.experience}>
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={styles.integrationCardDesktop}>
                                    <div className={styles.content6}>
                                        <div className={styles.headingAndToggle}>
                                            <div className={styles.badge}>
                                                <div className={styles.text7}>Published</div>
                                            </div>
                                            <div className={styles.headingAndIcon}>
                                                <div className={styles.iconWrap}>
                                                    <div className={styles.linear}></div>
                                                </div>
                                                <div className={styles.heading}>Invoice Processing Bot</div>
                                            </div>
                                            <div className={styles.supportingText3}>This agent handles invoice processing tasks.</div>
                                            <div className={styles.supportingTextWrapper}>
                                                <div className={styles.supportingText4}>
                                                    <span className={styles.agentType}>Agent Type: </span>
                                                    <b>Triage </b>
                                                    <span className={styles.agentType}>|</span>
                                                    <b> </b>
                                                    <span className={styles.agentType}> Model: </span>
                                                    <b>GPT-4</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.supportingText5}>Last modified: Mar 17, 2026, 15:44</div>
                                    </div>
                                    <div className={styles.sectionFooter}>
                                        <img className={styles.dividerIcon2} alt="" />
                                        <div className={styles.content7}>
                                            <div className={styles.actions4}>
                                                <div className={styles.button}>
                                                    <div className={styles.text2}>View Agent</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.pageHeaderParent}>
                    <div className={styles.pageHeader2}>
                        <div className={styles.content5}>
                            <div className={styles.textAndSupportingText3}>
                                <div className={styles.text6}>Favorites</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.experience2}>
                        {[1, 2].map((i) => (
                            <div key={i} className={i === 1 ? styles.integrationCardDesktop4 : styles.integrationCardDesktop6}>
                                <div className={styles.content6}>
                                    <div className={styles.headingAndToggle}>
                                        <div className={i === 1 ? styles.badge : styles.badge6}>
                                            <div className={styles.text7}>{i === 1 ? 'Published' : 'Draft'}</div>
                                        </div>
                                        <div className={styles.headingAndIcon}>
                                            <div className={styles.iconWrap}>
                                                <div className={styles.linear}></div>
                                            </div>
                                            <div className={styles.heading}>Invoice Processing Bot</div>
                                        </div>
                                        <div className={i === 1 ? styles.supportingText3 : styles.supportingText18}>This agent handles invoice processing tasks.</div>
                                        <div className={styles.supportingTextWrapper}>
                                            <div className={styles.supportingText4}>
                                                <span className={styles.agentType}>Agent Type: </span>
                                                <b>Triage </b>
                                                <span className={styles.agentType}>|</span>
                                                <b> </b>
                                                <span className={styles.agentType}> Model: </span>
                                                <b>GPT-4</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.supportingText5}>Last modified: Mar 17, 2026, 15:44</div>
                                </div>
                                <div className={styles.sectionFooter}>
                                    <img className={styles.dividerIcon2} alt="" />
                                    <div className={styles.content7}>
                                        <div className={styles.actions4}>
                                            <div className={styles.button}>
                                                <div className={styles.text2}>View Agent</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.pageHeaderParent}>
                    <div className={styles.pageHeader2}>
                        <div className={styles.content5}>
                            <div className={styles.textAndSupportingText3}>
                                <div className={styles.text6}>All Workspace Agents</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.experience2}>
                        {[1, 2].map((i) => (
                            <div key={i} className={i === 1 ? styles.integrationCardDesktop4 : styles.integrationCardDesktop6}>
                                <div className={styles.content6}>
                                    <div className={styles.headingAndToggle}>
                                        <div className={i === 1 ? styles.badge : styles.badge6}>
                                            <div className={styles.text7}>{i === 1 ? 'Published' : 'Draft'}</div>
                                        </div>
                                        <div className={styles.headingAndIcon}>
                                            <div className={styles.iconWrap}>
                                                <div className={styles.linear}></div>
                                            </div>
                                            <div className={styles.heading}>Invoice Processing Bot</div>
                                        </div>
                                        <div className={i === 1 ? styles.supportingText3 : styles.supportingText18}>This agent handles invoice processing tasks.</div>
                                        <div className={styles.supportingTextWrapper}>
                                            <div className={styles.supportingText4}>
                                                <span className={styles.agentType}>Agent Type: </span>
                                                <b>Triage </b>
                                                <span className={styles.agentType}>|</span>
                                                <b> </b>
                                                <span className={styles.agentType}> Model: </span>
                                                <b>GPT-4</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.supportingText5}>Last modified: Mar 17, 2026, 15:44</div>
                                </div>
                                <div className={styles.sectionFooter}>
                                    <img className={styles.dividerIcon2} alt="" />
                                    <div className={styles.content7}>
                                        <div className={styles.actions4}>
                                            <div className={styles.button}>
                                                <div className={styles.text2}>View Agent</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkspaceAgentBody;
