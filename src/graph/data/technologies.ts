export const technologies = [
  {
    id: "core",
    label: "POL",
    category: "core",
  },

  // AI

  {
    id: "ai",
    label: "AI",
    category: "ai",
  },

  {
    id: "python",
    label: "Python",
    category: "ai",
  },

  {
    id: "tensorflow",
    label: "TensorFlow",
    category: "ai",
  },

  {
    id: "opencv",
    label: "OpenCV",
    category: "ai",
  },

  // EMBEDDED

  {
    id: "embedded",
    label: "Embedded",
    category: "embedded",
  },

  {
    id: "esp32",
    label: "ESP32",
    category: "embedded",
  },

  {
    id: "stm32",
    label: "STM32",
    category: "embedded",
  },

  // IOT

  {
    id: "iot",
    label: "IoT",
    category: "iot",
  },

  {
    id: "lora",
    label: "LoRa",
    category: "iot",
  },

  {
    id: "mqtt",
    label: "MQTT",
    category: "iot",
  },
];
export const relations = [
  // CORE

  {
    id: "core-ai",
    source: "core",
    target: "ai",
  },

  {
    id: "core-embedded",
    source: "core",
    target: "embedded",
  },

  {
    id: "core-iot",
    source: "core",
    target: "iot",
  },

  // AI

  {
    id: "ai-python",
    source: "ai",
    target: "python",
  },

  {
    id: "ai-tensorflow",
    source: "ai",
    target: "tensorflow",
  },

  {
    id: "ai-opencv",
    source: "ai",
    target: "opencv",
  },

  // EMBEDDED

  {
    id: "embedded-esp32",
    source: "embedded",
    target: "esp32",
  },

  {
    id: "embedded-stm32",
    source: "embedded",
    target: "stm32",
  },

  // IOT

  {
    id: "iot-lora",
    source: "iot",
    target: "lora",
  },

  {
    id: "iot-mqtt",
    source: "iot",
    target: "mqtt",
  },
];