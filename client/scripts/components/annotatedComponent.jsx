
/*http://facebook.github.io/react/docs/component-specs.html*/
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports  = React.createClass({

	/*he displayName string is used in debugging messages. */
	displayName :"Map Component",

	/*The statics object allows you to define static methods that can be called on the component class*/
	statics: {
		customMethod: function(foo) {
			return foo === 'bar';
		}
	},

	/*Use this to extend from another componnet*/
	mixins: [{}],

	/*Invoked once before the component is mounted. The return value will be used as the initial value of this.state.*/
	getInitialState:function(){
		return {}     
	},

	/*Invoked once and cached when the class is created. Values in the mapping will be set on this.props if that prop is not specified by the parent component (i.e. using an in check).*/
	getDefaultProps:function(){
		return {
			value: 'default value'
		};
	},

	/*The propTypes object allows you to validate props being passed to your components*/
	propTypes:{
		optionalArray: React.PropTypes.array,
		optionalBool: React.PropTypes.bool,
		optionalFunc: React.PropTypes.func,
		optionalNumber: React.PropTypes.number,
		optionalObject: React.PropTypes.object,
		optionalString: React.PropTypes.string,
		//children: React.PropTypes.element.isRequired //With React.PropTypes.element you can specify that only a single child can be passed to a component as children.
	},

	/*-------- Lifecycle Methods --> Mounting --------*/ 

	/*
	Invoked once, both on the client and server, immediately before the initial rendering occurs. 
	If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.
	*/
	componentWillMount :function(){

	},

	/*
	Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. At this point in the lifecycle, the component has a DOM representation which you can access via this.getDOMNode().
	If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method.
	*/
	componentDidMount: function() {
	},


	/*-------- Lifecycle Methods --> Updating --------*/ 

	/*
	Invoked when a component is receiving new props. This method is not called for the initial render.
	Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState(). The old props can be accessed via this.props. Calling this.setState() within this function will not trigger an additional render.
	 */
	componentWillReceiveProps: function(nextProps) {
	  this.setState({
	    likesIncreasing: nextProps.likeCount > this.props.likeCount
	  });
	},
	
	/*
	Invoked before rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate is used.
	Use this as an opportunity to return false when you're certain that the transition to the new props and state will not require a component update.
	 */
	shouldComponentUpdate: function(nextProps, nextState) {
	  return nextProps.id !== this.props.id;
	},

	
	/*
	Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.
	Use this as an opportunity to perform preparation before an update occurs.
	
	Note:
	You cannot use this.setState() in this method. If you need to update state in response to a prop change, use componentWillReceiveProps instead.
	 */
	componentWillUpdate:function( nextProps, nextState){

	},

	/*
	nvoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.
	Use this as an opportunity to operate on the DOM when the component has been updated.
	Note:
	Prior to v0.9, the DOM node was passed in as the last argument. If you were using this, you can still access the DOM node by calling this.getDOMNode().
	 */
	componentDidUpdate:function( prevProps,  prevState){

	},


	/*-------- Lifecycle Methods --> Unmounting --------*/ 
	/* 
	Invoked immediately before a component is unmounted from the DOM.
	Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.	
	*/
	componentWillUnmount: function() {
		
	},


	/*The render() method is required.
	When called, it should examine this.props and this.state and return a single child component. This child component can be either a virtual representation of a native DOM component (such as <div /> or React.DOM.div()) or another composite component that you've defined yourself.
	You can also return null or false to indicate that you don't want anything rendered. Behind the scenes, React renders a <noscript> tag to work with our current diffing algorithm. When returning null or false, this.getDOMNode() will return null.
	The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not read from or write to the DOM or otherwise interact with the browser (e.g., by using setTimeout). If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes server rendering more practical and makes components easier to think about.
	*/
	render: function() {
		return (
			<h1>Annotated Component</h1>
			);
	},

});
