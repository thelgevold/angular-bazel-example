
import { Cmp8325Component } from './cmp';
describe('Cmp8325Component', () => {
  it('should add', () => {
    expect(new Cmp8325Component().add8325(1)).toBe(8326);
  });
});