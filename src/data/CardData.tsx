export type CardData = {
  variant?: "light" | "dark";
  height?: number;
  children?: React.ReactNode;
  centered?: boolean;
};

export const cards: CardData[] = [
  {
    height: 200,
    variant: "light",
    children: (
      <>
        <p style={{ fontWeight: 600 }}>Caleb Jennings</p>
        <p style={{ fontWeight: 300 }}>Atlanta, GA</p>
      </>
    ),
    centered: true,
  },
  { height: 400, variant: "dark", children: <p>ABOUT</p> },
  { height: 300, variant: "dark", children: <p>Languages</p> },
  { height: 300, variant: "light", children: <p>Tools/Libraries</p> },
  { height: 300, variant: "light", children: <p>Projects</p> },
  { height: 300, variant: "dark", children: <p>Experience</p> },
  {
    height: 200,
    variant: "dark",
    children: <p>Contact</p>,
    centered: true,
  },
  { height: 400, variant: "light", children: <p>Click Here!</p> },
];