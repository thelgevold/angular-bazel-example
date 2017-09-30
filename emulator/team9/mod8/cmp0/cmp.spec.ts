
import { Cmp4980Component } from './cmp';
describe('Cmp4980Component', () => {
  it('should add', () => {
    expect(new Cmp4980Component().add4980(1)).toBe(4981);
  });
});