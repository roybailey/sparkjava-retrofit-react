/** @jsx React.DOM */

var NavBarTop = React.createClass({displayName: "NavBarTop",
    render: function () {
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
                                            React.createElement("a", {tabindex: "-1", href: "http://roybailey.biz"}, "Profile")
                                        ), 
                                        React.createElement("li", {className: "divider"}), 
                                        React.createElement("li", null, 
                                            React.createElement("a", {tabindex: "-1", 
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
                                            React.createElement("a", {tabindex: "-1", href: "#"}, "Blog")
                                        ), 
                                        React.createElement("li", null, 
                                            React.createElement("a", {tabindex: "-1", href: "#"}, "News")
                                        ), 
                                        React.createElement("li", null, 
                                            React.createElement("a", {tabindex: "-1", href: "#"}, "Custom Pages")
                                        ), 
                                        React.createElement("li", null, 
                                            React.createElement("a", {tabindex: "-1", href: "#"}, "Calendar")
                                        ), 
                                        React.createElement("li", {className: "divider"}), 
                                        React.createElement("li", null, 
                                            React.createElement("a", {tabindex: "-1", href: "#"}, "FAQ")
                                        )
                                    )
                                ), 
                                React.createElement("li", {className: "dropdown"}, 
                                    React.createElement("a", {href: "#", role: "button", className: "dropdown-toggle", "data-toggle": "dropdown"}, "Users", 
                                        React.createElement("i", {className: "caret"})
                                    ), 
                                    React.createElement("ul", {className: "dropdown-menu"}, 
                                        React.createElement("li", null, 
                                            React.createElement("a", {tabindex: "-1", href: "#"}, "User List")
                                        ), 
                                        React.createElement("li", null, 
                                            React.createElement("a", {tabindex: "-1", href: "#"}, "Search")
                                        ), 
                                        React.createElement("li", null, 
                                            React.createElement("a", {tabindex: "-1", href: "#"}, "Permissions")
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});


var SideBar = React.createClass({displayName: "SideBar",
    render: function () {
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
    }
});

var displayNone = {
    display: 'none'
};


var StatisticsGraph = React.createClass({displayName: "StatisticsGraph",
    render: function () {
        return (
            React.createElement("div", {className: "span3"}, 
                React.createElement("div", {className: "chart", "data-percent": this.props.percent}, this.props.percent, "%"), 
                React.createElement("div", {className: "chart-bottom-heading"}, 
                    React.createElement("span", {className: "label label-info"}, this.props.label)
                )
            )
        );
    }
});


var TaskTableRow = React.createClass({displayName: "TaskTableRow",
    render: function () {
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, this.props.guid), 
                React.createElement("td", null, this.props.name), 
                React.createElement("td", null, (this.props.dueDate === null) ? "" : "" + this.props.dueDate), 
                React.createElement("td", null, this.props.effort)
            )
        );
    }
});


var TaskTable = React.createClass({displayName: "TaskTable",
    render: function () {
        console.log("loader function=" + this.props.loader);
        var rs = this.props.loader();
        console.log("loader result=" + rs);
        var todoRows = rs.map(function (child) {
            console.log("task=" + child.name);
            var dueDate = moment(Date.parse(child.dueDate)).format('L');
            return React.createElement(TaskTableRow, {guid: child.guid, name: child.name, dueDate: dueDate, effort: child.effort});
        }.bind(this));
        return (
            React.createElement("div", {className: "block-content collapse in"}, 
                React.createElement("table", {className: "table table-striped"}, 
                    React.createElement("thead", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "#"), 
                        React.createElement("th", null, "Name"), 
                        React.createElement("th", null, "Date"), 
                        React.createElement("th", null, "Effort")
                    )
                    ), 
                    React.createElement("tbody", null, 
                    todoRows
                    )
                )
            )
        );
    }
});


var TaskWidget = React.createClass({displayName: "TaskWidget",
    render: function () {
        return (
            React.createElement("div", {className: "span6"}, 
                React.createElement("div", {className: "block"}, 
                    React.createElement("div", {className: "navbar navbar-inner block-header"}, 
                        React.createElement("div", {className: "muted pull-left"}, this.props.title), 
                        React.createElement("div", {className: "pull-right"}, 
                            React.createElement("span", {className: "badge badge-info"}, this.props.count)
                        )
                    ), 
                    React.createElement(TaskTable, {loader: this.props.loader})
                )
            )
        );
    }
});


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
    },
    loadTaskDataFromJavaAPICalls: function (skip, limit) {
        console.log("skip=" + skip);
        console.log("limit=" + limit);
        return Java.from(JavaReactController.getTaskList(skip, limit));
    },
    renderStatistics: function () {
        // get the data from global java dependency injection service
        // and convert Java array into javascript array
        var rs = Java.from(JavaReactController.loadStatisticsAsArray());
        console.log("rs " + JSON.stringify(rs));
        console.log("rs[0] " + JSON.stringify(rs[0]));
        console.log("rs[0].name " + JSON.stringify(rs[0].name));
        return rs.map(function (child) {
            console.log("statistic=" + child.name);
            return React.createElement(StatisticsGraph, {percent: child.value, label: child.name});
        }.bind(this));
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
                            this.renderStatistics()
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


var Container = React.createClass({displayName: "Container",
    render: function () {
        console.log("Container.render() " + JSON.stringify(this.props));
        return (
            React.createElement("div", {className: "container-fluid"}, 
                React.createElement("div", {className: "row-fluid"}, 
                    React.createElement(SideBar, null), 
                    React.createElement(Content, {message: this.props.message, skip: this.props.skip, limit: this.props.limit})
                ), 
                React.createElement("hr", null), 
                React.createElement("footer", null, 
                    React.createElement("p", null, "© Roy Bailey 2015")
                )
            )
        );
    }
});


var renderDashboard = function (javaProps) {
    console.log("Dashboard.render() " + JSON.stringify(javaProps.message));
    console.log("....");
    var childProps = {
        skip: (Java.from(javaProps.skip) ? parseInt(Java.from(javaProps.skip)[0]) : 0),
        limit: (Java.from(javaProps.limit) ? parseInt(Java.from(javaProps.limit)[0]) : 5)
    };
    console.log("childProps " + JSON.stringify(childProps));
    return React.renderToString(
        React.createElement("div", null, 
            React.createElement(NavBarTop, null), 
            React.createElement(Container, {message: javaProps.message, skip: childProps.skip, limit: childProps.limit})
        )
    );
};

