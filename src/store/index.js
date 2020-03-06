import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false,
        additionalInfoSidebarVisible: false,
        currentObject: {},
        currentObjectType: false,
        currentObjectIndex: false,
        directories: [
            {
                name: "Project",
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
                name: "Video",
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
                name: "Music",
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
                name: "Application Design",
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
                name: "Photos",
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
                name: "Project",
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
        ]
    },
    mutations: {
        setAdditionalInfoSidebarVisible: (state, status) => state.additionalInfoSidebarVisible = status,
        setLoading: (state, status) => state.loading = status,
        setCurrentObject: (state, object) => state.currentObject =  Object.assign({}, object),
        setCurrentObjectType: (state, type) => state.currentObjectType = type,
        setCurrentObjectIndex: (state, index) => state.currentObjectIndex = index,
        setObjectByIndexAndType: (state, {object, index, type}) => state[type] && state[type][index] ? Vue.set(state[type], index, object) : false
    },
    getters: {
        getAdditionalInfoSidebarVisible: state => state.additionalInfoSidebarVisible,
        isLoading: state => state.loading,
        getDirectories: state => state.directories,
        getFiles: state => state.files,
        getRecentlyAccessedFiles: state => state.recentlyAccessedFiles,
        getCurrentObject: state => state.currentObject,
        getCurrentObjectType: state => state.currentObjectType,
        getCurrentObjectIndex: state => state.currentObjectIndex,
        isVisibleAdditionalInfo: state => state.currentObject && state.additionalInfoSidebarVisible
    },
    actions: {
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
        }
    },
});
