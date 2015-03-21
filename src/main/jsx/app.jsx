/** @jsx React.DOM */

var TitleView = React.createClass({
	render: function() {
		return <h1>{this.props.text}</h1>;
	}
});

var renderTitle = function (text) {
    return React.renderToString(
        React.createElement(TitleView, {text: text})
    );
};
