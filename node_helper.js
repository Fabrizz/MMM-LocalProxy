/*
 * MMM-LocalProxy
 * MIT License
 *
 * By Fabrizz <3
 */

const NodeHelper = require("node_helper");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = NodeHelper.create({
	start: function () {
		console.log("Starting node helper: " + this.name);
		this.expressApp.use(
			"/localproxy",
			createProxyMiddleware({
				router: function (req) {
					if (!req.query.url) return;
					let url = new URL(req.query.url);
					if (req.hostname === url.hostname) {
						console.warn("The request hostname is the same as the target");
						return;
					}
					return url.origin;
				},
				pathRewrite: function (path, req) {
					if (!req.query.url) return;
					let url = new URL(req.query.url);
					if (!url.pathname) return;
					return url.pathname;
				},
				ws: false
			})
		);
	}
});
