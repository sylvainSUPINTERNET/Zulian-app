import React, {useEffect} from "react";


// instead of using props, destructure directly this object props into property names (to access)
export const Modal = ({btnClassNameTrigger, idModal, btnTextTrigger, title, footerBtnTextClose, footerBtnTextAction, content, wrapperTriggerBtnClassName, className}) => {

    return (<div>
        <div className={wrapperTriggerBtnClassName}>
            <button type="button" className={`${btnClassNameTrigger}`} data-toggle="modal" data-target={`#${idModal}`}>
                {btnTextTrigger}
            </button>
        </div>

        <div className="modal fade right" id={`${idModal}`} tabIndex="-1" role="dialog"
             aria-labelledby={`${idModal}`} aria-hidden="true">
            <div className={`${className}`} role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">{footerBtnTextClose}</button>
                        <button type="button" className="btn btn-primary">{footerBtnTextAction}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
};
