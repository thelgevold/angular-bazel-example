
import { Cmp5899Component } from './cmp';
describe('Cmp5899Component', () => {
  it('should add', () => {
    expect(new Cmp5899Component().add5899(1)).toBe(5900);
  });
});