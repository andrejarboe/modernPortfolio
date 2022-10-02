import { useEffect, useState } from 'react'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Header2 from '../components/Header/Header2'
import Hero2 from '../components/Hero/Hero2'
import Projects2 from '../components/Projects2'

import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ projects, skills, pageInfo, experiences, socials }: Props) => {
  return (
    <div
    // className='text-secondary h-screen snap-y snap-mandatory overflow-scroll z-0'
    >
      <Head>
        <title>Andre's Portfolio | Home</title>
      </Head>
      <Header2 />
      <Hero2 pageInfo={pageInfo}/>
      <Projects2 projects={projects} />
      <ContactMe />
      <Footer socials={socials} />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }
}