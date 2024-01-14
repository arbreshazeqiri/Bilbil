import Group0 from "../assets/avatars/Group0";
import Group1 from "../assets/avatars/Group1";
import Group2 from "../assets/avatars/Group2";
import Group3 from "../assets/avatars/Group3";
import Group4 from "../assets/avatars/Group4";
import Group5 from "../assets/avatars/Group5";

export const getAvatar = (index, props) => {
  switch (index) {
    case 0:
      return <Group0 {...props} />;
    case 1:
      return <Group1 {...props} />;
    case 2:
      return <Group2 {...props} />;
    case 3:
      return <Group3 {...props} />;
    case 4:
      return <Group4 {...props} />;
    case 5:
      return <Group5 {...props} />;
    default:
      return <Group0 {...props} />;
  }
};

export const legend = [
  {
    value: 1,
    src: require("../assets/navigation/streak.png"),
    dsc: "Day streak",
  },
  {
    value: 1,
    src: require("../assets/navigation/level.png"),
    dsc: "Level reached",
  },
];

export const avatars = [
  <Group0 />,
  <Group1 />,
  <Group2 />,
  <Group3 />,
  <Group4 />,
  <Group5 />,
];

export const hairColors = [
  "#6C272A",
  "#D9B580",
  "#B3B3B3",
  "#D0B987",
  "#A28050",
  "#89542A",
  "#5D3B1D",
  "#513C2C",
  "#312A22",
  "#2B241C",
  "#1C1915",
];

export const skinColors = [
  "#FFC6B7",
  "#FFB89D",
  "#F2A07D",
  "#E18E70",
  "#C6775C",
  "#A46648",
  "#97513F",
  "#7D4A3F",
  "#6E3D3A",
  "#512d2b",
  "#422423",
  "#381f1e",
  "#fed2b1",
  "#FFCBA3",
  "#eca874",
  "#E59D65",
  "#B76E45",
  "#985C30",
  "#8C4A25",
  "#753e1e",
  "#5f3218",
  "#422210",
  "#351c0d",
  "#251409",
];

export const eyeColors = [
  "#9c7e08",
  "#996633",
  "#634E34",
  "#663300",
  "#2f1a05",
  "#332d05",
  "#497665",
  "#3D671D",
  "#1C7847",
  "#56cad2",
  "#348ee8",
  "#2E536F",
  "#9a8bb7",
  "#999999",
  "#000000",
];

export const bgColors = [
  "#ff884d",
  "#e74c3c",
  "#cc3300",
  "#ffbf4d",
  "#f39c12",
  "#cc9900",
  "#66a3ff",
  "#3498db",
  "#004080",
  "#66ff99",
  "#2ecc71",
  "#008040",
  "#bf80ff",
  "#9b59b6",
  "#7649a8",
  "#66ffc2",
  "#1abc9c",
  "#008066",
  "#ffdb58",
  "#f1c40f",
  "#cca300",
  "#ff9933",
  "#d35400",
  "#994d00",
  "#576b7e",
  "#34495e",
  "#2d3c4f",
  "#ffffff",
  "#2c2c2c",
  "#000000"
];

