import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PlanItemRadio from '../PlanItemRadio/PlanItemRadio'
import Button from '../Button/Button'

export default class PlanItem extends Component {
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
      PropTypes.number,
    ])),
  }
  static defaultProps = {
    item: {},
  }

  render() {
    const { item } = this.props

    return (
      <div className={`plan-item ${item.planName === 'Enterprise' && 'enterprise'}`}>
        <div className="plan-item-content">
          <span className="plan-item-title">{item.planName}</span>
          {item.ranges && item.ranges.type !== 'slider' &&
            <div className="plan-item-users-wrapper air-4">
              <span className="plan-item-users-number">{item.planUsers}</span>
              <span className="plan-item-users-text">users</span>
            </div>
          }
          {item.ranges && item.ranges.type === 'bullets' &&
            <form className="plan-item-bullets-wrapper air-3">
              {item.ranges.values.map(e => (
                <PlanItemRadio
                  quantity={e.quantity}
                  date={e.date}
                  checked={e.checked}
                  key={e.date}
                />
              ))}
            </form>
          }
          {item.buttons.map(e => (
            <Button text={e.text} url={e.url} className={e.type} key={e.text} />
          ))}
        </div>
        <style jsx>{`
          @import './static/scss/variables';

          .plan-item {
            &.enterprise {
              .plan-item-users-wrapper {
                margin-bottom: 92px;
              }
            }
            &-content {
              padding: 30px 35px;
              display: flex;
              flex-direction: column;
              align-items: center;
              position: relative;
              z-index: 2;
              @media(max-width: $tabletMax) and (min-width: $tabletMin) {
                padding: 30px 20px;
              }
            }
            &-title {
              font-size: 32px;
              margin-bottom: 25px;
            }
            &-users {
              &-wrapper {
                &:not(.this-slider-wrapper) {
                  padding: 20px 20px;
                  border-bottom: 1px solid #b7b7b7;
                  margin-bottom: 40px;
                }
                padding: 20px 20px 0;
                margin-bottom: 15px;
                border-top: 1px solid #b7b7b7;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              &-number {
                font-size: 32px;
              }
            }
            &-range-slider {
              &-wrapper {
                width: 100%;
              }
              &-price {
                font-family: ProximaNovaSemiBold;
                font-size: 32px;
                &-wrapper {
                  margin-bottom: 54px;
                }
              }
            }
          }
        `}</style>

        <style jsx global>{`
          .plan-item {
            &.enterprise {
              .plan-item-content {
                .button {
                  &:nth-child(3) {
                    margin-bottom: 10px;
                  }
                }
              }
            }
          }
        `}</style>
      </div>
    )
  }
}
