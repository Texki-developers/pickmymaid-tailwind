import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ leftIcon, rightIcon, children, ...props }: any) => {
    return (
        <button
            className={`custom-button ${props.containerClassName}`}
            {...props}>
            <div className={`button-content ${props.className}`}>
                {leftIcon}
                {children}
                {rightIcon}
            </div>
        </button>
    );
};

export default CustomButton;
