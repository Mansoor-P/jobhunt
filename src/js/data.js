

// Dummy job data
var jobs = [
  
  {
    title: 'java developer',
    company: 'HCL tech',
    location: 'banglore || hydrabad',
    salary: '10 LPA',
    description: ' Back End Developer,Industry Type: IT Services & Consulting,Department: Engineering - Software & QA,Employment Type: Full Time, PermanentRole Category: Software DevelopmentEducationUG: Any GraduateKey SkillsSkills highlighted with ‘‘ are preferred keyskillsspring bootjavaspring mvcweb technologiesweb server',
    logo: './img/companies/hcl/hcl.jpg',
    qualifications: 'Bachelor\'s degree in Computer Science or related field',
    skills: ' Core Java 8 concepts, Spring Core, Spring MVC, Spring Boot, REST API, JSON, XML, SQL, Web Server ',
    responsibilities: ' Back End Developer,Industry Type: IT Services & Consulting,Department: Engineering - Software & QA,Employment Type: Full Time, PermanentRole Category: Software DevelopmentEducationUG: Any GraduateKey SkillsSkills highlighted with ‘‘ are preferred keyskillsspring bootjavaspring mvcweb technologiesweb server',
    applyLink: 'https://www.naukri.com/job-listings-java-developer-5-8-years-joiner-bangalore-hyderabad-hcltech-hyderabad-secunderabad-bangalore-bengaluru-5-to-8-years-260323001640'
  },
  {
    title: 'WIPRO MEGA WALKIN DRIVE: HYDERABAD',
    company: 'Wipro',
    location: 'Hydrabad',
    salary: '3.5 LPA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lectus quis quam facilisis tristique. Nullam vel purus sed odio dapibus efficitur et sed metus. Curabitur pharetra lectus ac diam consequat, at scelerisque mi tincidunt.',
    logo: './img/companies/wipro/wipro.png',
    qualifications: 'Bachelor\'s degree in Computer Science or related field',
    skills: 'HTML, CSS, JavaScript',
    responsibilities: 'Frontend development and maintenance',
    applyLink: 'https://frontlinesmedia.in/wipro-mega-walkin-drive-hyderabad/'
  },
  {
    title: 'Full Stack Developer',
    company: 'Tech Solutions',
    location: 'Seattle',
    salary: '$90,000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lectus quis quam facilisis tristique. Nullam vel purus sed odio dapibus efficitur et sed metus. Curabitur pharetra lectus ac diam consequat, at scelerisque mi tincidunt.',
    logo: './img/about-3.jpg',
    qualifications: 'Bachelor\'s degree in Computer Science or related field',
    skills: 'HTML, CSS, JavaScript, Python',
    responsibilities: 'Full stack development and system architecture',
    applyLink: ''
  },
  {
    title: 'UI/UX Designer',
    company: 'Design Co.',
    location: 'Tokyo',
    salary: '$70,000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lectus quis quam facilisis tristique. Nullam vel purus sed odio dapibus efficitur et sed metus. Curabitur pharetra lectus ac diam consequat, at scelerisque mi tincidunt.',
    logo: './img/about-4.jpg',
    qualifications: 'Bachelor\'s degree in Graphic Design or related field',
    skills: 'Adobe Photoshop, Sketch, Wireframing',
    responsibilities: 'UI/UX design and prototyping',
    applyLink: ''
  },
  // {
  //   title: 'Data Analyst',
  //   company: 'Analytics Inc.',
  //   location: 'Chicago',
  //   salary: '$70,000',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   logo: 'company_4.jpg',
  //   qualifications: 'Bachelor\'s degree in Statistics or related field',
  //   skills: 'Data analysis, SQL, Excel',
  //   responsibilities: 'Analyzing and interpreting complex data sets',
  //   applyLink: 'job_details.html?id=3'
  // },
  // {
  //   title: 'Marketing Manager',
  //   company: 'Growth Agency',
  //   location: 'Los Angeles',
  //   salary: '$90,000',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   logo: 'company_5.jpg',
  //   qualifications: 'Bachelor\'s degree in Marketing or related field',
  //   skills: 'Digital marketing, SEO, Social media management',
  //   responsibilities: 'Developing and implementing marketing strategies',
  //   applyLink: 'job_details.html?id=4'
  // },
  // {
  //   title: 'Product Manager',
  //   company: 'Tech Startup',
  //   location: 'Austin',
  //   salary: '$95,000',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   logo: 'company_6.jpg',
  //   qualifications: 'Bachelor\'s degree in Business or related field',
  //   skills: 'Product management, Agile methodologies',
  //   responsibilities: 'Defining product roadmap and leading cross-functional teams',
  //   applyLink: 'job_details.html?id=5'
  // },
  // {
  //   title: 'Sales Executive',
  //   company: 'Sales Solutions',
  //   location: 'Boston',
  //   salary: '$85,000',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   logo: 'company_7.jpg',
  //   qualifications: 'Bachelor\'s degree in Business or related field',
  //   skills: 'Sales, Negotiation, Relationship management',
  //   responsibilities: 'Driving sales and meeting revenue targets',
  //   applyLink: 'job_details.html?id=6'
  // },
  // {
  //   title: 'Graphic Designer',
  //   company: 'Creative Studio',
  //   location: 'Miami',
  //   salary: '$60,000',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   logo: 'company_8.jpg',
  //   qualifications: 'Bachelor\'s degree in Design or related field',
  //   skills: 'Adobe Creative Suite, Typography, Illustration',
  //   responsibilities: 'Creating visual assets for various media channels',
  //   applyLink: 'job_details.html?id=7'
  // },
  // {
  //   title: 'Human Resources Manager',
  //   company: 'HR Solutions',
  //   location: 'Houston',
  //   salary: '$80,000',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   logo: 'company_9.jpg',
  //   qualifications: 'Bachelor\'s degree in Human Resources or related field',
  //   skills: 'Recruitment, Employee relations, HR policies',
  //   responsibilities: 'Overseeing HR functions and managing employee relations',
  //   applyLink: 'job_details.html?id=8'
  // },
  // {
  //   title: 'Financial Analyst',
  //   company: 'Finance Inc.',
  //   location: 'Dallas',
  //   salary: '$75,000',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   logo: 'company_10.jpg',
  //   qualifications: 'Bachelor\'s degree in Finance or related field',
  //   skills: 'Financial analysis, Excel, Data visualization',
  //   responsibilities: 'Analyzing financial data and preparing reports',
  //   applyLink: 'job_details.html?id=9'
  // }
  // Add more dummy jobs here...
];
