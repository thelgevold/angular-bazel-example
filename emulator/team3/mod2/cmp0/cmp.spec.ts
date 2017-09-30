
import { Cmp4320Component } from './cmp';
describe('Cmp4320Component', () => {
  it('should add', () => {
    expect(new Cmp4320Component().add4320(1)).toBe(4321);
  });
});