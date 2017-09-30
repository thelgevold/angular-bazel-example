
import { Cmp2835Component } from './cmp';
describe('Cmp2835Component', () => {
  it('should add', () => {
    expect(new Cmp2835Component().add2835(1)).toBe(2836);
  });
});