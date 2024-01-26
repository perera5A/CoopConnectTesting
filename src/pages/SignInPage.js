import { useCallback } from "react";
import { Input, Button, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./SignInPage.css";

const SignInPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  return (
    <div className="sign-in-page">
      <div className="lg-breakpoint">
        <div className="sm-container">
          <b className="sign-in-to">Sign in to CO-OPCONNECT</b>
          <div className="form">
            <div className="formcontrol">
              <div className="label1">Email address</div>
              <Input className="input5" placeholder="you@domain.com" />
            </div>
          </div>
          <Button
            className="button17"
            variant="solid"
            w="400px"
            colorScheme="teal"
            onClick={onButtonClick}
          >
            Sign in
          </Button>
        </div>
        <div className="formcontrol1">
          <div className="label1">Password</div>
          <Input className="input5" />
        </div>
        <img className="logo-1-icon2" alt="" src="/logo-1@2x.png" />
      </div>
    </div>
  );
};

export default SignInPage;
