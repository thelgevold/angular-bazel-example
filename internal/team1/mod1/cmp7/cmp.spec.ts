
import { Cmp8117Component } from './cmp';
describe('Cmp8117Component', () => {
  it('should add', () => {
    expect(new Cmp8117Component().add8117(1)).toBe(8118);
  });
});