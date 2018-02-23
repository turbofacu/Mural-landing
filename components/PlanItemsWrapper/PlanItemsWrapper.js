import React, { Component } from 'react'

import { PlanItems as items } from '../../lib/PlanItems'

import PlanItem from '../PlanItem/PlanItem'
import PlanItemWithSlider from '../PlanItemWithSlider/PlanItemWithSlider'
import PlanDescriptionItem from '../PlanDescriptionItem/PlanDescriptionItem'

export default class PlanItemsWrapper extends Component {
  render() {
    return (
      <div className="plan-items-list standard-flex air-3">
        {items.map((e, i) => (
          <div className="plan-item-wrapper" key={i}>
            {e.ranges.type === 'slider' &&
              <PlanItemWithSlider item={e} />
            }
            {e.ranges.type !== 'slider' &&
              <PlanItem item={e} key={i} />
            }
            <div className="hidden-tablet-up">
              <PlanDescriptionItem item={e} />
            </div>
          </div>
        ))}
        <style jsx>{`
          @import './static/scss/variables';

          .plan-item {
            &s-list {
              @media(max-width: $mobileMax) {
                flex-direction: column;
              }
            }
            &-wrapper {
              border: 2px solid #393939;
              @media( min-width: $tabletMin ) {
                width: 30%;
              }
              @media(max-width: $mobileMax) {
                margin-bottom: 20px;
              }
              &:nth-child(1) {
                @media(max-width: $mobileMax) {
                  order: 2;
                }
              }
              &:nth-child(2) {
                color: white;
                position: relative;
                @media( max-width: $mobileMax ) {
                  background-color: #393939;
                  order: 1;
                }
                @media( min-width: $tabletMin ) {
                  width: 40%;
                }
                &:before {
                  @media( min-width: $tabletMin ) {
                    content: '';
                  }
                  background-color: #393939;
                  position: absolute;
                  top: -25px;
                  left: -4px;
                  right: -4px;
                  bottom: -10px;
                }
              }
              &:nth-child(3) {
                @media(max-width: $mobileMax) {
                  order: 3;
                }
              }
            }
          }
        `}</style>
      </div>
    )
  }
}
