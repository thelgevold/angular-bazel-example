
import { Cmp8565Component } from './cmp';
describe('Cmp8565Component', () => {
  it('should add', () => {
    expect(new Cmp8565Component().add8565(1)).toBe(8566);
  });
});