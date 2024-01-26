import { useCallback } from "react";
import { Input, Button, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className="sign-up-page">
      <div className="lg-breakpoint1">
        <div className="sm-container1">
          <b className="sign-up-to">Sign up to CO-OPCONNECT</b>
          <div className="form1">
            <div className="formcontrol2">
              <div className="label3">Email address</div>
              <Input className="input7" placeholder="you@domain.com" />
            </div>
          </div>
          <div className="formcontrol3">
            <div className="label3">First and Last Name</div>
            <Input className="input7" placeholder="first last" />
          </div>
          <Button
            className="button18"
            variant="solid"
            w="400px"
            colorScheme="teal"
            onClick={onButtonClick}
          >
            Sign up
          </Button>
        </div>
        <div className="formcontrol4">
          <div className="label3">Password</div>
          <Input className="input7" />
        </div>
        <img className="logo-1-icon3" alt="" src="/logo-1@2x.png" />
      </div>
    </div>
  );
};

export default SignUpPage;
