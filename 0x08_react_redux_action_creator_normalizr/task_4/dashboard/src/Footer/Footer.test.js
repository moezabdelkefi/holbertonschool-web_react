import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import "@testing-library/jest-dom/extend-expect";

jest.mock("../App/AppContext", () => ({
    AppContext: jest.fn(),
}));

describe('Footer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('renders without crashing', () => {
        expect(wrapper).not.toBeNull();
    });

    it('renders the text "Copyright"', () => {
        expect(wrapper.text()).toContain('Copyright');
    });
    it("renders without crashing", () => {
        AppContext.mockReturnValueOnce({ user: { isLoggedIn: false } });
        expect(getByText(/Copyright/)).toBeInTheDocument();
    });

    it("does not display the link when the user is logged out", () => {
        AppContext.mockReturnValueOnce({ user: { isLoggedIn: false } });
        const { queryByText } = render(<Footer />);
        expect(queryByText(/Contact us/)).toBeNull();
    });

    it("displays the link when the user is logged in", () => {
        AppContext.mockReturnValueOnce({ user: { isLoggedIn: true } });
        const { getByText } = render(<Footer />);
        expect(getByText(/Contact us/)).toBeInTheDocument();
    });
});