
var NavBarTop = function (props) {
    return (
        React.createElement("div", {className: "navbar navbar-fixed-top"}, 
            React.createElement("div", {className: "navbar-inner"}, 
                React.createElement("div", {className: "container-fluid"}, 
                    React.createElement("a", {className: "btn btn-navbar", "data-toggle": "collapse", "data-target": ".nav-collapse"}, 
                        React.createElement("span", {className: "icon-bar"}), 
                        React.createElement("span", {className: "icon-bar"}), 
                        React.createElement("span", {className: "icon-bar"})
                    ), 
                    React.createElement("a", {className: "brand", href: "#"}, "SparkJava React"), 

                    React.createElement("div", {className: "nav-collapse collapse"}, 
                        React.createElement("ul", {className: "nav pull-right"}, 
                            React.createElement("li", {className: "dropdown"}, 
                                React.createElement("a", {href: "#", role: "button", className: "dropdown-toggle", "data-toggle": "dropdown"}, 
                                    React.createElement("i", {className: "icon-user"}), 
                                    "Roy Bailey", 
                                    React.createElement("i", {className: "caret"})
                                ), 
                                React.createElement("ul", {className: "dropdown-menu"}, 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "http://roybailey.biz"}, "Profile")
                                    ), 
                                    React.createElement("li", {className: "divider"}), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {
                                           href: "https://github.com/roybailey/sparkjava-retrofit-react"}, "GitHub" + ' ' +
                                            "Code")
                                    )
                                )
                            )
                        ), 
                        React.createElement("ul", {className: "nav"}, 
                            React.createElement("li", {className: "active"}, 
                                React.createElement("a", {href: "#"}, "Dashboard")
                            ), 
                            React.createElement("li", {className: "dropdown"}, 
                                React.createElement("a", {href: "#", "data-toggle": "dropdown", className: "dropdown-toggle"}, "Settings", 
                                    React.createElement("b", {className: "caret"})
                                ), 
                                React.createElement("ul", {className: "dropdown-menu", id: "menu1"}, 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "Tools", 
                                            React.createElement("i", {className: "icon-arrow-right"})

                                        ), 
                                        React.createElement("ul", {className: "dropdown-menu sub-menu"}, 
                                            React.createElement("li", null, 
                                                React.createElement("a", {href: "#"}, "Reports")
                                            ), 
                                            React.createElement("li", null, 
                                                React.createElement("a", {href: "#"}, "Logs")
                                            ), 
                                            React.createElement("li", null, 
                                                React.createElement("a", {href: "#"}, "Errors")
                                            )
                                        )
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "SEO Settings")
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "Other Link")
                                    ), 
                                    React.createElement("li", {className: "divider"}), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "Other Link")
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "Other Link")
                                    )
                                )
                            ), 
                            React.createElement("li", {className: "dropdown"}, 
                                React.createElement("a", {href: "#", role: "button", className: "dropdown-toggle", "data-toggle": "dropdown"}, "Content", 
                                    React.createElement("i", {className: "caret"})
                                ), 
                                React.createElement("ul", {className: "dropdown-menu"}, 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "Blog")
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "News")
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "Custom Pages")
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "Calendar")
                                    ), 
                                    React.createElement("li", {className: "divider"}), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "FAQ")
                                    )
                                )
                            ), 
                            React.createElement("li", {className: "dropdown"}, 
                                React.createElement("a", {href: "#", role: "button", className: "dropdown-toggle", "data-toggle": "dropdown"}, "Users", 
                                    React.createElement("i", {className: "caret"})
                                ), 
                                React.createElement("ul", {className: "dropdown-menu"}, 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "User List")
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "Search")
                                    ), 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "#"}, "Permissions")
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};


var SideBar = function (props) {
    return (
        React.createElement("div", {className: "span3", id: "sidebar"}, 
            React.createElement("ul", {className: "nav nav-list bs-docs-sidenav nav-collapse collapse"}, 
                React.createElement("li", null, 
                    React.createElement("a", {href: "/admin.html"}, React.createElement("span", {className: "badge badge-success pull-right"}, "HTML"), " Bootstrap" + ' ' +
                        "Dashboard")
                ), 
                React.createElement("li", null, 
                    React.createElement("a", {href: "/react"}, React.createElement("span", {className: "badge badge-success pull-right"}, "Java8"), " React Health" + ' ' +
                        "Check")
                ), 
                React.createElement("li", {className: "active"}, 
                    React.createElement("a", {href: "/react/dashboard"}, React.createElement("span", {className: "badge badge-success pull-right"}, "Java8"), " React" + ' ' +
                        "Dashboard")
                ), 
                React.createElement("li", null, 
                    React.createElement("a", {href: "/api/v1"}, React.createElement("span", {className: "badge badge-success pull-right"}, "json"), " API Discovery")
                )
            )
        )
    );
};


var displayNone = {
    display: 'none'
};


var StatisticsGraph = function (props) {
    return (
        React.createElement("div", {className: "span3"}, 
            React.createElement("div", {className: "chart", "data-percent": props.percent}, props.percent, "%"), 
            React.createElement("div", {className: "chart-bottom-heading"}, 
                React.createElement("span", {className: "label label-info"}, props.label)
            )
        )
    );
};


var TaskTableRow = function (props) {
    return (
        React.createElement("tr", null, 
            React.createElement("td", null, props.guid), 
            React.createElement("td", null, props.name), 
            React.createElement("td", null, (props.dueDate === null) ? "" : "" + props.dueDate), 
            React.createElement("td", null, props.effort)
        )
    );
};


var TaskTable = function (props) {
    console.log("loader function=" + props.loader);
    var rs = props.loader();
    console.log("loader result=" + rs);
    var todoRows = rs.map(function (child) {
        console.log("task=" + child.name);
        var dueDate = moment(Date.parse(child.dueDate)).format('L');
        return React.createElement(TaskTableRow, {guid: child.guid, name: child.name, dueDate: dueDate, effort: child.effort});
    }.bind(this));
    // THIS BLOWS NASHORN!!! (the tbody, with anything in it)
    //return (
    //    <div className="block-content collapse in">
    //        <table className="table table-striped">
    //            <thead>
    //            <tr>
    //                <th>#</th>
    //                <th>Name</th>
    //                <th>Date</th>
    //                <th>Effort</th>
    //            </tr>
    //            </thead>
    //            <tbody>{todoRows}</tbody>
    //        </table>
    //    </div>
    //);
    return React.createElement("p", null, "Nashorn is broken");
};


var TaskWidget = function (props) {
    return (
        React.createElement("div", {className: "span6"}, 
            React.createElement("div", {className: "block"}, 
                React.createElement("div", {className: "navbar navbar-inner block-header"}, 
                    React.createElement("div", {className: "muted pull-left"}, props.title), 
                    React.createElement("div", {className: "pull-right"}, 
                        React.createElement("span", {className: "badge badge-info"}, props.count)
                    )
                ), 
                React.createElement(TaskTable, {loader: props.loader})
            )
        )
    );
};


var StatsBar = function (props) {
    var rs = Java.from(JavaReactController.loadStatisticsAsArray());
    console.log("rs " + JSON.stringify(rs));
    console.log("rs[0] " + JSON.stringify(rs[0]));
    console.log("rs[0].name " + JSON.stringify(rs[0].name));
    // THIS BLOWS NASHORN!!!
    //return rs.map(function (child) {
    //    console.log("statistic=" + child.name);
    //    return <StatisticsGraph percent={child.value} label={child.name}/>;
    //}.bind(this));
    return React.createElement("p", null, "Nashorn is broken");
};


var Content = React.createClass({displayName: "Content",
    loadTaskDataFromMockup: function (skip, limit) {
        return [
            {guid: "1", name: "aaaa", effort: 10, dueDate: "2015-04-30"},
            {guid: "2", name: "bbbb", effort: 10, dueDate: "2015-05-31"},
            {guid: "3", name: "cccc", effort: 10, dueDate: "2015-06-30"},
            {guid: "4", name: "dddd", effort: 10, dueDate: "2015-07-31"}
        ];
    },
    loadTaskDataFromJavaDirectly: function () {
        console.log("this.props.skip=" + this.props.skip);
        console.log("this.props.limit=" + this.props.limit);
        return Java.from(JavaTaskService.getTaskList(this.props.skip, this.props.limit));
        //return this.loadTaskDataFromMockup(0,10);
    },
    loadTaskDataFromJavaAPICalls: function (skip, limit) {
        console.log("skip=" + skip);
        console.log("limit=" + limit);
        return Java.from(JavaReactController.getTaskList(skip, limit));
        //return this.loadTaskDataFromMockup(0,10);
    },
    render: function () {
        console.log("Content.render() " + JSON.stringify(this.props));
        return (
            React.createElement("div", {className: "span9", id: "content"}, 
                React.createElement("div", {className: "row-fluid"}, 
                    React.createElement("div", {className: "alert alert-success"}, 
                        React.createElement("button", {type: "button", className: "close", "data-dismiss": "alert"}, "×"), 
                        React.createElement("h4", null, "Success"), 
                        this.props.message
                    ), 
                    React.createElement("div", {className: "navbar"}, 
                        React.createElement("div", {className: "navbar-inner"}, 
                            React.createElement("ul", {className: "breadcrumb"}, 
                                React.createElement("i", {className: "icon-chevron-left hide-sidebar"}, 
                                    React.createElement("a", {href: "#", title: "Hide Sidebar", rel: "tooltip"}, 
                                        " ")
                                ), 
                                React.createElement("i", {className: "icon-chevron-right show-sidebar", style: displayNone}, 
                                    React.createElement("a", {href: "#", 
                                       title: "Show Sidebar", 
                                       rel: "tooltip"}, " ")
                                ), 
                                React.createElement("li", null, 
                                    React.createElement("a", {href: "#"}, "Dashboard"), 
                                    React.createElement("span", {className: "divider"}, "/")
                                ), 
                                React.createElement("li", null, 
                                    React.createElement("a", {href: "#"}, "Settings"), 
                                    React.createElement("span", {className: "divider"}, "/")
                                ), 
                                React.createElement("li", {className: "active"}, "Tools")
                            )
                        )
                    )
                ), 
                React.createElement("div", {className: "row-fluid"}, 
                    React.createElement("div", {className: "block"}, 
                        React.createElement("div", {className: "navbar navbar-inner block-header"}, 
                            React.createElement("div", {className: "muted pull-left"}, "Statistics"), 
                            React.createElement("div", {className: "pull-right"}, 
                                React.createElement("span", {className: "badge badge-warning"}, "View More")
                            )
                        ), 
                        React.createElement("div", {className: "block-content collapse in"}, 
                            React.createElement(StatsBar, null)
                        )
                    )
                ), 
                React.createElement("div", {className: "row-fluid"}, 
                    React.createElement(TaskWidget, {title: "Tasks loaded from Java directly", count: "100", 
                                loader: this.loadTaskDataFromJavaDirectly.bind(this, this.props.skip, this.props.limit)}), 
                    React.createElement(TaskWidget, {title: "Tasks loaded from Java making API calls", count: "200", 
                                loader: this.loadTaskDataFromJavaAPICalls.bind(this, this.props.skip, this.props.limit)})
                )
            )
        );
    }
});


var Container = function (props) {
    console.log("Container.render() " + JSON.stringify(props));
    return (
        React.createElement("div", {className: "container-fluid"}, 
            React.createElement("div", {className: "row-fluid"}, 
                React.createElement(SideBar, null), 
                React.createElement(Content, {message: props.message, skip: props.skip, limit: props.limit})
            ), 
            React.createElement("hr", null), 
            React.createElement("footer", null, 
                React.createElement("p", null, "© Roy Bailey 2015")
            )
        )
    );
};



var renderDashboard = function (javaProps) {
    console.log("Dashboard.render() " + JSON.stringify(javaProps.message));
    console.log("....");
    var childProps = {
        skip: (Java.from(javaProps.skip) ? parseInt(Java.from(javaProps.skip)[0]) : 0),
        limit: (Java.from(javaProps.limit) ? parseInt(Java.from(javaProps.limit)[0]) : 5)
    };
    console.log("childProps test " + JSON.stringify(childProps));
    return ReactDOMServer.renderToStaticMarkup(
        React.createElement("div", null, 
            React.createElement(NavBarTop, null), 
            React.createElement(Container, {message: javaProps.message, skip: childProps.skip, limit: childProps.limit})
        )
    );
};

