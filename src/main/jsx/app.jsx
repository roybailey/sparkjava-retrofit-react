/** @jsx React.DOM */

var TitleView = React.createClass({
    render: function() {
        return <h1>{this.props.text}</h1>;
    }
});

var renderTitle = function (javaProps) {
    return ReactDOMServer.renderToStaticMarkup(
        React.createElement(TitleView, {text: javaProps.title})
    );
};