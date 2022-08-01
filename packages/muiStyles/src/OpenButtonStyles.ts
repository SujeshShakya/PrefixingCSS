import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "8.688rem !important",
      height: "2.25rem !important",
      borderRadius: "4px",
      border: "solid 1px rgba(0, 0, 0, 0.12)",
      backgroundColor: "#fff",
    },
    label: {
      width: "5.938rem",
      height: "1rem",
      fontFamily: "Omnes-medium",
      fontSize: "0.875rem !important",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.14,
      letterSpacing: "normal",
      textAlign: "center",
      color: "#e42a68",
    },
  })
);

export default useStyles;
