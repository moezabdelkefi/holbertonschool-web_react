import { Map } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
    it('returns the initial state', () => {
        expect(rootReducer(undefined, {}).toJS()).toEqual({
            courses: Map({}),
            notifications: Map({}),
            ui: Map({}),
        });
    });
});