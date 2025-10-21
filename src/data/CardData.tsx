export type CardData = {
  variant?: "light" | "dark";
  height?: number | string;
  children?: React.ReactNode;
  centered?: boolean;
  extraMargin?: boolean;
  id?: number;
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
    id: 0,
  },
  { height: 300, variant: "dark", children: <p>Languages</p>, id: 1 },
  { height: 300, variant: "light", children: <p>Projects</p>, id: 2 },
  {
    height: 200,
    variant: "dark",
    children: <p>Contact</p>,
    centered: true,
    id: 3,
  },
  {
    height: 400,
    variant: "dark",
    extraMargin: true,
    children: <p>ABOUT</p>,
    id: 4,
  },
  { height: 300, variant: "light", children: <p>Tools/Libraries</p>, id: 5 },
  { height: 300, variant: "dark", children: <p>Experience</p>, id: 6 },
  {
    height: 400,
    variant: "light",
    extraMargin: true,
    children: <p>Click Here!</p>,
    id: 7,
  },
];
