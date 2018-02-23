import React, { Component } from 'react'
import cn from 'classnames'

export default class MuralLogo extends Component {
  state = {
    animate: false,
  }

  componentDidMount() {
    this.setState({ animate: true })
  }

  render() {
    const { animate } = this.state
    return (
      <div className={cn({ animate, 'mural-logo-wrapper': true })}>
        <div className="mural-letter-background">
          <svg className="mural-letter-svg" viewBox="0 0 12.924 10.642" width="12.924px" height="10.642px">
            <use xlinkHref="#letter-m"></use>
          </svg>
        </div>
        <div className="mural-letter-background">
          <svg className="mural-letter-svg" viewBox="0 0 11.178 10.838" width="11.178px" height="10.838px">
            <use xlinkHref="#letter-u"></use>
          </svg>
        </div>
        <div className="mural-letter-background letter-r">
          <svg className="mural-letter-svg" viewBox="0 0 10.124 10.648" width="10.124px" height="10.648px">
            <use xlinkHref="#letter-r"></use>
          </svg>
        </div>
        <div className="mural-letter-background">
          <svg className="mural-letter-svg" viewBox="0 0 12.567 10.646" width="12.567px" height="10.646px">
            <use xlinkHref="#letter-a"></use>
          </svg>
        </div>
        <div className="mural-letter-background">
          <svg className="mural-letter-svg" viewBox="0 0 8.106 10.633" width="8.106px" height="10.633px">
            <use xlinkHref="#letter-l"></use>
          </svg>
        </div>
        <style jsx>{`
          @import './static/scss/variables';

          .mural-logo {
            &-wrapper {
              padding: 30px 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          .mural-letter {
            &-background {
              background-color: $pink;
              width: 33px;
              height: 33px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 2px;
              margin-right: 3px;
              overflow: hidden;
              opacity: 0;
              transform: translate3d(0, -5px, 0);
              transition: transform 250ms cubic-bezier(0, 0, 0.14, 1.35), opacity 250ms ease-out;
              @for $i from 1 to 6 {
                &:nth-child(#{$i}) {
                  transition-delay: #{100ms * $i};
                }
              }
              &.letter-r {
                position: relative;
                &:before {
                  content: '';
                  background: #ef5ea1;
                  height: 0;
                  width: 0;
                  border-color: transparent #f4f4f4 #f4f4f4 transparent;
                  border-width: 0px;
                  border-style: solid;
                  border-radius: 1px 0 0 0;
                  display: block;
                  position: absolute;
                  right: 0;
                  bottom: 0;
                  z-index: 3;
                  opacity: 0;
                  transition: border-width 250ms ease-out 750ms, opacity 0ms ease-out 750ms;
                }
                &:after {
                  content: '';
                  background-color: #b31e48;
                  width: 7px;
                  height: 8px;
                  position: absolute;
                  bottom: 0;
                  right: 4px;
                  transform: skew(-44deg);
                  transform: translate3d(0, 100%, 0) skew(-44deg);
                  transition: transform 250ms ease-out 775ms;
                }
              }
            }
          }

          .animate {
            .mural-letter-background {
              transform: translate3d(0, 0, 0);
              opacity: 1;
            }
            .letter-r {
              &:before {
                opacity: 1;
                border-width: 4px;
              }
              &:after {
                transform: translate3d(0, 0, 0) skew(-44deg);
              }
            }
          }

        `}</style>
      </div>
    )
  }
}
