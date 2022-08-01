import { Button } from "@material-ui/core";
import useStyles from "./OpenButtonStyles";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  seed: "muiStyles",
});

export default function Root(props) {
  const classes = useStyles();
  const classesNames = `${classes.root} ${classes.label}`;

  return (
    <StylesProvider generateClassName={generateClassName}>
      {" "}
      <Button className={classesNames}>Click Me!</Button>
    </StylesProvider>
  );
}
