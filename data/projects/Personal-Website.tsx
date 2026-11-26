import Project from "../project"

const ProjectPersonalWebsite: Project = {
    img: "Personal_Website_Screenshot.png",
    title: "This website!",
    description: (<>
        I built my personal website using Next.js and Typescript. It's hosted on Azure Static Web Apps via a Docker container. You can explore the code at <a href="https://github.com/endlessxaura/personal-site" target="_blank" rel="noopener noreferrer">it's GitHub repository</a>.
    </>)
}

export default ProjectPersonalWebsite;