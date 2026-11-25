'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavLink from 'react-bootstrap/NavLink';
import { usePathname } from 'next/navigation';
import { lunasima } from '@/styles/fonts';

function SiteNavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <NavLink className={pathName === href ? 'active' : ''} href={href}>
            {children}
        </NavLink>
    )
}

export default function SiteNav() {
    return (
        <Navbar expand="lg">
            <Container>
                <NavbarBrand className={lunasima.className + " text-primary"} href="/">
                    Julia Norman
                </NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <Nav>
                    <SiteNavLink href="/">Home</SiteNavLink>
                    <SiteNavLink href="/projects">Projects</SiteNavLink>
                    <SiteNavLink href="/blog">Blog</SiteNavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}