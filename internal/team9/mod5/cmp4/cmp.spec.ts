
import { Cmp8954Component } from './cmp';
describe('Cmp8954Component', () => {
  it('should add', () => {
    expect(new Cmp8954Component().add8954(1)).toBe(8955);
  });
});