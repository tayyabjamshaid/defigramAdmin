import React from "react";
import * as moment from "moment";

// reactstrap components
import {
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
// import AdaptiveImage from "react-adaptive-image";
import "./UserProfile.css";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function UserProfile() {
  const params = useParams();
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  const { id: userId } = params;
  const upcomingData = useSelector((state) => state.allUsers);
  const { users } = upcomingData;

  let usersArray = Array.from(users);
  const item = usersArray.find((item) => item.user_id === userId);
  console.log(item);
  let firstPicture =
    item.my_gallery_pictures.length > 0 ? (
      <span>{item.my_gallery_pictures[0]}</span>
    ) : (
      <span>NO IMG</span>
    );
  firstPicture = firstPicture.props.children.picture_url ? (
    <span>{firstPicture.props.children.picture_url}</span>
  ) : (
    <span>NO img</span>
  );
  let userName =
    item.username == null ? <span>Michal</span> : <span>{item.username}</span>;
  let aboutMe =
    item.about_me === null || item.about_me === "null" ? (
      <span>Working as a developer</span>
    ) : (
      <span>{item.about_me}</span>
    );
  let birthday =
    item.birthday == null ? (
      <span> August 14,1996</span>
    ) : (
      <td> {moment(item.birthday).format("MMMM Do ,YYYY")}</td>
    );
  let createdAt =
    item.created_at == null ? (
      <span> August 14,1996</span>
    ) : (
      <td>{moment(item.created_at).format("MMMM DD ,YYYY [at] h:mma")}</td>
    );
  let lastSeen =
    item.online_status_time == null ? (
      <span> August 14,1996</span>
    ) : (
      <td>
        {moment(item.online_status_time).format("MMMM DD ,YYYY [at] h:mma")}
      </td>
    );

  let gender =
    item.gender == null ? <span>Male</span> : <span>{item.gender}</span>;
  let current_online =
    item.online_status === true ? <span>Online</span> : <span>Offline</span>;

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 3,
      }}
    />
  );
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Company (disabled)</label>
                        <Input
                          defaultValue="Defigram."
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="7">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue={userName.props.children}
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Birthday</label>
                        <Input
                          defaultValue={birthday.props.children}
                          placeholder="birthday"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Creation Date</label>
                        <Input
                          defaultValue={createdAt.props.children}
                          placeholder="Creation Date"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input
                          defaultValue={item.phone}
                          placeholder="Enter Your Number "
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Gender</label>
                        <Input
                          defaultValue={gender.props.children}
                          placeholder="Gender"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Current Online Status</label>
                        <Input
                          defaultValue={current_online.props.children}
                          placeholder="User Online Status"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Last Seen</label>
                        <Input
                          defaultValue={lastSeen.props.children}
                          placeholder="Last Seen"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          cols="80"
                          defaultValue={aboutMe.props.children}
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>Click to View User Images</label>
                        <Button color="text-info" onClick={toggle}>
                          Gallery Images
                        </Button>
                        <Modal isOpen={modal} toggle={toggle}>
                          <ModalHeader toggle={toggle}>
                            <span style={{ "fontSize": "30px" }}>
                              Gallery Pictures
                            </span>
                          </ModalHeader>

                          <ModalBody>
                            <ColoredLine color="black" />

                            <div style={{ "overflow": "hidden" }}>
                              {item.my_gallery_pictures.length > 0 ? (
                                item.my_gallery_pictures.map((data, i) => {
                                  return (
                                    <>
                                      {" "}
                                      <a href={`#img${i}`}>
                                        <img
                                          alt="userimg"
                                          className="modalImage"
                                          src={data.picture_url}
                                        />
                                      </a>
                                      <a
                                        href="#"
                                        class="lightbox"
                                        id={`img${i}`}
                                      >
                                        <span
                                          style={{
                                            backgroundImage:
                                              "url(" + data.picture_url + ")",
                                          }}
                                        ></span>
                                        <a class="lightbox-close" href="#">
                                          X
                                        </a>
                                      </a>
                                    </>
                                  );
                                })
                              ) : (
                                <span style={{ "fontSize": "30px" }}>
                                  Empty Gallery
                                </span>
                              )}
                            </div>
                            <ColoredLine color="black" />
                          </ModalBody>
                          <ModalFooter
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: "2%",
                            }}
                          >
                            <Button color="primary" onClick={toggle}>
                              Okay
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={firstPicture.props.children}
                    />
                    <h5 className="title">{userName.props.children}</h5>
                  </a>
                  <p className="description">{aboutMe.props.children}</p>
                </div>
                <div className="card-description">
                  Do not be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens??? bed design but the back is...
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
