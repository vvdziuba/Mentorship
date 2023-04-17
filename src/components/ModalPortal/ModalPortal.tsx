import React, { useEffect } from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import ReactDOM from "react-dom";

export default function ModalPortal({
  isOpen,
  setShowModal,
  coinName,
  coinId,
  explorer,
  rank,
  changePercent24Hr,
  symbol,
}: {
  isOpen: boolean;
  setShowModal: (status: boolean) => void;
  coinName: string;
  coinId: string;
  explorer: string;
  rank: string;
  changePercent24Hr: string;
  symbol: string;
}) {
  const [open] = React.useState<boolean>(isOpen);
  console.log(isOpen);
  return ReactDOM.createPortal(
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setShowModal(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            minWidth: 300,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            {coinName}
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <p>Coin id: {coinId}</p>
            <p>Symbol: {symbol}</p>
            <p>Rank: {rank}</p>
            <p>
              Link:{" "}
              <a target="_blank" href={explorer}>
                {explorer}
              </a>
            </p>
            <p>Change Percent 24Hr: {Number(changePercent24Hr).toFixed(5)}</p>
          </Typography>
        </Sheet>
      </Modal>
    </>,
    document.getElementById("PortalModal")!
  );
}
