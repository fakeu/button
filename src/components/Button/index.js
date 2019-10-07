import React from 'react';
import { string, func, bool, oneOf, any } from 'prop-types';
import Base from 'base';
import './Button.scss';
import spinner from '../../spinner.svg';

const propTypes = {
    accent:    oneOf(['btn_default', 'btn_secondary', 'btn_error']),
    className: string,
    component: any,
    disabled:  bool,
    icon:      string,

    iconRight: bool,
    isLoading: bool,

    size:        oneOf(['btn_sm', 'btn_md', 'btn_lg']),
    targetBlank: bool,

    text: any,
    url:  string,

    onClick: func,
};

const Button = ({
    component = 'button',
    text,
    className = '',
    icon = '',
    iconRight = false,

    targetBlank,
    url = '/',

    disabled = false,
    isLoading = false,

    size = '',
    accent = '',

    onClick,
}) => {
    const calcProps = {
        component,
        disabled,
        ...component === 'button' ? { type: 'button' } : {},
        ...component === 'a'
            ? {
                href:   url,
                target: targetBlank ? '_blank' : null,
            }
            : {},
        onClick: disabled ? (e) => e.preventDefault() : onClick,
    };

    const calcComponent = calcProps.component;

    delete calcProps.component;

    return (
        <Base className = { `btn ${size} ${accent} ${className}`.trim() } component = { calcComponent } { ...calcProps }>
            {text ? <span className = 'btn_text'>{text}</span> : null}
            {icon ? <img alt = '' className = { iconRight ? 'btn_icon btn_icon--right' : 'btn_icon' } src = { icon } /> : null}
            {isLoading ? <img alt = '' className = 'btn_spinner' src = { spinner } /> : null}
        </Base>
    );
};

Button.propTypes = propTypes;

export default Button;
