import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

function CarouselProject({imageSrc, title, children}: {imageSrc: string, title: string, children?: React.ReactNode}) {
    return (
        <CarouselItem>
            <img className="rounded p-4 bg-dark-subtle w-100" style={{"filter": "blur(.5px)"}} src={imageSrc} alt="Profile" />
            <CarouselCaption className="rounded border border-primary bg-white">
                <h2>{title}</h2>
                <p>{children}</p>
            </CarouselCaption>
        </CarouselItem>
    );
}

export default function ProjectsPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <Carousel variant="dark">
                        <CarouselProject
                            imageSrc="/MA_Distribution_Map.png"
                            title="MA Distribution Map">
                            This map shows the electrical distribution grid in Massachusetts. I built this using ArcGIS, Python, Azure Functions, and Snowflake. An accompanying data explorer website was built using React and .NET. It's still hosted at <a href="https://systemdataportal.nationalgrid.com/MA/" target="_blank" rel="noopener noreferrer">the National Grid Massachusetts System Data Portal</a> under Distribution Assets Overview.
                        </CarouselProject>
                        <CarouselProject
                            imageSrc="/Personal_Website_Screenshot.png"
                            title="This website!">
                            I built my personal website using Next.js and Typescript. It's hosted on Azure Static Web Apps via a Docker container. You can explore the code at <a href="https://github.com/endlessxaura/personal-site" target="_blank" rel="noopener noreferrer">it's GitHub repository</a>.
                        </CarouselProject>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}