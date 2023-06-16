<template>
	<div class="dj-aside shrink0">
		<div class="element" v-for="aaa in elements" :key="aaa.name">
			<p class="pt10 pb10">
				<i class="iconfont pr5" :class="aaa.icon"></i>
				<span>{{ aaa.name }}</span>
			</p>
			<ul class="ul flex">
				<draggable :group="{ name: 'people', pull: 'clone', put: false }" :clone="cloneDog" :list="aaa.child" item-key="name" @start="dragging = true" @end="dragging = false">
					<template #item="{ element }">
						<li class="fxmiddle">
							<i class="iconfont pr5 dj-model-icon" :class="element.icon"></i>
							<span class="dj-model-name">{{ element.name }}</span>
						</li>
					</template>
				</draggable>
			</ul>
		</div>
	</div>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { elements } from './index'
let props = defineProps(['config'])
let dragging = ref(false)
let fieldId = 0
function cloneDog(item: any) {
	fieldId++
	let temp = {
		id: fieldId,
		...item,
		_label: item.name,
		_prop: `field${fieldId}`,
		_span: 12,
		_type: item.type,
		_placeholder: `请输入${item.name}`
	}
	if (['checkbox', 'radio', 'select'].includes(item.type)) {
		temp._list = [
			{
				label: '咖啡',
				value: 'coffee',
				disabled: false
			},
			{
				label: '牛奶',
				value: 'milk',
				disabled: false
			}
		]
	}
	props.config.currentElement = temp
	return temp
}
</script>
<style lang="scss">
.dj-aside {
	padding: 0 10px;
	width: 230px;
	.ul {
		flex-wrap: wrap;
		li {
			width: 110px;
			padding: 5px;
			background: #eee;
			border-radius: 4px;
			box-sizing: border-box;
			height: 28px;
			font-size: 14px;
			margin-bottom: 10px;
			&:nth-child(odd) {
				margin-right: 10px;
			}
			cursor: move;
		}
	}
}
</style>
