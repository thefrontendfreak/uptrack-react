import 'antd/dist/antd.css';
import './App.scss';
import React, { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Modal } from 'antd';
import Header from '../src/core/layout/Header';
import Sidebar from './core/layout/Sidebar';
import DashboardHome from './core/components/pages/DashboardHome'
import SyncMode from './core/components/pages/SyncMode';
import Logs from './core/components/pages/Logs';
import Settings from './core/components/pages/Settings';
import OnboardModal from './core/components/Modals/OnboardModal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sideBarStatus , setSidebarStatus] = useState(false);

  // Modal functions
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  // Sidebar handle function
  const sidebarHandler =  () => {
    setSidebarStatus(!sideBarStatus);
  }

 

  useEffect(() => {
    showModal();
  }, [])

  return (
    <div className="App">
      <Router basename="/uptrack">
          <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <OnboardModal modalStatus ={handleCancel}/>
          </Modal>
          <Header handleToggle = {sidebarHandler} buttonStatus={sideBarStatus}/>
          <Sidebar sidebarStatus = {sideBarStatus} hideSidebar = {sidebarHandler}/> 
          <div className="innerWrapper">
              <Switch>
                  <Route path="/syncmode">
                      <SyncMode/>
                  </Route>
                  <Route path="/settings">
                      <Settings/>
                  </Route>
                  <Route path="/logs">
                      <Logs/>
                  </Route>
                  <Route path="/">
                      <DashboardHome/>
                  </Route>
              </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
