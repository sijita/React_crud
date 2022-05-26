import React, { useContext } from "react";
import { Navbar, Button } from "react-daisyui";
import { Link } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import ModalForm from "./ModalForm";

export default function Header() {
  const { toggleVisible, setTask, task } = useContext(GlobalContext);

  const handleAddBtn = () => {
    setTask({
      id: "",
      title: "",
      description: "",
    });
    toggleVisible();
  };

  return (
    <Navbar className="px-10 py-5">
      <Navbar.Start>
        <span className="text-3xl font-bold">PSP</span>
      </Navbar.Start>

      <Navbar.End>
        <Link to="/">
          <Button className="btn-success" onClick={handleAddBtn}>
            <span className="mr-3">AGREGAR</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </Button>
        </Link>
        <ModalForm />
      </Navbar.End>
    </Navbar>
  );
}
