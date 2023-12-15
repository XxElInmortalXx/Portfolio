import Image from "next/image";
import imageHero from '../assets/image/imageHero.png'
import Link from "next/link";
import ArticleBlog from "@/components/ArticleBlog";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <section className="w-[90%] mx-auto container max-w-4xl">
        <div className="pt-8 md:pt-16 flex flex-col md:flex-row-reverse md:gap-2 md:justify-between justify-center items-center">
          <Image className="block object-cover w-60 h-60 md:w-64 md:h-64 rounded-full" src={imageHero} priority width={200} height={200} alt="image header andres eduardo" />
          <article className="text-center md:text-left md:max-w-xl">
            <h2 className="text-4xl font-bold mt-4 md:mt-0 leading-none">Hello, I´m Andres,<span className="block mt-2">Full Stack Developer</span></h2>
            <p className="text-lg mt-4">Full Stack Developer with a focus on creating attractive and functional digital experiences, integrating technical knowledge and creativity to build high-performance web platforms and intuitive applications.</p>
            <button
              className="mt-4 py-2 px-4 rounded-md font-medium text-lg text-white bg-red-400 hover:bg-red-300 active:bg-red-500"
            >
              Download Resume
            </button>
          </article>
        </div>
      </section>
      <section className="w-full bg-blue-100 mt-8 pb-8">
        <div className="w-[90%] mx-auto container max-w-4xl">
          <div className="flex justify-between items-center p-8">
            <p className="font-medium text-lg">Recent Posts</p>
            <Link className="text-blue-500" href={{ pathname: '/blog' }}>View All</Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            <ArticleBlog />
            <ArticleBlog />
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto container max-w-4xl py-8">
        <h3 className="font-medium text-lg text-center md:text-left mb-4">latest works</h3>
        <div className="space-y-4">
          <Work />
          <Work />
          <Work />
          <Link className="text-blue-500 mt-4 block text-right" href={{ pathname: '/works' }}>View all works</Link>
        </div>
      </section>
    </>

  )
}
