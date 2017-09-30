
import { Cmp5090Component } from './cmp';
describe('Cmp5090Component', () => {
  it('should add', () => {
    expect(new Cmp5090Component().add5090(1)).toBe(5091);
  });
});