import React from "react";
import Header from "../header";

export default function Layout({ children, isAvatarHidden }: { children: React.ReactNode , isAvatarHidden?:boolean}) {
  return (
    <div className="max-w-7xl">
      <Header isAvatarHidden={isAvatarHidden}/>
      <div>{children}</div>
    </div>
  );
}
