
import { Cmp9701Component } from './cmp';
describe('Cmp9701Component', () => {
  it('should add', () => {
    expect(new Cmp9701Component().add9701(1)).toBe(9702);
  });
});