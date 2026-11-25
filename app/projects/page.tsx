import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

export default function ProjectsPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <Carousel variant="dark">
                        <CarouselItem>
                            <img className="rounded p-4 bg-dark-subtle w-100" style={{"filter": "blur(.5px)"}} src="/Personal_Website_Screenshot.png" alt="Profile" />
                            <CarouselCaption className="rounded-pill border border-primary bg-white">
                                <h2>This website!</h2>
                                <p>I built my personal website using Next.js and Typescript. It's hosted on Azure Static Web Apps via a Docker container.</p>
                            </CarouselCaption>
                        </CarouselItem>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}