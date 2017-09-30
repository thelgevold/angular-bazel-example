
import { Cmp1604Component } from './cmp';
describe('Cmp1604Component', () => {
  it('should add', () => {
    expect(new Cmp1604Component().add1604(1)).toBe(1605);
  });
});