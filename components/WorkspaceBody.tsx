import React from "react";
import { 
    Calendar, TrendingUp, 
    ChevronRight, 
    Building2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface MetricCardProps {
    title: string;
    value: string;
    subtitle?: React.ReactNode;
    trend?: {
        value: string;
        isUp: boolean;
    };
    chartSrc?: string;
    variant?: 'default' | 'highlight';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtitle, trend, chartSrc, variant = 'default' }) => (
    <div className="flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-2xl bg-[#FDFDFD] border border-border-secondary overflow-hidden flex flex-col items-start min-h-[160px]">
        <div className="self-stretch flex items-center px-5 py-3 border-b border-border-secondary/50">
            <span className="text-sm font-semibold text-text-primary leading-5">{title}</span>
        </div>
        <div className="self-stretch flex-1 bg-white p-5 pb-0 flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2">
                    <span className="text-[30px] font-semibold text-text-primary leading-[38px]">{value}</span>
                    {subtitle && <div className="text-xl font-medium text-text-tertiary font-encode">{subtitle}</div>}
                </div>
                {trend && (
                    <div className="flex items-center gap-2">
                        <div className={`flex items-center gap-1 text-sm font-medium ${trend.isUp ? 'text-success-700' : 'text-error-700'}`}>
                            {trend.isUp ? <TrendingUp className="w-5 h-5 text-[#17B26A] font-semibold" /> : <TrendingUp className="w-5 h-5 scale-y-[-1] text-[#F04438] font-semibold" />}
                            {trend.isUp ? <span className="text-[#079455] text-[14px] font-500">{trend.value}</span> : <span className="text-[#F04438] text-[14px]">{trend.value}</span>}
                           
                        </div>
                        <span className="text-sm font-medium text-text-tertiary">vs last month</span>
                    </div>
                )}
            </div>
            {chartSrc && (
                <div className="self-stretch mt-2">
                    <Image src={trend?.isUp === false ? '/chart-red.svg' : '/chart-green.svg'} alt="Chart" width={200} height={50} className="w-full h-auto" />
                </div>
            )}
        </div>
    </div>
);

interface IFlowCardProps {
    workspaceId: string;
    title: string;
    description: string;
    status: 'Published' | 'Draft';
    agents: number;
    lastModified: string;
}

const IFlowCard: React.FC<IFlowCardProps> = ({ workspaceId, title, description, status, agents, lastModified }) => {
    // Generate slug for the iFlow
    const iflowId = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

    return (
    <div className="flex-1 shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-xl bg-white border border-border-secondary flex flex-col items-start min-w-[320px]">
        <div className="self-stretch flex flex-col items-start p-5 gap-4">
            <div className="self-stretch flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div className={`px-2 py-0.5 rounded-md text-xs font-medium border ${
                        status === 'Published' 
                            ? 'bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]' 
                            : 'bg-[#FAFAFA] text-text-tertiary border-border-secondary'
                    }`}>
                        {status}
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-text-primary leading-6">{title}</h3>
                    <p className="text-sm text-text-tertiary leading-5 line-clamp-2">{description}</p>
                </div>
            </div>
            
            <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col items-center w-fit">
                    <span className="text-sm font-bold text-text-primary leading-5">{agents}</span>
                    <span className="text-xs font-medium text-text-tertiary leading-[18px]">Agents</span>
                </div>
                <div className="text-xs font-medium text-text-tertiary leading-[18px]">
                    Last modified: {lastModified}
                </div>
            </div>
        </div>
        <div className="self-stretch border-t border-border-secondary p-4 px-6 flex justify-end">
            <Link 
                href={`/${workspaceId}/${iflowId}`}
                className="text-sm font-semibold text-[#004A96] hover:underline"
            >
                View iFlow
            </Link>
        </div>
    </div>
);
};

interface WorkspaceBodyProps {
    workspaceId: string;
    workspaceName: string;
}

const WorkspaceBody: React.FC<WorkspaceBodyProps> = ({ workspaceId, workspaceName }) => {
    const filters = ["12 months", "30 days", "7 days", "24 hours"];

    return (
        <div className="w-full flex flex-col items-start gap-5 font-inter bg-white rounded-xl pt-6">
            {/* Header Section */}
            <header className="self-stretch flex flex-col px-4 gap-5">
                <div className="self-stretch flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-[30px] h-[30px] rounded bg-white shadow-[0_0_6px_rgba(164,167,174,0.35)] flex items-center justify-center p-[4px]">
                            <Building2 className="w-[23px] h-[21px] text-[#FF5714]" />
                        </div>
                        <h1 className="text-2xl font-semibold text-text-primary leading-8">{workspaceName}</h1>
                    </div>
                    <p className="max-w-[640px] text-base text-text-tertiary leading-6">
                        Automated claims processing and customer support workflows for the insurance division.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 py-4">
                    <div className="flex shadow-[0_1px_2px_rgba(10,13,18,0.05)] rounded-lg border border-border-secondary overflow-hidden">
                        {filters.map((filter, i) => (
                            <button 
                                key={filter}
                                className={`px-4 py-2 text-sm font-semibold border-r border-border-secondary last:border-r-0 transition-colors ${
                                    i === 1 ? 'bg-[#FAFAFA] text-[#414651]' : 'bg-white text-[#414651] hover:bg-gray-50'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-border-secondary shadow-sm text-sm font-semibold text-text-secondary hover:bg-gray-50">
                        <Calendar className="w-5 h-5 text-text-muted" />
                        <span>Select dates</span>
                    </button>
                </div>
            </header>

            {/* Metrics Section */}
            <section className="self-stretch px-4 flex flex-wrap gap-4">
                <MetricCard 
                    title="Workflows" 
                    value="8" 
                    subtitle={<span className="text-text-tertiary">of 10 used</span>}
                />
                <MetricCard 
                    title="Executions" 
                    value="1.7k" 
                    trend={{ value: '20%', isUp: true }} 
                    chartSrc="/chart-green.png"
                />
                <MetricCard 
                    title="Success Rate" 
                    value="89.4%" 
                    trend={{ value: '10%', isUp: false }} 
                    chartSrc="/chart-green.png"
                />
                <MetricCard 
                    title="Tokens" 
                    value="2.4M" 
                    trend={{ value: '10%', isUp: false }} 
                    chartSrc="/chart-green.png"
                />
            </section>

            {/* Recently Modified Section */}
            <section className="self-stretch px-4 flex flex-col gap-4 mt-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-text-tertiary font-encode">Recently modified</h2>
                    <button className="flex items-center gap-1 text-sm font-semibold text-[#535862] hover:text-text-primary">
                        <span>View all iFlows</span>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex flex-wrap gap-6">
                    <IFlowCard 
                        workspaceId={workspaceId}
                        title="Invoice Processing" 
                        description="This workflow handles invoice processing tasks." 
                        status="Published" 
                        agents={9} 
                        lastModified="Mar 17, 2026, 15:44" 
                    />
                    <IFlowCard 
                        workspaceId={workspaceId}
                        title="Invoice Processing" 
                        description="This workflow handles invoice processing tasks." 
                        status="Draft" 
                        agents={9} 
                        lastModified="Mar 17, 2026, 15:44" 
                    />
                </div>
                <div className="flex flex-wrap gap-6">
                    <IFlowCard 
                        workspaceId={workspaceId}
                        title="Invoice Processing" 
                        description="This workflow handles invoice processing tasks." 
                        status="Draft" 
                        agents={9} 
                        lastModified="Mar 17, 2026, 15:44" 
                    />
                    <IFlowCard 
                        workspaceId={workspaceId}
                        title="Invoice Processing" 
                        description="This workflow handles invoice processing tasks." 
                        status="Published" 
                        agents={9} 
                        lastModified="Mar 17, 2026, 15:44" 
                    />
                </div>
            </section>
        </div>
    );
};

export default WorkspaceBody;
