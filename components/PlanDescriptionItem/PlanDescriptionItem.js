import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default class PlanDescriptionItem extends Component {
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.number,
      PropTypes.object,
    ])),
  }
  static defaultProps = {
    item: {},
  }

  state = {
    hideMobile: true,
  }

  showList = () => {
    this.setState({ hideMobile: !this.state.hideMobile })
  }

  render() {
    const { hideMobile } = this.state
    const { item } = this.props
    return (
      <div className="plan-description-item">
        <span className="plan-description-item-title air-2">Choose this plan if you-re a...</span>
        <ul className="plan-description-item-tip-list air-3">
          {item.includes.planTips.map((e, i) => (
            <li className="plan-description-item-tip" key={`${e}-${i}`}>{e}</li>
          ))}
        </ul>
        <span
          className={cn({ 'plan-description-item-type pink-highlight air-6': true, hideMobile })}
          onClick={this.showList}
          role="button"
          tabIndex={0}
        >{item.planName} Includes<span className="hidden-mobile-down">:</span></span>
        <div className={cn({ hideMobile })}>
          <ul className={cn({ 'plan-description-includes-list': true, hideMobile })}>
            {item.includes.features.map((e, i) => (
              <li className="plan-description-includes-list-item air-3" key={`${e}-${i}`}>{e}</li>
            ))}
          </ul>
        </div>

        <style jsx>{`
          @import './static/scss/variables';

          .plan-description {
            &-item {
              padding: 0 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding-bottom: 30px;
              @media(min-width: $tabletMin) {
                width: 33.3333%;
                flex-basis: 33.3333%;
              }
              &:nth-child(2) {
                position: relative;
                &:before, &:after {
                  content: '';
                  background-color: #cccccc;
                  width: 1px;
                  position: absolute;
                  top: 20px;
                  bottom: 0;
                }
                &:before {
                  left: 0;
                }
                &:after {
                  right: 0;
                }
              }
              &-title {
                font-size: 13px;
                font-family: ProximaNovaSemiBold;
                text-align: center;
                text-transform: uppercase;
              }
              &-tip {
                color: #888888;
                font-size: 14px;
                text-align: center;
                &:first-child {
                  margin-bottom: 10px;
                }
                &:last-child {
                  padding-top: 10px;
                  position: relative;
                  &:before {
                    content: '';
                    background-color: #d8d8d8;
                    width: 4px;
                    height: 4px;
                    border-radius: 100%;
                    position: absolute;
                    top: -2px;
                    left: calc(50% - 4px / 2);
                  }
                }
                &-list {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  padding-bottom: 60px;
                  position: relative;
                  box-sizing: border-box;
                  @media(min-width: $desktopMin) {
                    min-height: 128px;
                  }
                  @media(min-width: $tabletMin) {
                    min-height: 150px;
                  }
                  @media(max-width: $mobileMax) {
                    padding-bottom: 20px;
                  }
                  &:before {
                    content: '';
                    background-color: #cccccc;
                    width: 40px;
                    height: 2px;
                    position: absolute;
                    bottom: 0;
                    left: calc(50% - 40px / 2);
                  }
                }
              }
              &-type {
                font-family: ProximaNovaBold;
                text-transform: uppercase;
                @media(max-width: $mobileMax) {
                  position: relative;
                  padding-right: 30px;
                  margin-bottom: 20px;
                }
                &.hideMobile {
                  &:before {
                    transform: rotate(0);
                  }
                }
                &:before {
                  @media(max-width: $mobileMax) {
                    content: '';
                  }
                  width: 0;
                  height: 0;
                  border-left: 7px solid transparent;
                  border-right: 7px solid transparent;
                  border-top: 10px currentColor solid;
                  position: absolute;
                  top: calc(50% - 14px / 2);
                  right: 0;
                  transform: rotate(180deg);
                }
              }
            }
            &-includes-list {
              font-family: ProximaNovaSemiBold;
              display: flex;
              flex-direction: column;
              align-items: center;
              &-item {
                text-align: center
              }
              &.hideMobile {
                @media( max-width: $mobileMax ) {
                  display: none;
                }
              }
            }
          }
        `}</style>
      </div>
    )
  }
}
