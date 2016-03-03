
var React = require('react');
var app= require('../app');
var Contact = require('../data/contactModel')
var _=require('lodash')

var List = React.createClass({

	getInitialState: function(){
		return {
			bindings : [{
				element: '.contact-add-link',
				event: 'click',
				handler: this.openAddPopup,
			}, {
				element: '.list-panel-all',
				event: 'click',
				handler: this.showAll
			}, {
				element: '.list-panel-favorites',
				event: 'click',
				handler: this.showFavorites
			}],
			isFavorite: false,
		};
	},
	componentWillMount: function(){
		this.state.contacts = this.loadContacts();
		// console.log('[componentDidMount]',this.state.contacts)
	},
	
	openAddPopup: function() {
		app.router.load('contactEdit', { 'isFavorite': state.isFavorite });
	},

	showAll: function() {
		state.isFavorite = false;
		var contacts = loadContacts();
		// ListView.reRender({ model: contacts, header: "Contacts" });
	},

	showFavorites: function() {
		state.isFavorite = true;
		var contacts = this.loadContacts({ isFavorite: true });
		// ListView.reRender({ model: contacts, header: "Favorites" });
	},

	loadContacts : function (filter) {
		var f7Contacts = localStorage.getItem("f7Contacts");
		var contacts = f7Contacts ? JSON.parse(f7Contacts) : this.tempInitializeStorage();
		if (filter) {
			contacts = _.filter(contacts, filter);
		}
		contacts.sort(this.contactSort);
		contacts = _.groupBy(contacts, function(contact) { return contact.firstName.charAt(0); });
		contacts = _.toArray(_.mapValues(contacts, function(value, key) { return { 'letter': key, 'list': value }; }));
		return contacts;
	},

	tempInitializeStorage: function() {
		var contacts = [
			new Contact({ "firstName": "Alex", "lastName": "Black", "company": "Global Think", "phone": "+380631234561", "email": "ainene@umail.com", "city": "London", isFavorite: true }),
			new Contact({ "firstName": "Kate", "lastName": "Shy", "company": "Big Marketing", "phone": "+380631234562", "email": "mimimi@umail.com", "city": "Moscow" }),
			new Contact({ "firstName": "Michael", "lastName": "Fold", "company": "1+1", "email": "slevoc@umail.com", "city": "Kiev", isFavorite: true }),
			new Contact({ "firstName": "Ann", "lastName": "Ryder", "company": "95 Style", "email": "ryder@umail.com", "city": "Kiev" }),
			new Contact({ "firstName": "Andrew", "lastName": "Smith", "company": "Cycle", "phone": "+380631234567", "email": "drakula@umail.com", "city": "Kiev" }),
			new Contact({ "firstName": "Olga", "lastName": "Blare", "company": "Finance Time", "phone": "+380631234566", "email": "olga@umail.com", "city": "Kiev" }),
			new Contact({ "firstName": "Svetlana", "lastName": "Kot", "company": "Global Think", "phone": "+380631234567", "email": "kot@umail.com", "city": "Odessa" }),
			new Contact({ "firstName": "Kate", "lastName": "Lebedeva", "company": "Samsung", "phone": "+380631234568", "email": "kate@umail.com", "city": "Kiev" }),
			new Contact({ "firstName": "Oleg", "lastName": "Price", "company": "Unilever", "phone": "+380631234568", "email": "uni@umail.com", "city": "Praha", isFavorite: true }),
			new Contact({ "firstName": "Ivan", "lastName": "Ivanov", "company": "KGB", "phone": "+380631234570", "email": "agent@umail.com", "city": "Moscow" }),
			new Contact({ "firstName": "Nadya", "lastName": "Lovin", "company": "Global Think", "phone": "+380631234567", "email": "kot@umail.com", "city": "Odessa" }),
			new Contact({ "firstName": "Alex", "lastName": "Proti", "company": "Samsung", "phone": "+380631234568", "email": "kate@umail.com", "city": "Kiev" }),
			new Contact({ "firstName": "Oleg", "lastName": "Ryzhkov", "company": "Unilever", "phone": "+380631234568", "email": "uni@umail.com", "city": "Praha", isFavorite: true }),
			new Contact({ "firstName": "Daniel", "lastName": "Ricci", "company": "Finni", "phone": "+380631234570", "email": "agent@umail.com", "city": "Milan" })
		];
		localStorage.setItem("f7Contacts", JSON.stringify(contacts));
		return JSON.parse(localStorage.getItem("f7Contacts"));
	},

	contactSort: function(a, b) {
		if (a.firstName > b.firstName) {
			return 1;
		}
		if (a.firstName === b.firstName && a.lastName >= b.lastName) {
			return 1;
		}
		return -1;
	},
	createRows: function(contacts){
		var output = [];
        for(var i = 0; i < contacts.length; i++) {
        	output.push(
        		<li className="list-group-title" key={contacts[i].letter}>{contacts[i].letter}</li>
			)
        	for(j=0;j<contacts[i].list.length;j++)
        	contact=contacts[i].list[j];
        	output.push(
        		<li data-id={contact.id} key={contact.id} className="contact-item">
					<a href={"contact.html?id="+contact.id} className="item-link">
						<div className="item-content">
							<div className="item-media">
								<img src={"src/img/cats/"+(i+1)+".png"} width="44"/>
							</div>
							<div className="item-inner">
								<div className="item-title-row">
									<div className="item-title">{contact.firstName} {contact.lastName}</div>
								</div>
								<div className="item-subtitle">{contact.company}</div>
							</div>
						</div>
					</a>
				</li>
        	);
        }
        return output

	},

	render: function(){
		return (
			<div>
				{this.createRows(this.state.contacts)}
				
			</div>
		)
	}
});
module.exports = List;
