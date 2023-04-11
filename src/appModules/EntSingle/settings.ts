import { InputText, InputTextArea, InputSelect } from '~/dynaui';
import { required } from '@vuelidate/validators';

export const moduleName = "ent-single-example1";
export const apiBaseUrl = "https://localhost:7169/WeatherForecast";
export const startPageNo = 1;

export const entrySchema = [
  {
    label: 'First Name',
    model: 'fname',
    component: InputText,
  },
  {
    label: 'Last Name',
    model: 'lname',
    component: InputText,
  },
  {
    label: 'Region',
    model: 'region',
    placeholder: 'เลือกสิ',
    component: InputSelect,
    choices: [
      { v: "north", t: "เหนือ" },
      { v: "east", t: "ตะวันออก" },
      { v: "northeast", t: "อีสาน" },
    ]
  },
  {
    label: 'Bio',
    model: 'bio',
    component: InputTextArea,
  },
]

export const entryRules = {
  fname: { required },
  lname: {},
  region: {},
  bio: {},
}

export const entryInitial = {
  fname: 'John',
  lname: 'Doe',
  bio: '-'
}