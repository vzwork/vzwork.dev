import { Box } from "@mui/material";
import LoadLetters from "./LoadLetters";

export default function PageNameAnimation(props) {
  return (
    <div>
      {props.words.map((word, idx) => (
        <div style={{ display: "flex", alignItems: "end" }} key={idx}>
          <Box
            sx={{
              color: "secondary.main",
              fontSize: "5rem",
              lineHeight: "4rem",
            }}
          >
            {word[0]}
          </Box>
          <Box sx={{ fontSize: "3rem", lineHeight: "3rem" }}>
            <LoadLetters string={word.slice(1)} />
          </Box>
        </div>
      ))}
    </div>
  );
}
