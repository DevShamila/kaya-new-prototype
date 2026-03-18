"use client";

import React from "react";
import { useParams } from "next/navigation";
import ExecutableFunctionsBody from "@/components/ExecutableFunctionsBody";

export default function ExecutableFunctionsPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    
    return <ExecutableFunctionsBody workspaceId={workspaceId} />;
}
