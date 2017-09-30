
import { Cmp8370Component } from './cmp';
describe('Cmp8370Component', () => {
  it('should add', () => {
    expect(new Cmp8370Component().add8370(1)).toBe(8371);
  });
});