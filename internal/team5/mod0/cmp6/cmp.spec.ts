
import { Cmp8506Component } from './cmp';
describe('Cmp8506Component', () => {
  it('should add', () => {
    expect(new Cmp8506Component().add8506(1)).toBe(8507);
  });
});