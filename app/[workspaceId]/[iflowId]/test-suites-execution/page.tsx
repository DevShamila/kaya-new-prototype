"use client";

import React from "react";
import { useParams } from "next/navigation";
import TestSuiteExecutionBody from "@/components/TestSuiteExecutionBody";

export default function TestSuiteExecutionPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    const iflowId = params.iflowId as string;
    
    const displayIFlowName = iflowId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return <TestSuiteExecutionBody workspaceId={workspaceId} iflowId={iflowId} iflowName={displayIFlowName} />;
}
