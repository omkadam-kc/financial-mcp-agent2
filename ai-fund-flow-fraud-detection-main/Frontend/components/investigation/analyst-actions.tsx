"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"

export default function AnalystActions({ transactionId }) {

  const sendFeedback = async (decision: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    await axios.post(`${apiUrl}/api/feedback`, {
      transactionId,
      decision,
      reason: "Manual analyst review",
    })
  }

  return (
    <div className="flex gap-2 mt-3">
      <Button
        className="bg-green-600"
        onClick={() => sendFeedback("safe")}
      >
        ✅ Mark Safe
      </Button>

      <Button
        className="bg-red-600"
        onClick={() => sendFeedback("fraud")}
      >
        ❌ Mark Fraud
      </Button>
    </div>
  )
}