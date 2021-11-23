//https://y9x.github.io/userscripts/serve/skidfest.user.js

class Main {
	constructor() {
		this.hash = this.genHash(0x8), window[this.hash] = this, this.settings = null, this.tabs = ['Render', 'Weapon', 'Player', 'GamePlay', 'Radio'], this.dev = {
			'banner': '34H23Io',
			'button': '1tWAEJx',
			'name': 'Sk1D',
			'link': 'skidlamer.github.io'
		}, this.downKeys = new Set();
		try {
			this.onLoad();
		}
		catch (_0x448d8d) {
			console.error(_0x448d8d), console.trace(_0x448d8d.stack);
		}
	} ['onLoad']() {
		this.defines(), this.listeners();
	} ['onInput'](_0x2b73f0) {
		this.me.yDirChase = 0x3e8;
		const _0xb53763 = {
			'frame': 0x0,
			'delta': 0x1,
			'xdir': 0x2,
			'ydir': 0x3,
			'moveDir': 0x4,
			'shoot': 0x5,
			'scope': 0x6,
			'jump': 0x7,
			'reload': 0x8,
			'crouch': 0x9,
			'weaponScroll': 0xa,
			'weaponSwap': 0xb,
			'moveLock': 0xc
		};
		this.frame = _0x2b73f0[_0xb53763.frame];
		let _0x5b9718 = this.isDefined(this.me.weapon.melee) && this.me.weapon.melee || this.isDefined(this.me.weapon.canThrow) && this.me.weapon.canThrow,
			_0x2471e1 = this.me.ammos[this.me.weaponIndex];
		this.controls.target = null;
		this.settings.autoReload.val && (!_0x5b9718 && !_0x2471e1 && (this.game.players.reload(this.me), _0x2b73f0[_0xb53763.reload] = 0x1, this.me.reloadTimer *= 0.5));
		this.settings.autoBhop.val !== 'off' && ((this.downKeys.has('Space') || this.settings.autoBhop.val == 'autoJump^ || this.settings.autoBhop.val == 'autoSlide') && (this.controls.keys[this.controls.binds.jump.val] ^= 0x1, this.controls.keys[this.controls.binds.jump.val] && (this.controls.didPressed[this.controls.binds.jump.val] = 0x1), (this.downKeys.has('Space') || this.settings.autoBhop.val == 'autoSlide') && (this.me.velocity.y < -0.03 && this.me.canSlide && (setTimeout(() => {
			this.controls.keys[this.controls.binds.crouch.val] = 0x0;
		}, this.me.slideTimer || 0x145), this.controls.keys[this.controls.binds.crouch.val] = 0x1, this.controls.didPressed[this.controls.binds.crouch.val] = 0x1))));
		if (this.settings.autoAim.val !== 'off') {
			this.controls.target = null, this.raycaster.ray.setFromCamera(this.raycaster.mid, this.renderer.camera);
			let _0x3edcfb = null,
				_0x49e3ee = this.game.players.list.filter(_0x2ef6ab => {
					return _0x2ef6ab.pos = {
						'x': _0x2ef6ab.x,
						'y': _0x2ef6ab.y,
						'z': _0x2ef6ab.z
					}, _0x2ef6ab.isTarget = false, this.isDefined(_0x2ef6ab.objInstances) && !_0x2ef6ab.isYou && (this.me.team === null || _0x2ef6ab.team !== this.me.team) && _0x2ef6ab.hasOwnProperty('pos') && _0x2ef6ab.health > 0x0 && _0x2ef6ab.inView;
				})['sort']((_0x161d48, _0x15aeff) => this.getD3D(this.me.x, this.me.z, _0x161d48.pos.x, _0x161d48.pos.z) - this.getD3D(this.me.x, this.me.z, _0x15aeff.pos.x, _0x15aeff.pos.z));
			if (this.settings && this.settings.fovBoxSize.val !== 'off') {
				let _0x1eae3f = this.ctx.canvas.width / this.scale,
					_0x45dc33 = this.ctx.canvas.height / this.scale;
				for (let _0x373f1e = 0x0; _0x373f1e < _0x49e3ee.length; _0x373f1e++) {
					const _0x1207ff = _0x49e3ee[_0x373f1e],
						_0x314d1c = this.world2Screen(new this.three.Vector3(_0x1207ff.x, _0x1207ff.y, _0x1207ff.z), _0x1eae3f, _0x45dc33, _0x1207ff.height / 0x2);
					let _0x6e6a46 = null;
					switch (this.settings.fovBoxSize.val) {
						case 'large':
							_0x6e6a46 = [_0x1eae3f / 0x3, _0x45dc33 / 0x4, _0x1eae3f * (0x1 / 0x3), _0x45dc33 / 0x2];
							break;
						case 'medium':
							_0x6e6a46 = [_0x1eae3f * 0.4, _0x45dc33 / 0x3, _0x1eae3f * 0.2, _0x45dc33 / 0x3];
							break;
						case 'small':
							_0x6e6a46 = [_0x1eae3f * 0.45, _0x45dc33 * 0.4, _0x1eae3f * 0.1, _0x45dc33 * 0.2];
							break;
					}
					if (_0x314d1c.x >= _0x6e6a46[0x0] && _0x314d1c.x <= _0x6e6a46[0x0] + _0x6e6a46[0x2] && _0x314d1c.y >= _0x6e6a46[0x1] && _0x314d1c.y < _0x6e6a46[0x1] + _0x6e6a46[0x3]) {
						_0x3edcfb = _0x49e3ee[_0x373f1e];
						break;
					}
				}
			}
			else _0x3edcfb = _0x49e3ee.shift();
			if (_0x3edcfb) {
				_0x3edcfb.isTarget = this.settings.renderTarget.val;
				const _0x338a60 = this.getDir(this.me.z, this.me.x, _0x3edcfb.pos.z, _0x3edcfb.pos.x) || 0x0,
					_0x5cdcf2 = (this.getXDir(this.me.x, this.me.y, this.me.z, _0x3edcfb.pos.x, _0x3edcfb.pos.y - _0x3edcfb.crouchVal * 0x3 + this.me.crouchVal * 0x3, _0x3edcfb.pos.z) || 0x0) - 0.3 * this.me.recoilAnimY,
					_0x53e98b = this.getAngleDist(this.controls.object.rotation.y, _0x338a60);
				if (this.me.weapon.nAuto && this.me.didShoot) this.settings.autoAim.can = false, _0x2b73f0[_0xb53763.shoot] = 0x0, setTimeout(() => {
					this.settings.autoAim.can = true;
				}, this.me.weapon.rate * 0.85);
				else {
					if (!this.me.reloadTimer) switch (this.settings.autoAim.val) {
						case 'quickScope':
							_0x2b73f0[_0xb53763.scope] = 0x1;
							(!this.me.aimVal || this.me.weapon.noAim) && this.settings.autoAim.can ? (_0x2b73f0[_0xb53763.ydir] = _0x338a60 * 0x3e8, _0x2b73f0[_0xb53763.xdir] = _0x5cdcf2 * 0x3e8, this.controls.update(0x190), _0x2b73f0[_0xb53763.shoot] = 0x1) : (this.controls.object.rotation.y = _0x338a60, this.controls.pchObjc.rotation.x = _0x5cdcf2, this.controls.pchObjc.rotation.x = Math.max(-(Math.PI / 0x2), Math.min(Math.PI / 0x2, this.controls.pchObjc.rotation.x)), this.controls.yDr = (this.controls.pchObjc.rotation.x % Math.PI).round(0x3), this.controls.xDr = (this.controls.object.rotation.y % Math.PI).round(0x3), this.controls.target = null);
							break;
						case 'silent':
							_0x2b73f0[_0xb53763.scope] = 0x1;
							(!this.me.aimVal || this.me.weapon.noAim) && (_0x2b73f0[_0xb53763.ydir] = _0x338a60 * 0x3e8, _0x2b73f0[_0xb53763.xdir] = _0x5cdcf2 * 0x3e8, _0x2b73f0[_0xb53763.shoot] = 0x1);
							break;
						case 'trigger':
							this.raycaster.ray.intersectObjects([_0x3edcfb.objInstances], true).length && (_0x2b73f0[_0xb53763.shoot] = 0x1);
							break;
						case 'correction':
							_0x2b73f0[_0xb53763.shoot] == 0x1 && (_0x2b73f0[_0xb53763.ydir] = _0x338a60 * 0x3e8, _0x2b73f0[_0xb53763.xdir] = _0x5cdcf2 * 0x3e8);
							break;
						case 'assist':
							!this.raycaster.ray.intersectObjects([_0x3edcfb.objInstances], true).length && (this.controls.object.rotation.y = _0x338a60, this.controls.xDr = (this.controls.object.rotation.y % Math.PI).round(0x3));
							break;
						case 'easyassist':
							_0x2b73f0[_0xb53763.scope] && !this.raycaster.ray.intersectObjects([_0x3edcfb.objInstances], true).length && (this.controls.object.rotation.y = _0x338a60, this.controls.pchObjc.rotation.x = _0x5cdcf2, this.controls.pchObjc.rotation.x = Math.max(-(Math.PI / 0x2), Math.min(Math.PI / 0x2, this.controls.pchObjc.rotation.x)), this.controls.yDr = (this.controls.pchObjc.rotation.x % Math.PI).round(0x3), this.controls.xDr = (this.controls.object.rotation.y % Math.PI).round(0x3));
							break;
						case 'smoothCam':
						case 'smoothCamAssist':
							_0x2b73f0[_0xb53763.scope] && (this.controls.target = {
								'xD': _0x5cdcf2,
								'yD': _0x338a60,
								'GG': true
							}, this.controls.update(_0x2b73f0[_0xb53763.delta] * 0xa), this.controls.target = this.controls.target && this.controls.target.GG ? null : this.controls.target, this.settings.autoAim.val == 'smoothCamAssist' && _0x2b73f0[_0xb53763.shoot] == 0x1 && (_0x2b73f0[_0xb53763.xdir] = _0x5cdcf2 * 0x3e8, _0x2b73f0[_0xb53763.ydir] = _0x338a60 * 0x3e8));
							break;
					}
				}
			}
		}
	} ['onRender']() {
		let _0x2e0248 = this.ctx.canvas.width / this.scale,
			_0x327752 = this.ctx.canvas.height / this.scale;
		for (let _0x156134 = 0x0, _0x1266d4 = this.game.players.list.length; _0x156134 < _0x1266d4; _0x156134++) {
			let _0x5e4e24 = this.game.players.list[_0x156134];
			if (!_0x5e4e24 || _0x5e4e24.isYou || !_0x5e4e24.active || !this.isDefined(_0x5e4e24.objInstances)) continue;
			let _0x3a020e = !this.me.team || this.me.team != _0x5e4e24.team,
				_0x42f585 = _0x5e4e24.isDev || _0x5e4e24.isMod || _0x5e4e24.isMapMod || _0x5e4e24.canGlobalKick || _0x5e4e24.canViewReports || _0x5e4e24.partnerApp || _0x5e4e24.canVerify || _0x5e4e24.canTeleport || _0x5e4e24.kpdData || _0x5e4e24.fakeName || _0x5e4e24.level >= 0x32,
				_0x116e32 = _0x5e4e24.objInstances.position;
			if (this.containsPoint(_0x116e32)) {
				if (this.settings.renderTracers.val) {
					CanvasRenderingContext2D.prototype.save.apply(this.ctx, []);
					let _0x30853a = this.world2Screen(_0x116e32.clone(), _0x2e0248, _0x327752);
					this.ctx.lineWidth = 0x1, this.ctx.beginPath(), this.ctx.moveTo(this.ctx.canvas.width / 0x2, this.ctx.canvas.height - (this.ctx.canvas.height - _0x327752)), this.ctx.lineTo(_0x30853a.x, _0x30853a.y), this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)', this.ctx.stroke(), this.ctx.lineWidth = 0x1, this.ctx.strokeStyle = _0x3a020e ? _0x42f585 ? '#FFFF00' : this.settings.rainbowColor.val ? this.overlay.rainbow.col.val : this.settings.espHostileCol.val : this.settings.espFriendlyCol.val, this.ctx.stroke(), CanvasRenderingContext2D.prototype.restore.apply(this.ctx, []);
				}
				if (this.settings.render2dBox.val) {
					CanvasRenderingContext2D.prototype.save.apply(this.ctx, []);
					let _0x3cb4d7 = this.world2Screen(_0x116e32.clone(), _0x2e0248, _0x327752),
						_0x398b8d = this.world2Screen(_0x116e32.clone(), _0x2e0248, _0x327752, _0x5e4e24.height),
						_0xc703c8 = ~~(_0x3cb4d7.y - _0x398b8d.y),
						_0x1c03d0 = ~~(_0xc703c8 * 0.6);
					this.ctx.lineWidth = 0x4, this.ctx.translate(~~(_0x398b8d.x - _0x1c03d0 / 0x2), ~~_0x398b8d.y), this.ctx.beginPath(), this.ctx.rect(0x0, 0x0, _0x1c03d0, _0xc703c8), this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)', this.ctx.stroke(), this.ctx.lineWidth = 0x2, this.ctx.strokeStyle = _0x3a020e ? _0x42f585 ? '#FFFF00' : this.settings.rainbowColor.val ? this.overlay.rainbow.col : this.settings.espHostileCol.val : this.settings.espFriendlyCol.val, this.ctx.stroke(), this.ctx.closePath(), CanvasRenderingContext2D.prototype.restore.apply(this.ctx, []);
				}
				if (_0x5e4e24.isTarget) {
					CanvasRenderingContext2D.prototype.save.apply(this.ctx, []);
					let _0x20c89a = this.world2Screen(_0x116e32.clone(), _0x2e0248, _0x327752),
						_0x5dafee = this.world2Screen(_0x116e32.clone(), _0x2e0248, _0x327752, _0x5e4e24.height),
						_0x7e47a1 = ~~(_0x20c89a.y - _0x5dafee.y);
					this.ctx.lineWidth = 0x4, this.ctx.beginPath(), this.ctx.translate(_0x5dafee.x, _0x5dafee.y + Math.abs(_0x7e47a1 / 0x2)), this.ctx.arc(0x0, 0x0, Math.abs(_0x7e47a1 / 0x2) + 0xe, 0x0, Math.PI * 0x2), this.ctx.strokeStyle = '#FFFFFF', this.ctx.stroke(), this.ctx.closePath(), CanvasRenderingContext2D.prototype.restore.apply(this.ctx, []);
				}
			}!_0x5e4e24.objInstances.visible ? Object.defineProperty(_0x5e4e24.objInstances, 'visible', {
				'value': true,
				'writable': false
			}) : _0x5e4e24.objInstances.traverse(_0x300d15 => {
				_0x300d15 && _0x300d15.type == 'Mesh' && _0x300d15.hasOwnProperty('material') && (!_0x300d15.hasOwnProperty('_material') ? _0x300d15._material = _0x300d15.material : Object.defineProperty(_0x300d15, 'material', {
					'get'() {
						if (main.isDefined(main.mesh) && main.settings.renderChams.val) return main.mesh[_0x3a020e ? _0x42f585 ? '#FFFF00' : main.settings.rainbowColor.val ? main.overlay.rainbow.col : main.settings.chamHostileCol.val : main.settings.chamFriendlyCol.val];
						return this._material;
					},
					'set'(_0x5325c8) {
						return this._material;
					}
				}), _0x300d15.material.wireframe = !!this.settings.renderWireFrame.val);
			});
		}
		if (this.settings.fovBoxSize.val !== 'off') {
			let _0x2a040d = null;
			switch (this.settings.fovBoxSize.val) {
				case 'large':
					_0x2a040d = [_0x2e0248 / 0x3, _0x327752 / 0x4, _0x2e0248 * (0x1 / 0x3), _0x327752 / 0x2];
					break;
				case 'medium':
					_0x2a040d = [_0x2e0248 * 0.4, _0x327752 / 0x3, _0x2e0248 * 0.2, _0x327752 / 0x3];
					break;
				case 'small':
					_0x2a040d = [_0x2e0248 * 0.45, _0x327752 * 0.4, _0x2e0248 * 0.1, _0x327752 * 0.2];
					break;
			}
			CanvasRenderingContext2D.prototype.save.apply(this.ctx, []), this.ctx.strokeStyle = 'red', this.ctx.strokeRect(..._0x2a040d), CanvasRenderingContext2D.prototype.restore.apply(this.ctx, []);
		}
	} ['defines']() {
		Object.defineProperties(Object.prototype, {
			'canvas': {
				'set'(_0x4dd93c) {
					this._canvas = _0x4dd93c, _0x4dd93c.id == 'game-overlay' && (main.overlay = this, main.ctx = _0x4dd93c.getContext('2d'), Object.defineProperties(this, {
						'render': {
							'set'(_0x1be95b) {
								this._render = new Proxy(_0x1be95b, {
									'apply'(_0xc63377, _0x367123, _0x4a3c0b) {
										['scale', 'game', 'controls', 'renderer', 'me']['forEach']((_0x2e6b58, _0x33d888) => {
											main[_0x2e6b58] = _0x4a3c0b[_0x33d888];
										}), Reflect.apply(...arguments);
										if (main.controls) main.controls.idleTimer = 0x0;
										if (main.me && main.ctx) {
											main.ctx.save(), main.ctx.scale(main.scale, main.scale), main.onRender(), main.ctx.restore();
											!main.me.procInputs[main.getHash('isProxy')] && (main.me.procInputs = new Proxy(main.me.procInputs, {
												'apply'(_0x1cd2bd, _0x15cb51, [_0x24b703, _0x3d165c, _0xadc2bc, _0x54e01a]) {
													if (_0x15cb51) main.onInput(_0x24b703);
													return _0x1cd2bd.apply(_0x15cb51, [_0x24b703, _0x3d165c, _0xadc2bc, _0x54e01a]);
												},
												'get'(_0x1341be, _0x3707ce) {
													return _0x3707ce === main.getHash('isProxy') ? true : Reflect.get(_0x1341be, _0x3707ce);
												}
											}));
											!main.game.playerSound[main.getHash('isProxy')] && (main.game.playerSound = new Proxy(main.game.playerSound, {
												'apply'(_0x3bb006, _0x166ec3, _0x53c790) {
													if (main.settings.disableWpnSnd.val && _0x53c790[0x0] && typeof _0x53c790[0x0] == 'string' && _0x53c790[0x0]['startsWith']('weapon_')) return;
													return _0x3bb006.apply(_0x166ec3, _0x53c790);
												},
												'get'(_0x33a5d2, _0x2bdf9d) {
													return _0x2bdf9d === main.getHash('isProxy') ? true : Reflect.get(_0x33a5d2, _0x2bdf9d);
												}
											}));
											main.game.map.manager.objects.filter(_0x4c9934 => {
												return _0x4c9934.penetrable;
											}).map((_0x10d5f3, _0x3696c1, _0x45d3dc) => {
												_0x10d5f3.transparent = main.settings.wallPenetrate.val;
											});
											if (main.settings.autoActivateNuke.val) {
												if (Object.keys(main.me.streaks).length) main.wsSend('k', 0x0);
											}
										}
									}
								});
							},
							'get'() {
								return this._render;
							}
						}
					}));
				},
				'get'() {
					return this._canvas;
				}
			},
			'OBJLoader': {
				'set'(_0x4d079e) {
					this._objloader = _0x4d079e, main.three = this, main.raycaster = {
						'ray': new main.three.Raycaster(),
						'mid': new main.three.Vector2(0x0, 0x0)
					}, main.mesh = new Proxy({}, {
						'get'(_0x57fa0d, _0x1a7236) {
							return !_0x57fa0d[_0x1a7236] && (_0x57fa0d[_0x1a7236] = new main.three.MeshBasicMaterial({
								'transparent': true,
								'fog': false,
								'depthTest': false,
								'color': _0x1a7236
							})), _0x57fa0d[_0x1a7236];
						}
					});
				},
				'get'() {
					return this._objloader;
				}
			},
			'nameVisRate': {
				'set'(_0xdae549) {
					main.config = this, Object.defineProperties(this, {
						'kickTimer': {
							'value': Infinity,
							'writable': false
						}
					});
				},
				'get'() {
					return 0x0;
				}
			},
			'requireCaptcha': {
				'set'(_0x4ae9c4) {
					main.mapConfig = this, Object.defineProperties(this, {
						'thirdPerson': {
							'set'(_0x2b2bf2) {
								this._thirdPerson = this;
							},
							'get'() {
								return main.settings ? main.settings.thirdPerson.val : this._thirdPerson;
							}
						}
					});
				},
				'get'() {
					return false;
				}
			},
			'showMuzzle': {
				'set'(_0x42819c) {
					main.particle = this;
				},
				'get'() {
					return true;
				}
			},
			'cnBSeen': {
				'set'(_0x4cb082) {
					this.inView = _0x4cb082;
				},
				'get'() {
					let _0xf5e6b2 = !main.isDefined(main.me) || !main.me.team || main.me.team != this.team;
					return this.inView || _0xf5e6b2 && main.settings && main.settings.showNameTags.val;
				}
			},
			'events': {
				'set'(_0xf4b0c8) {
					this.ahNum == 0x0 && (main.wsSend = this.send.bind(this), main.wsEvent = this._dispatchEvent.bind(this), main.socket = this, this.send = new Proxy(this.send, {
						'apply'(_0x58e986, _0x436964, [_0x1c83a3, _0x97d7e9]) {
							return _0x1c83a3 === 'en' && (main.skins = {
								'main': _0x97d7e9[0x2][0x0],
								'secondary': _0x97d7e9[0x2][0x1],
								'hat': _0x97d7e9[0x3],
								'body': _0x97d7e9[0x4],
								'knife': _0x97d7e9[0x9],
								'dye': _0x97d7e9[0xe],
								'waist': _0x97d7e9[0x11]
							}), Reflect.apply(...arguments);
						}
					}), this._dispatchEvent = new Proxy(this._dispatchEvent, {
						'apply'(_0x49cc22, _0x259cfb, [_0x5c03a5, _0x38392b]) {
							if (main.settings && main.settings.skinUnlock.val && _0x5c03a5 === '0') {
								let _0x12f884 = _0x38392b[0x0],
									_0x403ee0 = 0x26;
								while (_0x12f884.length % _0x403ee0 !== 0x0) _0x403ee0++;
								for (let _0x3a65f1 = 0x0; _0x3a65f1 < _0x12f884.length; _0x3a65f1 += _0x403ee0) {
									_0x12f884[_0x3a65f1 + 0xc] = [main.skins.main, main.skins.secondary], _0x12f884[_0x3a65f1 + 0xd] = main.skins.hat, _0x12f884[_0x3a65f1 + 0xe] = main.skins.body, _0x12f884[_0x3a65f1 + 0x13] = main.skins.knife, _0x12f884[_0x3a65f1 + 0x18] = main.skins.dye, _0x12f884[_0x3a65f1 + 0x21] = main.skins.waist;
								}
							}
							return Reflect.apply(...arguments);
						}
					})), this._events = _0xf4b0c8;
				},
				'get'() {
					return this._events;
				}
			},
			'createDate': {
				'set'(_0xe038fc) {
					main.abilities = this, this.creationDate = _0xe038fc, Object.defineProperties(this, {
						'skins': {
							'set'(_0xd1b971) {
								this[main.getHash('serverSkins')] = _0xd1b971, this[main.getHash('localSkins')] = Array.apply(null, Array(0x1388)).map((_0x11da2f, _0x4aa1ff) => {
									return {
										'ind': _0x4aa1ff,
										'cnt': 0x1
									};
								});
							},
							'get'() {
								return main.settings.skinUnlock.val ? this[main.getHash('localSkins')] : this[main.getHash('serverSkins')];
							}
						},
						'isDev': {
							'value': 0x1,
							'writable': false
						}
					});
				},
				'get'() {
					return this.creationDate;
				}
			}
		});
	} ['listeners']() {
		window.addEventListener('DOMContentLoaded', _0x3567ac => {
			this.waitFor(() => window.instructionsUpdate).then(_0x3c4ca5 => {
				this.createObserver(_0x3c4ca5, 'style', _0x105936 => {
					if (location.host == 'krunker.io' && _0x105936.textContent.includes('Connection Banned')) localStorage.removeItem('krunker_token'), alert('You Have Been Banned And Sign Out, You Will Now Be Redirected to Krunkers Proxy \'browserfps\''), location.assign('https://browserfps.com/');
					else this.settings.autoFindNew.val && this.arrayTest(_0x105936, ['Kicked', 'Banned', 'Disconnected', 'Error', 'Game is full'], _0x178d26 => _0x105936.innerHTML.includes(_0x178d26)) && (location = document.location.origin);
				});
			}), this.createSettings(), this.waitFor(() => window.windows).then(() => {
				let _0x3ef068 = window.windows[0xb];
				_0x3ef068.html = '', _0x3ef068.header = this.genHash(0x8), _0x3ef068.gen = () => {
					let _0x26cd51 = '<a href="https://' + this.dev.link + '"><img border="0" style="width:100%;height:80px;" src="https://i.imgur.com/' + this.dev.banner + '.png" width="100" height="80"></a>';
					return _0x26cd51 += '<div class="tab">', this.tabs.forEach(_0x4b595b => {
						_0x26cd51 += '<button class="tablinks" onclick="' + this.hash + '.tabChange(event, \'' + _0x4b595b + '\')">' + _0x4b595b + '</button>';
					}), _0x26cd51 += '</div>', this.tabs.forEach(_0x86c97b => {
						_0x26cd51 += '<div id="' + _0x86c97b + '" class="tabcontent"> ' + this.tabContent(_0x86c97b) + ' </div>';
					}), _0x26cd51;
				};
				for (const _0x258c46 in this.settings) {
					this.settings[_0x258c46]['def'] = this.settings[_0x258c46]['val'];
					if (!this.settings[_0x258c46]['disabled']) {
						let _0x2e8d47 = this.getSavedVal(_0x258c46);
						this.settings[_0x258c46]['val'] = _0x2e8d47 !== null ? _0x2e8d47 : this.settings[_0x258c46]['val'], this.settings[_0x258c46]['val'] = this.settings[_0x258c46]['val'];
						if (this.settings[_0x258c46]['val'] == 'false') this.settings[_0x258c46]['val'] = false;
						if (this.settings[_0x258c46]['val'] == 'true') this.settings[_0x258c46]['val'] = true;
						if (this.settings[_0x258c46]['val'] == 'undefined') this.settings[_0x258c46]['val'] = this.settings[_0x258c46]['def'];
						if (this.settings[_0x258c46]['set']) this.settings[_0x258c46]['set'](this.settings[_0x258c46]['val'], true);
					}
				}
			}), new Array(...document.styleSheets).map(_0x440c7a => {
				if (_0x440c7a.href) {
					let _0x3937b5 = /http.*?krunker.io\/css\/(\w+.css).+/ ['exec'](_0x440c7a.href);
					if (_0x3937b5 && _0x3937b5[0x1]) {
						let _0xc05ecd = _0x3937b5[0x1];
						if (_0xc05ecd && _0xc05ecd.includes('main_custom')) {
							const _0x5e544f = {
								'hideAdverts': '#aContainer, #aHolder, #endAContainer, #aMerger { display: none !important; }',
								'hideCookies': '#onetrust-consent-sdk { display: none !important; }',
								'hideTopLeft': '#tlInfHold { display: none !important; }',
								'tabStyle': '.tab { overflow: hidden; border: 1px solid #ccc; background-image: linear-gradient(#2f3136, #f1f1f1, #2f3136); }',
								'btnStyle': '.tab button { background-color: inherit; float: left; border: none; outline: solid; cursor: pointer; padding: 14px 16px; transition: 0.3s; font-size: 17px; font-weight:500;color:black;text-shadow: 2px 2px #FFF;}',
								'btnHoverStyle': '.tab button:hover { background-color: #ddd; }',
								'activeTabStyle': '.tab button.active { background-color: #ccc; }',
								'tabContentStyle': '.tabcontent { display: none; padding: 6px 12px; border: 1px solid #ccc; border-top: none; animation: fadeEffect 1s; }',
								'zeroToFullOpacity': '@keyframes fadeEffect { from {opacity: 0;} to {opacity: 1;} }',
								'separator': '.separator { display:flex;align-items:center;text-align:center }',
								'separator': '.separator::before,.separator::after{content:\'\';flex:1;border-bottom:1px solid #000}',
								'separator': '.separator:not(:empty)::before{margin-right:.25em}',
								'separator': '.separator:not(:empty)::after{margin-left:.25em}'
							};
							for (let _0x447ef4 in _0x5e544f) {
								_0x440c7a.insertRule(_0x5e544f[_0x447ef4]);
							}
						}
					}
				}
			});
		}), window.addEventListener('keyup', _0x59a815 => {
			if (this.downKeys.has(_0x59a815.code)) this.downKeys.delete(_0x59a815.code);
		}), window.addEventListener('keydown', _0x46693b => {
			if (!document.activeElement || 'INPUT' == document.activeElement.tagName || !window.endUI && window.endUI.style.display) return;
			switch (_0x46693b.code) {
				case 'F1':
				case 'KeyC':
					_0x46693b.preventDefault(), this.toggleMenu();
					break;
				case 'F4':
					(() => {
						var _0x163882 = 0x0,
							_0x3fa884 = null,
							_0x44afcd = _0x47cda0(),
							_0x3ca5d0 = 'FFA',
							_0x244113 = [];

						function _0x47cda0() {
							var _0x4b2de8 = window.location.href,
								_0x427dab = _0x4b2de8.split('='),
								_0x36433a = _0x427dab[0x1]['split'](':');
							switch (_0x36433a[0x0]) {
								case 'SYD':
									return 'au-syd';
								case 'TOK':
									return 'jb-hnd';
								case 'MIA':
									return 'us-fl';
								case 'SV':
									return 'us-ca-sv';
								case 'FRA':
									return 'de-fra';
								case 'SIN':
									return 'sgp';
								case 'NY':
									return 'us-nj';
							}
						}
						log(_0x3ca5d0), fetch('https://matchmaker.krunker.io/game-list?hostname=krunker.io').then(_0x1e75ef => _0x1e75ef.json()).then(_0x2afcf0 => {
							if (!_0x2afcf0.error) {
								_0x2afcf0 = _0x2afcf0.games;
								for (var _0xa6b98b = 0x0; _0xa6b98b < _0x2afcf0.length; _0xa6b98b++) {
									if (_0x2afcf0[_0xa6b98b][0x1] == _0x44afcd && _0x2afcf0[_0xa6b98b][0x2] < _0x2afcf0[_0xa6b98b][0x3] && _0x2afcf0[_0xa6b98b][0x2] > 0x1 && !_0x2afcf0[_0xa6b98b][0x4]['m']) {
										log(_0x2afcf0[_0xa6b98b]);
										if (_0x2afcf0[_0xa6b98b][0x2] == 0x7) {
											_0x3fa884 = _0x2afcf0[_0xa6b98b][0x0];
											break;
										}
										else _0x2afcf0[_0xa6b98b][0x2] > 0x0 && _0x2afcf0[_0xa6b98b][0x2] > _0x163882 && (_0x163882 = _0x2afcf0[_0xa6b98b][0x2], _0x3fa884 = _0x2afcf0[_0xa6b98b][0x0]);
									}
								}
								_0x3fa884 != null ? (window.playTick(), window.switchServer(_0x3fa884)) : (document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock, document.exitPointerLock(), window.instructions.innerHTML = 'No games found, try search again', setTimeout(() => {
									window.instructions.innerHTML = 'CLICK TO PLAY';
								}, 0x7d0));
							}
						})['catch'](_0x53c8f4 => {
							throw _0x53c8f4;
						});
					})();
					break;
				case 'NumpadSubtract':
					document.exitPointerLock(), console.dir(this);
					break;
				default:
					if (!this.downKeys.has(_0x46693b.code)) this.downKeys.add(_0x46693b.code);
					break;
			}
		});
	} ['createSettings']() {
		this.settings = {
			'showToggleBtn': {
				'tab': 'Render',
				'name': 'Show Menu Button',
				'val': true,
				'html': () => this.generateSetting('checkbox', 'showToggleBtn'),
				'set': (_0x2c24cd, _0x5eb850) => {
					let _0x43442a = document.getElementById('mainButton');
					if (!this.isDefined(_0x43442a)) this.createButton('#menuItemContainer', 'mainButton', this.dev.name, 'https://i.imgur.com/' + this.dev.button + '.gif', this.hash + '.toggleMenu()', _0x2c24cd);
					this.waitFor(() => document.getElementById('mainButton'))['then'](_0x175aa5 => {
						_0x175aa5.style.display = _0x2c24cd ? 'inherit' : 'none';
					});
				}
			},
			'showNameTags': {
				'tab': 'Render',
				'pre': '<div class=\'separator\'>Color ESP</div>',
				'name': 'Player Nametags',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'showNameTags')
			},
			'render2dBox': {
				'tab': 'Render',
				'name': 'Player 2d Boxes',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'render2dBox')
			},
			'renderTracers': {
				'tab': 'Render',
				'name': 'Player Tracers',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'renderTracers')
			},
			'espHostileCol': {
				'tab': 'Render',
				'name': 'Hostile Color',
				'val': '#ff0000',
				'html': () => this.generateSetting('color', 'espHostileCol')
			},
			'espFriendlyCol': {
				'tab': 'Render',
				'name': 'Friendly Color',
				'val': '#00ff00',
				'html': () => this.generateSetting('color', 'espFriendlyCol')
			},
			'renderChams': {
				'tab': 'Render',
				'pre': '<div class=\'separator\'>Color Chams</div>',
				'name': 'Player Chams',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'renderChams')
			},
			'renderWireFrame': {
				'tab': 'Render',
				'name': 'Player Wireframe',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'renderWireFrame')
			},
			'rainbowColor': {
				'tab': 'Render',
				'name': 'Rainbow Color',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'rainbowColor')
			},
			'chamHostileCol': {
				'tab': 'Render',
				'name': 'Hostile Color',
				'val': '#ff0000',
				'html': () => this.generateSetting('color', 'chamHostileCol')
			},
			'chamFriendlyCol': {
				'tab': 'Render',
				'name': 'Friendly Color',
				'val': '#00ff00',
				'html': () => this.generateSetting('color', 'chamFriendlyCol')
			},
			'autoReload': {
				'tab': 'Weapon',
				'name': 'Auto Reload',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'autoReload')
			},
			'weaponZoom': {
				'tab': 'Weapon',
				'name': 'Weapon Zoom',
				'val': 0x1,
				'min': 0x0,
				'max': 0x32,
				'step': 0.01,
				'html': () => this.generateSetting('slider', 'weaponZoom'),
				'set': _0x2103a5 => this.waitFor(() => this.renderer).then(_0x2eec36 => {
					_0x2eec36.adsFovMlt.fill(_0x2103a5);
				})
			},
			'autoAim': {
				'tab': 'Weapon',
				'pre': '<div class=\'separator\'>Auto Aim</div>',
				'name': 'Auto Aim Type',
				'val': 'off',
				'can': true,
				'html': () => this.generateSetting('select', 'autoAim', {
					'off': 'Off',
					'correction': 'Aim Correction',
					'smoothCam': 'Smooth Assist',
					'smoothCamAssist': 'Smooth Assist & Aim Correction',
					'assist': 'Legit Aim Assist',
					'easyassist': 'Easy Aim Assist',
					'silent': 'Silent Aim',
					'trigger': 'Trigger Bot',
					'quickScope': 'Quick Scope'
				})
			},
			'fovBoxSize': {
				'tab': 'Weapon',
				'name': 'FOV Box Type',
				'val': 'off',
				'html': () => this.generateSetting('select', 'fovBoxSize', {
					'off': 'Off',
					'small': 'Small',
					'medium': 'Medium',
					'large': 'Large'
				})
			},
			'renderTarget': {
				'tab': 'Weapon',
				'name': 'Show Target Indicator',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'renderTarget')
			},
			'wallPenetrate': {
				'tab': 'Weapon',
				'name': 'Aim through Penetratables',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'wallPenetrate')
			},
			'autoBhop': {
				'tab': 'Player',
				'name': 'Auto Bhop Type',
				'val': 'off',
				'html': () => this.generateSetting('select', 'autoBhop', {
					'off': 'Off',
					'autoJump': 'Auto Jump',
					'keyJump': 'Key Jump',
					'autoSlide': 'Auto Slide',
					'keySlide': 'Key Slide'
				})
			},
			'thirdPerson': {
				'tab': 'Player',
				'name': 'Third Person',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'thirdPerson'),
				'set': (_0x59374e, _0x5be603) => {
					if (!_0x5be603) confirm('Reload Lobby To Apply?') ? location.reload() : void 0x0;
				}
			},
			'skinUnlock': {
				'tab': 'Player',
				'name': 'Unlock Skins',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'skinUnlock')
			},
			'autoActivateNuke': {
				'tab': 'GamePlay',
				'name': 'Auto Activate Nuke',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'autoActivateNuke')
			},
			'autoFindNew': {
				'tab': 'GamePlay',
				'name': 'New Lobby Finder',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'autoFindNew')
			},
			'disableWpnSnd': {
				'tab': 'GamePlay',
				'name': 'Disable Other Players Weapon Sounds',
				'val': false,
				'html': () => this.generateSetting('checkbox', 'disableWpnSnd')
			},
			'playStream': {
				'tab': 'Radio',
				'name': 'Stream Select',
				'val': 'off',
				'html': () => this.generateSetting('select', 'playStream', {
					'off': 'Off',
					'_2000s': 'General German/English',
					'_HipHopRNB': 'Hip Hop / RNB',
					'_Oldskool': 'Hip Hop Oldskool',
					'_Country': 'Country',
					'_Pop': 'Pop',
					'_Dance': 'Dance',
					'_Dubstep': 'DubStep',
					'_Lowfi': 'LoFi HipHop',
					'_Jazz': 'Jazz',
					'_Oldies': 'Golden Oldies',
					'_Club': 'Club',
					'_Folk': 'Folk',
					'_ClassicRock': 'Classic Rock',
					'_Metal': 'Heavy Metal',
					'_DeathMetal': 'Death Metal',
					'_Classical': 'Classical',
					'_Alternative': 'Alternative'
				}),
				'set': _0x8cdf90 => {
					if (_0x8cdf90 == 'off') {
						this.settings.playStream.audio && (this.settings.playStream.audio.pause(), this.settings.playStream.audio.currentTime = 0x0, this.settings.playStream.audio = null);
						return;
					}
					let _0x129f95 = this.settings.playStream.urls[_0x8cdf90];
					!this.settings.playStream.audio ? (this.settings.playStream.audio = new Audio(_0x129f95), this.settings.playStream.audio.volume = this.settings.audioVolume.val || 0.5) : this.settings.playStream.audio.src = _0x129f95, this.settings.playStream.audio.load(), this.settings.playStream.audio.play();
				},
				'urls': {
					'_2000s': 'http://0n-2000s.radionetz.de/0n-2000s.aac',
					'_HipHopRNB': 'https://stream-mixtape-geo.ntslive.net/mixtape2',
					'_Country': 'https://live.wostreaming.net/direct/wboc-waaifmmp3-ibc2',
					'_Dance': 'http://streaming.radionomy.com/A-RADIO-TOP-40',
					'_Pop': 'http://bigrradio.cdnstream1.com/5106_128',
					'_Jazz': 'http://strm112.1.fm/ajazz_mobile_mp3',
					'_Oldies': 'http://strm112.1.fm/60s_70s_mobile_mp3',
					'_Club': 'http://strm112.1.fm/club_mobile_mp3',
					'_Folk': 'https://freshgrass.streamguys1.com/irish-128mp3',
					'_ClassicRock': 'http://1a-classicrock.radionetz.de/1a-classicrock.mp3',
					'_Metal': 'http://streams.radiobob.de/metalcore/mp3-192',
					'_DeathMetal': 'http://stream.laut.fm/beatdownx',
					'_Classical': 'http://live-radio01.mediahubaustralia.com/FM2W/aac/',
					'_Alternative': 'http://bigrradio.cdnstream1.com/5187_128',
					'_Dubstep': 'http://streaming.radionomy.com/R1Dubstep?lang=en',
					'_Lowfi': 'http://streams.fluxfm.de/Chillhop/mp3-256',
					'_Oldskool': 'http://streams.90s90s.de/hiphop/mp3-128/'
				},
				'audio': null
			},
			'audioVolume': {
				'tab': 'Radio',
				'name': 'Radio Volume',
				'val': 0.5,
				'min': 0x0,
				'max': 0x1,
				'step': 0.01,
				'html': () => this.generateSetting('slider', 'audioVolume'),
				'set': _0x1c701c => {
					if (this.settings.playStream.audio) this.settings.playStream.audio.volume = _0x1c701c;
				}
			}
		};
	} ['generateSetting'](_0x3174e3, _0x5e1d2e, _0x8097fd) {
		switch (_0x3174e3) {
			case 'button':
				return '<input type=\"button\" name=\"' + _0x3174e3 + '" id="slid_utilities_' + _0x5e1d2e + '" class="settingsBtn" onclick="' + _0x8097fd.function + '\" value=\"' + _0x8097fd.label + '" style="float:right;width:auto"/>';
			case 'checkbox':
				return '<label class="switch"><input type="checkbox" onclick="' + this.hash + '.setSetting(\'' + _0x5e1d2e + '\', this.checked)" ' + (this.settings[_0x5e1d2e]['val'] ? 'checked' : '') + '><span class="slider"></span></label>';
			case 'slider':
				return '<span class=\'sliderVal\' id=\'slid_utilities_' + _0x5e1d2e + '\'>' + this.settings[_0x5e1d2e]['val'] + '</span><div class=\'slidecontainer\'><input type=\'range\' min=\'' + this.settings[_0x5e1d2e]['min'] + '\' max=\'' + this.settings[_0x5e1d2e]['max'] + '\' step=\'' + this.settings[_0x5e1d2e]['step'] + '\' value=\'' + this.settings[_0x5e1d2e]['val'] + '\' class=\'sliderM\' oninput="' + this.hash + '.setSetting(\'' + _0x5e1d2e + '\', this.value)"></div>';
			case 'select': {
				let _0xde8b44 = '<select onchange="' + this.hash + '.setSetting(\'' + _0x5e1d2e + '\', this.value)" class="inputGrey2">';
				for (let _0x536d2e in _0x8097fd) {
					_0xde8b44 += '<option value="' + _0x536d2e + '\" ' + (_0x536d2e == this.settings[_0x5e1d2e]['val'] ? 'selected' : '') + '>' + _0x8097fd[_0x536d2e] + '</option>';
				}
				return _0xde8b44 += '</select>', _0xde8b44;
			}
			default:
				return '<input type="' + _0x3174e3 + '" name="' + _0x3174e3 + '" id="slid_utilities_' + _0x5e1d2e + '\"\x0a' + ('color' == _0x3174e3 ? 'style="float:right;margin-top:5px"' : 'class="inputGrey2" placeholder="' + _0x8097fd + '\"') + '\nvalue="' + this.settings[_0x5e1d2e]['val'] + '\" oninput=\"' + this.hash + '.setSetting(\'' + _0x5e1d2e + '\', this.value)"/>';
		}
	} ['setSetting'](_0x26738b, _0x57eb47) {
		this.settings[_0x26738b]['val'] = _0x57eb47, this.saveVal(_0x26738b, _0x57eb47);
		if (document.getElementById('slid_utilities_' + _0x26738b)) document.getElementById('slid_utilities_' + _0x26738b)['innerHTML'] = _0x57eb47;
		if (this.settings[_0x26738b]['set']) this.settings[_0x26738b]['set'](_0x57eb47);
	} ['saveVal'](_0x1874e9, _0x34aff2) {
		localStorage.setItem('krk_' + _0x1874e9, _0x34aff2);
	} ['deleteVal'](_0x419105) {
		localStorage.removeItem('krk_' + _0x419105);
	} ['getSavedVal'](_0x561a95) {
		return localStorage.getItem('krk_' + _0x561a95);
	} ['getHash'](_0x3d10f7) {
		return this.hashes = this.hashes || {}, !this.hashes.hasOwnProperty(_0x3d10f7) && (this.hashes[_0x3d10f7] = this.genHash(_0x3d10f7.length)), this.hashes[_0x3d10f7];
	} ['tabContent'](_0x481fd5) {
		let _0x15b37d = '';
		for (let _0x24ff4c in this.settings) {
			if (this.settings[_0x24ff4c]['tab'] == _0x481fd5) {
				if (this.settings[_0x24ff4c]['pre']) _0x15b37d += this.settings[_0x24ff4c]['pre'];
				_0x15b37d += '<div class=\'settName\' id=\'' + _0x24ff4c + '_div\' style=\'display:block\'>' + this.settings[_0x24ff4c]['name'] + ' ' + this.settings[_0x24ff4c]['html']() + '</div>';
			}
		}
		return _0x15b37d;
	} ['tabChange'](_0x370abd, _0x502ba1) {
		var _0x3f2183, _0x4bb52c, _0x1040cf;
		_0x4bb52c = document.getElementsByClassName('tabcontent');
		for (_0x3f2183 = 0x0; _0x3f2183 < _0x4bb52c.length; _0x3f2183++) {
			_0x4bb52c[_0x3f2183]['style']['display'] = 'none';
		}
		_0x1040cf = document.getElementsByClassName('tablinks');
		for (_0x3f2183 = 0x0; _0x3f2183 < _0x1040cf.length; _0x3f2183++) {
			_0x1040cf[_0x3f2183]['className'] = _0x1040cf[_0x3f2183]['className']['replace'](' active', '');
		}
		document.getElementById(_0x502ba1).style['display'] = 'block', _0x370abd.currentTarget.className += ' active';
	} ['toggleMenu']() {
		let _0x41c48e = document.pointerLockElement || document.mozPointerLockElement;
		if (_0x41c48e) document.exitPointerLock();
		if (window.showWindow) window.showWindow(0xc);
		if (this.isDefined(window.SOUND)) window.SOUND.play('tick_0', 0.1);
	} ['isType'](_0x47cc35, _0x3736ae) {
		return typeof _0x47cc35 === _0x3736ae;
	} ['isDefined'](_0x14d34d) {
		return !this.isType(_0x14d34d, 'undefined') && _0x14d34d !== null;
	} ['isURL'](_0x2ec7ba) {
		return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm ['test'](_0x2ec7ba);
	} ['objectHas'](_0x3cd327, _0x2013fd) {
		return _0x2013fd.some(_0x48cce0 => _0x3cd327.hasOwnProperty(_0x48cce0));
	} ['genHash'](_0x25af81) {
		return [...Array(_0x25af81)]['map'](_0x3a9a6d => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[~~(Math.random() * 0x34)]).join('');
	} ['createElement'](_0x28c97e, _0x206dfa, _0x850dd1) {
		if (!this.isDefined(_0x28c97e)) return null;
		!this.isDefined(_0x850dd1) && (_0x850dd1 = '');
		let _0x3e6929 = document.createElement(_0x28c97e);
		if (this.isType(_0x206dfa, 'object'))
			for (let _0x34c4a7 in _0x206dfa) {
				_0x3e6929.setAttribute(_0x34c4a7, _0x206dfa[_0x34c4a7]);
			}!Array.isArray(_0x850dd1) && (_0x850dd1 = [_0x850dd1]);
		for (let _0x3a09ca = 0x0; _0x3a09ca < _0x850dd1.length; _0x3a09ca++) {
			_0x850dd1[_0x3a09ca]['tagName'] ? _0x3e6929.appendChild(_0x850dd1[_0x3a09ca]) : _0x3e6929.appendChild(document.createTextNode(_0x850dd1[_0x3a09ca]));
		}
		return _0x3e6929;
	} ['createButton'](_0x549c00, _0xcbf4eb, _0x51b10c, _0x5c951d, _0x5cc08c, _0x21f6c4) {
		_0x21f6c4 = _0x21f6c4 ? 'inherit' : 'none', this.waitFor(_0x2038c3 => document.querySelector(_0x549c00)).then(_0x954b66 => {
			let _0x40aa1a = this.createElement('div', {
					'class': 'menuItemIcon',
					'style': 'background-image:url("' + _0x5c951d + '\");display:inherit;'
				}),
				_0x558ee7 = this.createElement('div', {
					'class': 'menuItemTitle',
					'style': 'display:inherit;'
				}, _0x51b10c),
				_0xda2db = this.createElement('div', {
					'id': _0xcbf4eb,
					'class': 'menuItem',
					'onmouseenter': 'playTick()',
					'onclick': '' + _0x5cc08c,
					'style': 'display:' + _0x21f6c4 + ';'
				}, [_0x40aa1a, _0x558ee7]);
			if (_0x954b66) _0x954b66.append(_0xda2db);
		});
	} ['createObserver'](_0x213f35, _0x2af800, _0x5ea0aa, _0x3d65bc = true) {
		return new MutationObserver((_0x5b4888, _0x1d4303) => {
			(_0x2af800 == 'src^ || _0x3d65bc && _0x5b4888[0x0]['target']['style']['display'] == 'block^ || !_0x3d65bc) && _0x5ea0aa(_0x5b4888[0x0]['target']);
		})['observe'](_0x213f35, _0x2af800 == 'childList' ? {
			'childList': true
		} : {
			'attributes': true,
			'attributeFilter': [_0x2af800]
		});
	}
	async ['waitFor'](_0x360f9c, _0x142e8f = Infinity, _0xa0572c = null) {
		let _0x3b163f = _0x300643 => new Promise(_0x169d5b => setTimeout(_0x169d5b, _0x300643));
		return new Promise(async (_0x1b609f, _0x31285a) => {
			if (typeof _0x142e8f != 'number') _0x31285a('Timeout argument not a number in waitFor(selector, timeout_ms)');
			let _0x5a7fe8, _0xc729cd = 0x64;
			while (_0x5a7fe8 === undefined || _0x5a7fe8 === false || _0x5a7fe8 === null || _0x5a7fe8.length === 0x0) {
				if (_0xa0572c && _0xa0572c instanceof Function) _0xa0572c();
				if (_0x142e8f % 0x2710 < _0xc729cd) log('waiting for: ', _0x360f9c);
				if ((_0x142e8f -= _0xc729cd) < 0x0) {
					console.error('Timeout : ', _0x360f9c), _0x1b609f(false);
					return;
				}
				await _0x3b163f(_0xc729cd), _0x5a7fe8 = typeof _0x360f9c === 'string' ? Function(_0x360f9c)() : _0x360f9c();
			}
			console.info('Passed : ', _0x360f9c), _0x1b609f(_0x5a7fe8);
		});
	} ['getD3D'](_0x3b68b0, _0x265b7, _0x304d6c, _0x3c7a7f, _0x34867f, _0x4542ed) {
		let _0x96b54a = _0x3b68b0 - _0x3c7a7f,
			_0xee2898 = _0x265b7 - _0x34867f,
			_0x31a579 = _0x304d6c - _0x4542ed;
		return Math.sqrt(_0x96b54a * _0x96b54a + _0xee2898 * _0xee2898 + _0x31a579 * _0x31a579);
	} ['getAngleDst'](_0x273cdb, _0x1535cb) {
		return Math.atan2(Math.sin(_0x1535cb - _0x273cdb), Math.cos(_0x273cdb - _0x1535cb));
	} ['getXDir'](_0x1892fc, _0x32f105, _0x327066, _0x1e0110, _0x49f6a2, _0x5c5f90) {
		let _0x431748 = Math.abs(_0x32f105 - _0x49f6a2),
			_0x2f61f2 = this.getD3D(_0x1892fc, _0x32f105, _0x327066, _0x1e0110, _0x49f6a2, _0x5c5f90);
		return Math.asin(_0x431748 / _0x2f61f2) * (_0x32f105 > _0x49f6a2 ? -0x1 : 0x1);
	} ['getDir'](_0x4fc6ea, _0x50693b, _0x355bf9, _0x471d2a) {
		return Math.atan2(_0x50693b - _0x471d2a, _0x4fc6ea - _0x355bf9);
	} ['getDistance'](_0x59c152, _0x574337, _0x55ea17, _0x3813f6) {
		return Math.sqrt((_0x55ea17 -= _0x59c152) * _0x55ea17 + (_0x3813f6 -= _0x574337) * _0x3813f6);
	} ['getAngleDist'](_0x2de3eb, _0x2d2fd9) {
		return Math.atan2(Math.sin(_0x2d2fd9 - _0x2de3eb), Math.cos(_0x2de3eb - _0x2d2fd9));
	} ['containsPoint'](_0x2907cc) {
		let _0x387b35 = this.renderer.frustum.planes;
		for (let _0xdd677 = 0x0; _0xdd677 < 0x6; _0xdd677++) {
			if (_0x387b35[_0xdd677]['distanceToPoint'](_0x2907cc) < 0x0) return false;
		}
		return true;
	} ['world2Screen'](_0x11b265, _0x3c3153, _0x456e00, _0x29914c = 0x0) {
		return _0x11b265.y += _0x29914c, _0x11b265.project(this.renderer.camera), _0x11b265.x = (_0x11b265.x + 0x1) / 0x2, _0x11b265.y = (-_0x11b265.y + 0x1) / 0x2, _0x11b265.x *= _0x3c3153, _0x11b265.y *= _0x456e00, _0x11b265;
	}
}
const log = console.log.bind(null, '[ch33t]'),
	main = new Main();
