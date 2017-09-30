
import { Cmp2380Component } from './cmp';
describe('Cmp2380Component', () => {
  it('should add', () => {
    expect(new Cmp2380Component().add2380(1)).toBe(2381);
  });
});