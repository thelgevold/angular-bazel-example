
import { Cmp8968Component } from './cmp';
describe('Cmp8968Component', () => {
  it('should add', () => {
    expect(new Cmp8968Component().add8968(1)).toBe(8969);
  });
});