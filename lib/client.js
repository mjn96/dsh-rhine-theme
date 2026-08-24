window.__ModuleLoader__.load({
	id: "dsh-rhine-theme",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		// React arrives as the `React` closure symbol in the dynamic-plugin runner
		// and as a seed word via require("react") in a standalone bundle. Fall back
		// across both so the same client.js works installed and pasted into a
		// dynamic Cordis plugin. In either case `react.createElement` resolves.
		let react = (typeof React !== "undefined") ? React : require("react");

		const orange = "#FF7903";
		const orangeHover = "#E96B00";
		const yellow = "#F6C344";
		const ink = "oklch(0.1469 0.0107 184.51)";
		const paper = "oklch(0.9301 0.0081 98.88)";
		const surface = "oklch(0.9616 0.0057 84.57)";
		const conversation = "oklch(0.982 0.0035 88)";
		const themeId = "rhine-lab-light";
		const watermark = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-34 -30 708 380' preserveAspectRatio='xMidYMid meet'%3E%3Cg fill='none' stroke='%230d1f1c' stroke-opacity='.045' stroke-width='38' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M320 160 225 75C170 26 86 33 41 85c-45 52-45 98 0 150 45 52 129 59 184 10l95-85Zm0 0 95-85c55-49 139-42 184 10 45 52 45 98 0 150-45 52-129 59-184 10l-95-85Z'/%3E%3Cpath d='M110 160h80m-40-40v80M460 160h80' stroke-width='22'/%3E%3C/g%3E%3C/svg%3E\")";

		const light = {
			id: themeId,
			colorScheme: "light",
			tokens: {
				"--dsw-alias-bg-base": conversation,
				"--dsw-alias-bg-layer-1": surface,
				"--dsw-alias-bg-layer-2": "oklch(0.948 0.006 92)",
				"--dsw-alias-bg-overlay": "oklch(0.988 0.002 88)",
				"--dsw-alias-border-l1": "oklch(0.875 0.005 110)",
				"--dsw-alias-border-l2": "oklch(0.8337 0.0069 115.73)",
				"--dsw-alias-brand-primary": orange,
				"--dsw-alias-label-primary": ink,
				"--dsw-alias-label-secondary": "oklch(0.4700 0.0100 150)",
				"--dsw-alias-state-error-primary": "oklch(0.555 0.190 28)",
				"--dsw-alias-state-success-primary": "oklch(0.520 0.105 155)",
				"--dsw-alias-state-warn-primary": orange,
				"--dsw-specific-sidebar-fill": paper
			}
		};

		const css = "body{--rhine-ink:" + ink + ";--rhine-paper:" + paper + ";--rhine-surface:" + surface + ";--rhine-conversation:" + conversation + ";--rhine-grid:color-mix(in oklch," + ink + " 3.2%,transparent);--rhine-arc:color-mix(in oklch," + ink + " 8.5%,transparent);--dsw-alias-button-info-fill:" + orange + ";--dsw-alias-button-info-hover:" + orangeHover + ";--dsw-alias-state-business-primary:" + orange + ";--dsw-alias-label-primary-foreground:" + ink + ";--dsw-specific-bubble:oklch(0.955 0.028 67);--dsw-static-deepseek-500:" + ink + ";--dsw-static-deepseek-200:oklch(0.620 0.012 150);--dsw-specific-input-major:" + surface + ";--dsw-alias-border-l4:color-mix(in oklch," + orange + " 55%,oklch(0.8337 0.0069 115.73));--dsw-alias-border-l2-darkmode-thin:oklch(0.8337 0.0069 115.73);--dsw-alias-state-business-tertiary:oklch(0.935 0.045 65);--dsw-alias-label-primary-bluish:oklch(0.360 0.105 48);}" +
			"svg:has(ellipse[fill=\"#6187D8\"]) ellipse[fill=\"#6187D8\"]{fill:" + orange + " !important;fill-opacity:.055 !important;}" +
			"[role=\"treeitem\"] svg[data-state=\"ongoing\"]{--dsh-state-ongoing:" + orange + " !important;color:" + orange + " !important;filter:drop-shadow(0 0 2px color-mix(in srgb," + orange + " 58%,transparent));transform:scale(1.16);transform-origin:center;}" +
			"[role=\"treeitem\"] [data-state=\"done\"]{color:" + orange + " !important;}" +
			"[role=\"treeitem\"] [data-state=\"warning\"]{color:" + yellow + " !important;filter:drop-shadow(0 0 1.5px color-mix(in srgb," + yellow + " 40%,transparent));}" +
			"div:has(>button[aria-label=\"新建会话\"]>span[aria-hidden=\"true\"]),div:has(>button[aria-label=\"New session\"]>span[aria-hidden=\"true\"]){height:84px !important;min-height:84px !important;overflow:visible !important;padding-top:12px !important;padding-bottom:12px !important;}" +
			"button[aria-label=\"新建会话\"]:has(>span[aria-hidden=\"true\"]),button[aria-label=\"New session\"]:has(>span[aria-hidden=\"true\"]){min-height:58px !important;overflow:visible !important;background:transparent !important;border-color:transparent !important;color:var(--rhine-ink) !important;}" +
			"button[aria-label=\"新建会话\"]:has(>span[aria-hidden=\"true\"])>span,button[aria-label=\"New session\"]:has(>span[aria-hidden=\"true\"])>span{height:54px !important;overflow:visible !important;}" +
			"button[aria-label=\"打开侧边栏\"] [data-rhine-mark=\"sidebar\"],button[aria-label=\"Open sidebar\"] [data-rhine-mark=\"sidebar\"]{width:34px !important;height:20px !important;overflow:hidden !important;}" +
			"button[aria-label=\"打开侧边栏\"] [data-rhine-mark=\"sidebar\"] svg,button[aria-label=\"Open sidebar\"] [data-rhine-mark=\"sidebar\"] svg{width:32px !important;height:17px !important;}" +
			".pXSMma_fishHitbox:hover .pXSMma_fish{animation:none !important;}" +
			"[data-rhine-mark=\"hero\"]{transition:filter .16s ease;}" +
			".pXSMma_fishHitbox:hover [data-rhine-mark=\"hero\"]{animation:rhine-hero-nudge .42s ease-in-out;filter:drop-shadow(0 1px 0 color-mix(in srgb," + orange + " 20%,transparent));}" +
			"@keyframes rhine-hero-nudge{0%,100%{transform:translateY(0)}50%{transform:translateY(-1px)}}" +
			"button[aria-label=\"发送消息\"],button[aria-label=\"Send message\"],button[aria-label=\"停止生成\"],button[aria-label=\"Stop generating\"]{box-sizing:border-box !important;width:34px !important;height:34px !important;min-width:34px !important;padding:0 !important;background:" + orange + " !important;border:1px solid " + ink + " !important;border-radius:50% !important;color:" + ink + " !important;box-shadow:none !important;}" +
			"button[aria-label=\"发送消息\"]:hover,button[aria-label=\"Send message\"]:hover,button[aria-label=\"停止生成\"]:hover,button[aria-label=\"Stop generating\"]:hover{background:" + orangeHover + " !important;}" +
			"button[aria-label=\"新建会话\"],button[aria-label=\"New session\"]{background:var(--rhine-surface) !important;border:1px solid var(--rhine-ink) !important;color:var(--rhine-ink) !important;box-shadow:none !important;}" +
			"button[aria-label=\"新建会话\"]:hover,button[aria-label=\"New session\"]:hover{background:var(--rhine-ink) !important;color:var(--rhine-surface) !important;}" +
			"button[aria-label=\"新建会话\"]:has(>span[aria-hidden=\"true\"]),button[aria-label=\"New session\"]:has(>span[aria-hidden=\"true\"]){background:transparent !important;border-color:transparent !important;color:var(--rhine-ink) !important;}" +
			"[data-conversation-scroll]{background-color:var(--rhine-conversation) !important;background-image:" + watermark + ",linear-gradient(180deg,var(--rhine-conversation) 0%,color-mix(in oklch,var(--rhine-conversation) 68%,transparent) 17%,transparent 38%,transparent 70%,color-mix(in oklch,var(--rhine-conversation) 72%,transparent) 91%,var(--rhine-conversation) 100%),linear-gradient(90deg,var(--rhine-conversation) 0%,color-mix(in oklch,var(--rhine-conversation) 82%,transparent) 25%,transparent 56%,transparent 80%,color-mix(in oklch,var(--rhine-conversation) 65%,transparent) 94%,var(--rhine-conversation) 100%),radial-gradient(circle 410px at calc(100% + 170px) 34%,transparent 0 408px,var(--rhine-arc) 409px 410px,transparent 411px),repeating-linear-gradient(0deg,var(--rhine-grid) 0 1px,transparent 1px 56px),repeating-linear-gradient(90deg,var(--rhine-grid) 0 1px,transparent 1px 56px) !important;background-size:clamp(300px,34vw,440px) auto,auto,auto,auto,62% 68%,62% 68% !important;background-position:right 24px bottom 96px,center,center,center,right 0 top 12%,right 0 top 12% !important;background-repeat:no-repeat,no-repeat,no-repeat,no-repeat,no-repeat,no-repeat !important;}";

		/** Mount the plugin stylesheet for exactly the owning plugin lifetime. */
		function installStyles(ctx, stylesheet) {
			// Dynamic Cordis runner provides the `styles` global; a standalone
			// bundle does not. Prefer the runner's insert so unload disposes it.
			if (typeof styles !== "undefined" && styles && typeof styles.insert === "function") {
				return styles.insert(stylesheet);
			}
			if (typeof document === "undefined") return;
			ctx.effect(() => {
				// Idempotency: never stack duplicate stylesheets on a re-apply.
				document.querySelectorAll('style[data-plugin="dsh-rhine-theme"]').forEach((old) => old.remove());
				const tag = document.createElement("style");
				tag.dataset.plugin = "dsh-rhine-theme";
				tag.dataset.pluginCss = "dsh-rhine-theme/main";
				tag.textContent = stylesheet;
				document.head.appendChild(tag);
				return () => {
					tag.remove();
				};
			}, "dsh-rhine-theme: stylesheet");
		}

		function InfinitySvg(width, height, className, extraStyle) {
			return react.createElement("svg", { width, height, className, viewBox: "-4 -3 72 38", fill: "none", "aria-hidden": "true", style: Object.assign({ display: "block", color: "var(--rhine-ink)", overflow: "visible" }, extraStyle || {}) },
				react.createElement("path", { d: "M32 16 22.5 7.5C17 2.6 8.6 3.3 4.1 8.5c-4.5 5.2-4.5 9.8 0 15 4.5 5.2 12.9 5.9 18.4 1L32 16Zm0 0 9.5-8.5c5.5-4.9 13.9-4.2 18.4 1 4.5 5.2 4.5 9.8 0 15-4.5 5.2-12.9 5.9-18.4 1L32 16Z", stroke: "currentColor", strokeWidth: "5.5", strokeLinecap: "round", strokeLinejoin: "round" }),
				react.createElement("path", { d: "M10.5 16h9M15 11.5v9", stroke: "currentColor", strokeWidth: "2.35", strokeLinecap: "round" }),
				react.createElement("path", { d: "M45.5 16h9", stroke: "currentColor", strokeWidth: "2.35", strokeLinecap: "round" })
			);
		}

		function SidebarInfinityMark(props) {
			const size = props.size === undefined ? 24 : props.size;
			const width = size * 4.5;
			const height = size * 2.1;
			return react.createElement("span", { "data-rhine-mark": "sidebar", style: { width: width + "px", height: height + "px", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", overflow: "visible" } }, InfinitySvg(width * 0.969, height * 0.933, props.className));
		}

		function HeroInfinityMark(props) {
			const size = props.size === undefined ? 34 : props.size;
			const width = size * 4.36;
			const height = size * 1.96;
			// Lay out at the mark's own true rendered width (no absolute-position
			// overflow, no translateX compensation): the grid's justify-content:center
			// then centers the real geometry instead of a hand-tuned magic-number
			// offset that silently drifts whenever the upstream headline text,
			// font, or badge width changes across a DSH update.
			return react.createElement("span", { "data-rhine-mark": "hero", style: { width: width + "px", height: height + "px", display: "inline-flex", alignItems: "center", flex: "0 0 auto", overflow: "visible" } }, InfinitySvg(width, height, props.className));
		}

		function RhineWordmark() {
			return react.createElement("span", { style: { color: "var(--rhine-ink)", fontFamily: "'Novecento Wide', 'Avenir Next Condensed', 'DIN Condensed', serif", fontSize: "14px", fontWeight: 700, letterSpacing: "0.16em", whiteSpace: "nowrap", opacity: 0.82 } }, "RHINE LAB");
		}

		/** Required services: slot registry and the theme service. */
		const inject = ["slots", "theme"];

		/** Register the RHINE LAB theme, mount its stylesheet and brand slots, and keep it active. */
		function apply(ctx) {
			// Idempotency: the installed bundle can be applied more than once (boot
			// loader + cordis composition both mount it). A second apply would
			// re-register the same theme id and the same priority -1 brand slots and
			// throw, so only the first application owns the registrations.
			if (typeof window !== "undefined" && window.__dshRhineThemeApplied) return;
			if (typeof window !== "undefined") window.__dshRhineThemeApplied = true;

			ctx.effect(() => ctx.theme.register(light), "register RHINE LAB light theme");
			ctx.effect(() => ctx.on("theme/change", (snapshot) => {
				if (snapshot.preference !== themeId) ctx.theme.setTheme(themeId);
			}), "keep RHINE LAB theme active");
			installStyles(ctx, css);

			ctx.slots.inject("sidebar.brand.mark", () => ctx.slots.register({ name: "sidebar.brand.mark", priority: -1 }, SidebarInfinityMark));
			ctx.slots.inject("sidebar.brand.name", () => ctx.slots.register({ name: "sidebar.brand.name", priority: -1 }, RhineWordmark));
			ctx.slots.inject("conversation.hero.brand.mark", () => ctx.slots.register({ name: "conversation.hero.brand.mark", priority: -1 }, HeroInfinityMark));

			ctx.theme.setTheme(themeId);
		}

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
