
import { Cmp8802Component } from './cmp';
describe('Cmp8802Component', () => {
  it('should add', () => {
    expect(new Cmp8802Component().add8802(1)).toBe(8803);
  });
});