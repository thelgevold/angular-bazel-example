
import { Cmp8166Component } from './cmp';
describe('Cmp8166Component', () => {
  it('should add', () => {
    expect(new Cmp8166Component().add8166(1)).toBe(8167);
  });
});