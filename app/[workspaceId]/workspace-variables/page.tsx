"use client";

import React from "react";
import { useParams } from "next/navigation";
import WorkspaceVariablesBody from "@/components/WorkspaceVariablesBody";

export default function WorkspaceVariablesPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    
    return <WorkspaceVariablesBody workspaceId={workspaceId} />;
}
