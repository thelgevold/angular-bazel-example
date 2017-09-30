
import { Cmp8805Component } from './cmp';
describe('Cmp8805Component', () => {
  it('should add', () => {
    expect(new Cmp8805Component().add8805(1)).toBe(8806);
  });
});