"use client"
import "@/public/assets/sass/pages/notification.css"
import { Icon } from "@iconify/react/dist/iconify.js";
import Headerbottom from "@/components/headerbottom/page";
import Footer from "@/components/headerbottom/footer/page";

export default function Notifications(){
    return(
        <>
          <Headerbottom/>
        <section className="inner-banner_wrapper">
           <div className="container">
             <div className="row justify-center">
               <div className="col-lg-7 col-xl-6 text-lg-center flex justify-between lg:justify-center items-center z-10">
                 <h2 className="title text-[18px] sm:text-[28px] font-normal text-white">Notification List</h2>
                <div className="user-toggler  d-lg-none">        
                  <a href="#" className="btn setting-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" >
                <Icon icon="la:sliders-h" width="24" height="24"  style={{color: '#fff'}} />
                </a>
               </div>
             </div>
          </div>
       </div>
    </section>            
        
    <div className="dashboard-section">
     <div className="container">
        <div className="row">
             <div className="col-lg-3 col-md-4 z-10">
            <div className="offcanvas-body_wraper">
             <div className="user-profile_wraper">
                <div className="image_wraper">
            <img src="https://assets.cegbet.com/assets/images/users/avatars/no-image.png" alt="profile-image" />
            </div>
            </div>
        <div className="user-info">
            <h5 className="user-welcome">Welcome,<span className="user-name">User name</span></h5>
            <p className="balance-content">Your Balance: Rs 00000</p>
         </div>
      <div className="user-acc_wraper">
        <a href="#" className="acc-info_box">
         <span className="icon_wraper"><Icon icon="flowbite:landmark-outline" width="22" height="22" style={{ color: '#fff', flexShrink: '0' }} /></span>
          <p className="text-info">Deposit</p>
        </a>
        <a href="#" className="acc-info_box">
        <span className="icon_wraper"> <Icon icon="la:donate" width="22" height="22"  style={{color: '#fff', flexShrink: '0'}} />  </span>
        <p className="text-info">Widthdraw</p>
         </a>
      </div>
        <div className="user-dashboard_wraper">
         <ul className="user-dashboard-tab">
           <li className="tab-item">
              <a className="tab-item_link" href="#">Dashboard</a>
            </li>
            <li className="tab-item">
              <a className="tab-item_link" href="#">Deposit</a>
              </li>
             <li className="tab-item">
                <a className="tab-item_link" href="#">Withdraw
                </a>
                </li>
            <li className="tab-item"><a className="tab-item_link" href="#">Bonus</a></li>
            <li className="tab-item"><a className="tab-item_link" href="#">Favourite Games</a></li>
            <li className="tab-item"><a className="tab-item_link" href="#">Referral Deposits</a></li>
            <li className="tab-item"><a className="tab-item_link" href="#">Account Setting</a></li>
            <li className="tab-item"><a className="tab-item_link" href="#">Notifications</a></li>
            <li className="tab-item"><a className="tab-item_link" href="#">Logout</a></li>
          </ul>
        </div>
        </div>
         </div>
          <div className="col-lg-9 col-md-8 z-10">
            <div className="customer-notification_wraper">
                <div className="customer-card mb-2">
                    <span className="header">
                        <a className="header-link" href="#">NPR 1000 has been deposited to your account.</a>
                    </span>
                    <p className="notification-date">5 months ago</p>
                </div>
                <div className="customer-card mb-2">
                    <span className="header">
                        <a className="header-link" href="#">NPR 1000 has been deposited to your account.</a>
                    </span>
                    <p className="notification-date">4 months ago</p>
                </div>
                <div className="customer-card mb-2">
                    <span className="header">
                        <a className="header-link" href="#">NPR 1000 has been deposited to your account.</a>
                    </span>
                    <p className="notification-date">3 months ago</p>
                </div>
                <div className="customer-card mb-2">
                    <span className="header">
                        <a className="header-link" href="#">NPR 1000 has been deposited to your account.</a>
                    </span>
                    <p className="notification-date">2 months ago</p>
                </div>
                <div className="customer-card mb-2">
                    <span className="header">
                        <a className="header-link" href="#">NPR 1000 has been deposited to your account.</a>
                    </span>
                    <p className="notification-date">1 months ago</p>
                </div>
            </div>                        
        </div>
     </div>
  </div>
 </div>
         <Footer/>
        </>
    )

}