export const after10thCourses = [
  {
    id: 'mpc',
    name: 'MPC (Mathematics, Physics, Chemistry)',
    shortName: 'MPC',
    icon: 'Calculator',
    color: '#3B82F6',
    overview: 'MPC is a popular intermediate course for students interested in engineering, technology, and pure sciences. It provides a strong foundation in mathematics and physical sciences, opening doors to numerous career opportunities in technical and scientific fields.',
    subjects: [
      'Mathematics (Algebra, Calculus, Trigonometry)',
      'Physics (Mechanics, Thermodynamics, Optics)',
      'Chemistry (Organic, Inorganic, Physical)',
      'English',
      'Second Language'
    ],
    eligibility: 'Completion of 10th standard (SSC) with minimum 50% marks. Some institutions may require higher percentages for admission.',
    skillsRequired: [
      'Strong analytical thinking',
      'Problem-solving abilities',
      'Numerical aptitude',
      'Logical reasoning',
      'Attention to detail',
      'Time management'
    ],
    higherEducation: [
      'B.Tech/B.E in various engineering streams',
      'B.Sc in Mathematics, Physics, Chemistry',
      'B.Sc in Computer Science',
      'BCA (Computer Applications)',
      'B.Arch (Architecture)',
      'B.Planning',
      'Defense Services'
    ],
    careerOpportunities: [
      'Software Engineer',
      'Data Scientist',
      'Research Scientist',
      'Civil Engineer',
      'Mechanical Engineer',
      'Electrical Engineer',
      'Teacher/Professor',
      'Financial Analyst'
    ],
    entranceExams: [
      { name: 'JEE Main', purpose: 'Engineering admissions' },
      { name: 'JEE Advanced', purpose: 'IIT admissions' },
      { name: 'EAMCET (AP)', purpose: 'State engineering admissions' },
      { name: 'TS EAMCET', purpose: 'Telangana engineering admissions' },
      { name: 'BITSAT', purpose: 'BITS Pilani admissions' },
      { name: 'VITEEE', purpose: 'VIT University admissions' }
    ],
    topColleges: [
      { name: 'IITs (Various)', location: 'All India' },
      { name: 'NITs (Various)', location: 'All India' },
      { name: 'BITS Pilani', location: 'Pilani, Hyderabad, Goa' },
      { name: 'IIIT Hyderabad', location: 'Hyderabad' },
      { name: 'Delhi Technological University', location: 'Delhi' },
      { name: 'Andhra University', location: 'Visakhapatnam' }
    ],
    expectedSalary: { min: 3, max: 25, unit: 'LPA' },
    faqs: [
      { q: 'Is MPC only for engineering?', a: 'No, MPC opens doors to multiple fields including pure sciences, research, defense, and even business and finance careers.' },
      { q: 'What if I don\'t clear JEE?', a: 'There are many private universities and state-level entrance exams. You can also pursue pure sciences or other degree courses.' },
      { q: 'Is mathematics mandatory for all MPC careers?', a: 'Strong mathematics skills are essential for engineering and most MPC-related careers. However, some career paths may require less intensive math.' }
    ]
  },
  {
    id: 'bipc',
    name: 'BiPC (Biology, Physics, Chemistry)',
    shortName: 'BiPC',
    icon: 'Microscope',
    color: '#10B981',
    overview: 'BiPC is designed for students passionate about life sciences, medicine, and healthcare. This stream is the primary pathway for aspiring doctors, pharmacists, and other medical professionals.',
    subjects: [
      'Biology (Botany & Zoology)',
      'Physics',
      'Chemistry',
      'English',
      'Second Language'
    ],
    eligibility: 'Completion of 10th standard with minimum 50% marks in Science subjects. Biology background is preferred but not mandatory.',
    skillsRequired: [
      'Memory retention',
      'Scientific temperament',
      'Observation skills',
      'Patience and dedication',
      'Empathy and communication',
      'Research orientation'
    ],
    higherEducation: [
      'MBBS (Medicine)',
      'BDS (Dentistry)',
      'B.Pharmacy',
      'B.Sc in Biology/Biotechnology',
      'BPT (Physiotherapy)',
      'B.Sc Nursing',
      'Veterinary Science',
      'Agriculture'
    ],
    careerOpportunities: [
      'Doctor (Physician/Surgeon)',
      'Dentist',
      'Pharmacist',
      'Research Scientist',
      'Biotechnologist',
      'Nurse',
      'Physiotherapist',
      'Nutritionist/Dietitian'
    ],
    entranceExams: [
      { name: 'NEET UG', purpose: 'Medical admissions (MBBS/BDS)' },
      { name: 'AIIMS', purpose: 'AIIMS admissions (merged with NEET)' },
      { name: 'JIPMER', purpose: 'JIPMER admissions (merged with NEET)' },
      { name: 'EAMCET (AP)', purpose: 'State medical admissions' },
      { name: 'TS EAMCET', purpose: 'Telangana medical admissions' }
    ],
    topColleges: [
      { name: 'AIIMS Delhi', location: 'New Delhi' },
      { name: 'CMC Vellore', location: 'Vellore' },
      { name: 'AFMC Pune', location: 'Pune' },
      { name: 'JIPMER', location: 'Puducherry' },
      { name: 'Gandhi Medical College', location: 'Hyderabad' },
      { name: 'Andhra Medical College', location: 'Visakhapatnam' }
    ],
    expectedSalary: { min: 6, max: 50, unit: 'LPA' },
    faqs: [
      { q: 'What if I don\'t get MBBS?', a: 'There are many alternative career paths like BDS, B.Pharmacy, BPT, and research in life sciences.' },
      { q: 'Is BiPC harder than MPC?', a: 'Both have different challenges. BiPC requires strong memorization and understanding of biological processes, while MPC focuses more on problem-solving.' },
      { q: 'Can I switch to engineering after BiPC?', a: 'While it\'s not common, you may need additional mathematics to pursue certain engineering fields like Biotechnology or Biomedical Engineering.' }
    ]
  },
  {
    id: 'mec',
    name: 'MEC (Mathematics, Economics, Commerce)',
    shortName: 'MEC',
    icon: 'TrendingUp',
    color: '#F59E0B',
    overview: 'MEC is perfect for students interested in business, finance, and economics. It combines mathematical skills with economic understanding, preparing students for careers in commerce, banking, and management.',
    subjects: [
      'Mathematics',
      'Economics',
      'Commerce',
      'English',
      'Second Language'
    ],
    eligibility: 'Completion of 10th standard with minimum 50% marks. Interest in mathematics and social sciences is beneficial.',
    skillsRequired: [
      'Numerical ability',
      'Analytical thinking',
      'Business acumen',
      'Communication skills',
      'Market awareness',
      'Decision-making'
    ],
    higherEducation: [
      'B.Com (General/Honors)',
      'BBA (Business Administration)',
      'BMS (Management Studies)',
      'CA (Chartered Accountancy)',
      'CS (Company Secretary)',
      'B.Sc in Economics',
      'B.Stat/Indian Statistical Institute'
    ],
    careerOpportunities: [
      'Chartered Accountant',
      'Company Secretary',
      'Financial Analyst',
      'Business Consultant',
      'Banking Professional',
      'Economist',
      'Investment Banker',
      'Entrepreneur'
    ],
    entranceExams: [
      { name: 'CA Foundation', purpose: 'Chartered Accountancy' },
      { name: 'CSEET', purpose: 'Company Secretary' },
      { name: 'CUET UG', purpose: 'Central University admissions' },
      { name: 'IPMAT', purpose: 'IIM integrated BBA+MBA' },
      { name: 'NPAT', purpose: 'NMIMS admissions' }
    ],
    topColleges: [
      { name: 'Shri Ram College of Commerce', location: 'Delhi' },
      { name: 'St. Xavier\'s College', location: 'Kolkata, Mumbai' },
      { name: 'Narsee Monjee College', location: 'Mumbai' },
      { name: 'Christ University', location: 'Bangalore' },
      { name: 'IIM Indore (IPM)', location: 'Indore' },
      { name: 'Loyola College', location: 'Chennai' }
    ],
    expectedSalary: { min: 3, max: 20, unit: 'LPA' },
    faqs: [
      { q: 'What is the difference between MEC and CEC?', a: 'MEC includes Mathematics which opens doors to CA, finance careers, and higher studies requiring math. CEC without math limits some professional courses.' },
      { q: 'Is MEC good for CA?', a: 'Yes, MEC provides an excellent foundation for CA as it covers mathematics, commerce, and economics fundamentals.' },
      { q: 'What careers don\'t require math-intensive studies?', a: 'You can pursue B.Com, BBA, and various management courses where practical knowledge is more important than advanced mathematics.' }
    ]
  },
  {
    id: 'cec',
    name: 'CEC (Commerce, Economics, Civics)',
    shortName: 'CEC',
    icon: 'Landmark',
    color: '#8B5CF6',
    overview: 'CEC focuses on commerce, economics, and civics, ideal for students interested in understanding business, governance, and social structures. It\'s perfect for those seeking careers in civil services, business, or law.',
    subjects: [
      'Commerce',
      'Economics',
      'Civics/Political Science',
      'English',
      'Second Language'
    ],
    eligibility: 'Completion of 10th standard with minimum 50% marks. Interest in social sciences and business is beneficial.',
    skillsRequired: [
      'Critical thinking',
      'Communication skills',
      'Understanding of governance',
      'Business awareness',
      'Writing skills',
      'Social awareness'
    ],
    higherEducation: [
      'B.Com',
      'BA in Economics',
      'BA in Political Science',
      'LLB (Law)',
      'BA in Journalism',
      'BA in Public Administration',
      'Civil Services Preparation'
    ],
    careerOpportunities: [
      'Civil Servant (IAS/IPS)',
      'Lawyer',
      'Journalist',
      'Political Analyst',
      'Business Manager',
      'Government Official',
      'Social Worker',
      'Teacher/Professor'
    ],
    entranceExams: [
      { name: 'UPSC (after graduation)', purpose: 'Civil Services' },
      { name: 'CLAT', purpose: 'National Law Universities' },
      { name: 'AILET', purpose: 'NLU Delhi' },
      { name: 'CUET UG', purpose: 'Central University admissions' }
    ],
    topColleges: [
      { name: 'National Law School', location: 'Bangalore' },
      { name: 'NALSAR University', location: 'Hyderabad' },
      { name: 'Hindu College', location: 'Delhi' },
      { name: 'Lady Shri Ram College', location: 'Delhi' },
      { name: 'Presidency College', location: 'Chennai' },
      { name: 'St. Xavier\'s College', location: 'Kolkata' }
    ],
    expectedSalary: { min: 2.5, max: 25, unit: 'LPA' },
    faqs: [
      { q: 'Can I pursue CA with CEC?', a: 'Yes, but you may need additional mathematics coaching as CA requires quantitative aptitude.' },
      { q: 'Is CEC good for UPSC?', a: 'CEC is excellent for UPSC as it covers subjects like economics and polity which are important for civil services.' },
      { q: 'What\'s the difference between CEC and HEC?', a: 'CEC is commerce-focused while HEC includes History and is more suited for humanities and civil services.' }
    ]
  },
  {
    id: 'diploma',
    name: 'Diploma in Engineering',
    shortName: 'Diploma',
    icon: 'Settings',
    color: '#EF4444',
    overview: 'A Diploma in Engineering is a 3-year technical course that provides practical and theoretical knowledge in various engineering disciplines. It\'s an excellent option for students who want to enter the technical workforce quickly.',
    subjects: [
      'Engineering Mathematics',
      'Engineering Physics',
      'Engineering Chemistry',
      'Engineering Drawing',
      'Workshop Practice',
      'Specialized Branch Subjects'
    ],
    eligibility: 'Completion of 10th standard with minimum 35-50% marks (varies by state). Some states conduct entrance exams.',
    skillsRequired: [
      'Practical aptitude',
      'Technical understanding',
      'Problem-solving',
      'Drawing skills',
      'Workshop handling',
      'Basic computer skills'
    ],
    higherEducation: [
      'B.Tech through Lateral Entry (2nd Year)',
      'AMIE (Associate Member of Institution of Engineers)',
      'Specialized certification courses',
      'Management courses after diploma'
    ],
    careerOpportunities: [
      'Junior Engineer',
      'Technical Supervisor',
      'Draughtsman',
      'Lab Technician',
      'Quality Control Assistant',
      'Maintenance Engineer',
      'Foreman'
    ],
    entranceExams: [
      { name: 'Polytechnic Entrance Test', purpose: 'State-level admissions' },
      { name: 'AP POLYCET', purpose: 'Andhra Pradesh' },
      { name: 'TS POLYCET', purpose: 'Telangana' },
      { name: 'JEXPO', purpose: 'West Bengal' },
      { name: 'BCECE', purpose: 'Bihar' }
    ],
    topColleges: [
      { name: 'Government Polytechnics', location: 'State-wide' },
      { name: 'Sri Venkateswara Polytechnic', location: 'Tirupati' },
      { name: 'Nagarjuna Polytechnic', location: 'Guntur' },
      { name: 'Quli Qutub Shah Polytechnic', location: 'Hyderabad' },
      { name: 'Board of Technical Education Colleges', location: 'Various' }
    ],
    expectedSalary: { min: 1.5, max: 5, unit: 'LPA' },
    faqs: [
      { q: 'Can I join B.Tech after Diploma?', a: 'Yes, diploma holders can join B.Tech 2nd year directly through lateral entry.' },
      { q: 'Is diploma equivalent to intermediate?', a: 'No, diploma is a different qualification. However, after diploma, you can join B.Tech directly.' },
      { q: 'Which diploma branch is best?', a: 'Computer Science, Electronics, and Civil Engineering have good job prospects currently.' }
    ]
  },
  {
    id: 'polytechnic',
    name: 'Polytechnic',
    shortName: 'Polytechnic',
    icon: 'Building2',
    color: '#06B6D4',
    overview: 'Polytechnics offer diploma-level technical education focusing on practical skills. They are similar to diploma courses but often emphasize hands-on training in various technical and vocational fields.',
    subjects: [
      'Applied Mathematics',
      'Applied Science',
      'Engineering Mechanics',
      'Computer Applications',
      'Technical Drawing',
      'Branch-Specific Technical Subjects'
    ],
    eligibility: '10th pass with minimum 35% marks. Age limit varies (typically 15-21 years).',
    skillsRequired: [
      'Hands-on aptitude',
      'Technical interest',
      'Problem-solving',
      'Team work',
      'Communication',
      'Basic academics'
    ],
    higherEducation: [
      'Direct B.Tech 2nd year admission',
      'B.Sc in relevant field',
      'Specialized certifications',
      'Apprenticeship programs'
    ],
    careerOpportunities: [
      'Technical Assistant',
      'Junior Engineer',
      'Site Supervisor',
      'Draftsman',
      'Lab Technician',
      'Production Assistant',
      'Quality Tester'
    ],
    entranceExams: [
      { name: 'State Polytechnic Entrance', purpose: 'Admissions' },
      { name: 'Merit-based admissions', purpose: 'Some institutions' }
    ],
    topColleges: [
      { name: 'Government Polytechnic Colleges', location: 'Various' },
      { name: 'Private Polytechnic Colleges', location: 'Various' },
      { name: 'Women Polytechnics', location: 'Various' }
    ],
    expectedSalary: { min: 1.2, max: 4, unit: 'LPA' },
    faqs: [
      { q: 'Difference between Diploma and Polytechnic?', a: 'They are essentially the same. Polytechnic is the institution, diploma is the qualification.' },
      { q: 'Can girls join polytechnic?', a: 'Yes, there are women polytechnics too. All branches are open for girls.' },
      { q: 'Which branch has highest job scope?', a: 'Computer Science, Electronics & Communication, and Civil branches have good placements.' }
    ]
  },
  {
    id: 'iti',
    name: 'ITI (Industrial Training Institute)',
    shortName: 'ITI',
    icon: 'Wrench',
    color: '#F97316',
    overview: 'ITI courses are vocational training programs designed to provide industry-relevant skills. They offer quick entry into the workforce and are ideal for students who prefer hands-on work over academics.',
    subjects: [
      'Trade Theory',
      'Trade Practical',
      'Workshop Calculation',
      'Engineering Drawing',
      'Social Studies',
      'Employability Skills'
    ],
    eligibility: '10th pass for most trades. Some trades accept 8th pass. Age: 14-25 years.',
    skillsRequired: [
      'Manual dexterity',
      'Practical skills',
      'Physical fitness',
      'Safety awareness',
      'Discipline',
      'Learning attitude'
    ],
    higherEducation: [
      'CTS (Craftsmen Training Scheme)',
      'Apprenticeship training',
      'Skill development courses',
      'Diploma courses (with bridge courses)'
    ],
    careerOpportunities: [
      'Electrician',
      'Fitter',
      'Welder',
      'Mechanic',
      'Turner',
      'Plumber',
      'Self-employment',
      'Factory Worker'
    ],
    entranceExams: [
      { name: 'Merit-based admissions', purpose: 'Most states' },
      { name: 'State ITI entrance', purpose: 'Some states' }
    ],
    topColleges: [
      { name: 'Government ITIs', location: 'District centers' },
      { name: 'Private ITIs', location: 'Various' }
    ],
    expectedSalary: { min: 0.8, max: 2.5, unit: 'LPA' },
    faqs: [
      { q: 'Which ITI trade is best?', a: 'Electrician, Fitter, and Electronics trades have good demand in industries.' },
      { q: 'Can I study after ITI?', a: 'You can pursue apprenticeships or lateral entry to diploma courses.' },
      { q: 'Is ITI good for government jobs?', a: 'Yes, ITI qualification is accepted for many government technical posts.' }
    ]
  },
  {
    id: 'vocational',
    name: 'Vocational Courses',
    shortName: 'Vocational',
    icon: 'Briefcase',
    color: '#EC4899',
    overview: 'Vocational courses are skill-based training programs that prepare students for specific trades or professions. They focus on practical skills and offer quicker employment opportunities.',
    subjects: [
      'Domain-specific technical skills',
      'Communication skills',
      'Computer basics',
      'Industry orientation',
      'Soft skills',
      'Practical training'
    ],
    eligibility: '10th pass for most courses. Some specialized courses may have specific requirements.',
    skillsRequired: [
      'Practical learning ability',
      'Keen interest in chosen field',
      'Dedication',
      'Manual skills (for some trades)',
      'Communication',
      'Entrepreneurial mindset'
    ],
    higherEducation: [
      'Advanced diploma courses',
      'Bachelor in Vocational Education (B.Voc)',
      'Industry certifications',
      'Specialized training programs'
    ],
    careerOpportunities: [
      'Healthcare Assistant',
      'Retail Professional',
      'Hospitality Staff',
      'Fashion Designer',
      'Beauty Professional',
      'Automotive Technician',
      'Self-employment',
      'Freelancer'
    ],
    entranceExams: [
      { name: 'Merit/Interview-based', purpose: 'Most institutions' }
    ],
    topColleges: [
      { name: 'Government Vocational Colleges', location: 'Various' },
      { name: 'NSDC Partner Institutions', location: 'All India' },
      { name: 'Polytechnics with vocational wings', location: 'Various' }
    ],
    expectedSalary: { min: 1, max: 4, unit: 'LPA' },
    faqs: [
      { q: 'Are vocational courses valuable?', a: 'Yes, they provide industry-ready skills and quicker employment. Many vocational courses have high placement rates.' },
      { q: 'Can I do graduation after vocational?', a: 'B.Voc programs are designed for vocational stream students. Regular graduation may require bridge courses.' },
      { q: 'Which vocational course is best?', a: 'Healthcare, hospitality, IT-enabled services, and retail have good job prospects.' }
    ]
  }
];
