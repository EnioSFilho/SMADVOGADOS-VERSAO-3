import React from 'react'
import { ContainerMor, ContainerMorAreas } from '../adjusts/Container.styled'
import { Cards, CardsArea } from '../adjusts/Cards.styled'
import { ButtonBlue } from '../buttons/Button.styled'

function MainAreas3() {
    return (
        <>
            <ContainerMorAreas>
                <div className='titleMain3'>
                    <h1>Vamos ajudar você, que está com alguma demanda judicial na esfera civil, buscando sempre a melhor estratégia, seja na propositura da ação na na defesa de seus direitos:</h1>
                </div>

                <div className='cardsMain3'>
                    <CardsArea>
                        <div className='textsCardsMain3'>
                            <h4 style={{ fontWeight: "bold" }}>DIREITO DE FAMÍLIA</h4>
                            <p>Apresentamos nossos serviços de advocacia especializados em questões familiares, onde a compreensão e o profissionalismo se unem para oferecer soluções eficazes. Sabemos que situações como divórcio, guarda de filhos e pensão alimentícia podem ser emocionalmente exigentes. Nossa equipe está preparada para fornecer orientação legal sólida, garantindo que seus direitos sejam protegidos e que o processo transcorra com a menor adversidade possível.

                                Com anos de experiência, entendemos a importância de lidar com sensibilidade em assuntos familiares. Nosso compromisso é oferecer apoio jurídico que não apenas resolva questões legais, mas também promova o bem-estar emocional de todos os envolvidos. Seja qual for o desafio que você enfrenta, conte conosco para oferecer a expertise necessária para alcançar resoluções justas e equilibradas.
                            </p>
                            <div className='button'>
                                <ButtonBlue href="https://wa.me/5511997238693" target="_blank">Fale com um profissional</ButtonBlue>
                            </div>
                        </div>
                    </CardsArea>
                    <CardsArea>
                        <div className='textsCardsMain3'>
                            <h4 style={{ fontWeight: "bold" }}>DIREITO SUCESSÓRIO</h4>
                            <p> Apresentamos nossos serviços especializados em assessoria sucessória, dedicados a garantir que seu patrimônio e legado sejam preservados de acordo com suas vontades. Compreendemos a importância de planejar a transferência de bens e ativos de maneira eficaz e sem complicações. Nossa equipe de profissionais experientes está pronta para oferecer orientação estratégica em testamentos, heranças e distribuição equitativa.

                                Entendemos que questões sucessórias podem ser sensíveis e complexas. É por isso que buscamos abordagens personalizadas que atendam às suas necessidades e às de seus entes queridos. Nossa missão é proporcionar clareza e tranquilidade durante todo o processo, garantindo que suas decisões sejam refletidas de maneira legal sólida.
                            </p>
                            <div className='button'>
                                <ButtonBlue href="https://wa.me/5511997238693" target="_blank">Fale com um profissional</ButtonBlue>
                            </div>
                        </div>
                    </CardsArea>


                    <CardsArea>
                        <div className='textsCardsMain3'>
                            <h4 style={{ fontWeight: "bold" }}>DIREITO DE PROPRIEDADE</h4>
                            <p>Apresentamos nossos serviços especializados em advocacia de propriedade, focados em proteger seus direitos e interesses relacionados a bens imóveis. Seja você um proprietário, locatário ou investidor, nossa equipe está pronta para oferecer orientação precisa em todas as etapas. Com ampla experiência em questões de compra, venda, locação e litígios imobiliários, estamos comprometidos em encontrar soluções eficazes para suas necessidades.

                                Entendemos que a propriedade envolve complexidades legais que podem ser desafiadoras. É por isso que nossa abordagem é centrada na resolução de problemas, sempre visando resultados que atendam às suas expectativas. Seja a busca por transações suaves ou a resolução de conflitos, nossa equipe está pronta para defender seus interesses com rigor jurídico.
                            </p>
                            <div className='button'>
                                <ButtonBlue href="https://wa.me/5511997238693" target="_blank">Fale com um profissional</ButtonBlue>
                            </div>
                        </div>
                    </CardsArea>
                    <CardsArea>
                        <div className='textsCardsMain3'>
                            <h4 style={{ fontWeight: "bold" }}>DIREITO DO CONSUMIDOR</h4>
                            <p>Apresentamos nossos serviços especializados em Direito do Consumidor, dedicados a assegurar que seus direitos e interesses sejam respeitados em todas as transações comerciais. Nossa equipe compreende a importância de um tratamento justo e transparente por parte das empresas e está pronta para oferecer assistência legal eficaz. Seja para resolver casos de produtos defeituosos, práticas enganosas ou contratos abusivos, estamos comprometidos em buscar a justiça que você merece.

                                Entendemos que, como consumidor, você merece proteção contra práticas injustas. Nossa abordagem proativa visa não apenas resolver problemas, mas também prevenir potenciais dificuldades, proporcionando-lhe a confiança necessária em suas interações comerciais.
                            </p>
                            <div className='button'>
                                <ButtonBlue href="https://wa.me/5511997238693" target="_blank">Fale com um profissional</ButtonBlue>
                            </div>
                        </div>
                    </CardsArea>




                </div>
            </ContainerMorAreas>
        </>
    )
}

export default MainAreas3
