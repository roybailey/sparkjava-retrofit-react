/** @jsx React.DOM */

var NavBarTop = React.createClass({
    render: function () {
        return (
            <div className="navbar navbar-fixed-top">
                <div className="navbar-inner">
                    <div className="container-fluid">
                        <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>
                        <a className="brand" href="#">SparkJava React</a>

                        <div className="nav-collapse collapse">
                            <ul className="nav pull-right">
                                <li className="dropdown">
                                    <a href="#" role="button" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="icon-user"></i>
                                        Roy Bailey
                                        <i className="caret"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a tabindex="-1" href="http://roybailey.biz">Profile</a>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <a tabindex="-1"
                                               href="https://github.com/roybailey/sparkjava-retrofit-react">GitHub
                                                Code</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav">
                                <li className="active">
                                    <a href="#">Dashboard</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle">Settings
                                        <b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu" id="menu1">
                                        <li>
                                            <a href="#">Tools
                                                <i className="icon-arrow-right"></i>

                                            </a>
                                            <ul className="dropdown-menu sub-menu">
                                                <li>
                                                    <a href="#">Reports</a>
                                                </li>
                                                <li>
                                                    <a href="#">Logs</a>
                                                </li>
                                                <li>
                                                    <a href="#">Errors</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">SEO Settings</a>
                                        </li>
                                        <li>
                                            <a href="#">Other Link</a>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <a href="#">Other Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Other Link</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" role="button" className="dropdown-toggle" data-toggle="dropdown">Content
                                        <i className="caret"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a tabindex="-1" href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a tabindex="-1" href="#">News</a>
                                        </li>
                                        <li>
                                            <a tabindex="-1" href="#">Custom Pages</a>
                                        </li>
                                        <li>
                                            <a tabindex="-1" href="#">Calendar</a>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <a tabindex="-1" href="#">FAQ</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" role="button" className="dropdown-toggle" data-toggle="dropdown">Users
                                        <i className="caret"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a tabindex="-1" href="#">User List</a>
                                        </li>
                                        <li>
                                            <a tabindex="-1" href="#">Search</a>
                                        </li>
                                        <li>
                                            <a tabindex="-1" href="#">Permissions</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


var SideBar = React.createClass({
    render: function () {
        return (
            <div className="span3" id="sidebar">
                <ul className="nav nav-list bs-docs-sidenav nav-collapse collapse">
                    <li>
                        <a href="/admin.html"><span className="badge badge-success pull-right">HTML</span> Bootstrap
                            Dashboard</a>
                    </li>
                    <li>
                        <a href="/react"><span className="badge badge-success pull-right">Java8</span> React Health
                            Check</a>
                    </li>
                    <li className="active">
                        <a href="/react/dashboard"><span className="badge badge-success pull-right">Java8</span> React
                            Dashboard</a>
                    </li>
                    <li>
                        <a href="/api/v1"><span className="badge badge-success pull-right">json</span> API Discovery</a>
                    </li>
                </ul>
            </div>
        );
    }
});

var displayNone = {
    display: 'none'
};


var StatisticsGraph = React.createClass({
    render: function () {
        return (
            <div className="span3">
                <div className="chart" data-percent={this.props.percent}>{this.props.percent}%</div>
                <div className="chart-bottom-heading">
                    <span className="label label-info">{this.props.label}</span>
                </div>
            </div>
        );
    }
});


var TaskTableRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.guid}</td>
                <td>{this.props.name}</td>
                <td>{(this.props.dueDate === null) ? "" : "" + this.props.dueDate}</td>
                <td>{this.props.effort}</td>
            </tr>
        );
    }
});


var TaskTable = React.createClass({
    render: function () {
        console.log("loader function=" + this.props.loader);
        var rs = this.props.loader();
        console.log("loader result=" + rs);
        var todoRows = rs.map(function (child) {
            console.log("task=" + child.name);
            var dueDate = moment(Date.parse(child.dueDate)).format('L');
            return <TaskTableRow guid={child.guid} name={child.name} dueDate={dueDate} effort={child.effort}/>;
        }.bind(this));
        return (
            <div className="block-content collapse in">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Effort</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todoRows}
                    </tbody>
                </table>
            </div>
        );
    }
});


var TaskWidget = React.createClass({
    render: function () {
        return (
            <div className="span6">
                <div className="block">
                    <div className="navbar navbar-inner block-header">
                        <div className="muted pull-left">{this.props.title}</div>
                        <div className="pull-right">
                            <span className="badge badge-info">{this.props.count}</span>
                        </div>
                    </div>
                    <TaskTable loader={this.props.loader}/>
                </div>
            </div>
        );
    }
});


var Content = React.createClass({
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
            return <StatisticsGraph percent={child.value} label={child.name}/>;
        }.bind(this));
    },
    render: function () {
        console.log("Content.render() " + JSON.stringify(this.props));
        return (
            <div className="span9" id="content">
                <div className="row-fluid">
                    <div className="alert alert-success">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <h4>Success</h4>
                        {this.props.message}
                    </div>
                    <div className="navbar">
                        <div className="navbar-inner">
                            <ul className="breadcrumb">
                                <i className="icon-chevron-left hide-sidebar">
                                    <a href='#' title="Hide Sidebar" rel='tooltip'>
                                        &nbsp;</a>
                                </i>
                                <i className="icon-chevron-right show-sidebar" style={displayNone}>
                                    <a href='#'
                                       title="Show Sidebar"
                                       rel='tooltip'>&nbsp;</a>
                                </i>
                                <li>
                                    <a href="#">Dashboard</a>
                                    <span className="divider">/</span>
                                </li>
                                <li>
                                    <a href="#">Settings</a>
                                    <span className="divider">/</span>
                                </li>
                                <li className="active">Tools</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="block">
                        <div className="navbar navbar-inner block-header">
                            <div className="muted pull-left">Statistics</div>
                            <div className="pull-right">
                                <span className="badge badge-warning">View More</span>

                            </div>
                        </div>
                        <div className="block-content collapse in">
                            {this.renderStatistics()}
                        </div>
                    </div>
                </div>
                <div className="row-fluid">
                    <TaskWidget title="Tasks loaded from Java directly" count="100"
                                loader={this.loadTaskDataFromJavaDirectly.bind(this, this.props.skip, this.props.limit)}/>
                    <TaskWidget title="Tasks loaded from Java making API calls" count="200"
                                loader={this.loadTaskDataFromJavaAPICalls.bind(this, this.props.skip, this.props.limit)}/>
                </div>
            </div>
        );
    }
});


var Container = React.createClass({
    render: function () {
        console.log("Container.render() " + JSON.stringify(this.props));
        return (
            <div className="container-fluid">
                <div className="row-fluid">
                    <SideBar />
                    <Content message={this.props.message} skip={this.props.skip} limit={this.props.limit}/>
                </div>
                <hr/>
                <footer>
                    <p>&copy; Roy Bailey 2015</p>
                </footer>
            </div>
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
        <div>
            <NavBarTop/>
            <Container message={javaProps.message} skip={childProps.skip} limit={childProps.limit}/>
        </div>
    );
};

