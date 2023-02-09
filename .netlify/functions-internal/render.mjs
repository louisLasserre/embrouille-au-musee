import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/alfred-home.png","assets/alfred.png","assets/bg-home.png","assets/fond_finding.png","assets/fond_home.png","assets/heritier-home.png","assets/heritier.png","assets/madame-home.png","assets/madame.png","assets/paintings-all.png","favicon.png","fonts/ClassicalRomance-Bold.ttf","fonts/Raleway-Bold.ttf","fonts/Raleway-Italic.ttf","fonts/Raleway-Light.ttf","fonts/Raleway-Medium.ttf","fonts/Raleway-Regular.ttf","fonts/Raleway-SemiBold.ttf","icons/.DS_Store","icons/close.png","icons/clue.png","icons/fond_item.png","icons/valid.png","items/.DS_Store","items/chapeau.png","items/noeud.png","items/testament.png","paintings/.DS_Store","paintings/alfred-roll.jpeg","paintings/alfred-roll.jpg","paintings/les-heritiers.jpeg","paintings/les-heritiers.jpg","paintings/madame-samazeuilh.jpeg","paintings/madame-samazeuilh.jpg","reelpaintings/alfred-roll.jpg","reelpaintings/les-heritiers.jpg","reelpaintings/madame-samazeuilh.jpg","videos/alfred-roll-clue-get-item.mp4","videos/alfred-roll-clue-place-item.mp4","videos/alfred-roll-placed-item.mp4","videos/alfred-roll.mp4","videos/les-heritiers-clue-get-item.mp4","videos/les-heritiers-clue-place-item.mp4","videos/les-heritiers-placed-item.mp4","videos/les-heritiers.mp4","videos/madame-samazeuilh-clue-get-item.mp4","videos/madame-samazeuilh-clue-place-item.mp4","videos/madame-samazeuilh-placed-item.mp4","videos/madame-samazeuilh.mp4","videos/test/test2.mp4","videos/test/test6.mp4","videos/test/test9.mp4"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".jpeg":"image/jpeg",".jpg":"image/jpeg",".mp4":"video/mp4"},
	_: {
		entry: {"file":"_app/immutable/start-79ba76ef.js","imports":["_app/immutable/start-79ba76ef.js","_app/immutable/chunks/index-fc31dc69.js","_app/immutable/chunks/singletons-2931adcb.js","_app/immutable/chunks/index-ea35beae.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/end",
				pattern: /^\/end\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/find-painting",
				pattern: /^\/find-painting\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/tableau/explore/[id]",
				pattern: /^\/tableau\/explore\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/tableau/video/[id]",
				pattern: /^\/tableau\/video\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
