
import { Cmp8142Component } from './cmp';
describe('Cmp8142Component', () => {
  it('should add', () => {
    expect(new Cmp8142Component().add8142(1)).toBe(8143);
  });
});