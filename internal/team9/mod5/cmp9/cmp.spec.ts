
import { Cmp8959Component } from './cmp';
describe('Cmp8959Component', () => {
  it('should add', () => {
    expect(new Cmp8959Component().add8959(1)).toBe(8960);
  });
});