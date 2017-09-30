
import { Cmp8601Component } from './cmp';
describe('Cmp8601Component', () => {
  it('should add', () => {
    expect(new Cmp8601Component().add8601(1)).toBe(8602);
  });
});