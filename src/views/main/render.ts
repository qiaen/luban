import { ElInput, ElCol, ElFormItem, ElSwitch, ElRate, ElColorPicker, ElSlider, ElInputNumber } from 'element-plus'
let config: any = {
	switch: {
		el: ElSwitch
	},
	rate: {
		el: ElRate
	},
	color: {
		el: ElColorPicker
	},
	slider: {
		el: ElSlider
	}
}
function placeholder(type: any, _label: any) {
	if (['input', 'textarea', 'password'].includes(type)) {
		return `请输入${_label}`
	} else if (['select'].includes(type)) {
		return `请选择${_label}`
	} else {
		return ''
	}
}
function ren(element: any, model: any) {
	let { type, _label, _prop } = element
	let p = placeholder(type, _label)
	if (['input', 'textarea', 'password'].includes(type)) {
		return h(ElInput, {
			placeholder: `请输入${_label}`,
			type,
			modelValue: model[_prop]
		})
	} else if (['switch', 'rate', 'color', 'slider'].includes(type)) {
		return h(config[type].el, {
			modelValue: model[_prop]
		})
	}
}
export default (props: any) => {
	let { element, model, currentElement } = props
	let html = h(
		ElCol,
		{
			span: element._span
		},
		h(
			ElFormItem,
			{
				class: currentElement.id === element.id ? 'selected-li' : null,
				prop: element._prop,
				label: element._label
			},
			ren(element, model)
		)
	)
	return html
}
