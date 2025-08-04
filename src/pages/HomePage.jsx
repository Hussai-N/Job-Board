import React from 'react'

import Hero from '../components/Hero.jsx';
import ViewAllJobs from '../components/ViewAllJobs.jsx';
import JobListings from '../components/JobListings.jsx';
import HomeCards from '../components/HomeCards.jsx';
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage