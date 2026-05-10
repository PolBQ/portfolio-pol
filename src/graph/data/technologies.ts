export const technologies = [

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

  // BACKEND

  {
    id: "backend",
    label: "Backend",
    category: "backend",
  },

  {
    id: "docker",
    label: "Docker",
    category: "backend",
  },

  {
    id: "linux",
    label: "Linux",
    category: "backend",
  },

  {
    id: "nginx",
    label: "Nginx",
    category: "backend",
  },
];

export const relations = [

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

  // BACKEND

  {
    id: "backend-docker",
    source: "backend",
    target: "docker",
  },

  {
    id: "backend-linux",
    source: "backend",
    target: "linux",
  },

  {
    id: "backend-nginx",
    source: "backend",
    target: "nginx",
  },
];