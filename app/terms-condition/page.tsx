import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import TermSection from '@/component/terms/TermSection'

export const metadata: Metadata = {
    title: "Owl Education Terms And Condition",
    description: "Developed by MH WEB UZ",
  }
const page = () => {
  return (
    <Layout>
        <BreadcrumbSection title='Terms And Conditions' header='Terms And Conditions'/>
        <TermSection/>
    </Layout>
  )
}

export default page