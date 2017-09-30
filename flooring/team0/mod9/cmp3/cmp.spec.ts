
import { Cmp5093Component } from './cmp';
describe('Cmp5093Component', () => {
  it('should add', () => {
    expect(new Cmp5093Component().add5093(1)).toBe(5094);
  });
});