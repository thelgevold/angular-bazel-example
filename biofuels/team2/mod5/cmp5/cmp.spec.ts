
import { Cmp1255Component } from './cmp';
describe('Cmp1255Component', () => {
  it('should add', () => {
    expect(new Cmp1255Component().add1255(1)).toBe(1256);
  });
});