// // "use client";

// // import { PlayCircle } from "lucide-react";
// // import { useEffect, useState } from "react";

// // const tvLearningFeatures = [
// //   {
// //     title: "क्या है National Green Tribunal - Yatish Goel की कानून की पाठशाला",
// //     description:
// //       "Advocate Yatish Kumar Goel sheds light on the role and powers of the National Green Tribunal (NGT) in environmental justice.",
// //     url: "https://www.youtube.com/watch?v=rfCXmT-0dCk",
// //     thumbnail: "https://img.youtube.com/vi/rfCXmT-0dCk/hqdefault.jpg",
// //   },
// //   {
// //     title: "Bail के नियम - Yatish Goel की कानून की पाठशाला",
// //     description:
// //       "Advocate Yatish Kumar Goel explains the essential rules and legal procedures around bail in India—simplified for public understanding.",
// //     url: "https://www.youtube.com/watch?v=dyApOJM6T1s",
// //     thumbnail: "https://img.youtube.com/vi/dyApOJM6T1s/hqdefault.jpg",
// //   },
// //   // {
// //   //   title:
// //   //     "क्या है Defamation? जानिए इसके नियम - Yatish Goel की कानून की पाठशाला",
// //   //   description:
// //   //     "Advocate Yatish Kumar Goel explains the concept of defamation, its types, and the legal remedies available under Indian law in this insightful session.",
// //   //   url: "https://www.youtube.com/watch?v=AMltYA8AiQc",
// //   //   thumbnail: "https://img.youtube.com/vi/AMltYA8AiQc/hqdefault.jpg",
// //   // },
// // ];

// // export default function EducationalSeries() {
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     const timeout = setTimeout(() => setIsVisible(true), 100);
// //     return () => clearTimeout(timeout);
// //   }, []);

// //   return (
// //     <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50/30">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
// //         <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
// //           Know the Law:{" "}
// //           <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
// //             Video Series
// //           </span>
// //         </h2>
// //         <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
// //           Watch our curated video series on our youtube channel designed to
// //           educate, empower, and inspire through real-world legal insights and
// //           public discourse.
// //         </p>
// //       </div>

// //       <div className="space-y-16 px-4 sm:px-6 lg:px-20">
// //         {tvLearningFeatures.map((video, index) => (
// //           <div key={index} className="max-w-6xl mx-auto">
// //             <div
// //               className={`flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300 overflow-hidden cursor-pointer ${
// //                 isVisible ? "opacity-100" : "opacity-0 translate-y-6"
// //               }`}
// //               onClick={() => window.open(video.url, "_blank")}
// //             >
// //               {/* Left Thumbnail */}
// //               <div className="relative w-full md:w-1/3 h-60 md:h-[250px] min-w-[200px]">
// //                 <img
// //                   src={video.thumbnail}
// //                   alt={video.title}
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
// //                   <PlayCircle className="w-14 h-14 text-white" />
// //                 </div>
// //               </div>

// //               {/* Right Content */}
// //               <div className="p-6 flex-1 flex flex-col justify-center">
// //                 <h3 className="text-2xl font-semibold text-slate-800 mb-2 hover:text-blue-700 transition-colors duration-300">
// //                   {video.title}
// //                 </h3>
// //                 <p className="text-slate-600 text-base">{video.description}</p>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
"use client";

import { PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

export default function EducationalSeries() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/videos");
        const data = await res.json();
        setVideos(data);
      } catch (err) {
        console.error("Failed to load videos", err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
          Know the Law:{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Video Series
          </span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Watch our curated video series on our YouTube channel designed to
          educate, empower, and inspire through real-world legal insights and
          public discourse.
        </p>
      </div>

      <div className="space-y-16 px-4 sm:px-6 lg:px-20">
        {loading ? (
          <div className="text-center text-slate-500">Loading videos...</div>
        ) : videos.length === 0 ? (
          <div className="text-center text-slate-500">No videos found.</div>
        ) : (
          videos.map((video, index) => (
            <div key={index} className="max-w-6xl mx-auto">
              <div
                className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => window.open(video.videoUrl, "_blank")}
              >
                {/* Left Thumbnail */}
                <div className="relative w-full md:w-1/3 h-60 md:h-[250px] min-w-[200px]">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="w-14 h-14 text-white" />
                  </div>
                </div>

                {/* Right Content */}
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2 hover:text-blue-700 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-slate-600 text-base">{video.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
