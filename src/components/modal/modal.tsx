import { useEffect } from 'react'

type Project = {
    id: string
    title: string
    description: string
    tags: string[]
    coverImage: string
    alt: string
    liveUrl: string
    githubUrl: string
}

type ProjectModalProps = {
    isOpen: boolean
    onClose: () => void
    project: Project | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    if (!isOpen || !project) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />
            <div className="relative w-full max-w-lg rounded-xl border border-[#7ff7ff]/20 bg-[#1c1b2a] p-6 shadow-xl shadow-black/50">
                <button
                    onClick={onClose}
                    aria-label="Fechar modal"
                    className="absolute right-4 top-4 text-[#a0a0a0] hover:text-[#7ff7ff] transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <h2 id="modal-title" className="text-xl md:text-2xl font-bold text-white pr-10 mb-4">
                    {project.title}
                </h2>
                <p className="text-[#a0a0a0] text-base md:text-lg leading-relaxed text-justify mb-6">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 text-xs md:text-sm rounded bg-[#7ff7ff]/15 text-[#7ff7ff]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#7ff7ff] text-[#1c1b2a] font-semibold hover:bg-[#7ff7ff]/90 transition-colors"
                    >
                        Ver projeto
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#7ff7ff]/40 text-[#7ff7ff] font-semibold hover:bg-[#7ff7ff]/10 transition-colors"
                    >
                        Repositório
                    </a>
                </div>
            </div>
        </div>
    )
}
