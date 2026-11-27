import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinkedInIcon({ profileSlug, className }: { profileSlug: string, className?: string }) {
    return ((<a href={"https://www.linkedin.com/in/" + profileSlug} className={className} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>))
}