const app = angular
		.module('app', ['ui.router','percentage']);


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
						controller: function($state){
							$state.go('items.weapon.dirk');//默认显示第一个tab
						}
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
						controller: function($state){
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
						controller: function($state){
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
						controller: function($state){
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
						controller: function($state){
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
			});

});
app.controller('main', ['$scope', function ($scope) {

}]);

/*
 * @Count Items
 * Enhanched Damage
 * */
app.controller('count', ['$scope','$filter',function ($scope, $filter) {
	let THEMONSTERS = {};
	let units = {};
	const ITEMS = [];

	//Resist
	function Resist(fire, water, light, shadow) {
		this.fire = fire;
		this.water = water;
		this.light = light;
		this.shadow = shadow
	}

	//玩家附加伤害
	function Additional(CriticalUP = 0.2, White = 0.34, Yellow = 0.2, AtkUP = 0.17, AllUP = 0.35, SkillUP = 0.38768,
	                    Intellect = 0.23, CriticalAdd = 0, whiteAdd = 0, yellowAdd = 0) {
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

	//怪物属性
	function Monster(level, defense, fire, water, light, shadow, neglect = 0.8 ,MType) {
		this.level = level;
		this.myType = MType;
		this.defense = defense;
		this.ratio = this.getDecrement();
		this.ignoreRatio = neglect;
		this.resist = new Resist(fire, water, light, shadow);
	}

	//定义人物
	function Unit(lv = 90, attack = {basis: 1214, rests: 1198, ignore: 0}, Intellect = 3610, Critical = 0.955, element = 192,
	              additional = new Additional()) {
		this.level = lv;
		this.intellect = Intellect;
		this.attack = attack;
		this.critical = Critical;
		this.elementIntensify = element;
		this.DMG = additional
	}

	function Item(ATK, ignoreATK) {

	}

	//True 斗神之吼
	$scope.medicine = false;
	function isMedicine() {
		if ($scope.medicine) {
			return 0.12
		}else {
			return 0
		}
	}

	/*
	 * decrement 减伤率计算结果
	 * */
	Monster.prototype.getDecrement = function (lv) {
		let decrement,
				defense = this.defense;
		// 1 - (怪物防御 / (玩家等级 * 200 + 怪物防御))
		decrement = 1 - (defense / (lv * 200 + defense));
		return decrement;
	};


	THEMONSTERS.initial = new Monster(100, 194533.2, -31, -31, -11, -11);
	units.defaultPlayer = new Unit();

	function countHarm(unit, monster) {
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
						//		1 + 属性强化 / 2000 * 9
						(1 + (unit.elementIntensify - monster.resist.shadow ) / 2000 * 9)
						*
						//		怪物减伤率 + 无视防御攻击 * 无视减伤
						monster.getDecrement(unit.level) + unit.attack.ignore * monster.ignoreRatio
				)
				*
				//		1 + (暴击伤害 * （1 + 暴击伤害增加 + 暴击伤害追加）- 1 ) * 人物暴击率
				(1 + (1.5 * (1 + unit.DMG.criticalEnhance + unit.DMG.criticalEnhanceUP) - 1) * unit.critical)
				*
				//		(1 + 白字附加)
				(1 + unit.DMG.whiteEnhance)
				*
				//		(1 + 黄字伤害 + 黄字伤害追加)
				(1 + unit.DMG.yellowEnhance + unit.DMG.yellowEnhanceUP + isMedicine())
				*
				//		(1 + 全部攻击力增加)
				(1 + unit.DMG.allAttackEnhance)
				*
				//		(1 + 技能攻击增加)
				(1 + unit.DMG.skillEnhanchedDamage)
		)
	}

	$scope.$watch('damage',(newDamage,oldDamege) => {
		if (newDamage > oldDamege) {
			let num = (newDamage - oldDamege) / oldDamege;
			num = $filter('percentage')(num)
			console.info(num)
			$scope.tisp = `伤害相对于之前提升${num}`
		}
		else
		{
			let num = (newDamage - oldDamege) / oldDamege;
			num = $filter('percentage')(num)
			console.info(num)
			$scope.tisp = `伤害相对于之前提升${num}`
		}
	})

	$scope.initial = THEMONSTERS.initial;
	$scope.player = units.defaultPlayer;
	$scope.dmgAttr = units.defaultPlayer.DMG;
	$scope.countHarm = countHarm;
	$scope.damage = countHarm($scope.player, $scope.initial)
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