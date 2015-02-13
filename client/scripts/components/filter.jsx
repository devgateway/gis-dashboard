
/*http://facebook.github.io/react/docs/component-specs.html*/
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Link = Router.Link;
var FilterActions = require('../actions/FilterActions.js');
var FilterAPIUtils = require('../utils/FilterAPIUtils.js');
var FilterStore=require('../stores/FilterStore.js');
var FilterGroup = require('./filterGroup.jsx');

function getStateFromStores() {
  return {
    departaments: FilterStore.getAll("departaments"),
    departamentsSelected: FilterStore.getAllSelected("departaments"),
    municipalities: FilterStore.getAll("municipalities"),
    municipalitiesSelected: FilterStore.getAllSelected("municipalities"),
    developmentObjectives: FilterStore.getAll("developmentObjectives"),
    developmentObjectivesSelected: FilterStore.getAllSelected("developmentObjectives")
  };
}

var Filter  = React.createClass({
 
 
    componentDidMount: function() {
        FilterStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getStateFromStores());
    },
    
	componentWillMount :function(){        
        FilterAPIUtils.getAllDepartamentsFromServer();
        FilterAPIUtils.getAllMunicipalitiesFromServer();
        FilterAPIUtils.getAllDevelopmentObjectiveFromServer();
        this.setState(getStateFromStores());
    },

    componentWillUnmount: function() {
    },

   	componentDidUpdate:function( prevProps,  prevState){
	},

    render: function() {
        return(
        <div>
            <ul id="myTab" className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a href="#departaments" id="deps-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">
                Departaments ({this.state.departamentsSelected.length} / {this.state.departaments.length})
              </a></li>
              <li role="presentation" className=""><a href="#municipalities" role="tab" id="muns-tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">
                Municipalities ({this.state.municipalitiesSelected.length} / {this.state.municipalities.length})
              </a></li> 
              <li role="presentation" className=""><a href="#developmentObjectives" role="tab" id="dos-tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">
                Development Objectives ({this.state.developmentObjectivesSelected.length} / {this.state.developmentObjectives.length})
              </a></li>     
            </ul>
            <div id="myTabContent" className="tab-content">
              <div role="tabpanel" className="tab-pane fade active in" id="departaments" aria-labelledby="deps-tab">
                //<FilterGroup filterType="departaments"/>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="municipalities" aria-labelledby="muns-tab">
                <FilterGroup filterType="municipalities"/>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="developmentObjectives" aria-labelledby="dos-tab">
                <FilterGroup filterType="developmentObjectives"/>
              </div>
            </div>
        </div>
        );
    }
});

module.exports = Filter;