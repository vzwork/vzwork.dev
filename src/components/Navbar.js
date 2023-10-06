import { Box, Button, ButtonGroup } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { PageContext } from "../contexts/PageContext/PageContext";

export default function Navbar() {
  const nav = useNavigate();
  const pageContext = useContext(PageContext);

  const [prevScrollLocation, setPrevScrollLocation] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setVisible(true);
      } else {
        if (window.scrollY > prevScrollLocation) {
          setVisible(false);
          setPrevScrollLocation(window.scrollY);
        } else if (window.scrollY + 20 < prevScrollLocation) {
          setVisible(true);
          setPrevScrollLocation(window.scrollY);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollLocation]);

  useEffect(() => {
    // console.log(prevScrollLocation);
  });

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 4,
        top: "1rem",
        left: "50vw",
        transform: "translateX(-50%)",
      }}
    >
      <Box
        sx={{
          transform: `${
            visible ? "translateY(0)" : "translateY(calc(-101% - 1rem))"
          }`,
          transition: "transform 500ms ease-in-out",
        }}
        bgcolor="bg.clear"
      >
        <ButtonGroup variant="text" color="secondary">
          <Button
            sx={{ width: "60px" }}
            onClick={async () => {
              await pageContext.animateIn();
              window.scrollTo(0, 0);
              nav("/");
              await pageContext.animateOut();
            }}
          >
            home
          </Button>
          <Button
            sx={{ width: "60px" }}
            onClick={async () => {
              await pageContext.animateIn();
              window.scrollTo(0, 0);
              nav("/agi");
              await pageContext.animateOut();
            }}
          >
            agi
          </Button>
          <Button
            sx={{ width: "60px" }}
            onClick={async () => {
              await pageContext.animateIn();
              window.scrollTo(0, 0);
              nav("/ds");
              await pageContext.animateOut();
            }}
          >
            ds
          </Button>
          <Button
            sx={{ width: "60px" }}
            onClick={async () => {
              await pageContext.animateIn();
              window.scrollTo(0, 0);
              nav("/de");
              await pageContext.animateOut();
            }}
          >
            de
          </Button>
          <Button
            sx={{ width: "60px" }}
            onClick={async () => {
              await pageContext.animateIn();
              window.scrollTo(0, 0);
              nav("/cs");
              await pageContext.animateOut();
            }}
          >
            cs
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
