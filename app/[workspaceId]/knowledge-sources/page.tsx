"use client";

import React from "react";
import { useParams } from "next/navigation";
import KnowledgeSourcesBody from "@/components/KnowledgeSourcesBody";

export default function KnowledgeSourcesPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    
    return <KnowledgeSourcesBody workspaceId={workspaceId} />;
}
