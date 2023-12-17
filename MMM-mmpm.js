const _module_name = "MMM-mmpm";
// can't use 'require' or 'import', otherwise, I'd just pull the metadata from the package.json

Module.register(_module_name, {
	defaults: {},

	start: function () {
		console.log(`Starting module: ${_module_name}`);
		this.sendSocketNotification("MMPM_START");
	},

	getActiveModules: function () {
		const activeModules = [];
		const modules = MM.getModules();

		for (let index = 0; index < modules.length; index++) {
			activeModules.push({name: modules[index].name, hidden: modules[index].hidden, key: index + 1});
		}

		return activeModules;
	},

	modifyModuleVisibility: function (payload) {
		const modules = MM.getModules();

		for (const index = 0; index < payload.modules.length; index++) {
			const moduleIndex = parseInt(payload.modules[index]) - 1;

			if (payload.directive === "hide") {
				modules[moduleIndex].hide();
			} else {
				modules[moduleIndex].show();
			}
		}
	},

	socketNotificationReceived: function (notification, payload) {
		if (notification === "FROM_MMPM_NODE_HELPER_get_active_modules") {
			Log.log("MMPM module received request to retreive active modules list");
			this.sendSocketNotification("FROM_MMPM_MODULE_active_modules", this.getActiveModules());

		} else if (notification === "FROM_MMPM_NODE_HELPER_toggle_modules") {
			Log.log(`MMPM module received request to toggle ${payload} module`);
			this.modifyModuleVisibility(payload);
			this.sendSocketNotification("FROM_MMPM_MODULE_modules_toggled", this.getActiveModules());
		}
	}
});
