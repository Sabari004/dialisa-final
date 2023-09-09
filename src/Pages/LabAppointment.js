import DoctorNavBar from "../Components/DoctorNavBar";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react";
// import { UseDisclosureProps } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "../Styles/Machines.module.css";
function LabAppoinment() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(() => {
    const savedItem = localStorage.getItem("labKey");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  let add = 1;

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [machines, setMachines] = useState([]);
  const fetchdata = async () => {
    await axios
      .get(`http://localhost:8080/machine/labid/${userName.labId}`)
      .then((r) => {
        setMachines(r.data);
        console.log(machines);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <DoctorNavBar />
      <div className={Styles.button_container}>
        <div>
          <h1>Lab Appoinment</h1>
          <div className={Styles.button_container_in}>
            {/* <button
              onClick={(e) => {
                axios.post("http://localhost:8080/machine", {
                  labId: userName.labId,
                });
                fetchdata();
              }}
            >
              Add Machine
            </button> */}


<Button onClick={onOpen}>Add Dialysis Device</Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add the Laboratory Device Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Machine name</FormLabel>
              <Input ref={initialRef} placeholder='Enter Device Name' />
            </FormControl>

            {/* <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} 
              onClick={(e) => {
                axios.post("http://localhost:8080/machine", {
                  labId: userName.labId,
                });
                onClose();
                fetchdata();
                
              }}
            >
              Add Device
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>            

          </div>
        </div>
      </div>

      {/* {machines && (
          <>
            {machines.map((mac, ind) => {
              <h1>rtr</h1>;
            })}
          </>
        )} */}
      <div className={Styles.button_container}>
        <div style={{ textAlign: "center" }}>
          <h1>Total Machines</h1>
          <div className={Styles.button_container_in}>
            <>
              {machines.map((m) => (
                <button onClick={(e) => navigate(`/lab/appoinment/${m.macId}`)}>
                  Dialysis Device {add++}
                </button>
              ))}
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default LabAppoinment;
