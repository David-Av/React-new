import React from 'react'
import {create} from "react-test-renderer"
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", ()=>{ //!nkaragruma inchn enq tes anum 2rd argument@ stanuma callback
  test("status from props should be in state", ()=>{
    const component = create(<ProfileStatus status = "Social"/>); //!create@ virtual fake dzevi rendera anum 
    const instance = component.getInstance()
    //! instanc@ exepmlyar a talis mez 
    expect(instance.state.status).toBe("Social");
    //!expectn el spasvox patasxanna 
  })
  test("input check", ()=>{
    const component = create(<ProfileStatus status = "Social"/>) ;
    const root = component.root
    // const instance = root.getInstance()
    let input = root.findByType("span");
    expect(input).not.toBeNull();
    
  })
})
