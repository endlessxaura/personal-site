'use client';

import { Container } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function NotFound() {
    let [countdown, setCountdown] = useState(3);
    const router = useRouter();

    let interval = setInterval(() => {
        setCountdown(countdown - 1);
        if (countdown == 1) {
            clearInterval(interval);
            router.push("/");
        }
    }, 1000);

    return (
        <Container>
            <h1>404 - Page Not Found</h1>
            <p>
                Looks like you've taken a wrong turn! Let's get you back to the home page in {countdown}...
            </p>
        </Container>
    );
}