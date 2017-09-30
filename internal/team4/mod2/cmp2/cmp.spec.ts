
import { Cmp8422Component } from './cmp';
describe('Cmp8422Component', () => {
  it('should add', () => {
    expect(new Cmp8422Component().add8422(1)).toBe(8423);
  });
});