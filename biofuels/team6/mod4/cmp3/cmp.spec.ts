
import { Cmp1643Component } from './cmp';
describe('Cmp1643Component', () => {
  it('should add', () => {
    expect(new Cmp1643Component().add1643(1)).toBe(1644);
  });
});