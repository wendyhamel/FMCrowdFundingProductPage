window.fund = function() {
	return {
		menuOpened: false,
		menuItems: [
			{id:0, title: "About", url:"#"},
			{id:0, title: "Discover", url:"#"},
			{id:0, title: "Get Started", url:"#"}
		],
		backersTotal: 5007,
		daysLeft: 56,
		total: 100000,
		backedAmount: 89914,
		getBackedPercentage() {
			if(this.backedAmount < this.total ) {
				return Math.round((this.backedAmount / this.total) * 100).toFixed(2)
			}
			return 100
		},
		bookmarked: false,
		rewards: [
			{
				id: 0,
				title: "Pledge with no reward",
				description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
				minPledgeAmount: 0.01,
				stock: "unlimited",
			},
			{
				id: 1,
				title: "Bamboo Stand",
				description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
				minPledgeAmount: 25.00,
				stock: 101,
			},
			{
				id: 2,
				title: "Black Edition Stand",
				description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
				minPledgeAmount: 75.00,
				stock: 64,
			},
			{
				id: 3,
				title: "Mahogany Special Edition",
				description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
				minPledgeAmount: 200.00,
				stock: 0,
			},
		],
		modalActive: false,
		selectedRewardId: null,
		submitted: false,
		backers: [],
		pledgedAmount: null,
		makePledge(rewardId) {
			this.modalActive = true
			this.selectedRewardId = rewardId
		},
		showInUsDollars(amount) {
			return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(amount).replace(/(.|,)00$/g, '')
		},
		getPledgedAmount(selectedReward, pledgedAmount) {
			if(pledgedAmount) {
				if(Number(pledgedAmount) < selectedReward.minPledgeAmount) {
					alert('Sorry, the pledged amount must be greater than ' + selectedReward.minPledgeAmount + ' to get the ' + selectedReward.title + '.')
					return false
				} else {
					return pledgedAmount
				}
			} else {
				return pledgedAmount = selectedReward.minPledgeAmount
			}
		},
		submit(selectedReward, pledgedAmount) {
			let backer = {}
			this.pledgedAmount = Number(this.getPledgedAmount(selectedReward, pledgedAmount))
			backer.id = Date.now()
			backer.pledgedAmount = this.pledgedAmount
			backer.rewardId = selectedReward.id
			this.backers.push(backer)
			if(selectedReward.id !== 0) {
				this.rewards.find(reward => reward.id === selectedReward.id).stock--
			}
			this.backedAmount = this.backedAmount + this.pledgedAmount
			if(this.pledgedAmount) {
				this.submitted = true
			}
			this.pledgedAmount = null
			this.backersTotal++;

		},
	}
}