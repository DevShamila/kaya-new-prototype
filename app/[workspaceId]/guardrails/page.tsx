"use client";

import React from "react";
import { useParams } from "next/navigation";
import GuardrailsBody from "@/components/GuardrailsBody";

export default function GuardrailsPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    
    return <GuardrailsBody workspaceId={workspaceId} />;
}
