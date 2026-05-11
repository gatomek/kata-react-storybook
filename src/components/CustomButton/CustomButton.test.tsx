import {describe, expect, it, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import CustomButton from "./CustomButton.tsx";
import userEvent from '@testing-library/user-event';

describe('Custom Button Tests', () => {

    it("czy przycisk zawiera prawidłowy tekst", () => {
        render(<CustomButton>Test1</CustomButton>);
        const button = screen.getByRole('button', {name: 'Test1'});
        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
        expect(button).toBeEnabled();
    })

    it("czy przycisk jest nieaktywny", () => {
        render(<CustomButton disabled>Test2</CustomButton>);
        const button = screen.getByRole('button', {name: 'Test2'});
        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
        expect(button).toBeDisabled();
    })

    it("czy przycisk obsługuje pojedyncze kliknięcie", async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(<CustomButton onClick={onClick}>Test3</CustomButton>);
        const button = screen.getByRole('button', {name: 'Test3'});

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    })

    it("czy przycisk obsługuje podwójne kliknięcie", async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(<CustomButton data-testid='cbid0' onClick={onClick}>Test4</CustomButton>);
        const button = screen.getByTestId('cbid0');

        await user.dblClick(button);

        expect(onClick).toHaveBeenCalledTimes(2);
    })
})
