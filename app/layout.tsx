import React from 'react';
import '@/styles/theme.scss';
import SiteNav from '../components/site-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <SiteNav />
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}