import React, { Component } from 'react'
import './dashboard.css'
import Classes from '../..//components/yourClasses/yourClasses.component.js'
import Events from '../..//components/events/events.component.js'
import News from '../..//components/news/news.component.js'
import Headerbar from  '../..//components/headerbar/HeaderTaskbar.js'
import Sidebar from '../..//components/sidebar/sidebar.component.js'
import Picture from '../../assets/createPicture.png'

class DashPage extends Component {
	render() {
		return(

			<React.Fragment>
                <div className="d-flex align-items-end flex-row">
               
               <div class="order-1 p-2">
                <Classes/>
                </div>
                
                <div class="order-2 p-2">
                <Events/>
                </div>
				</div>
				<div className="d-flex align-items-end flex-row">
               
               <div class="order-1 p-2">
                <Classes/>
                </div>
                
                <div class="order-2 p-2">
                <News/>
                </div>
				</div>
			</React.Fragment>
		)
	}
}
export default DashPage
