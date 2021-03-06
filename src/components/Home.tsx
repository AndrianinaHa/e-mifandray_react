import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';

function Homes(){
    return(
        <div className="container">
<div className="profile-page tx-13">
    <div className="row">
        <div className="col-12 grid-margin">
            <div className="profile-header">
                <div className="cover">
                <div className="gray-shade"></div>
                    <figure>
                        <img src="https://bootdey.com/img/Content/bg1.jpg" className="img-fluid" alt="profile cover"/>
                    </figure>
                    <div className="cover-body d-flex justify-content-between align-items-center">
                    
                    
                        <div>
                            <img className="profile-pic" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="profile"/>
                            
                        </div>
                        <div className="d-none d-md-block">
                            <button className="btn btn-primary btn-icon-text btn-edit-profile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit btn-icon-prepend">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg> Edit profile
                            </button>
                        </div>
                    </div>
                </div>
                <div className="header-links">
                    <ul className="links d-flex align-items-center mt-3 mt-md-0">
                        <li className="header-link-item d-flex align-items-center active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-columns mr-1 icon-md">
                                <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                            </svg>
                            <a className="pt-1px d-none d-md-block" href="#">Timeline</a>
                        </li>
                        <li className="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user mr-1 icon-md">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <a className="pt-1px d-none d-md-block" href="#">About</a>
                        </li>
                        <li className="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users mr-1 icon-md">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <a className="pt-1px d-none d-md-block" href="#">Friends <span className="text-muted tx-12">3,765</span></a>
                        </li>
                        <li className="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-image mr-1 icon-md">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <a className="pt-1px d-none d-md-block" href="#">Photos</a>
                        </li>
                        <li className="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video mr-1 icon-md">
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                            <a className="pt-1px d-none d-md-block" href="#">Videos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="row profile-body">

        <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
            <div className="card rounded">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="card-title mb-0">About</h6>
                        <div className="dropdown">
                            <button className="btn p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal icon-lg text-muted pb-3px">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-2 icon-sm mr-2">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg> <span className="">Edit</span></a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-git-branch icon-sm mr-2">
                                        <line x1="6" y1="3" x2="6" y2="15"></line>
                                        <circle cx="18" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M18 9a9 9 0 0 1-9 9"></path>
                                    </svg> <span className="">Update</span></a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye icon-sm mr-2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg> <span className="">View all</span></a>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    
        <div className="col-md-8 col-xl-6 middle-wrapper">
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="card rounded">
                        <div className="card-header">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img className="img-xs rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
                                    <div className="ml-2">
                                        <p>Mike Popescu</p>
                                        <p className="tx-11 text-muted">1 min ago</p>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="btn p-0" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal icon-lg pb-3px">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-meh icon-sm mr-2">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="8" y1="15" x2="16" y2="15"></line>
                                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                            </svg> <span className="">Unfollow</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-corner-right-up icon-sm mr-2">
                                                <polyline points="10 9 15 4 20 9"></polyline>
                                                <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                            </svg> <span className="">Go to post</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2 icon-sm mr-2">
                                                <circle cx="18" cy="5" r="3"></circle>
                                                <circle cx="6" cy="12" r="3"></circle>
                                                <circle cx="18" cy="19" r="3"></circle>
                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                            </svg> <span className="">Share</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-copy icon-sm mr-2">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg> <span className="">Copy link</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="mb-3 tx-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>
                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex post-actions">
                                <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart icon-md">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                    <p className="d-none d-md-block ml-2">Like</p>
                                </a>
                                <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square icon-md">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <p className="d-none d-md-block ml-2">Comment</p>
                                </a>
                                <a href="javascript:;" className="d-flex align-items-center text-muted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share icon-md">
                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                        <polyline points="16 6 12 2 8 6"></polyline>
                                        <line x1="12" y1="2" x2="12" y2="15"></line>
                                    </svg>
                                    <p className="d-none d-md-block ml-2">Share</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card rounded">
                        <div className="card-header">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img className="img-xs rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
                                    <div className="ml-2">
                                        <p>Mike Popescu</p>
                                        <p className="tx-11 text-muted">5 min ago</p>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="btn p-0" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal icon-lg pb-3px">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-meh icon-sm mr-2">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="8" y1="15" x2="16" y2="15"></line>
                                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                            </svg> <span className="">Unfollow</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-corner-right-up icon-sm mr-2">
                                                <polyline points="10 9 15 4 20 9"></polyline>
                                                <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                            </svg> <span className="">Go to post</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2 icon-sm mr-2">
                                                <circle cx="18" cy="5" r="3"></circle>
                                                <circle cx="6" cy="12" r="3"></circle>
                                                <circle cx="18" cy="19" r="3"></circle>
                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                            </svg> <span className="">Share</span></a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-copy icon-sm mr-2">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg> <span className="">Copy link</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="mb-3 tx-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <img className="img-fluid" src="../../../assets/images/sample2.jpg" alt=""/>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex post-actions">
                                <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart icon-md">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                    <p className="d-none d-md-block ml-2">Like</p>
                                </a>
                                <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square icon-md">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <p className="d-none d-md-block ml-2">Comment</p>
                                </a>
                                <a href="javascript:;" className="d-flex align-items-center text-muted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share icon-md">
                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                        <polyline points="16 6 12 2 8 6"></polyline>
                                        <line x1="12" y1="2" x2="12" y2="15"></line>
                                    </svg>
                                    <p className="d-none d-md-block ml-2">Share</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="d-none d-xl-block col-xl-3 right-wrapper">
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="card rounded">
                        <div className="card-body">
                            <h6 className="card-title">latest photos</h6>
                            <div className="latest-photos">
                                <div className="row">
                                    <div className="col-md-4">
                                        <figure>
                                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="col-md-4">
                                        <figure>
                                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="col-md-4">
                                        <figure>
                                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="col-md-4">
                                        <figure>
                                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="col-md-4">
                                        <figure>
                                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="col-md-4">
                                        <figure>
                                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="col-md-4">
                                        <figure className="mb-0">
                                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="col-md-4">
                                        <figure className="mb-0">
                                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar8.png" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="col-md-4">
                                        <figure className="mb-0">
                                            <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar9.png" alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
       
    </div>
    </div>
    </div>
    );
}

export default Homes;