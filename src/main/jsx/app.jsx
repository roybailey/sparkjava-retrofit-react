/** @jsx React.DOM */

var TitleView = React.createClass({
    render: function() {
        return <h1>{this.props.text}</h1>;
    }
});

var renderTitle = function (javaProps) {
    return React.renderToString(
        React.createElement(TitleView, {text: javaProps.title})
    );
};