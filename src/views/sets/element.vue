<template>
	<el-form :model="config.currentElement" label-width="120px">
		<el-form-item label="组件类型">
			<el-select v-model="config.currentElement._type">
				<el-option-group v-for="group in elements" :key="group.name" :label="group.name">
					<el-option v-for="item in group.child" :key="item.name" :label="item.name" :value="item.type" />
				</el-option-group>
			</el-select>
		</el-form-item>
		<el-form-item label="字段名">
			<el-input v-model="config.currentElement._prop" placeholder="请输入字段名"></el-input>
		</el-form-item>
		<el-form-item label="标题">
			<el-input v-model="config.currentElement._label" placeholder="请输入标题"></el-input>
		</el-form-item>
		<el-form-item label="占位提示">
			<el-input v-model="config.currentElement._placeholder" placeholder="请输入占位提示"></el-input>
		</el-form-item>
		<el-form-item label="表单栅格">
			<div class="pl10 pr10">
				<el-slider v-model="config.currentElement._span" style="width: 238px" :min="0" :max="24" :step="1" :marks="marks" />
			</div>
		</el-form-item>
		<el-form-item label="标签宽度（px）" _labelWidth>
			<el-input-number v-model="config.currentElement._labelWidth" controls-position="right" class="width100" />
		</el-form-item>
		<el-form-item label="组件宽度" _labelWidth>
			<el-input v-model="config.currentElement._width" controls-position="right" class="width100" placeholder="请输入组件宽度，如200px、100%" />
		</el-form-item>
		<el-form-item label="默认值">
			<el-input v-model="config.currentElement._value" placeholder="请输入默认值"></el-input>
		</el-form-item>
	</el-form>
</template>
<script lang="ts" setup>
import { elements } from '../aside/index'
let props = defineProps(['config'])
let marks = {
	12: ''
}
</script>
<style lang="scss">
</style>
