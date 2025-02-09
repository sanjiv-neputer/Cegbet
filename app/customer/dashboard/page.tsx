"use client"
import "@/public/assets/sass/pages/dashboard.css"
import { Icon } from "@iconify/react/dist/iconify.js";
import Headerbottom from "@/components/headerbottom/page";
import Footer from "@/components/headerbottom/footer/page";

export default function Dashboard(){
    return(
        <>
         <Headerbottom/>
          <section className="inner-banner_wrapper">
            <div className="container">
                <div className="row justify-center">
                  <div className="col-lg-7 col-xl-6 text-lg-center flex justify-between lg:justify-center items-center z-10">
                        <h2 className="title text-[18px] sm:text-[28px] font-normal text-white">Dashboard</h2>
                      <div className="user-toggler  d-lg-none">        
                    <a
                     href=""
                     className="btn setting-btn"
                     type="button"
                     data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvasScrolling"
                     aria-controls="offcanvasScrolling"
                    >
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
                        <li className="tab-item"><a className="tab-item_link" href="#">Dashboard</a></li>
                        <li className="tab-item"><a className="tab-item_link" href="#">Deposit</a></li>
                        <li className="tab-item"><a className="tab-item_link" href="#">Withdraw</a></li>
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
                    <div className="row payment-details_wraper">
                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-10 dashboard-card_wraper">
                         <div className="dashborad-card-content">
                            <h1 className="price">Rs 0000</h1>
                            <p className="info">TOTAL DEPOSIT</p>
                         </div>
                         <div className="dashboard-card_iocn">
                         <Icon icon="la:wallet" width="20" height="20"  style={{color: '#fff'}} />
                         </div>
                       </div>
                       <div className="col-lg-6 col-xl-4 col-md-6 col-sm-10 dashboard-card_wraper">
                         <div className="dashborad-card-content">
                            <h1 className="price">Rs 0000</h1>
                            <p className="info">TOTAL WITHDRAW</p>
                         </div>
                         <div className="dashboard-card_iocn">
                         <Icon icon="la:money-check" width="20" height="20"  style={{color: '#fff'}} />
                         </div>
                       </div>
                       <div className="col-lg-6 col-xl-4 col-md-6 col-sm-10 dashboard-card_wraper">
                         <div className="dashborad-card-content">
                            <h1 className="price">Rs 0000</h1>
                            <p className="info">TOTAL BONUS</p>
                         </div>
                         <div className="dashboard-card_iocn">
                         <Icon icon="la:wallet" width="20" height="20"  style={{color: '#fff'}} />
                         </div>
                       </div>

                    </div>
                    <div className="user-info-table_wraper">
                    <div className="search-section">
                       <div className="data-table_lenght">
                        <label htmlFor="total-data">Show 
                            <select className="data-number" name="" id="total-data">
                                <option value="10">10</option>
                                <option value="10">25</option>
                                <option value="10">50</option>
                                <option value="10">10</option>
                            </select>
                            entries
                        </label>
                       </div>
                       <div className="search-data">
                        <h2 className="seach-title">Search :</h2>
                       <input type="text" id="search" placeholder="" />
                       </div>
                   </div>
                     <table className="table-data-section" id="dataTable">
                       <thead>
                       <tr>
                           <th>SN</th>
                           <th>Transaction ID</th>
                           <th>Game</th>
                           <th>Stake</th>                   
                           <th>Win</th>
                           <th>Date</th>
                         </tr>
                         {/* <tr>
                           <th>SN</th>
                           <th>Amount</th>
                           <th>Transaction ID</th>
                           <th>Account info</th>
                           <th>Status</th>                   
                           <th>Date</th>
                           <th>Bonus</th>
                         </tr> */}
                       </thead>
                     <tbody>
                        <tr>
                            <td valign="top" colSpan={6} className="datatable-empty">No data available in table</td>
                        </tr>
                         {/* <tr>
                           <td>1</td>
                           <td>1,000.00</td>
                           <td>#34343</td>
                           <td>
                             <div className="account-list-details">
                                <p className="details">Bank Name: 
                                    <span className="text-red-500 ml-[4px]">CG Bank</span>
                                </p>
                                <p className="details">Account Name: 
                                    <span className="text-red-500 ml-[4px]">CG Default Bank</span>
                                </p>
                                <p className="details">Account Number: 
                                    <span className="text-red-500 ml-[4px]">1234678099</span>
                                </p>
                                <p className="details">Branch: 
                                    <span className="text-red-500 ml-[4px]">Default Branch</span>
                                </p>
                                <p className="details">Type: 
                                    <span className="text-red-500 ml-[4px]">Bank</span>
                                </p>
                             </div>
                           </td>
                           <td>Sucess</td>
                           <td>03 jan,2025 at 12:26 PM</td>
                           <td>-</td>
                         </tr> */}
                        </tbody>
                     </table>
                     <div className="table-footer-entries">
                     <span className="showing">Showing 0 to 0 of 0 entries</span>
                     </div>
                     <div className="dashboard-pagination">
                      <ul className="pagination-list">
                        <li className="pagination-item">
                            <a className="pagination-link" href="#">
                            <Icon icon="solar:arrow-left-outline" width="18" height="18"  style={{color: '#fff' }} />
                            </a>
                        </li>
                        <li className="pagination-item">
                            <a className="pagination-link" href="#">
                            <Icon icon="solar:arrow-right-outline" width="18" height="18"  style={{color: '#fff'}} />
                            </a>
                        </li>
                      </ul>
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