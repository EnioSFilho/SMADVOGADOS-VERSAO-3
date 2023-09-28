import HomeTemplate from '../templates/home/home.template'

import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Advocacia Previdenciária</title>
        <meta name='Aposentadoria' content='Aposentadoria por Idade, Revisão de Aposentadoria, Benefício previdenciário, Auxílio Acidente, Auxílio doença, Loas, Revisão da Vida Toda, Aposentadoria'/>     
        <meta name='description' content='Escritório de Advocacia especializado em direito Previdenciário. Somos especialistas em todos os tipos de ação junto a previdência'/>
      </Head>
      <HomeTemplate />
    </>

  )
}
