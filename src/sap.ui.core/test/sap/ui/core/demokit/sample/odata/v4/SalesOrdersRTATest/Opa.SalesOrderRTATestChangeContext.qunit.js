/*!
 * ${copyright}
 */
sap.ui.define([
	"sap/ui/core/sample/odata/v4/SalesOrders/tests/ChangeContext",
	"sap/ui/test/opaQunit",
	"sap/ui/test/TestUtils"
], function (ChangeContextTest, opaTest, TestUtils) {
	/*global QUnit */
	"use strict";

	QUnit.module("sap.ui.core.sample.odata.v4.SalesOrdersRTATest - Change Context");

	//*****************************************************************************
	if (TestUtils.isRealOData()) {
		QUnit.skip("Test runs only with realOData=false");
	} else {
		opaTest("Change dependent binding, change context and check", function (Given, When, Then) {
			ChangeContextTest.changeContext(Given, When, Then,
				"sap.ui.core.sample.odata.v4.SalesOrdersRTATest");
		});
	}

});