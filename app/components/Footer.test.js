import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer'

describe("Footer", ()=>{

    let component 

    beforeEach(()=>{

        component = renderer.create(<Footer 
                                        data={[1,2,3,5]}
                                        selectedDataNavItem={3}
                                    />)
    })

    it('1) renders successfully', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) renders footer element", ()=>{

        const _footer = component.root.findByType("footer")
        
        expect(_footer).toBeTruthy()
    })

    it("3) renders eight anchor elements", ()=>{

        const anchors = component.root.findAllByType("a")

        expect(anchors.length).toEqual(8)
    })

    it("4) renders eight image elements", ()=>{

        const images = component.root.findAllByType("img")

        expect(images.length).toEqual(8)
    })
})