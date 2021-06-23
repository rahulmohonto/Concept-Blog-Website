import React from 'react';

const FooterCol = (props) => {
    return (
        <div className="col-md-4">
            <h5 className="text-white">{props.menuTitle ? props.menuTitle : " "}</h5>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index}>{item.name}</li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;