import React from "react";
import styles from "./TrackUsageBody.module.css";
import MetricCard from "./MetricCard";
import { 
    Calendar, TrendingUp, TrendingDown,
    Search, LayoutPanelLeft, ArrowUp
} from "lucide-react";

interface TrackUsageBodyProps {
    workspaceId: string;
    workspaceName: string;
}

const TrackUsageBody: React.FC<TrackUsageBodyProps> = ({ workspaceId, workspaceName }) => {
    return (
        <div className="w-full flex flex-col items-start gap-5 font-inter bg-white rounded-xl overflow-x-hidden min-h-full">
            <div className={styles.headerSectionParent}>
                <div className={styles.headerSection}>
                    <div className={styles.container}>
                        <div className={styles.textContent}>
                            <div className={styles.textAndSupportingText}>
                                <div className={styles.iconsParent}>
                                    <div className="w-10 h-10 rounded-lg shadow-sm border border-border-secondary flex items-center justify-center bg-white">
                                        <img src="/track.svg" alt="" className="w-5 h-5" />
                                    </div>
                                    <div className={styles.text}>Track Workspace Usage</div>
                                </div>
                                <div className={styles.supportingText}>
                                    Track resource usage, AI model spend, and workflow activity for the {workspaceName} workspace.
                                </div>
                            </div>
                        </div>

                        <div className={styles.tabsAndFilters}>
                            <div className={styles.buttonGroup}>
                                <div className={styles.buttonGroupBase}>
                                    <div className={styles.text2}>12 months</div>
                                </div>
                                <div className={styles.buttonGroupBase2}>
                                    <div className={styles.text2}>30 days</div>
                                </div>
                                <div className={styles.buttonGroupBase3}>
                                    <div className={styles.text2}>7 days</div>
                                </div>
                                <div className={styles.buttonGroupBase9}>
                                    <div className={styles.text2}>24 hours</div>
                                </div>
                            </div>
                            <div className={styles.actions2}>
                                <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-border-secondary shadow-sm text-sm font-semibold text-[#717680] hover:bg-gray-50">
                                    <Calendar className="w-5 h-5 text-[#717680]" />
                                    <span>Select dates</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.metricItemParent}>
                    {/* Storage Card */}
                    <div className="flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-2xl bg-[#FDFDFD] border border-border-secondary overflow-hidden flex flex-col items-start min-h-[160px]">
                        <div className="self-stretch flex items-center px-5 py-3 border-b border-border-secondary/50">
                            <span className="text-sm font-semibold text-text-primary leading-5">Storage</span>
                        </div>
                        <div className="self-stretch flex-1 bg-white p-5 pb-0 flex flex-col gap-2">
                            <div className="flex items-baseline gap-2">
                                <span className="text-[30px] font-semibold text-text-primary leading-[38px]">0GB used</span>
                            </div>
                            <div className="text-lg font-medium text-text-secondary">209.72 GB available</div>
                            <div className="text-sm font-medium text-text-tertiary mt-2 pb-5">No storage activity this month</div>
                        </div>
                    </div>

                    <MetricCard 
                        title="Credits Used" 
                        value="6.95K" 
                        subtitle={<span className="text-text-tertiary">of 500K used</span>}
                        trend={{ value: '44.35K', isUp: false }} 
                        chartSrc="/chart-red.svg"
                    />

                    <MetricCard 
                        title="Tokens Used" 
                        value="682K" 
                        subtitle={<span className="text-text-tertiary">of 250K used</span>}
                        trend={{ value: '4,363K', isUp: false }} 
                        chartSrc="/chart-red.svg"
                    />
                </div>

                {/* Token Usage by Model */}
                <div className={styles.pageHeaderParent}>
                    <div className={styles.textAndSupportingText2}>
                        <div className={styles.text15}>Token Usage by Model</div>
                        <div className={styles.supportingText2}>See which AI models are consuming the most tokens across your workflows this month.</div>
                    </div>
                    <div className={styles.frameWrapper}>
                        <div className={styles.lineAndBarChartParent}>
                            <div className={styles.lineAndBarChart}>
                                <div className={styles.axis}>
                                    <div className={styles.content6}>
                                        <div className={styles.yAxis}>
                                            {[...new Array(6)].map((_, i) => (
                                                <div key={`token-y-${i}`} className={styles.yAxisLine}>
                                                    <div className={styles.divider}></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.xAxis}>
                                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => (
                                                <span key={m} className={styles.jan}>{m}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <img src="/chart-data1.svg" alt="Token usage chart" style={{ position: 'absolute', top: -10, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'fill' }} />
                            </div>
                            <div className={styles.metrics}>
                                {[
                                    { id: "model-1", name: "(Model name)", value: "XXX", change: "9.2%", isUp: true },
                                    { id: "model-2", name: "(Model name)", value: "XXX", change: "6.6%", isUp: true },
                                    { id: "model-3", name: "(Model name)", value: "XXX", change: "8.1%", isUp: true },
                                ].map((model) => (
                                    <div key={model.id} className={styles.headingAndNumber}>
                                        <div className={styles.heading4}>{model.name}</div>
                                        <div className={styles.numberAndBadge4}>
                                            <div className={styles.number5}>{model.value}</div>
                                            <div className={styles.badgeWrap}>
                                                <div className={styles.badge}>
                                                    {model.isUp ? <TrendingUp className="w-3 h-3 text-[#17B26A]" /> : <TrendingDown className="w-3 h-3 text-[#F04438]" />}
                                                    <span>{model.change}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.legend}>
                            {[
                                { id: "legend-1", name: "(Model name)", color: "#A4BCFD" },
                                { id: "legend-2", name: "(Model name)", color: "#004A96" },
                                { id: "legend-3", name: "(Model name)", color: "#1a3a5c" },
                                { id: "legend-4", name: "(Model name)", color: "#94A3B8" },
                            ].map((item) => (
                                <div key={item.id} className={styles.legendSeries}>
                                    <div className={styles.dotIcon} style={{ backgroundColor: item.color }}></div>
                                    <span className={styles.modelName}>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Credit Spend Over Time */}
                <div className={styles.pageHeaderParent}>
                    <div className={styles.textAndSupportingText2}>
                        <div className={styles.text15}>Credit Spend Over Time</div>
                        <div className={styles.supportingText2}>12-month view of credit consumption across this workspace.</div>
                    </div>
                    <div className={styles.frameWrapper}>
                        <div className={styles.lineAndBarChartParent}>
                            <div className={styles.lineAndBarChart}>
                                <div className={styles.axis}>
                                    <div className={styles.content6}>
                                        <div className={styles.yAxis}>
                                            {[...new Array(6)].map((_, i) => (
                                                <div key={`credit-y-${i}`} className={styles.yAxisLine}>
                                                    <div className={styles.divider}></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.xAxis}>
                                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
                                                <span key={m} className={styles.jan}>{m}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <img src="/chart-data2.svg" alt="Credit spend chart" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'fill' }} />
                            </div>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.legendSeries}>
                                <div className={styles.dotIcon} style={{ backgroundColor: '#004A96' }}></div>
                                <span className={styles.modelName}>Credits Used</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Workflow Executions Table */}
                 <div className={styles.pageHeaderParent}>
                    <div className="pb-2">
                        <div className={styles.text15}>Workflow Executions</div>
                    </div>
                    
                    <div className={styles.card}>
                        <div className={styles.table}>
                            <div className={styles.metrics2}>
                                <div className={styles.numberAndTabsParent}>
                                    <div className={styles.horizontalTabs}>
                                        <div className={styles.tabButtonBase}>
                                            All
                                        </div>
                                        <div className={styles.tabButtonBase2}>
                                            Published
                                        </div>
                                        <div className={styles.tabButtonBase2}>
                                            Drafts
                                        </div>
                                    </div>
                                    <div className={styles.select2}>
                                        <div className={styles.input}>
                                            <Search className="w-4 h-4 text-text-muted" />
                                            <input type="text" placeholder="Search" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.content11}>
                                <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                    <div className={styles.tableCell}>Workflow name</div>
                                    <div className={styles.tableCell}>Executions <ArrowUp className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}>Credits used <ArrowUp className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}>Tokens used <ArrowUp className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}>Last run <ArrowUp className="w-3 h-3 text-text-tertiary ml-1"/></div>
                                    <div className={styles.tableCell}></div>
                                </div>

                                <div className={styles.tableRow}>
                                    <div className={`${styles.tableCell} ${styles.change2}`}>Xinfinity CLV Prediction</div>
                                    <div className={styles.tableCell}>6</div>
                                    <div className={styles.tableCell}>142,300</div>
                                    <div className={styles.tableCell}>2.84K</div>
                                    <div className={styles.tableCell}>Mar 17, 2026</div>
                                    <div className={styles.tableCell}><Calendar className="w-4 h-4 text-text-tertiary"/></div>
                                </div>

                                <div className={styles.tableRow}>
                                    <div className={`${styles.tableCell} ${styles.change2}`}>Customer Churn Classifier</div>
                                    <div className={styles.tableCell}>14</div>
                                    <div className={styles.tableCell}>389,500</div>
                                    <div className={styles.tableCell}>7.79K</div>
                                    <div className={styles.tableCell}>Mar 17, 2026</div>
                                    <div className={styles.tableCell}><Calendar className="w-4 h-4 text-text-tertiary"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Padding at the bottom */}
                <div className="h-10"></div>
            </div>
        </div>
    );
};

export default TrackUsageBody;
