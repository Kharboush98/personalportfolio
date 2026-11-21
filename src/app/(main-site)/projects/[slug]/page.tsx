import ProjectGallery from "@/app/Components/ui/ProjectGallery/ProjectGallery";
import { projects } from "@/app/Content/projects";
import { ProjectImage } from "@/app/DataTypes/ProjectType";
import notFound from "@/app/not-found";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  const imgs: ProjectImage[] = project?.images?.length
    ? project.images
    : project?.thumbnail
      ? [{ src: project.thumbnail }]
      : [];

  if (!project) return notFound();

  return (
    <>
      <section
        id="projects"
        className="min-h-fit selection:bg-secondary selection:text-primary scroll-mt-16 pb-16 font-playfair bg-linen-weave border-b-2 border-primary"
      >
        <div className="section-container">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="min-w-0 md:flex-2 order-2 md:order-1 ">
              <div className="pb-10">
                <h1
                  className="relative mb-5 w-fit font-playfair text-primary text-7xl font-bold 
                        after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:bg-current"
                >
                  {project?.title}
                </h1>

                <p className="font-jetbrains text-xl">{project?.description}</p>
              </div>

              <div className="pb-10">
                {project?.overview && project.overview.length > 0 && (
                  <div>
                    <h1 className="relative mb-7 w-fit font-playfair text-primary-accent text-5xl font-bold">
                      Overview
                    </h1>

                    <ul className="space-y-4">
                      {project.overview.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pb-10">
                {project?.highlights && project.highlights.length > 0 && (
                  <div>
                    <h1 className="relative mb-7 w-fit font-playfair text-primary-accent text-5xl font-bold ">
                      Highlights
                    </h1>

                    <ul className="font-jetbrains text-[16px]">
                      {project?.highlights?.map((t) => (
                        <li className="mb-5" key={t}>
                          - {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="min-w-0 md:flex-1 order-1 md:order-2 lg:sticky lg:top-24 lg:self-start">
              <ProjectGallery images={imgs} title={project.title} />

              <div className="dark:bg-primary-accent mb-5 bg-primary bg-grid-pattern font-jetbrains text-secondary flex flex-col p-4 items-start justify-centers gap-3 rounded-2xl">
                {project?.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:font-bold hover:scale-105 text-xl flex flex-row gap-2 items-center justify-center"
                  >
                    <BiLinkExternal className="text-xl" /> Live Demo
                  </a>
                )}

                {project?.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:font-bold hover:scale-105 text-xl flex flex-row gap-2 items-center justify-center"
                  >
                    <FaGithub className="text-xl" /> GitHub
                  </a>
                )}
              </div>

              <div
                className="dark:bg-background border-2 border-primary bg-grid-pattern font-jetbrains text-secondary flex flex-col
               p-4 items-start justify-centers gap-3 rounded-2xl "
              >
                <div className="text-primary text-xl">Stack</div>
                {project?.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <div className="bg-primary-accent p-2 rounded-full font-extrabold">
                        <div key={item} className="text-secondary text-[12px]">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
