
import { Cmp5350Component } from './cmp';
describe('Cmp5350Component', () => {
  it('should add', () => {
    expect(new Cmp5350Component().add5350(1)).toBe(5351);
  });
});