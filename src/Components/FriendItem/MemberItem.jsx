import React from "react";

const MemberItem = ({member}) => {
    
    return(
        <li className="p-2 border-bottom bg-body-tertiary">
            <a href="#!" className="d-flex justify-content-between">
            <div className="d-flex flex-row">
                <img src={member.avatarUrl} alt="avatar"
                className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                <div className="pt-1">
                <p className="fw-bold mb-0">{member.name}</p>
                <p className="small text-muted">{member.msgPreview}</p>
                </div>
            </div>
            <div className="pt-1">
                <p className="small text-muted mb-1">{member.clock}</p>
                { 
                    member.alertCount &&
                    <span className="badge bg-danger float-end">{member.alertCount}</span>
                }
            </div>
            </a>
        </li>
    )
}

export default MemberItem