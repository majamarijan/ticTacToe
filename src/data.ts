export const fields:FieldsType = [
  {
    id: 0,
    value: "",
    isActive: false,
  },
  {
    id: 1,
    value: "",
    isActive: false,
  },
  {
    id: 2,
    value: "",
    isActive: false,
  },
  {
    id: 3,
    value: "",
    isActive: false,
  },
  {
    id: 4,
    value: "",
    isActive: false,
  },
  {
    id: 5,
    value: "",
    isActive: false,
  },
  {
    id: 6,
    value: "",
    isActive: false,
  },
  {
    id: 7,
    value: "",
    isActive: false,
  },
  {
    id: 8,
    value: "",
    isActive: false,
  },
];

export type FieldType = {
  id:number;
  value:string;
  isActive:boolean;
}

export type FieldsType = FieldType[];

export const winings = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
];
