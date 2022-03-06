import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { NavLogo } from "../assets";
import MenuList from "../elements/MenuList";

const Nav = props => {
  const [click, setClick] = useState(false);
  const reportList = useRef();
  let jobIcon = "../src/assets/nav/policeman.png";
  let jobName = "../src/assets/nav/police.png";
  let jobIconAlt = "POLICEMAN";
  let jobNameAlt = "POLICE";
  if (props.depart === "fire") {
    jobIcon = "../src/assets/nav/firefighter.png";
    jobName = "../src/assets/nav/fire.png";
    jobIconAlt = "FIREFIGHTER";
    jobNameAlt = "FIRE";
  } else if (props.depart === "admin") {
    jobIcon = "../src/assets/nav/administrator.png";
    jobName = "../src/assets/nav/admin.png";
    jobIconAlt = "ADMINISTRATOR";
    jobNameAlt = "ADMIN";
  }

  return (
    <Navbar depart={props.depart}>
      <div className="logobox">
        <img className="logo" src={NavLogo} alt="NAVLOGO" />
        <img className="job" src={jobName} alt={jobNameAlt} />
      </div>
      <div className="toggle">
        <img src="../src/assets/nav/toggle.svg" alt="TOGGLE" />
      </div>
      <div className="menu">
        <MenuList
          list="notice"
          path="notice"
          job={props.depart}
          depart={props.depart}
          icon="Icon"
          click={click}
          setClick={setClick}
        >
          공지사항
        </MenuList>
        <MenuList
          list="mypage"
          path="mypage"
          job={props.depart}
          depart={props.depart}
          icon="Icon"
          click={click}
          setClick={setClick}
        >
          마이페이지
        </MenuList>
        <MenuList
          list="report"
          path="monthly"
          job={props.depart}
          depart={props.depart}
          icon="Icon"
          click={click}
          setClick={setClick}
        >
          성적현황
        </MenuList>
        {/* <div className={"report-list"} ref={reportList}>
          <MenuList
            list="monthly"
            path="monthly"
            job={props.depart}
            depart={props.depart}
            icon="_reportIcon"
            click={click}
            setClick={setClick}
          >
            모의고사
          </MenuList>
          <MenuList
            list="weekly"
            path="weekly"
            job={props.depart}
            depart={props.depart}
            icon="_reportIcon"
            click={click}
            setClick={setClick}
          >
            중간종합
          </MenuList>
          <MenuList
            list="physical"
            path="physical"
            job={props.depart}
            depart={props.depart}
            icon="_reportIcon"
            click={click}
            setClick={setClick}
          >
            체력증감
          </MenuList>
        </div> */}
        <div className="d_day" depart={props.depart}>
          D-<span>209</span>
        </div>
      </div>
    </Navbar>
  );
};

const Navbar = styled.div`
  font-family: Noto Sans KR;
  position: relative;
  width: 100vw;
  height: ${(56 / 1512) * 100 + "vw"};
  background: ${props => {
    if (props.depart === "police") {
      return "#1482ef";
    } else if (props.depart === "fire") {
      return "#F48065";
    } else if (props.depart === "admin") {
      return "#13C383";
    }
  }};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logobox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: ${(40 / 1512) * 100 + "vw"};
    .logo {
      width: ${(86 / 1512) * 100 + "vw"};
    }
    .job {
      width: ${(26 / 1512) * 100 + "vw"};
      padding-top: ${(5 / 1512) * 100 + "vw"};
      margin-right: ${(10 / 1512) * 100 + "vw"};
    }
  }
  .menu {
    display: flex;
    align-items: center;
    font-size: ${(14 / 1512) * 100 + "vw"};
    font-family: Noto Sans KR;
    font-weight: 600;
    margin-right: ${(40 / 1512) * 100 + "vw"};

    .d_day {
      margin-left: ${(40 / 1512) * 100 + "vw"};

      background-color: #ffffffc8;
      color: ${props => {
        if (props.depart === "police") {
          return "#1482ef";
        } else if (props.depart === "fire") {
          return "#F48065";
        } else if (props.depart === "admin") {
          return "#13C383";
        }
      }};
      font-weight: 600;
      font-size: ${(16 / 1512) * 100 + "vw"};
      line-height: ${(30 / 1512) * 100 + "vw"};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${(4 / 1512) * 100 + "vw"} ${(10 / 1512) * 100 + "vw"};
      border-radius: ${(40 / 1512) * 100 + "vw"};
    }
    @media screen and (max-width: 667px) {
      display: none;
    }
  }
  .toggle {
    display: none;
    @media screen and (max-width: 667px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: ${(40 / 1512) * 100 + "vw"};
      img {
        width: ${(24 / 1512) * 100 + "vw"};
      }
    }
  }
  /* .report-list {
    display: flex;
    color: #ffffffc8;
    width: ${(100 / 1512) * 100 + "vw"};
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-out;
  } */
`;

export default Nav;
