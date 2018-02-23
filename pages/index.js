import React, { Component } from 'react'
import Head from 'next/head'
import cn from 'classnames'

import MuralLogo from '../components/MuralLogo/MuralLogo'
import PlanReview from '../components/PlanReview/PlanReview'
import PlanItemsWrapper from '../components/PlanItemsWrapper/PlanItemsWrapper'
import PlanDescriptionList from '../components/PlanDescriptionList/PlanDescriptionList'
import SVGSprites from '../components/SVGSprites/SVGSprites'

export default class extends Component {
  state = {
    animate: false,
  }

  componentDidMount() {
    this.setState({ animate: true })
  }
  render() {
    const { animate } = this.state
    return (
      <div>
        <SVGSprites />
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="./static/css/fonts.css" />
        </Head>
        <MuralLogo />
        <div className={cn({ animate, container: true })}>
          <section className="checkout-view">
            <header>
              <h1 className="section-title standard-title air-3" style={{ display: 'none' }}>Ready to take the next step?</h1>
              <p className="section-title standard-title air-3">Ready to take the next step?</p>
            </header>
          </section>

          <PlanReview />

          <p className="section-subtitle standard-title air-6" style={{ display: 'none' }}>Choose a plan that works best for your needs and your team size.<br />And leave some room to grow!</p>

          <PlanItemsWrapper />

          <p className="checkout-hint air-4">Questions? <a className="checkout-hint-link" href="mailto:mural@mural.com">Send us an email</a> or give us a call at <a className="checkout-hint-link" href="tel:+14158003524">+1(415) 800 3524</a></p>

          <PlanDescriptionList />

        </div>

        <style jsx global>{`
          @import './static/scss/variables';

          * {
            margin: 0;
            padding: 0;
            border: 0;
            list-style: none;
          }

          body {
            font-family: ProximaNova, sans-serif;
            font-size: 16px;
            color: $black;
            background-color: #f4f4f4;
          }

          .container {
            background-color: white;
            max-width: 980px;
            margin: 0 auto;
            padding: 60px 35px;
            opacity: 0;
            transition: opacity 500ms ease-out;
            @media(max-width: $tabletMax) {
              padding: 60px 15px;
            }
            @media(max-width: $mobileMax) {
              padding: 30px 15px;
            }
            &.animate {
              opacity: 1;
            }
          }

          .standard-flex {
            display: flex;
            align-content: center;
            &.column {
              flex-direction: column;
            }
          }

          .standard-flex-column {
            display: flex;
            flex-direction: column;
          }

          .text-center {
            text-align: center;
          }

          .hidden-mobile-down {
            @media(max-width: $mobileMax) {
              display: none;
            }
          }

          .hidden-tablet-up {
            @media(min-width: $tabletMin) {
              display: none;
            }
          }

          @for $i from 1 to 7 {
            .air-#{$i} {
              margin-bottom: #{ $i * 10px};
            }
          }

          .strong-highlight {
            font-family: ProximaNovaSemibold;
          }

          .standard-link {
            text-decoration: dotted;
          }

          .pink-highlight {
            color: $pink;
          }

          .standard-title {
            font-family: ProximaNovaLight;
            text-align: center;
          }

          .section-title {
            font-size: 32px;
            text-transform: uppercase;
            @media(max-width: $mobileMax) {
              font-size: 26px;
            }
          }

          .section-subtitle {
            font-size: 24px;
          }

          .title-span {
            font-family: ProximaNovaLight;
          }

          .checkout {
            &-hint { //On the AI file this is a .jpg so I tried to guess
              font-size: 22px;
              text-align: center;
              line-height: 1.6em;
              &-link {
                color: $black;
                text-decoration: none;
                font-family: ProximaNovaSemiBold;
                border-bottom: 1px dotted $black;
                transition: all 250ms ease-out;
                &:hover {
                  color: $pink;
                  border-bottom-color: $pink;
                }
              }
            }
          }

        `}</style>
      </div>
    )
  }
}
