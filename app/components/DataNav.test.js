import React from 'react';
import renderer from 'react-test-renderer';
import DataNav from './DataNav'

describe("DataNav", ()=>{

    let component 

    beforeEach(()=>{

        component = renderer.create(<DataNav 
                                        data={[1,2,3,5]}
                                        selectedDataNavItem={3}
                                    />)
    })


    it('1) renders successfully', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it('2) renders "dava-nav" div containing spans for all items in data prop', ()=>{

        const spans = component.root.findAllByType("span")

        expect(spans.length).toEqual(4)
    })

    it('3) if item matches selectedDataNavItem, className is "selected"', ()=>{

        const selected_span = component.root.find(node => node.props.className === "selected")

        expect(selected_span.children[0]).toEqual("3")
    })
})

