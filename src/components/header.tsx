import React from "react";
import { Link } from "@reach/router";

export const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          Aegle Chat Room
        </Link>
      </h1>
    </div>
  </header>
);
