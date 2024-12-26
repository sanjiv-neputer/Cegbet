"use client"
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";




export default function Header() {

  return (
    <div className="header-top_wraper">
      <div className="container costom-contianer">
        <div className="header_wraper">
          <div className="header-left">
            <Link className="logo" href="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="header-right">
            <div className="btn-box">
              <div className="btn-box">
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-link active" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <div className="icon-wraper">
                    <Icon className="icon" icon="si:unlock-fill" />
                  </div>
                  Login
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        {/* <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
                        <div className="formimage-wraper">
                          <img className="model-form_logo" src="https://assets.cegbet.com/front-end/assets/images/logo.png" alt="form-logo" />
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="account-box_wraper">
                          <div className="content-wraper">
                            <h4 className="modal-content-title">Alerting Unknown Presence!!</h4>
                            <p className="modal-content-descr">We are not familiar with your presence you are unknown to us. Kindly Login/Register To Play.</p>
                          </div>
                          <form action="" className="row g-4 account-form_wraper" method="post">
                            <div className="input-group col-12 input-group_wraper">
                              <span className="input-group-text icon" id="basic-addon1">
                              <Icon icon="la:user" className="la-user-iocn" width="18" height="18" />
                              </span>
                              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group col-12 input-group_wraper">
                              <span className="input-group-text icon" id="basic-addon1">
                              <Icon icon="mdi:password-outline"  className="la-user-iocn" width="18" height="18" />
                              </span>
                              <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                            </div>
                            <div className="col-12 input-group_wraper">
                              <div className="form-group">
                                <button type="submit" className="form-login-btn active w-100">
                                  Login
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-infor_wraper d-none d-sm-flex">
              <span>Username</span>
              <span>cgtestuser</span>
            </div>
            <div className="user-infor_wraper d-none d-sm-flex">
              <span>Balance</span>
              <span>"Rs 779.56"</span>
            </div>
            <div className="user-infor_wraper d-flex d-sm-none">
              <h6 className="user_name">cgtestuser</h6>
              <p className="total-amnt">"Rs 779.56"</p>
            </div>
            <div className="user-infor_wraper d-none d-sm-flex">
              <a href="" className="btn setting-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <img className="seteting-image" src="https://assets.cegbet.com/front-end/assets/images/icon-settings.png" alt="" />

              </a>

              <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
