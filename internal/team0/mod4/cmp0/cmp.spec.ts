
import { Cmp8040Component } from './cmp';
describe('Cmp8040Component', () => {
  it('should add', () => {
    expect(new Cmp8040Component().add8040(1)).toBe(8041);
  });
});