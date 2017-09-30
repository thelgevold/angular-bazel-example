
import { Cmp8066Component } from './cmp';
describe('Cmp8066Component', () => {
  it('should add', () => {
    expect(new Cmp8066Component().add8066(1)).toBe(8067);
  });
});