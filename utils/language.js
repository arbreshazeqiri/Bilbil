export const pairs = {
  mollë: "apple",
  laps: "pencil",
  zjarr: "fire",
  tigër: "tiger",
  shkrepëse: "matches",
  lule: "flower",
  libër: "book",
  stol: "chair",
  tavolinë: "table",
  dritare: "window",
  derë: "door",
  pirun: "fork",
  thikë: "knife",
  gotë: "glass",
  buzë: "lip",
  dhëmb: "tooth",
  gjuhë: "tongue",
  gjoksi: "chest",
  dorë: "hand",
  sy: "eye",
  vesh: "ear",
  kokë: "head",
  flokë: "hair",
  vetull: "eyebrow",
  hundë: "nose",
  sqep: "beak",
  krah: "arm",
  bark: "stomach",
  gju: "knee",
  dhëmbë: "teeth",
  gishta: "fingers",
  thonjtë: "fingernails",
  këmbë: "leg",
  mish: "meat",
  kripë: "salt",
  miell: "flour",
  uthull: "vinegar",
  çokollatë: "chocolate",
  krahë: "wings",
  shpatë: "sword",
  çekiç: "hammer",
  sopatë: "axe",
  shishe: "bottle",
  kimik: "pen",
  gërshërë: "scissors",
  kanaçe: "can",
  spec: "paprika",
  gjysmë: "half",
  pjesë: "part",
  vijë: "line",
  vizatim: "drawing",
  pikturë: "painting",
  ngjyrë: "color",
  numër: "number",
  shkronjë: "letter",
  fjalë: "word",
  histori: "story",
  trekëndësh: "triangle",
  katror: "square",
  rreth: "circle",
  kënd: "angle",
  majë: "tip",
  lartësi: "height",
  gjerësi: "width",
  mes: "between",
  jo: "no",
  po: "yes",
  unë: "I",
  ti: "you",
  ai: "he",
  ajo: "she",
  ne: "we",
  ju: "you",
  ata: "they",
  një: "one",
  që: "that",
  dhe: "and",
  në: "in",
  mbi: "on",
  mua: "me",
  asaj: "her",
  ashtu: "so",
  këtu: "here",
  atje: "there",
  kudo: "anywhere",
  këdo: "anyone",
  tani: "now",
  pastaj: "then",
  mbrëmje: "evening",
  natë: "night",
  gjumë: "sleep",
  koha: "time",
  kohë: "time",
  ditë: "day",
  javë: "week",
  muaj: "month",
  viti: "year",
  orë: "hour",
  minutë: "minute",
  sekondë: "second",
};

export const roleplay = [
  {
    question: "Si e ke emrin?",
    answers: [
      "Unë quhem Beni.",
      "Emri im është Beni.",
      "Unë jam student.",
      "Beni.",
    ],
    correctAnswers: [0, 1, 3],
  },
  {
    question: "Sa vjeç je?",
    answers: ["5", "Pesë.", "Jam pesë vjeç.", "Jo."],
    correctAnswers: [0, 1, 2],
  },
];

export const stories = [
  {
    title: "A Getaway",
    image: require("../assets/practice/stories/mountains.png"),
    dialogue: [
      "Hej Beni, si je sot?",
      "Mirë, Lis, faleminderit! Çfarë plane ke për fundjavën?",
      "Mendoj se do të shkojmë në një udhëtim në mal.",
      "Uau! Kur do të shkoni? A mund të vi edhe unë?",
      "Po, patjetër! Mendoj të nisemi herët të premten dhe të kthehemi të dielën pasdite.",
      "Tingëllon bukur! A di ndonjë vend të bukur atje?",
      "Po, kam dëgjuar për një liqen të mrekullueshëm me rrugë për ecje rreth tij.",
      "Fantastike! A duhet të marrim ushqime për një piknik?",
      "Absolutisht! Do të përgatis sendviça dhe petulla për të na mbushur me energji për ecje.",
    ],
    characters: [
      require("../assets/practice/stories/characters/lisi.png"),
      require("../assets/practice/stories/characters/beni.png"),
    ],
    questions: [
      {
        question: "What are the characters planning for the weekend?",
        options: [
          "Going to a concert",
          "Staying at home",
          "Going on a road trip to the mountains",
          "Visiting a museum",
        ],
        correct: 2,
      },
      {
        question: "When do they plan to leave for their trip?",
        options: [
          "Friday night",
          "Saturday morning",
          "Sunday morning",
          "Friday morning",
        ],
        correct: 3,
      },
      {
        question:
          "What kind of place are they planning to visit in the mountains?",
        options: [
          "A shopping mall",
          "A lake with hiking trails",
          "An amusement park",
          "A movie theater",
        ],
        correct: 1,
      },
      {
        question: "What activity do they plan to do after hiking?",
        options: [
          "Go shopping",
          "Have a picnic",
          "Visit a museum",
          "Go to a concert",
        ],
        correct: 1,
      },
    ],
  },
  {
    title: "Beach Day",
    image: require("../assets/practice/stories/beach.png"),
    dialogue: [
      "Hej Tomorr, si je?",
      "Mirë Shen, faleminderit! Ti?",
      "Edhe unë mirë. Po mendon të shkojmë në plazh këtë fundjavë?",
      "Ide shumë e mirë! Kur do të shkojmë?",
      "Mendoj të nisemi herët të shtunën dhe të kthehemi pasdite.",
      "Fenomenale! A ke ndonjë plazh në mendje?",
      "Po, një plazh i vogël i cili është shumë i qetë dhe i pastër.",
      "Bukur! A duhet të marrim një shampanjë dhe pije të tjera?",
      "Sigurisht! Do të sjellim disa pije freskuese.",
    ],
    characters: [
      require("../assets/practice/stories/characters/shen.png"),
      require("../assets/practice/stories/characters/tomorr.png"),
    ],
    questions: [
      {
        question: "What are the characters planning for the weekend?",
        options: [
          "Going shopping",
          "Staying at home",
          "Going to the beach",
          "Visiting a museum",
        ],
        correct: 2,
      },
      {
        question: "When do they plan to leave for their trip?",
        options: [
          "Saturday night",
          "Saturday morning",
          "Sunday morning",
          "Monday morning",
        ],
        correct: 1,
      },
      {
        question: "What kind of place are they planning to visit?",
        options: [
          "A shopping mall",
          "A lake with hiking trails",
          "A quiet and clean beach",
          "An amusement park",
        ],
        correct: 2,
      },
      {
        question: "What will they bring for their beach day?",
        options: ["Books", "Cold drinks", "Soccer ball", "Camera"],
        correct: 1,
      },
    ],
  },
  {
    title: "Movie Night",
    image: require("../assets/practice/stories/movies.png"),
    dialogue: [
      "Si je, Lea?",
      "Mirë, Hana, faleminderit! Çfarë ke në mendje për këtë fundjavë?",
      "Po mendoja të organizojmë një mbrëmje kinemaje në shtëpi.",
      "Hmmm... Çfarë filma do të shohim?",
      "Mendoj që të shohim një film komedi dhe një film aksion.",
      "Fantastike! Kur do të organizojmë këtë mbrëmje?",
      "Mendoj të premten mbrëma dhe të shohim filma deri vonë.",
      "Supeerr! Do të sjellim thjesht popcorn dhe pije gazi?",
      "Po, do të jetë një zgjedhje e thjeshtë por e shijshme për mbrëmjen tonë kinemaje.",
    ],
    characters: [
      require("../assets/practice/stories/characters/hana.png"),
      require("../assets/practice/stories/characters/lea.png"),
    ],
    questions: [
      {
        question: "What are the characters planning for the weekend?",
        options: [
          "Going shopping",
          "Staying at home",
          "Going to the beach",
          "Organizing a movie night at home",
        ],
        correct: 3,
      },
      {
        question: "What kind of movies do they plan to watch?",
        options: [
          "Horror and thriller",
          "Comedy and action",
          "Documentary and drama",
          "Romantic and fantasy",
        ],
        correct: 1,
      },
      {
        question: "When do they plan to start their movie night?",
        options: [
          "Saturday morning",
          "Saturday afternoon",
          "Saturday evening",
          "Sunday morning",
        ],
        correct: 2,
      },
      {
        question: "What snacks do they plan to have during the movie night?",
        options: [
          "Popcorn and soft drinks",
          "Pizza and salad",
          "Cookies and tea",
          "Chips and juice",
        ],
        correct: 0,
      },
    ],
  },
  {
    title: "Happy B-Day",
    image: require("../assets/practice/stories/birthday.png"),
    dialogue: [
      "Hej, Bea?",
      "Çfarë ka, Mjellma?",
      "E di që sot është ditëlindja e Dritës?",
      "Paskam harruar fare! Duhet të bëjmë diçka për të.",
      "Absolutisht! Mendon se duhet të organizojmë një darkë surprizë?",
      "Ide shumë e mirë! Le të organizojmë një darkë të bukur për të.",
      "Le të ftojmë të gjithë shoqërinë!",
      "Po, duhet të thërrasim të gjithë shoqërinë. Do të jetë një surprizë e mrekullueshme për të.",
      `Do vish në dyqan t'i blejmë disa dhurata të bukura?`,
      "Po, patjetër! Jam shumë e entuziazmuar!",
    ],
    characters: [
      require("../assets/practice/stories/characters/mjellma.png"),
      require("../assets/practice/stories/characters/bea.png"),
    ],
    questions: [
      {
        question: "What is the occasion mentioned in the dialogue?",
        options: ["Wedding", "Birthday", "Graduation", "Anniversary"],
        correct: 1,
      },
      {
        question: "What do the characters plan to do for their friend?",
        options: [
          "Organize a surprise party",
          "Go on a vacation",
          "Watch a movie",
          "Study together",
        ],
        correct: 0,
      },
      {
        question:
          "What does Person 2 think about the idea of organizing a surprise dinner?",
        options: [
          "Thinks it's a bad idea",
          "Thinks it's too expensive",
          "Thinks it's a great idea",
          "Thinks it's unnecessary",
        ],
        correct: 2,
      },
      {
        question:
          "What do the characters suggest doing after deciding to organize the surprise dinner?",
        options: [
          "Going shopping for groceries",
          "Going to the beach",
          "Going to the movies",
          "Going shopping for gifts",
        ],
        correct: 3,
      },
    ],
  },
  {
    title: "Cooking Class",
    image: require("../assets/practice/stories/cooking.png"),
    dialogue: [
      "Çkemi, Mira!",
      "Oh, çkemi Arta! Çfarë po bën ti këtu?",
      "Çfarë bën ti këtu? Unë jam pjesë e kursit të gatimit qe 2 vite tashmë.",
      "Uau! Une sapo u regjistrova javën e kaluar. Po pse s'të pashë?",
      "Javën e kaluar kam qenë sëmurë.",
      "Ah! Andaj nuk të kam parë. A je më mirë tani?",
      "Po. Jam shumë më mirë. A po të pëlqen grupi?",
      "Shumë! Mezi po pres për recetën e sotme. Do bëjmë pizza!",
      "Edhe unë. Do të të mësoj disa triçe që të dal pizza më e shijshme. Eja!",
    ],
    characters: [
      require("../assets/practice/stories/characters/arta.png"),
      require("../assets/practice/stories/characters/mira.png"),
    ],
    questions: [
      {
        question: "Where are the characters?",
        options: [
          "At the mall",
          "At school",
          "In a cooking class",
          "In a restaurant",
        ],
        correct: 2,
      },
      {
        question: "Why is Mira surprised?",
        options: [
          "She met her friend at the cooking class",
          "The teacher is her friend",
          "Her friend lied to her",
          "The teacher was sick",
        ],
        correct: 0,
      },
      {
        question: "How long has Arta been part of the cooking class for?",
        options: ["A month", "Two months", "A year", "Two years"],
        correct: 3,
      },
      {
        question: "What are they going to cook today?",
        options: ["Popcorn", "Pizza", "Cookies", "Salads"],
        correct: 1,
      },
    ],
  },
  {
    title: "Homework",
    image: require("../assets/practice/stories/homework.png"),
    dialogue: [
      "Hej, Luiza?",
      "Po, Anda?",
      "Ke filluar të bësh detyrat e shtëpisë për sot?",
      "Jo ende, por duhet t'i përfundoj sa më shpejt.",
      "Mendoj të filloj tani. Mund të më ndihmosh me atë temën e matematikës?",
      "Sigurisht! A është ajo për shumëzimin e polinomeve?",
      "Po, pikërisht ajo. Nuk po arrij të kuptoj një nga problemet.",
      "Epo, le të shikojmë së bashku. Mund të jetë një gabim i vogël që mund ta zgjidhim bashkë.",
      "Faleminderit shumë që më ndihmon. Do të ishte shumë e vështirë pa ty.",
      "Po, sigurisht! Edhe ti më ndihmon mua.",
    ],
    characters: [
      require("../assets/practice/stories/characters/anda.png"),
      require("../assets/practice/stories/characters/luiza.png"),
    ],
    questions: [
      {
        question: "What are the characters discussing?",
        options: ["Shopping", "Homework", "Cooking", "Travel plans"],
        correct: 1,
      },
      {
        question: "Why does person A ask for help with math homework?",
        options: [
          "They don't want to do it",
          "They find math difficult",
          "They enjoy math",
          "They are bored",
        ],
        correct: 1,
      },
      {
        question: "What specific topic in math are they struggling with?",
        options: [
          "Addition",
          "Subtraction",
          "Multiplying polynomials",
          "Dividing fractions",
        ],
        correct: 2,
      },
      {
        question: "How does Luiza respond to Anda's request for help?",
        options: [
          "They refuse to help",
          "They agree to help and offer support",
          "They laugh at Anda",
          "They ask for payment",
        ],
        correct: 1,
      },
    ],
  },
];

export const comprehension = {
  dialogue: ["Sa vjeç je?", "Pesë."],
  characters: [
    require("../assets/exercises/comprehension-1.png"),
    require("../assets/exercises/comprehension-2.png"),
  ],
  sounds: [
    require("../assets/audios/Sa-vjec-je.m4a"),
    require("../assets/audios/Pese.m4a"),
  ],
  question: {
    q: "Sa vjeç je?",
    options: [
      "... four years old.",
      "... five years old.",
      "... six years old.",
    ],
    correct: 1,
  },
};

export const labeling = {
  word: "zjarr",
  options: [
    {
      label: "sea",
      source: require(`../assets/items/sea.png`),
    },
    {
      label: "mountains",
      source: require(`../assets/items/mountains.png`),
    },
    {
      label: "fire",
      source: require(`../assets/items/fire.png`),
    },
    {
      label: "water",
      source: require(`../assets/items/water.png`),
    },
  ],
  correct: 2,
};
