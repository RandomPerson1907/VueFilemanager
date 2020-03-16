<template>
    <div class="control">
		<div class="control__item control__item_refresh" @click="refresh">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				 width="24" height="24"
				 viewBox="0 0 172 172"
				 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#596778"><path d="M86,21.5c-27.48389,0 -50.43261,16.98584 -59.79687,40.98438l9.91016,4.03125c7.83154,-20.07227 26.83301,-34.26562 49.88672,-34.26562c17.42676,0 32.96387,8.54541 42.66406,21.5h-21.16406v10.75h37.625v-37.625h-10.75v16.62891c-11.77881,-13.50049 -29.18457,-22.00391 -48.375,-22.00391zM135.88672,105.48438c-7.83154,20.07227 -26.83301,34.26563 -49.88672,34.26563c-17.61572,0 -33.08984,-8.67139 -42.83203,-21.5h21.33203v-10.75h-37.625v37.625h10.75v-16.62891c11.75781,13.33252 28.9956,22.00391 48.375,22.00391c27.48389,0 50.43262,-16.98584 59.79688,-40.98437z"></path></g></g></svg>
		</div>
		<div class="control__item control__item_change-background" @click="showBackgroundsSidebar">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				 width="24" height="24"
				 viewBox="0 0 172 172"
				 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#475f7b"><path d="M0,17.2v137.6h172v-137.6zM6.88,24.08h158.24v89.44h-36.73812l-24.08,-17.2h-20.3175l-14.05563,-14.05562l-16.74312,3.35937l-14.80813,-22.22562l-31.4975,31.4975zM129,44.72c-8.50594,0 -15.48,6.97406 -15.48,15.48c0,8.50594 6.97406,15.48 15.48,15.48c8.50594,0 15.48,-6.97406 15.48,-15.48c0,-8.50594 -6.97406,-15.48 -15.48,-15.48zM129,51.6c4.78375,0 8.6,3.81625 8.6,8.6c0,4.78375 -3.81625,8.6 -8.6,8.6c-4.78375,0 -8.6,-3.81625 -8.6,-8.6c0,-4.78375 3.81625,-8.6 8.6,-8.6zM37.3025,74.20188l12.71188,19.05437l17.65687,-3.52062l13.46438,13.46437h20.9625l24.08,17.2h38.94187v27.52h-158.24v-43.29562z"></path></g></g></svg>
		</div>
		<div class="control__item control__item_check" @click="toggleChecking">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				 width="50" height="50"
				 viewBox="0 0 172 172"
				 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#475f7b"><path d="M24.08,6.88c-9.63469,0 -17.2,7.56531 -17.2,17.2v92.88c0,9.63469 7.56531,17.2 17.2,17.2h92.88c9.63469,0 17.2,-7.56531 17.2,-17.2v-83.205l-6.88,7.525v75.68c0,5.84531 -4.47469,10.32 -10.32,10.32h-92.88c-5.84531,0 -10.32,-4.47469 -10.32,-10.32v-92.88c0,-5.84531 4.47469,-10.32 10.32,-10.32h90.8375l5.805,-6.5575c-1.37062,0 -2.39187,-0.3225 -3.7625,-0.3225zM124.7,18.3825l-59.555,66.22l-28.4875,-25.2625l-4.515,5.16l30.96,27.52l2.58,2.2575l2.2575,-2.58l61.92,-68.8zM141.04,37.84v6.88h6.88c5.84531,0 10.32,4.47469 10.32,10.32v92.88c0,5.84531 -4.47469,10.32 -10.32,10.32h-92.88c-5.84531,0 -10.32,-4.47469 -10.32,-10.32v-6.88h-6.88v6.88c0,9.63469 7.56531,17.2 17.2,17.2h92.88c9.63469,0 17.2,-7.56531 17.2,-17.2v-92.88c0,-9.63469 -7.56531,-17.2 -17.2,-17.2z"></path></g></g></svg>
		</div>
		<div class="control__item control__item_view">
			<transition name="fade">
				<svg v-if="view === 'rows'" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
					 width="80" height="80"
					 viewBox="0 0 172 172"
					 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#475f7b"><path d="M32.25,21.5c-5.9125,0 -10.75,4.8375 -10.75,10.75c0,5.9125 4.8375,10.75 10.75,10.75c5.9125,0 10.75,-4.8375 10.75,-10.75c0,-5.9125 -4.8375,-10.75 -10.75,-10.75zM32.25,25.8c3.58613,0 6.45,2.86387 6.45,6.45c0,3.58613 -2.86387,6.45 -6.45,6.45c-3.58613,0 -6.45,-2.86387 -6.45,-6.45c0,-3.58613 2.86387,-6.45 6.45,-6.45zM32.25,30.1c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM53.75,30.1v4.3h96.75v-4.3zM32.25,58.05c-5.9125,0 -10.75,4.8375 -10.75,10.75c0,5.9125 4.8375,10.75 10.75,10.75c5.9125,0 10.75,-4.8375 10.75,-10.75c0,-5.9125 -4.8375,-10.75 -10.75,-10.75zM32.25,62.35c3.58613,0 6.45,2.86387 6.45,6.45c0,3.58613 -2.86387,6.45 -6.45,6.45c-3.58613,0 -6.45,-2.86387 -6.45,-6.45c0,-3.58613 2.86387,-6.45 6.45,-6.45zM32.25,66.65c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM53.75,66.65v4.3h96.75v-4.3zM32.25,92.45c-5.9125,0 -10.75,4.8375 -10.75,10.75c0,5.9125 4.8375,10.75 10.75,10.75c5.9125,0 10.75,-4.8375 10.75,-10.75c0,-5.9125 -4.8375,-10.75 -10.75,-10.75zM32.25,96.75c3.58613,0 6.45,2.86387 6.45,6.45c0,3.58613 -2.86387,6.45 -6.45,6.45c-3.58613,0 -6.45,-2.86387 -6.45,-6.45c0,-3.58613 2.86387,-6.45 6.45,-6.45zM32.25,101.05c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM53.75,101.05v4.3h96.75v-4.3zM32.25,129c-5.9125,0 -10.75,4.8375 -10.75,10.75c0,5.9125 4.8375,10.75 10.75,10.75c5.9125,0 10.75,-4.8375 10.75,-10.75c0,-5.9125 -4.8375,-10.75 -10.75,-10.75zM32.25,133.3c3.58613,0 6.45,2.86387 6.45,6.45c0,3.58613 -2.86387,6.45 -6.45,6.45c-3.58613,0 -6.45,-2.86387 -6.45,-6.45c0,-3.58613 2.86387,-6.45 6.45,-6.45zM32.25,137.6c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM53.75,137.6v4.3h96.75v-4.3z"></path></g></g></svg>
			</transition>
			<transition name="fade">
				<svg v-if="view === 'cards'" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
					 width="50" height="50"
					 viewBox="0 0 172 172"
					 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#475f7b"><path d="M24.08,13.76c-5.6587,0 -10.32,4.6613 -10.32,10.32v51.6c0.00019,1.89978 1.54022,3.43981 3.44,3.44h58.48c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-51.6c0,-5.6587 -4.6613,-10.32 -10.32,-10.32zM103.2,13.76c-5.6587,0 -10.32,4.6613 -10.32,10.32v51.6c0.00019,1.89978 1.54022,3.43981 3.44,3.44h58.48c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-51.6c0,-5.6587 -4.6613,-10.32 -10.32,-10.32zM24.08,20.64h44.72c1.9437,0 3.44,1.4963 3.44,3.44v6.88h-51.6v-6.88c0,-1.9437 1.4963,-3.44 3.44,-3.44zM103.2,20.64h44.72c1.9437,0 3.44,1.4963 3.44,3.44v6.88h-51.6v-6.88c0,-1.9437 1.4963,-3.44 3.44,-3.44zM20.64,37.84h51.6v34.4h-51.6zM99.76,37.84h51.6v34.4h-51.6zM24.08,92.88c-5.6587,0 -10.32,4.6613 -10.32,10.32v51.6c0.00019,1.89978 1.54022,3.43981 3.44,3.44h58.48c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-51.6c0,-5.6587 -4.6613,-10.32 -10.32,-10.32zM103.2,92.88c-5.6587,0 -10.32,4.6613 -10.32,10.32v51.6c0.00019,1.89978 1.54022,3.43981 3.44,3.44h58.48c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-51.6c0,-5.6587 -4.6613,-10.32 -10.32,-10.32zM24.08,99.76h44.72c1.9437,0 3.44,1.4963 3.44,3.44v6.88h-51.6v-6.88c0,-1.9437 1.4963,-3.44 3.44,-3.44zM103.2,99.76h44.72c1.9437,0 3.44,1.4963 3.44,3.44v6.88h-51.6v-6.88c0,-1.9437 1.4963,-3.44 3.44,-3.44zM20.64,116.96h51.6v34.4h-51.6zM99.76,116.96h51.6v34.4h-51.6z"></path></g></g></svg>
			</transition>
			<div class="control__item__popup">
				<div class="popup__item" :class="{active : view === 'rows'}" @click="setView('rows')">Rows</div>
				<div class="popup__item" :class="{active : view === 'cards'}" @click="setView('cards')">Cards</div>
			</div>
		</div>
		<div class="control__item control__item_storages">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
					 width="100" height="100"
					 viewBox="0 0 172 172"
					 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#475f7b"><path d="M26.445,0c-3.1175,0 -5.52281,2.10969 -6.235,5.0525h-0.1075l-0.1075,0.43l-19.2425,60.3075c-0.05375,0.12094 -0.16125,0.20156 -0.215,0.3225v0.215c-0.16125,0.30906 -0.26875,0.63156 -0.3225,0.9675c-0.01344,0.04031 -0.09406,0.06719 -0.1075,0.1075c-0.01344,0.17469 -0.01344,0.36281 0,0.5375c-0.04031,0.28219 -0.1075,0.56438 -0.1075,0.86v27.52c0,1.23625 0.37625,2.43219 0.9675,3.44c-0.59125,1.00781 -0.9675,2.20375 -0.9675,3.44v27.52c0,1.23625 0.37625,2.43219 0.9675,3.44c-0.59125,1.00781 -0.9675,2.20375 -0.9675,3.44v27.52c0,3.7625 3.1175,6.88 6.88,6.88h158.24c3.7625,0 6.88,-3.1175 6.88,-6.88v-27.52c0,-1.23625 -0.37625,-2.43219 -0.9675,-3.44c0.59125,-1.00781 0.9675,-2.20375 0.9675,-3.44v-27.52c0,-1.23625 -0.37625,-2.43219 -0.9675,-3.44c0.59125,-1.00781 0.9675,-2.20375 0.9675,-3.44v-27.52c0,-0.95406 -0.28219,-1.85437 -0.645,-2.6875c0,-0.04031 0,-0.06719 0,-0.1075l-19.35,-60.5225l-0.1075,-0.43h-0.1075c-0.71219,-2.94281 -3.1175,-5.0525 -6.235,-5.0525zM26.7675,6.88h118.5725c0,0.06719 0,0.14781 0,0.215l17.5225,54.825h-153.8325l17.63,-54.825c0.04031,-0.06719 0.08063,-0.14781 0.1075,-0.215zM6.88,68.8h158.24v27.52h-158.24v-27.305c0,-0.06719 0,-0.14781 0,-0.215zM147.92,75.68c-3.80281,0 -6.88,3.07719 -6.88,6.88c0,3.80281 3.07719,6.88 6.88,6.88c3.80281,0 6.88,-3.07719 6.88,-6.88c0,-3.80281 -3.07719,-6.88 -6.88,-6.88zM6.88,103.2h158.24v27.52h-158.24zM147.92,110.08c-3.80281,0 -6.88,3.07719 -6.88,6.88c0,3.80281 3.07719,6.88 6.88,6.88c3.80281,0 6.88,-3.07719 6.88,-6.88c0,-3.80281 -3.07719,-6.88 -6.88,-6.88zM6.88,137.6h158.24v27.52h-158.24zM147.92,144.48c-3.80281,0 -6.88,3.07719 -6.88,6.88c0,3.80281 3.07719,6.88 6.88,6.88c3.80281,0 6.88,-3.07719 6.88,-6.88c0,-3.80281 -3.07719,-6.88 -6.88,-6.88z"></path></g></g></svg>
			<div class="control__item__popup">
				<div
						class="popup__item"
						:class="{active : storage.id === currentStorage.id}"
						v-for="(storage, index) in storages"
						:key="index"
						@click="changeStorage(storage)"
				>
					<div class="popup__item__icon">
						<img :src="storage.icon" :alt="storage.name">
					</div>
					<div class="popup__item__name">
						{{ storage.name }}
					</div>
				</div>
			</div>
		</div>
        <div class="control__item control__item_more">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="24" height="24"
                 viewBox="0 0 172 172"
                 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#727e8c"><path d="M21.5,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5zM86,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5zM150.5,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5z"></path></g></g></svg>
        </div>
    </div>
</template>

<script>
	import {mapActions, mapMutations, mapState} from "vuex";

	export default {
        name: "ControlComponent",
		computed: {
        	...mapState(['view', 'storages', 'currentStorage'])
		},
		methods: {
        	...mapMutations(['setView']),
        	...mapActions(['refresh', 'toggleChecking', 'changeStorage', 'showBackgroundsSidebar'])
		}
    }
</script>

<style lang="scss" scoped>
	.fade-enter-active {
		transition: opacity .5s ease-in-out;
	}
	.fade-leave-active {
		transition: all 0s;
	}
	.fade-enter {
		opacity: 0;
	}

    .control {
		display: flex;
		justify-content: center;
		align-items: center;

        .control__item {
			position: relative;
			display: flex;
			align-items: center;
			margin: .4rem;
			padding: .4rem;
			cursor: pointer;

            svg {
                width: 24px;
                height: 24px;

				* {
					transition: all .3s ease-in-out;
				}
            }

			&.control__item_storages,
			&.control__item_view {
				&:hover {
					.control__item__popup {
						visibility: visible;
						opacity: 1;
						z-index: 10;
					}
				}

				.control__item__popup {
					position: absolute;
					top: 100%;
					left: -25px;
					visibility: hidden;
					opacity: 0;
					width: 100px;
					padding: .5rem 0;
					border-radius: .25rem;
					background: #e8ecf0;
					box-shadow: 0 7px 13px 0 rgba(90, 141, 238, 0.3);
					z-index: 0;
					transition: all .3s ease-in-out;

					.popup__item {
						display: flex;
						margin-left: 2px;
						padding: .35rem .5rem;
						color: #475F7B;
						font-family: 'Rubik', 'sans-serif';
						font-weight: 400;
						font-size: .85rem;
						line-height: 1.4;
						letter-spacing: .01rem;
						box-sizing: border-box;
						border-left: 0 solid #F2F4F4;
						transition: border-color .3s ease-in-out;

						&.active {
							border-left: 2px solid #5a8dee;
							margin-left: 0;
						}

						&:hover {
							border-left: 2px solid #5a8dee;
							margin-left: 0;
						}

						.popup__item__icon {
							height: 25px;
							max-width: 25px;

							img {
								width: 100%;
								height: 100%;
							}
						}

						.popup__item__name {
							margin-left: 1rem;
						}
					}
				}
			}

			&.control__item_storages {
				.control__item__popup {
					left: -50px;
					width: 150px;
				}
			}

			&.control__item_more {
				svg {
					width: 14px;
					height: 14px;
					transform: rotate(90deg);
				}
			}

			&:hover {
				svg {
					path, rect, circle,
					polyline, line, polygon {
						stroke: #719DF0;
					}
				}
			}

			&.control__item_refresh {
				width: 24px;
				height: 24px;
				padding: 0;

				svg {
					width: 100%;
					height: 100%;
				}

				&:hover {
					animation-name: rotating;
					animation-duration: 1s;
					animation-iteration-count: infinite;
					animation-timing-function: linear;
				}
			}

			&.control__item_more {
				&:hover {
					svg {
						g > g > path {
								fill: #719DF0;
						}
					}
				}
			}
        }
    }
</style>