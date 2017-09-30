
import { Cmp4604Component } from './cmp';
describe('Cmp4604Component', () => {
  it('should add', () => {
    expect(new Cmp4604Component().add4604(1)).toBe(4605);
  });
});