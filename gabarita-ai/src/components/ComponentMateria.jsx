// "use client"

// import { useState, useEffect } from "react"
// import { Home, List, Play, BookOpen, Edit, FileText, Loader2 } from "lucide-react"
// import { fetchCourseData } from "./services/api"
// import type { ApiResponse } from "./types/course"

// export default function Component() {
//   const [data, setData] = useState<ApiResponse | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     async function loadCourseData() {
//       try {
//         setLoading(true)
//         const courseData = await fetchCourseData()
//         setData(courseData)
//       } catch (err) {
//         setError("Erro ao carregar os dados do curso")
//         console.error("Erro ao buscar dados:", err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     loadCourseData()
//   }, [])

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="flex items-center gap-3 text-blue-600">
//           <Loader2 className="w-6 h-6 animate-spin" />
//           <span className="text-lg">Carregando curso...</span>
//         </div>
//       </div>
//     )
//   }

//   if (error || !data) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="text-red-600 text-lg mb-2">{error || "Erro ao carregar os dados"}</div>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Tentar novamente
//           </button>
//         </div>
//       </div>
//     )
//   }

//   const { course, breadcrumb } = data

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Breadcrumb Navigation */}
//         <nav className="flex items-center gap-2 text-gray-600 mb-8">
//           <Home className="w-4 h-4" />
//           <span>/</span>
//           <span>{breadcrumb.subject}</span>
//           <span>/</span>
//           <span className="font-medium">{breadcrumb.course}</span>
//         </nav>

//         {/* Main Heading */}
//         <h1 className="text-3xl font-bold text-blue-600 mb-12">{course.title}</h1>

//         {/* Topics Container - Caixa maior */}
//         <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
//           <div className="space-y-6">
//             {course.topics.map((topic) => (
//               <div
//                 key={topic.id}
//                 className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 p-6 flex items-center justify-between hover:shadow-md hover:bg-white transition-all"
//               >
//                 <div className="flex-1">
//                   <h2 className="text-lg text-gray-700 font-medium mb-1">{topic.title}</h2>
//                   {topic.description && <p className="text-sm text-gray-500">{topic.description}</p>}
//                 </div>

//                 {/* Action Icons */}
//                 <div className="flex items-center gap-3 ml-4">
//                   <button
//                     className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                     title="Lista de exercícios"
//                   >
//                     <List className="w-5 h-5" />
//                   </button>
//                   <button
//                     className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                     title="Vídeo aula"
//                   >
//                     <Play className="w-5 h-5" />
//                   </button>
//                   <button
//                     className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                     title="Material de estudo"
//                   >
//                     <BookOpen className="w-5 h-5" />
//                   </button>
//                   <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
//                     <Edit className="w-5 h-5" />
//                   </button>
//                   <button
//                     className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                     title="Exercícios"
//                   >
//                     <FileText className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
