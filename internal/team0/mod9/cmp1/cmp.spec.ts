
import { Cmp8091Component } from './cmp';
describe('Cmp8091Component', () => {
  it('should add', () => {
    expect(new Cmp8091Component().add8091(1)).toBe(8092);
  });
});