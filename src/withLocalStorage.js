import React from 'react';

const withLocalStorage = WrappedComponent => {
	return props => (
		<WrappedComponent
			loadFromStorage={key => localStorage.getItem(key)}
			saveToStorage={(key, value) => localStorage.setItem(key, value)}
			removeFromStorage={key => localStorage.removeItem(key)}
			{...props}
		/>
	)
}
export default withLocalStorage;
