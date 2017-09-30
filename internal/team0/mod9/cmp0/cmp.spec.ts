
import { Cmp8090Component } from './cmp';
describe('Cmp8090Component', () => {
  it('should add', () => {
    expect(new Cmp8090Component().add8090(1)).toBe(8091);
  });
});