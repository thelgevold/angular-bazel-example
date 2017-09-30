
import { Cmp8682Component } from './cmp';
describe('Cmp8682Component', () => {
  it('should add', () => {
    expect(new Cmp8682Component().add8682(1)).toBe(8683);
  });
});