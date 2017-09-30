
import { Cmp8875Component } from './cmp';
describe('Cmp8875Component', () => {
  it('should add', () => {
    expect(new Cmp8875Component().add8875(1)).toBe(8876);
  });
});