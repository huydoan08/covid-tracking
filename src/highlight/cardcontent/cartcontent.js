import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'

export default function CartContent({title, count}) {
	return (
				<Card>
					<CardContent>
						<Typography variant="body2">{title}</Typography>
						<Typography variant="body2">{count}</Typography>
					</CardContent>
				</Card>
	)
}
