import React, {Fragment } from "react";
import {Link} from "react-router-dom";
import profileImage from "../../../../images/avatar/1.jpg";
import {Dropdown } from "react-bootstrap";
import PageTitle from "../../../layouts/PageTitle";

const Read = () =>{
    return(
        <Fragment>
            <PageTitle activeMenu="Read" motherMenu="Email" />
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="email-left-box generic-width px-0 mb-5">
                                <div className="p-0">
                                    <Link to="/email-compose" className="btn btn-primary btn-block">
                                        Compose
                                    </Link>
                                </div>
                                <div className="mail-list mt-4">
                                    <Link to="/email-inbox" className="list-group-item active">
                                        <i className="fa fa-inbox font-18 align -middle mr-2"></i>
                                        Inbox
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}