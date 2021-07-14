import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        );
    }
}

Header.defaultProps = {
    headerProp: "This is a default Header Prop",
}

export default Header