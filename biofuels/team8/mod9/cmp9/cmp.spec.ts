
import { Cmp1899Component } from './cmp';
describe('Cmp1899Component', () => {
  it('should add', () => {
    expect(new Cmp1899Component().add1899(1)).toBe(1900);
  });
});