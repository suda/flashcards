import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MenuView.css';

class MenuView extends Component {
    render(props) {
        return (
            <div className="menu">
                {this.props.options.map((option) => {
                    let path = option.path ? `/${option.path.replace(/\./g, '/')}/` : '/'
                    path += option.key
                    if (option.isView) {
                        path += '.html'
                    }
                    return <Link to={path}>
                        <div className="rect-container">
                            <div className="rect menu-item">
                                <div className="text">{option.key}</div>
                            </div>
                        </div>
                    </Link>
                })}
            </div>
        )
    }
}

export default MenuView
