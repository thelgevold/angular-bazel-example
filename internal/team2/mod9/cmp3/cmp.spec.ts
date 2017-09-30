
import { Cmp8293Component } from './cmp';
describe('Cmp8293Component', () => {
  it('should add', () => {
    expect(new Cmp8293Component().add8293(1)).toBe(8294);
  });
});