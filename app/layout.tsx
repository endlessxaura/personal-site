import React from 'react';
import '@/styles/theme.scss';
import { Lunasima } from 'next/font/google';
import Container from 'react-bootstrap/Container';
import SiteNav from '../components/site-nav';

const lunasima = Lunasima({
    weight: '400',
});


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={lunasima.className}>
                <SiteNav />
                <main>
                    <Container>
                        {children}
                    </Container>
                </main>
            </body>
        </html>
    );
}