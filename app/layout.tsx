import React from 'react';
import '@/styles/theme.scss';
import { Lunasima } from 'next/font/google';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

const lunasima = Lunasima({
    weight: '400',
});


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={lunasima.className}>
                <Navbar expand="lg">
                    <Container>
                        <NavbarBrand className="text-primary" href="/">
                            Julia Norman
                        </NavbarBrand>
                    </Container>
                </Navbar>
                {children}
            </body>
        </html>
    );
}