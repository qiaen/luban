<template>
	<main class="dj-main flex1 pt15">
		<el-form ref="elForm" :model="formData" :rules="rules" :disabled="config.form.disabled" :size="config.form.size" :label-width="config.form.labelWidth" style="width: 100%">
			<el-row :gutter="config.form.gutter">
				<draggable
					v-bind="dragOptions"
					group="people"
					:component-data="{ type: 'transition-group', name: !dragging ? 'flip-list' : null }"
					:list="config.elements"
					item-key="name"
					@start="dragging = true"
					@end="dragging = false"
					class="drag-board"
				>
					<template #item="{ element }">
						<el-col :span="element._span" @click="setCurrt(element)">
							<el-form-item :class="config.currentElement.id === element.id ? 'selected-li' : null" :label="element._label" :prop="element._prop">
								<el-input v-if="element.type == 'input'" v-model="formData[element._prop]" :placeholder="`请输入${element._label}`"></el-input>
								<el-input v-if="element.type == 'textarea'" type="textarea" v-model="formData[element._prop]" :placeholder="`请输入${element._label}`" :autosize="{ minRows: 4, maxRows: 4 }"></el-input>
								<el-input v-if="element.type == 'password'" type="password" v-model="formData[element._prop]" :placeholder="`请输入${element._label}`"></el-input>
								<el-switch v-if="element.type == 'switch'" v-model="formData[element._prop]"></el-switch>
								<el-select v-if="element.type == 'select'" v-model="formData[element._prop]" :placeholder="`请选择${element._label}`">
									<el-option v-for="(item, index) in element._list" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
								</el-select>
								<el-rate v-if="element.type == 'rate'" v-model="formData[element._prop]" />
								<el-checkbox-group v-if="element.type == 'checkbox'" v-model="formData[element._prop]">
									<el-checkbox v-for="(item, index) in element._list" :key="index" :disabled="item.disabled" :label="item.label" />
								</el-checkbox-group>
								<el-radio-group v-if="element.type == 'radio'" v-model="formData[element._prop]">
									<el-radio v-for="(item, index) in element._list" :key="index" :disabled="item.disabled" :label="item.label" />
								</el-radio-group>
								<el-button v-if="element.type == 'button'" type="primary" :icon="Pointer">按钮</el-button>
								<el-input-number v-if="element.type == 'number'" v-model="formData[element._prop]" :step="1" :controls-position="element._controlsPosition" />
								<el-time-picker v-if="element.type == 'time'" v-model="formData[element._prop]" :placeholder="`请选择${element._label}`" />
								<el-time-picker v-if="element.type == 'timerange'" v-model="formData[element._prop]" is-range range-separator="To" start-placeholder="开始时间" end-placeholder="结束时间" />
								<el-date-picker v-if="element.type == 'date'" v-model="formData[element._prop]" type="date" :placeholder="`请选择${element._label}`" :size="element._size" />
								<el-date-picker
									v-if="element.type == 'daterange'"
									v-model="formData[element._prop]"
									type="daterange"
									:placeholder="`请选择${element._label}`"
									:size="element._size"
									start-placeholder="开始时间"
									end-placeholder="结束时间"
								/>
								<el-color-picker v-if="element.type == 'color'" v-model="formData[element._prop]" />
								<el-upload v-if="element.type == 'upload'" v-model:file-list="formData[element._prop]" class="upload-demo" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple :limit="3">
									<el-button type="primary" :icon="UploadFilled">上传</el-button>
									<template #tip>
										<div class="el-upload__tip">请上传图片，大小不超过500KB</div>
									</template>
								</el-upload>
								<el-slider v-if="element.type == 'slider'" v-model="formData[element._prop]" />
								<el-cascader v-if="element.type == 'cascader'" v-model="formData[element._prop]" :options="_options" />
							</el-form-item>
						</el-col>
					</template>
				</draggable>
			</el-row>
		</el-form>
	</main>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { UploadFilled, Pointer } from '@element-plus/icons-vue'
let props = defineProps(['config'])
let dragging = ref(false)
let formData: any = reactive({})
let rules: any = reactive([])
let _options: any = [
	{
		value: 'shanghai',
		label: '上海市',
		children: [
			{
				value: 'huangpu',
				label: '黄浦区',
				children: [
					{
						value: 'huaihai',
						label: '淮海路'
					}
				]
			}
		]
	}
]
let dragOptions = {
	animation: 200,
	group: 'description',
	disabled: false,
	ghostClass: 'sortable-ghost'
}
function setCurrt(element: any) {
	props.config.currentElement = element
}
</script>
<style lang="scss">
.dj-main {
	padding: 0 10px;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	.drag-board {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		box-sizing: border-box;
		width: 100%;
		min-height: 100px;
		.el-form-item {
			padding: 10px;
		}
	}
	.sortable-ghost {
		height: 57px;
		border-top: 3px solid var(--el-color-success);
		width: 100%;
		background-color: var(--el-color-success-light-9);
		position: relative;
		.dj-model-name {
			display: none;
		}
		.dj-model-icon {
			position: absolute;
			left: 0px;
			top: 0px;
		}
	}

	.flip-list-move {
		transition: transform 0.5s;
	}

	.no-move {
		transition: transform 0s;
	}
	.selected-li {
		background: var(--el-color-success-light-9);
		border-radius: 4px;
	}
}
</style>
