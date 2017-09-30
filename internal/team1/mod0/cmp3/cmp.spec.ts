
import { Cmp8103Component } from './cmp';
describe('Cmp8103Component', () => {
  it('should add', () => {
    expect(new Cmp8103Component().add8103(1)).toBe(8104);
  });
});