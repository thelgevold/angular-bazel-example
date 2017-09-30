
import { Cmp4180Component } from './cmp';
describe('Cmp4180Component', () => {
  it('should add', () => {
    expect(new Cmp4180Component().add4180(1)).toBe(4181);
  });
});