
import { Cmp8092Component } from './cmp';
describe('Cmp8092Component', () => {
  it('should add', () => {
    expect(new Cmp8092Component().add8092(1)).toBe(8093);
  });
});