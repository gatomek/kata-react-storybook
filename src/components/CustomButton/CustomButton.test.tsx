import {describe, expect, it} from 'vitest';
import { render, screen } from '@testing-library/react';
import CustomButton from "./CustomButton.tsx";

// test suite
describe('Custom_Button_Tests', () => {

    // test case 1
    it("test 1", () => {
        render( <CustomButton>Test</CustomButton>);
        expect(screen.getByText( "Test")).toBeInTheDocument();
        // expect(true).toBe(true);
    })

    // test case 2
    it( "test 2", () => {
        expect( false).toBe( false);
    })

})
