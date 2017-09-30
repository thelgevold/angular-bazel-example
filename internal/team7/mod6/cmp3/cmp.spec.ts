
import { Cmp8763Component } from './cmp';
describe('Cmp8763Component', () => {
  it('should add', () => {
    expect(new Cmp8763Component().add8763(1)).toBe(8764);
  });
});