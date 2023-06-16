<template>
	<div class="row">
		<!-- <draggable
			class="list-group"
			tag="transition-group"
			:component-data="{
				tag: 'ul',
				type: 'transition-group',
				name: !drag ? 'flip-list' : null
			}"
			v-model="list"
			v-bind="dragOptions"
			@start="drag = true"
			@end="drag = false"
			item-key="order"
		>
			<template #item="{ element }">
				<li class="list-group-item">
					<i :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click="element.fixed = !element.fixed" aria-hidden="true"></i>
					{{ element.name }}
				</li>
			</template>
		</draggable> -->
		<draggable v-bind="dragOptions" :group="{ name: 'people', pull: 'clone', put: false }" :list="list" item-key="name" @start="drag = true" @end="drag = false">
			<template #item="{ element }">
				<li class="list-group-item">
					<i :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click="element.fixed = !element.fixed" aria-hidden="true"></i>
					{{ element.name }}
				</li>
			</template>
		</draggable>
	</div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'

const message = ['vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based', 'on', 'Sortablejs'].map((name, index) => {
	return { name, order: index + 1 }
})
console.log(message)

let list = reactive(message)
let dragOptions = {
	animation: 200,
	group: 'description',
	disabled: false,
	ghostClass: 'ghost'
}
let drag = ref(false)
</script>

<style>
/* .button {
	margin-top: 35px;
}

.flip-list-move {
	transition: transform 0.5s;
}

.no-move {
	transition: transform 0s;
}

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}

.list-group {
	min-height: 20px;
}

.list-group-item {
	cursor: move;
}

.list-group-item i {
	cursor: pointer;
} */
</style>
