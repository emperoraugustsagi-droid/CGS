export const site = {
  name: "Centre for Gender Studies",
  shortName: "CGS",
  university: "Nasarawa State University, Keffi",
  email: "genderstudies@nsuk.edu.ng",
  phones: ["0803 581 0883", "0906 553 5223"],
  address: "Old Administrative Block / Lincoln Building, NSUK",
  directorLinkedIn: "https://www.linkedin.com/in/adokwe-comfort-392a4223b/",
} as const;

export const programmes = [
  {
    code: "PGD",
    title: "PGD Gender Studies",
    format: "Postgraduate Diploma",
    summary: "Postgraduate study for graduates and professionals seeking a structured foundation in gender analysis and its application.",
  },
  {
    code: "M.Sc.",
    title: "M.Sc. Gender Studies",
    format: "Academic Masters",
    summary: "Advanced academic study focused on research, analysis and scholarly engagement with gender and society.",
  },
  {
    code: "MGS",
    title: "Masters in Gender Studies",
    format: "Professional Masters",
    summary: "Professional postgraduate study connecting gender knowledge with practice, institutions and public life.",
  },
  {
    code: "M.Phil./Ph.D.",
    title: "M.Phil./Ph.D. Gender Studies",
    format: "Master of Philosophy pathway",
    summary: "An advanced research pathway for scholars progressing toward doctoral-level work in Gender Studies.",
  },
  {
    code: "Ph.D.",
    title: "Ph.D. Gender Studies",
    format: "Doctoral programme",
    summary: "Doctoral research for scholars developing original work in Gender Studies.",
  },
] as const;

export const centreStudyOfferings = [
  {
    code: "CERT",
    title: "Gender Studies Certificate Programme",
    format: "Certificate programme",
    summary: "The official NSUK learning platform lists a Gender Studies Certificate Programme. Contact CGS for current admissions and delivery guidance.",
  },
  {
    code: "DIP",
    title: "Gender Studies Diploma Programme",
    format: "Diploma programme",
    summary: "The official NSUK learning platform lists a Gender Studies Diploma Programme. Contact CGS for current admissions and delivery guidance.",
  },
] as const;

export const researchAreas = [
  [
    "Gender & Development",
    "Opportunity, work and economic life",
    "Questions about how gender shapes access to opportunity, livelihoods, economic participation and development outcomes.",
  ],
  [
    "Gender-Based Violence",
    "Prevention, response and lived experience",
    "Inquiry into the conditions that produce gender-based violence, the experiences surrounding it and the systems involved in prevention and response.",
  ],
  [
    "Women & Leadership",
    "Participation, power and decision-making",
    "Study of participation, representation, leadership and the ways power is distributed across institutions and public life.",
  ],
  [
    "Gender & Health",
    "Health, wellbeing and access to care",
    "Questions about wellbeing, health systems, access to care and how gender can shape health experiences and outcomes.",
  ],
  [
    "Gender & Education",
    "Learning, opportunity and social expectations",
    "Study of learning, access, expectations and the social conditions that can shape educational opportunity and experience.",
  ],
  [
    "Gender & Governance",
    "Policy, institutions and public life",
    "Inquiry into policy, institutions, participation and how gender analysis can deepen understanding of governance and public decision-making.",
  ],
] as const;

export const team = [
  ["Dr. Hajarah Hassan Ahmed II", "Deputy Director, Programs"],
  ["Dr. Ochanya M. Yakubu Lamai", "Deputy Director, Academics"],
  ["Ifeoma Chidinma Eze", "Personal Assistant to the Director"],
  ["Mr. Alaku Adamu", "Secretary"],
  ["Sefa Agba", "Programs Officer"],
] as const;

export const activities = [
  {
    id: "research-workshop",
    type: "Academic development",
    title: "CGS Research Workshop",
    description: "A working session bringing the Centre’s academic community together.",
    sourceHref: "https://drive.google.com/drive/folders/1hpHDTWqsrZHiBJ4_RJHPcIy-FU5TdIlh",
    image: "/assets/cgs-research-workshop.jpg",
  },
  {
    id: "advisory-committee-inauguration",
    type: "Institutional leadership",
    title: "Inauguration of the CGS Advisory Committee",
    description: "A documented advisory committee inauguration and institutional gathering.",
    sourceHref: "https://drive.google.com/drive/folders/1cKRh2d7ZJfGsUaSDe6bxrS7AkB8me2sC",
    image: "/assets/cgs-advisory-group.jpg",
  },
] as const;

export const events = [
  {
    slug: "first-international-gender-conference-2026",
    title: "First International Gender Conference ’26",
    type: "International conference",
    theme: "Gender, Crisis, and Resilience: Forging Equitable Futures in a Changing World.",
    venue: "NSUK Multipurpose Hall by Second Gate, Keffi",
    startDate: "2026-11-04",
    endDate: "2026-11-07",
    dateLabel: "4–7 November 2026",
    status: "Registration open",
    website: "https://1st-international-gender-conference.ng",
    summary: "The Centre for Gender Studies convenes its first international gender conference around gender, crisis and resilience, with researchers, practitioners, institutions and participants engaging questions of equitable futures in a changing world.",
    deadlines: {
      abstractSubmission: "30 September 2026",
      notificationOfAcceptance: "7 October 2026",
      earlyBirdRegistration: "10 October 2026",
      fullPaperSubmission: "21 October 2026",
      standardRegistration: "28 October 2026",
    },
    specialFeature: {
      title: "A LEGACY of Inclusion",
      description: "Book launch by His Excellency, Engr. Abdullahi A. Sule.",
    },
    programmeLeads: [
      ["Guest of Honour", "His Excellency, Engr. Abdullahi A. Sule", "Executive Governor, Nasarawa State"],
      ["Keynote Speaker", "Hon. Minister Hajiya Imaan Sulaiman-Ibrahim", "Federal Ministry of Women Affairs"],
      ["Chief Host", "Professor Sa’adatu Hassan Liman", "Vice-Chancellor, NSUK"],
      ["Host / Director", "Dr. Comfort Adokwe-Obed", "Ag. Director, CGS, NSUK"],
    ],
    subthemes: [
      "Gender, Governance, and Public Policy",
      "Economic Empowerment and Inclusive Development",
      "Health, Wellbeing, and Social Protection in Times of Crisis",
      "Peacebuilding, Security, and Resilient Communities",
      "Education, Innovation, and Digital Inclusion",
      "Law, Human Rights, and Access to Justice",
      "Media, Communication, and Advocacy for Inclusive Governance",
      "Traditional and Religious Institutions in Advancing Gender Inclusion",
      "Climate Change, Environment, and Gender-Responsive Policy",
      "Women, Peace, and Security in a Federal Context",
      "Technology, Innovation, and the Future of Work for Women",
      "Culture, Identity, and Social Inclusion in a Diverse Society",
    ],
    registrationFees: [
      ["Members of Professional Bodies", "₦35,000", "₦45,000"],
      ["Members of Non-Professional / General Participant", "₦40,000", "₦50,000"],
      ["Student (valid ID required)", "₦15,000", "₦20,000"],
      ["International Participant (in-person)", "$250", "$300"],
      ["Online / Virtual Presentation (local)", "₦35,000", "₦45,000"],
      ["Online / Virtual Presentation (international)", "$80", "$100"],
      ["Exhibition Participant (booth / stand)", "₦200,000", "₦250,000"],
    ],
    coAuthorFees: [
      ["2nd Author", "₦15,000"],
      ["3rd Author", "₦10,000"],
      ["4th Author", "₦10,000"],
      ["5th Author and above", "₦10,000"],
    ],
    contacts: [
      ["Dr. Ochanya Mercy Y. Lamai", "0703 596 8803"],
      ["Dr. Comfort Adokwe-Obed", "0906 553 5223"],
      ["Ifeoma Eze", "0806 596 7819"],
      ["Sefa Agba", "0813 908 3766"],
    ],
    emails: ["nsuk-genderstudies@nsuk.edu.ng", "director-genderstudies@nsuk.edu.ng"],
    whatsappPhones: ["0813 908 3766", "0806 596 7819", "0803 581 0883"],
    payment: {
      bank: "NSUK Microfinance Bank",
      accountName: "Centre for Gender Studies",
      accountNumber: "1100012391",
    },
  },
] as const;

export const navigation = [
  ["About Us", "/about"],
  ["Programmes", "/programmes"],
  ["Research", "/research"],
  ["Events", "/events"],
  ["Activity", "/activity"],
] as const;
