
import { Cmp4255Component } from './cmp';
describe('Cmp4255Component', () => {
  it('should add', () => {
    expect(new Cmp4255Component().add4255(1)).toBe(4256);
  });
});