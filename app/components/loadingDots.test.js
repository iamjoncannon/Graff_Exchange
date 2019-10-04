import React from 'react';
import renderer from 'react-test-renderer';
import LoadingDots from './LoadingDots'

describe("loadingDots", ()=>{

    let component 

    beforeEach(()=>{

        component = renderer.create(<LoadingDots size={"3rem"}/>)
    })

    it('1) renders successfully', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) renders a loading dots spans and three spans", ()=>{

        const dots = component.root.findAllByType("span")

        expect(dots.length).toEqual(3)
    })

    it("3) sets fontSize style of divs to size prop",()=>{

        const dots = component.root.findAllByType("span")

        expect(dots[0].props.style.fontSize).toEqual("3rem")
    })
})