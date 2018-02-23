import React, { Component } from 'react'

import { PlanItems as items } from '../../lib/PlanItems'

import PlanDescriptionItem from '../PlanDescriptionItem/PlanDescriptionItem'

export default class PlanDescriptionList extends Component {
  render() {
    return (
      <div className="standard-flex hidden-mobile-down">
        {items.map((e, i) => (
          <PlanDescriptionItem item={e} key={i} />
        ))}
      </div>
    )
  }
}
