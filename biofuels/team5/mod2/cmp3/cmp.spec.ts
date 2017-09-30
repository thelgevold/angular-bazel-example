
import { Cmp1523Component } from './cmp';
describe('Cmp1523Component', () => {
  it('should add', () => {
    expect(new Cmp1523Component().add1523(1)).toBe(1524);
  });
});