"use client";

import React from "react";
import { useParams } from "next/navigation";
import PlaygroundBody from "@/components/PlaygroundBody";

export default function PlaygroundPage() {
    const params = useParams();
    const workspaceId = params.workspaceId as string;
    const iflowId = params.iflowId as string;

    return <PlaygroundBody workspaceId={workspaceId} iflowId={iflowId} />;
}
