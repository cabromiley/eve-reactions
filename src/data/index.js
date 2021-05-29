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
      {
        name: "Dysporite",
        requirements: ["Dysprosium", "Mercury"],
      },
      {
        name: "Fernite Alloy",
        requirements: ["Scandium", "Vanadium"],
      },
      {
        name: "Ferrofluid",
        requirements: ["Dysprosium", "Hafnium"],
      },
      {
        name: "Fluxed Condensates",
        requirements: ["Neodymium", "Thulium"],
      },
      {
        name: "Hexite",
        requirements: ["Chromium", "Platinum"],
      },
      {
        name: "Hyperflurite",
        requirements: ["Promethium", "Vanadium"],
      },
      {
        name: "Neo Mercurite",
        requirements: ["Mercury", "Neodymium"],
      },
      {
        name: "Platinum Technite",
        requirements: ["Platinum", "Technetium"],
      },
      {
        name: "Prometium",
        requirements: ["Cadmium", "Promethium"],
      },
      {
        name: "Rolled Tungsten Alloy",
        requirements: ["Platnium", "Tungsten"],
      },
      {
        name: "Silicon Diborite",
        requirements: ["Evaporite Deposits", "Silicates"],
      },
      {
        name: "Solerium",
        requirements: ["Caesium", "Chromium"],
      },
      {
        name: "Sulfuric Acid",
        requirements: ["Atmospheric Gasses", "Evaporite Deposits"],
      },
      {
        name: "Titanium Chromide",
        requirements: ["Chromium", "Titanium"],
      },
      {
        name: "Vanadium Hafnite",
        requirements: ["Hafnium", "Vanadium"],
      },
    ],
    composite: [
      {
        name: "Crystalline Carbonide",
        requirements: ["Crystallite Alloy", "Carbon Polymers"],
      },
      {
        name: "Fermionic Condensates",
        requirements: ["Caesarium Cadmide", "Dysporite", "Fluxed Condensates"],
      },
      {
        name: "Fernite Carbide",
        requirements: ["Fernite Alloy", "Ceramic Powder"],
      },
      {
        name: "Ferrogel",
        requirements: ["Hexite", "Hyperflurite", "Ferrofluid", "Prometium"],
      },
      {
        name: "Fullerides",
        requirements: ["Carbon Polymers", "Platinum Technite"],
      },
      {
        name: "Hypersynaptic Fibers",
        requirements: ["Vanadium Hafnite", "Solerium", "Dysporite"],
      },
      {
        name: "Nanotransistors",
        requirements: ["Sulfuric Acid", "Platinum technite", "Neo Mercurite"],
      },
      {
        name: "Nonlinear Metamaterials",
        requirements: ["Titanium Chromide", "Ferrofluid"],
      },
      {
        name: "Phenolic Composites",
        requirements: ["Silicon Diborite", "Caesarium Cadmide", "Vanadium Hafnite"],
      },
      {
        name: "Photonic Metamaterials",
        requirements: ["Crystallite Alloy", "Thulium Hafnite"],
      },
      {
        name: "Plasmonic Metamaterials",
        requirements: ["Fernite Alloy", "Neo Mercurite"],
      },
      {
        name: "Sylramic Fibers",
        requirements: ["Ceramic Powder", "Hexite"],
      },
      {
        name: "Terahertz Metamaterials",
        requirements: ["Rolled Tungsten Alloy", "Promethium Mercurite"],
      },
      {
        name: "Titanium Carbide",
        requirements: ["Titanium Chromide", "Silicon Diborite"],
      },
      {
        name: "Tungsten Carbide",
        requirements: ["Rolled Tungsten Alloy", "Sulfuric Acid"],
      },
    ]
  };
}
