const app = angular.module('app', ['ui.router', 'percentage']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.hashPrefix('Nemesis');
	$stateProvider
			.state('home', {
				url: '/',
				views: {
					'container@': {
						templateUrl: 'html/home.html'
					},
					'title@': {
						template: '序言'
					}
				}
			})
			.state('guide', {
				url: '/guide',
				views: {
					'container@': {
						templateUrl: 'html/guide/guide-sub-0.html'
					},
					'title@': {
						template: '职业简介'
					}
				}
			})
			.state('badge', {
				url: '/badge',
				views: {
					'container@': {
						templateUrl: 'html/guide/guide-sub-1.html'
					},
					'title@': {
						template: '时装、附魔、徽章'
					}
				}
			})
			.state('title', {
				url: '/title',
				views: {
					'container@': {
						templateUrl: 'html/guide/guide-sub-2.html'
					},
					'title@': {
						template: '称号'
					}
				}
			})
			.state('pet', {
				url: '/pet',
				views: {
					'container@': {
						templateUrl: 'html/guide/guide-sub-3.html'
					},
					'title@': {
						template: '宠物'
					}
				}
			});
	$stateProvider
			.state('novice', {
				url: '/novice'
			})
			.state('novice.0', {
				url: '/0',
				views: {
					'container@': {
						templateUrl: 'html/novice/novice-sub-0.html'
					},
					'title@': {
						template: '入门篇&nbsp;-&nbsp;<small>加点模板</small>'
					}
				}
			})
			.state('novice.1', {
				url: '/1',
				views: {
					'container@': {
						templateUrl: 'html/novice/novice-sub-1.html'
					},
					'title@': {
						template: '入门篇&nbsp;-&nbsp;<small>装备推荐</small>'
					}
				}
			})
			.state('novice.2', {
				url: '/2',
				views: {
					'container@': {
						templateUrl: 'html/novice/novice-sub-2.html'
					},
					'title@': {
						template: '入门篇&nbsp;-&nbsp;<small>Buff堆砌</small>'
					}
				}
			});
	$stateProvider
			.state('skills', {
				url: '/skills'
			})
			.state('skills.0', {
				url: '/0',
				views: {
					'container@': {
						templateUrl: 'html/skills/skill_sub_0.html'
					},
					'title@': {
						template: '第三章&nbsp;-&nbsp;<small>技能篇</small>'
					}
				}
			})
			.state('skills.1', {
				url: '/1',
				views: {
					'container@': {
						templateUrl: 'html/skills/skill_sub_1.html'
					},
					'title@': {
						template: '第三章&nbsp;-&nbsp;<small>技能篇</small>'
					}
				}
			})
			.state('skills.2', {
				url: '/2',
				views: {
					'container@': {
						templateUrl: 'html/skills/skill_sub_2.html'
					},
					'title@': {
						template: '第三章&nbsp;-&nbsp;<small>技能篇</small>'
					}
				}
			})
			.state('skills.3', {
				url: '/3',
				views: {
					'container@': {
						templateUrl: 'html/skills/skill_sub_3.html',
						controller: 'main'
					},
					'title@': {
						template: '第三章&nbsp;-&nbsp;<small>技能篇</small>'
					}
				}
			})
			.state('skills.4', {
				url: '/4',
				views: {
					'container@': {
						templateUrl: 'html/skills/skill_sub_4.html',
						controller: 'main'
					},
					'title@': {
						template: '第三章&nbsp;-&nbsp;<small>技能篇</small>'
					}
				}
			})
			.state('skills.common', {
				url: '/common',
				views: {
					'container@': {
						templateUrl: 'html/skills/skill_sub_common.html'
					},
					'title@': {
						template: '第三章&nbsp;-&nbsp;<small>技能篇</small>'
					}
				}
			})
			.state('skills.ex', {
				url: '/ex',
				views: {
					'container@': {
						templateUrl: 'html/skills/skill_sub_ex.html'
					},
					'title@': {
						template: '第三章&nbsp;-&nbsp;<small>技能篇</small>'
					}
				}
			});
	//定义道具分类
	$stateProvider
			.state('items', {
				url: '/items'
			});
	//道具 - 武器
	$stateProvider
			.state('items.weapon', {
				url: '/weapon',
				views: {
					'container@': {
						templateUrl: 'html/items/weapon/weapon_index.html',
						controller: function ($state) {
							$state.go('items.weapon.dirk');//默认显示第一个tab
						},
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>武器</small>'
					}
				}
			})
			.state('items.weapon.criterion', {
				url: '/criterion',
				views: {
					'items': {
						templateUrl: 'html/criterion.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>criterion</small>'
					}
				}
			})
			.state('items.weapon.dirk', {
				url: '/dirk',
				views: {
					'items': {
						templateUrl: 'html/items/weapon/dirk.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>短剑</small>'
					}
				}
			})
			.state('items.weapon.katana', {
				url: '/katana',
				views: {
					'items': {
						templateUrl: 'html/items/weapon/katana.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>太刀</small>'
					}
				}
			})
			.state('items.weapon.lswd', {
				url: '/lswd',
				views: {
					'items': {
						templateUrl: 'html/items/weapon/lswd.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>巨剑</small>'
					}
				}
			})
			.state('items.weapon.blunt', {
				url: '/blunt',
				views: {
					'items': {
						templateUrl: 'html/items/weapon/blunt.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>钝器</small>'
					}
				}
			});
	//道具 - 防具
	$stateProvider
			.state('items.armors', {
				url: '/armors',
				views: {
					'container@': {
						templateUrl: 'html/items/armors/armors_index.html',
						controller: function ($state) {
							$state.go('items.armors.lv80');//默认显示第一个tab
						}
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>防具</small>'
					}
				}
			})
			.state('items.armors.criterion', {
				url: '/criterion',
				views: {
					'items': {
						templateUrl: 'html/criterion.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>criterion</small>'
					}
				}
			})
			.state('items.armors.lv80', {
				url: '/lv80',
				views: {
					'items': {
						templateUrl: 'html/items/armors/lv_80.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>80级套装</small>'
					}
				}
			})
			.state('items.armors.lv85', {
				url: '/lv85',
				views: {
					'items': {
						templateUrl: 'html/items/armors/lv_85.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>85级套装</small>'
					}
				}
			})
			.state('items.armors.lv90a', {
				url: '/lv90a',
				views: {
					'items': {
						templateUrl: 'html/items/armors/lv_90a.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>90级套装（A类）</small>'
					}
				}
			})
			.state('items.armors.lv90b', {
				url: '/lv90b',
				views: {
					'items': {
						templateUrl: 'html/items/armors/lv_90b.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>90级套装（B类）</small>'
					}
				}
			})
			.state('items.armors.scattered', {
				url: '/scattered',
				views: {
					'items': {
						templateUrl: 'html/items/armors/scattered.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>散件</small>'
					}
				}
			});
	//道具 - 首饰
	$stateProvider
			.state('items.ring', {
				url: '/ring',
				views: {
					'container@': {
						templateUrl: 'html/items/ring/ring_index.html',
						controller: function ($state) {
							$state.go('items.ring.suit');//默认显示第一个tab
						}
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>首饰</small>'
					}
				}
			})
			.state('items.ring.criterion', {
				url: '/criterion',
				views: {
					'items': {
						templateUrl: 'html/criterion.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>criterion</small>'
					}
				}
			})
			.state('items.ring.suit', {
				url: '/suit',
				views: {
					'items': {
						templateUrl: 'html/items/ring/suit.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>首饰</small>'
					}
				}
			})
			.state('items.ring.scattered', {
				url: '/scattered',
				views: {
					'items': {
						templateUrl: 'html/items/ring/scattered.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>首饰</small>'
					}
				}
			})
			.state('items.auxiliary', {
				url: '/auxiliary',
				views: {
					'container@': {
						templateUrl: 'html/items/auxiliary/auxiliary_index.html',
						controller: function ($state) {
							$state.go('items.auxiliary.suit');//默认显示第一个tab
						}
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>特殊装备</small>'
					}
				}
			})
			.state('items.auxiliary.suit', {
				url: '/suit',
				views: {
					'items': {
						templateUrl: 'html/items/auxiliary/suit.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>特殊装备</small>'
					}
				}
			})
			.state('items.auxiliary.scattered', {
				url: '/scattered',
				views: {
					'items': {
						templateUrl: 'html/items/auxiliary/scattered.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>特殊装备</small>'
					}
				}
			})
			.state('items.degenerator', {
				url: '/degenerator',
				views: {
					'container@': {
						templateUrl: 'html/degenerator/degenerator-index.html',
						controller: function ($state) {
							$state.go('items.degenerator.2&3');//默认显示第一个tab
						}

					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>武器</small>'
					}
				}
			})
			.state('items.degenerator.2&3', {
				url: '/2&3',
				views: {
					'items': {
						templateUrl: 'html/degenerator/degenerator-sub-0.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>异界装备</small>'
					}
				}
			})
			.state('items.degenerator.2', {
				url: '/2',
				views: {
					'items': {
						templateUrl: 'html/degenerator/degenerator-sub-1.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>异界装备</small>'
					}
				}
			})
			.state('items.degenerator.3', {
				url: '/3',
				views: {
					'items': {
						templateUrl: 'html/degenerator/degenerator-sub-2.html'
					},
					'title@': {
						template: '装备篇&nbsp;-&nbsp;<small>异界装备</small>'
					}
				}
			});
	$stateProvider
			.state('count', {
				url: '/count',
				views: {
					'container@': {
						templateUrl: 'html/count.html'
					},
					'title@': {
						template: '装备提升率计算器'
					}
				}
			});

	$urlRouterProvider.otherwise('/');
}]);
{
	document.body.onselectstart = function () {
		return false;
	};
	document.oncut = function () {
		return false;
	};
	document.oncopy = function () {
		return false;
	};
	document.body.oncopy = function () {
		return false;
	};
}
app.run(function ($rootScope) {
	$rootScope.$on('$viewContentLoading',
			function (event, viewConfig) {
				$rootScope.preloader = true;
			});

	$rootScope.$on('$viewContentLoaded',
			function (event) {
				$rootScope.preloader = false;
				$('html, body').animate({scrollTop: 0}, 0);
			});

});
app.filter("changeFirst", function () {
	return function (str) {
		let arr = str.split(" ");
		arr = arr.map(function (ele) {
			if (ele && ele[0].charCodeAt() >= 97 && ele[0].charCodeAt() <= 122) {
				ele = ele[0].toUpperCase() + ele.substring(1);
			}
			return ele;
		});
		return arr.join(" ");　　　　//将改变后的数组arr以空格拼接为字符串，作为返回值
	}
});

/*
 * @Count Items
 * Enhanched Damage
 * */
app.controller('count', ['$scope', '$filter',
	function ($scope, $filter,) {
		let THEMONSTERS = {};
		let units = {};
		let item = [];

		/*
		 * lukeRaid
		 * luke
		 * AntonRaid
		 * */
		$scope.surroundings = 'luckRaid';

		/**
		 * Creates a new resist of Monster
		 * @constructor
		 * @param {number} fire
		 * @param {number} water
		 * @param {number} light
		 * @param {number} shadow
		 */
		function Resist(fire, water, light, shadow) {
			this.fire = {
				name: '火',
				attr: fire,
				icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAC+klEQVQ4jWXUIXAbSRAF0GeXQYutmJZloczkQzazoMJsFrPkUAwddmansMCYxYfOQXFYDGUmM4udoOCKadGp2R5Yn52q/Kqunumanuk/83t23hyO2qqqVMNKFWHQKyyRoKfZbGylzDQsB06HpW3dWK1qD0KdablcanJj57CIVlBF+Dyu9M9G5pczl8u1JgqCTZOqCAeZPp0Pmb7j5s7th5m7CLMmKcJuRAhh0g/9kyHjA0dfTl2PK4UkqYpwEOnTlwk3KzYrzsZOJ5XrSWWsw65M/Uzjqs/rI2zYH6j+PDYOQuqh6hWUwfyMfoGCdyM+jExHhV6y1w+GQnlxyHzOrKYqORspe6GPyPQKiqA8RNPZ0QEGyk/E6Xe7IWwkd0urj3PXVw+sam4fLLdJpkp6XQb7+1h31V/PsO34HewL7MnU4PJ6IYMa7lbqrwt1LxTZGAl+nHXJl9+ZnnE1J5PzCoXohd0IKimlOokI89XaYpOybgRKST+4umdeM380r9N2OrfdrpFy09gLXTX95LwKsKm5T1YSYSmMrx4owvVirX79l4UwKcJgtnKweJRNY+d9oS0jHGUanx92FG5ubT88+Jo8RifgI7wZV36frSyajkWiGoSqoQ5cFNpvr7Tt38dtO9C2/160bfu5bd+8atu3w/bbINr3g2jfFNGeFNEOQ0tnk+OX8TCi3S2CMjEseXxPLxCcHzE9dFqFKiHVT/cKf1zw47bzsMq0G6lbHEF50InRhqNRN5+OTXQvvmo6hR0fMn3bXfb0bTdP7FYohwX71dNTJDf3T60ejEeUhX+yU9ig4PYdli92+66L7w7h9qSr9fJr5z/OuLp7/jvW29Q80fsxob/Ew4v1l118rx8oS65mzDfMF9TJ9IHzE4SBri2b5Len89pjz9i5f2r0WeLTjOBxsfZ4+t0PqAr0uLqzatIoGMbLBj/T/B97C8THB6eTgRnWyQCvRyXXtx4v7y1RPrX3c+7aL9gZdDp5Rvy65hn50x5ffor//uT/A1U/XxRiZ2ygAAAAAElFTkSuQmCC'
			};
			this.water = {
				name: '水',
				attr: water,
				icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAADSElEQVQ4jWWUMUglVxSGP18mcAY2cC+kmCkC3mKLecXCmOq97rmQYrZTSKGdLxBYS+3cJQGzENhYbiqfXaxWq9VSq2i1Wul0O4EEZ6rMFOK7hXBSzLxoyIFzT3POuf/5/3Pv3GC0oknicHEMgFhDKAbEIiZGQsPqomVyVOB9ieCpqxxfl4DgvafIcxpfM2eigSKA98zMxI7GC2magok5erfK89UJ3heU+SVMS/Al4BERfOMRI3wmXz77UQi5vb/nnoAn9ivug4inTxN+/mETPv+C588sRSN8/+035EXJX3+W3N7eIoEQBAH3eILgCcEMj0gModAgCCE2SnAOXvUdAD+N+1yXEEqMWIeEIb4uaJoaIwaAnoQRhPOIjfAYkBgxjikxm3s1ZXdZCbyeFNRdTpsbYUyCtQ6w9MQ4MDENMUkyRMThXMp4dQGwbL6DKbD5yxSxEeury22xOFx/iFhHTUhoYwLvLYiwuDjg5VqfX/drag/DIWRDeHMAIeCSkKVhJ9D8gCRNWV9aYGfyG0V+CUzpIQYTJyRpnxd92Fi3NB0igO3lNm68gMTCmwk0WNZWEgbJlHRhCNZRNxBgHbFLKRuogSSGNGk3xQO248zSjgsQhZ6mOGHvvCK/MBgxFDXMJWs3+n7SLmz/EdkAMf+3s+trjg8POdzfpygKIudYXlrh+AyQ7ErTDdWVXdW/VfVGVbNd1aVd1Tv9r13d3Oh8tq2IUUCzEQooYtTMZ9oD8FOIIxDgooSibEf0tKMDFHXN6fEx1cUEfMPWBhwdwNYG4Bua6gxk9FEl+6SDLdX3n1RHb1XTLdXfVfWjqr78oHpzd6fZ1gdNRyMFdDRA9erBR4MWYYAHmHJ+VrBZRlQNOBeSX8PhZQuvLAouTvapzk+JDByMgfyBx4Mx9HMIPK1sIlAVFT4U8hx29kJcAttjaE4qpLkE4CgD+6jRTOmjDAIA6Rr++04tRBG8HbeKllHEME35I8/5er/N0dFDs7nTNvYEj/etQ9Oq4aGqIK/h1QmEzuHTMWmWPXTIH3lnPe/rbh1996c1MK0oCni9A6cnYMKQvBlQTJceKqtHPkOIJNouxWzG2SFAiBhI+3B5Db4poeNu9xFn33XxHyW5jC0YP0qWAAAAAElFTkSuQmCC'
			};
			this.light = {
				name: '光',
				attr: light,
				icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAC0ElEQVQ4jZWUL3AbRxSHP2sE3rE9dsu0cMVORXKRBW3msJbF0GGdopoprC1rmM1qo6aohrFQL6gSUg6ekVdItyi37AWcHFvJTDv9zb15c3c7374/+/bg9KhU7z3WOQBMbjCSkQm4HEzRko8vCMsLQjBEMppNSwgJEFJKNHVNTC0H5cgoX8jmQmES1gnlRHhx3nD12lGtIrGFZgNtCwkQEVJMiBEGJhNMJpASpITJhJEFt7PD8nsAZocv8E7wVjAkICFIv/vODdj9MLlgcmHic+gi1vQwW84AcLPvsCZhSLjCMDv0kCIpRgTIgGEuAv2DdzkXv/xGs3wDcYmQIJvtkp/gc7ClMDs9xPmXvGp/pG5aJBMSiaGzsgs5ISkQlr/iTm6BFppv92o5mVqYvAMs1fUJpIC3QoiJ3AjDQiJ5AYUVLECsgA7IwX3Y78zk8b2DsKR0wiaByYVIxsC5x2InnAdrBZrxlw3eVzXGZGAtiCToErQtw1kp5FbAn4M9Bv4DBAR3S9M2pO5PnGkwsiLGBPo/tV6vdT6fq/deRUS99zqfz3W9Xisffy9U3xWq259Vdf2voIeHB53P52qMUUCPj1BARdDTqVHW80K3l4XqH4XqX0b170J1678Cbbdbvby81NFopID+9AOq294DagQdbkLqD78Bk0FGgvyfvRp1XUdVVVxfX3N/f8/RFF6/BELvqwoW72HQRghBqBuoG8DNduc5QNc3o2kabm5uWCwWFAbengH1k709g8LAMCaQlIhA4S2Mz2F5AqHqmTPYbDasVisAbo8hr/e7m+++D/sZ7adgtQpw8QpSYOwFHMAdRVFQlgV1XfPNTQ/QoyfYwaL3g88jv2PWdSAhdG2CAHR3OOc4O7Ucl8/WPkvzUYMIny+UR3BsYROFNgLvr8iyjKlUTO2z3DbPbKfhm7u4F1wfYH+tIJBnAu4Emnua9mnNFV/rE+SynsuvfTbsAAAAAElFTkSuQmCC'
			};
			this.shadow = {
				name: '暗',
				attr: shadow,
				icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAC/0lEQVQ4jYXUMYhcVRQG4G83b+E8mMB9kIV5heArUmwKYVMImy5bpkwKCzu1s9ROi4CxSwohpoqpTLpNI6ZQzFZuCiHTZew23QwozAMX5hQDY/FmY7Tx3OKce7n359z//+/dunlwc911na7rCEoEdRhGo18sRdYSbTsmmC1O9TlHWuTCdDrV58zWftlfAymHQkQhKdFqYkxfKzGWmQR99hYxk2ZEb9bPRAlVKMOGvkeKKEI4j1n/Wp8z+jCOPVcdapPTLLK0Fk6FVOPCO7rbpKhGoqqsMq0yjapGU12yu7qsrS6bO/Vb/mCaJ7rqsv04ZEXf/6Ee7bBKF94bXb1d2yF2rM5SpTKKXU0prCqXRu9oc8/h6JblWfrdC5PVsYsZ3neoLo0qKqvqzHaJYrgnoRFCHSH7FAZ+Ui+y+HJ814Hr4KlHXjmx75qSrca7todDoYmiiaKOZiC/hGhC5sIyUkbStz6NT4WC9DTvkQtX4sC47mxHBIkkhBJFIPs0nw3y9zlz2k8tY+maQ3s6MDc3yadKNixq26FRFHID2p9bIyz73Fhl6DSlEpv9m3iez0hyThUZ6ijoRYS0GPiK0BqfW3BAxMwrc/M3YBMTJ/lYRGu7Vix7GkWdIbIZhMhGxFA3WtHXZHrSPzE1BTcGLTzJe1576cKN6oPbO6OLRqtdoXExdtVVY2dVcTaya9el1Z5W508/+WZ1z5kzX3zGd/dZrfj5Rfpr9YcqsuhzrsRYoxm4O39cQVGEVjpxlI/NzV0/4M5HmA355ITjF69VdTQKpjl16JY2uoGepAR1soxXvu6fOHZsXDj6mM1NMcyvTDcCdPacmnjqjhv5oYPc10UzAFn6Np955hn48QbNW0DQbNa3Hvp1XaIj0yOfe+mlTqvVbtSbmZrq9f8CWF//p9463uT7flkXY0WnNnfkrgce+L9Yj98C2zhl6yvfrwcbXtHqjDH33JEjE5M3NtizJ4RjQxvrt4C3zvO79tZQCza/61BR/6ebmZmJCXj41vonm/w3+HVDtk29DZkAAAAASUVORK5CYII='
			}
		}

		/**
		 * Creates a new additional of Unit
		 * @constructor
		 * @param {number} [CriticalUP=0.2] - 暴击伤害
		 * @param {number} [White=0.34] - 伤害附加（白字）
		 * @param {number} [Yellow=0.2] - 伤害增加（黄字）
		 * @param {number} [AtkUP=0.17] - 攻击力提升
		 * @param {number} [AllUP=0.35] - 所有攻击力增加
		 * @param {number} [SkillUP=0.38768] - 技能伤害增加
		 * @param {number} [Intellect=0.23] - 智力增加
		 * @param {number} [CriticalAdd=0] - 暴击伤害追加
		 * @param {number} [yellowAdd=0] - 黄字伤害追加
		 */
		function Additional(CriticalUP = 0.2, White = 0.34, Yellow = 0.2, AtkUP = 0.17, AllUP = 0.35, SkillUP = 0.38768,
		                    Intellect = 0.23, CriticalAdd = 0, yellowAdd = 0) {
			this.criticalEnhance = CriticalUP;
			this.criticalEnhanceUP = CriticalAdd;
			this.whiteEnhance = White;
			this.yellowEnhance = Yellow;
			this.yellowEnhanceUP = yellowAdd;
			this.AttackEnhance = AtkUP;
			this.allAttackEnhance = AllUP;
			this.skillEnhanchedDamage = SkillUP;
			this.intellectEnhance = Intellect;
		}

		/**
		 * Creates a new Monster
		 * @constructor
		 * @param {number} level - 等级
		 * @param {number} defense - 防御力
		 * @param {number} fire - 火属性抗性
		 * @param {number} water - 冰属性抗性
		 * @param {number} light - 光属性抗性
		 * @param {number} shadow - 暗属性抗性
		 * @param {number=} [neglect=0.8] - 副本无视减伤率
		 */
		function Monster(level, defense, fire, water, light, shadow, neglect = 0.8) {
			this.level = level;
			this.defense = defense;
			this.ratio = this.getDecrement();
			this.ignoreRatio = neglect;
			this.resist = new Resist(fire, water, light, shadow);
		}

		/**
		 * Creates a new Unit
		 * @constructor
		 * @param {number=} [lv=90] - 等级
		 * @param {Object} [attack={
	 * 		              basis: 1214,
	 * 		              rests: 1198,
	 * 		              ignore: 0
	 * 	              }] - basis：基础攻击 rests：其他攻击 ignore:无视防御攻击
		 * @param {number=} [Intellect=3610] - 智力
		 * @param {number=} [Critical=0.955] - 暴击率
		 * @param {number=} [element=192] - 属性强化
		 * @param {function=} [additional=new Additional()] - 人物的附加伤害属性
		 */
		function Unit(lv = 90, attack = {
			              basis: 1214,
			              rests: 1198,
			              ignore: 0
		              }, Intellect = 3610, Critical = 0.955, element = 192,
		              additional = new Additional()) {
			this.level = lv;
			this.intellect = Intellect;
			this.attack = attack;
			this.critical = Critical;
			this.elementIntensify = element;
			this.DMG = additional
		}

		/**
		 * Creates a new Item.
		 * @constructor
		 * @param {number} ATK - 基本攻击
		 * @param {number} ignoreATK - 无视防御攻击
		 * @param {number} intellect - 智力值
		 * @param {number} critical - 暴击率 (%)
		 * @param {number} elementIntensify - 属性强化
		 * @param {number} criticalEnhance - 暴击伤害增加 (%)
		 * @param {number} criticalEnhanceUP - 暴击伤害追加 (%)
		 * @param {number} whiteEnhance - 白字附加 (%)
		 * @param {number} yellowEnhance - 伤害增加（黄字）
		 * @param {number} intellectEnhance - 智力提升 (%)
		 * @param {number} AttackEnhance - 攻击力提升 (%)
		 * @param {number} allAttackEnhance - 所有攻击力提升 (%)
		 * @param {number} skillEnhanceDamage - 技能伤害增加 (%)
		 * @param {number} yellowEnhanceUP - 黄字伤害追加 (%)
		 */
		function Item(ATK, ignoreATK, intellect, critical, elementIntensify, criticalEnhance, criticalEnhanceUP, whiteEnhance, yellowEnhance, intellectEnhance, AttackEnhance, allAttackEnhance, skillEnhanceDamage, yellowEnhanceUP) {
			this.attack = ATK;
			this.ignoreAtk = ignoreATK;
			this.attackEnhance = AttackEnhance;
			this.intellect = intellect;
			this.intellectEnhance = intellectEnhance;
			this.critical = critical;
			this.elementIntensify = elementIntensify;
			this.criticalEnhance = criticalEnhance;
			this.criticalEnhanceUP = criticalEnhanceUP;
			this.whiteEnhance = whiteEnhance;
			this.yellowEnhance = yellowEnhance;
			this.yellowEnhanceUP = yellowEnhanceUP;
			this.allAttackEnhance = allAttackEnhance;
			this.skillEnhanchedDamage = skillEnhanceDamage;
		}

		$scope.medicine = false;
		/**
		 * 是否使用斗神之吼
		 *
		 * @param {boolean} [hasMedicine=$scope.medicine] - False's none  True's use. default's False
		 * @returns number
		 *
		 */
		function hasMedicine(hasMedicine = $scope.medicine) {
			if (hasMedicine) {
				return 0.12
			} else {
				return 0
			}
		}

		/**
		 * 属性强化提升计算
		 * @param {number} elementIntensify - 属性强化
		 * @param {object} resist - 怪物抗性
		 * @returns {number} 1 + (属性强化 - 怪物抗性) / 2000 * 9
		 */
		function elementIntensify(elementIntensify,resist) {return 1 + (elementIntensify - resist ) / 2000 * 9}


		Monster.prototype = {
			/**
			 * 获取怪物减伤率
			 *
			 * @param {number} lv : 攻击方等级
			 * @param {string} [surroundings=$scope.surroundings]
			 * @returns number
			 */
			getDecrement: function (lv, surroundings = $scope.surroundings) {
				let decrement,
						defense = this.defense;
				// 1 - (怪物防御 / (玩家等级 * 200 + 怪物防御))
				decrement = (defense / (lv * 200 + defense));
				switch (surroundings) {
					case 'luckRaid' :
						if (decrement <= 0.9104) {
							return 0.9104;
						} else {
							return decrement
						}
					case 'luke' :
						if (decrement <= 0.8904) {
							return 0.8904;
						} else {
							return decrement
						}
					case 'antonRaid' :
						if (decrement <= 0.8112) {
							return 0.8112;
						} else {
							return decrement
						}
				}

				return decrement
			}
		};

		THEMONSTERS.initial = new Monster(100, 194533.2, -31, -31, -11, -11);
		units.defaultPlayer = new Unit();
		/**
		 * 幽魂魅影
		 * @type {Item}
		 */
		item.phantom =  new Item(150, 0, 758, 0.045, 195, 0, 0, 0.27, 0, 0, 0, 0, 0, 0);

		/**
		 * @name 计算对怪物的伤害
		 *
		 * @param {number} unit
		 * @param {number} monster
		 * @returns {number} 对怪物造成的伤害
		 */
		function result(unit, monster) {
			return (
					(
							//智力*（1 + 智力提升百分） / 250 + 1
							(unit.intellect * (1 + unit.DMG.intellectEnhance) / 250 + 1)
							*
							//基本攻击 + 其他攻击
							(unit.attack.basis + unit.attack.rests)
							*
							//    1 + 攻击力提升百分比
							(1 + unit.DMG.AttackEnhance)
							*
							elementIntensify(unit.elementIntensify,monster.resist.shadow.attr)
							*
							//		怪物减伤率 + 无视防御攻击 * 无视减伤
							(1 - monster.getDecrement(unit.level)) + unit.attack.ignore * monster.ignoreRatio
					)
					*
					//		1 + (暴击伤害 * （1 + 暴击伤害增加 + 暴击伤害追加）- 1 ) * 人物暴击率
					(1 + (1.5 * (1 + unit.DMG.criticalEnhance + unit.DMG.criticalEnhanceUP) - 1) * unit.critical)
					*
					//		(1 + 白字附加)
					(1 + unit.DMG.whiteEnhance)
					*
					//		(1 + 黄字伤害 + 黄字伤害追加)
					(1 + unit.DMG.yellowEnhance + unit.DMG.yellowEnhanceUP + hasMedicine())
					*
					//		(1 + 全部攻击力增加)
					(1 + unit.DMG.allAttackEnhance)
					*
					//		(1 + 技能攻击增加)
					(1 + unit.DMG.skillEnhanchedDamage)
			)
		}

		$scope.$watch('damage', (newDamage, oldDamege) => {
			if (newDamage > oldDamege) {
				let num = (newDamage - oldDamege) / oldDamege;
				num = $filter('percentage')(num);
				console.info(num);
				$scope.tisp = `伤害相对于之前提升${num}`
			}
			else {
				let num = (newDamage - oldDamege) / oldDamege;
				num = $filter('percentage')(num);
				console.info(num);
				$scope.tisp = `伤害相对于之前提升${num}`
			}
		});

		$scope.initial = THEMONSTERS.initial;
		$scope.player = units.defaultPlayer;
		$scope.dmgAttr = units.defaultPlayer.DMG;
		$scope.result = result;
		$scope.damage = result($scope.player, $scope.initial)
	}]);

(() => {
	document.body.onselectstart = function () {
		return false;
	};
	document.oncut = function () {
		return false;
	};
	document.oncopy = function () {
		return false;
	};
	document.body.oncopy = function () {
		return false;
	};
	document.oncut = function () {
		return false;
	};
	document.body.oncut = function () {
		return false;
	};
})();
console.log("The year's at the spring");
console.log("And day's at the morn");
console.log("Morning's at seven");