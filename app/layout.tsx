import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    );
}