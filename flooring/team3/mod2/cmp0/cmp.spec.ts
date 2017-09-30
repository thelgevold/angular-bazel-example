
import { Cmp5320Component } from './cmp';
describe('Cmp5320Component', () => {
  it('should add', () => {
    expect(new Cmp5320Component().add5320(1)).toBe(5321);
  });
});