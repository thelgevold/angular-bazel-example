
import { Cmp4380Component } from './cmp';
describe('Cmp4380Component', () => {
  it('should add', () => {
    expect(new Cmp4380Component().add4380(1)).toBe(4381);
  });
});