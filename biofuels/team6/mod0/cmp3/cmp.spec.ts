
import { Cmp1603Component } from './cmp';
describe('Cmp1603Component', () => {
  it('should add', () => {
    expect(new Cmp1603Component().add1603(1)).toBe(1604);
  });
});