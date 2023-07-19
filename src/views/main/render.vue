<script lang="ts">
import { ElInput } from 'element-plus';

export default {
	setup() {
		return () => h(ElInput, { placeholder: '请输入' })
	}
}
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
