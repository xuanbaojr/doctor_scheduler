import { MajorTitle } from '@/constant/screen/post';
import { MajorType } from '@/constant/type';
import React from 'react';
import { useState } from 'react';
import { MultipleSelectList } from 'react-native-dropdown-select-list'

interface Props {
  setMajor : (list : MajorType[]) => void 
  major : MajorType[]
}

const SelectMajor = ({setMajor, major } : Props) => {

  
  const data = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers' },
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers' },
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return(
    <MultipleSelectList 
        setSelected={setMajor} 
        data={data} 
        save="value"
        placeholder={MajorTitle.title}
        notFoundText={MajorTitle.notFound}
        searchPlaceholder={MajorTitle.search}
        label={MajorTitle.major}
        boxStyles={{borderRadius:0}}
    />
  )

};

export default SelectMajor