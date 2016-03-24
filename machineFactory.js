angular.module('ableApp')

.factory('machineFactory', [
	function() {

		var machineData = [
			{
				"key": "Machine1" ,
				"parent": "none",
				"Name": "Machine1" ,
				"DefaultPLC": "",
				"scanPriority" :""  ,
				"templateRef":"" ,
				"primaryRef":"" ,
				"deviceName":"" ,
				"reasonList":"" ,
				"Area":"" ,
				"Type":"" ,
				"Conditions": [
					{
						"Name": "", 
						"Description": "",
						"stateKey": ""
					},
					{
						"Name": "", 
						"Description": "",
						"stateKey": ""
					}
				]
			},
			{
				"key": "Machine2",
				"parent": "Machine1",
				"Name": "Machine2" ,
				"DefaultPLC": "",
				"scanPriority" :""  ,
				"templateRef":"" ,
				"primaryRef":"" ,
				"deviceName":"" ,
				"reasonList":"" ,
				"Area":"" ,
				"Type":"" ,
				"Conditions": [
					{
						"Name": "", 
						"Description": "",
						"stateKey": ""
					},
					{
						"Name": "", 
						"Description": "",
						"stateKey": ""
					}
				]
			}
		];

		function getAll(){
			return machineData;
		}

		function getById(id){
			for(var i=0;i<machineData.length;i++){
				if(machineData[i].key == id){
					return machineData[i];
				}
			}
			throw "asset not found!";
		}

		return {
			getAll: getAll,
			getById: getById
		};

	},






	]);