
import { Cmp2592Component } from './cmp';
describe('Cmp2592Component', () => {
  it('should add', () => {
    expect(new Cmp2592Component().add2592(1)).toBe(2593);
  });
});