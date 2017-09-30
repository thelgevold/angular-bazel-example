
import { Cmp1850Component } from './cmp';
describe('Cmp1850Component', () => {
  it('should add', () => {
    expect(new Cmp1850Component().add1850(1)).toBe(1851);
  });
});