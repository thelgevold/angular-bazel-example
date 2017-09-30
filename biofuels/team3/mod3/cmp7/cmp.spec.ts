
import { Cmp1337Component } from './cmp';
describe('Cmp1337Component', () => {
  it('should add', () => {
    expect(new Cmp1337Component().add1337(1)).toBe(1338);
  });
});