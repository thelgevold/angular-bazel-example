
import { Cmp9290Component } from './cmp';
describe('Cmp9290Component', () => {
  it('should add', () => {
    expect(new Cmp9290Component().add9290(1)).toBe(9291);
  });
});