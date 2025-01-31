window.Liferay = {
	Language: {
		get: function(key) {
			return key;
		}
	},
	ThemeDisplay: {
		getPathContext: function() {
			return '';
		}
	}
};

var main = require('../src/index.js');

var params = {
	portletElementId: 'the-portlet',
	contextPath: '/',
	portletNamespace: '_the-portlet_',
	configuration: {
		portletPreferences: {},
		system: {}
	}
};

if (main.default) {
	main = main.default;
}

main(params);