
import { Cmp1541Component } from './cmp';
describe('Cmp1541Component', () => {
  it('should add', () => {
    expect(new Cmp1541Component().add1541(1)).toBe(1542);
  });
});