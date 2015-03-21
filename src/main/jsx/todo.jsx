/** @jsx React.DOM */

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

var renderCommentBox = function () {
    return React.renderToString(
        <CommentBox />
    )
};

