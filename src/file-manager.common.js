import Vue from "vue";

import vueCustomScrollbar from 'vue-custom-scrollbar';
import ControlComponent from "./components/ControlComponent";
import ContentComponent from "./components/ContentComponent";
import DirectoryComponent from "./components/DirectoryComponent";
import FileComponent from "./components/FileComponent";
import NavComponent from "./components/NavComponent";
import SearchComponent from "./components/SearchComponent";
import SidebarComponent from "./components/SidebarComponent";
import VueFileManager from "./components/VueFileManager";
import PrimaryButtonComponent from "./components/PrimaryButtonComponent";
import AdditionalInfoComponent from "./components/AdditionalInfoComponent";
import PreloaderComponent from "./components/PreloaderComponent";

const Components = {
  vueCustomScrollbar,
  AdditionalInfoComponent,
  ControlComponent,
  PrimaryButtonComponent,
  ContentComponent,
  DirectoryComponent,
  FileComponent,
  NavComponent,
  SearchComponent,
  SidebarComponent,
  VueFileManager,
  PreloaderComponent
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
