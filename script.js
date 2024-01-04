//question 1
// for the given JSON iterate over all for loops
//for-in loop

var resume = {
  name: "VANI A",
  email: "vani00712@gmail.com",
  phone: "+91-9944062158",
  OBJECTIVE: [
    "To secure a responsible career opportunity to fully utilize my training and skills, while making significant contribution to the success of the company.",
  ],
  LOCATION: {
    address: "no:3247,TNHB Colony, Ayappakkam",
    postalCode: "600077",
    city: "Chennai",
    District: "Thiruvallur",
    State: "Tamilnadu",
  },
  EDUCATION: {
    institution: "Manonmaniam Sundaranar University",
    college: "A.P.C.Mahalakshmi College for Women, thoothukudi",
    Degree: "BSC",
    Duration: "2017-2020",
    cgpa: "7.49",
  },
  CERTIFICATES: {
    Title: "Application of Blue Brain",
    Level: "International Level Conference",
    Source: "Paper Presentation",
    Topic: "Recent Trends in Multi-disciplinary Research",
    date: "28-07-2020",
  },
  SKILLS: {
    name: "Technical",
    keywords: [
      "Scratch",
      "Corel Draw",
      "Adobe Photoshop",
      "Microsoft Office",
      "Type Writing",
    ],
  },
  SKILLS: {
    name: "Soft Skills",
    Keywords: [
      "Flexibility and Adaptability",
      "Positive Attitude",
      "Creativity",
      "Quick Learner",
      "Self Motivator",
    ],
  },
  LANGUAGES: {
    language: "Tamil , English",
  },
  INTEREST: {
    name: "Watching movie",
    keywords: "based on true storeies",
  },
};
for (var i in resume) {
  console.log(i, resume[i]);
}

//2nd loop
//for loop iteration

var resume = [
  {
    name: "VANI A",
    email: "vani00712@gmail.com",
    phone: "+91-9944062158",
    OBJECTIVE: [
      "To secure a responsible career opportunity to fully utilize my training and skills, while making significant contribution to the success of the company.",
    ],
    LOCATION: {
      address: "no:3247,TNHB Colony, Ayappakkam",
      postalCode: "600077",
      city: "Chennai",
      District: "Thiruvallur",
      State: "Tamilnadu",
    },
    EDUCATION: {
      institution: "Manonmaniam Sundaranar University",
      college: "A.P.C.Mahalakshmi College for Women, thoothukudi",
      Degree: "BSC",
      Duration: "2017-2020",
      cgpa: "7.49",
    },
    CERTIFICATES: {
      Title: "Application of Blue Brain",
      Level: "International Level Conference",
      Source: "Paper Presentation",
      Topic: "Recent Trends in Multi-disciplinary Research",
      date: "28-07-2020",
    },
    SKILLS: {
      name: "Technical",
      keywords: [
        "Scratch",
        "Corel Draw",
        "Adobe Photoshop",
        "Microsoft Office",
        "Type Writing",
      ],
    },
    SKILLS: {
      name: "Soft Skills",
      Keywords: [
        "Flexibility and Adaptability",
        "Positive Attitude",
        "Creativity",
        "Quick Learner",
        "Self Motivator",
      ],
    },
    LANGUAGES: {
      language: "Tamil , English",
    },
    INTEREST: {
      name: "Watching movie",
      keywords: "based on true storeies",
    },
  },
];
for (var i = 0; i < resume.length; i++) {
  console.log(resume[i]);
}

// 3.for of -loop iteration

const num = [20, 40, 60, 80, 100];

for (var newnum of num) {
  console.log(newnum);
}

//4. for each-loop iteration

let str = [5, 6, 7, 8, 9, 10];
str.forEach((element) => {
  console.log(element);
});

//question 2
//2.create your own resume for JSON format

var resume = {
  name: "VANI A",
  email: "vani00712@gmail.com",
  phone: "+91-9944062158",
  OBJECTIVE: [
    "To secure a responsible career opportunity to fully utilize my training and skills, while making significant contribution to the success of the company.",
  ],
  LOCATION: {
    address: "no:3247,TNHB Colony, Ayappakkam",
    postalCode: "600077",
    city: "Chennai",
    District: "Thiruvallur",
    State: "Tamilnadu",
  },
  EDUCATION: {
    institution: "Manonmaniam Sundaranar University",
    college: "A.P.C.Mahalakshmi College for Women, thoothukudi",
    Degree: "BSC",
    Duration: "2017-2020",
    cgpa: "7.49",
  },
  CERTIFICATES: {
    Title: "Application of Blue Brain",
    Level: "International Level Conference",
    Source: "Paper Presentation",
    Topic: "Recent Trends in Multi-disciplinary Research",
    date: "28-07-2020",
  },
  SKILLS: {
    name: "Technical",
    keywords: [
      "Scratch",
      "Corel Draw",
      "Adobe Photoshop",
      "Microsoft Office",
      "Type Writing",
    ],
  },
  SKILLS: {
    name: "Soft Skills",
    Keywords: [
      "Flexibility and Adaptability",
      "Positive Attitude",
      "Creativity",
      "Quick Learner",
      "Self Motivator",
    ],
  },
  LANGUAGES: {
    language: "Tamil , English",
  },
  INTEREST: {
    name: "Watching movie",
    keywords: "based on true storeies",
  },
};
console.log(resume);
