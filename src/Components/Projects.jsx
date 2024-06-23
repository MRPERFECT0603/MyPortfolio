import pic from "../assets/picc.png";
import { motion } from "framer-motion";
import thesocialedgefrontend from "../assets/TheSocialEdgeFrontend.png"
import thesocialedgebackend from "../assets/TheSocialEdgeBackend.png"
import linkedin from "../assets/LinkedIn.png"

const Projects = () => {
  const projects = {
    FrontEnd: [
      {
        title: 'TheSocialEdge',
        description: 'Developed the frontend of a scalable social media platform using ReactJs, significantly enhancing user engagement. Designed an intuitive and responsive user interface to improve overall user experience.',
        image: thesocialedgefrontend,
        technologies: ['React', 'Tailwind CSS'],
        Github: 'https://github.com/MRPERFECT0603/TheSocialEdge-FrontEnd-Microservices'
      },
      {
        title: 'LinkedIn-Clone',
        description: 'Developed a dynamic and engaging social media platform using React, with a focus on innovation and user experience enhancement. Leveraged Redux for state management to ensure persistence across sessions, offering a seamless and intuitive user interface. Implemented robust authentication and real-time data storage using Firebase, ensuring secure and efficient handling of user data and interactions.',
        image: linkedin,
        technologies: ['React', 'Redux', 'Firebase'],
        Github: 'https://github.com/MRPERFECT0603/LinkedIn-Clone'
      },
    ],
    BackEnd: [
      {
        title: 'TheSocialEdge',
        description: 'Developed a scalable social media platform using Node.js, Express.js, and MongoDB. Utilized Kubernetes for microservices orchestration, ensuring minimal downtime and seamless scalability. Integrated Kafka for efficient service communication and implemented a streamlined CI/CD pipeline with GitHub Workflow for rapid deployment. Hosted on AWS to handle high traffic and ensure continuous service availability.',
        image: thesocialedgebackend,
        technologies: ['Node.Js', 'Express.Js', 'MongoDB'],
        Github: 'https://github.com/MRPERFECT0603/TheSocialEdge-Backend-Microservices'
      },
    ],
    DevOps: [
      {
        title: 'TheSocialEdge',
        description: 'Implemented a microservices architecture on Kubernetes to ensure minimal downtime and seamless scalability for a social media platform. Integrated Kafka for efficient interservice communication, enhancing real-time data processing. Implemented a robust CI/CD pipeline with GitHub Workflow. Leveraged AWS hosting to handle increased user traffic with uninterrupted service availability.',
        image: thesocialedgebackend,
        technologies: ['Docker', 'Kubernetes', 'AWS', 'Kafka'],
        Github: 'https://github.com/MRPERFECT0603/TheSocialEdge-Backend-Microservices'
      },
    ],
    MachineLearning: [
      {
        title: 'ASTra (Abstract Syntax Tree Analyzer)',
        description: 'Developed a tool for code analysis and plagiarism detection using Abstract Syntax Trees (ASTs). Enhanced accuracy by integrating file content for TF-IDF vectorization with scikit-learn. Implemented PCA and t-SNE for code similarity visualization. Improved analysis precision through optimized preprocessing.',
        image: pic,
        technologies: ['Abstract Syntax Trees', 'TF-IDF vectors', 'scikit-learn', 'PCA'],
        Github: 'https://github.com/MRPERFECT0603/ASTra'
      },
    ],
  };

  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4  mt-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>
          {Object.keys(projects).map((category, index) => (
            <div key={index}>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-2xl mb-4">{category}</motion.h2>
              <div className="mb-8 flex flex-wrap lg:justify-center">
                {projects[category].map((project, projectIndex) => (
                  <div key={projectIndex} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{scale: 5 , x:300 , y:200}}
                      className="w-full lg:w-1/4">
                      <img
                        src={project.image}
                        width={150}
                        height={150}
                        alt={project.title}
                        className="mb-6 rounded"
                      />
                    </motion.div>
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5 }}
                      className="w-full max-w-xl lg:w-3/4">
                      <a href={project.Github} target="_blank">
                      <h6 className="mb-2 font-semibold">{project.title}</h6></a>
                      <p className="mb-4text-neutral-400 text-justify">{project.description}</p>
                      <div className="mb-4 mt-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="mr-2 rounded bg-neutral-900px-2 py-1 font-medium text-purple-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div >
    </section>
  );
}

export default Projects;
