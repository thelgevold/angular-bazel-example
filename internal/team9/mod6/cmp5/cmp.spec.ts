
import { Cmp8965Component } from './cmp';
describe('Cmp8965Component', () => {
  it('should add', () => {
    expect(new Cmp8965Component().add8965(1)).toBe(8966);
  });
});