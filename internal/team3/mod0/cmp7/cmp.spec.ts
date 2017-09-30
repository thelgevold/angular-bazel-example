
import { Cmp8307Component } from './cmp';
describe('Cmp8307Component', () => {
  it('should add', () => {
    expect(new Cmp8307Component().add8307(1)).toBe(8308);
  });
});