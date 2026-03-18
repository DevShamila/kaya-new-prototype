"use client";

import React from "react";
import { useParams } from "next/navigation";
import DatabasesBody from "@/components/DatabasesBody";

export default function DatabasesPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    
    return <DatabasesBody workspaceId={workspaceId} />;
}
