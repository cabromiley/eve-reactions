export default function data() {
  return {
    ores: [
      {
        name: "Bitumens",
        goo: [
          { name: "Hydrocarbons", amount: 65 },
          { name: "Pyerite", amount: 6000 },
          { name: "Mexallon", amount: 400 },
        ],
      },
      {
        name: "Coesite",
        goo: [
          { name: "Silicates", amount: 65 },
          { name: "Pyerite", amount: 2000 },
          { name: "Mexallon", amount: 400 },
        ],
      },
      {
        name: "Sylvite",
        goo: [
          { name: "Evaporite Deposits", amount: 65 },
          { name: "Pyerite", amount: 4000 },
          { name: "Mexallon", amount: 400 },
        ],
      },
      {
        name: "Zeolite",
        goo: [
          { name: "Atmospheric Gases", amount: 65 },
          { name: "Pyerite", amount: 8000 },
          { name: "Mexallon", amount: 400 },
        ],
      },
      {
        name: "Cobaltite",
        goo: [{ name: "Cobalt", amount: 40 }],
      },
      {
        name: "Euxenite",
        goo: [{ name: "Scandium", amount: 40 }],
      },
      {
        name: "Scheelite",
        goo: [{ name: "Tungsten", amount: 40 }],
      },
      {
        name: "Titanite",
        goo: [{ name: "Titanium", amount: 40 }],
      },
      {
        name: "Chromite",
        goo: [
          { name: "Chromium", amount: 40 },
          { name: "Hydrocarbons", amount: 10 },
        ],
      },
      {
        name: "Otavite",
        goo: [
          { name: "Cadmium", amount: 40 },
          { name: "Atmospheric Gases", amount: 10 },
        ],
      },
      {
        name: "Sperrylite",
        goo: [
          { name: "Platinum", amount: 40 },
          { name: "Evaporite Deposits", amount: 10 },
        ],
      },
      {
        name: "Vanadinite",
        goo: [
          { name: "Vanadium", amount: 40 },
          { name: "Silicates", amount: 10 },
        ],
      },
      {
        name: "Carnotite",
        goo: [
          { name: "Technetium", amount: 50 },
          { name: "Cobalt", amount: 10 },
          { name: "Atmospheric Gases", amount: 15 },
        ],
      },
      {
        name: "Cinnabar",
        goo: [
          { name: "Mercury", amount: 50 },
          { name: "Tungsten", amount: 10 },
          { name: "Evaporite Deposits", amount: 15 },
        ],
      },
      {
        name: "Pollucite",
        goo: [
          { name: "Caesium", amount: 50 },
          { name: "Scandium", amount: 10 },
          { name: "Hydrocarbons", amount: 15 },
        ],
      },
      {
        name: "Zircon",
        goo: [
          { name: "Hafnium", amount: 50 },
          { name: "Titanium", amount: 10 },
          { name: "Silicates", amount: 15 },
        ],
      },
      {
        name: "Loparite",
        goo: [
          { name: "Promethium", amount: 22 },
          { name: "Platinum", amount: 10 },
          { name: "Scandium", amount: 20 },
          { name: "Hydrocarbons", amount: 20 },
        ],
      },
      {
        name: "Monazite",
        goo: [
          { name: "Neodymium", amount: 22 },
          { name: "Chromium", amount: 10 },
          { name: "Tungsten", amount: 20 },
          { name: "Evaporite Deposits", amount: 20 },
        ],
      },
      {
        name: "Xenotime",
        goo: [
          { name: "Dysprosium", amount: 22 },
          { name: "Vanadium", amount: 10 },
          { name: "Cobalt", amount: 20 },
          { name: "Atmospheric Gases", amount: 20 },
        ],
      },
      {
        name: "Ytterbite",
        goo: [
          { name: "Thulium", amount: 22 },
          { name: "Cadmium", amount: 10 },
          { name: "Titanium", amount: 20 },
          { name: "Silicates", amount: 20 },
        ],
      },
    ],
    simple: [
      {
        name: "Caesarium Cadmide",
        requirements: ["Cadmium", "Caesium"],
      },
      {
        name: "Carbon Polymers",
        requirements: ["Hydrocarbons", "Silicates"],
      },
      {
        name: "Ceramic Powder",
        requirements: ["Evaporite Deposits", "Silicates"],
      },
      {
        name: "Crystallite Alloy",
        requirements: ["Cadmium", "Cobalt"],
      },
    ],
  };
}
