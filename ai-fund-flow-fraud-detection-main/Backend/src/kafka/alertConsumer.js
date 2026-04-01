import { eventBus } from "./producer.js";

export const startAlertConsumer = async () => {
  console.log("✅ Mock Alert Consumer Connected (EventEmitter)");

  eventBus.on("fraud-alerts", async (alert) => {
    try {
      console.log("🚨 FRAUD ALERT RECEIVED (Mock):");
      console.log(`- Amount: ${alert.tx?.amount}`);
      console.log(`- Risk Score: ${alert.result?.riskScore}`);
      
      // If socket io is available, we could emit it directly here as well.
      // global.io?.emit("fraud-alert", alert);
    } catch (error) {
       console.error("❌ Alert Consumer error:", error);
    }
  });
};