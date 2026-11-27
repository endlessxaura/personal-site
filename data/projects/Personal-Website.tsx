import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "../project"
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";

const ProjectPersonalWebsite: Project = {
    img: "Personal_Website_Screenshot.png",
    title: "This website!",
    description: (<>
        I built my personal website using Next.js and Typescript. It's hosted on Azure Static Web Apps via a Docker container. You can explore the code at <a href="https://github.com/endlessxaura/personal-site" target="_blank" rel="noopener noreferrer">it's GitHub repository</a>.
    </>),
    body: (<>
        <p>I decided to build a personal website for hosting my resume, projects, and writing during the Fall of 2026. The motivation was two-fold: I wanted to learn more about Next.js and Docker. I also wanted to have a place to showcase my work.</p>
        <p>While GitHub works for public projects, many of my projects are proprietary or private. I can describe these projects here, along with relevant screenshots and descriptions. This does much better than a single line on a resume.</p>
        <p>I have tried hosting my writing in a variety of places, such as Substack and Medium. However, those platforms have their own limitations and they don't show up beside my projects. This website locates all of my professional portfolio in one place, so people don't have to go hunting for me across social networks.</p>
        <p>I suppose there's not much to else to say about it! You're looking at it, after all. Peruse around, or go look at <a href="https://github.com/endlessxaura/personal-site" target="_blank" rel="noopener noreferrer">the source code</a>. <FontAwesomeIcon width={12} height={12} icon={faFaceSmileBeam} /></p>
    </>)
}

export default ProjectPersonalWebsite;