
import { Cmp8045Component } from './cmp';
describe('Cmp8045Component', () => {
  it('should add', () => {
    expect(new Cmp8045Component().add8045(1)).toBe(8046);
  });
});