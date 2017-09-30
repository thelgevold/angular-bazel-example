
import { Cmp3380Component } from './cmp';
describe('Cmp3380Component', () => {
  it('should add', () => {
    expect(new Cmp3380Component().add3380(1)).toBe(3381);
  });
});