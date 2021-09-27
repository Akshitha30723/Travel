import React from 'react';
import './Dashboard.css';
import Side from './sidebar';
import Search from './Searching';
import img from './assets/img.jpg';
import Menu from './Menu/Menu';
import Experiences from './Experiences/Experiences';
import Hotels from './Hotel/Hotels';
function Dashboard(){
return(
    <div className="dsh">
      <div className='dashboard'>
          <div>
              <Side/>
          </div>
          <div className="content">
              <div className="top-sec">
                  <div>
                      <Search/>
                  </div>
                  <div className="prof">
                  Hello,<b> User</b> <a href="/profile"><img className="imge" src={img}/></a>
                  </div>
              </div>
              <div className="box-menu">
                  <Menu/>
              </div>
              <div className="Exp">
                    <div>
                    <Experiences/>
                    </div>
                    <div className="prof1">
                   <a href="/fav">See all</a>
                </div>
                </div>
                <div className="hot">
                    <div>
                    <Hotels/>
                    </div>
                    <div className="prof1">
                   <a href="/hotels">See all</a>
                </div>
                </div>
          </div>
      </div>
    </div>
)
}
export default Dashboard;