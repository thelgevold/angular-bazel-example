
import { Cmp4790Component } from './cmp';
describe('Cmp4790Component', () => {
  it('should add', () => {
    expect(new Cmp4790Component().add4790(1)).toBe(4791);
  });
});