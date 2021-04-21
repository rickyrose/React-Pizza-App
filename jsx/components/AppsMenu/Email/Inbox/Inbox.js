import React, {Fragment } from "react";
import {Link } from "react-router-dom";
import InboxMessage from "./InboxMessage";
import {Dropdown } from "react-bootstrap";
import PageTitle from "../../../layouts/PageTitle";

const Inbox = () =>{
    const Message = [
        {
            text:
            "IDK, A MESSAGE ABOUT SOMETHING",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text:
            "IDK, A MESSAGE ABOUT SOMETHING",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text:
            "IDK, A MESSAGE ABOUT SOMETHING",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text:
            "IDK, A MESSAGE ABOUT SOMETHING",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text:
            "IDK, A MESSAGE ABOUT SOMETHING",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text:
            "IDK, A MESSAGE ABOUT SOMETHING",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text:
            "IDK, A MESSAGE ABOUT SOMETHING",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text:
            "IDK, A MESSAGE ABOUT SOMETHING",
            time: "11.49 am",
            icon: "fa fa-star",
        },       
    ];
    return (
        <Fragment>
            <PageTitle activeMenu="Inbox" motherMenu="Email" />
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="email-left-box px-0 mb-3">
                                <div className="p-0">
                                    <Link to="/email-compose"
                                    className="btn btn-primaty btn-block">
                                        Compose
                                    </Link>
                                </div>
                                <div className="mail-list mt-4">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}