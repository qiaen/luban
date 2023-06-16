<template>
	<section class="dj-section shrink0">
		<el-tabs v-model="activeName" class="demo-tabs">
			<el-tab-pane label="组件属性" name="element">
				<set-element :config="config"></set-element>
			</el-tab-pane>
			<el-tab-pane label="表单属性" name="form">
				<set-form :config="config"></set-form>
			</el-tab-pane>
		</el-tabs>
	</section>
</template>
<script lang="ts" setup>
import setElement from './element.vue'
import setForm from './form.vue'
let props = defineProps(['config'])
let activeName = ref('element')
let marks = {
	12: ''
}
</script>
<style lang="scss">
.dj-section {
	width: 370px;
	padding: 10px 15px 15px;
}
</style>
