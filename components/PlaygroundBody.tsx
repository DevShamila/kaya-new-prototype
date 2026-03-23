"use client";

import React from "react";
import PlaygroundSidebar from "./WorkflowEditor/PlaygroundSidebar";
import WorkflowTest from "./WorkflowEditor/WorkflowTest";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";

interface PlaygroundBodyProps {
    workspaceId: string;
    iflowId: string;
}

const PlaygroundBody: React.FC<PlaygroundBodyProps> = ({ workspaceId, iflowId }) => {
    const router = useRouter();

    const handleBack = () => {
        router.push(`/${workspaceId}/${iflowId}`);
    };

    const agents = [
        {
            id: "agent-1",
            name: "Customer Support Agent",
            promptTemplate: "You are a customer support agent. Help the user with their inquiries about orders and returns.",
            model: "GPT-4o",
        },
        {
            id: "agent-2",
            name: "Order Tracking Agent",
            promptTemplate: "You are an agent specializing in order tracking. Provide status updates for the given order ID.",
            model: "GPT-4o-mini",
        },
    ];

    const handleViewInWorkflow = (agentId: string) => {
        router.push(`/${workspaceId}/${iflowId}/editor`);
    };

    const handleEditAgent = (agentId: string) => {
        router.push(`/${workspaceId}/${iflowId}/editor`);
    };

    return (
        <div className="flex w-full h-screen items-stretch text-left text-sm text-[#535862] font-encode bg-[#f9f9fb]">
            {/* Left Sidebar */}
            <div
                className="self-stretch flex flex-col items-start z-10"
                style={{ filter: "drop-shadow(0px 0px 12px rgba(164, 167, 174, 0.35))" }}
            >
                <PlaygroundSidebar
                    onBack={handleBack}
                    onCancel={handleBack}
                    onSave={handleBack}
                    agents={agents}
                    onViewInWorkflow={handleViewInWorkflow}
                    onEditAgent={handleEditAgent}
                />
            </div>
            {/* Main Content Area */}
            <div
                className="self-stretch flex-1 flex flex-col items-start"
                style={{ filter: "drop-shadow(0px 0px 12px rgba(164, 167, 174, 0.35))" }}
            >
                <div className="self-stretch h-full relative">
                    <div className="flex flex-col items-start h-full w-full">
                        <WorkflowTest onBack={handleBack} />
                        <div className="h-10 w-10 absolute bottom-6 right-6 shadow-[0px_4px_12px_rgba(0,0,0,0.35)] rounded-full bg-[#181d27] flex items-center justify-center z-10 text-white cursor-pointer">
                            <HelpCircle className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaygroundBody;
