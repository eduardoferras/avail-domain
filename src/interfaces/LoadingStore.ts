export default interface LoadingStore {
	isLoading: boolean;
	actions: {
		setLoading: (isLoading: boolean) => void;
	};
}
