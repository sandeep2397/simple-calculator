import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField, Button, Typography, Box } from "@mui/material";
import { add } from "./stringCalculator";

// Styled Components using MUI
const Container = styled(Box)({
  textAlign: "center",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
});

const StyledTextField = styled(TextField)({
  width: "300px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ddd",
    },
    "&:hover fieldset": {
      borderColor: "#aaa",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#007bff",
    },
  },
});

const StyledButton = styled(Button)({
  marginLeft: "10px",
  padding: "10px 15px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "white",
  "&:hover": {
    backgroundColor: "#0056b3",
  },
});

export default function StringCalculatorComponent() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      setResult(error instanceof Error ? error.message : "Error");
    }
  };

  return (
    <Container>
      <Typography variant="h4">String Calculator</Typography>
      <Typography variant="body1">Enter numbers</Typography>
      <Typography variant="caption">
        {"Format: // [delimeter]\n[numbers]"}
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={2}
      >
        <StyledTextField
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter in this format ===> 1;2;3 or 1,2,3"
        />
        <StyledButton variant="contained" onClick={handleCalculate}>
          Calculate
        </StyledButton>
      </Box>
      <Typography variant="h5" mt={2}>
        Result: {result}
      </Typography>
    </Container>
  );
}
