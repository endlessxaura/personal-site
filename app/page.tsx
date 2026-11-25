import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { lunasima } from '@/styles/fonts';
import { Container } from 'react-bootstrap';

export default function Page() {
    return (
        <Container style={{ "maxWidth": "992px" }}>
            <Row className="justify-content-center py-5">
                <Col md="auto" className="align-self-center text-center">
                    <Image src="/professional.jpg" alt="Profile" className="img-fluid rounded-circle m-3" width={128} height={128} />
                    <h1 className={lunasima.className}>The Coder Philosopher</h1>
                    <p>
                        I take abstract problems and turn them into simple, reasonable solutions. Technology is just the tool we use to get there. Whether I'm generating feature layers in ArcGIS, creating API endpoints in .NET, or deploying a new web page in React, the underlying principles are the same. I focus on the fundamentals: clean code, design patterns, and reliable architecture.
                    </p>
                    <p>
                        My philosophy training is what sets me apart. The difference between a good engineer and a great engineer is asking the right questions. Any engineer can create a solution. It takes a thoughtful one to create the right solution - the one that solves the problem now and ten years from now.
                    </p>
                    <p>
                        My colleagues have lovingly referred to me as The Coder Philosopher. It's a title I strive to live up to every day. Check out my <a href="/projects">projects</a> or read my <a href="/blog">blog</a> to see how I approach problems and solutions.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}