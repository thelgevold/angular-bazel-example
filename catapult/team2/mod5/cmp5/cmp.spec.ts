
import { Cmp2255Component } from './cmp';
describe('Cmp2255Component', () => {
  it('should add', () => {
    expect(new Cmp2255Component().add2255(1)).toBe(2256);
  });
});