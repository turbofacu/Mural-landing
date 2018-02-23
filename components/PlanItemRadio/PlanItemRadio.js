import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PlanItemRadio extends Component {
  static propTypes = {
    date: PropTypes.string,
    quantity: PropTypes.string,
    checked: PropTypes.bool,
  }
  static defaultProps = {
    date: null,
    quantity: null,
    checked: null,
  }
  render() {
    const { date, quantity, checked } = this.props

    return (
      <div className="plan-item-radio">
        {checked &&
          <div className="air-1">
            <label htmlFor="month">
              <input
                className="plan-item-radio-radio"
                id="month"
                type="radio"
                value={quantity}
                name="planSelect"
                defaultChecked
              />
              <div>
                <span className="plan-item-radio-quantity">${quantity}</span>
                <span className="plan-item-radio-date"> / {date}</span>
              </div>
            </label>
          </div>
        }
        {!checked &&
          <div>
            <label htmlFor="year">
              <input
                className="plan-item-radio-radio"
                id="year"
                type="radio"
                value={quantity}
                name="planSelect"
              />
              <div>
                <span className="plan-item-radio-quantity">${quantity}</span>
                <span className="plan-item-radio-date"> / {date}</span>
              </div>
            </label>
          </div>
        }
        <style jsx>{`
          .plan-item-radio {
            label {
              cursor: pointer;
              display: flex;
              align-items: center;
            }
            &-radio {
              &:checked + div .plan-item-radio-quantity {
                font-size: 32px;
              }
              &:checked + div .plan-item-radio-date {
                font-size: 16px;
              }
            }
            &-quantity, &-date {
              transition: font-size 150ms ease-out;
            }
            &-quantity {
              font-family: ProximaNovaBold;
              margin-left: 10px;
            }
            &-date {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    )
  }
}
