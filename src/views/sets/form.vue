<template>
	<el-form :model="config.form" label-width="120px">
		<el-form-item label="表单名">
			<el-input v-model="config.form.ref" placeholder="请输入表单名"></el-input>
		</el-form-item>
		<el-form-item label="表单模型">
			<el-input v-model="config.form.model" placeholder="请输入表单模型"></el-input>
		</el-form-item>
		<el-form-item label="校验模型">
			<el-input v-model="config.form.rules" placeholder="请输入校验模型"></el-input>
		</el-form-item>
		<el-form-item label="表单尺寸">
			<el-radio-group v-model="config.form.size">
				<el-radio-button label="small">较小</el-radio-button>
				<el-radio-button label="normal">中等</el-radio-button>
				<el-radio-button label="large">较大</el-radio-button>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="标签对齐">
			<el-radio-group v-model="config.form.labelPosition">
				<el-radio-button label="left">左对齐</el-radio-button>
				<el-radio-button label="right">右对齐</el-radio-button>
				<el-radio-button label="top">顶部对齐</el-radio-button>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="标签宽度（px）">
			<el-input-number v-model="config.form.labelWidth" controls-position="right" class="width100" />
		</el-form-item>
		<el-form-item label="栅格间隔">
			<el-input-number v-model="config.form.gutter" controls-position="right" class="width100" :min="0" />
		</el-form-item>
		<el-form-item label="表单禁用">
			<el-switch v-model="config.form.disabled"></el-switch>
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
