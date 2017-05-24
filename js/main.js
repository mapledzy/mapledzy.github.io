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
						template: '����'
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
						template: 'ְҵ���'
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
						template: 'ʱװ����ħ������'
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
						template: '�ƺ�'
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
						template: '����'
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
						template: '����ƪ&nbsp;-&nbsp;<small>�ӵ�ģ��</small>'
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
						template: '����ƪ&nbsp;-&nbsp;<small>װ���Ƽ�</small>'
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
						template: '����ƪ&nbsp;-&nbsp;<small>Buff����</small>'
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
						template: '������&nbsp;-&nbsp;<small>����ƪ</small>'
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
						template: '������&nbsp;-&nbsp;<small>����ƪ</small>'
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
						template: '������&nbsp;-&nbsp;<small>����ƪ</small>'
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
						template: '������&nbsp;-&nbsp;<small>����ƪ</small>'
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
						template: '������&nbsp;-&nbsp;<small>����ƪ</small>'
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
						template: '������&nbsp;-&nbsp;<small>����ƪ</small>'
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
						template: '������&nbsp;-&nbsp;<small>����ƪ</small>'
					}
				}
			});
	//������߷���
	$stateProvider
			.state('items', {
				url: '/items'
			});
	//���� - ����
	$stateProvider
			.state('items.weapon', {
				url: '/weapon',
				views: {
					'container@': {
						templateUrl: 'html/items/weapon/weapon_index.html',
						controller: function ($state) {
							$state.go('items.weapon.dirk');//Ĭ����ʾ��һ��tab
						},
					},
					'title@': {
						template: 'װ��ƪ&nbsp;-&nbsp;<small>����</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>criterion</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>�̽�</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>̫��</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>�޽�</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>����</small>'
					}
				}
			});
	//���� - ����
	$stateProvider
			.state('items.armors', {
				url: '/armors',
				views: {
					'container@': {
						templateUrl: 'html/items/armors/armors_index.html',
						controller: function ($state) {
							$state.go('items.armors.lv80');//Ĭ����ʾ��һ��tab
						}
					},
					'title@': {
						template: 'װ��ƪ&nbsp;-&nbsp;<small>����</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>criterion</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>80����װ</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>85����װ</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>90����װ��A�ࣩ</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>90����װ��B�ࣩ</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>ɢ��</small>'
					}
				}
			});
	//���� - ����
	$stateProvider
			.state('items.ring', {
				url: '/ring',
				views: {
					'container@': {
						templateUrl: 'html/items/ring/ring_index.html',
						controller: function ($state) {
							$state.go('items.ring.suit');//Ĭ����ʾ��һ��tab
						}
					},
					'title@': {
						template: 'װ��ƪ&nbsp;-&nbsp;<small>����</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>criterion</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>����</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>����</small>'
					}
				}
			})
			.state('items.auxiliary', {
				url: '/auxiliary',
				views: {
					'container@': {
						templateUrl: 'html/items/auxiliary/auxiliary_index.html',
						controller: function ($state) {
							$state.go('items.auxiliary.suit');//Ĭ����ʾ��һ��tab
						}
					},
					'title@': {
						template: 'װ��ƪ&nbsp;-&nbsp;<small>����װ��</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>����װ��</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>����װ��</small>'
					}
				}
			})
			.state('items.degenerator', {
				url: '/degenerator',
				views: {
					'container@': {
						templateUrl: 'html/degenerator/degenerator-index.html',
						controller: function ($state) {
							$state.go('items.degenerator.2&3');//Ĭ����ʾ��һ��tab
						}

					},
					'title@': {
						template: 'װ��ƪ&nbsp;-&nbsp;<small>����</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>���װ��</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>���װ��</small>'
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
						template: 'װ��ƪ&nbsp;-&nbsp;<small>���װ��</small>'
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
						template: 'װ�������ʼ�����'
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
		return arr.join(" ");��������//���ı�������arr�Կո�ƴ��Ϊ�ַ�������Ϊ����ֵ
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
		 * @description Creates a new resist of Monster
		 * @constructor
		 * @param {number} fire
		 * @param {number} water
		 * @param {number} light
		 * @param {number} shadow
		 */
		function Resist(fire, water, light, shadow) {
			this.fire = {
				name: '��',
				attr: fire,
				icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAC+klEQVQ4jWXUIXAbSRAF0GeXQYutmJZloczkQzazoMJsFrPkUAwddmansMCYxYfOQXFYDGUmM4udoOCKadGp2R5Yn52q/Kqunumanuk/83t23hyO2qqqVMNKFWHQKyyRoKfZbGylzDQsB06HpW3dWK1qD0KdablcanJj57CIVlBF+Dyu9M9G5pczl8u1JgqCTZOqCAeZPp0Pmb7j5s7th5m7CLMmKcJuRAhh0g/9kyHjA0dfTl2PK4UkqYpwEOnTlwk3KzYrzsZOJ5XrSWWsw65M/Uzjqs/rI2zYH6j+PDYOQuqh6hWUwfyMfoGCdyM+jExHhV6y1w+GQnlxyHzOrKYqORspe6GPyPQKiqA8RNPZ0QEGyk/E6Xe7IWwkd0urj3PXVw+sam4fLLdJpkp6XQb7+1h31V/PsO34HewL7MnU4PJ6IYMa7lbqrwt1LxTZGAl+nHXJl9+ZnnE1J5PzCoXohd0IKimlOokI89XaYpOybgRKST+4umdeM380r9N2OrfdrpFy09gLXTX95LwKsKm5T1YSYSmMrx4owvVirX79l4UwKcJgtnKweJRNY+d9oS0jHGUanx92FG5ubT88+Jo8RifgI7wZV36frSyajkWiGoSqoQ5cFNpvr7Tt38dtO9C2/160bfu5bd+8atu3w/bbINr3g2jfFNGeFNEOQ0tnk+OX8TCi3S2CMjEseXxPLxCcHzE9dFqFKiHVT/cKf1zw47bzsMq0G6lbHEF50InRhqNRN5+OTXQvvmo6hR0fMn3bXfb0bTdP7FYohwX71dNTJDf3T60ejEeUhX+yU9ig4PYdli92+66L7w7h9qSr9fJr5z/OuLp7/jvW29Q80fsxob/Ew4v1l118rx8oS65mzDfMF9TJ9IHzE4SBri2b5Len89pjz9i5f2r0WeLTjOBxsfZ4+t0PqAr0uLqzatIoGMbLBj/T/B97C8THB6eTgRnWyQCvRyXXtx4v7y1RPrX3c+7aL9gZdDp5Rvy65hn50x5ffor//uT/A1U/XxRiZ2ygAAAAAElFTkSuQmCC'
			};
			this.water = {
				name: 'ˮ',
				attr: water,
				icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAADSElEQVQ4jWWUMUglVxSGP18mcAY2cC+kmCkC3mKLecXCmOq97rmQYrZTSKGdLxBYS+3cJQGzENhYbiqfXaxWq9VSq2i1Wul0O4EEZ6rMFOK7hXBSzLxoyIFzT3POuf/5/3Pv3GC0oknicHEMgFhDKAbEIiZGQsPqomVyVOB9ieCpqxxfl4DgvafIcxpfM2eigSKA98zMxI7GC2magok5erfK89UJ3heU+SVMS/Al4BERfOMRI3wmXz77UQi5vb/nnoAn9ivug4inTxN+/mETPv+C588sRSN8/+035EXJX3+W3N7eIoEQBAH3eILgCcEMj0gModAgCCE2SnAOXvUdAD+N+1yXEEqMWIeEIb4uaJoaIwaAnoQRhPOIjfAYkBgxjikxm3s1ZXdZCbyeFNRdTpsbYUyCtQ6w9MQ4MDENMUkyRMThXMp4dQGwbL6DKbD5yxSxEeury22xOFx/iFhHTUhoYwLvLYiwuDjg5VqfX/drag/DIWRDeHMAIeCSkKVhJ9D8gCRNWV9aYGfyG0V+CUzpIQYTJyRpnxd92Fi3NB0igO3lNm68gMTCmwk0WNZWEgbJlHRhCNZRNxBgHbFLKRuogSSGNGk3xQO248zSjgsQhZ6mOGHvvCK/MBgxFDXMJWs3+n7SLmz/EdkAMf+3s+trjg8POdzfpygKIudYXlrh+AyQ7ErTDdWVXdW/VfVGVbNd1aVd1Tv9r13d3Oh8tq2IUUCzEQooYtTMZ9oD8FOIIxDgooSibEf0tKMDFHXN6fEx1cUEfMPWBhwdwNYG4Bua6gxk9FEl+6SDLdX3n1RHb1XTLdXfVfWjqr78oHpzd6fZ1gdNRyMFdDRA9erBR4MWYYAHmHJ+VrBZRlQNOBeSX8PhZQuvLAouTvapzk+JDByMgfyBx4Mx9HMIPK1sIlAVFT4U8hx29kJcAttjaE4qpLkE4CgD+6jRTOmjDAIA6Rr++04tRBG8HbeKllHEME35I8/5er/N0dFDs7nTNvYEj/etQ9Oq4aGqIK/h1QmEzuHTMWmWPXTIH3lnPe/rbh1996c1MK0oCni9A6cnYMKQvBlQTJceKqtHPkOIJNouxWzG2SFAiBhI+3B5Db4poeNu9xFn33XxHyW5jC0YP0qWAAAAAElFTkSuQmCC'
			};
			this.light = {
				name: '��',
				attr: light,
				icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAC0ElEQVQ4jZWUL3AbRxSHP2sE3rE9dsu0cMVORXKRBW3msJbF0GGdopoprC1rmM1qo6aohrFQL6gSUg6ekVdItyi37AWcHFvJTDv9zb15c3c7374/+/bg9KhU7z3WOQBMbjCSkQm4HEzRko8vCMsLQjBEMppNSwgJEFJKNHVNTC0H5cgoX8jmQmES1gnlRHhx3nD12lGtIrGFZgNtCwkQEVJMiBEGJhNMJpASpITJhJEFt7PD8nsAZocv8E7wVjAkICFIv/vODdj9MLlgcmHic+gi1vQwW84AcLPvsCZhSLjCMDv0kCIpRgTIgGEuAv2DdzkXv/xGs3wDcYmQIJvtkp/gc7ClMDs9xPmXvGp/pG5aJBMSiaGzsgs5ISkQlr/iTm6BFppv92o5mVqYvAMs1fUJpIC3QoiJ3AjDQiJ5AYUVLECsgA7IwX3Y78zk8b2DsKR0wiaByYVIxsC5x2InnAdrBZrxlw3eVzXGZGAtiCToErQtw1kp5FbAn4M9Bv4DBAR3S9M2pO5PnGkwsiLGBPo/tV6vdT6fq/deRUS99zqfz3W9Xisffy9U3xWq259Vdf2voIeHB53P52qMUUCPj1BARdDTqVHW80K3l4XqH4XqX0b170J1678Cbbdbvby81NFopID+9AOq294DagQdbkLqD78Bk0FGgvyfvRp1XUdVVVxfX3N/f8/RFF6/BELvqwoW72HQRghBqBuoG8DNduc5QNc3o2kabm5uWCwWFAbengH1k709g8LAMCaQlIhA4S2Mz2F5AqHqmTPYbDasVisAbo8hr/e7m+++D/sZ7adgtQpw8QpSYOwFHMAdRVFQlgV1XfPNTQ/QoyfYwaL3g88jv2PWdSAhdG2CAHR3OOc4O7Ucl8/WPkvzUYMIny+UR3BsYROFNgLvr8iyjKlUTO2z3DbPbKfhm7u4F1wfYH+tIJBnAu4Emnua9mnNFV/rE+SynsuvfTbsAAAAAElFTkSuQmCC'
			};
			this.shadow = {
				name: '��',
				attr: shadow,
				icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAC/0lEQVQ4jYXUMYhcVRQG4G83b+E8mMB9kIV5heArUmwKYVMImy5bpkwKCzu1s9ROi4CxSwohpoqpTLpNI6ZQzFZuCiHTZew23QwozAMX5hQDY/FmY7Tx3OKce7n359z//+/dunlwc911na7rCEoEdRhGo18sRdYSbTsmmC1O9TlHWuTCdDrV58zWftlfAymHQkQhKdFqYkxfKzGWmQR99hYxk2ZEb9bPRAlVKMOGvkeKKEI4j1n/Wp8z+jCOPVcdapPTLLK0Fk6FVOPCO7rbpKhGoqqsMq0yjapGU12yu7qsrS6bO/Vb/mCaJ7rqsv04ZEXf/6Ee7bBKF94bXb1d2yF2rM5SpTKKXU0prCqXRu9oc8/h6JblWfrdC5PVsYsZ3neoLo0qKqvqzHaJYrgnoRFCHSH7FAZ+Ui+y+HJ814Hr4KlHXjmx75qSrca7todDoYmiiaKOZiC/hGhC5sIyUkbStz6NT4WC9DTvkQtX4sC47mxHBIkkhBJFIPs0nw3y9zlz2k8tY+maQ3s6MDc3yadKNixq26FRFHID2p9bIyz73Fhl6DSlEpv9m3iez0hyThUZ6ijoRYS0GPiK0BqfW3BAxMwrc/M3YBMTJ/lYRGu7Vix7GkWdIbIZhMhGxFA3WtHXZHrSPzE1BTcGLTzJe1576cKN6oPbO6OLRqtdoXExdtVVY2dVcTaya9el1Z5W508/+WZ1z5kzX3zGd/dZrfj5Rfpr9YcqsuhzrsRYoxm4O39cQVGEVjpxlI/NzV0/4M5HmA355ITjF69VdTQKpjl16JY2uoGepAR1soxXvu6fOHZsXDj6mM1NMcyvTDcCdPacmnjqjhv5oYPc10UzAFn6Np955hn48QbNW0DQbNa3Hvp1XaIj0yOfe+mlTqvVbtSbmZrq9f8CWF//p9463uT7flkXY0WnNnfkrgce+L9Yj98C2zhl6yvfrwcbXtHqjDH33JEjE5M3NtizJ4RjQxvrt4C3zvO79tZQCza/61BR/6ebmZmJCXj41vonm/w3+HVDtk29DZkAAAAASUVORK5CYII='
			}
		}

		/**
		 * @description Creates a new additional of Unit
		 * @constructor
		 * @param {number} [CriticalUP=0.2] - �����˺�
		 * @param {number} [White=0.34] - �˺����ӣ����֣�
		 * @param {number} [Yellow=0.2] - �˺����ӣ����֣�
		 * @param {number} [AtkUP=0.17] - ����������
		 * @param {number} [AllUP=0.35] - ���й���������
		 * @param {number} [SkillUP=0.38768] - �����˺�����
		 * @param {number} [Intellect=0.23] - ��������
		 * @param {number} [CriticalAdd=0] - �����˺�׷��
		 * @param {number} [yellowAdd=0] - �����˺�׷��
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
		 * @description Creates a new Monster
		 * @constructor
		 * @param {number} level - �ȼ�
		 * @param {number} defense - ������
		 * @param {number} fire - �����Կ���
		 * @param {number} water - �����Կ���
		 * @param {number} light - �����Կ���
		 * @param {number} shadow - �����Կ���
		 * @param {number=} [neglect=0.8] - �������Ӽ�����
		 */
		function Monster(level, defense, fire, water, light, shadow, neglect = 0.8) {
			this.level = level;
			this.defense = defense;
			this.ratio = this.getDecrement();
			this.ignoreRatio = neglect;
			this.resist = new Resist(fire, water, light, shadow);
		}

		/**
		 * @description Creates a new Unit
		 * @constructor
		 * @param {number=} [lv=90] - �ȼ�
		 * @param {Object} [attack={
	 * 		              basis: 1214,
	 * 		              rests: 1198,
	 * 		              ignore: 0
	 * 	              }] - basis���������� rests���������� ignore:���ӷ�������
		 * @param {number=} [Intellect=3610] - ����
		 * @param {number=} [Critical=0.955] - ������
		 * @param {number=} [element=192] - ����ǿ��
		 * @param {function=} [additional=new Additional()] - ����ĸ����˺�����
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
		 * @description Creates a new Item.
		 * @constructor
		 * @param {number} ATK - ��������
		 * @param {number} ignoreATK - ���ӷ�������
		 * @param {number} intellect - ����ֵ
		 * @param {number} critical - ������ (%)
		 * @param {number} elementIntensify - ����ǿ��
		 * @param {number} criticalEnhance - �����˺����� (%)
		 * @param {number} criticalEnhanceUP - �����˺�׷�� (%)
		 * @param {number} whiteEnhance - ���ָ��� (%)
		 * @param {number} yellowEnhance - �˺����ӣ����֣�
		 * @param {number} intellectEnhance - �������� (%)
		 * @param {number} AttackEnhance - ���������� (%)
		 * @param {number} allAttackEnhance - ���й��������� (%)
		 * @param {number} skillEnhanceDamage - �����˺����� (%)
		 * @param {number} yellowEnhanceUP - �����˺�׷�� (%)
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
		 * @description �Ƿ�ʹ�ö���֮��
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
		 * @description ����ǿ����������
		 * @param {number} elementIntensify - ����ǿ��
		 * @param {object} resist - ���￹��
		 * @returns {number} 1 + (����ǿ�� - ���￹��) / 2000 * 9
		 */
		function elementIntensify(elementIntensify,resist) {return 1 + (elementIntensify - resist ) / 2000 * 9}


		Monster.prototype = {
			/**
			 * @description ��ȡ���������
			 *
			 * @param {number} lv : �������ȼ�
			 * @param {string} [surroundings=$scope.surroundings]
			 * @returns number
			 */
			getDecrement: function (lv, surroundings = $scope.surroundings) {
				let decrement,
						defense = this.defense;
				// 1 - (������� / (��ҵȼ� * 200 + �������))
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
		 * �Ļ���Ӱ
		 * @type {Item}
		 */
		item.phantom =  new Item(150, 0, 758, 0.045, 195, 0, 0, 0.27, 0, 0, 0, 0, 0, 0);

		/**
		 * @description ����Թ�����˺�
		 *
		 * @param {number} unit
		 * @param {number} monster
		 * @returns {number} �Թ�����ɵ��˺�
		 */
		function result(unit, monster) {
			return (
					(
							//����*��1 + ���������ٷ֣� / 250 + 1
							(unit.intellect * (1 + unit.DMG.intellectEnhance) / 250 + 1)
							*
							//�������� + ��������
							(unit.attack.basis + unit.attack.rests)
							*
							//    1 + �����������ٷֱ�
							(1 + unit.DMG.AttackEnhance)
							*
							elementIntensify(unit.elementIntensify,monster.resist.shadow.attr)
							*
							//		��������� + ���ӷ������� * ���Ӽ���
							(1 - monster.getDecrement(unit.level)) + unit.attack.ignore * monster.ignoreRatio
					)
					*
					//		1 + (�����˺� * ��1 + �����˺����� + �����˺�׷�ӣ�- 1 ) * ���ﱩ����
					(1 + (1.5 * (1 + unit.DMG.criticalEnhance + unit.DMG.criticalEnhanceUP) - 1) * unit.critical)
					*
					//		(1 + ���ָ���)
					(1 + unit.DMG.whiteEnhance)
					*
					//		(1 + �����˺� + �����˺�׷��)
					(1 + unit.DMG.yellowEnhance + unit.DMG.yellowEnhanceUP + hasMedicine())
					*
					//		(1 + ȫ������������)
					(1 + unit.DMG.allAttackEnhance)
					*
					//		(1 + ���ܹ�������)
					(1 + unit.DMG.skillEnhanchedDamage)
			)
		}

		$scope.$watch('damage', (newDamage, oldDamege) => {
			if (newDamage > oldDamege) {
				let num = (newDamage - oldDamege) / oldDamege;
				num = $filter('percentage')(num);
				console.info(num);
				$scope.tisp = `�˺������֮ǰ����${num}`
			}
			else {
				let num = (newDamage - oldDamege) / oldDamege;
				num = $filter('percentage')(num);
				console.info(num);
				$scope.tisp = `�˺������֮ǰ����${num}`
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