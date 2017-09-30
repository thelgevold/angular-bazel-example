
import { Cmp5883Component } from './cmp';
describe('Cmp5883Component', () => {
  it('should add', () => {
    expect(new Cmp5883Component().add5883(1)).toBe(5884);
  });
});