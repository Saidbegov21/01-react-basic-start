import { useState } from "react";
import styled from "styled-components";
import logo from "/logo-name.svg";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
}
`;

export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);

  return (
    <HeaderContainer>
      <img src={logo} alt={"Result"} />

      <span>
        Время сейчас:{" "}
        {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </span>
    </HeaderContainer>
  );
}
