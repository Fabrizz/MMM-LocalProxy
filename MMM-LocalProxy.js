/*
 * MMM-LocalProxy
 * MIT License
 *
 * By Fabrizz <3
 */

Module.register("MMM-LocalProxy", {
	requiresVersion: "2.12.0",
	defaults: {
		name: "MMM-LocalProxy"
	},
	start: function () {
		this.logBadge();
	},
	logBadge: function () {
		console.log(
			`\n %c by Fabrizz %c ${this.name} %c \n`,
			"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 3px 0 0 3px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)",
			"background-color: #bc81e0;background-image: linear-gradient(90deg, #9F1239, #F43F5E);color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 3px 3px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)",
			"background-color: transparent"
		);
	}
});
