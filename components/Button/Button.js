import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Button extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    text: null,
    url: null,
    className: '',
  }

  render() {
    const { text, url, className } = this.props
    return (
      <a className={`button ${className}`} href={url}>
        {text}
        <style jsx>{`
          @import './static/scss/variables';

          .button {
            color: white;
            font-size: 18px;
            text-transform: uppercase;
            text-decoration: none;
            text-align: center;
            width: 100%;
            padding: 10px 0;
            border-radius: 4px;
            display: block;
            transition: all 250ms ease-out;
            @media(max-width: $tabletMax) and (min-width: $tabletMin) {
              font-size: 16px;
            }
            @media(max-width: $mobileMax) {
              max-width: 300px;
            }
            &.pink {
              background-color: $pink;
              &:hover {
                background-color: darken($pink, 5%);
              }
            }
            &.border {
              color: $black;
              border: 1px solid $black;
              box-sizing: border-box;
              &:hover {
                color: white;
                background-color: $black;
              }
            }
            &.black {
              background-color: $black;
              &:hover {
                background-color: darken($black, 10%);
              }
            }
          }
        `}</style>
      </a>
    )
  }
}
