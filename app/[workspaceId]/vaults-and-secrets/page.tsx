"use client";

import React from "react";
import { useParams } from "next/navigation";
import VaultsAndSecretsBody from "@/components/VaultsAndSecretsBody";

export default function VaultsAndSecretsPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    
    return <VaultsAndSecretsBody workspaceId={workspaceId} />;
}
