
import { Cmp9280Component } from './cmp';
describe('Cmp9280Component', () => {
  it('should add', () => {
    expect(new Cmp9280Component().add9280(1)).toBe(9281);
  });
});