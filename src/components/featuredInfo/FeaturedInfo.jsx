import React from "react"
import "./featuredInfo.css"

import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,100</span>
          <span className="featuredMoneyRate">-15.00 <ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
      {/* 2---------- */}
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,100</span>
          <span className="featuredMoneyRate">-1.30 <ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
      {/* 3----------- */}
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,100</span>
          <span className="featuredMoneyRate">+5.00 <ArrowUpward className="featuredIcon"/></span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
