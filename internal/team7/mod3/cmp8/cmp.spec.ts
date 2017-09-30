
import { Cmp8738Component } from './cmp';
describe('Cmp8738Component', () => {
  it('should add', () => {
    expect(new Cmp8738Component().add8738(1)).toBe(8739);
  });
});