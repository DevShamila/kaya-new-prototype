"use client";

import React from "react";
import { useParams } from "next/navigation";
import IntegrationsBody from "@/components/IntegrationsBody";

export default function IntegrationsPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    
    return <IntegrationsBody workspaceId={workspaceId} />;
}
