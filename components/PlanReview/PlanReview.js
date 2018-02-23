import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PlanReview extends Component {
  static propTypes = {
    planName: PropTypes.string,
    planDaysLeft: PropTypes.string,
    currentMembers: PropTypes.string,
  }
  static defaultProps = {
    planName: 'Free 30 Day Trial',
    planDaysLeft: '13 days left',
    currentMembers: '12',
  }

  render() {
    const { planName, planDaysLeft, currentMembers } = this.props
    return (
      <div className="plan-review standard-flex">
        <div className="standard-flex-column">
          <span className="plan-review-title">Current Plan</span>
          <span className="plan-review-description"><span className="strong-highlight">{ planName }</span></span>
          <span className="plan-review-days-left">You Have: <span className="strong-highlight">{ planDaysLeft }</span></span>
        </div>
        <div className="standard-flex-column">
          <span className="plan-review-small">Your team currently contains <span className="pink-highlight">{ currentMembers } members</span></span>
          <span className="plan-review-small">Want to <a href="standard-link">manage your team members?</a></span>
        </div>

        <style jsx>{`

          @import './static/scss/variables';

          .plan-review {
            line-height: 1.6em;
            max-width: 90%;
            margin: 0 auto 40px;
            padding: 20px 0;
            border-top: 1px solid #ededed;
            border-bottom: 1px solid #ededed;
            flex-direction: initial;
            justify-content: space-between;
            align-items: flex-end;
            @media(max-width: $mobileMax) {
              flex-direction: column;
              align-items: center;
            }
            &-small {
              color: $greyText;
              line-height: 1.4em;
              a {
                color: $greyText;
                text-decoration: none;
                border-bottom: 1px dotted $greyText;
                transition: all 250ms ease-out;
                &:hover {
                  color: $pink;
                  border-bottom-color: $pink;
                }
              }
            }
            .standard-flex-column {
              @media(max-width: $mobileMax) {
                align-items: center;
              }
              &:first-child {
                @media(max-width: $mobileMax) {
                  margin-bottom: 20px;
                }
              }
              &:last-child {
                font-size: 14px;
                align-items: flex-end;
              }
            }
            &-title {
              text-transform: uppercase;
            }
            &-description {
              font-family: ProximaNovaSemiBold;
              font-size: 24px;
            }
            &-days-left {
              font-size: 18px;
            }
          }
        `}</style>
      </div>
    )
  }
}
