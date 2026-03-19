import React from "react";
import styles from "./WorkspaceMetricsAndAnalyticsBody.module.css";
import MetricCard from "./MetricCard";
import { 
    AlertCircle, ArrowRight, X, BarChart3, 
    Calendar, ArrowUpRight, Search, ChevronDown, ArrowRight as ArrowRightIcon
} from "lucide-react";

interface WorkspaceProps {
    workspaceName: string;
}

const WorkspaceMetricsAndAnalyticsBody: React.FC<WorkspaceProps> = ({ workspaceName }) => {
    return (
        <div className="w-full flex flex-col font-inter pt-0 min-h-full">
            <div className={`${styles.frameParent} w-full`}>
                    
                    <div className={styles.alertParent}>
                        {/* Alert Banner */}
                        <div className={styles.alert}>
                            <div className={styles.alertContainer}>
                                <div className={styles.alertContent}>
                                    <div className={styles.alertContent2}>
                                        <div className={styles.featuredIconOutline}>
                                            <AlertCircle className="w-5 h-5 text-[#d92d20]" />
                                        </div>
                                        <div className={styles.textAndSupportingText}>
                                            <div className={styles.alertText}>Elevated failure rate detected</div>
                                            <div className={styles.alertSupportingText}>
                                                Churn Classifier has failed 6 of its last 10 runs. Last error: timeout.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.alertActions}>
                                        <div className={styles.alertButtonsButton}>
                                            <div className="text-[#b42318]">View Details</div>
                                            <ArrowRight className="w-4 h-4 text-[#b42318]" />
                                        </div>
                                        <button className="p-1 hover:bg-[#fee4e2] rounded-md transition-colors">
                                            <X className="w-5 h-5 text-[#d92d20]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Page Header */}
                        <div className={styles.headerSection}>
                            <div className={styles.headerContainer}>
                                <div className={styles.headerContent}>
                                    <div className="flex flex-col gap-1 items-start">
                                        <div className={styles.iconsParent}>
                                            <div className={styles.icons}>
                                                <BarChart3 className="w-5 h-5 text-gray-700" />
                                            </div>
                                            <div className={styles.headerText}>Workspace Metrics & Analytics</div>
                                        </div>
                                        <div className={styles.headerSupportingText}>
                                            Track performance, activity, and reliability across your workflows and agents.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="w-full h-px bg-[#e9eaeb]"></div>
                                
                                <div className={styles.tabsAndFilters}>
                                    <div className={styles.buttonGroup}>
                                        <div className={styles.buttonGroupBase}>12 months</div>
                                        <div className={styles.buttonGroupBase2}>30 days</div>
                                        <div className={styles.buttonGroupBase2}>7 days</div>
                                        <div className={styles.buttonGroupBase9}>24 hours</div>
                                    </div>
                                    
                                    <div>
                                        <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-border-secondary shadow-sm text-sm font-semibold text-[#717680] hover:bg-gray-50">
                                            <Calendar className="w-5 h-5 text-[#717680]" />
                                            <span>Select dates</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Metrics Cards - Specialized Layout */}
                        <div className={styles.metricItemParent}>
                            <div className={styles.metricItem}>
                                <div className={styles.heading}>Most Credit Consumption</div>
                                <div className="flex flex-col">
                                    <div className={styles.number}>Xinfinity CLV Prediction</div>
                                    <div className={styles.number2}>Customer Offer Workflow</div>
                                    <div className={styles.text14}>
                                        <b className="text-gray-900">Used 4.2K </b>
                                        <span>credits this month</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.metricItem}>
                                <div className={styles.heading}>Highest Token Usage</div>
                                <div className="flex flex-col">
                                    <div className={styles.number}>Xinfinity CLV Prediction</div>
                                    <div className={styles.number2}>Customer Offer Workflow</div>
                                    <div className={styles.text14}>
                                        <b className="text-gray-900">312K tokens</b>
                                        <span>consumed</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.metricItem}>
                                <div className={styles.heading}>Most Executed</div>
                                <div className="flex flex-col">
                                    <div className={styles.number}>Xinfinity CLV Prediction</div>
                                    <div className={styles.number2}>Customer Offer Workflow</div>
                                    <div className={styles.text14}>
                                        <b className="text-gray-900">198 runs </b>
                                        <span>this month</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* High Level Workspace Metrics */}
                        <div className={styles.metricGroup}>
                            <MetricCard 
                                title="Total Workflow Runs" 
                                value="847" 
                                trend={{ value: '10%', isUp: true }}
                            />
                            <MetricCard 
                                title="Success Rate" 
                                value="94.3%" 
                                trend={{ value: '12%', isUp: true }}
                            />
                            <MetricCard 
                                title="Avg. Response Time" 
                                value="1.8s" 
                                trend={{ value: '2%', isUp: false }}
                            />
                            <MetricCard 
                                title="Active Agents" 
                                value="4 of 11" 
                            />
                        </div>

                        {/* Workflow Performance Chart */}
                        <div className={styles.pageHeaderParent}>
                            <div className={styles.pageHeader}>
                                <div className={styles.text20}>Workflow Performance</div>
                            </div>
                            <div className={styles.frameContainer}>
                                <div className={styles.lineAndBarChartParent}>
                                    <div className="w-full h-80 relative flex items-center">
                                         <img src="/chart-data3.svg" alt="Workflow Performance Chart" className="absolute object-fill" style={{zIndex: 1, top: '16px', bottom: '16px', left: '68px', width: 'calc(100% - 68px)', height: 'calc(100% - 32px)'}} />
                                         <div className="absolute inset-0 flex flex-row">
                                            {/* Y-axis title */}
                                            <div className="flex items-center justify-center" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                                                <span className="text-xs text-gray-500">No. of Runs</span>
                                            </div>
                                            <div className="flex-1 flex flex-col">
                                                {/* Y-axis labels + grid */}
                                                <div className="flex-1 flex flex-col justify-between py-4">
                                                    {['1,000', '800', '600', '400', '200', '0'].map(val => (
                                                        <div key={val} className="w-full flex items-center h-4 text-xs text-gray-500">
                                                            <span className="w-10 text-right mr-3">{val}</span>
                                                            <div className="flex-1 border-t border-dashed border-[#e9eaeb]"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* X-axis labels */}
                                                <div className="ml-[52px] mr-4 flex justify-between text-xs text-gray-500">
                                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
                                                </div>
                                                {/* X-axis title */}
                                                <div className="text-center text-xs text-gray-500 mt-1">Month</div>
                                            </div>
                                         </div>
                                    </div>
                                    {/* Legend */}
                                    <div className="flex items-center gap-6 mt-2 ml-16">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#2970FF]"></span>
                                            <span className="text-xs text-gray-600">Total Runs</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#F04438]"></span>
                                            <span className="text-xs text-gray-600">Failed Runs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Workflow Summary Table */}
                        <div className={styles.pageHeaderParent}>
                            <div className={styles.pageHeader}>
                                <div className={styles.text20}>Workflow Summary Table</div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.metrics}>
                                    <div className={styles.horizontalTabs}>
                                        <div className={styles.tabButtonBase}>All</div>
                                        <div className={styles.tabButtonBase2}>Filter</div>
                                        <div className={styles.tabButtonBase2}>Filter</div>
                                    </div>
                                    <div className={styles.input}>
                                        <Search className="w-4 h-4 text-gray-400" />
                                        <input type="text" placeholder="Search" className="bg-transparent" />
                                    </div>
                                </div>
                                
                                <div className={styles.tableContainer}>
                                    <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                        <div className={styles.tableCell}>Agent name <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Avg Time</div>
                                        <div className={styles.tableCell}>Longest</div>
                                        <div className={styles.tableCell}>API Calls</div>
                                        <div className={styles.tableCell}>LLM Calls</div>
                                        <div className={styles.tableCell}>SLM Calls</div>
                                        <div className={styles.tableCell}>Success Rate</div>
                                        <div className={styles.tableCell}>Session Count</div>
                                    </div>

                                    {[
                                        ['CLV Predictor', '0.3s', '2s', '0', '0', '0', '90%', '6'],
                                        ['Churn Classifier', '2s', '3s', '4', '4', '4', '93%', '14']
                                    ].map((row, i) => (
                                        <div key={i} className={styles.tableRow}>
                                            <div className={`${styles.tableCell} font-medium`}>{row[0]}</div>
                                            <div className={styles.tableCell}>{row[1]}</div>
                                            <div className={styles.tableCell}>{row[2]}</div>
                                            <div className={styles.tableCell}>{row[3]}</div>
                                            <div className={styles.tableCell}>{row[4]}</div>
                                            <div className={styles.tableCell}>{row[5]}</div>
                                            <div className={styles.tableCell}>{row[6]}</div>
                                            <div className={styles.tableCell}>{row[7]}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.pagination}>
                                    <div className="text-gray-500 text-sm font-medium">Page 1 of 4</div>
                                    <div className="flex gap-3">
                                        <button className="px-3 py-2 border border-border-secondary rounded-lg shadow-sm text-sm font-medium">Previous</button>
                                        <button className="px-3 py-2 border border-border-secondary rounded-lg shadow-sm text-sm font-medium">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Metrics Stack - Stacked Vertically */}
                        <div className="flex flex-col gap-8 mt-8">
                            {/* LLM Time Table */}
                            <div className={styles.card}>
                                <div className="p-5 border-b border-border-secondary flex justify-between items-center">
                                    <div className={styles.text20}>LLM Time Table</div>
                                </div>
                                <div className={styles.tableContainer}>
                                    <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                        <div className={styles.tableCell}>LLM</div>
                                        <div className={styles.tableCell}>Avg Time Taken <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Longes Time Taken <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Avg Tokens <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Most Tokens <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Execution Count <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}></div>
                                    </div>
                                    <div className={styles.tableRow}>
                                        <div className={`${styles.tableCell} font-medium`}>gpt-4o</div>
                                        <div className={styles.tableCell}>0.8s</div>
                                        <div className={styles.tableCell}>0.9s</div>
                                        <div className={styles.tableCell}>2,000</div>
                                        <div className={styles.tableCell}>14,300</div>
                                        <div className={styles.tableCell}>14,300</div>
                                        <div className={styles.tableCell}><Calendar className="w-4 h-4 text-text-tertiary" /></div>
                                    </div>
                                </div>
                                <div className={styles.pagination}>
                                    <div className="text-gray-500 text-sm font-medium">Page 1 of 4</div>
                                    <div className="flex gap-3">
                                        <button className="px-3 py-2 border border-border-secondary rounded-lg shadow-sm text-sm font-medium">Previous</button>
                                        <button className="px-3 py-2 border border-border-secondary rounded-lg shadow-sm text-sm font-medium">Next</button>
                                    </div>
                                </div>
                            </div>

                            {/* SLM Time Table */}
                            <div className={styles.card}>
                                <div className="p-5 border-b border-border-secondary flex justify-between items-center">
                                    <div className={styles.text20}>SLM Time Table</div>
                                </div>
                                <div className={styles.tableContainer}>
                                    <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                        <div className={styles.tableCell}>SLM</div>
                                        <div className={styles.tableCell}>Avg Time Taken <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Longes Time Taken <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Avg Tokens <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Most Tokens <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Execution Count <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}></div>
                                    </div>
                                    <div className={styles.tableRow}>
                                        <div className={`${styles.tableCell} font-medium`}>mistral-small-24v1:0</div>
                                        <div className={styles.tableCell}>0.8s</div>
                                        <div className={styles.tableCell}>0.9s</div>
                                        <div className={styles.tableCell}>2,000</div>
                                        <div className={styles.tableCell}>14,300</div>
                                        <div className={styles.tableCell}>14,300</div>
                                        <div className={styles.tableCell}><Calendar className="w-4 h-4 text-text-tertiary" /></div>
                                    </div>
                                </div>
                                <div className={styles.pagination}>
                                    <div className="text-gray-500 text-sm font-medium">Page 1 of 4</div>
                                    <div className="flex gap-3">
                                        <button className="px-3 py-2 border border-border-secondary rounded-lg shadow-sm text-sm font-medium">Previous</button>
                                        <button className="px-3 py-2 border border-border-secondary rounded-lg shadow-sm text-sm font-medium">Next</button>
                                    </div>
                                </div>
                            </div>

                            {/* API Time Table */}
                            <div className={styles.card}>
                                <div className="p-5 border-b border-border-secondary flex justify-between items-center">
                                    <div className={styles.text20}>API Time Table</div>
                                </div>
                                <div className={styles.tableContainer}>
                                    <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                        <div className={styles.tableCell}>API</div>
                                        <div className={styles.tableCell}>Execution Count <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Failure Count <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Avg Time Taken <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}>Longes Time Taken <ChevronDown className="w-3 h-3 ml-1" /></div>
                                        <div className={styles.tableCell}></div>
                                    </div>
                                    <div className={styles.tableRow}>
                                        <div className={`${styles.tableCell} font-medium`}>mistral-small-24v1:0</div>
                                        <div className={styles.tableCell}>14,300</div>
                                        <div className={styles.tableCell}>1,300</div>
                                        <div className={styles.tableCell}>0.8s</div>
                                        <div className={styles.tableCell}>0.9s</div>
                                        <div className={styles.tableCell}><Calendar className="w-4 h-4 text-text-tertiary" /></div>
                                    </div>
                                </div>
                                <div className={styles.pagination}>
                                    <div className="text-gray-500 text-sm font-medium">Page 1 of 4</div>
                                    <div className="flex gap-3">
                                        <button className="px-3 py-2 border border-border-secondary rounded-lg shadow-sm text-sm font-medium">Previous</button>
                                        <button className="px-3 py-2 border border-border-secondary rounded-lg shadow-sm text-sm font-medium">Next</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkspaceMetricsAndAnalyticsBody;
