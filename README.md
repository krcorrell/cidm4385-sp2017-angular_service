# Unit Converter

This program is a *unit converter* it will convert _metric_ to _imperial_
and ~~Vice Versa~~

1. Enter the numeric value you want to convert.
2. Select the unit in metric that you are converting.
..* Then select the imperial unit you want to convert to.
3. The goal is to create something that somewhat looks like this page. [Metric and Imperial Converter](http://convert.french-property.co.uk/)

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Using basic HTML

``` HTML
<html ng-app="UnitConverter">
	<head>
		<title>Unit Converter</title>
	</head>
	<body>
		<h1>Converter App</h1>
		<div ng-controller="UnitConverterController as ucc">
			<input type="text" ng-model="ucc.lengthValue" id="Length_value" name="VALUE" placeholder="Enter amount">
            <select ng-model="ucc.selected_metric_volume_unit" 
                    ng-options="unit.unit_name for unit in ucc.metric_volume_units" 
                    ng-change="ucc.showSelectedUnit()"></select>
			
			<!--<select>-->
			<div>
				<p>Selected unit is: <span ng-bind="ucc.selected_metric_volume_unit.unit_name"></span></p>
			</div>
		</div>
        <script src="angular.js"></script>
        <script src="app.js"></script>	
	</body>
</html>
```