
import { Cmp8338Component } from './cmp';
describe('Cmp8338Component', () => {
  it('should add', () => {
    expect(new Cmp8338Component().add8338(1)).toBe(8339);
  });
});