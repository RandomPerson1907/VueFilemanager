<template>
    <div class="control">
		<div class="control__item control__item_refresh" @click="refresh">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				 width="24" height="24"
				 viewBox="0 0 172 172"
				 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#596778"><path d="M86,21.5c-27.48389,0 -50.43261,16.98584 -59.79687,40.98438l9.91016,4.03125c7.83154,-20.07227 26.83301,-34.26562 49.88672,-34.26562c17.42676,0 32.96387,8.54541 42.66406,21.5h-21.16406v10.75h37.625v-37.625h-10.75v16.62891c-11.77881,-13.50049 -29.18457,-22.00391 -48.375,-22.00391zM135.88672,105.48438c-7.83154,20.07227 -26.83301,34.26563 -49.88672,34.26563c-17.61572,0 -33.08984,-8.67139 -42.83203,-21.5h21.33203v-10.75h-37.625v37.625h10.75v-16.62891c11.75781,13.33252 28.9956,22.00391 48.375,22.00391c27.48389,0 50.43262,-16.98584 59.79688,-40.98437z"></path></g></g></svg>
		</div>
        <div class="control__item control__item_user">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve" data-animoptions="{'duration':'1', 'repeat':'0', 'repeatDelay':'0.5'}" preserveAspectRatio="xMinYMin meet" style="left: 0.0167236px; top: -0.150002px;"><g class="lievo-setrotation"><g class="lievo-setsharp" style="transform-origin: 0px 0px 0px;" data-svg-origin="30.25 30" transform="matrix(1,0,0,1,-0.25000029802321944,-0.25000029802321944)"><g class="lievo-setflip"><g class="lievo-main">
		<g class="lievo-common">
			<path class="lievo-altstroke" fill="none" stroke="#596778" stroke-width="2.5px" stroke-miterlimit="10" d="M30,7c-2.15,0.04-4.17,0.25-4.8,2c-2.63-0.06-3.25,1.44-4.2,3.58s-0.39,7.72,0.3,9.73c-1.54,0.94-1.04,5.44,1.2,5.58c0.26,1.17,0.48,4.22,2.4,5.3v3.9C24.83,40.5,12.76,43.16,11,45s-2.08,3.75-2,6h42c0.08-2.25-0.24-4.16-2-6s-13.58-4.5-13.8-7.9v-3.9c1.92-1.08,2.25-4.33,2.5-5.5c2.24-0.25,2.64-4.55,1.1-5.48c0.69-2.02,1.45-7.49,0.5-9.63S36,7,30,7z" style="" data-original="M30,7c-2.15,0.04-4.17,0.25-4.8,2c-2.63-0.06-3.25,1.44-4.2,3.58s-0.39,7.72,0.3,9.73c-1.54,0.94-1.04,5.44,1.2,5.58c0.26,1.17,0.48,4.22,2.4,5.3v3.9C24.83,40.5,12.76,43.16,11,45s-2.08,3.75-2,6h42c0.08-2.25-0.24-4.16-2-6s-13.58-4.5-13.8-7.9v-3.9c1.92-1.08,2.25-4.33,2.5-5.5c2.24-0.25,2.64-4.55,1.1-5.48c0.69-2.02,1.45-7.49,0.5-9.63S36,7,30,7z" data-svg-origin="8.98887825012207 7" transform="matrix(1,0,0,1,0,0)"></path>
		</g>
	<rect x="-19" y="-19" width="4" height="4" class="lievo-checkshift lievo-donotdraw lievo-nohoverstroke lievo-nohovercolor" style="stroke-width: 2px; stroke-linecap: butt; stroke-linejoin: round; opacity: 0;" fill="none" stroke="#596778" stroke-width="2.5px"></rect></g></g></g></g>

                <desc>LivIcons Evolution</desc><defs></defs></svg>
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
    import {mapActions} from "vuex";

	export default {
        name: "ControlComponent",
		methods: {
        	...mapActions(['refresh'])
		}
    }
</script>

<style lang="scss" scoped>
    .control {
		display: flex;
		justify-content: center;
		align-items: center;

        .control__item {
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