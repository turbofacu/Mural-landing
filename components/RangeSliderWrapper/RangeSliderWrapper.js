import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range';

export default class PlanItem extends Component {
  static propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    changeSliderValues: PropTypes.func.isRequired,
  }

  static defaultProps = {
    max: 30,
    min: 6,
  }
  constructor(props) {
    super(props);
    this.state = { value: 6 }
  }

  changeValues = (value) => {
    this.setState({ value })
    this.props.changeSliderValues(value)
  }

  render() {
    const { max, min } = this.props

    return (
      <div className="range-slider air-4">
        <InputRange
          maxValue={max}
          minValue={min}
          value={this.state.value}
          onChange={value => this.changeValues(value)}
        />
        <style jsx>{`
          @import './static/scss/variables';

          .range-slider {
            width: 100%;
          }

        `}</style>
        <style jsx global>{`

          @import './static/scss/variables';

          .input-range {
            width: 100%;
            &__track {
              width: 100%;
              height: 8px;
              background-color: #4c4c4c;
              border-radius: 8px;
              position: relative;
              &--active {
                background-color: $pink;
                height: 8px;
              }
            }
            &__slider {
              width: 18px;
              height: 18px;
              transform: translate3d(-9px, 0, 0);
              cursor: pointer;
              &:before, &:after {
                content: '';
                background-color: #d8d8d8;
                border-radius: 100%;
                position: absolute;
                z-index: 2;
              }
              &:before {
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
              }
              &:after {
                background-color: black;
                width: 18px;
                height: 18px;
                bottom: -2px;
                right: -2px;
                z-index: 1;
              }
              &-container {
                top: -5px;
              }
            }
            &__label-container {
              display: none;
            }
          }
        `}</style>
      </div>
    )
  }
}
