
import { Cmp1700Component } from './cmp';
describe('Cmp1700Component', () => {
  it('should add', () => {
    expect(new Cmp1700Component().add1700(1)).toBe(1701);
  });
});