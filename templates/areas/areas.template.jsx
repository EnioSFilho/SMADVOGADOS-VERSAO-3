import React from 'react'
import MainAreas from '../../components/areas/Areas'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MainAreas2 from '../../components/areas2/MainAreas2'
import MainAreas3 from '../../components/areas3/MainAreas3'

function AreasTemplate() {
  return (
    <>
    <Header/>
    
    <MainAreas2/>
    <MainAreas/>
    <MainAreas3/>
    <Footer/>
    </>
  )
}

export default AreasTemplate