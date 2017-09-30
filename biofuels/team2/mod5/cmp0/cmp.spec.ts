
import { Cmp1250Component } from './cmp';
describe('Cmp1250Component', () => {
  it('should add', () => {
    expect(new Cmp1250Component().add1250(1)).toBe(1251);
  });
});