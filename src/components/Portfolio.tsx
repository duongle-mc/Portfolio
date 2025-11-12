import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { BookOutlined, ExportOutlined, MailOutlined } from "@ant-design/icons";
import { FaJava, FaReact } from "react-icons/fa";
import { SiApachekafka, SiCss3, SiDotnet, SiHtml5, SiJavascript, SiMysql, SiRedis, SiUnity } from "react-icons/si";

import mainAvatar from "../assets/main.jpg";
import slms from "../assets/slms.png";
import vm from "../assets/vaccine.png";
import foodshop from "../assets/cookieshia.png";
import cvFile from "../../public/net_cv.pdf";
import AutoTypeText from "../services/AutoTypeText";
import { useNavigate } from "react-router-dom";

interface PortfolioProps {
    sections: React.MutableRefObject<{ [key: string]: HTMLElement | null }>;
    scrollToSection: (id: string) => void;
}

export default function Portfolio({ sections, scrollToSection }: PortfolioProps) {
    const navigate = useNavigate();

    const skills = [
        { name: ".NET", icon: SiDotnet, color: "#512BD4" },
        { name: "Java", icon: FaJava, color: "#f89820" },
        { name: "HTML", icon: SiHtml5, color: "#e34c26" },
        { name: "CSS", icon: SiCss3, color: "#1d9de2" },
        { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
        { name: "React", icon: FaReact, color: "#61dafb" },
        { name: "Kafka", icon: SiApachekafka, color: "#231f20" },
        { name: "Redis", icon: SiRedis, color: "#d82c20" },
        { name: "Unity", icon: SiUnity, color: "#000000" },
        { name: "SQL", icon: SiMysql, color: "#077fbb" },
    ];

    const projects = [
        {
            id: 1,
            projectId: "slms",
            projectName: "Social Listening & Monitoring System",
            projectTeam: 5,
            totalTech: 6,
            keyFeatureCount: 7,
            keyFeatures: ["Crawl Post", "Sentiment analysis", "Monitoring & export reports", "Media effect summary", "User mangement", "System storage management", "API management"],
            shortDescription: "AI-powered system for monitoring social sentiment across platforms.",
            description: "Full description here...",
            tech: [".NET Core", "React", "TypeScript", "SQL Server", "Kafka", "Redis"],
            github: "https://gitlab.com/sep490_g45",
            demo: "https://social-listening-system-v2.vercel.app",
            image: slms,
        },
        {
            id: 2,
            projectId: "vaccine-management-system",
            projectName: "Vaccine Management System",
            projectTeam: 1,
            totalTech: 2,
            keyFeatureCount: 6,
            keyFeatures: ["Vaccine Management", "Vaccination scheduling", "User management", "Admin dashboard", "View Vaccination History, Register Vaccine Schedule"],
            shortDescription: "System for managing vaccination schedules at healthcare centers.",
            description:
                "A vaccine management system for healthcare centers that helps schedule vaccinations for citizens. The application is built with .NET Core, featuring a Razor Pages web app for users and a WinForms application for admins and employees.",
            tech: [".NET Core", "SQL Server"],
            github: "#",
            demo: "#",
            image: vm,
        },
        {
            id: 3,
            projectId: "cookieshia",
            projectName: "Cookieshia - Food & Beverage E-commerce System",
            projectTeam: 1,
            totalTech: 4,
            keyFeatureCount: 5,
            keyFeatures: ["Product Catalog", "Shopping Cart", "Checkout Process", "User Authentication", "Order Management"],
            shortDescription: "An e-commerce platform for selling beverages and cookies.",
            description:
                "An online store for selling beverages and cookies, providing core e-commerce features such as shopping cart, checkout, and management. Developed with .NET Core and React.",
            tech: [".NET Core", "React", "JavaScript", "SQL Server"],
            github: "#",
            demo: "#",
            image: foodshop,
        },
    ];

    return (
        <div className="portfolio">
            {/* Hero Section */}
            <section
                id="home"
                ref={(el) => { sections.current.home = el; }}
                className="hero"
            >
                <div className="hero-content">
                    <div className="avatar-container">
                        <div className="avatar">
                            <img src={mainAvatar} alt="Lê Khải Dương" />
                        </div>
                        <div className="avatar-glow"></div>
                    </div>
                    <h1>
                        <span className="highlight">.NET</span> Developer
                    </h1>
                    <AutoTypeText />
                    <div>Advancing digital experiences that are smooth, scalable, and made to impress.</div>
                    <div className="btn-group">
                        <button className="btn primary" onClick={() => scrollToSection("projects")}>
                            <div className="light-text">
                                Projects <ExportOutlined />
                            </div>
                        </button>
                        <button className="btn secondary" onClick={() => scrollToSection("contact")}>
                            <div className="light-text">
                                Contact <MailOutlined />
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* About */}
            <section
                id="about"
                ref={(el) => { sections.current.about = el; }}
                className="about section"
            >
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-content">
                        <p style={{ textAlign: "justify" }}>
                            Hey there! I’m Lê Khải Dương — a Software Engineer and <span className="dotnet">.NET</span> Developer who
                            just graduated in September 2025.<br />
                            I love turning ideas into scalable, well-structured applications. My strongest skills are in{" "}
                            <span className="dotnet">.NET</span>, but I also enjoy experimenting with &nbsp;
                            <span className="react">React</span>, &nbsp;<span className="java">Java</span>, &nbsp;
                            <span className="redis">Redis</span>, and <span className="kafka">Kafka</span> to keep pushing my
                            boundaries.<br />
                            What drives me is{" "}
                            <span style={{ fontWeight: 700 }}>
                                curiosity, problem-solving, and the excitement of learning something new every day
                            </span>
                            . My goal is to grow as a Backend and Full-stack Developer, and one day create solutions that not only
                            work, but inspire.
                        </p>
                    </div>
                    <div className="about-emoji">
                        <div className="emoji-container">💻</div>
                        <div className="floating-elements">
                            <div className="floating-element">🚀</div>
                            <div className="floating-element">⚡</div>
                            <div className="floating-element">🔧</div>
                        </div>
                    </div>
                </div>
                <div className="btn-group">
                    <a href={cvFile} download="LeKhaiDuong_CV.pdf" className="btn medium-btn">
                        <div className="medium-text">
                            <BookOutlined /> Download CV
                        </div>
                    </a>
                </div>
            </section>

            {/* Skills */}
            <section
                id="skills"
                ref={(el) => { sections.current.skills = el; }}
                className="skills section"
            >
                <h2 className="section-title">Tech Stack</h2>
                <div className="skill-grid">
                    {skills.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.name}
                                className="skill-card"
                                style={{ "--skill-color": s.color } as React.CSSProperties}
                            >
                                <div className="skill-icon" style={{ color: s.color }}>
                                    <Icon size={32} />
                                </div>
                                <p>{s.name}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Projects */}
            <section
                id="projects"
                ref={(el) => { sections.current.projects = el; }}
                className="projects section"
            >
                <h2 className="section-title">Projects</h2>
                <div className="project-grid">
                    {projects.map((p) => (
                        <div key={p.id} className="project-card">
                            <div className="project-image">
                                <img src={p.image} alt={p.projectName} />
                            </div>
                            <div className="project-header">
                                <h3>{p.projectName}</h3>
                                <div className="project-links">
                                    <a href={p.github} className="project-link" aria-label="GitHub">
                                        <Github size={18} />
                                    </a>
                                    {/* <span className="tooltip-wrapper">
                                        <a
                                            href={p.demo || "#"}
                                            title="Live demo not available"
                                            className="project-link disabled"
                                            aria-label="Live Demo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                        <span className="tooltip-text">Not available</span>
                                    </span> */}
                                    <a href={p.demo} className="project-link" aria-label="Live Demo">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                            <p>{p.shortDescription}</p>
                            <div className="tags">
                                {p.tech.map((t) => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>
                            <button
                                className="btn small-btn"
                                onClick={() => navigate(`/projects/${p.projectId}`)}
                            >
                                Details
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section
                id="contact"
                ref={(el) => { sections.current.contact = el; }}
                className="contact section"
            >
                <h2 className="section-title">Contact Me</h2>
                <p className="contact-subtitle">Feel free to connect if you want to collaborate or just have a chat!</p>
                <div className="contact-grid">
                    <a href="mailto:coomkieyb@gmail.com" className="contact-card">
                        <div className="contact-icon">
                            <Mail size={24} />
                        </div>
                        <span>Email</span>
                        <div style={{ color: "#da92f1" }}>coomkieyb@gmail.com</div>
                    </a>

                    <a href="https://github.com/coomkie" target="_blank" rel="noopener noreferrer" className="contact-card">
                        <div className="contact-icon">
                            <Github size={24} />
                        </div>
                        <span>GitHub</span>
                    </a>

                    <a href="https://linkedin.com/in/duong-le-5228732bb" target="_blank" rel="noopener noreferrer" className="contact-card">
                        <div className="contact-icon">
                            <Linkedin size={24} />
                        </div>
                        <span>LinkedIn</span>
                    </a>

                </div>
            </section>
        </div >
    );
}
