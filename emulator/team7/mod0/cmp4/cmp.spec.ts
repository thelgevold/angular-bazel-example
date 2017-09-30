
import { Cmp4704Component } from './cmp';
describe('Cmp4704Component', () => {
  it('should add', () => {
    expect(new Cmp4704Component().add4704(1)).toBe(4705);
  });
});