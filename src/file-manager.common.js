import Vue from "vue";

import ContentComponent from "./components/ContentComponent";
import DirectoryComponent from "./components/DirectoryComponent";
import FileComponent from "./components/FileComponent";
import NavComponent from "./components/NavComponent";
import SearchComponent from "./components/SearchComponent";
import SidebarComponent from "./components/SidebarComponent";
import VueFileManager from "./components/VueFileManager";
import PrimaryButtonComponent from "./components/PrimaryButtonComponent";

const Components = {
  PrimaryButtonComponent,
  ContentComponent,
  DirectoryComponent,
  FileComponent,
  NavComponent,
  SearchComponent,
  SidebarComponent,
  VueFileManager
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
