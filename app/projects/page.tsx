import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';
import { projects } from '../../data/projects.json';
import Project from '../../data/project';

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card key={project.title} className="p-0" style={{"width": "384px", "maxWidth": "100%"}}>
            <CardImg variant="top" src={project.img} />
            <CardBody>
                <CardTitle>{project.title}</CardTitle>
                <CardText dangerouslySetInnerHTML={{__html: project.description}}></CardText>
            </CardBody>
        </Card>
    )
}

export default function ProjectsPage() {
    var projectDisplay = projects.map(project => ProjectCard({project}));
    return (
        <Container>
            <div className="d-flex gx-3 pt-3 justify-content-center flex-wrap">
                {projectDisplay}
            </div>
        </Container>
    )
}