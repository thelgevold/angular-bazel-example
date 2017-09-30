
import { Cmp1602Component } from './cmp';
describe('Cmp1602Component', () => {
  it('should add', () => {
    expect(new Cmp1602Component().add1602(1)).toBe(1603);
  });
});