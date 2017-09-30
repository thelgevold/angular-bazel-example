
import { Cmp8038Component } from './cmp';
describe('Cmp8038Component', () => {
  it('should add', () => {
    expect(new Cmp8038Component().add8038(1)).toBe(8039);
  });
});