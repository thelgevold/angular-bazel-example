
import { Cmp8174Component } from './cmp';
describe('Cmp8174Component', () => {
  it('should add', () => {
    expect(new Cmp8174Component().add8174(1)).toBe(8175);
  });
});