
import { Cmp2250Component } from './cmp';
describe('Cmp2250Component', () => {
  it('should add', () => {
    expect(new Cmp2250Component().add2250(1)).toBe(2251);
  });
});