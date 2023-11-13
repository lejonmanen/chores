
const withLocalStorage = WrappedComponent => {
	const wc = props => (
		<WrappedComponent
			loadFromStorage={key => localStorage.getItem(key)}
			saveToStorage={(key, value) => localStorage.setItem(key, value)}
			removeFromStorage={key => localStorage.removeItem(key)}
			{...props}
		/>
	)
	wc.displayName = 'WithLocalStorage'
	return wc
}
export default withLocalStorage;
