
import { Cmp5920Component } from './cmp';
describe('Cmp5920Component', () => {
  it('should add', () => {
    expect(new Cmp5920Component().add5920(1)).toBe(5921);
  });
});