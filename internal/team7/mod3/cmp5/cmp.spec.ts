
import { Cmp8735Component } from './cmp';
describe('Cmp8735Component', () => {
  it('should add', () => {
    expect(new Cmp8735Component().add8735(1)).toBe(8736);
  });
});