import React from 'react'
import PageBanner from '../Components/PageBanner/PageBanner'
import Footer from '../Components/Footer/Footer'
import ServiceDetails from '../Components/PortfolioLayout/ServiceDetails'

const Portfolio = () => {
  return (
    <div className=" bg-linear-to-r from-[#FEC221]/30 to-[#FEF9EF]">
      <PageBanner></PageBanner>
      <ServiceDetails></ServiceDetails>
      <div className="pt-100">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Portfolio