import React from "react";
import { Grid } from "semantic-ui-react";

export const Column = React.forwardRef(({ children }, ref) => {
	return <Grid.Column ref={ref}>{children}</Grid.Column>;
});
