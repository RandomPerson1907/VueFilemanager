import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        view: "cards",
        checkingMode: false,
        info: [],
        infoUpdated: 0,
        loading: false,
        sidebarVisible: true,
        additionalInfoSidebarVisible: false,
        modalAction: '',
        currentObject: {},
        currentObjectType: false,
        currentObjectIndex: false,
        targetObject: {},
        targetObjectType: false,
        targetObjectIndex: false,
        image: false,
        tabs: [
            {
                name: "First tab",
            },
            {
                name: "Second tab",
            },
            {
                name: "Third tab",
            },
        ],
        currentTabIndex: 0,
        directories: [
            {
                id: 0,
                name: "Project",
                icon: require("../assets/icons/directory.svg"),
                filesCount: "2 files",
                size: "14.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                id: 1,
                name: "Video",
                icon: require("../assets/icons/directory.svg"),
                filesCount: "1 files",
                size: "14.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                id: 2,
                name: "Music",
                icon: require("../assets/icons/directory.svg"),
                filesCount: "12 files",
                size: "14.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                id: 3,
                icon: require("../assets/icons/directory.svg"),
                name: "Documents",
                filesCount: "322 files",
                size: "14.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                id: 4,
                name: "Application Design",
                icon: require("../assets/icons/directory.svg"),
                filesCount: "22 files",
                size: "14.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                id: 5,
                name: "Photos",
                icon: require("../assets/icons/directory.svg"),
                filesCount: "0 files",
                size: "14.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                id: 6,
                name: "Project",
                icon: require("../assets/icons/directory.svg"),
                filesCount: "12 files",
                type: "directory",
                size: "14.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            }
        ],
        files: [
            {
                name: "Image",
                isImage: true,
                link: "#",
                filesCount: 2,
                type: "avi",
                size: "15mb",
                share: true,
                synchronization: false,
                backup: false,
                location: "/Uploads",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                link: '#',
                filesCount: 2,
                type: "avi",
                size: "15mb",
                share: true,
                synchronization: false,
                backup: false,
                location: "/Uploads",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "css",
                size: "140.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "csv",
                size: "112.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "dbf",
                size: "1.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "doc",
                size: "14.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "dwg",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "exe",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "fla",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "html",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "iso",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "js",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "json",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "mp3",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "mp4",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "pdf",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "pptx",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "psd",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "rtf",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "sketch",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "svg",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "txt",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "xls",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "xml",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "zip",
                zipped: true,
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "other",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            }
        ],
        recentlyAccessedFiles: [
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "avi",
                size: "15mb",
                share: true,
                synchronization: false,
                backup: false,
                location: "/Uploads",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "css",
                size: "140.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "csv",
                size: "112.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "dbf",
                size: "1.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "doc",
                size: "14.05mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "dwg",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "exe",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
            {
                name: "Felecia Resume",
                filesCount: 2,
                type: "fla",
                size: "12.85kb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "edit",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "share",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                    {
                        type: "delete",
                        title: "You added file",
                        description: "You added an item today",
                        date: "Today"
                    },
                ],
            },
        ],
        storages: [
            {
                id: 0,
                name: "local",
                icon: require("../assets/icons/storages/local.svg")
            },
            {
                id: 1,
                name: "other local",
                icon: require("../assets/icons/storages/local.svg")
            },
            {
                id: 2,
                name: "Google Drive",
                icon: require("../assets/icons/storages/google-drive.svg")
            },
            {
                id: 3,
                name: "Yandex Disc",
                icon: require("../assets/icons/storages/yandex-disc.svg")
            },
        ],
        currentStorage: false,
        bookmarks: []
    },
    mutations: {
        setView: (state, view) => state.view = view,
        setCheckingMode: (state, status) => state.checkingMode = status,
        setSidebarVisible: (state, status) => state.sidebarVisible = status,
        setModalAction: (state, action) => state.modalAction = action,
        addInfo: (state, {type, message, duration}) => {
            if (!duration)
                duration = 3000;

            state.info.push({
              type,
              message,
              duration
            });
        },
        removeFirstInfo: state => Vue.delete(state.info, 0),
        clearInfo: state => state.info = [],
        setInfoUpdated: (state) => state.infoUpdated++,
        setAdditionalInfoSidebarVisible: (state, status) => state.additionalInfoSidebarVisible = status,
        setLoading: (state, status) => state.loading = status,
        setCurrentObject: (state, object) => state.currentObject =  Object.assign({}, object),
        setCurrentObjectType: (state, type) => state.currentObjectType = type,
        setCurrentObjectIndex: (state, index) => state.currentObjectIndex = index,
        setObjectByIndexAndType: (state, {object, index, type}) => state[type] && state[type][index] ? Vue.set(state[type], index, object) : false,
        clearCurrentObject: state => {
            state.currentObject = {};
            state.currentObjectType = false;
            state.currentObjectIndex = false;
        },
        setTargetObject: (state, object) => state.targetObject =  Object.assign({}, object),
        setTargetObjectType: (state, type) => state.targetObjectType = type,
        setTargetObjectIndex: (state, index) => state.targetObjectIndex = index,
        clearTargetObject: state => {
            state.targetObject = {};
            state.targetObjectType = false;
            state.targetObjectIndex = false;
        },
        addDirectory: (state, name) => {
            state.directories.push({
                name: name,
                filesCount: "0 files",
                size: "0mb",
                share: false,
                synchronization: false,
                backup: false,
                location: "",
                owner: "Elnora Reese",
                opened: "July 8, 2019",
                created: "July 1, 2019",
                modified: "September 4 2019",
                activities: [
                    {
                        type: "add",
                        title: "You added directory",
                        description: "You added a directory today",
                        date: "Today"
                    },
                ],
            })
        },
        addTab: (state, tab) => {
            state.tabs.push(Object.assign({}, tab));
            state.currentTabIndex = state.tabs.length - 1;
        },
        removeTab: (state, index) => Vue.delete(state.tabs, index),
        setCurrentTab: (state, index) => state.currentTabIndex = index,
        addToBookmarks: (state, directory) => {
            let exists = false;
            state.bookmarks.forEach((bookmark) => {
               if (bookmark.id === directory.id)
                   exists = true;
            });
            if (!exists)
                state.bookmarks.push(directory);
        },
        setImage: (state, image) => state.image = image,
        clearImage: state => state.image = false,
        setCurrentStorage: (state, storage) => state.currentStorage = storage,
    },
    getters: {
        getCheckingMode: state => state.checkingMode,
        getSidebarVisible: state => state.sidebarVisible,
        getFirstInfo: state => state.info[0],
        getAdditionalInfoSidebarVisible: state => state.additionalInfoSidebarVisible,
        isLoading: state => state.loading,
        getDirectories: state => state.directories,
        getFiles: state => state.files,
        getRecentlyAccessedFiles: state => state.recentlyAccessedFiles,
        getCurrentObject: state => state.currentObject,
        getCurrentObjectType: state => state.currentObjectType,
        getCurrentObjectIndex: state => state.currentObjectIndex,
        getTargetObject: state => state.targetObject,
        getTargetObjectType: state => state.targetObjectType,
        getTargetObjectIndex: state => state.targetObjectIndex,
        isVisibleAdditionalInfo: state => state.currentObject && state.additionalInfoSidebarVisible,
        getTabs: state => state.tabs,
    },
    actions: {
        startChecking({commit}) {
            commit('setCheckingMode', true);
        },
        stopChecking({commit}) {
            commit('setCheckingMode', false);
        },
        toggleChecking({commit, getters}) {
            commit('setCheckingMode', !getters['getCheckingMode'])
        },
        pushInfo({commit}, {type, message, duration}) {
            commit('addInfo', {type, message, duration});
            commit('setInfoUpdated', true);
        },
        openSidebar({commit}) {
            commit('setSidebarVisible', true)
        },
        hideSidebar({commit}) {
            commit('setSidebarVisible', false)
        },
        toggleSidebar({commit, getters}) {
            commit('setSidebarVisible', !getters["getSidebarVisible"])
        },
        openAdditionalInfo({commit, dispatch}, {object, index, type}) {
            commit("setCurrentObject", object);
            commit("setCurrentObjectIndex", index);
            commit("setCurrentObjectType", type);
            dispatch("showAdditionalInfoSidebar")
        },
        hideAdditionalInfo({commit, dispatch}) {
            dispatch("hideAdditionalInfoSidebar");
            setTimeout(() => {
                commit("setCurrentObject", {});
            }, 700);
        },
        showAdditionalInfoSidebar({commit}) {
            commit('setAdditionalInfoSidebarVisible', true)
        },
        hideAdditionalInfoSidebar({commit}) {
            commit('setAdditionalInfoSidebarVisible', false)
        },
        startLoading({commit}) {
            commit('setLoading', true);
        },
        stopLoading({commit}) {
            commit('setLoading', false);
        },
        clearCurrentObject({commit}) {
            commit("setCurrentObject", {});
        },
        updateCurrentObject({commit, dispatch, getters}) {
            dispatch('startLoading');
            commit(
                "setObjectByIndexAndType",
                {
                    object: getters["getCurrentObject"],
                    index: getters["getCurrentObjectIndex"],
                    type: getters["getCurrentObjectType"]
                }
            );
            dispatch('stopLoading');
        },
        search({commit}, query) {
            console.log(`search: ${query}`);
        },
        fetchAll({commit}) {
            console.log('fetch all')
        },
        refresh({commit, dispatch}) {
            console.log('refreshed');
            dispatch('pushInfo', {type: 'success', message: `Refreshed`});
        },
        sendToMail({commit, getters, dispatch}, email) {
            console.log("Send " + getters["getCurrentObjectType"] + " \"" + getters["getCurrentObject"].name + "\" to email " + email);
            dispatch('pushInfo', {type: 'success', message: getters["getCurrentObject"].name + ' has been sended to email ' + email})
        },
        createDirectory({commit, dispatch}, name) {
            console.log(`Created directory ${name}`);
            commit('addDirectory', name);
            dispatch('pushInfo', {type: 'success', message: `Created directory ${name}`})
        },
        changeStorage({commit, dispatch}, storage) {
            console.log(`Changed storage to ${storage.name}`);
            commit('setCurrentStorage', storage);
            dispatch('pushInfo', {type: 'success', message: `Changed storage to ${storage.name}`});
        },
        moveToFolder({commit, getters, dispatch}) {
            console.log(`Moved folder ${getters['getCurrentObject'].name} to ${getters['getTargetObject'].name}`);
            dispatch('pushInfo', {type: 'success', message: `Moved folder ${getters['getCurrentObject'].name}${ getters['getCurrentObject'].type ? '.' + getters['getCurrentObject'].type : '' } to ${getters['getTargetObject'].name}`});
        }
    },
});
