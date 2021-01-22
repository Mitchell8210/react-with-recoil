import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Item = styled.div`
  padding: 8px;
  font-size: 20px;
  color: white;
  text-decoration: underline;
  transition: background 0.2s;
  &:hover {
    background: green;
  }
`;

export default function NavBarItem(props) {
  const { title, path } = props;
  return (
    <Link to={path}>
      <Item>{title}</Item>
    </Link>
  );
}
