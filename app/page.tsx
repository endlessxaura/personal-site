import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { lunasima } from '@/styles/fonts';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Page() {
    return (
        <Container style={{ "maxWidth": "992px" }}>
            <Row className="justify-content-center py-5">
                <Col md="auto" className="align-self-center text-center">
                    <Image src="/professional.jpg" alt="Profile" className="img-fluid rounded-circle m-3" width={128} height={128} />
                    <h1 className={lunasima.className}>The Coder Philosopher</h1>
                    <div className="d-flex justify-content-center pb-2" style={{ "gap": "1rem" }}>
                        <a href="https://github.com/endlessxaura" className="text-dark" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/jnorman-swe" className="text-dark" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
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