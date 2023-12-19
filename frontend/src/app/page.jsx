'use client'

import Image from "next/image";
import imageHero from '../assets/image/imageHero.png'
import Link from "next/link";
import ArticleBlog from "@/components/ArticleBlog";
import Work from "@/components/Work";
import { getBlogs } from '../api/blogs.api'
import { getWorks } from '../api/works.api'
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([])
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(false)
  const getllBlogs = async () => {
    setLoading(true)
    try {
      const response = await getBlogs()
      const newBlogs = response.blogs.slice(0, 2)
      setBlogs(newBlogs)
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  const getAllWorks = async () => {
    setLoading(true)
    try {
      const response = await getWorks()
      const newWorks = response.works.slice(0, 3)
      setWorks(newWorks)
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  useEffect(() => {
    getllBlogs()
    getAllWorks()
  }, [])
  return (
    <>
      <section className="w-[90%] mx-auto container max-w-4xl">
        <div className="pt-8 md:pt-16 flex flex-col md:flex-row-reverse md:gap-2 md:justify-between justify-center items-center">
          <Image className="block object-cover w-60 h-60 md:w-64 md:h-64 rounded-full" src={imageHero} priority width={200} height={200} alt="image header andres eduardo" />
          <article className="text-center md:text-left md:max-w-xl">
            <h2 className="text-4xl font-bold mt-4 md:mt-0 leading-none">Hi, I'm Andres Eduardo,<span className="block mt-2">Full Stack Developer</span></h2>
            <p className="text-lg mt-4">Full Stack Developer with a focus on creating attractive and functional digital experiences, integrating technical knowledge and creativity to build high-performance web platforms and intuitive applications</p>
            <div className="flex flex-col gap-2 md:flex-row">
              <Link
                href='https://drive.google.com/file/d/1MkkDRsOybO9bMbIC0hHP1DGyY4PoIcek/view?usp=drive_link'
                target="_blank"
                className="inline-block mt-4 py-2 px-4 rounded-md font-medium text-lg text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500"
              >
                View CV
              </Link>
              <Link
                href='https://drive.google.com/file/d/1MkkDRsOybO9bMbIC0hHP1DGyY4PoIcek/view?usp=drive_link'
                target="_blank"
                className="inline-block mt-4 py-2 px-4 rounded-md font-medium text-lg text-white bg-red-400 hover:bg-red-300 active:bg-red-500"
              >
                View Resume
              </Link>
            </div>
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
            {Object.keys(blogs).length > 0 ? (
              blogs.map((blog) => (
                <ArticleBlog
                  key={blog.blog_id}
                  blog={blog}
                  getAllBlogs={getllBlogs}
                />
              ))
            ) : (
              loading ? <p className="p-8 text-center font-medium">Loading...</p> :
                <p className="p-8 text-center font-medium">No blogs yet</p>
            )}
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto container max-w-4xl py-8">
        <h3 className="font-medium text-lg text-center md:text-left mb-4">latest works</h3>
        <div className="space-y-4">
          {Object.keys(works).length > 0 ? (
            works.map((work) => (
              <Work
                key={work.work_id}
                work={work}
                getAllWorks={getAllWorks}
              />
            ))
          ) : (
            loading ? <p className="p-8 text-center font-medium">Loading...</p> :
              <p className="p-8 text-center font-medium">No works yet</p>
          )}
          <Link className="text-blue-500 mt-4 block text-right" href={{ pathname: '/works' }}>View all works</Link>
        </div>
      </section>
    </>

  )
}
