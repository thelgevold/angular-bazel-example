
import { Cmp8671Component } from './cmp';
describe('Cmp8671Component', () => {
  it('should add', () => {
    expect(new Cmp8671Component().add8671(1)).toBe(8672);
  });
});