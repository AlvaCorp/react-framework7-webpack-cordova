
var React = require('react');
var app= require('../app');
var Contact = require('../data/contactModel')
var _ =require('lodash')

var Contact = React.createClass({

	getInitialState: function(){
		return {
			 contact : null,
			 bindings : [{
				element: '.contact-edit-link',
				event: 'click',
				handler: this.runEditMode
			}],
		}
	},
    componentWillMount: function(){
    	var contacts = JSON.parse(localStorage.getItem("f7Contacts"));
    	var query=this.props.query;
		if (query && query.id) {
			var contact = _.find(contacts, { id: query.id });
			console.log('[will mount]',contacts,query.id)
			this.state.contact=contact;
		}

		// ContactView.render({
		// 	model: this.state.contact,
		// 	bindings: this.state.bindings,
		// });
    },
    runEditMode: function() {
		app.router.load('contactEdit', {id: contact.id });
	},
	createRows: function(model){

		return(
			<div className="page-content">
				<div className="contact-header">
					<div className="item-photo">
						<img src={"src/img/cats/"+model.picId+".png"} />
					</div>
					<div className="header-text">
						<h3>{model.firstName} {model.lastName}</h3>
						<p>{model.company}</p>
					</div>
				</div>
				<div className="list-block">
					<div className="list-group">
						<ul>
							{ model.phone ?
								<li>
									<a href={"tel:"+model.phone} className="item-link item-content external">
										<div className="item-media"><i className="icon ion-ios7-telephone-outline"></i></div>
										<div className="item-inner">
											<div className="item-title">{model.phone}</div>
										</div>
									</a>
								</li>
							: null
							}
							{ model.email ?
								<li>
									<a href={"mailto:"+model.email} className="item-link item-content external">
										<div className="item-media"><i className="icon ion-ios7-email-outline"></i></div>
										<div className="item-inner">
											<div className="item-title">{model.email}</div>
										</div>
									</a>
								</li>
							:null
							}
							{model.city ?
								<li className="item-content">
									<div className="item-media"><i className="icon ion-ios7-world-outline"></i></div>
									<div className="item-inner">
										<div className="item-title">{model.city}</div>
									</div>
								</li>
							:null
							}
						</ul>
					</div>
				</div>
			</div>
		)

	},

	render: function(){
		return (
			<div>
				{this.createRows(this.state.contact)}
				
			</div>
		)
	}
});
module.exports=Contact;






