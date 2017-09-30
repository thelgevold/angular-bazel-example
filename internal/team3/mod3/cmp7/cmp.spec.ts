
import { Cmp8337Component } from './cmp';
describe('Cmp8337Component', () => {
  it('should add', () => {
    expect(new Cmp8337Component().add8337(1)).toBe(8338);
  });
});