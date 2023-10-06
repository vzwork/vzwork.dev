import { Box, Button } from "@mui/material";

export default function De() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "50vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "end" }}>
            <Box
              sx={{
                color: "secondary.main",
                fontSize: "5rem",
                lineHeight: "4rem",
              }}
            >
              E
            </Box>
            <Box sx={{ fontSize: "3rem", lineHeight: "3rem" }}>rror</Box>
          </div>
          <div>(invalid url)</div>
        </div>
      </Box>
    </Box>
  );
}
