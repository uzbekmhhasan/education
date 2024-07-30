import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import AllTeamMemberSection from '@/component/team/AllTeamMemberSection'
import { TeamType } from '@/types'
import { getTeam } from '@/sanity/sanity.query'

export const metadata: Metadata = {
    title: "Owl Education Team",
    description: "Developed by MH WEB UZ",
  }
const page = async() => {
  const teamData: TeamType[] = await getTeam();
  return (
    <Layout>
        <BreadcrumbSection header='Team' title='Team'/>
        <AllTeamMemberSection teamData={teamData}/>
    </Layout>
  )
}

export default page