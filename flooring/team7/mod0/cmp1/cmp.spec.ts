
import { Cmp5701Component } from './cmp';
describe('Cmp5701Component', () => {
  it('should add', () => {
    expect(new Cmp5701Component().add5701(1)).toBe(5702);
  });
});