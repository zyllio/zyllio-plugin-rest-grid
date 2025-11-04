import { ComponentMetadataModel } from "@zyllio/zy-sdk";

const Icon = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="#cccccc">    
  <path d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2M4,4V11H11V4H4M4,20H11V13H4V20M20,20V13H13V20H20M20,4H13V11H20V4Z" />
</svg>
`;

export const RestGridMetadata: ComponentMetadataModel = {
  metadataVersion: 2,
  id: 'plugin-rest-grid',
  icon: Icon,
  label: 'REST Grid',
  category: 'Components',
  subCategory: 'Plugins',
  hidden: false,
  properties: [{
    id: 'selection',
    name: 'Selection',
    type: 'row-variable',
    tootip: '',
    default: '',
    write: true
  }, {
    id: 'data',
    name: 'Table',
    type: 'table',
    tootip: 'The table being used to populate',
    default: '',
    main: true
  }, {
    id: 'date',
    name: 'Date',
    type: 'column',
    tootip: '',
    default: ''
  }, {
    id: 'label',
    name: 'Label',
    type: 'column',
    tootip: '',
    default: ''
  }, {
    id: 'description',
    name: 'Description',
    type: 'column',
    tootip: '',
    default: ''
  }, {
    id: 'filter',
    name: 'Filter',
    type: 'filter',
    tootip: 'Filter the table rows',
    default: ''
  }, {
    id: 'sort',
    name: 'Sort',
    type: 'sort',
    tootip: 'Sort the table rows',
    default: ''
  }],
  styles: []
}
