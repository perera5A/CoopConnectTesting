import { useCallback } from "react";
import { Input, Button, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./MyProfile.css";

const MyProfile = () => {
  const navigate = useNavigate();

  const onChildrenTextClick = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  const onChildrenText2Click = useCallback(() => {
    // Please sync "Messaging" to the project
  }, []);

  const onButton3Click = useCallback(() => {
    // Please sync "Documents" to the project
  }, []);

  const onButton4Click = useCallback(() => {
    // Please sync "Reflections" to the project
  }, []);

  return (
    <div className="my-profile">
      <div className="sm">
        <b className="md6">{`Personal Information `}</b>
        <Input
          className="input1"
          placeholder="First Name"
          width="400px"
          w="400px"
        />
        <Input
          className="input2"
          placeholder="Last Name"
          width="400px"
          w="400px"
        />
        <Input
          className="input3"
          placeholder="School"
          width="400px"
          w="400px"
        />
        <Input
          className="input4"
          placeholder="Email Address "
          width="400px"
          w="400px"
        />
        <Button className="button12" variant="solid" colorScheme="teal">
          Save Changes
        </Button>
        <div className="tabs2">
          <div className="tabs3">
            <div className="tab6">
              <div className="children8">Job Page</div>
            </div>
            <div className="tab7">
              <div className="children9" onClick={onChildrenTextClick}>
                My Profile
              </div>
            </div>
            <div className="tab8">
              <div className="children9" onClick={onChildrenText2Click}>
                Messaging
              </div>
            </div>
          </div>
        </div>
        <div className="tabs4">
          <div className="tabs5">
            <Button variant="solid" colorScheme="teal">
              Job Page
            </Button>
            <Button variant="solid" colorScheme="teal">
              My Profile
            </Button>
            <Button variant="solid" colorScheme="teal">
              Messaging
            </Button>
          </div>
        </div>
        <div className="sm-child" />
        <b className="md7">Plan Selection</b>
        <b className="md8">My Matches</b>
        <div className="xl3">
          <div className="sample-job3">
            <img className="sample-job-icon3" alt="" src="/sample-job.svg" />
            <div className="info3">
              <p className="info-info-info9">{`info info info info info info info info info `}</p>
              <p className="info-info-info9">{`info info info info info info info info info `}</p>
              <p className="info-info-info9">{`info info info info info info info info info  `}</p>
            </div>
            <b className="location3">Toronto, ON</b>
            <img className="picture-icon3" alt="" src="/picture.svg" />
            <b className="md9">Website Designer</b>
            <Button
              className="button13"
              variant="solid"
              w="105px"
              colorScheme="teal"
            >
              Message
            </Button>
            <img className="icon4" alt="" />
          </div>
          <div className="sample-job4">
            <img className="sample-job-icon3" alt="" src="/sample-job.svg" />
            <div className="info3">
              <p className="info-info-info9">{`info info info info info info info info info `}</p>
              <p className="info-info-info9">{`info info info info info info info info info `}</p>
              <p className="info-info-info9">{`info info info info info info info info info  `}</p>
            </div>
            <b className="location3">Toronto, ON</b>
            <img className="picture-icon3" alt="" src="/picture.svg" />
            <b className="md9">Website Designer</b>
            <Button
              className="button13"
              variant="solid"
              w="105px"
              colorScheme="teal"
            >
              Message
            </Button>
            <img className="icon4" alt="" />
          </div>
        </div>
        <Button
          className="button15"
          variant="solid"
          colorScheme="teal"
          onClick={onButton3Click}
        >
          Documents
        </Button>
        <Button
          className="button16"
          variant="solid"
          colorScheme="teal"
          onClick={onButton4Click}
        >
          Reflections
        </Button>
        <img className="logo-1-icon1" alt="" src="/logo-1@2x.png" />
      </div>
    </div>
  );
};

export default MyProfile;
