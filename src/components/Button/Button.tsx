import { Box } from "@mui/material";
import "./Button.scss";
import { useNavigate } from "react-router-dom";
const ButtonCustom = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/");
  };
  return (
    <>
      <Box className='button_bro'>
        {" "}
        <button className='glowing-btn' onClick={handleChange}>
          <span className='glowing-txt'>
            <span className='faulty-letter'>N</span>G
            <span className='faulty-letter'>U</span>Y
            <span className='faulty-letter'>Ễ</span>N<span> </span>
            <span className='faulty-letter'>X</span>U
            <span className='faulty-letter'>Â</span>N<span> </span>
            <span className='faulty-letter'>L</span>Ộ
            <span className='faulty-letter'>C</span>
          </span>
        </button>
      </Box>
    </>
  );
};

export default ButtonCustom;
