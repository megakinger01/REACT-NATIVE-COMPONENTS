import { MenuItem } from "../Interfaces/appInterface";



export const menuItems: MenuItem[] =[   
    {
        name : 'animation 101',
        icon : 'cube-outline',
        component : 'Animation101Screen'
    },
    {
        name : 'animation 102',
        icon : 'albums-outline',
        component : 'Animation102Screen'
    },
    {
        name : 'animation 103 switches',
        icon : 'toggle-outline',
        component : 'SwitchScreen'
    },
    {
        name : 'animation 104 alertas',
        icon : 'alert-circle-outline',
        component : 'AlertScreen'
    },
    {
        name : 'animation 105 inputs',
        icon : 'document-text-outline',
        component : 'TextInputScreen'
    },

    {
        name : 'animation 106 Recargar',
        icon : 'refresh-outline',
        component : 'PullTorefreshScreen'
    },
    {
        name : 'animation 107 Secciones',
        icon : 'list-outline',
        component : 'CustomSectionListScreen'
    },
    {
        name : 'animation 108 Modal',
        icon : 'copy-outline',
        component : 'ModalScreen'
    },
    {
        name : 'animation 108 Infnity Scroll',
        icon : 'download-outline',
        component : 'InfinityScrollScreen'
    },
    {
        name : 'animation 109 Slides',
        icon : 'code-slash-outline',
        component : 'SlideScreen'
    },

    {
        name : 'animation 110 Theme',
        icon : 'flask-outline',
        component : 'ChangeThemeScreen'
    },
]