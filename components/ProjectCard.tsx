import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  image,
  url,
  github,
}: ProjectCardType) {
  return (
    <Card className="w-full">
      <Link
        href="#"
        className="group block overflow-hidden rounded-lg"
        prefetch={false}
      >
        <img
          src={image}
          alt="Project Thumbnail"
          className="h-60 w-full object-cover transition-all group-hover:scale-105"
        />
      </Link>
      <CardContent className="space-y-3 p-6">
        <div>
          <Link
            href="#"
            className="block transition-colors hover:text-primary"
            prefetch={false}
          >
            <h3 className="text-xl font-semibold">{title}</h3>
          </Link>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={url}
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
            target="_blank"
          >
            View Project
          </Link>
          <Link href={github} target="_blank">
            <div className="flex items-center gap-1 text-muted-foreground">
              <GithubIcon className="h-4 w-4" />
              <span className="text-sm">GitHub</span>
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
