"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";

export default function RunDemoButton() {
  const handleRunDemo = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    await axios.post(`${apiUrl}/api/demo/run`);
  };

  return (
    <Button onClick={handleRunDemo} className="bg-red-600">
      🚀 Run Demo
    </Button>
  );
}