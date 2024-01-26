import { useCallback } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="xl">
        <b className="xl1">CO-OPCONNECT</b>
        <div className="xl2">{`Where Students, Educators and Employers              Thrive Together `}</div>
        <Button
          className="button4"
          variant="solid"
          colorScheme="teal"
          onClick={onButtonClick}
        >
          Sign In
        </Button>
        <b className="md">Already have an Account?</b>
        <div className="md1">Dont Have an Account?</div>
        <Button
          className="button5"
          variant="solid"
          colorScheme="teal"
          onClick={onButton1Click}
        >
          Get Started!
        </Button>
        <b className="md2">Jobs Available Right Now!</b>
        <div className="sample-job">
          <img className="sample-job-icon" alt="" src="/sample-job.svg" />
          <div className="info">
            <p className="info-info-info">{`info info info info info info info info info `}</p>
            <p className="info-info-info">{`info info info info info info info info info `}</p>
            <p className="info-info-info">{`info info info info info info info info info  `}</p>
          </div>
          <b className="location">Toronto, ON</b>
          <img className="picture-icon" alt="" src="/picture.svg" />
          <b className="md3">Website Designer</b>
          <Button
            className="button6"
            variant="solid"
            w="105px"
            colorScheme="teal"
          >
            {" "}
            APPLY NOW
          </Button>
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
        <div className="sample-job1">
          <img className="sample-job-icon" alt="" src="/sample-job.svg" />
          <div className="info">
            <p className="info-info-info">{`info info info info info info info info info `}</p>
            <p className="info-info-info">{`info info info info info info info info info `}</p>
            <p className="info-info-info">{`info info info info info info info info info  `}</p>
          </div>
          <b className="location">Toronto, ON</b>
          <img className="picture-icon" alt="" src="/picture.svg" />
          <b className="md3">Website Designer</b>
          <Button
            className="button6"
            variant="solid"
            w="105px"
            colorScheme="teal"
          >
            {" "}
            APPLY NOW
          </Button>
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
        <Button
          className="what-is-co-op"
          variant="outline"
          w="235px"
          colorScheme="teal"
        >
          What is a CO-OP?
        </Button>
        <Button
          className="contacty-us"
          variant="outline"
          w="235px"
          colorScheme="teal"
        >
          Contact us
        </Button>
        <Button
          className="button8"
          variant="outline"
          w="235px"
          colorScheme="teal"
        >
          More Info about us
        </Button>
        <div className="sample-job2">
          <img className="sample-job-icon" alt="" src="/sample-job.svg" />
          <div className="info">
            <p className="info-info-info">{`info info info info info info info info info `}</p>
            <p className="info-info-info">{`info info info info info info info info info `}</p>
            <p className="info-info-info">{`info info info info info info info info info  `}</p>
          </div>
          <b className="location">Toronto, ON</b>
          <img className="picture-icon" alt="" src="/picture.svg" />
          <b className="md3">Website Designer</b>
          <Button
            className="button6"
            variant="solid"
            w="105px"
            colorScheme="teal"
          >
            {" "}
            APPLY NOW
          </Button>
          <img className="icon3" alt="" src="/icon.svg" />
        </div>
        <img className="logo-1-icon" alt="" src="/logo-1@2x.png" />
      </div>
    </div>
  );
};

export default LandingPage;
