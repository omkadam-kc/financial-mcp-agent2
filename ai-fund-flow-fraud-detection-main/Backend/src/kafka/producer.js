import EventEmitter from "events";

export const eventBus = new EventEmitter();

// ✅ START PRODUCER
export const startProducer = async () => {
  console.log("✅ Mock Producer Connected (EventEmitter)");
};

// ✅ SEND TRANSACTION
export const produceTransaction = async (transaction) => {
  try {
    eventBus.emit("transactions", transaction);
    console.log("📤 Transaction sent (Mock):", transaction.fromAccount, "->", transaction.toAccount);
  } catch (error) {
    console.error("❌ Produce error:", error);
  }
};