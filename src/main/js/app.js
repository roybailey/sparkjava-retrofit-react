/** @jsx React.DOM */

var TitleView = React.createClass({displayName: "TitleView",
    render: function() {
        return React.createElement("h1", null, this.props.text);
    }
});

var renderTitle = function (javaProps) {
    return ReactDOMServer.renderToStaticMarkup(
        React.createElement(TitleView, {text: javaProps.title})
    );
};