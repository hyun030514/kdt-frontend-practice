import React, { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import { getMenus } from "../api/MenuApi.js";
import MenuSearchForm from "../components/MenuSearchForm.jsx";

function Menus() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(getMenus());
  }, []);

  return (
    <>
      <h3>메뉴 목록 페이지</h3>

      {/* 검색폼 컴포넌트 */}
      <MenuSearchForm />

      {/* 메뉴목록 컴포넌트 */}
      {/* <MenuList menus=전체메뉴목록배열/>  */}
      <MenuList menus={menus} />
    </>
  );
}

export default Menus;
