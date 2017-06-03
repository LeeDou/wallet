// index

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import moduleA from './moduleA'

Vue.use(Vuex)

// const moduleA = {
// 	state: {
// 		count:1,
// 		message:''
// 	},
// 	mutations : {
// 		ince (state,date) {
// 			state.count += date
// 		}
// 	},
// 	actions : {
// 		// ince ({}) {
// 		// 	context.commit('ince')
// 		// }
// 		ince :({commit},e) => {
// 			commit('ince',5 )
// 		}
// 	},
// 	getters: {
// 		// doubleCount (state) {
// 		// 	return state.count *2
// 		// }
// 	}
// }

const state = {
	user : {
		name:'kantle',
		no:'188****3800'
	},
	assets:0,
	tearnings:0.0,
	yearnings:0.0

}

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		a: moduleA
	}
})

export default store