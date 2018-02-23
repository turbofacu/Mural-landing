import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import RangeSliderWrapper from '../RangeSliderWrapper/RangeSliderWrapper'

export default class PlanItemWithSlider extends Component {
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ])),
  }
  static defaultProps = {
    item: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      sliderUsersTotal: 6,
      sliderPrice: 600,
    }
  }

  changeSliderValues = (value) => {
    this.setState({ sliderUsersTotal: value, sliderPrice: value * 100 })
  }

  render() {
    const { sliderUsersTotal, sliderPrice } = this.state
    const { item } = this.props

    return (
      <div className={`plan-item ${item.planName === 'Enterprise' && 'enterprise'}`}>
        <div className="plan-item-content">
          <span className="plan-item-title">{item.planName}</span>
          <div className="plan-item-users-wrapper this-slider-wrapper">
            <span className="plan-item-users-number">{sliderUsersTotal}</span>
            <span className="plan-item-users-text">users</span>
          </div>
          <div className="plan-item-range-slider-wrapper">
            <RangeSliderWrapper
              min={item.ranges.min}
              max={item.ranges.min}
              changeSliderValues={this.changeSliderValues}
            />
            <div className="plan-item-range-slider-price-wrapper text-center">
              <span className="plan-item-range-slider-price">${sliderPrice}</span>
              <span className="plan-item-range-slider-date"> / year</span>
            </div>
          </div>
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
