import React, { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

const MainLayout: React.FC<LayoutProps> = ({ children, activeSection, scrollToSection }) => {
    return (
        <>
            <Header activeSection={activeSection} scrollToSection={scrollToSection} />
            <main>{children}</main>
            <Footer scrollToSection={scrollToSection} />
        </>
    );
};

export default MainLayout;
