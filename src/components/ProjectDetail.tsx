import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Star, Code2 } from "lucide-react";
import slms from "../assets/slms.png";
import vm from "../assets/vaccine.png";
import foodshop from "../assets/cookieshia.png";
import "./CSS/detail.css";
import { yellow } from "@mui/material/colors";

interface Project {
    id: number;
    projectId: string;
    projectName: string;
    projectTeam: number;
    totalTech: number;
    keyFeatureCount: number;
    keyFeatures: string[];
    shortDescription: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        projectId: "slms",
        projectName: "Social Listening & Monitoring System",
        projectTeam: 5,
        totalTech: 6,
        keyFeatureCount: 7,
        keyFeatures: [
            "Crawl Post",
            "Sentiment analysis",
            "Monitoring & export reports",
            "Media effect summary",
            "User management",
            "System storage management",
            "API management",
        ],
        shortDescription: "AI-powered system for monitoring social sentiment across platforms.",
        description: "An application for social listening and monitoring that collects data from social media platforms and leverages AI to evaluate sentiment. Built with a microservices architecture using .NET Core, React, Kafka, and Redis.",
        tech: [".NET Core", "React", "TypeScript", "SQL Server", "Kafka", "Redis"],
        github: "#",
        demo: "#",
        image: slms,
    },
    {
        id: 2,
        projectId: "vaccine-management-system",
        projectName: "Vaccine Management System",
        projectTeam: 1,
        totalTech: 2,
        keyFeatureCount: 6,
        keyFeatures: [
            "Vaccine Management",
            "Vaccination scheduling",
            "User management",
            "Admin dashboard",
            "View Vaccination History",
            "Register Vaccine Schedule",
        ],
        shortDescription: "System for managing vaccination schedules at healthcare centers.",
        description: "A vaccine management system for healthcare centers that helps schedule vaccinations for citizens. The application is built with .NET Core, featuring a Razor Pages web app for users and a WinForms application for admins and employees.",
        tech: [".NET Core", "SQL Server"],
        github: "#",
        demo: "#",
        image: vm,
    },
    {
        id: 3,
        projectId: "cookieshia",
        projectName: "Cookieshia - Food & Beverage E-commerce",
        projectTeam: 1,
        totalTech: 4,
        keyFeatureCount: 5,
        keyFeatures: [
            "Product Catalog",
            "Shopping Cart",
            "Checkout Process",
            "User Authentication",
            "Order Management",
        ],
        shortDescription: "An e-commerce platform for selling beverages and cookies.",
        description: "An online store for selling beverages and cookies, providing core e-commerce features such as shopping cart, checkout, and management. Developed with .NET Core and React.",
        tech: [".NET Core", "React", "JavaScript", "SQL Server"],
        github: "#",
        demo: "#",
        image: foodshop,
    },
];

export default function ProjectDetail() {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const project = projects.find((p) => p.projectId === id);

    if (!project) return <h2>Project not found</h2>;

    return (
        <div className="project-detail-container">
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <Link to="/" className="back-link">
                    <ArrowLeft size={18} /> Back
                </Link>
                <span>/</span>
                <span>{project.projectName}</span>
            </div>

            {/* Header */}
            <div className="detail-header">
                <div className="detail-info">
                    <h1>{project.projectName}</h1>
                    <p className="short-desc">{project.description}</p>
                    <div className="stats">
                        <div className="stat-card">
                            <Code2 size={20} />
                            <span>{project.totalTech} Technologies</span>
                        </div>
                        <div className="stat-card">
                            <Star color="yellow" size={20} />
                            <span>{project.keyFeatureCount} Key Features</span>
                        </div>
                    </div>
                    <div className="links">
                        <span className="tooltip-wrapper">
                            <a href={project.demo}
                                className="btn primary disabled"
                                title="Live demo not available"
                                target="_blank"
                                rel="noreferrer">
                                <ExternalLink size={18} /> Live Demo
                            </a>
                            <span className="tooltip-text">Live demo not available</span>
                        </span>

                        <a href={project.github} className="btn secondary" target="_blank" rel="noreferrer">
                            <Github size={18} /> GitHub
                        </a>
                    </div>
                </div>
                <div className="detail-image">
                    <img src={project.image} alt={project.projectName} />
                </div>
            </div>

            {/* Technologies */}
            <div className="tech-section">
                <h2>Technologies Used</h2>
                <div className="tech-tags">
                    {project.tech.map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </div>
            </div>

            {/* Key Features */}
            <div className="feature-table">
                <h2>Key Features</h2>
                <div style={{ position: 'relative' }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '24px',
                        top: '24px',
                        bottom: '24px',
                        width: '2px',
                        background: 'linear-gradient(180deg, #4facfe, #00f2fe)',
                        borderRadius: '1px'
                    }}></div>

                    {project.keyFeatures.map((feature, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px',
                            marginBottom: i === project.keyFeatures.length - 1 ? 0 : '24px',
                            position: 'relative'
                        }}>
                            {/* Timeline dot */}
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                boxShadow: '0 0 20px rgba(79, 172, 254, 0.4)',
                                zIndex: 1,
                                flexShrink: 0
                            }}>
                                {i + 1}
                            </div>

                            {/* Feature content */}
                            <div style={{
                                flex: 1,
                                padding: '20px 24px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                color: '#e2e8f0',
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(79, 172, 254, 0.08)';
                                    e.currentTarget.style.borderColor = 'rgba(79, 172, 254, 0.3)';
                                    e.currentTarget.style.transform = 'translateX(8px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}>
                                {feature}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
