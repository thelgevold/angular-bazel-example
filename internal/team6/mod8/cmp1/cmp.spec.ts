
import { Cmp8681Component } from './cmp';
describe('Cmp8681Component', () => {
  it('should add', () => {
    expect(new Cmp8681Component().add8681(1)).toBe(8682);
  });
});