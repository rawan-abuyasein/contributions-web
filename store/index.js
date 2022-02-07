export const state = () => ({
  orgsCount: 0,
  usersCount: 0,
  commitsLastMonth: 0,
  users: [],
  pageCount: 0,
  currentPage: 1,
  sortBy: 'score',
  period: 'last_30_days',
  chartPeriod: 'last_year',
})

export const getters = {
  getPageCount: (state) => state.pageCount,
  getCurrentPage: (state) => state.currentPage,
  getSortBy: (state) => state.sortBy,
  getPeriod: (state) => state.period,
  getChartPeriod: (state) => state.chartPeriod,
}

export const mutations = {
  setOrgsCount(state, orgsCount) {
    state.orgsCount = orgsCount
  },
  setUsers(state, users) {
    state.users = users
  },
  setUsersCount(state, usersCount) {
    state.usersCount = usersCount
  },
  setCommitsLastMonth(state, commitsLastMonth) {
    state.commitsLastMonth = commitsLastMonth
  },
  setPageCount(state, pageCount) {
    state.pageCount = pageCount
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage
  },
  setSortBy(state, sortBy) {
    state.sortBy = sortBy
  },
  setPeriod(state, period) {
    state.period = period
  },
  setChartPeriod(state, chartPeriod) {
    state.chartPeriod = chartPeriod
  },
}
