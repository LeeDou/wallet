// const moduleA = {
	const state = {
		foot: 10,
		tra: 10,
		stu:10,
		spt:10,
		oth:10,
		count:0,
		category: {}
	}
	const mutations = {
		addfoot (state,count) {
			state.foot = state.foot + parseInt(count);
		},
		addtra (state,count) {
			state.tra = state.tra + parseInt(count);
		},
		addstu (state,count) {
			state.stu = state.stu + parseInt(count);
		},
		addspt (state,count) {
			state.spt = state.stu + parseInt(count);
		},
		addoth (state,count) {
			state.oth = state.oth + parseInt(count);
		},
		addcategory(context) {
			var formdate = context.getters.category
			context
		}
	}
	const actions = {
		addfoot: ({commit},data) => {
			commit('addfoot',data)
		},
		addtra: ({commit},data) => {
			commit('addtra',data)
			// console.log(e.target.value)
		},
		addstu: ({commit},data) => {
			commit('addstu',data)
		},
		addspt: ({commit},data) => {
			commit('addspt',data)
		},
		addoth: ({commit},data) => {
			commit('addoth',data)
		}
	}
	const getters = {
		doubleCount (state) {
			return state.count *2
		},		
		foot : state => state.foot, 
		tra : state => state.tra,
		stu : state => state.stu,
		spt : state => state.spt,
		oth : state => state.oth	
	}

export default {
	state,
	getters,
	actions,
	mutations
}