const moduleA = {
	state: {
		foot:10,
		tra:10,
		stu:10,
		spt:10,
		oth:10,
		count:0
	},
	mutations : {
		addfoot (state,count) {
			state.foot = state.foot + count;
		}
		addtra (state,count) {
			state.tra = state.tra + count;
		}
		addstu (state,count) {
			state.stu = state.stu + count;
		}
		addspt (state,count) {
			state.spt = state.stu + count;
		}
		addoth (state,count) {
			state.oth = state.oth + count;
		}
	},
	actions: {
		const cnname = ({commit}) => commit('newname')
		const setfoot = ({commit,}) 
		addfoot (state,count) {
			state.foot = state.foot + count;
		}
		addtra (state,count) {
			state.tra = state.tra + count;
		}
		addstu (state,count) {
			state.stu = state.stu + count;
		}
		addspt (state,count) {
			state.spt = state.stu + count;
		}
		addoth (state,count) {
			state.oth = state.oth + count;
		}
	},
	getters: {
		doubleCount (state) {
			return state.count *2
		}
	}
}