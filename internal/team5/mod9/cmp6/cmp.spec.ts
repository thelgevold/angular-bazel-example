
import { Cmp8596Component } from './cmp';
describe('Cmp8596Component', () => {
  it('should add', () => {
    expect(new Cmp8596Component().add8596(1)).toBe(8597);
  });
});