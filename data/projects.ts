import { Eye, Cpu, TrendingUp } from "lucide-react";

export const projects = [
  {
    title: "SpinVision",
    subtitle: "Deep Learning Analysis of Spin Bowling Technique",
    description: "AI-powered system analysing left-arm spin bowling using deep learning pose estimation and biomechanical feature extraction. Published MSc dissertation providing objective, real-time feedback on posture, alignment, and release mechanics.",
    tags: ["Computer Vision", "Pose Estimation", "Deep Neural Networks", "Sports Analytics"],
    metrics: [
      { label: "Custom Dataset Creation", icon: Eye },
      { label: "CNN Classification Model", icon: Cpu },
      { label: "Real-time Inference", icon: TrendingUp },
    ],
    gradient: "from-gold/20 to-gold/5",
    borderColor: "border-gold/30 hover:border-gold",
  },
  {
    title: "Wicket Keeper Coach",
    subtitle: "AI Analysis of Wicket-Keeping Technique",
    description: "Deep learning system evaluating wicket-keeping technique using pose estimation and action classification. Published research paper demonstrating temporal modelling and CNN-based technique scoring.",
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
