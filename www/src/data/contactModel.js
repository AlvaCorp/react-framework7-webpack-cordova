define(function() {

    function Contact(values) {
		values = values || {};
		this.id = values['id'] ||generateGUID();
		this.picId = values['picId'] || getRandomInt(1,10);
		this.createdOn = values['createdOn'] || new Date();

		this.firstName = values['firstName'] || '';
		this.lastName = values['lastName'] || '';
		this.company = values['company'] || '';
		this.phone = values['phone'] || '';
		this.email = values['email'] || '';
		this.city = values['city'] || '';
		this.isFavorite = values['isFavorite'] || false;
		console.log('[ID]',this.id)
    }

	Contact.prototype.setValues = function(inputValues) {
		for (var i = 0, len = inputValues.length; i < len; i++) {
			var item = inputValues[i];
			if (item.type === 'checkbox') {
				this[item.id] = item.checked;
			}
			else {
				this[item.id] = item.value;
			}
		}
	};

	Contact.prototype.validate = function() {
		var result = true;
		if (_.isEmpty(this.firstName) && _.isEmpty(this.lastName)) {
			result = false;
		}
		return result;
	};
	function generateGUID(){
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random()*16)%16 | 0;
			d = Math.floor(d/16);
			return (c=='x' ? r : (r&0x7|0x8)).toString(16);
		});
		return uuid;
	};

	function getRandomInt(min, max)
	{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};


    return Contact;
});


