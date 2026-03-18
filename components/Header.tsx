"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Square, Globe, Settings, ChevronRight, Building2 } from 'lucide-react';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    const params = useParams();
    const activeWorkspaceId = params.workspaceId as string | undefined;
    
    const displayWorkspaceName = activeWorkspaceId 
        ? activeWorkspaceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : null;

    return (
        <header className="h-14 border border-[#D9D9E0] rounded-tl-xl rounded-tr-xl px-4 flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]" style={{ background: 'var(--gradient-header)' }}>
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center mr-4">
                    <Square className="w-[18px] h-[18px] text-text-quaternary" />
                </div>
                
                <div className="flex items-center gap-2">
                    <Link 
                        href="/"
                        className={`bg-white rounded-lg py-1 px-3 flex items-center gap-3 h-8 border border-transparent hover:border-border-primary transition-colors cursor-pointer`}
                    >
                        <span className="flex items-center justify-center">
                            <Globe className="w-4 h-4 text-brand-blue" />
                        </span>
                        <span className="text-sm font-semibold text-text-primary font-inter">Enterprise</span>
                    </Link>

                    {displayWorkspaceName && (
                        <>
                            <ChevronRight className="w-4 h-4 text-[#D0D5DD]" />
                            <div className="h-8 py-1 px-3 bg-white rounded-lg border border-border-secondary flex items-center gap-3 shadow-[0_1px_2px_rgba(10,13,18,0.05)]">
                                <Building2 className="w-4 h-4 text-text-primary" />
                                <div className="text-sm font-semibold text-text-primary font-encode leading-5">
                                    {displayWorkspaceName}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="flex">
                <button className="p-1.5 bg-white border border-[rgba(10,12,18,0.18)] shadow-[0_1px_2px_rgba(10,12,67,0.05)] rounded-md cursor-pointer flex items-center justify-center">
                    <Settings className="w-4 h-4 text-text-muted" />
                </button>
            </div>
        </header>
    );
};

export default Header;
