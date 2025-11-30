import { Eye, Cpu, TrendingUp } from "lucide-react";

export interface ProjectExtendedInfo {
  overview?: string;
  keyFeatures?: string[];
  techStack?: string[];
  technicalDetails?: string[];
  results?: string[];
  impact?: string[];
  challenges?: string[];
}

export const projects = [
  {
    title: "SpinVision",
    subtitle: "Deep Learning Analysis of Spin Bowling Technique",
    description: "AI-powered system analysing left-arm spin bowling using deep learning pose estimation and biomechanical feature extraction. Published MSc dissertation providing objective, real-time feedback on posture, alignment, and release mechanics.",
    image: "/images/projects/spinvision.jpg",
    endorsement: {
      title: "Supervisor Endorsement: SpinVision Project",
      quote: "Dr. Huang commended the project for its innovation, real-time performance, and solid deep-learning approach. He highlighted my ability to handle advanced machine-learning topics and deliver production-quality systems."
    },
    extendedInfo: {
      overview: "SpinVision is an AI-powered system that analyses left-arm spin bowling technique using deep-learning–based pose estimation and biomechanical feature extraction. Developed as part of my MSc dissertation at the University of Westminster and published on ResearchGate, SpinVision provides objective, real-time feedback on a bowler's posture, alignment, release mechanics, and follow-through. The system operates on standard video input and works without specialised hardware.",
      keyFeatures: [
        "Extracts joint landmarks from bowling video footage using deep-learning pose estimation",
        "Computes biomechanical angles and movement trajectories for comprehensive analysis",
        "Classifies technique quality using a custom deep neural network",
        "Generates quantitative feedback for players and coaches",
        "Frame-by-frame joint extraction with temporal smoothing for stable pose sequences",
        "Engineered biomechanical features: arm angle at gather and release, shoulder-hip alignment, angular velocity changes, stride length and foot placement, wrist rotation and release timing, follow-through posture metrics"
      ],
      techStack: [
        "Python",
        "TensorFlow/Keras",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Custom deep-learning pose estimation model"
      ],
      technicalDetails: [
        "Deep-learning pose estimation model extracting keypoints: shoulder, elbow, wrist, hip, knee, ankle",
        "Implemented temporal smoothing for stable pose sequences and normalised landmarks for consistent angle calculations",
        "Built CNN-driven classification model using TensorFlow/Keras with convolutional layers + pooling + dropout + dense layers",
        "Combined pose features + extracted angles as input, trained to classify and score technique quality",
        "Evaluation metrics: accuracy, precision, recall, confusion matrix, comparative analysis across multiple bowlers",
        "Stress-tested model under different lighting and camera angles"
      ],
      results: [
        "Published as 'SpinVision – Pose Estimation–based Deep Learning Analysis of Left-Arm Spin Bowling Technique'",
        "Achieved strong classification accuracy on custom dataset",
        "Demonstrated consistent detection of biomechanical deviations",
        "Showed feasibility of real-time, camera-only technique analysis for cricket",
        "Validated through academic evaluation and peer feedback"
      ],
      impact: [
        "Demonstrates real applied AI engineering: custom dataset creation, pose estimation + DNN, biomechanical modelling, real-time inference, sports-tech domain expertise",
        "Highlights ability to build end-to-end computer vision systems with deep learning, domain logic, and evaluation"
      ],
      challenges: [
        "Problem: Coaching spin bowling relies heavily on subjective judgment with limited, inconsistent feedback",
        "Biomechanical analysis was usually only available to elite-level athletes",
        "No existing dataset or automated technique analysis system specifically for left-arm spin bowling",
        "Solution: Built full computer-vision pipeline for automated technique analysis accessible to all skill levels",
        "Documented limitations: occlusions, single-person constraint, angle sensitivity"
      ]
    },
    tags: ["Computer Vision", "Pose Estimation", "Deep Neural Networks", "Sports Analytics"],
    metrics: [
      { label: "Custom Data set", icon: Eye },
      { label: "Custom CNN classification model", icon: Cpu },
      { label: "Real time analytics", icon: TrendingUp },
    ],
    gradient: "from-gold/20 to-gold/5",
    borderColor: "border-gold/30 hover:border-gold",
  },
  {
    title: "The Wicket Keep Coach",
    subtitle: "AI Analysis of Wicket-Keeping Technique",
    description: "Deep learning system evaluating wicket-keeping technique using pose estimation and action classification. Published research paper demonstrating temporal modelling and CNN-based technique scoring.",
    image: "/images/projects/wicketkeeper.jpg",
    extendedInfo: {
      overview: "Wicket Keeper Coach is a deep-learning–based system designed to evaluate wicket-keeping technique from video footage using pose estimation and action classification. The work is supported by my published research paper 'Wicket Keeping Technique Analysis with Deep Neural Networks and Pose Estimations' (ResearchGate, 2022).",
      keyFeatures: [
        "Extracts pose landmarks from video sequences",
        "Processes temporal pose patterns",
        "Classifies technique quality using a CNN-based model",
        "Provides real-time feedback on footwork, glove mechanics & reaction timing"
      ],
      techStack: [
        "Python",
        "TensorFlow/Keras",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "CNN + temporal modelling"
      ],
      technicalDetails: [
        "Custom Dataset Creation: Collected wicket-keeping footage manually, annotated frames for action phases, applied data augmentation (rotations, noise, shearing), normalised and resized images for efficient training",
        "Pose Extraction: Deep learning pose model to extract full-body keypoints, landmark smoothing to reduce jitter, extracted 2D coordinates for temporal pattern analysis",
        "Temporal Feature Engineering: Lateral movement timing, foot-split angle, glove height & alignment, reaction-delay frames, weight-shift patterns, body centering during take",
        "CNN-Based Technique Classifier: Built a CNN with convolution + pooling + dropout layers, added fully connected layers for final classification, trained on augmented wicket-keeping dataset, evaluated using accuracy, confusion matrix, error analysis",
        "Real-Time Inference Pipeline: Frame extraction → pose → feature computation → classification, designed for practical feedback during training sessions"
      ],
      results: [
        "Achieved high classification performance on technique categories",
        "Successfully differentiated good vs poor technique patterns",
        "Delivered consistent pose estimation for wicket-keeping actions",
        "Identified key biomechanical deviations (glove misalignment, slow footwork, etc.)",
        "Published as an extended abstract on ResearchGate"
      ],
      impact: [
        "Demonstrates ability to build action-recognition systems",
        "Pose estimation + CNN classification integration",
        "Custom data engineering",
        "Real-world sports analytics application",
        "Temporal modelling of human motion"
      ],
      challenges: [
        "Problem: Wicket-keeping is one of the most difficult skills in cricket. Proper footwork, glove positioning, reaction timing, and lateral movement are essential — but coaching feedback is mostly manual and subjective.",
        "No dataset and no automated technique analysis tool specifically for wicket-keeping.",
        "Solution: Developed a computer-vision system that extracts pose landmarks from video sequences, processes temporal pose patterns, classifies technique quality using a CNN-based model, and provides real-time feedback on footwork, glove mechanics & reaction timing."
      ]
    },
    tags: ["Pose Estimation", "CNN Classification", "Temporal Modelling"],
    metrics: [
      { label: "Pose Landmarks Extraction", icon: Eye },
      { label: "Action Recognition", icon: Cpu },
      { label: "Technique Scoring", icon: TrendingUp },
    ],
    gradient: "from-red-primary/20 to-red-primary/5",
    borderColor: "border-red-primary/30 hover:border-red-primary",
  },
  {
    title: "Retail Forecasting Platform",
    subtitle: "ML-Powered Demand Forecasting",
    description: "End-to-end ML forecasting platform automating ETL, running predictive models for every SKU/location, and delivering real-time insights. Achieved 35% improvement in forecast accuracy and significant stockout reduction.",
    image: "/images/projects/retail-forecasting.jpg",
    extendedInfo: {
      overview: "I built and deployed an end-to-end ML forecasting platform for a global retail brand, designed to improve demand accuracy, reduce stockouts, and provide near real-time visibility across their supply chain. The system automated data ingestion, transformation, forecasting, and reporting, replacing a previously manual, error-prone workflow. This project delivered a 35% improvement in forecast accuracy and helped reduce stockouts by enabling proactive replenishment decisions.",
      keyFeatures: [
        "Automates ETL pipelines with Python + SQL",
        "Cleans and transforms raw retail data",
        "Runs ML forecasting models for every SKU/location",
        "Generates real-time insights via dashboards",
        "Deploys to cloud infrastructure with secure access",
        "Feeds insights into downstream planning workflows"
      ],
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Prophet",
        "SQL Server",
        "Azure Functions",
        "Azure Data Storage",
        "Power BI",
        "Git"
      ],
      technicalDetails: [
        "Data Engineering & ETL: Automated ingestion of sales and inventory data, built SQL transformation scripts for aggregation, feature extraction, and anomaly handling, scheduled data refresh pipelines to run multiple times daily, implemented validation checks to flag missing or inconsistent data, reduced manual reporting work by 40%",
        "ML Forecasting Pipeline: Implemented ML models (ARIMA/SARIMA, Prophet, Gradient-boosted regressors for complex SKUs), performed feature engineering, seasonal decomposition, holiday effects, SKU-level hyperparameter tuning, delivered consistent accuracy improvements across SKUs and regions",
        "Deployment & Integration: Packaged forecasting models into scheduled Python workloads, deployed pipelines via cloud functions and storage, integrated outputs with BI dashboards for real-time insights, ensured full compliance with governance and audit requirements"
      ],
      results: [
        "35% improvement in SKU-level forecast accuracy",
        "Significant reduction in stockouts across multiple regions",
        "Zero manual intervention required — fully automated",
        "End-to-end processing time reduced from hours to minutes",
        "Provided unified visibility across merchandising, supply chain, and finance"
      ],
      impact: [
        "Shows ability to build scalable ML systems",
        "Automate ETL and deploy forecasting pipelines",
        "Integrate analytics into enterprise workflows",
        "Essential capabilities for AI Engineer and Data Scientist roles"
      ],
      challenges: [
        "Problem: The client relied on manual spreadsheets and static reporting to track inventory and demand trends. Forecasting was inconsistent, lacked automation, and offered no scalability. Stockouts and overstocking were frequent due to poor visibility into historical trends and seasonal demand patterns.",
        "The business needed: A forecasting engine, automated ETL, real-time dashboards, auditability + governance, a scalable pipeline, zero dependency on ad-hoc manual work",
        "Solution: Designed a modular forecasting platform that automates ETL pipelines, cleans and transforms raw retail data, runs ML forecasting models for every SKU/location, generates real-time insights via dashboards, deploys to cloud infrastructure with secure access, and feeds insights into downstream planning workflows"
      ]
    },
    tags: ["Time Series", "ML Engineering", "ETL Automation", "Cloud Integration"],
    metrics: [
      { label: "Automated ETL Pipelines", icon: Cpu },
      { label: "35% Accuracy Boost", icon: TrendingUp },
      { label: "Real-time Dashboards", icon: Eye },
    ],
    gradient: "from-gold/20 to-red-primary/10",
    borderColor: "border-gold/30 hover:border-gold",
  },
  {
    title: "Claims Management System",
    subtitle: "Aviation Insurance Platform",
    description: "High-throughput claims management application unifying the full lifecycle with secure workflows, API integrations, and audit trails. Reduced processing time by 30% while improving compliance.",
    image: "/images/projects/claims-management.jpg",
    extendedInfo: {
      overview: "I developed a high-throughput claims management application for an aviation insurance provider. The system unified the full claims lifecycle — submission, validation, documentation, approval workflows, and audit trails — while enforcing strict security, governance, and compliance standards. The platform reduced claims processing time by 30%, increased case transparency, and improved regulatory compliance.",
      keyFeatures: [
        "Structured data models",
        "Automated workflow logic",
        "API integrations",
        "Audit trails",
        "Role-based access control",
        "Document validation and storage",
        "Real-time status tracking"
      ],
      techStack: [
        "Power Apps (Canvas + Model-driven)",
        "Dataverse",
        "Power Automate",
        "Azure SQL",
        "Azure Blob Storage",
        "REST APIs",
        "React (SPFx)",
        "Power BI"
      ],
      technicalDetails: [
        "System Architecture & Data Model: Designed relational data models in Dataverse, built entities for claims, documents, communications, adjusters, audit logs, ensured compliance with data retention and governance rules",
        "Workflow & Automation: Automated claims routing based on category, severity, and SLA, integrated approval workflows with notifications and escalations, added fraud and anomaly flags based on business logic",
        "Integrations: Connected the claims platform to CRM systems using REST APIs, integrated Azure storage for document handling, automated data syncs to analytics dashboards",
        "UX & Efficiency: Built a clean, guided claims submission interface, added dynamic forms, conditional logic, and validation rules, ensured adjusters had full visibility into case progression"
      ],
      results: [
        "Claims processing cycle reduced by 30%",
        "Dramatically improved transparency for analysts and adjusters",
        "Full auditability ensured compliance with aviation regulation standards",
        "Reduced manual errors in claims and documentation handling"
      ],
      impact: [
        "Demonstrates ability to design enterprise-grade systems",
        "Integrate APIs and build workflow engines",
        "Deliver secure mission-critical applications"
      ],
      challenges: [
        "Problem: The client's claims handling involved email-based submissions, manual routing, data inconsistencies, slow validation, no central audit logs, and high compliance risks",
        "They needed a digital platform that: centralised claims, enforced secure data flows, automated routing & approvals, integrated with CRM and APIs, enabled structured reporting, reduced turnaround time",
        "Solution: Designed and delivered a scalable, secure claims platform with structured data models, automated workflow logic, API integrations, audit trails, role-based access control, document validation and storage, and real-time status tracking"
      ]
    },
    tags: ["System Architecture", "Automation", "Data Engineering", "Secure Workflows"],
    metrics: [
      { label: "Automated Workflows", icon: Cpu },
      { label: "30% Faster Processing", icon: TrendingUp },
      { label: "Full Auditability", icon: Eye },
    ],
    gradient: "from-gold/15 to-gold/5",
    borderColor: "border-gold/30 hover:border-gold",
  },
  {
    title: "Master Data Governance",
    subtitle: "Aviation Insurance MDM",
    description: "MDM framework unifying customer and policy data with intelligent deduplication using fuzzy matching. Eliminated 40% of duplicate records and strengthened cross-department data integrity.",
    image: "/images/projects/mdm-governance.jpg",
    extendedInfo: {
      overview: "Enterprise master data management framework ensuring data quality and consistency across aviation insurance operations.",
      keyFeatures: [
        "Intelligent fuzzy matching for duplicate detection",
        "Centralized customer and policy data management",
        "Cross-department data synchronization",
        "Data quality monitoring and reporting"
      ],
      technicalDetails: [
        "Advanced fuzzy matching algorithms for deduplication",
        "SQL-based data governance framework",
        "Integration with multiple data sources",
        "Automated data quality checks and validation"
      ],
      impact: [
        "40% reduction in duplicate records",
        "Improved data integrity across departments",
        "Enhanced customer view and policy management",
        "Reduced operational costs through better data quality"
      ]
    },
    tags: ["Data Governance", "Deduplication", "Data Quality", "MDM Architecture"],
    metrics: [
      { label: "Fuzzy Matching Engine", icon: Cpu },
      { label: "40% Duplicates Removed", icon: TrendingUp },
      { label: "Centralized Governance", icon: Eye },
    ],
    gradient: "from-red-primary/15 to-red-primary/5",
    borderColor: "border-red-primary/30 hover:border-red-primary",
  },
];
