
import { Cmp8300Component } from './cmp';
describe('Cmp8300Component', () => {
  it('should add', () => {
    expect(new Cmp8300Component().add8300(1)).toBe(8301);
  });
});