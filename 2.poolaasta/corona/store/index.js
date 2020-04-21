export const state = () => ({
  countries: [],
  global: [],
  filters: {
   search: '',
   sort: ''
  },
  timeline: {
    confirmed: [],
    deaths: [],
    recovered: []
  }
});

export const mutations = {
  SET_COUNTRIES(state, payload){
    state.countries = payload;
  },

  SET_GLOBAL(state, payload){
    state.global = payload;
  },

  SET_SEARCH_FILTER(state, payload){
    state.filters.search = payload;
  },

  SET_SORT_FILTER(state, payload){
    state.filters.sort = payload;
  },

  SET_CONFIRMED_TIMELINE(state, payload){
    state.timeline.confirmed = payload;
  },

  SET_DEATHS_TIMELINE(state, payload){
    state.timeline.deaths = payload;
  },

  SET_RECOVERED_TIMELINE(state, payload){
    state.timeline.recovered = payload;
  }
};

export const actions = {
  fetchStatistics(context){
    this.$axios.$get('https://api.covid19api.com/summary').then(response =>{
      context.commit('SET_COUNTRIES', response.Countries);
      context.commit('SET_GLOBAL', response.Global);
    });
  },

  fetchConfirmedTimeline({commit}, slug){
    this.$axios.$get(`https://api.covid19api.com/dayone/country/${slug}/status/confirmed/live`).then(response =>{
      commit('SET_CONFIRMED_TIMELINE', response);
    });
  },

  fetchDeathsTimeline({commit}, slug){
    this.$axios.$get(`https://api.covid19api.com/dayone/country/${slug}/status/deaths/live`).then(response =>{
      commit('SET_DEATHS_TIMELINE', response);
    });
  },

  fetchRecoveredTimeline({commit}, slug){
    this.$axios.$get(`https://api.covid19api.com/dayone/country/${slug}/status/recovered/live`).then(response =>{
      commit('SET_RECOVERED_TIMELINE', response);
    });
  }
};

export const getters = {
  timelineLabels(state){
    return state.timeline.confirmed.map(data => data.Date);
  },

  timelineConfirmed(state){
    return state.timeline.confirmed.map(data => data.Cases);
  },

  timelineDeaths(state){
    return state.timeline.deaths.map(data => data.Cases);
  },

  timelineRecovered(state){
    return state.timeline.recovered.map(data => data.Cases);
  },

  globalAsCountry(state){
    return {Country:'World', Slug: 'world', ...state.global};
  },

  filteredCountries(state){
    return state.countries.filter(country => {
      let len = state.filters.search.length;
      return country.Country.substr(0, len).toLowerCase().trim() === state.filters.search.toLowerCase().trim();
    });
  },

  sortedCountries(state, getters){
    let countries = JSON.parse(JSON.stringify(getters.filteredCountries));
    return countries.sort((a, b) => {
      if(a[state.filters.sort] > b[state.filters.sort]){
        return -1;
      }

      if (a[state.filters.sort] < b[state.filters.sort]){
        return 1;
      }

      return 0;
    });
  }
};
