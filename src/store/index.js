// index

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

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
	mutations
})

export default store