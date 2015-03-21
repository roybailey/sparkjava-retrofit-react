/** @jsx React.DOM */

var CommentBox = React.createClass({displayName: "CommentBox",
    render: function () {
        return (
            React.createElement("div", {className: "commentBox"}, 
                "Hello, world! I am a CommentBox."
            )
        );
    }
});

var renderCommentBox = function () {
    return React.renderToString(
        React.createElement(CommentBox, null)
    )
};

