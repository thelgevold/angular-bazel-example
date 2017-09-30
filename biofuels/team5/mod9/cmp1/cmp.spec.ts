
import { Cmp1591Component } from './cmp';
describe('Cmp1591Component', () => {
  it('should add', () => {
    expect(new Cmp1591Component().add1591(1)).toBe(1592);
  });
});