import AllBlogSection from '@/component/blog/AllBlogSection'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import React from 'react'
import type { Metadata } from 'next'
import { BlogType } from '@/types'
import { getBlog } from '@/sanity/sanity.query'
 
export const metadata: Metadata = {
  title: "Owl Education Yangiliklar",
  description: "Developed by MH WEB UZ",
}
const page = async() => {
  const blogData: BlogType[] = await getBlog();
  return (
    <Layout>
        <BreadcrumbSection header="Yangiliklar" title="yangilik"/>
        {blogData && <AllBlogSection blogData={blogData}/>}
    </Layout>
  )
}

export default page