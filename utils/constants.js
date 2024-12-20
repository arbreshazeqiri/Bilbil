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
  },
];

export const units = [
  [
    "Greet people, Order in a cafe",
    "Describe your family, Talk about food likes",
    "Say where you’re from, Plan to travel abroad",
    "Talk about work, Use the present tense",
    "Ask for directions, Commands",
    "Make plans to go out, Talk about birthdays",
    "Give health advice, Describe shared housing",
    "Discuss hotel stays, Refer to extended family",
    "Alphabet, Common expressions",
    "Numbers 1-100, Days of the week, Months, Colors",
  ],
];

export const colorsObj = {
  orange: "#FF9100",
  yellow: "#FFC700",
  blue: "#4AD0FF",
  green: "#95D600",
  pink: "#DE4A8C",
  purple: "#944ADE",
  red: "#EF3A3A",
};

export const darkerColorsObj = {
  orange: "#d67a00",
  yellow: "#d6a802",
  blue: "#0293c8",
  green: "#73a301",
  pink: "#c4407b",
  purple: "#7f3ec1",
  red: "#d03131",
};

export const colors = [
  "#FF9100",
  "#FFC700",
  "#4AD0FF",
  "#95D600",
  "#DE4A8C",
  "#944ADE",
  "#EF3A3A",
];

export const darkerColors = [
  "#d67a00",
  "#d6a802",
  "#0293c8",
  "#73a301",
  "#c4407b",
  "#7f3ec1",
  "#d03131",
];

export const practices = [
  {
    index: 0,
    name: "Mistakes",
    image: require("../assets/practice/mistake.png"),
    size: 70,
    header: true,
  },
  {
    index: 1,
    name: "Stories",
    image: require("../assets/practice/story.png"),
    size: 70,
    header: true,
  },
  {
    index: 2,
    name: "Timed Word-Matching",
    image: require("../assets/practice/time.png"),
    size: 70,
    header: false,
  },
];

export const exerciseTypes = [
  "Translation",
  "Listening",
  "Comprehension",
  "Matching",
  "Rearrangement",
  "Labeling",
  "Blanks",
  "Roleplay",
];

export const generateExerciseSequence = () => {
  let allExercises = [];
  allExercises.push(...exerciseTypes);

  let sequence = [];
  for (let i = 0; i < exerciseTypes.length; i++) {
    sequence.push(exerciseTypes[i]);
  }

  allExercises.sort(() => Math.random() - 0.5);
  sequence.push(allExercises[0]);
  sequence.push(allExercises[1]);

  return sequence;
};

export const checkMatching = (pairs, checked) => {
  if (checked.length === 0) {
    return false;
  }

  if (checked.length % 2 !== 0) {
    return false;
  }

  const pairKeys = Object.keys(pairs);

  for (let i = 0; i < checked.length; i += 2) {
    const key = checked[i];
    const value = checked[i + 1];

    const isValidPair =
      (key in pairs && pairs[key] === value) ||
      (pairKeys.includes(value) && pairs[value] === key);

    if (!isValidPair) {
      return false;
    }
  }

  return true;
};

export const checkRearrangement = (sentence, answer) => {
  const answerJoined = answer.join(" ");
  return sentence == answerJoined;
};

export const settings = [
  {
    value: 'name',
    text: 'Name',
    placeholder: 'Full Name'
  },
  {
    value: 'username',
    text: 'Username',
    placeholder: 'Username'
  },
  {
    value: 'password',
    text: 'Password',
    placeholder: 'New Password'
  },
  {
    value: 'email',
    text: 'Email',
    placeholder: 'Email'
  },
]

export const inputsList = [
  {
    value: 'oldPassword',
    text: 'Old password',
    placeholder: ''
  },
  {
    value: 'newPassword',
    text: 'New password',
    placeholder: ''
  },
  {
    value: 'confirmPassword',
    text: 'Confirm password',
    placeholder: ''
  },
]