
import { Cmp8073Component } from './cmp';
describe('Cmp8073Component', () => {
  it('should add', () => {
    expect(new Cmp8073Component().add8073(1)).toBe(8074);
  });
});