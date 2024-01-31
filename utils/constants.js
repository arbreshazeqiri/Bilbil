import FeatureScreen from "../components/FeatureScreen";

export const menuScreens = [
  {
    name: "Avatar",
    component: FeatureScreen,
    iconSource: require("../assets/avatar-menu/anonymity.png"),
  },
  {
    name: "Hair",
    component: FeatureScreen,
    iconSource: require("../assets/avatar-menu/hair-dryer.png"),
  },
  {
    name: "Skin",
    component: FeatureScreen,
    iconSource: require("../assets/avatar-menu/skin-tone.png"),
  },
  {
    name: "Details",
    component: FeatureScreen,
    iconSource: require("../assets/avatar-menu/girl.png"),
  },
  {
    name: "Eye",
    component: FeatureScreen,
    iconSource: require("../assets/avatar-menu/eye.png"),
  },
  {
    name: "Background",
    component: FeatureScreen,
    iconSource: require("../assets/avatar-menu/paint.png"),
  },
];

export const headerIcons = [
  {
    name: "Flag",
    size: 45,
    iconSource: require("../assets/navigation/albanian-flag.png"),
  },
  {
    name: "Streak",
    size: 30,
    value: 1,
    iconSource: require("../assets/navigation/streak.png"),
  },
  {
    name: "Level",
    size: 30,
    value: 1,
    iconSource: require("../assets/navigation/level.png"),
  },
  {
    name: "Hearts",
    size: 30,
    value: 5,
    iconSource: require("../assets/navigation/heart.png"),
  },
];

export const levels = [
  {
    index: 0,
    cefr: "CEFR A1",
    chapter: "Chapter 1: Egg",
    status: "In progress",
    image: require("../assets/levels/egg.png"),
    color: "#FFC700",
    size: 80,
    units: 10,
  },
  {
    index: 1,
    cefr: "CEFR A2",
    chapter: "Chapter 2: Rookie",
    status: "Locked",
    image: require("../assets/levels/rookie.png"),
    color: "#FF9100",
    size: 80,
    units: 10,
  },
  {
    index: 2,
    cefr: "CEFR B1",
    chapter: "Chapter 3: Seeker",
    status: "Locked",
    image: require("../assets/levels/seeker.png"),
    color: "#4AD0FF",
    size: 80,
    units: 10,
  },
  {
    index: 3,
    cefr: "CEFR B2",
    chapter: "Chapter 4: Explorer",
    status: "Locked",
    image: require("../assets/levels/explorer.png"),
    color: "#95D600",
    size: 80,
    units: 10,
  },
  {
    index: 4,
    cefr: "CEFR C1",
    chapter: "Chapter 5: Nomad",
    status: "Locked",
    image: require("../assets/levels/nomad.png"),
    color: "#DE4A8C",
    size: 80,
    units: 10,
  },
  {
    index: 5,
    cefr: "CEFR C2",
    chapter: "Chapter 6: Guardian",
    status: "Locked",
    image: require("../assets/levels/guardian.png"),
    color: "#944ADE",
    size: 80,
    units: 10,
  }
]

export const units = [
  ["Greet people, Order in a cafe",
    "Describe your family, Talk about food likes",
    "Say where you’re from, Plan to travel abroad",
    "Talk about work, Use the present tense",
    "Ask for directions, Commands",
    "Make plans to go out, Talk about birthdays",
    "Give health advice, Describe shared housing",
    "Discuss hotel stays, Refer to extended family",
    "Alphabet, Common expressions",
    "Numbers 1-100, Days of the week, Months, Colors"]
]

export const colors = [
  '#FF9100',
  '#FFC700',
  '#4AD0FF',
  '#95D600',
  '#DE4A8C',
  '#944ADE',
  '#EF3A3A'
];

export const darkerColors = [
  '#d67a00',
  '#d6a802',
  '#0293c8',
  '#73a301',
  '#c4407b',
  '#7f3ec1',
  '#d03131'
];

export const exerciseTypes = [
  "Listening",
  "Comprehension",
  "Matching",
  "Rearrangement", 
  "Labeling", 
  "Blanks", 
  "Roleplay", 
  "Translation",
  "Speaking"
];

export const otherExercises = [
  'Stories',
  'Matching'
]

export const generateExerciseSequence = () => {
  let allExercises = [];
  allExercises.push(...exerciseTypes);

  let sequence = [];
  for (let i = 0; i < exerciseTypes.length; i++) {
      sequence.push(exerciseTypes[i]);
  }

  allExercises.sort(() => Math.random() - 0.5);
  for (let i = 0; i < 1; i++) {
      sequence.push(allExercises[i]);
  }

  return sequence;
}
