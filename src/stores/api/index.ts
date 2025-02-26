import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ApiStoreState {
	apiKey?: string;
	setApiKey: (key?: string) => void;
	quota: number;
	setQuota: (val: number) => void;
}

const useApiStore = create<ApiStoreState>()(
	persist(
		(set) => ({
			apiKey: undefined,
			setApiKey: (key) => set({ apiKey: key }),
			quota: 0,
			setQuota: (val) => set({ quota: val }),
		}),
		{
			name: "api-store",
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export default useApiStore;
