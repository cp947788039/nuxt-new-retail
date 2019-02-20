<style lang="less" scoped>
.slidebox{
	width: 100%;
	position: relative;
	.slideshow{
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		z-index: 2;
		ul,li,a{
			width: inherit;
			height: inherit;
			display: block;
		}
		li{
			transition: all 1s ease-in-out;
		}
		img{
			width: 100%;
			height: auto;
			display: block;
		}
	}
	.slidelist{
		width: 100%;
		position: absolute;
		left:0;
		bottom:0.1rem;
		z-index: 3;
		ul{
			text-align: center;
			li{
				display: inline-block;
				width: 0.16rem;
				height: 0.16rem;
				min-width: 8px;
				min-height: 8px;
				border-radius: 50%;
				margin:0 0.05rem;
				background: #fff;
				cursor: pointer;
				&.active{
					background: #fdd10d;
				}
			}
		}
	}
	.item-btn{
		width: 40px;
		height: 40px;
		background-image: url(/images/icon/spirit.png);
		background-repeat: no-repeat;
		background-size:700px 1200px;
		position: absolute;
		top:50%;
		transform: translateY(-50%);
		cursor: pointer;
		z-index: 5;
		display: none;
		&.prev{
			left:80px;
			background-position: left top;
			&:hover{
				background-position: left -54px;
			}
		}
		&.next{
			right:80px;
			background-position: -54px top;
			&:hover{
				background-position: -54px -54px;
			}
		}
	}
}
</style>
<template>
<div class="slidebox" :style="{height:slideH}" @mouseenter="mouseenter" @mouseleave="mouseleave">
	<div class="slideshow">
		<ul>
			<li v-for="(item,index) in imgArr" :key="index">
				<a :href="item.href" v-if="item.href"><img :src="item.src" :alt="item.alt"></a>
				<img :src="item.src" :alt="item.alt" v-else>
			</li>
		</ul>
	</div>
	<div class="item-btn prev" @click="showPrev"></div>
	<div class="item-btn next" @click="showNext"></div>
	<div class="slidelist">
		<ul>
			<li v-for="(item,index) in imgArr" :key="index" @click="showDot(index)"></li>
		</ul>
	</div>
</div>
</template>
<script>
export default {
	props: {
		slideH: {
			type: String,
			default: '4.5rem',
		},
		// 参数说明：[{src:'',href:'',alt:''}]，如果没有href参数，则不会显示a标签
		imgArr: {
			type: Array,
			default: function() {
				return [];
			},
		},
	},
	data() {
		return {
			effect: 'fade',
			autoPlay: true,
			interTime: 6000,
			defaultIndex: 0,
			titCell: '',
			mainCell: '',
			scroll: 1,
			vis: 1,
			titOnClassName: 'active',
			itemCell: '.item-btn',
			mainCellSize: 0,
			cloneNum: 0,
			timer: null,
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.init();
		});
	},
	methods: {
		init() {
			// 获取主体盒子
			this.mainCell = $('.slideshow ul');
			// 获取小圆点
			this.titCell = $('.slidelist ul');
			// 获取幻灯子元素个数
			this.mainCellSize = this.mainCell.children().size();
			// 获取克隆元素个数
			this.cloneNum = this.mainCellSize>=this.vis?( this.mainCellSize%this.scroll!=0?this.mainCellSize%this.scroll:this.scroll):0;
			// 根据不同的幻灯片类型显示不同的默认样式
			this.showDefaultCss();
			// 开启定时器自动播
			this.autoPlayShow();
		},
		autoPlayShow() {
			// 开启定时器自动播，同时通过autoPlay控制是否自动播
			if(this.autoPlay){
				this.timer = setInterval(() => {
					this.showNext();
				},this.interTime);
			}
		},
		mouseenter() {
			this.mainCell.parent().parent().find(this.itemCell).fadeIn();
			clearInterval(this.timer);
		},
		mouseleave() {
			this.mainCell.parent().parent().find(this.itemCell).fadeOut();
			this.autoPlayShow();
		},
		showDefaultCss() {
			switch(this.effect){
				case 'leftLoop':

					break;
				case 'fade':
					this.mainCell.children().eq(0).css({'position':'absolute','left':0,'top':0,'z-index':2,'opacity':1}).siblings().css({'position':'absolute','left':0,'top':0,'z-index':1,'opacity':0});
					this.titCell.children().eq(0).addClass(this.titOnClassName).siblings().removeClass(this.titOnClassName);
					break;
			}
		},
		showDot(index) {
			this.defaultIndex = index;
			this.doPlay();
		},
		showPrev() {
			if(this.defaultIndex==0){
				this.defaultIndex = this.mainCellSize;
			}
			this.defaultIndex--;
			this.doPlay();
		},
		showNext() {
			if(this.defaultIndex==this.mainCellSize-1){
				this.defaultIndex = -1;
			}
			this.defaultIndex++;
			this.doPlay();
		},
		cloneEle() {
			for( let i=0; i<this.vis ; i++ ){
				this.mainCell.children().eq(i).clone().addClass("clone").appendTo(this.mainCell); 
			} 
			for( let i=0; i<cloneNum ; i++ ){ 
				this.mainCell.children().eq(this.mainCellSize-i-1).clone().addClass("clone").prependTo(this.mainCell); 
			}
		},
		doPlay() {
			switch(this.effect){
				case 'leftLoop':

					break;
				case 'fade':
					this.mainCell.children().eq(this.defaultIndex).css({
						'z-index':2,
						'opacity':1
					}).siblings().css({
						'z-index':1,
						'opacity':0
					});
					this.titCell.children().eq(this.defaultIndex).addClass(this.titOnClassName).siblings().removeClass(this.titOnClassName);
					break;
			}
			
		},
	},
}
</script>