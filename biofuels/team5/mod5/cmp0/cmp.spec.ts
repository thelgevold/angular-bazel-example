
import { Cmp1550Component } from './cmp';
describe('Cmp1550Component', () => {
  it('should add', () => {
    expect(new Cmp1550Component().add1550(1)).toBe(1551);
  });
});