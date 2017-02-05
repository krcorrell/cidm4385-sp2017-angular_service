var unitConverter = angular.module("UnitConverter", []);

/* conversion rates and UI idea from: http://convert.french-property.co.uk/ */

unitConverter.controller('UnitConverterController', [
	'$scope', function($scope){
		
		var ucc = this;
		
		//attributes
		ucc.lengthValue = 0;
		

		//cities to populate the drop-down box
		ucc.metric_volume_units = 
		[
			{
				unit_name: "Cubic Centimeters",
				unit_code: "cm3",
				type: "metic"
			},
			{
				unit_name: "Cubic Decimeters",
				unit_code: "dm3",
				type: "metic"
			},
			{
				unit_name: "Cubic Meters",
				unit_code: "m3",
				type: "metic"
			},
			{
				unit_name: "Liters",
				unit_code: "l",
				type: "metic"
			},	
			{
				unit_name: "Hectoliters",
				unit_code: "hl",
				type: "metic"
			}
		];		
		
		ucc.imperial_volume_units = 
		[
			{
				unit_name: "Fluid Ounce",
				unit_code: "fl oz",
				type: "imperial"
			},
			{
				unit_name: "Pint",
				unit_code: "pt",
				type: "imperial"
			},
			{
				unit_name: "Quart",
				unit_code: "qt",
				type: "imperial"
			},
			{
				unit_name: "Gallon",
				unit_code: "gal",
				type: "imperial"
			}
		];	

		ucc.metric_mass_units = 
		[
			{
				unit_name: "Grams",
				unit_code: "g",
				type: "metic"
			},
			{
				unit_name: "Kilogram",
				unit_code: "kg",
				type: "metic"
			},
			{
				unit_name: "Milligram",
				unit_code: "mg",
				type: "metic"
			},
			{
				unit_name: "Tonne",
				unit_code: "t",
				type: "metic"
			}
		];		
		
		ucc.imperial_mass_units = 
		[
			{
				unit_name: "Ounce",
				unit_code: "oz",
				type: "imperial"
			},
			{
				unit_name: "Pound",
				unit_code: "lb",
				type: "imperial"
			},
			{
				unit_name: "Stone",
				unit_code: "s",
				type: "imperial"
			},
			{
				unit_name: "Hundredweight",
				unit_code: "cwt",
				type: "imperial"
			}
		];	
		
		ucc.metric_length_units = 
		[
			{
				unit_name: "Millimetre",
				unit_code: "mm",
				type: "metic"
			},
			{
				unit_name: "Centimetre",
				unit_code: "cm",
				type: "metic"
			},
			{
				unit_name: "Metre",
				unit_code: "m",
				type: "metic"
			},
			{
				unit_name: "Kilmetre",
				unit_code: "km",
				type: "metic"
			}
		];	
		
		ucc.imperial_length_units = 
		[
			{
				unit_name: "Inch",
				unit_code: "in",
				type: "imperial"
			},
			{
				unit_name: "Foot",
				unit_code: "ft",
				type: "imperial"
			},
			{
				unit_name: "Yard",
				unit_code: "yd",
				type: "imperial"
			},
			{
				unit_name: "Mile",
				unit_code: "ml",
				type: "imperial"
			}
		];	
		
		function lengthUpdated(){
			console.log(ucc.lengthValue);
		}
		
		$scope.$watch('ucc.lengthValue', lengthUpdated);
		
		ucc.selected_metric_volume_unit = ucc.metric_volume_units[0];
		ucc.selected_imperial_volume_unit = ucc.imperial_volume_units[0];
		
		ucc.selected_metric_mass_unit = ucc.metric_mass_units[0];
		ucc.selected_imperial_mass_unit = ucc.imperial_mass_units[0];
		
		ucc.selected_metric_length_unit = ucc.metric_length_units[0];
		ucc.selected_imperial_length_unit = ucc.imperial_length_units[0];
		
		//behaviors
		
		ucc.showSelectedUnit = function(){
			console.log(ucc.selected_metric_volume_unit.unit_name);
			console.log(ucc.selected_imperial_volume_unit.unit_name);
			
			console.log(ucc.selected_metric_mass_unit.unit_name);
			console.log(ucc.selected_imperial_mass_unit.unit_name);
			
			console.log(ucc.selected_metric_length_unit.unit_name);
			console.log(ucc.selected_imperial_length_unit.unit_name);
		}
		
	}
]);
