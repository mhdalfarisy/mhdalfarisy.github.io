const logotext = "Hi! i'm Faris";
const meta = {
    title: "Muhammad Al-farisy",
    description: "I’m Muhammad Al-farisy, a Data Analyst Engineer and Power BI Specialist.",
};

const introdata = {
    title: "I’m Muhammad Al-farisy",
    animated: {
        first: "Data Analyst Engineer",
        second: "Power BI Developer",
        third: "Data Warehouse Specialist",
    },
    description: "Expert in DAX Power BI and Data Warehouse development. I specialize in building end-to-end ETL pipelines to Google BigQuery and developing robust data solutions using Python.",
    // your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d", 
    your_img_url: "https://raw.githubusercontent.com/mhdalfarisy/mhdalfarisy.github.io/main/src/assets/images/poto_profil.jpeg",    
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "As a Data Analyst Engineer, my daily focus involves monitoring and developing high-impact Power BI dashboards. I am highly proficient in DAX and have extensive experience in building data warehouses from diverse sources, including managing ETL processes to Google BigQuery using Python.",
};

// const worktimeline = [{
//         jobtitle: "Data Analyst Engineer",
//         where: "Current Company",
//         date: "2024",
//     },
//     {
//         jobtitle: "Data Analyst Specialist",
//         where: "Project",
//         date: "2023",
//     }
// ];

const worktimeline = [
    {
        jobtitle: "Data Analyst",
        company: "PT Merdeka Copper Gold Tbk",
        location: "South Jakarta, Indonesia",
        period: "Dec 2022 - Present",
        duration: "3 yrs 4 mos",
        details: [
            "Design, develop, and maintain interactive Power BI dashboards using DAX.",
            "Optimize ETL processes and data models for faster retrieval.",
            "Collaborate with IT and Programmer teams for data warehouse integration."
        ]
    },
    {
        jobtitle: "Data Analyst and Visualization (Seasonal)",
        company: "PT Adhi Commuter Properti Tbk",
        location: "Bogor, West Java",
        period: "Aug 2022 - Oct 2022",
        duration: "3 mos",
        details: [
            "Built Machine Learning models (Supervised & Unsupervised) for consumer analysis.",
            "Visualized sales and digital marketing insights using Tableau.",
            "Presented data-driven strategies to Project Directors and Marketing Managers."
        ]
    },
    {
        jobtitle: "Operations and Accounting",
        company: "Nectico (TaniHub Collaboration)",
        location: "South Jakarta, Indonesia",
        period: "Sep 2021 - Mar 2022",
        duration: "7 mos",
        details: [
            "Migrated and verified client accounting data into the Nectico System.",
            "Performed financial traceback and implemented PSAK ETAP standards.",
            "Conducted application training for cooperative members."
        ]
    },
    {
        jobtitle: "Technical Operations",
        company: "Nectico",
        location: "Bandung, West Java",
        period: "Jun 2021 - Sep 2021",
        duration: "4 mos",
        details: [
            "Mapped client business flows into the Accounting System.",
            "Created Financial Statements including Journals and General Ledgers.",
            "Presented end-to-end financial reports to Top Management."
        ]
    }
];

const skills = [{
        name: "Power BI & DAX",
        value: 95,
    },
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Google BigQuery",
        value: 85,
    },
    {
        name: "ETL / Data Warehousing",
        value: 85,
    },
    {
        name: "React / Javascript",
        value: 70,
    },
];

const services = [{
        title: "Power BI Development",
        description: "End-to-end dashboard creation, expert-level DAX optimization, and continuous monitoring for business insights.",
    },
    {
        title: "Data Warehousing & ETL",
        description: "Designing and maintaining data warehouses, including seamless data integration and ETL pipelines to Google BigQuery.",
    },
    {
        title: "Data Engineering with Python",
        description: "Utilizing Python for automated data processing, development of data infrastructures, and handling diverse data sources.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "P&L Dashboard Development using advanced DAX.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "ETL Pipeline automation to Google BigQuery.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Churn Analysis and Machine Learning Classification.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "m.alfarisy797@gmail.com", // Ganti dengan email aslimu
    // YOUR_FONE: "+628xxxxxx", // Ganti dengan nomor aslimu
    description: "I'm open for collaboration on data analytics, warehousing, or business intelligence projects. Let's talk!",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/mhdalfarisy",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/m-alfarisy97/",
    // twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};