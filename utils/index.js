import Group0 from "../assets/avatars/Group0";
import Group1 from "../assets/avatars/Group1";
import Group2 from "../assets/avatars/Group2";
import Group3 from "../assets/avatars/Group3";
import Group4 from "../assets/avatars/Group4";
import Group5 from "../assets/avatars/Group5";
import Group6 from "../assets/avatars/Group6";
import Group7 from "../assets/avatars/Group7";
import Group8 from "../assets/avatars/Group8";
import Group9 from "../assets/avatars/Group9";
import Group10 from "../assets/avatars/Group10";
import Group11 from "../assets/avatars/Group11";
import Group12 from "../assets/avatars/Group12";
import Group13 from "../assets/avatars/Group13";
import Group14 from "../assets/avatars/Group14";

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
    case 6:
      return <Group6 {...props} />;
    case 7:
      return <Group7 {...props} />;
    case 8:
      return <Group8 {...props} />;
    case 9:
      return <Group9 {...props} />;
    case 10:
      return <Group10 {...props} />;
    case 11:
      return <Group11 {...props} />;
    case 12:
      return <Group12 {...props} />;
    case 13:
      return <Group13 {...props} />;
    case 14:
      return <Group14 {...props} />;
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
  <Group6 />,
  <Group7 />,
  <Group8 />,
  <Group9 />,
  <Group10 />,
  <Group11 />,
  <Group12 />,
  <Group13 />,
  <Group14 />,
];

export const hairColors = [
  "#b38b67",
  "#c89f73",
  "#d9b380",
  "#f1cc8f",
  "#fbe7a1",
  "#fcfce8",
  "#fafad2",
  "#fffbb6",
  "#fdee87",
  "#fde968",
  "#aa8866",
  "#debe99",
  "#241c11",
  "#4f1a00",
  "#9a3300",
  "#905424",
  "#bb6d3e",
  "#da874c",
  "#ed9352",
  "#ffb464",
  "#f9cdd4",
  "#eca1ac",
  "#e27589",
  "#b25b6e",
  "#7c3042",
  "#75250a",
  "#5e0808",
  "#500a09",
  "#430c0a",
  "#2a0b09",
  "#747474",
  "#4b4b4b",
  "#3e3e3e",
  "#313131",
  "#242424",
  "#ea871e",
  "#d5750a",
  "#c06205",
  "#ac4f00",
  "#7e3a06",
  "#4C3B32",
  "#643302",
  "#502807",
  "#411e02",
  "#301606",
  "#c9b3bd",
  "#d4c3c7",
  "#dbd1ce",
  "#e8e2dc",
  "#f4f0e4",
  "#f3c6f8",
  "#e4a1ff",
  "#d5a7fa",
  "#b9c0ff",
  "#c7eeff",
  "#4d3047",
  "#744d63",
  "#a17383",
  "#bf979f",
  "#dbb3b3",
  "#547e5b",
  "#4d7253",
  "#46694c",
  "#436348",
  "#38513d",
  "#6564aa",
  "#6e569e",
  "#7584b3",
  "#95b3c5",
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
  "#000000",
];
