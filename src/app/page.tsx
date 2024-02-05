import Image from "next/image";
import Head from 'next/head'
import projects from "@/data/projectsData";


export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <header className="bg-gray-800 text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#about" className="mr-5 hover:text-gray-400">About</a>
            <a href="#projects" className="mr-5 hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img className="lg:w-1/6 md:w-1/3 w-1/4 mb-10 object-cover object-center rounded"
                 src="https://dummyimage.com/720x600" alt="avatar"/>
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi, I'm Alexander</h1>
              <p className="mb-8 leading-relaxed">Welcome to my portfolio. Here you'll find a selection of my projects
                and work. Feel free to browse around and get in touch if you have any questions or opportunities.</p>
              <div className="flex justify-center">
                <a href="#projects"
                   className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">See
                  My Work</a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {projects.map((project) => (
                <div key={project.id} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.imageUrl} alt="project"/>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{project.category}</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{project.title}</h1>
                      <p className="leading-relaxed mb-3">{project.description}</p>
                      <div className="flex items-center flex-wrap ">
                        <a href={project.link} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Add more sections here such as About, Projects, and Contact */}
      </main>

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
            2024 [Your Name] —
            <a href="https://twitter.com/[yourhandle]" className="text-gray-600 ml-1" target="_blank"
               rel="noopener noreferrer">@[yourhandle]</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
