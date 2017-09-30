
import { Cmp7790Component } from './cmp';
describe('Cmp7790Component', () => {
  it('should add', () => {
    expect(new Cmp7790Component().add7790(1)).toBe(7791);
  });
});