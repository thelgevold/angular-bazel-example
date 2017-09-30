
import { Cmp1575Component } from './cmp';
describe('Cmp1575Component', () => {
  it('should add', () => {
    expect(new Cmp1575Component().add1575(1)).toBe(1576);
  });
});