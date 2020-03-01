<template>
    <div class="additional-info">
        <div class="additional-info__backdrop"></div>
        <div class="additional-info__content">
            <div class="additional-info__content__header">
                <div class="title">Document.pdf</div>
                <div class="actions">
                    <div class="action action__delete">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve" data-shift="x" data-animoptions="{'duration':'1.4', 'repeat':'0', 'repeatDelay':'0.5'}" preserveAspectRatio="xMinYMin meet" style="left: 0.333374px; top: -0.150002px;"><g class="lievo-setrotation"><g class="lievo-setsharp" style="transform-origin: 0px 0px 0px;" data-svg-origin="31.25 30" transform="matrix(1,0,0,1,-1.2500002980232194,-0.25000029802321944)"><g class="lievo-setflip"><g class="lievo-main">
		<g class="lievo-common">
			<g opacity="1" style="opacity: 0;" data-svg-origin="63 1.1200001239776611" transform="matrix(1,0,0,1,-43,37)">
				<path class="lievo-donotdraw lievo-likestroke lievo-altstroke" fill="#596778" d="M68.38,7.91l-2.74,1.08c0,0-1.08,0.91-1.5,0.66c-0.46-0.27-0.1-1.8-0.1-1.8l0.88-1.12L63,4.48l2.43-1.12c0,0,0.96-1.68,1.19-1.68c0.52,0,2.58,1.68,2.58,1.68l-1.19-1.29l1.19-0.95l3.62,1.12c0,0-1.03,1.68-0.52,2.24c0.52,0.56,0.98,5.16,0.47,5.16C72.26,9.65,68.9,6,68.9,6l3.72,4.09l-1.97-0.21l-2.02,0.99l-3.46-1.07L68.38,7.91z" style="stroke-width: 0px; transform-origin: 0px 0px 0px;" stroke="none" data-svg-origin="67.99589538574219 5.995000123977661" transform="matrix(0,1,-1,0,73.99089550971985,-62.000895261764526)"></path>
			</g>
		</g>

		<g class="lievo-filledicon lievo-lineicon">
			<g style="" data-svg-origin="15 49" transform="matrix(1,0,0,1,0,0)">
				<g>
					<path fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" d="M30,15H17l1.88,32c0.06,1.1,1.01,2,2.12,2h18c1.1,0,2.05-0.89,2.12-2L43,15H30" style=""></path>
                    <line class="lievo-altstroke" fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" x1="24" y1="23" x2="24" y2="41" style=""></line>
                    <line class="lievo-altstroke" fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" x1="30" y1="23" x2="30" y2="41" style=""></line>
                    <line class="lievo-altstroke" fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" x1="36" y1="23" x2="36" y2="41" style=""></line>
				</g>
                <g style="" data-svg-origin="15 15" transform="matrix(1,0,0,1,0,0)">
					<path fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" d="M25,15v-3c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v3" style=""></path>
                    <line fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" x1="15" y1="15" x2="45" y2="15" style=""></line>
				</g>
			</g>
		</g>


	<rect x="-20" y="-19" width="4" height="4" class="lievo-checkshift lievo-donotdraw lievo-nohoverstroke lievo-nohovercolor" style="stroke-width: 2px; stroke-linecap: butt; stroke-linejoin: round; opacity: 0;" fill="none" stroke="#596778" stroke-width="2.5px"></rect></g></g></g></g>

                            <desc>LivIcons Evolution</desc><defs></defs></svg>
                    </div>
                    <div class="action action__close">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="16" height="16"
                             viewBox="0 0 172 172"
                             style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#727e8c"><path d="M31.4975,21.715l-9.7825,9.7825l54.5025,54.5025l-54.825,54.9325l9.675,9.675l54.9325,-54.825l54.825,54.825l9.7825,-9.7825l-54.825,-54.825l54.5025,-54.5025l-9.7825,-9.7825l-54.5025,54.5025z"></path></g></g></svg>
                    </div>
                </div>
            </div>
            <div class="additional-info__content__tabs">
                <div class="tabs__headers">
                    <div class="tab__header">
                        Details
                    </div>
                    <div class="tab__header">Activity</div>
                </div>
                <div class="tabs__contents">
                    <div class="tabs__contents tabs__contents_details">

                    </div>
                    <div class="tabs__contents tabs__contents_activity">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdditionalInfoComponent"
    }
</script>

<style lang="scss" scoped>
    .additional-info {
        width: 100%;
        height: 100%;
        box-shadow: -8px 0 18px 0 rgba(25,42,70,.13);
        border-radius: 0 .25rem .25rem 0;

        .additional-info__content {
            height: 100%;
            background: #fff;

            .additional-info__content__header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: .25rem .25rem 0 0;
                border-bottom: 1px solid #EDEDED;
                padding: 1rem 1.5rem;

                .title {
                    font-size: .95rem;
                }

                .actions {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;

                    .action {
                        height: 22px;
                        width: 22px;
                        margin-left: .5rem;
                        cursor: pointer;

                        svg {
                            width: 100%;
                            height: 100%;

                            * {
                                transition: all .3s ease-in-out;
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

                        &.action__close {
                            height: 16px;

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
            }

            .additional-info__content__tabs {
                .tabs__headers {
                    display: flex;
                    border-bottom: 1px solid #EDEDED;

                    .tab__header {
                        width: 100%;
                        padding: .7rem 0;
                        text-align: center;
                        border-right: 1px solid #EDEDED;
                        font-size: .85rem;
                        font-weight: 400;
                        cursor: pointer;
                        transition: all .3s ease-in-out;

                        &:hover {
                            color: #5A8DEE;
                        }

                        &:last-of-type {
                            border-right: none;
                        }

                        &.active {
                            color: #5A8DEE;
                        }
                    }
                }
            }
        }
    }
</style>