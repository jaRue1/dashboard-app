import React from "react"
import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"
function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Kurama Nine</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        {/* 2 ------------- */}
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Kurama Nine</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        {/* 3 ------------- */}
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Kurama Nine</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        {/* 4 ------------- */}
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Kurama Nine</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
       {/* 5 ------------- */} 
       <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Kurama Nine</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
