import { Col, Container, Row } from "react-bootstrap";
import projects from "@/data/projects";
import Project from '@/data/project';
import { redirect } from "next/navigation";

export default async function ProjectPage({ params }: { params: Promise<{ title: string }> }) {
    const { title } = await params;
    const project: Project | undefined = projects.find(project => project.title == title.replaceAll("%20", " "));
    if (project == null) {
        redirect("/projects");
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="d-flex flex-column">
                    <img src={"/" + project.img} className="align-self-center py-3" style={{"width": "100%", "maxWidth": "768px", "objectFit": "contain"}}></img>
                    <h1>{project.title}</h1>
                    {project.body}
                </Col>
            </Row>
            {/* <Row>
                <h1>{project.title}</h1>
            </Row>
            <Row>
                <div dangerouslySetInnerHTML={{__html: project.body}}></div>
            </Row> */}
        </Container>
    )
}