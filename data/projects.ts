import { Eye, Cpu, TrendingUp } from "lucide-react";

export interface ProjectExtendedInfo {
  overview?: string;
  keyFeatures?: string[];
  techStack?: string[];
  technicalDetails?: string[];
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
      impact: [
        "Achieved strong classification accuracy on custom dataset",
        "Demonstrated consistent detection of biomechanical deviations",
        "Showed feasibility of real-time, camera-only technique analysis for cricket",
        "Validated through academic evaluation and peer feedback",
        "Published as 'SpinVision – Pose Estimation–based Deep Learning Analysis of Left-Arm Spin Bowling Technique'",
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
    title: "Wicket Keeper Coach",
    subtitle: "AI Analysis of Wicket-Keeping Technique",
    description: "Deep learning system evaluating wicket-keeping technique using pose estimation and action classification. Published research paper demonstrating temporal modelling and CNN-based technique scoring.",
    image: "/images/projects/wicketkeeper.jpg",
    extendedInfo: {
      overview: "An advanced AI system for analyzing and improving wicket-keeping technique through deep learning and pose estimation.",
      keyFeatures: [
        "Pose estimation for wicket-keeping stance and movement analysis",
        "CNN-based action classification for different keeping techniques",
        "Temporal modeling to track movement patterns over time",
        "Automated technique scoring and improvement recommendations"
      ],
      technicalDetails: [
        "Deep learning models for pose detection and classification",
        "Temporal sequence analysis for movement patterns",
        "Published research demonstrating novel approach to sports analytics"
      ],
      impact: [
        "Published research paper in sports analytics",
        "Demonstrated effectiveness in technique assessment",
        "Provided objective feedback for wicket-keeping coaching"
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
      overview: "Enterprise-grade forecasting platform that transforms retail operations through automated machine learning and real-time analytics.",
      keyFeatures: [
        "Automated ETL pipelines processing millions of transactions daily",
        "SKU-level and location-specific demand forecasting",
        "Real-time dashboards for inventory optimization",
        "Integration with existing retail management systems"
      ],
      technicalDetails: [
        "Built with Python, SQL, and cloud infrastructure",
        "Time series forecasting using advanced ML algorithms",
        "Scalable architecture handling enterprise data volumes",
        "Power Platform integration for business intelligence"
      ],
      impact: [
        "35% improvement in forecast accuracy",
        "Significant reduction in stockouts and overstock situations",
        "Streamlined inventory management processes",
        "Enhanced decision-making through real-time insights"
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
      overview: "Comprehensive claims management system for aviation insurance, streamlining the entire claims lifecycle from submission to settlement.",
      keyFeatures: [
        "End-to-end claims workflow automation",
        "Secure document management and audit trails",
        "API integrations with third-party systems",
        "Role-based access control and compliance tracking"
      ],
      technicalDetails: [
        "Built with modern web technologies and database systems",
        "RESTful API architecture for seamless integrations",
        "Comprehensive audit logging for regulatory compliance",
        "Scalable system architecture for high-volume processing"
      ],
      impact: [
        "30% reduction in claims processing time",
        "Improved compliance and audit trail visibility",
        "Enhanced stakeholder collaboration",
        "Reduced manual errors through automation"
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
