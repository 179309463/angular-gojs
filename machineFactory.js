angular.module('ableApp')

.factory('machineFactory', [
	function() {

		var machineData = [
			{
				"key": "Packer" ,
				"parent": "none",
				"name": "Packer" ,
				"defaultPLC": "Packer_PLC",
				"scanPriority" :""  ,
				"templateRef":"" ,
				"primaryRef":"" ,
				"deviceName":"" ,
				"reasonList":"" ,
				"area":"Packaging" ,
				"type":"LINE" ,
				"conditions": [
					{
						"name": "", 
						"description": "",
						"stateKey": ""
					},
					{
						"name": "", 
						"description": "",
						"stateKey": ""
					}
				]
			},
			{
				"key": "Conveyer",
				"parent": "Packer",
				"name": "Conveyer" ,
				"defaultPLC": "Conveyer_PLC",
				"scanPriority" : ""  ,
				"templateRef":"" ,
				"primaryRef":"" ,
				"deviceName":"" ,
				"reasonList":"" ,
				"area":"Packaging" ,
				"type":"LINE" ,
				"conditions": [
					{
						"name": "", 
						"description": "",
						"stateKey": ""
					},
					{
						"name": "", 
						"description": "",
						"stateKey": ""
					}
				]
			},
			{
				"key": "Palletizer1",
				"parent": "Conveyer",
				"name": "Palletizer1" ,
				"defaultPLC": "Palletizer_PLC",
				"scanPriority" : ""  ,
				"templateRef":"" ,
				"primaryRef":"" ,
				"deviceName":"" ,
				"reasonList":"" ,
				"area":"Packaging" ,
				"type":"LINE" ,
				"conditions": [
					{
						"name": "", 
						"description": "",
						"stateKey": ""
					},
					{
						"name": "", 
						"description": "",
						"stateKey": ""
					}
				]
			},
			{
				"key": "Palletizer2",
				"parent": "Conveyer",
				"name": "Palletizer2" ,
				"defaultPLC": "Palletizer_PLC",
				"scanPriority" : ""  ,
				"templateRef":"" ,
				"primaryRef":"" ,
				"deviceName":"" ,
				"reasonList":"" ,
				"area":"Packaging" ,
				"type":"LINE" ,
				"conditions": [
					{
						"name": "", 
						"description": "",
						"stateKey": ""
					},
					{
						"name": "", 
						"description": "",
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