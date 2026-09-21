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
    code: "ECGS",
    title: "Executive Certificate in Gender Studies",
    format: "Part-time certificate",
    summary: "A practical foundation for students, public servants, development practitioners and community leaders.",
  },
  {
    code: "PGDGS",
    title: "Postgraduate Diploma in Gender Studies",
    format: "Part-time postgraduate diploma",
    summary: "For graduates and professionals building gender awareness for public service and organisational practice.",
  },
  {
    code: "MGS",
    title: "Master of Gender Studies",
    format: "Full-time professional degree",
    summary: "Advanced interdisciplinary study for academics, practitioners, policymakers and professionals.",
  },
  {
    code: "MSc",
    title: "Master of Science in Gender Studies",
    format: "Full-time master’s degree",
    summary: "Research, policy analysis and scholarly training for academic and development-focused careers.",
  },
  {
    code: "M.Phil.",
    title: "Master of Philosophy in Gender Studies",
    format: "Full-time research degree",
    summary: "Advanced theoretical and research training for independent scholarship and consultancy.",
  },
  {
    code: "PhD",
    title: "Doctor of Philosophy in Gender Studies",
    format: "Full-time doctoral degree",
    summary: "Original research for scholars prepared to advance knowledge and address complex gender questions.",
  },
] as const;

export const researchAreas = [
  ["Gender & Development", "Opportunity, work and economic life"],
  ["Gender-Based Violence", "Prevention, response and lived experience"],
  ["Women & Leadership", "Participation, power and decision-making"],
  ["Gender & Health", "Health, wellbeing and access to care"],
  ["Gender & Education", "Learning, opportunity and social expectations"],
  ["Gender & Governance", "Policy, institutions and public life"],
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
    type: "Academic development",
    title: "CGS Research Workshop",
    description: "A working session bringing the Centre’s academic community together.",
    href: "https://drive.google.com/drive/folders/1hpHDTWqsrZHiBJ4_RJHPcIy-FU5TdIlh",
    image: "/assets/cgs-research-workshop.jpg",
  },
  {
    type: "Institutional leadership",
    title: "Inauguration of the CGS Advisory Committee",
    description: "A documented advisory committee inauguration and institutional gathering.",
    href: "https://drive.google.com/drive/folders/1cKRh2d7ZJfGsUaSDe6bxrS7AkB8me2sC",
    image: "/assets/cgs-advisory-group.jpg",
  },
] as const;

export const events = [
  {
    slug: "first-cgs-international-conference",
    title: "First CGS International Conference",
    type: "International conference",
    registrationDeadline: "30 September 2026",
    startDate: "3 November 2026",
    endDate: "8 November 2026",
    dateLabel: "3–8 November 2026",
    status: "Registration open",
    registrationHref: `mailto:${site.email}?subject=${encodeURIComponent("First CGS International Conference registration")}`,
    summary: "Join the Centre for Gender Studies for its first international conference, bringing scholarship, dialogue and public engagement into one academic gathering.",
  },
] as const;

export const navigation = [
  ["About Us", "/about"],
  ["Programmes", "/programmes"],
  ["Research", "/research"],
  ["Events", "/events"],
  ["Activity", "/activity"],
] as const;
