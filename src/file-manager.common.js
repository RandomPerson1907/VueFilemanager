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
import InfoComponent from "./components/InfoComponent";
import ModalComponent from "./components/ModalComponent";
import TabsComponent from "./components/TabsComponent";
import CheckboxComponent from "./components/CheckboxComponent";
import PreviewComponent from "./components/PreviewComponent";
import LoadingBarComponent from "./components/LoadingBarComponent";
import AddNewFileModalComponent from "./components/modals/AddNewFileModalComponent";
import BigCheckboxComponent from "./components/BigCheckboxComponent";
import ChangeAccessRightsComponent from "./components/ChangeAccessRightsComponent";
import { VueContext } from "vue-context";

import 'vue-context/src/sass/vue-context.scss';

const Components = {
  VueContext,
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
  InfoComponent,
  ModalComponent,
  TabsComponent,
  CheckboxComponent,
  PreviewComponent,
  LoadingBarComponent,
  AddNewFileModalComponent,
  ChangeAccessRightsComponent,
  BigCheckboxComponent,
  PreloaderComponent
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
