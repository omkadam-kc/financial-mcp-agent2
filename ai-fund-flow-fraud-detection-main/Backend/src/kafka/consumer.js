import { eventBus } from "./producer.js";
import { analyzeTransaction } from "../services/fraudDetectionService.js";

let transactionCache = [];

export const startConsumer = async () => {
  console.log("✅ Mock Consumer Connected (EventEmitter)");

  eventBus.on("transactions", async (tx) => {
    try {
      transactionCache.push(tx);

      const result = await analyzeTransaction(tx, transactionCache);

      console.log("🔥 Fraud Result:", result.riskScore, result.alertLevel);

      if (result.riskScore > 40) {
        eventBus.emit("fraud-alerts", { tx, result });
      }
    } catch (error) {
      console.error("❌ Consumer error:", error);
    }
  });
};