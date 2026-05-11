export interface Publication {
  title: string;
  conference: string;
  location: string;
  year: number;
  doi: string;

  links: {
    ieee?: string;
    pdf?: string;
    github?: string;
  };
}

export const publications: Publication[] = [
  {
    title: "Propagation Analysis for LoRa Networks in Urban Environments",

    conference:
      "IEEE Latin American Conference on Antennas and Propagation (LACAP)",

    location: "Natal, Brasil",

    year: 2026,

    doi: "10.1109/LACAP67012.2026.11471227",

    links: {
      ieee: "https://doi.org/10.1109/LACAP67012.2026.11471227",

      github: "https://github.com/PolBQ",
    },
  },
];