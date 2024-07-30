import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ContactPageSection from '@/component/contact/ContactPageSection'
import Layout from '@/component/layout/Layout'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Owl Education Bog'lanish",
  description: "Developed by MH WEB UZ",
}
const page = () => {
  return (
    <Layout>
        <BreadcrumbSection header='Bog`lanish' title="Boglanish"/>
        <ContactPageSection/>
    </Layout>
  )
}

export default page