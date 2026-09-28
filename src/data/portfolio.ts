export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  category: string;
  tools: string[];
  status: string;
  link?: string;
  period?: string;
  description: string;
  details: string[];
  metrics?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  provider?: string;
  year?: string;
  id?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  note?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  certifications: Certification[];
  education: Education[];
  languages: string[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Raj Srivastava",
    title: "Business Analytics | Data & Business Intelligence",
    location: "Noida, India",
    phone: "+91 8765280075",
    email: "rajsrivastavariz@gmail.com",
    linkedin: "https://linkedin.com/in/raj-srivastava-9865132a7",

    summary:
      "Detail-oriented PGDM (Business Analytics) student with hands-on experience in market research and a year of full-time work as a Marketing Analyst in real estate. Skilled in Excel-based sales and financial analysis, Power BI and Tableau reporting, SQL and data-driven problem solving. Proficient in transforming raw datasets into meaningful insights using Advanced Excel, Power Query, Power Pivot, and interactive dashboards.",
  },

  experience: [
    {
      role: "Market Research Intern",
      company: "Kantar (IMRB)",
      location: "New Delhi",
      period: "May 2026 – July 2026",
      description: [
        "Worked on live market research and data-acquisition projects.",
        "Worked on Project Google Search-Pre and Post Wave.",
        "Worked on Sellers-2026 Brand Health Tracker Wave 2.",
        "Gained exposure to survey design, sampling, and data quality checks.",
        "Completed project milestones on time with quality.",
      ],
    },

    {
      role: "Marketing Analyst",
      company: "Invest 2 Realty",
      location: "Noida, U.P.",
      period: "May 2024 – May 2025",
      description: [
        "Generated real estate leads through field visits and client engagement.",
        "Maintained structured Excel databases to track pipeline, follow-ups, and conversions.",
        "Used Excel Pivot Tables and Power Query for data cleaning and reporting.",
        "Worked on pipeline reporting.",
        "Delivered client presentations and coordinated with internal teams.",
        "Gained insights into market dynamics and data-driven sales strategies.",
      ],
    },
  ],

  projects: [
    {
      title: "Sales & Financial Analysis – AtliQ Hardwares",
      category: "Business Analytics",
      tools: ["Excel", "Power Query", "Power Pivot"],
      status: "Completed",
      link: "https://lnkd.in/p/dYtWXajG",
      description:
        "Sales and financial analysis project using a large business dataset to develop structured analysis and interactive dashboards.",
      details: [
        "Analyzed 100,000+ rows of sales and financial data.",
        "Cleaned datasets using Power Query.",
        "Performed P&L analysis covering Net Sales, COGS, and Gross Margin.",
        "Analyzed monthly, quarterly, and yearly performance.",
        "Built 4+ interactive Excel dashboards.",
        "Used Power Pivot for analysis.",
        "Tracked 10+ KPIs.",
        "Analyzed revenue trends, product performance, GM%, and regional sales.",
      ],
      metrics: ["100,000+ Rows", "4+ Dashboards", "10+ KPIs"],
    },

    {
      title: "Business Intelligence Dashboard – AtliQ Hardwares",
      category: "Business Intelligence",
      tools: ["Power BI", "DAX", "Data Modeling"],
      status: "Ongoing",
      link: "https://lnkd.in/p/drS63a7a",
      description:
        "Recreating AtliQ Hardwares sales and financial analysis in Power BI to build end-to-end BI reporting capability.",
      details: [
        "Building interactive Power BI dashboards.",
        "Creating DAX measures.",
        "Tracking sales performance.",
        "Analyzing regional trends.",
        "Tracking business KPIs.",
      ],
    },

    {
      title: "Deloitte Australia – Data Analytics Job Simulation",
      category: "Data Analytics",
      tools: ["Data Analysis", "Business Analytics"],
      status: "Completed",
      period: "December 2025",
      description:
        "Data analytics job simulation focused on business datasets and forensic investigation.",
      details: [
        "Analyzed business datasets.",
        "Identified patterns.",
        "Identified risks and irregularities.",
        "Worked in a forensic investigation context.",
      ],
    },
  ],

  skills: [
    {
      category: "Business Intelligence",
      skills: [
        "Power BI",
        "Tableau",
        "KPI Tracking",
        "Business Intelligence Reporting",
        "Stakeholder Reporting",
      ],
    },

    {
      category: "Data Analysis",
      skills: [
        "Advanced Excel",
        "Pivot Tables",
        "VLOOKUP",
        "Power Query",
        "Power Pivot",
        "SQL",
        "Python (Basic)",
      ],
    },

    {
      category: "Business Analytics",
      skills: [
        "Sales & Financial Analysis",
        "Data Cleaning & Transformation",
        "Statistical Analysis",
        "ETL Concepts",
      ],
    },
  ],

  certifications: [
    {
      name: "Microsoft Power BI – Skill Course",
      year: "2025",
      id: "SC-7C0802CD50",
    },

    {
      name: "Microsoft Excel with AI Masterclass – Skill Course",
      year: "2025",
      id: "SC-F8FBE8E201",
    },

    {
      name: "SQL Course – Skill Course",
      year: "2026",
      id: "SC-8C29859889",
    },

    {
      name: "Business Intelligence – 6-Day Training",
      provider: "IBI × ECell IIM Bangalore & MakeIntern",
      year: "July 2025",
    },

    {
      name: "Entrepreneurship – 6-Day Training Program",
      provider: "IBI × MakeIntern",
      year: "July 2025",
    },
  ],

  education: [
    {
      degree: "PGDM – Business Analytics & Marketing",
      institution: "I Business Institute",
      period: "2025 – 2027",
      status: "Expected",
      note: "AICTE Approved",
    },

    {
      degree: "B.Sc Mathematics",
      institution: "VBSPU, Uttar Pradesh",
      period: "2021 – 2024",
      status: "Completed",
    },
  ],

  languages: ["English", "Hindi"],
};