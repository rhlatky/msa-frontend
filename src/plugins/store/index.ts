import { createStore } from 'vuex'

export interface savedValues {
	values: {[key: string]: object}
}
export interface savedValuesPayload {
	key: string,
	value: object
}

export type State = {
	authToken: string | null;
	savedValues: {
		[key: string]: savedValues
	};
	sidebarOpen: boolean;
	value: number,
	selectedMessage: {[key: string]: object}
	selectedScenario: {[key: string]: object};
}

export const store = createStore({
	state: {
		authToken: null,
		savedValues: {
			messages: {
				type: "messages",
				values: {}
			},
			scenarios: {
				type: "scenarios",
				values: {}
			}
		},
		sidebarOpen: false,
		value: 3,
		selectedMessage: {
		},
		selectedScenario: {}
	},
	getters: {
		getValue: state => state.value,
		getToken: state => state.authToken,
		getSavedMessages: state => state.savedValues.messages,
		getSavedScenarios: state => state.savedValues.scenarios,
		getSidebarOpen: state => state.sidebarOpen,
		getSelectedMessage: state => state.selectedMessage,
		getSelectedScenario: state => state.selectedScenario,
		getSavedValues: state => state.savedValues
	},
	mutations: {
		toggleSidebar(state: State) {
			state.sidebarOpen = !state.sidebarOpen;
		},
		increaseValue(state: State){
			state.value += 1;
		},
		setToken: (state: State, token: string) => {
			state.authToken = token;
		},
		setSelectedMessage: (state: State, payload: savedValuesPayload) => {
			state.selectedMessage = {};
			state.selectedMessage[payload.key] = payload.value;
		},
		setSelectedScenario: (state: State, payload) => {
			state.selectedScenario = {};
			state.selectedScenario[payload.key] = payload.value;
		},
		saveValue: (state: State, payload) => {
			state.savedValues[payload.type].values[payload.name] = payload.value;
			localStorage.savedValues = JSON.stringify(state.savedValues);
		},
		initialiseStore: (state: State) => {
			if (localStorage.savedValues) {
				state.savedValues = JSON.parse(localStorage.savedValues);
			}
		},
		removeSavedValue: (state: State, payload) => {
			delete state.savedValues[payload.type].values[payload.key];
			localStorage.savedValues = JSON.stringify(state.savedValues);
		},
	},
});
