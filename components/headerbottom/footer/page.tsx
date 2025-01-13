"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function Footer(){
    return(
        <>
        <div className="sm-footer_wraper">
            <div className="sm-footer_container">
                <ul className="navmenu-list">
                    <li className="navmenu-list_item">
                        <a className="navmenu_link" href="">
                            <span className="menu-iocn_wraper">
                            <Icon icon="prime:bars" width="24" height="24" />
                            </span>
                            <h5 className="menu-title">menu</h5>
                        </a>
                    </li>
                    <li className="navmenu-list_item">
                        <a className="navmenu_link" href="">
                            <span className="menu-iocn_wraper">
                            <Icon icon="mdi:casino-chip" width="24" height="24" />
                            </span>
                            <h5 className="menu-title">Casinos</h5>
                        </a>
                    </li>
                    <li className="navmenu-list_item">
                        <a className="navmenu_link" href="">
                            <span className="menu-iocn_wraper">
                            <Icon icon="codicon:home" width="36" height="36"  style={{color: "lightgray" }}/>
                            </span>
                        </a>
                    </li>
                    <li className="navmenu-list_item">
                        <a className="navmenu_link" href="">
                            <span className="menu-iocn_wraper">
                            <Icon icon="ion:time-outline" width="24" height="24" />
                            </span>
                            <h5 className="menu-title">Slots</h5>
                        </a>
                    </li>
                    <li className="navmenu-list_item">
                        <a className="navmenu_link" href="">
                            <span className="menu-iocn_wraper">
                            <Icon icon="pepicons-pencil:internet-circle" width="24" height="24" />
                            </span>
                            <h5 className="menu-title">Virtual</h5>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}