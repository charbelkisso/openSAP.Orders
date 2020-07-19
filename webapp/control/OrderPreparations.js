sap.ui.define([
	"sap/ui/core/XMLComposite"
], function(XMLComposite){
	"use strict";
	
	return XMLComposite.extend("opensap.orders.control.OrderPreparations",{
		metadata:{
			properties:{
				switchStateItems: { type:"boolean", defaultValue: false},
				switchStateInvoice: { type:"boolean",defaultValue: false},
				switchStateSample: { type:"boolean", defaultValue: false}
			},
			events: {
				confirm: {}
			}
		},
		
		onConfirm: function(){
			this.fireEvent("confirm", {});	
			this.byId("prderPreparations").setExpand(false);
			this._resetSwitches();
		},
		
		reset: function(){
			this.byId("orderPreparations").setExpand(true);
			this._resetSwitches();
		},
		
		_resetSwitches: function(){
			this.setSwitchStateItems(false);
			this.setSwitchStateInvoice(false);
			this.setSwitchStateSample(false);
		}
	});
});