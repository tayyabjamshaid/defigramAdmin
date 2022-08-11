/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { getAllUsers } from "Actions/userAction";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as moment from "moment";
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
import Pagination from "./DataTable/Pagination";
import Search from "./DataTable/Search";

function Tables() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userArray, setUserArray] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 7;

  const upcomingData = useSelector((state) => state.allUsers);
  const { users } = upcomingData;
  useEffect(() => {
    dispatch(getAllUsers());
    setUserArray(users);
  }, [dispatch, users]);
  const userArrayMethod = useMemo(() => {
    let computedUsers = userArray;
    if (search) {
      computedUsers = computedUsers.filter(
        (users) =>
          users.username.toLowerCase().includes(search.toLowerCase()) ||
          users.phone.includes(search)
        // users.birthday.toLowerCase().includes(search.toLowerCase())
      );
    }
    setTotalItems(computedUsers.length);
    return computedUsers.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [userArray, currentPage, search]);
  // let token = localStorage.getItem("userInfo");
  const blockedUser = async (user_id) => {
    // const { data } = await Axios.get(
    //   "https://defigram-app.herokuapp.com/admin/api/blockUser",
    //   { user_id: user_id },
    //   {
    //     headers: { Authorization: token },
    //   }
    // );
    // console.log(data);
  };
  const unBlockUser = async (user_id) => {
    // const { data } = await Axios.get(
    //   "https://defigram-app.herokuapp.com/admin/api/blockUser",
    //   { user_id: user_id },
    //   {
    //     headers: { Authorization: token },
    //   }
    // );
    // console.log(data);
  };
  return (
    <>
      <div className="content">
        <div className="row" style={{ "marginBottom": "1%" }}>
          <div className="col-md-6">
            <Search
              onSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>User Name</th>
                      <th>Birthday</th>
                      <th>Creation Date</th>
                      <th>Phone</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userArray ? (
                      userArrayMethod.map((userAllData) => {
                        return (
                          <tr key={userAllData.user_id}>
                            <td
                              onClick={() => {
                                history.push(
                                  `/admin/userDetail/${userAllData.user_id}`
                                );
                              }}
                            >
                              {userAllData.username}
                            </td>

                            {userAllData.birthday == null ? (
                              <td
                                onClick={() => {
                                  history.push(
                                    `/admin/userDetail/${userAllData.user_id}`
                                  );
                                }}
                              >
                                August 14,1996
                              </td>
                            ) : (
                              <td
                                onClick={() => {
                                  history.push(
                                    `/admin/userDetail/${userAllData.user_id}`
                                  );
                                }}
                              >
                                {userAllData.birthday}
                              </td>
                            )}
                            <td
                              onClick={() => {
                                history.push(
                                  `/admin/userDetail/${userAllData.user_id}`
                                );
                              }}
                            >
                              {moment(userAllData.created_at).format(
                                "MMMM Do ,YYYY"
                              )}
                            </td>
                            <td
                              onClick={() => {
                                history.push(
                                  `/admin/userDetail/${userAllData.user_id}`
                                );
                              }}
                            >
                              {userAllData.phone}
                            </td>
                            <td className="text-center">
                              {userAllData?.admin_approval === "APPROVED" ? (
                                <Button
                                  className="btn"
                                  outline
                                  color="danger"
                                  onClick={() =>
                                    blockedUser(userAllData?.user_id)
                                  }
                                >
                                  BLOCK
                                </Button>
                              ) : (
                                <Button
                                  className="btn"
                                  outline
                                  color="success"
                                  onClick={() =>
                                    unBlockUser(userAllData?.user_id)
                                  }
                                >
                                  UNBLOCK
                                </Button>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <h1>No DAy</h1>
                    )}
                  </tbody>
                </Table>
                <div className="row">
                  <div className="col-md-6">
                    <Pagination
                      total={totalItems}
                      itemsPerPage={ITEMS_PER_PAGE}
                      currentPage={currentPage}
                      onPageChange={(page) => setCurrentPage(page)}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Table on Plain Background</CardTitle>
                <p className="category">Here is a subtitle for this table</p>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

export default Tables;
