import React from 'react'
import Layout from '@/component/layout/Layout'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import AllFaqSection from '@/component/faq/AllFaqSection'
import type { Metadata } from 'next'
import { FaqType } from '@/types'
import { getFaq } from '@/sanity/sanity.query'

export const metadata: Metadata = {
    title: "Owl Education FAQ",
    description: "Developed by MH WEB UZ",
  }
const page = async() => {
  const faqData: FaqType[] = await getFaq();
  return (
    <Layout>
        <BreadcrumbSection title='FAQ' header="FAQ"/>
        {faqData && <AllFaqSection faqData={faqData}/>}
    </Layout>
  )
}

export default page