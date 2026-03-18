"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import EnterpriseBody from "@/components/EnterpriseBody";

export default function Home() {
    const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(null);

    return (
        <div className="flex w-full h-full">
            <Sidebar 
                activeWorkspace={selectedWorkspace} 
                onBackToEnterprise={() => setSelectedWorkspace(null)} 
            />
            <main className="flex-1 flex flex-col py-6">
                <Header 
                    activeWorkspace={selectedWorkspace} 
                    onBackToEnterprise={() => setSelectedWorkspace(null)} 
                />
                <section className="flex-1 bg-white border border-[#D9D9E0] border-t-0 rounded-bl-xl rounded-br-xl p-5 overflow-y-auto shadow-[0_10px_30px_rgba(163,167,174,0.15)]">
                    {selectedWorkspace ? (
                        <div className="h-full w-full bg-white" />
                    ) : (
                        <EnterpriseBody onWorkspaceClick={setSelectedWorkspace} />
                    )}
                </section>
            </main>
        </div>
    );
}
