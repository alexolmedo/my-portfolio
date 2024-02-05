// components/ProjectModal.tsx
import React from 'react';
import { Project } from '../types'; // Adjust the import path as necessary

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg max-w-sm w-full">
        <h2 className="font-bold text-xl mb-2">{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.imageUrl} alt={project.title} className="my-3" />
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
