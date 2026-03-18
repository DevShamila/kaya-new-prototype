"use client";

import React from "react";
import { useParams } from "next/navigation";
import ModelsBody from "@/components/ModelsBody";

export default function ModelsPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    
    return <ModelsBody workspaceId={workspaceId} />;
}
