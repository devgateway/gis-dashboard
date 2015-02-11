/*http://facebook.github.io/react/docs/component-specs.html*/
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Link = Router.Link;
var FilterActions = require('../actions/FilterActions.js');
var FilterAPIUtils = require('../utils/FilterAPIUtils.js');
var FilterStore=require('../stores/FilterStore.js')
var FilterItem = require('./filterItem.jsx');

function getStateFromStores() {
  return {
    departaments: FilterStore.getAll("departaments"),
    departamentsSelected: FilterStore.getAllSelected("departaments"),
    municipalities: FilterStore.getAll("municipalities"),
    municipalitiesSelected: FilterStore.getAllSelected("municipalities")
  };
}

var FilterGroup = React.createClass({
 
    _filterByKeyword: function (keyword) {
        var items;
        if (keyword) {
            // filter the collection
            var pattern = new RegExp(keyword, 'i');
            this.state[this.props.filterType].map(function (item) {
                if (!pattern.test(item.Municipalitie)){
                    item.hide = true;
                }
            });
        } else {
            // display the original collection
            this.state[this.props.filterType].map(function (item) {
                item.hide = false;
            });
        }
        return items;  
    },

    componentDidMount: function() {
        FilterStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getStateFromStores());
    },
    
    _searchKeyUp: function(ev) {
        var value = $(ev.target).val();
        var length = value.length;
        // filter the items only if we have at least 3 characters
        if (length > 2 || ev.keyCode == 13) {
            this._filterByKeyword(value);
            this.forceUpdate();
            //this.setState(this.state);
        } else {
            this._filterByKeyword();
            this.forceUpdate();
            //this.setState(this.state);
        }
    },
    
    componentWillMount :function(){        
    },

    componentWillUnmount: function() {
    },

    componentDidUpdate:function( prevProps,  prevState){
    },

    render: function() {
        var filterType = this.props.filterType;
        var items = this.state? this.state[filterType] : [];       
        return(
            <div>
                <input
                    placeholder="Keyword Search"
                    onKeyUp={this._searchKeyUp} />
                <ul>
                {
                    items.map(function(item){ 
                        if (!item.hide){   
                            return <li key={item.id}><FilterItem data={item} filterType={filterType} /></li>;
                        }
                    })
                }
                </ul>
            </div>
            );
    }
});

module.exports = FilterGroup;