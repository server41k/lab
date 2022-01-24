<template> 
	<v-container>
		<v-layout row> 
    <v-flex xs12 sm2 offset-sm6 class="mt-5" v-if="loading">
	<v-progress-circular 
		:size="70"
		:width="7"
		color="primary"
		indeterminate
		></v-progress-circular>
	</v-flex>
<v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
...
</v-flex>
<v-flex xs12 sm6 offset-sm3 v-else>
<h1 class="text--secondary">You hane no orders</h1>
</v-flex>
</v-layout> 

	</v-container>
</template>
<script>
export default {
	computed: {
		loading () {
			return this.$store.getters.loading
		},
		orders () {
			return this.$store.getters.order
		}
	},
	methods: {
		markDone(order) {
	this.$store.dispatch('markOrderDone', order.id)
	.then(() => {
		order.done = true
	})
	.catch(() => {})
}
	},getters: {
	doneOrders (state) {
		return state.orders.filter(order => order.done)
		},
	undoneOrders(state) {
		return state.orders.filter(order => !order.done)
		},
	orders (state, getters) {	return getters.undoneOrders.concat(getters.doneOrders)
		}
},
created () {
		this.$store.dispatch('fetchOtders')
	}
} 
</script>

