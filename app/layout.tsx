import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}