import Link from "next/link";
export const metadata = {
  title: "404",
  description: "Not found",
};
export default function MotFound(){
    return(
    <div className="flex flex-col absolute w-full pt-10 bg-white">
      <div className="flex flex-col items-center justify-center h-auto">
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Страница не найдена</p>
        <Link 
        href="/" 
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
        Вернуться на главную
        </Link>
      </div>
    </div>
    )
}