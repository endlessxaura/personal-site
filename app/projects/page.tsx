import { Container, Button, Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';
import projects from '@/data/projects';
import Project from '../../data/project';

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card key={project.title} className="p-0" style={{"width": "384px", "maxWidth": "100%"}}>
            <CardImg className="border-bottom bg-dark-subtle" style={{"height": "192px", "filter": "blur(.5px)"}} variant="top" src={project.img} />
            <CardBody className="d-flex flex-column">
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardText className="flex-grow-1">{project.description}</CardText>
                <Button className="align-self-end" href={"/projects/" + project.title}>More Info</Button>
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