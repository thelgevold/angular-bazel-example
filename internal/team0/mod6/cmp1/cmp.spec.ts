
import { Cmp8061Component } from './cmp';
describe('Cmp8061Component', () => {
  it('should add', () => {
    expect(new Cmp8061Component().add8061(1)).toBe(8062);
  });
});