import React, { forwardRef } from 'react'

import Menu from './menu'

const Navigation = forwardRef((props, ref) => {
	return <Menu {...props} ref={ref} />
})

Navigation.displayName = `Navigation`

export default Navigation
