export const afterInterCourses = [
  {
    id: 'btech',
    name: 'B.Tech (Bachelor of Technology)',
    shortName: 'B.Tech',
    icon: 'Cpu',
    color: '#3B82F6',
    overview: 'B.Tech is a 4-year undergraduate engineering degree that provides comprehensive knowledge in various engineering disciplines. It combines theoretical knowledge with practical applications, preparing students for diverse roles in technology and engineering sectors.',
    duration: '4 Years',
    eligibility: '10+2 with MPC (Mathematics, Physics, Chemistry) with minimum 50-75% marks (varies by institution). Valid entrance exam score required.',
    subjects: [
      'Engineering Mathematics',
      'Engineering Physics',
      'Engineering Chemistry',
      'Programming Fundamentals',
      'Engineering Mechanics',
      'Specialized Branch Subjects',
      'Project Work & Internship'
    ],
    skillsRequired: [
      'Strong mathematical aptitude',
      'Problem-solving skills',
      'Programming knowledge',
      'Analytical thinking',
      'Team collaboration',
      'Technical documentation'
    ],
    careerOpportunities: [
      'Software Developer/Engineer',
      'Data Scientist',
      'Product Manager',
      'Research Engineer',
      'System Administrator',
      'Technical Consultant',
      'Project Engineer',
      'Higher Studies & Research'
    ],
    higherStudies: [
      'M.Tech (Master of Technology)',
      'MS (Master of Science) abroad',
      'MBA (Management)',
      'Research Programs (PhD)',
      'PG Diploma courses'
    ],
    entranceExams: [
      { name: 'JEE Main', purpose: 'NITs, IIITs, GFTIs' },
      { name: 'JEE Advanced', purpose: 'IITs' },
      { name: 'State CETs', purpose: 'State colleges' },
      { name: 'BITSAT', purpose: 'BITS Pilani' },
      { name: 'VITEEE', purpose: 'VIT' },
      { name: 'SRMJEEE', purpose: 'SRM University' }
    ],
    topColleges: [
      { name: 'Indian Institutes of Technology (IITs)', location: 'All India' },
      { name: 'National Institutes of Technology (NITs)', location: 'All India' },
      { name: 'Birla Institute of Technology and Science (BITS)', location: 'Pilani' },
      { name: 'Indian Institute of Technology (IIITs)', location: 'Various' },
      { name: 'Delhi Technological University', location: 'Delhi' },
      { name: 'Anna University', location: 'Chennai' }
    ],
    expectedSalary: { min: 4, max: 30, unit: 'LPA' },
    faqs: [
      { q: 'Which B.Tech branch is best?', a: 'Computer Science, Electronics, and AI/ML branches have high demand. Choose based on your interest and aptitude.' },
      { q: 'Can I get job after B.Tech?', a: 'Yes, B.Tech has excellent placement opportunities in IT and core industries. Skills and college matter.' },
      { q: 'Is B.Tech better than B.Sc?', a: 'B.Tech is more applied and industry-oriented. B.Sc focuses on pure sciences. Choose based on your career goals.' }
    ]
  },
  {
    id: 'mbbs',
    name: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
    shortName: 'MBBS',
    icon: 'Stethoscope',
    color: '#10B981',
    overview: 'MBBS is the primary medical degree for becoming a doctor in India. This 5.5-year program (including internship) trains students in diagnosis, treatment, and prevention of diseases, preparing them for a noble healthcare profession.',
    duration: '5.5 Years (4.5 Years + 1 Year Internship)',
    eligibility: '10+2 with BiPC (Biology, Physics, Chemistry) with minimum 50% marks. Valid NEET score required. Must be 17 years old by December 31 of admission year.',
    subjects: [
      'Anatomy',
      'Physiology',
      'Biochemistry',
      'Pathology',
      'Pharmacology',
      'Microbiology',
      'Forensic Medicine',
      'Clinical Subjects (Medicine, Surgery, Pediatrics, etc.)'
    ],
    skillsRequired: [
      'Strong memorization',
      'Empathy and patience',
      'Decision making under pressure',
      'Communication skills',
      'Physical stamina',
      'Research orientation',
      'Ethical practice'
    ],
    careerOpportunities: [
      'General Physician',
      'Medical Officer',
      'Junior Doctor in Hospitals',
      'Clinical Researcher',
      'Public Health Officer',
      'Defense Medical Services',
      'Railway Medical Services'
    ],
    higherStudies: [
      'MD (Doctor of Medicine) - 3 years',
      'MS (Master of Surgery) - 3 years',
      'DNB (Diplomate of National Board)',
      'Super Specialty (DM/MCh)',
      'MBA in Hospital Management'
    ],
    entranceExams: [
      { name: 'NEET UG', purpose: 'All Medical Colleges' },
      { name: 'State Counseling', purpose: 'State Quota Seats' }
    ],
    topColleges: [
      { name: 'All India Institute of Medical Sciences (AIIMS)', location: 'New Delhi' },
      { name: 'Christian Medical College (CMC)', location: 'Vellore' },
      { name: 'Armed Forces Medical College (AFMC)', location: 'Pune' },
      { name: 'Maulana Azad Medical College', location: 'New Delhi' },
      { name: 'King George\'s Medical University', location: 'Lucknow' },
      { name: 'JIPMER', location: 'Puducherry' }
    ],
    expectedSalary: { min: 8, max: 50, unit: 'LPA' },
    faqs: [
      { q: 'Is MBBS very difficult?', a: 'It requires dedication and hard work. The syllabus is vast but manageable with consistent study.' },
      { q: 'What if I don\'t get MBBS seat?', a: 'Consider BDS, BAMS, BHMS, B.Pharmacy, or BPT as alternatives in the medical field.' },
      { q: 'Can I practice after MBBS?', a: 'Yes, after completing MBBS and internship, you can practice as a doctor. Post-graduation helps specialization.' }
    ]
  },
  {
    id: 'bds',
    name: 'BDS (Bachelor of Dental Surgery)',
    shortName: 'BDS',
    icon: 'Smile',
    color: '#F59E0B',
    overview: 'BDS is a 5-year undergraduate program focused on dental sciences. It trains students to diagnose, prevent, and treat oral diseases and dental problems, preparing them to become dental surgeons.',
    duration: '5 Years (4 Years + 1 Year Internship)',
    eligibility: '10+2 with BiPC with minimum 50% marks. Valid NEET score required. Age 17+ by December 31 of admission year.',
    subjects: [
      'General Anatomy',
      'Physiology',
      'Dental Anatomy',
      'Dental Materials',
      'General Pathology',
      'Oral Pathology',
      'Oral Surgery',
      'Prosthodontics',
      'Orthodontics'
    ],
    skillsRequired: [
      'Manual dexterity',
      'Attention to detail',
      'Patient handling',
      'Communication skills',
      'Aesthetic sense',
      'Business acumen (for private practice)'
    ],
    careerOpportunities: [
      'Dental Surgeon',
      'Private Dental Clinic',
      'Government Hospital Dentist',
      'Dental Consultant',
      'Academic/Teaching',
      'Research Scholar'
    ],
    higherStudies: [
      'MDS (Master of Dental Surgery)',
      'PG Diploma courses',
      'Fellowship programs',
      'MBA in Hospital Management'
    ],
    entranceExams: [
      { name: 'NEET UG', purpose: 'All Dental Colleges' }
    ],
    topColleges: [
      { name: 'Maulana Azad Institute of Dental Sciences', location: 'Delhi' },
      { name: 'Government Dental College', location: 'Mumbai' },
      { name: 'Manipal College of Dental Sciences', location: 'Manipal' },
      { name: 'SDM College of Dental Sciences', location: 'Dharwad' },
      { name: 'Sri Ramachandra Dental College', location: 'Chennai' }
    ],
    expectedSalary: { min: 4, max: 25, unit: 'LPA' },
    faqs: [
      { q: 'Is BDS a good career?', a: 'Yes, dentistry offers good earning potential, especially in private practice. Less emergency work compared to MBBS.' },
      { q: 'Can BDS doctor prescribe medicines?', a: 'BDS doctors can prescribe medicines related to dental/oral conditions only.' },
      { q: 'What is the scope after BDS?', a: 'Private practice, government jobs, teaching, or MDS for specialization offer good career paths.' }
    ]
  },
  {
    id: 'bsc',
    name: 'B.Sc (Bachelor of Science)',
    shortName: 'B.Sc',
    icon: 'FlaskConical',
    color: '#8B5CF6',
    overview: 'B.Sc is a 3-year undergraduate degree in science that provides strong theoretical and practical knowledge in natural and applied sciences. It\'s flexible and opens doors to diverse careers in research, education, and industry.',
    duration: '3 Years',
    eligibility: '10+2 with science stream (MPC/BiPC) with minimum 50% marks. Subject-specific requirements vary.',
    subjects: [
      'Physics/Chemistry/Biology',
      'Mathematics',
      'Computer Science',
      'Electronics',
      'Environmental Science',
      'Laboratory Practicals'
    ],
    skillsRequired: [
      'Scientific temper',
      'Research aptitude',
      'Analytical thinking',
      'Laboratory skills',
      'Data analysis',
      'Report writing'
    ],
    careerOpportunities: [
      'Research Assistant',
      'Lab Technician',
      'Data Analyst',
      'Scientific Writer',
      'Science Teacher',
      'Quality Control Analyst',
      'Environmental Consultant'
    ],
    higherStudies: [
      'M.Sc (Master of Science)',
      'B.Ed (Teaching)',
      'MBA',
      'MCA (Computer Applications)',
      'Research Programs',
      'Professional certifications'
    ],
    entranceExams: [
      { name: 'CUET UG', purpose: 'Central Universities' },
      { name: 'IISc BS Research', purpose: 'IISc Bangalore' },
      { name: 'State Level Exams', purpose: 'State Universities' }
    ],
    topColleges: [
      { name: 'Indian Institute of Science (IISc)', location: 'Bangalore' },
      { name: 'St. Stephen\'s College', location: 'Delhi' },
      { name: 'Presidency University', location: 'Kolkata' },
      { name: 'Loyola College', location: 'Chennai' },
      { name: 'Fergusson College', location: 'Pune' },
      { name: 'Hindu College', location: 'Delhi' }
    ],
    expectedSalary: { min: 2, max: 12, unit: 'LPA' },
    faqs: [
      { q: 'Which B.Sc course has highest salary?', a: 'B.Sc in Computer Science, Data Science, and Applied Sciences have better salary prospects.' },
      { q: 'Is B.Sc better than B.Tech?', a: 'B.Sc focuses on pure sciences, B.Tech on applications. Choose based on your interest in research vs. industry.' },
      { q: 'Can I get software job after B.Sc?', a: 'Yes, B.Sc Computer Science and IT graduates can get software jobs with additional skill certifications.' }
    ]
  },
  {
    id: 'bcom',
    name: 'B.Com (Bachelor of Commerce)',
    shortName: 'B.Com',
    icon: 'Receipt',
    color: '#059669',
    overview: 'B.Com is a 3-year undergraduate degree in commerce that provides comprehensive knowledge in accounting, finance, taxation, and business management. It\'s the foundation for careers in finance, accounting, and business.',
    duration: '3 Years',
    eligibility: '10+2 in any stream (Commerce preferred) with minimum 50% marks. Some colleges have higher cutoffs.',
    subjects: [
      'Financial Accounting',
      'Corporate Accounting',
      'Business Law',
      'Cost Accounting',
      'Income Tax',
      'Business Economics',
      'Business Statistics',
      'Auditing'
    ],
    skillsRequired: [
      'Numerical aptitude',
      'Analytical thinking',
      'Attention to detail',
      'Time management',
      'Communication skills',
      'Ethics and integrity'
    ],
    careerOpportunities: [
      'Accountant',
      'Financial Analyst',
      'Tax Consultant',
      'Auditing Assistant',
      'Bank Probationary Officer',
      'Company Secretary (with CS)',
      'Business Consultant'
    ],
    higherStudies: [
      'M.Com (Master of Commerce)',
      'CA (Chartered Accountancy)',
      'CS (Company Secretary)',
      'MBA (Finance/Marketing)',
      'CMA (Cost Management Accountant)',
      'CPA (Certified Public Accountant)'
    ],
    entranceExams: [
      { name: 'CUET UG', purpose: 'Central Universities' },
      { name: 'Direct Merit Admission', purpose: 'Many colleges' }
    ],
    topColleges: [
      { name: 'Shri Ram College of Commerce', location: 'Delhi' },
      { name: 'Hindu College', location: 'Delhi' },
      { name: 'St. Xavier\'s College', location: 'Kolkata' },
      { name: 'Christ University', location: 'Bangalore' },
      { name: 'Narsee Monjee College', location: 'Mumbai' },
      { name: 'LSR College for Women', location: 'Delhi' }
    ],
    expectedSalary: { min: 2, max: 10, unit: 'LPA' },
    faqs: [
      { q: 'Which is better: B.Com or BBA?', a: 'B.Com focuses on finance and accounting, BBA on management. Choose based on your interest and career goals.' },
      { q: 'Can I do CA after B.Com?', a: 'Yes, you can directly appear for CA Intermediate after B.Com (with additional conditions).' },
      { q: 'What are job opportunities after B.Com?', a: 'Accounting, banking, finance, taxation, and pursuing professional courses like CA, CS, or MBA.' }
    ]
  },
  {
    id: 'bba',
    name: 'BBA (Bachelor of Business Administration)',
    shortName: 'BBA',
    icon: 'BarChart3',
    color: '#DC2626',
    overview: 'BBA is a 3-year undergraduate management degree that develops leadership, strategic thinking, and business acumen. It prepares students for management roles and provides a strong foundation for MBA.',
    duration: '3 Years',
    eligibility: '10+2 in any stream with minimum 50% marks. Some institutes conduct entrance tests.',
    subjects: [
      'Principles of Management',
      'Marketing Management',
      'Financial Management',
      'Human Resource Management',
      'Business Law',
      'Entrepreneurship',
      'Business Analytics',
      'Organizational Behavior'
    ],
    skillsRequired: [
      'Leadership skills',
      'Communication skills',
      'Decision making',
      'Team management',
      'Strategic thinking',
      'Networking'
    ],
    careerOpportunities: [
      'Management Trainee',
      'Marketing Executive',
      'HR Assistant',
      'Business Analyst',
      'Sales Executive',
      'Operations Executive',
      'Entrepreneur'
    ],
    higherStudies: [
      'MBA (Master of Business Administration)',
      'PGDM',
      'PGDBM',
      'Specialized Master\'s Programs',
      'Law (LLB)'
    ],
    entranceExams: [
      { name: 'IPMAT', purpose: 'IIMs (Integrated BBA+MBA)' },
      { name: 'NPAT', purpose: 'NMIMS' },
      { name: 'CUET UG', purpose: 'Central Universities' },
      { name: 'SET', purpose: 'Symbiosis' }
    ],
    topColleges: [
      { name: 'IIM Indore (IPM)', location: 'Indore' },
      { name: 'NMIMS University', location: 'Mumbai' },
      { name: 'Symbiosis', location: 'Pune' },
      { name: 'Christ University', location: 'Bangalore' },
      { name: 'Shaheed Sukhdev College', location: 'Delhi' },
      { name: 'Narsee Monjee', location: 'Mumbai' }
    ],
    expectedSalary: { min: 2.5, max: 12, unit: 'LPA' },
    faqs: [
      { q: 'Is BBA better than B.Com?', a: 'BBA is better for those wanting management careers and MBA. B.Com is better for finance, accounting, and professional courses like CA.' },
      { q: 'Can I get job after BBA without MBA?', a: 'Yes, BBA graduates can get entry-level management jobs. MBA significantly improves career prospects and salary.' },
      { q: 'Which specialization is best in BBA?', a: 'Marketing, Finance, HR, and International Business are popular. Choose based on your interest and industry demand.' }
    ]
  },
  {
    id: 'ba',
    name: 'BA (Bachelor of Arts)',
    shortName: 'BA',
    icon: 'BookOpen',
    color: '#7C3AED',
    overview: 'BA is a 3-year undergraduate degree in humanities and social sciences. It offers diverse specializations and develops critical thinking, communication, and analytical skills. It\'s ideal for civil services, teaching, and communication careers.',
    duration: '3 Years',
    eligibility: '10+2 in any stream with minimum 50% marks. Subject requirements vary by specialization.',
    subjects: [
      'English Literature',
      'History',
      'Political Science',
      'Economics',
      'Psychology',
      'Sociology',
      'Philosophy'
    ],
    skillsRequired: [
      'Critical thinking',
      'Writing skills',
      'Research aptitude',
      'Communication skills',
      'Cultural awareness',
      'Analytical reasoning'
    ],
    careerOpportunities: [
      'Civil Services',
      'Journalist',
      'Teacher/Professor',
      'Content Writer',
      'Social Worker',
      'Public Relations',
      'NGO Professional'
    ],
    higherStudies: [
      'MA (Master of Arts)',
      'B.Ed (Teaching)',
      'MBA',
      'LLB (Law)',
      'Mass Communication',
      'Civil Services'
    ],
    entranceExams: [
      { name: 'CUET UG', purpose: 'Central Universities' },
      { name: 'Merit-based', purpose: 'Many universities' }
    ],
    topColleges: [
      { name: 'Lady Shri Ram College', location: 'Delhi' },
      { name: 'St. Stephen\'s College', location: 'Delhi' },
      { name: 'Hindu College', location: 'Delhi' },
      { name: 'Presidency College', location: 'Kolkata' },
      { name: 'St. Xavier\'s College', location: 'Mumbai' },
      { name: 'Loyola College', location: 'Chennai' }
    ],
    expectedSalary: { min: 2, max: 15, unit: 'LPA' },
    faqs: [
      { q: 'Is BA good for UPSC?', a: 'Yes, BA subjects like Political Science, History, and Geography are helpful for UPSC preparation.' },
      { q: 'What can I do after BA?', a: 'Teaching, civil services, journalism, content writing, MBA, law, or higher studies in your subject.' },
      { q: 'Which BA specialization is best?', a: 'English, Political Science, and Psychology have diverse career options. Choose based on your interest.' }
    ]
  },
  {
    id: 'pharmacy',
    name: 'B.Pharmacy (Bachelor of Pharmacy)',
    shortName: 'B.Pharm',
    icon: 'Pill',
    color: '#E11D48',
    overview: 'B.Pharmacy is a 4-year undergraduate degree focused on pharmaceutical sciences. It trains students in drug development, manufacturing, quality control, and dispensing. It\'s essential for a career in the pharmaceutical industry.',
    duration: '4 Years',
    eligibility: '10+2 with BiPC/MPC with minimum 50% marks. Some states accept both PCM and PCB. D.Pharm holders can join directly.',
    subjects: [
      'Pharmaceutics',
      'Pharmaceutical Chemistry',
      'Pharmacology',
      'Pharmacognosy',
      'Pharmaceutical Analysis',
      'Biochemistry',
      'Clinical Pharmacy'
    ],
    skillsRequired: [
      'Scientific aptitude',
      'Attention to detail',
      'Laboratory skills',
      'Research orientation',
      'Chemistry knowledge',
      'Patient counseling'
    ],
    careerOpportunities: [
      'Pharmacist',
      'Drug Inspector',
      'Quality Control Executive',
      'Research Scientist',
      'Medical Representative',
      'Regulatory Affairs',
      'Clinical Research'
    ],
    higherStudies: [
      'M.Pharm (Master of Pharmacy)',
      'Pharm.D (Doctor of Pharmacy)',
      'MBA in Pharma Management',
      'Research Programs',
      'PG Courses abroad'
    ],
    entranceExams: [
      { name: 'State Pharmacy Exams', purpose: 'State Colleges' },
      { name: 'GPAT', purpose: 'M.Pharm admissions & scholarships' },
      { name: 'BITSAT', purpose: 'BITS Pharmacy' }
    ],
    topColleges: [
      { name: 'Institute of Chemical Technology', location: 'Mumbai' },
      { name: 'JSS College of Pharmacy', location: 'Ooty, Mysore' },
      { name: 'Manipal College of Pharmaceutical Sciences', location: 'Manipal' },
      { name: 'BITS Pilani', location: 'Pilani' },
      { name: 'University College of Pharmacy', location: 'Delhi' },
      { name: 'Andhra University', location: 'Visakhapatnam' }
    ],
    expectedSalary: { min: 3, max: 15, unit: 'LPA' },
    faqs: [
      { q: 'Can I open medical store after B.Pharm?', a: 'Yes, B.Pharm graduates can obtain drug license and open a pharmacy/medical store.' },
      { q: 'Is B.Pharm better than D.Pharm?', a: 'B.Pharm is a bachelor\'s degree (4 years), D.Pharm is diploma (2 years). B.Pharm offers more career opportunities.' },
      { q: 'What is the scope of Pharmacy in India?', a: 'Pharmacy has excellent scope in hospitals, pharmaceutical companies, research, clinical trials, and retail pharmacy.' }
    ]
  },
  {
    id: 'agriculture',
    name: 'B.Sc Agriculture',
    shortName: 'B.Sc Agri',
    icon: 'Leaf',
    color: '#16A34A',
    overview: 'B.Sc Agriculture is a 4-year undergraduate degree focused on agricultural sciences. It covers crop production, soil science, agricultural engineering, and rural economics. It\'s ideal for those interested in India\'s agricultural sector.',
    duration: '4 Years',
    eligibility: '10+2 with Science (BiPC/MPC) with minimum 50% marks. ICAR exam for central institutes.',
    subjects: [
      'Agronomy',
      'Soil Science',
      'Plant Pathology',
      'Entomology',
      'Agricultural Economics',
      'Horticulture',
      'Agricultural Engineering',
      'Animal Husbandry'
    ],
    skillsRequired: [
      'Scientific knowledge',
      'Problem-solving',
      'Physical stamina',
      'Leadership skills',
      'Communication',
      'Technical skills'
    ],
    careerOpportunities: [
      'Agricultural Officer',
      'Farm Manager',
      'Research Scientist',
      'Agricultural Extension Officer',
      'Bank Agricultural Officer',
      'Agri-Business Manager',
      'Food Processing Industry'
    ],
    higherStudies: [
      'M.Sc Agriculture',
      'MBA in Agri-Business',
      'Research Programs',
      'Civil Services (Forest Services)'
    ],
    entranceExams: [
      { name: 'ICAR AIEEA', purpose: 'ICAR Institutes' },
      { name: 'State Agricultural Exams', purpose: 'State Universities' },
      { name: 'EAMCET', purpose: 'Andhra Pradesh' }
    ],
    topColleges: [
      { name: 'Indian Agricultural Research Institute', location: 'New Delhi' },
      { name: 'Tamil Nadu Agricultural University', location: 'Coimbatore' },
      { name: 'Punjab Agricultural University', location: 'Ludhiana' },
      { name: 'GB Pant University of Agriculture', location: 'Pantnagar' },
      { name: 'Acharya N.G. Ranga Agricultural University', location: 'Hyderabad' },
      { name: 'University of Agricultural Sciences', location: 'Bangalore' }
    ],
    expectedSalary: { min: 3, max: 12, unit: 'LPA' },
    faqs: [
      { q: 'Is B.Sc Agriculture a good career?', a: 'Yes, with government focus on agriculture and agri-tech growth, there are excellent opportunities in both public and private sectors.' },
      { q: 'Can I get government job after B.Sc Agriculture?', a: 'Yes, many state and central government positions in agriculture department, banks, and research institutes.' },
      { q: 'What is the scope of agriculture in India?', a: 'Huge scope in agri-business, food processing, research, government jobs, and entrepreneurship in agri-tech.' }
    ]
  },
  {
    id: 'law',
    name: 'LLB/BA LLB (Bachelor of Laws)',
    shortName: 'Law',
    icon: 'Scale',
    color: '#1D4ED8',
    overview: 'Law is a professional degree that trains students in legal principles, justice systems, and advocacy. 5-year integrated programs (BA LLB, BBA LLB) after 12th offer comprehensive legal education.',
    duration: '3 Years (LLB) or 5 Years (Integrated)',
    eligibility: 'For 5-year: 10+2 with minimum 50% marks. For 3-year: Any graduation. Entrance exam required for top colleges.',
    subjects: [
      'Constitutional Law',
      'Family Law',
      'Criminal Law',
      'Contract Law',
      'Property Law',
      'Jurisprudence',
      'Legal Aid & Clinical Legal Education'
    ],
    skillsRequired: [
      'Logical reasoning',
      'Communication skills',
      'Research skills',
      'Writing skills',
      'Persuasion',
      'Critical thinking'
    ],
    careerOpportunities: [
      'Advocate/Lawyer',
      'Corporate Counsel',
      'Legal Advisor',
      'Judge (after qualifying)',
      'Public Prosecutor',
      'Legal Journalist',
      'Legal Process Outsourcing'
    ],
    higherStudies: [
      'LLM (Master of Laws)',
      'Specialized Diplomas',
      'PhD in Law',
      'Company Secretary (CS)'
    ],
    entranceExams: [
      { name: 'CLAT', purpose: 'National Law Universities' },
      { name: 'AILET', purpose: 'NLU Delhi' },
      { name: 'LSAT', purpose: 'Multiple colleges' },
      { name: 'SLAT', purpose: 'Symbiosis' },
      { name: 'MH CET Law', purpose: 'Maharashtra' }
    ],
    topColleges: [
      { name: 'National Law School of India University', location: 'Bangalore' },
      { name: 'NALSAR University of Law', location: 'Hyderabad' },
      { name: 'National Law University', location: 'Delhi' },
      { name: 'NLIU', location: 'Bhopal' },
      { name: 'WB NUJS', location: 'Kolkata' },
      { name: 'GNLU', location: 'Gandhinagar' }
    ],
    expectedSalary: { min: 3, max: 25, unit: 'LPA' },
    faqs: [
      { q: 'Which is better: 3-year or 5-year LLB?', a: '5-year integrated program after 12th is more comprehensive and saves time. 3-year is for graduates seeking career change.' },
      { q: 'Is law a good career in India?', a: 'Yes, with corporate sector growth and legal awareness, opportunities in litigation, corporate law, and judiciary are increasing.' },
      { q: 'How to become a judge?', a: 'After LLB, practice as advocate, clear Judiciary Services Exam (PCS-J) for lower judiciary or Higher Judicial Services for senior positions.' }
    ]
  },
  {
    id: 'hotel-management',
    name: 'BHM (Bachelor of Hotel Management)',
    shortName: 'Hotel Management',
    icon: 'Building',
    color: '#EA580C',
    overview: 'BHM is a 4-year degree focusing on hospitality and tourism. It trains students in hotel operations, food service, housekeeping, and front office management for careers in the growing hospitality industry.',
    duration: '4 Years',
    eligibility: '10+2 in any stream with minimum 50% marks. English proficiency required.',
    subjects: [
      'Food Production',
      'Food & Beverage Service',
      'Front Office Operations',
      'Housekeeping',
      'Hotel Accounting',
      'Hospitality Marketing',
      'Human Resource Management'
    ],
    skillsRequired: [
      'Communication skills',
      'Customer service',
      'Team work',
      'Leadership',
      'Problem-solving',
      'Physical stamina'
    ],
    careerOpportunities: [
      'Hotel Manager',
      'Restaurant Manager',
      'Executive Chef',
      'Front Office Manager',
      'Event Manager',
      'Cruise Ship Staff',
      'Airline Catering'
    ],
    higherStudies: [
      'MHM (Master of Hotel Management)',
      'MBA in Hospitality',
      'Specialized Diplomas',
      'International certifications'
    ],
    entranceExams: [
      { name: 'NCHMCT JEE', purpose: 'Central Institutes' },
      { name: 'State-level Exams', purpose: 'State colleges' },
      { name: 'Private Institute Exams', purpose: 'Private colleges' }
    ],
    topColleges: [
      { name: 'Institute of Hotel Management (IHMs)', location: 'Various' },
      { name: 'Welcomgroup Graduate School', location: 'Manipal' },
      { name: 'Christ University', location: 'Bangalore' },
      { name: 'Oberoi Centre of Learning', location: 'Delhi' },
      { name: 'Institute of Hotel Management, Catering & Nutrition', location: 'Pusa, Delhi' }
    ],
    expectedSalary: { min: 2, max: 12, unit: 'LPA' },
    faqs: [
      { q: 'Is hotel management a good career?', a: 'Yes, with tourism growth and international hotel chains entering India, there are excellent opportunities for growth.' },
      { q: 'Can I work abroad after hotel management?', a: 'Yes, hospitality skills are globally applicable. Many Indian hotel management graduates work in Middle East, Europe, and cruise ships.' },
      { q: 'What are the working hours?', a: 'Hospitality involves shifts including weekends. It requires flexibility but offers exciting work environment.' }
    ]
  },
  {
    id: 'aviation',
    name: 'Aviation Courses (Pilot Training, B.Sc Aviation)',
    shortName: 'Aviation',
    icon: 'Plane',
    color: '#0891B2',
    overview: 'Aviation courses prepare students for careers in the aviation industry including piloting, aircraft maintenance, and airport management. It requires discipline, physical fitness, and technical aptitude.',
    duration: '1-3 Years (varies by course)',
    eligibility: '10+2 with MPC and minimum 50% marks. For commercial pilot: Physics & Math mandatory. Medical fitness required.',
    subjects: [
      'Aviation Science',
      'Air Navigation',
      'Meteorology',
      'Air Regulations',
      'Aviation Security',
      'Aircraft Technical',
      'Communication & Radio Telephony'
    ],
    skillsRequired: [
      'Physical fitness',
      'Mental alertness',
      'Quick decision making',
      'Communication skills',
      'Technical aptitude',
      'Discipline & patience'
    ],
    careerOpportunities: [
      'Commercial Pilot',
      'Co-Pilot',
      'Flight Instructor',
      'Aircraft Maintenance Engineer',
      'Air Traffic Controller',
      'Airport Manager',
      'Cabin Crew'
    ],
    higherStudies: [
      'Advanced Pilot Ratings',
      'M.Sc Aviation',
      'MBA in Aviation Management',
      'Type Ratings for specific aircraft'
    ],
    entranceExams: [
      { name: 'IGRUA Entrance', purpose: 'Indira Gandhi Rashtriya Uran Akademi' },
      { name: 'Institute-specific exams', purpose: 'Flying schools' }
    ],
    topColleges: [
      { name: 'Indira Gandhi Rashtriya Uran Akademi', location: 'Fursatganj' },
      { name: 'National Flying Training Institute', location: 'Gondia' },
      { name: 'Bombay Flying Club', location: 'Mumbai' },
      { name: 'Govt Flying Training School', location: 'Bangalore' },
      { name: 'Rajiv Gandhi Aviation Academy', location: 'Hyderabad' }
    ],
    expectedSalary: { min: 10, max: 80, unit: 'LPA' },
    faqs: [
      { q: 'How expensive is pilot training?', a: 'Commercial pilot training costs Rs 25-50 lakhs. Scholarships and bank loans are available.' },
      { q: 'Is aviation job stressful?', a: 'It can be demanding with irregular hours but offers excellent pay, travel opportunities, and job satisfaction.' },
      { q: 'What about cabin crew career?', a: 'Cabin crew (air hostess/steward) can join after 12th with good communication skills and pleasing personality.' }
    ]
  },
  {
    id: 'design',
    name: 'Design Courses (B.Des, BFA, Fashion Design)',
    shortName: 'Design',
    icon: 'Palette',
    color: '#DB2777',
    overview: 'Design courses develop creative skills in various fields like fashion, interior, product, graphic, and communication design. It\'s perfect for students with artistic flair and creative thinking.',
    duration: '4 Years',
    eligibility: '10+2 in any stream with minimum 50% marks. Portfolio/aptitude test may be required.',
    subjects: [
      'Design Fundamentals',
      'Visual Communication',
      'Product Design',
      'Fashion Design',
      'UI/UX Design',
      'Animation',
      'Design History'
    ],
    skillsRequired: [
      'Creativity',
      'Visual thinking',
      'Drawing skills',
      'Software proficiency',
      'Portfolio development',
      'Communication of ideas'
    ],
    careerOpportunities: [
      'Fashion Designer',
      'Graphic Designer',
      'UI/UX Designer',
      'Interior Designer',
      'Product Designer',
      'Animation Artist',
      'Art Director'
    ],
    higherStudies: [
      'M.Des (Master of Design)',
      'Specialized PG Diplomas',
      'International programs',
      'Research in Design'
    ],
    entranceExams: [
      { name: 'NIFT Entrance', purpose: 'NIFT Institutes' },
      { name: 'NID Entrance', purpose: 'National Institute of Design' },
      { name: 'UCEED', purpose: 'IIT Design (B.Des)' },
      { name: 'CEED', purpose: 'IIT Design (M.Des)' }
    ],
    topColleges: [
      { name: 'National Institute of Design', location: 'Ahmedabad' },
      { name: 'National Institute of Fashion Technology', location: 'Various' },
      { name: 'IIT Bombay (IDC)', location: 'Mumbai' },
      { name: 'Pearl Academy', location: 'Delhi, Mumbai' },
      { name: 'Srishti School of Art, Design & Technology', location: 'Bangalore' }
    ],
    expectedSalary: { min: 3, max: 20, unit: 'LPA' },
    faqs: [
      { q: 'Do I need drawing skills for design?', a: 'Basic drawing helps, but design thinking and creativity are more important. Digital tools can compensate for manual skills.' },
      { q: 'Is design a good career?', a: 'Yes, with growth in digital media, startups, and creative industries, designers are in high demand.' },
      { q: 'What is the difference between fine arts and design?', a: 'Fine Arts is about self-expression. Design is about solving user problems effectively.' }
    ]
  },
  {
    id: 'other-courses',
    name: 'Other Degree Courses',
    shortName: 'Other Courses',
    icon: 'GraduationCap',
    color: '#6B7280',
    overview: 'Various other specialized undergraduate courses are available for specific career paths including paramedical, allied health, education, fine arts, and specialized professional programs.',
    duration: '3-4 Years (varies)',
    eligibility: '10+2 in relevant stream with minimum 45-50% marks. Course-specific requirements apply.',
    subjects: [
      'Course-specific subjects',
      'Practical Training',
      'Industry exposure',
      'Project work'
    ],
    skillsRequired: [
      'Interest in chosen field',
      'Dedication',
      'Continuous learning'
    ],
    careerOpportunities: [
      'Various professional roles',
      'Self-employment',
      'Higher education',
      'Research'
    ],
    higherStudies: [
      'Master\'s programs',
      'Specialized certifications',
      'Research programs'
    ],
    entranceExams: [
      { name: 'Course-specific exams', purpose: 'Admissions' }
    ],
    topColleges: [
      { name: 'Specialized institutions', location: 'Various' },
      { name: 'State universities', location: 'Various' }
    ],
    expectedSalary: { min: 2, max: 10, unit: 'LPA' },
    faqs: [
      { q: 'What other courses can I consider?', a: 'BPT (Physiotherapy), B.Sc Nursing, B.Ed (Teaching), BFA (Fine Arts), Bachelor in Social Work, BHM (Home Science), and many more.' },
      { q: 'Are these courses valuable?', a: 'Yes, each course has its niche and career opportunities. Research job prospects before choosing.' },
      { q: 'How to choose the right course?', a: 'Consider your interests, strengths, career goals, and job market when selecting any course.' }
    ]
  }
];
