<template>
	<el-config-provider :locale="zhCn">
		<nav class="flex dj-nav">
			<div class="icon flex fxmiddle pl10">
				<img src="https://mulan.diumx.com/img/dt-7.png" alt="" />
				<div>
					<b>李白</b>
					<p class="fsize12 fc999">基于ElementUI Plus的表单生成器</p>
				</div>
			</div>
			<div class="flex1 txright pr10" style="line-height: 49px">
				<a class="fc999 fsize14" target="blank" href="https://beian.miit.gov.cn">豫ICP备18004249号-2</a>
			</div>
		</nav>
		<div class="full-content hideit flex">
			<dj-aside :config="config"></dj-aside>
			<dj-main :config="config"></dj-main>
			<dj-sets :config="config"></dj-sets>
			<!-- <re></re> -->
		</div>
	</el-config-provider>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import djSets from './views/sets/index.vue'
import djMain from './views/main/index.vue'
import djAside from './views/aside/index.vue'
// import re from './views/main/render.vue'
const config = reactive({
	currentElement: {},
	elements: [],
	form: {
		ref: 'refForm',
		model: 'formData',
		rules: 'rules',
		size: 'normal',
		labelPosition: 'right',
		labelWidth: 100,
		gutter: 10,
		disabled: false,
		button: true
	}
})
</script>
<style lang="scss">
.dj-nav {
	height: 49px;
	border-bottom: 1px solid #eee;
	.icon {
		img {
			height: 28px;
		}
	}
}
</style>
