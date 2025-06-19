'use client'

import { PlayCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const tvLearningFeatures = [
  {
    title: 'क्या है National Green Tribunal - Yatish Goel की कानून की पाठशाला',
    description:
      'Advocate Yatish Kumar Goel sheds light on the role and powers of the National Green Tribunal (NGT) in environmental justice.',
    url: 'https://www.youtube.com/watch?v=rfCXmT-0dCk',
    thumbnail: 'https://img.youtube.com/vi/rfCXmT-0dCk/hqdefault.jpg',
  },
  {
    title: 'Bail के नियम - Yatish Goel की कानून की पाठशाला',
    description:
      'Advocate Yatish Kumar Goel explains the essential rules and legal procedures around bail in India—simplified for public understanding.',
    url: 'https://www.youtube.com/watch?v=dyApOJM6T1s',
    thumbnail: 'https://img.youtube.com/vi/dyApOJM6T1s/hqdefault.jpg',
  },
  {
    title:
      'क्या है Defamation? जानिए इसके नियम - Yatish Goel की कानून की पाठशाला',
    description:
      'Advocate Yatish Kumar Goel explains the concept of defamation, its types, and the legal remedies available under Indian law in this insightful session.',
    url: 'https://www.youtube.com/watch?v=AMltYA8AiQc',
    thumbnail: 'https://img.youtube.com/vi/AMltYA8AiQc/hqdefault.jpg',
  },
]

export default function EducationalSeries() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
          Know the Law:{' '}
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Video Series
          </span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Watch our curated video series on our youtube channel designed to educate, empower, and
          inspire through real-world legal insights and public discourse.
        </p>
      </div>

      <div className="grid gap-10 px-4 sm:px-6 lg:px-20 md:grid-cols-2 lg:grid-cols-3">
        {tvLearningFeatures.map((video, index) => (
          <div
            key={index}
            className={`group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: `${index * 300}ms` }}
            onClick={() => window.open(video.url, '_blank')}
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                {video.title}
              </h3>
              <p className="text-slate-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
