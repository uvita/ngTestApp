import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private pageTitle: string;
  private items: MenuItem[];

  ngOnInit() {
    this.pageTitle = 'Design Guidelines';
    this.items = [
            {
                label: 'OVERVIEW',
                icon: 'fa-exclamation-circle',
                items: [{label: 'HOME', routerLink: ['']}]
            },
            {
                label: 'FOUNDATIONS',
                icon: 'fa-file-text-o',
                items: [
                    {
                        label: 'STYLE GUIDE',
                        expanded: true,
                        items: [
                            {label: 'Branding', routerLink: ['']},
                            {label: 'Color', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'LAYOUT',
                        expanded: true,
                        items: [
                            {label: 'Grid', routerLink: ['']},
                            {label: 'Responsive Utilities', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'BEST PRACTICES',
                        expanded: true,
                        items: [
                            {label: 'Usability - Accesibility', routerLink: ['']},
                            {label: 'Contextual Information', routerLink: ['']},
                            {label: 'Visual Feedback', routerLink: ['']},
                            {label: 'Internationalization', routerLink: ['']},
                        ]
                    },
                ]
            },
            {
                label: 'PATTERNS',
                icon: 'fa-list-alt',
                items: [
                    {
                        label: 'LANDINGS',
                        expanded: true,
                        items: [
                            {label: 'Launch Page', routerLink: ['']},
                            {label: 'Homepage', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'PAGE ELEMENTS',
                        expanded: true,
                        items: [
                            {label: 'Header', routerLink: ['design-guidelines/patterns/page-elements/header'] },
                            {label: 'Footers', routerLink: ['design-guidelines/patterns/page-elements/footer'] },
                            {label: 'Sidebars', routerLink: [''] },
                            {label: 'Navbar', routerLink: [''] },
                        ]
                    },
                    {
                        label: 'DATA ENTRY',
                        expanded: true,
                        items: [
                            {label: 'Login / Register', routerLink: ['']},
                            {label: 'Simple Form', routerLink: ['']},
                            {label: 'Advanced Form', routerLink: ['']},
                            {label: 'Wizard Form', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'SEARCH',
                        expanded: true,
                        items: [
                            {label: 'Simple search', routerLink: ['']},
                            {label: 'Advanced search', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'NAVIGATION',
                        expanded: true,
                        items: [
                            {label: 'Step navbar', routerLink: ['']},
                            {label: 'Advanced search', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'TABLES',
                        expanded: true,
                        items: [
                            {label: 'Simple Table', routerLink: ['']},
                            {label: 'Complex Table', routerLink: ['']},
                        ]
                    }
                ]
            },
            {
                label: 'COMPONENTS',
                icon: 'fa-cubes',
                items: [
                        {
                        label: 'INPUT',
                        expanded: true,
                        items: [
                            {label: 'Auto complete', routerLink: ['']},
                            {label: 'Calendar', routerLink: ['']},
                            {label: 'Checkbox', routerLink: ['']},
                            {label: 'Dropdown', routerLink: ['']},
                            {label: 'Editor', routerLink: ['']},
                            {label: 'File Upload', routerLink: ['']},
                            {label: 'Switch', routerLink: ['']},
                            {label: 'InputText', routerLink: ['']},
                            {label: 'InputTextArea', routerLink: ['']},
                            {label: 'ListBox', routerLink: ['']},
                            {label: 'Mask', routerLink: ['']},
                            {label: 'MultiSelect', routerLink: ['']},
                            {label: 'RadioButton', routerLink: ['']},
                            {label: 'Rating', routerLink: ['']},
                            {label: 'Slider', routerLink: ['']},
                            {label: 'Spinner', routerLink: ['']},
                            {label: 'SelectButton', routerLink: ['']},
                            {label: 'ToggleButton', routerLink: ['']},
                            {label: 'Popovers', routerLink: ['']},

                        ]
                    },
                    {
                        label: 'BUTTON',
                        expanded: true,
                        items: [
                            {label: 'Button', routerLink: ['']},
                            {label: 'Split Button', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'DATA',
                        expanded: true,
                        items: [
                            {label: 'Carrousel', routerLink: ['']},
                            {label: 'DataGrid', routerLink: ['']},
                            {label: 'DataList', routerLink: ['']},
                            {label: 'DataScroller', routerLink: ['']},
                            {label: 'OrderList', routerLink: ['']},
                            {label: 'Gmap', routerLink: ['']},
                            {label: 'Paginator', routerLink: ['']},
                            {label: 'Picklist', routerLink: ['']},
                            {label: 'Schedule', routerLink: ['']},
                            {label: 'Tree', routerLink: ['']},
                            {label: 'TreeTable', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'PANEL',
                        expanded: true,
                        items: [
                            {label: 'Accordion', routerLink: ['']},
                            {label: 'Fileset', routerLink: ['']},
                            {label: 'Panel', routerLink: ['']},
                            {label: 'Tabview', routerLink: ['']},
                            {label: 'Toolbar', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'DIALOG',
                        expanded: true,
                        items: [
                            {label: 'ConfirmDialog', routerLink: ['']},
                            {label: 'Dialog', routerLink: ['']},
                            {label: 'LightBox', routerLink: ['']},
                            {label: 'OverlayPanel', routerLink: ['']},
                            {label: 'Tooltip', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'OVERLAY',
                        expanded: true,
                        items: [
                            {label: 'MenuModel', routerLink: ['']},
                            {label: 'Breadcrumb', routerLink: ['']},
                            {label: 'ContexMnenu', routerLink: ['']},
                            {label: 'MegaMenu', routerLink: ['']},
                            {label: 'Menu', routerLink: ['']},
                            {label: 'Menubar', routerLink: ['']},
                            {label: 'PanelMenu', routerLink: ['']},
                            {label: 'SlideMenu', routerLink: ['']},
                            {label: 'TabMenu', routerLink: ['']},
                            {label: 'TieredMenu', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'CHARTS',
                        expanded: true,
                        items: [
                            {label: 'ChartModel', routerLink: ['']},
                            {label: 'Bar', routerLink: ['']},
                            {label: 'Doughnut', routerLink: ['']},
                            {label: 'Line', routerLink: ['']},
                            {label: 'Polar Area', routerLink: ['']},
                            {label: 'Pie', routerLink: ['']},
                            {label: 'Radar', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'MESSAGES',
                        expanded: true,
                        items: [
                            {label: 'Messages', routerLink: ['']},
                            {label: 'Growl', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'DRAG & DROP',
                        expanded: true,
                        items: [
                            {label: 'Drag & Drop', routerLink: ['']},
                        ]
                    },
                    {
                        label: 'MISCELLANEAUS',
                        expanded: true,
                        items: [
                            {label: 'Validation', routerLink: ['']},
                            {label: 'ProgressBar', routerLink: ['']},
                        ]
                    }
                ]
            },

        ];
  }
}
