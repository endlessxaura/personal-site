export default interface Project {
    img: string;
    title: string;
    description: React.ReactNode;
    body?: React.ReactNode | undefined;
}